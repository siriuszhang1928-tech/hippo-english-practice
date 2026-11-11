/* 河马英语练习 — 邮箱登录后，年级、打卡、错题和上次小测记在账号里。 */
(function () {
  "use strict";

  var DATA = window.HIPPO || {};
  var LOGIC = window.HippoLogic;
  var PASS = 0.6;
  var WORD_N = 8;
  var GRAM_N = 8;
  var WRONG_CAP = 200;
  var EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  var $ = function (id) {
    return document.getElementById(id);
  };
  var show = function (id) {
    document.querySelectorAll(".wrap").forEach(function (el) {
      el.hidden = el.id !== id;
    });
    window.scrollTo(0, 0);
  };

  var auth = null;
  var db = null;
  var authUser = null;
  var authMode = "login";
  var profileReady = false;
  var profile = emptyProfile();
  var wrongBook = [];
  var clockOffset = 0;
  var clockReady = false;
  var clockTimer = null;
  var clockTask = null;

  var grade = null;
  var level = null;
  var quiz = [];
  var answers = [];
  var qIndex = 0;
  var goingBack = false;

  var wordSet = [];
  var wordIdx = 0;
  var wordScore = 0;
  var wordShift = 0;
  var wordFinished = false;

  var gramSet = [];
  var gramIdx = 0;
  var gramScore = 0;
  var gramShift = 0;
  var gramFinished = false;

  function emptyProfile() {
    return {
      grade: null,
      wordStreak: { streak: 0, last: "" },
      gramStreak: { streak: 0, last: "" },
      lastTest: null,
    };
  }

  function ts() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
  function userRef() {
    return db.collection("users").doc(authUser.uid);
  }
  function wrongCol() {
    return userRef().collection("wrong");
  }

  function showSaveNote(msg) {
    var el = $("save-note");
    if (!el) return;
    if (!msg) {
      el.hidden = true;
      el.textContent = "";
      return;
    }
    el.hidden = false;
    el.textContent = msg;
  }

  function firestoreError(err) {
    var code = err && err.code;
    if (code === "permission-denied") return "账号数据被拒绝保存，请退出后重新登录再试。";
    if (code === "unavailable" || code === "deadline-exceeded") return "网络不稳定，数据没有保存。";
    if (err && err.message === "no-email") return "这个账号没有邮箱，没法建立练习档案。";
    return "数据没有保存，请检查网络后再试。";
  }

  function authErrorText(err) {
    var code = err && err.code;
    var map = {
      "auth/invalid-email": "邮箱格式不正确。",
      "auth/missing-email": "请填写邮箱。",
      "auth/missing-password": "请填写密码。",
      "auth/email-already-in-use": "这个邮箱已经注册过，请直接登录。",
      "auth/weak-password": "密码至少 6 位。",
      "auth/user-not-found": "没有找到这个账号，请先注册。",
      "auth/wrong-password": "密码不正确。",
      "auth/invalid-credential": "邮箱或密码不正确。",
      "auth/invalid-login-credentials": "邮箱或密码不正确。",
      "auth/too-many-requests": "尝试次数太多，请稍后再试。",
      "auth/network-request-failed": "网络不通，请检查网络后再试。",
      "auth/user-disabled": "这个账号已被停用。",
      "auth/operation-not-allowed": "邮箱登录暂未开放。",
      "auth/requires-recent-login": "请重新登录后再试。",
    };
    return map[code] || "操作没有成功，请稍后再试。";
  }

  function setAuthMessage(text, ok) {
    var el = $("auth-msg");
    if (!text) {
      el.hidden = true;
      el.textContent = "";
      el.className = "auth-msg";
      return;
    }
    el.hidden = false;
    el.textContent = text;
    el.className = "auth-msg " + (ok ? "ok" : "err");
  }

  function setAuthMode(mode) {
    authMode = mode === "register" ? "register" : "login";
    $("tab-login").classList.toggle("on", authMode === "login");
    $("tab-register").classList.toggle("on", authMode === "register");
    $("auth-title").textContent = authMode === "register" ? "注册练习账号" : "登录";
    $("auth-submit").textContent = authMode === "register" ? "注册" : "登录";
    $("auth-password").setAttribute("autocomplete", authMode === "register" ? "new-password" : "current-password");
    $("btn-forgot").hidden = authMode === "register";
  }

  function openAuth() {
    setAuthMode(authMode || "login");
    show("screen-auth");
  }

  function formatShanghai(ms) {
    var d = new Date(ms);
    var date = new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).format(d);
    var time = new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(d);
    return "上海时间 " + date + " " + time;
  }

  function paintClock() {
    var el = $("live-clock");
    if (!el) return;
    if (!authUser) {
      el.textContent = "登录后显示上海时间";
      return;
    }
    if (!clockReady) {
      el.textContent = "正在校准上海时间…";
      return;
    }
    el.textContent = formatShanghai(Date.now() + clockOffset);
  }

  function startClockTimer() {
    paintClock();
    if (clockTimer) return;
    clockTimer = setInterval(paintClock, 1000);
  }

  function syncedNow() {
    if (!clockReady) throw new Error("clock");
    return Date.now() + clockOffset;
  }
  function todayStr() {
    return LOGIC.shanghaiYmd(syncedNow());
  }
  function yesterdayStr() {
    return LOGIC.yesterdayYmd(syncedNow());
  }

  function applyClockFrom(serverMs, t0, t1) {
    if (typeof serverMs !== "number" || !isFinite(serverMs)) throw new Error("no-server-time");
    clockOffset = serverMs - Math.round((t0 + t1) / 2);
    clockReady = true;
    paintClock();
  }

  function ensureClock() {
    if (!authUser || !db) return Promise.reject(new Error("need-auth"));
    if (clockTask) return clockTask;
    clockTask = (async function () {
      var ref = userRef();
      var t0 = Date.now();
      await ref.update({ serverNow: ts(), updatedAt: ts() });
      var t1 = Date.now();
      var snap = await ref.get({ source: "server" });
      var serverNow = snap.get("serverNow");
      var serverMs = serverNow && serverNow.toMillis ? serverNow.toMillis() : NaN;
      applyClockFrom(serverMs, t0, t1);
    })().finally(function () {
      clockTask = null;
    });
    return clockTask;
  }

  function validStreak(m) {
    if (!m || typeof m.streak !== "number" || typeof m.last !== "string") return { streak: 0, last: "" };
    return { streak: m.streak, last: m.last };
  }

  function applyProfile(data) {
    data = data || {};
    profile.grade = typeof data.grade === "number" ? data.grade : null;
    profile.wordStreak = validStreak(data.wordStreak);
    profile.gramStreak = validStreak(data.gramStreak);
    profile.lastTest = data.lastTest || null;
  }

  async function ensureUserDoc() {
    var ref = userRef();
    var snap = await ref.get({ source: "server" });
    if (snap.exists) return snap.data() || {};
    if (!authUser.email) throw new Error("no-email");
    var t0 = Date.now();
    try {
      await ref.set({
        email: authUser.email,
        createdAt: ts(),
        updatedAt: ts(),
        serverNow: ts(),
      });
    } catch (err) {
      var again = await ref.get({ source: "server" });
      if (!again.exists) throw err;
      return again.data() || {};
    }
    var t1 = Date.now();
    var fresh = await ref.get({ source: "server" });
    var serverNow = fresh.get("serverNow");
    var serverMs = serverNow && serverNow.toMillis ? serverNow.toMillis() : NaN;
    applyClockFrom(serverMs, t0, t1);
    return fresh.data() || {};
  }

  async function loadWrong() {
    var snap = await wrongCol().get({ source: "server" });
    var items = [];
    snap.forEach(function (doc) {
      var d = doc.data() || {};
      items.push({
        id: doc.id,
        kind: d.kind || "",
        level: d.level || "",
        en: d.en || "",
        zh: d.zh || "",
        prompt: d.prompt || "",
        explain: d.explain || "",
        answer: Array.isArray(d.answer) ? d.answer : [],
        user: Array.isArray(d.user) ? d.user : [],
        options: Array.isArray(d.options) ? d.options : [],
        at: d.at && typeof d.at.toMillis === "function" ? d.at.toMillis() : 0,
      });
    });
    items.sort(function (a, b) {
      return b.at - a.at;
    });
    wrongBook = items;
    if (wrongBook.length > WRONG_CAP) {
      await trimWrongTo(WRONG_CAP);
    }
  }

  async function loadAccount() {
    var data = await ensureUserDoc();
    applyProfile(data);
    await loadWrong();
    profileReady = true;
    if (!clockReady) await ensureClock();
  }

  function renderAccount() {
    var loggedIn = !!(authUser && authUser.email);
    $("account-logged-out").hidden = loggedIn;
    $("account-logged-in").hidden = !loggedIn;
    $("who-email").textContent = loggedIn ? authUser.email : "";
    var gate = $("gate-note");
    if (gate) {
      gate.textContent = loggedIn
        ? "练习进度记在当前账号里。打卡日期按上海时间，不看这台设备自己的时钟。"
        : "小测、单词打卡、语法打卡和错题本需要登录。注册只保存练习进度，不是官方比赛报名。";
    }
    paintClock();
  }

  function renderLastTest() {
    var el = $("home-last");
    var t = profile.lastTest;
    if (!authUser || !t || typeof t.pct !== "number" || typeof t.right !== "number" || typeof t.total !== "number") {
      el.hidden = true;
      el.textContent = "";
      return;
    }
    var band = LOGIC.accuracyBand(t.right, t.total);
    var lv = (DATA.levels || []).filter(function (item) {
      return item.id === t.level;
    })[0];
    var name = lv ? lv.name : t.level || "";
    var weak = t.weak && t.weak.length ? "，更弱：" + t.weak.join("、") : "";
    el.hidden = false;
    el.textContent = "上次小测" + (name ? "（" + name + "）" : "") + "正确率 " + Math.round(t.pct) + "%（" + band.label + "）" + weak;
  }

  function resetSession() {
    authUser = null;
    profileReady = false;
    profile = emptyProfile();
    wrongBook = [];
    clockReady = false;
    clockOffset = 0;
    grade = null;
    level = null;
  }

  async function onAuth(user) {
    showSaveNote("");
    if (!user) {
      var wasIn = !!authUser;
      if (!wasIn) {
        renderAccount();
        paintClock();
        return;
      }
      resetSession();
      renderAccount();
      setGrade(null, false);
      renderLastTest();
      goHome();
      return;
    }
    authUser = user;
    profileReady = false;
    clockReady = false;
    renderAccount();
    $("live-clock").textContent = "正在校准上海时间…";
    var chosen = grade;
    var fromAuth = !$("screen-auth").hidden;
    try {
      await loadAccount();
    } catch (err) {
      var clockOnly = profileReady;
      showSaveNote(clockOnly ? "上海时间没有校准成功，打卡先不可用。小测和错题本可以先用。" : firestoreError(err));
      if (!clockOnly) setAuthMessage(firestoreError(err));
      renderAccount();
    }
    if (profileReady) {
      if (profile.grade) setGrade(profile.grade, false);
      else if (chosen) setGrade(chosen, true);
      else setGrade(grade, false);
      renderLastTest();
      renderAccount();
      if (fromAuth) {
        $("auth-password").value = "";
        goHome();
      }
    }
  }

  function levelByGrade(g) {
    return (DATA.levels || []).filter(function (lv) {
      return lv.grades.indexOf(Number(g)) >= 0;
    })[0];
  }

  function fillGradeSelect(sel) {
    var grades = [];
    (DATA.levels || []).forEach(function (lv) {
      lv.grades.forEach(function (g) {
        grades.push({ g: g, lv: lv });
      });
    });
    sel.innerHTML = '<option value="">请选择你的年级</option>';
    grades.forEach(function (row) {
      var o = document.createElement("option");
      o.value = String(row.g);
      o.textContent = "G" + row.g + "  ·  " + row.lv.name + "（" + row.lv.cefr + "）";
      sel.appendChild(o);
    });
  }

  function tagText(lv) {
    if (!lv) return "";
    return "你将挑战  ·  <b>" + lv.name + "</b>  ·  共 6 道真题";
  }

  function applyGrade(g, tagEl, wrapEl) {
    var lv = levelByGrade(g);
    var sel = wrapEl ? wrapEl.querySelector("select") : null;
    if (sel) {
      if (g) sel.classList.add("on");
      else sel.classList.remove("on");
    }
    if (tagEl) {
      if (lv) {
        tagEl.innerHTML = tagText(lv);
        tagEl.classList.add("show");
      } else {
        tagEl.innerHTML = "";
        tagEl.classList.remove("show");
      }
    }
    var loggedOut = !authUser;
    document.querySelectorAll("#home-mods .mod-card").forEach(function (btn) {
      btn.disabled = loggedOut ? false : !lv;
    });
    var start = $("btn-start");
    if (start) start.disabled = !lv;
    return lv;
  }

  function persistGrade(g) {
    var payload = { updatedAt: ts() };
    if (typeof g === "number" && g >= 1 && g <= 12) payload.grade = g;
    else payload.grade = firebase.firestore.FieldValue.deleteField();
    return userRef().update(payload);
  }

  function setGrade(g, persist) {
    grade = g ? Number(g) : null;
    level = grade ? levelByGrade(grade) : null;
    $("home-grade").value = grade ? String(grade) : "";
    $("test-grade").value = grade ? String(grade) : "";
    applyGrade(grade, $("home-level-tag"), $("home-sel-wrap"));
    applyGrade(grade, $("test-level-tag"), $("test-sel-wrap"));
    if (persist !== false && authUser && profileReady) {
      persistGrade(grade).catch(function (err) {
        showSaveNote(firestoreError(err));
      });
    }
  }

  function goHome() {
    show("screen-home");
  }

  function needAccount(message) {
    if (!auth || !db) {
      openAuth();
      setAuthMessage("登录组件没有加载出来。请检查网络后刷新页面。");
      return false;
    }
    if (!authUser) {
      openAuth();
      setAuthMessage(message || "请先用邮箱登录或注册。练习进度会记在这个账号里。");
      return false;
    }
    if (!profileReady) {
      showSaveNote("账号还在读取。若一直停在这里，请刷新页面。");
      return false;
    }
    return true;
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, "&#39;");
  }
  function formatPrompt(s) {
    return escapeHtml(s).replace(/_{3,}|______+/g, '<span class="gap">____</span>');
  }
  function clampStr(s, n) {
    return String(s == null ? "" : s).slice(0, n);
  }
  function asStringList(list, max, maxLen) {
    if (!Array.isArray(list)) return [];
    return list.slice(0, max).map(function (x) {
      return clampStr(x, maxLen);
    });
  }
  function asOptions(list) {
    if (!Array.isArray(list)) return [];
    return list.slice(0, 8).map(function (op) {
      return {
        letter: clampStr(op && op.letter, 20),
        text: clampStr(op && op.text, 2000),
      };
    });
  }

  function wrongDocId(kind, item) {
    var key = String((item && item.id) || (item && item.en) || (item && item.prompt) || "item");
    var levelId = String((level && level.id) || "na");
    var id = (kind + "_" + levelId + "_" + key).replace(/\//g, "_").replace(/\s+/g, "_");
    if (id === "." || id === "..") id = kind + "_item";
    return id.slice(0, 200);
  }

  async function trimWrongTo(maxKeep) {
    if (wrongBook.length <= maxKeep) return;
    var sorted = wrongBook.slice().sort(function (a, b) {
      return a.at - b.at;
    });
    var drop = sorted.slice(0, wrongBook.length - maxKeep);
    var dropIds = {};
    var i = 0;
    while (i < drop.length) {
      var batch = db.batch();
      drop.slice(i, i + 400).forEach(function (w) {
        dropIds[w.id] = true;
        batch.delete(wrongCol().doc(w.id));
      });
      await batch.commit();
      i += 400;
    }
    wrongBook = wrongBook.filter(function (w) {
      return !dropIds[w.id];
    });
  }

  async function addWrong(kind, item, userAns) {
    if (!authUser || !profileReady) return;
    var id = wrongDocId(kind, item);
    if (!id || wrongBook.some(function (w) { return w.id === id; })) return;
    await trimWrongTo(WRONG_CAP - 1);
    var payload = {
      kind: kind,
      level: clampStr(level ? level.id : "", 40),
      en: clampStr(item.en || "", 200),
      zh: clampStr(item.zh || "", 500),
      prompt: clampStr(item.prompt || "", 2000),
      explain: clampStr(item.explain || "", 2000),
      answer: asStringList(item.answer || [], 8, 200),
      user: asStringList(userAns || [], 8, 200),
      options: asOptions(item.options || []),
      at: ts(),
    };
    try {
      await wrongCol().doc(id).set(payload);
    } catch (err) {
      if (err && err.code === "permission-denied") {
        var existing = await wrongCol().doc(id).get();
        if (existing.exists) return;
      }
      throw err;
    }
    wrongBook.unshift({
      id: id,
      kind: payload.kind,
      level: payload.level,
      en: payload.en,
      zh: payload.zh,
      prompt: payload.prompt,
      explain: payload.explain,
      answer: payload.answer,
      user: payload.user,
      options: payload.options,
      at: Date.now() + (clockReady ? clockOffset : 0),
    });
    if (wrongBook.length > WRONG_CAP) wrongBook = wrongBook.slice(0, WRONG_CAP);
  }

  async function clearWrong() {
    while (true) {
      var snap = await wrongCol().limit(400).get({ source: "server" });
      if (snap.empty) break;
      var batch = db.batch();
      snap.docs.forEach(function (d) {
        batch.delete(d.ref);
      });
      await batch.commit();
      if (snap.size < 400) break;
    }
    wrongBook = [];
  }

  function kindLabel(kind) {
    if (kind === "word") return "单词";
    if (kind === "grammar") return "语法";
    if (kind === "test") return "小测";
    return "练习";
  }

  function renderWrong() {
    var box = $("wrong-body");
    var book = wrongBook;
    if (!book.length) {
      box.innerHTML = '<div class="empty">还没有错题。做完小测或打卡后，答错的题目会出现在这里，并记在当前账号里。</div>';
      return;
    }
    box.innerHTML = book
      .map(function (w) {
        var body = "";
        if (w.kind === "word") {
          body = "<b>" + escapeHtml(w.en) + "</b><small>" + escapeHtml(w.zh) + "</small>";
        } else {
          body =
            "<b>" +
            escapeHtml(w.prompt || "题目") +
            "</b><small>你的答案 " +
            escapeHtml((w.user || []).join("、") || "—") +
            " · 正确答案 " +
            escapeHtml((w.answer || []).join("、")) +
            "</small>";
        }
        return '<div class="wrong-item"><span class="wrong-kind">' + kindLabel(w.kind) + "</span>" + body + "</div>";
      })
      .join("");
    var actions = document.createElement("div");
    actions.className = "wrong-actions";
    actions.innerHTML = '<button class="btn-ghost wide" type="button" id="btn-clear-wrong">清空错题本</button>';
    box.appendChild(actions);
    $("btn-clear-wrong").onclick = function () {
      if (!confirm("确定清空错题本吗？账号里的错题也会删掉。")) return;
      var btn = $("btn-clear-wrong");
      btn.disabled = true;
      btn.textContent = "正在清空…";
      clearWrong()
        .then(function () {
          renderWrong();
        })
        .catch(function (err) {
          btn.disabled = false;
          btn.textContent = "清空错题本";
          showSaveNote(firestoreError(err));
        });
    };
  }

  function openWrong() {
    if (!needAccount("请先登录或注册，再看错题本。")) return;
    renderWrong();
    show("screen-wrong");
  }

  function readStreak(key) {
    return (profile[key] && profile[key].streak) || 0;
  }

  async function bumpStreak(key) {
    await ensureClock();
    var today = todayStr();
    var yesterday = yesterdayStr();
    var ref = userRef();
    var next = await db.runTransaction(async function (tx) {
      var snap = await tx.get(ref);
      var data = snap.data() || {};
      var computed = LOGIC.nextStreak(data[key], today, yesterday);
      if (computed.changed) {
        var patch = { updatedAt: ts() };
        patch[key] = { streak: computed.streak, last: computed.last };
        tx.update(ref, patch);
      }
      return { streak: computed.streak, last: computed.last };
    });
    profile[key] = { streak: next.streak, last: next.last };
    return profile[key];
  }

  function startTest() {
    if (!needAccount("请先登录或注册，再做小测。")) return;
    if (!level) return;
    var bank = (DATA.tests && DATA.tests[level.id]) || [];
    quiz = LOGIC.shuffle(bank);
    if (quiz.length < 1) {
      alert("这个级别的样题还没有就绪。");
      return;
    }
    answers = quiz.map(function () {
      return [];
    });
    qIndex = 0;
    goingBack = false;
    renderQuestion();
    show("screen-quiz");
  }

  function optionClicked(letter, multi) {
    if (multi) {
      var cur = answers[qIndex].slice();
      var i = cur.indexOf(letter);
      if (i >= 0) cur.splice(i, 1);
      else cur.push(letter);
      cur.sort();
      answers[qIndex] = cur;
    } else {
      answers[qIndex] = [letter];
    }
    highlightOptions();
    $("btn-next").disabled = !answers[qIndex].length;
  }

  function highlightOptions() {
    var cur = answers[qIndex] || [];
    $("qcard").querySelectorAll(".opt").forEach(function (el) {
      el.classList.toggle("on", cur.indexOf(el.getAttribute("data-letter")) >= 0);
    });
  }

  function renderQuestion() {
    var q = quiz[qIndex];
    var total = quiz.length;
    $("quiz-count").textContent = qIndex + 1 + " / " + total;
    $("bar-fill").style.width = ((qIndex + 1) / total) * 100 + "%";
    $("btn-prev").style.visibility = qIndex === 0 ? "hidden" : "visible";
    var last = qIndex === total - 1;
    $("btn-next").textContent = last ? "提交答卷" : "下一题 →";
    $("btn-next").disabled = !answers[qIndex] || !answers[qIndex].length;

    var card = $("qcard");
    card.classList.remove("slide-back");
    void card.offsetWidth;
    if (goingBack) card.classList.add("slide-back");

    var multi = !!(q.multi || (q.answer && q.answer.length > 1));
    var html = '<div class="q-head"><span class="q-no">第 ' + (qIndex + 1) + " 题</span>";
    if (q.title) html += '<span class="q-name">' + escapeHtml(q.title) + "</span>";
    if (multi) html += '<span class="q-multi-tip" style="font-size:12px;color:#145a78;background:#d4f0fb;border-radius:8px;padding:3px 8px;font-weight:600">多选题</span>';
    html += "</div>";
    if (q.context) html += '<div class="q-context">' + escapeHtml(q.context) + "</div>";
    if (q.prompt) html += '<div class="q-prompt">' + formatPrompt(q.prompt) + "</div>";
    if (q.image) html += '<img class="qimg" src="' + escapeAttr(q.image) + '" alt="题目配图">';
    html += '<div class="opts">';
    (q.options || []).forEach(function (op) {
      html +=
        '<button type="button" class="opt" data-letter="' +
        escapeAttr(op.letter) +
        '"><span class="letter">' +
        escapeHtml(op.letter) +
        '</span><span class="opt-t">' +
        escapeHtml(op.text) +
        "</span></button>";
    });
    html += "</div>";
    if (q.source) html += '<span class="source">' + escapeHtml(q.source) + "</span>";
    card.innerHTML = html;
    card.querySelectorAll(".opt").forEach(function (el) {
      el.addEventListener("click", function () {
        optionClicked(el.getAttribute("data-letter"), multi);
      });
    });
    highlightOptions();
  }

  function nextQuestion() {
    if (!answers[qIndex] || !answers[qIndex].length) {
      $("qcard").classList.remove("hint-shake");
      void $("qcard").offsetWidth;
      $("qcard").classList.add("hint-shake");
      return;
    }
    if (qIndex === quiz.length - 1) {
      showResult();
      return;
    }
    goingBack = false;
    qIndex += 1;
    renderQuestion();
  }
  function prevQuestion() {
    if (qIndex === 0) return;
    goingBack = true;
    qIndex -= 1;
    renderQuestion();
  }

  function sameAns(a, k) {
    a = a || [];
    k = k || [];
    return a.length === k.length && k.every(function (x) { return a.indexOf(x) >= 0; });
  }

  function bandSentence(band, pass) {
    if (band.key === "strong") return "这 6 道里对了大部分，在这一组样题上可以算较强。达标线是正确率超过 60%，这次过了。";
    if (band.key === "pass") return "正确率超过 60%，达到及格线，但还没有到较强。";
    return pass
      ? "正确率超过 60%。"
      : "正确率没有超过 60% 的达标线，这一组样题还需要再练。";
  }

  function weakSummary(analysis) {
    var missing = [LOGIC.AREA_READ, LOGIC.AREA_GRAM].filter(function (name) {
      return analysis.buckets[name].total === 0;
    });
    var missNote = missing.length ? "「" + missing.join("、") + "」没有出现在这 6 道里，不能判断这类弱不弱。" : "";
    if (!analysis.present.length) return "这 6 道对不上现有题型标记，不做薄弱项判断。";
    if (analysis.weak.length === 2) return "两类正确率相同，而且都还有错题，所以都记为更弱的项。" + missNote;
    if (analysis.weak.length === 1) return "这次更弱的是「" + analysis.weak[0] + "」。" + missNote;
    return "出现的题型没有更弱的一类。" + missNote;
  }

  function renderEval(right, total, pass, analysis) {
    var band = LOGIC.accuracyBand(right, total);
    function line(name) {
      var b = analysis.buckets[name];
      if (!b.total) return "<li><b>" + name + "</b>：这 6 道样题里没有这一类。</li>";
      var p = Math.round((b.right / b.total) * 100);
      return "<li><b>" + name + "</b>：" + b.right + " / " + b.total + "（" + p + "%）</li>";
    }
    $("eval-block").innerHTML =
      '<p class="eval-band">准确度评价：<b class="band-' +
      band.key +
      '">' +
      band.label +
      "</b></p>" +
      '<p class="eval-note">' +
      escapeHtml(bandSentence(band, pass)) +
      "</p>" +
      '<p class="eval-h">薄弱项</p><ul class="weak-list">' +
      line(LOGIC.AREA_READ) +
      line(LOGIC.AREA_GRAM) +
      "</ul><p>" +
      escapeHtml(weakSummary(analysis)) +
      "</p><p>" +
      escapeHtml(LOGIC.suggestionFor(analysis.weak)) +
      '</p><p class="eval-note">每个级别只有 6 道样题。上面只比较这一次做出的题，不能当成完整初轮的水平。</p>';
  }

  async function saveLastTest(right, total, pct, weak) {
    await userRef().update({
      lastTest: {
        level: clampStr(level.id, 40),
        right: right,
        total: total,
        pct: pct,
        weak: weak.slice(0, 8),
        at: ts(),
      },
      updatedAt: ts(),
    });
    profile.lastTest = {
      level: level.id,
      right: right,
      total: total,
      pct: pct,
      weak: weak.slice(0, 8),
    };
    renderLastTest();
  }

  function showResult() {
    var qs = quiz;
    var right = 0;
    qs.forEach(function (q, i) {
      if (sameAns(answers[i], q.answer)) right++;
    });
    var pct = Math.round((right / qs.length) * 100);
    var pass = right / qs.length > PASS;
    var rows = qs.map(function (q, i) {
      return { item: q, ok: sameAns(answers[i], q.answer) };
    });
    var analysis = LOGIC.analyzeAttempt(rows);

    var ring = $("ring");
    var pctEl = $("pct");
    var emoji = $("res-emoji");
    var badge = $("res-badge");
    var title = $("res-title");

    emoji.style.animation = "none";
    badge.style.animation = "none";
    title.style.animation = "none";
    void emoji.offsetWidth;

    ring.classList.toggle("cool", !pass);
    ring.style.strokeDashoffset = "527.8";
    pctEl.className = pass ? "hot" : "cool";
    pctEl.textContent = "0%";
    setTimeout(function () {
      ring.style.strokeDashoffset = String(527.8 * (1 - pct / 100));
    }, 120);
    emoji.style.animation = "";
    badge.style.animation = "";
    title.style.animation = "";

    var t0 = performance.now();
    (function tick(t) {
      var p = Math.max(0, Math.min(1, (t - t0) / 1300));
      var ease = 1 - Math.pow(1 - p, 3);
      pctEl.textContent = Math.round(ease * pct) + "%";
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
    setTimeout(function () {
      pctEl.textContent = pct + "%";
    }, 1500);

    if (pass) {
      emoji.textContent = "🏆";
      badge.textContent = "🎉 恭喜达标 🎉";
      badge.classList.remove("fail");
      title.textContent = "太厉害了！";
      $("rc-lead").innerHTML =
        "恭喜你！你答对了 <em>" + right + " / " + qs.length + "</em> 题，正确率达到 <em>" + pct + "%</em>，过了 60% 的达标线。";
      launchConfetti();
    } else {
      emoji.textContent = "🌟";
      badge.textContent = "🎉 恭喜完成 🎉";
      badge.classList.add("fail");
      title.textContent = "完成挑战！";
      $("rc-lead").innerHTML =
        "不错的开始！你答对了 <em>" + right + " / " + qs.length + "</em> 题，正确率 <em>" + pct + "%</em>，还没有过 60% 的达标线。";
    }
    $("rc-body").innerHTML =
      "这 6 道题都来自 2026 年河马英语初轮真题（" +
      escapeHtml(level.name) +
      "）。下面按这一次的答题做准确度评价和薄弱项，只针对这 6 道样题。";
    renderEval(right, qs.length, pass, analysis);
    $("result-save").textContent = "正在保存到账号…";

    var table = $("ans-table");
    table.innerHTML =
      '<div class="ans-row head"><span class="cell">题号</span><span class="cell">你的答案</span><span class="cell">正确答案</span><span class="cell">结果</span></div>';
    var jobs = [];
    qs.forEach(function (q, i) {
      var a = (answers[i] || []).join("、") || "—";
      var k = (q.answer || []).join("、");
      var ok = sameAns(answers[i], q.answer);
      var row = document.createElement("div");
      row.className = "ans-row";
      row.innerHTML =
        '<span class="cell">' +
        (i + 1) +
        '</span><span class="cell">' +
        escapeHtml(a) +
        '</span><span class="cell">' +
        escapeHtml(k) +
        '</span><span class="cell ' +
        (ok ? "ok" : "no") +
        '">' +
        (ok ? "✓ 正确" : "✗ 错误") +
        "</span>";
      table.appendChild(row);
      if (!ok) jobs.push(addWrong("test", q, answers[i]));
    });
    jobs.push(saveLastTest(right, qs.length, pct, analysis.weak));
    Promise.all(jobs)
      .then(function () {
        $("result-save").textContent = "成绩和错题已记在这个账号里。";
      })
      .catch(function (err) {
        $("result-save").textContent = firestoreError(err);
      });
    show("screen-result");
  }

  function launchConfetti() {
    var cvs = $("confetti");
    if (!cvs || !cvs.getContext) return;
    var ctx = cvs.getContext("2d");
    cvs.width = innerWidth;
    cvs.height = innerHeight;
    var colors = ["#89CFF0", "#A1CAF1", "#b6e4f8", "#6ebfed", "#d4f1fb", "#7ec8ee"];
    var parts = [];
    for (var i = 0; i < 160; i++) {
      parts.push({
        x: Math.random() * cvs.width,
        y: -20 - Math.random() * cvs.height * 0.5,
        w: 6 + Math.random() * 8,
        h: 8 + Math.random() * 10,
        c: colors[i % colors.length],
        vy: 2 + Math.random() * 3.2,
        vx: -1.4 + Math.random() * 2.8,
        rot: Math.random() * Math.PI,
        vr: -0.12 + Math.random() * 0.24,
      });
    }
    var frame = 0;
    function tick() {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      parts.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (frame < 180) requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, cvs.width, cvs.height);
    }
    tick();
  }

  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function seededShuffle(arr, seed) {
    return LOGIC.shuffle(arr, mulberry32(seed));
  }
  function hashSeed(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  async function startWords(shift) {
    if (!needAccount("请先登录或注册，再做单词打卡。")) return;
    if (!level) return;
    show("screen-words");
    $("word-end").hidden = true;
    $("word-btns").hidden = true;
    $("word-card").hidden = false;
    $("word-card").innerHTML = '<div class="empty">正在校准上海时间…</div>';
    try {
      await ensureClock();
    } catch (err) {
      $("word-card").innerHTML = '<div class="empty">无法校准服务器时间，今天先不能打卡。请检查网络后返回再试。</div>';
      showSaveNote(firestoreError(err));
      return;
    }
    wordShift = shift || 0;
    var bank = (DATA.words && DATA.words[level.id]) || [];
    if (bank.length < WORD_N) {
      $("word-card").innerHTML = '<div class="empty">这个级别的单词还不够一组打卡。</div>';
      return;
    }
    var day = todayStr();
    var seed = hashSeed(level.id + "|" + day + "|" + wordShift);
    wordSet = seededShuffle(bank, seed).slice(0, WORD_N).map(assignMode);
    wordIdx = 0;
    wordScore = 0;
    wordFinished = false;
    $("word-streak").textContent = "连续 " + readStreak("wordStreak") + " 天";
    $("word-sub").textContent =
      level.name + " · " + day + "（上海）· 今日 " + WORD_N + " 个词" + (wordShift ? "（已换一组）" : "") + " · 英汉互选和拼写";
    $("word-card").hidden = false;
    renderWord();
  }

  function assignMode(w, i) {
    var modes = ["en2zh", "zh2en", "spell"];
    var mode = modes[i % 3];
    if (mode === "spell" && !(w.spell && w.spell.replace(/[^A-Za-z]/g, "").length >= 2)) mode = "en2zh";
    return Object.assign({}, w, { mode: mode });
  }

  function renderWord() {
    var w = wordSet[wordIdx];
    $("word-bar").style.width = (wordIdx / wordSet.length) * 100 + "%";
    $("word-btns").hidden = true;
    var card = $("word-card");
    card.classList.remove("slide-back");
    void card.offsetWidth;
    var html = '<div class="q-head"><span class="q-no">' + (wordIdx + 1) + " / " + wordSet.length + "</span>";
    var labels = { en2zh: "看英文选中文", zh2en: "看中文选英文", spell: "拼出这个词" };
    html += '<span class="q-name">' + labels[w.mode] + "</span></div>";

    if (w.mode === "en2zh") {
      html += '<div class="word-en">' + escapeHtml(w.en) + "</div>";
      html += '<span class="word-pos">' + escapeHtml(w.pos || "") + "</span>";
      html += optionsHtml(zhChoices(w));
    } else if (w.mode === "zh2en") {
      html += '<div class="word-zh">' + escapeHtml(w.zh) + "</div>";
      html += '<span class="word-pos">' + escapeHtml(w.pos || "") + "</span>";
      html += optionsHtml(enChoices(w));
    } else {
      html += '<div class="word-zh">' + escapeHtml(w.zh) + "</div>";
      html += '<span class="word-pos">' + escapeHtml(w.pos || "") + " · 请拼出英文单词</span>";
      html += '<div class="spell-out" id="spell-out"></div><div class="tiles" id="spell-tiles"></div>';
      html += '<button type="button" class="btn-ghost wide" id="spell-reset">重拼</button>';
    }
    card.innerHTML = html;

    if (w.mode === "spell") setupSpell(w);
    else {
      card.querySelectorAll(".opt").forEach(function (el) {
        el.addEventListener("click", function () {
          gradeWordChoice(w, el);
        });
      });
    }
  }

  function zhChoices(w) {
    var bank = DATA.words[level.id] || [];
    var others = seededShuffle(
      bank.filter(function (x) { return x.zh && x.zh !== w.zh; }),
      hashSeed(w.en + "zh")
    ).slice(0, 3);
    return seededShuffle(
      [{ t: w.zh, ok: true }].concat(others.map(function (x) { return { t: x.zh, ok: false }; })),
      hashSeed(w.en + "zh2")
    );
  }
  function enChoices(w) {
    var bank = DATA.words[level.id] || [];
    var others = seededShuffle(
      bank.filter(function (x) { return x.en.toLowerCase() !== w.en.toLowerCase(); }),
      hashSeed(w.en + "en")
    ).slice(0, 3);
    return seededShuffle(
      [{ t: w.en, ok: true }].concat(others.map(function (x) { return { t: x.en, ok: false }; })),
      hashSeed(w.en + "en2")
    );
  }
  function optionsHtml(choices) {
    var letters = ["A", "B", "C", "D"];
    return (
      '<div class="opts">' +
      choices
        .map(function (c, i) {
          return (
            '<button type="button" class="opt" data-ok="' +
            (c.ok ? "1" : "0") +
            '" data-text="' +
            escapeAttr(c.t) +
            '"><span class="letter">' +
            letters[i] +
            '</span><span class="opt-t">' +
            escapeHtml(c.t) +
            "</span></button>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function gradeWordChoice(w, el) {
    var ok = el.getAttribute("data-ok") === "1";
    $("word-card").querySelectorAll(".opt").forEach(function (o) {
      o.disabled = true;
      if (o.getAttribute("data-ok") === "1") o.classList.add("good");
    });
    if (ok) {
      el.classList.add("good");
      wordScore++;
    } else {
      el.classList.add("bad");
      addWrong("word", w, [el.getAttribute("data-text")]).catch(function (err) {
        showSaveNote(firestoreError(err));
      });
    }
    var box = document.createElement("div");
    box.className = "explain" + (ok ? "" : " bad");
    box.innerHTML =
      (ok ? "✓ 正确。" : "✗ 正确答案是「" + escapeHtml(w.mode === "en2zh" ? w.zh : w.en) + "」。") +
      " " +
      escapeHtml(w.en) +
      "  ·  " +
      escapeHtml(w.zh);
    $("word-card").appendChild(box);
    $("word-next").textContent = wordIdx === wordSet.length - 1 ? "查看结果" : "下一词 →";
    $("word-btns").hidden = false;
  }

  function setupSpell(w) {
    var target = String(w.spell || w.en).replace(/\s+/g, " ").trim();
    var letters = target.replace(/[^A-Za-z]/g, "").split("");
    var extraPool = "abcdefghijklmnopqrstuvwxyz";
    var rnd = mulberry32(hashSeed(target + "tiles"));
    var tiles = letters.map(function (ch, i) {
      return { ch: ch, i: i };
    });
    while (tiles.length < Math.min(letters.length + 3, 14)) {
      var ch = extraPool[Math.floor(rnd() * 26)];
      tiles.push({ ch: ch, i: -1 });
    }
    var shuffled = seededShuffle(tiles, hashSeed(target + "sh"));
    var picked = [];
    var out = $("spell-out");
    var wrap = $("spell-tiles");
    function renderOut() {
      out.textContent = picked.map(function (p) { return p.ch; }).join("") || " ";
    }
    function finishSpell(ok, typed) {
      wrap.querySelectorAll(".tile").forEach(function (t) {
        t.disabled = true;
      });
      var box = document.createElement("div");
      box.className = "explain" + (ok ? "" : " bad");
      if (ok) {
        wordScore++;
        box.textContent = "✓ 拼对了！" + w.en + "  ·  " + w.zh;
      } else {
        box.textContent = "✗ 你拼的是 " + typed + "，正确答案是 " + w.en + "  ·  " + w.zh;
        addWrong("word", w, [typed]).catch(function (err) {
          showSaveNote(firestoreError(err));
        });
      }
      $("word-card").appendChild(box);
      $("word-next").textContent = wordIdx === wordSet.length - 1 ? "查看结果" : "下一词 →";
      $("word-btns").hidden = false;
    }
    function check() {
      var typed = picked.map(function (p) { return p.ch; }).join("");
      var norm = function (s) {
        return s.replace(/[^A-Za-z]/g, "").toLowerCase();
      };
      if (norm(typed) === norm(target) && typed.replace(/[^A-Za-z]/g, "").length >= letters.length) finishSpell(true, typed);
      else if (typed.replace(/[^A-Za-z]/g, "").length >= letters.length) finishSpell(false, typed);
    }
    shuffled.forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "tile";
      b.textContent = t.ch;
      b.addEventListener("click", function () {
        if (b.disabled) return;
        b.disabled = true;
        picked.push(t);
        renderOut();
        check();
      });
      wrap.appendChild(b);
    });
    $("spell-reset").onclick = function () {
      if (!$("word-btns").hidden) return;
      picked.length = 0;
      wrap.querySelectorAll(".tile").forEach(function (t) {
        t.disabled = false;
      });
      renderOut();
    };
    renderOut();
  }

  async function finishWords() {
    if (wordFinished) return;
    wordFinished = true;
    $("word-bar").style.width = "100%";
    $("word-card").hidden = true;
    $("word-card").innerHTML = "";
    $("word-btns").hidden = true;
    var end = $("word-end");
    end.hidden = false;
    end.innerHTML = '<p>正在把今天的打卡记到账号…</p>';
    try {
      var rec = await bumpStreak("wordStreak");
      $("word-streak").textContent = "连续 " + rec.streak + " 天";
      end.innerHTML =
        '<div class="score-big">' +
        wordScore +
        " / " +
        wordSet.length +
        "</div><p>今日（" +
        escapeHtml(rec.last) +
        "，上海）单词打卡完成，连续打卡 " +
        rec.streak +
        ' 天。</p><button class="btn teal" id="word-again" type="button">换一组</button><button class="btn-ghost wide" id="word-home" type="button">返回首页</button>';
      $("word-again").onclick = function () {
        startWords(wordShift + 1);
      };
      $("word-home").onclick = goHome;
    } catch (err) {
      wordFinished = false;
      end.innerHTML =
        "<p>" +
        escapeHtml(firestoreError(err)) +
        '</p><button class="btn teal" id="word-retry" type="button">再试一次保存</button><button class="btn-ghost wide" id="word-home" type="button">返回首页</button>';
      $("word-retry").onclick = function () {
        finishWords();
      };
      $("word-home").onclick = goHome;
    }
  }

  async function startGrammar(shift) {
    if (!needAccount("请先登录或注册，再做词汇语法打卡。")) return;
    if (!level) return;
    show("screen-grammar");
    $("grammar-end").hidden = true;
    $("grammar-btns").hidden = true;
    $("grammar-card").innerHTML = '<div class="empty">正在校准上海时间…</div>';
    try {
      await ensureClock();
    } catch (err) {
      $("grammar-card").innerHTML = '<div class="empty">无法校准服务器时间，今天先不能打卡。请检查网络后返回再试。</div>';
      showSaveNote(firestoreError(err));
      return;
    }
    gramShift = shift || 0;
    var bank = (DATA.grammar && DATA.grammar[level.id]) || [];
    if (bank.length < 1) {
      $("grammar-card").innerHTML = '<div class="empty">这个级别的语法题还没有就绪。</div>';
      return;
    }
    var n = Math.min(GRAM_N, bank.length);
    var day = todayStr();
    var seed = hashSeed("g|" + level.id + "|" + day + "|" + gramShift);
    gramSet = seededShuffle(bank, seed).slice(0, n);
    gramIdx = 0;
    gramScore = 0;
    gramFinished = false;
    $("grammar-streak").textContent = "连续 " + readStreak("gramStreak") + " 天";
    $("grammar-sub").textContent =
      level.name + " · " + day + "（上海）· 今日 " + n + " 道初轮真题" + (gramShift ? "（已换一组）" : "");
    renderGrammar();
  }

  function renderGrammar() {
    var q = gramSet[gramIdx];
    $("grammar-bar").style.width = (gramIdx / gramSet.length) * 100 + "%";
    $("grammar-btns").hidden = true;
    var card = $("grammar-card");
    card.classList.remove("slide-back");
    void card.offsetWidth;
    var html = '<div class="q-head"><span class="q-no">' + (gramIdx + 1) + " / " + gramSet.length + "</span>";
    if (q.title) html += '<span class="q-name">' + escapeHtml(q.title) + "</span>";
    html += "</div>";
    if (q.context) html += '<div class="q-context">' + escapeHtml(q.context) + "</div>";
    if (q.prompt) html += '<div class="q-prompt">' + formatPrompt(q.prompt) + "</div>";
    html += '<div class="opts">';
    (q.options || []).forEach(function (op) {
      html +=
        '<button type="button" class="opt" data-letter="' +
        escapeAttr(op.letter) +
        '"><span class="letter">' +
        escapeHtml(op.letter) +
        '</span><span class="opt-t">' +
        escapeHtml(op.text) +
        "</span></button>";
    });
    html += "</div>";
    if (q.source) html += '<span class="source">' + escapeHtml(q.source) + "</span>";
    card.innerHTML = html;
    card.querySelectorAll(".opt").forEach(function (el) {
      el.addEventListener("click", function () {
        gradeGrammar(q, el);
      });
    });
  }

  function gradeGrammar(q, el) {
    var letter = el.getAttribute("data-letter");
    var ok = (q.answer || []).indexOf(letter) >= 0;
    $("grammar-card").querySelectorAll(".opt").forEach(function (o) {
      o.disabled = true;
      if ((q.answer || []).indexOf(o.getAttribute("data-letter")) >= 0) o.classList.add("good");
    });
    if (ok) {
      el.classList.add("good");
      gramScore++;
    } else {
      el.classList.add("bad");
      addWrong("grammar", q, [letter]).catch(function (err) {
        showSaveNote(firestoreError(err));
      });
    }
    if (q.explain || !ok) {
      var box = document.createElement("div");
      box.className = "explain" + (ok ? "" : " bad");
      box.textContent = (ok ? "✓ " : "✗ 正确答案是 " + (q.answer || []).join("、") + "。 ") + (q.explain || "");
      $("grammar-card").appendChild(box);
    }
    $("grammar-next").textContent = gramIdx === gramSet.length - 1 ? "查看结果" : "下一题 →";
    $("grammar-btns").hidden = false;
  }

  async function finishGrammar() {
    if (gramFinished) return;
    gramFinished = true;
    $("grammar-bar").style.width = "100%";
    $("grammar-btns").hidden = true;
    var end = $("grammar-end");
    end.hidden = false;
    end.innerHTML = "<p>正在把今天的打卡记到账号…</p>";
    try {
      var rec = await bumpStreak("gramStreak");
      $("grammar-streak").textContent = "连续 " + rec.streak + " 天";
      end.innerHTML =
        '<div class="score-big">' +
        gramScore +
        " / " +
        gramSet.length +
        "</div><p>今日（" +
        escapeHtml(rec.last) +
        "，上海）词汇语法打卡完成，连续打卡 " +
        rec.streak +
        ' 天。</p><button class="btn teal" id="gram-again" type="button">换一组</button><button class="btn-ghost wide" id="gram-home" type="button">返回首页</button>';
      $("gram-again").onclick = function () {
        startGrammar(gramShift + 1);
      };
      $("gram-home").onclick = goHome;
    } catch (err) {
      gramFinished = false;
      end.innerHTML =
        "<p>" +
        escapeHtml(firestoreError(err)) +
        '</p><button class="btn teal" id="gram-retry" type="button">再试一次保存</button><button class="btn-ghost wide" id="gram-home" type="button">返回首页</button>';
      $("gram-retry").onclick = function () {
        finishGrammar();
      };
      $("gram-home").onclick = goHome;
    }
  }

  function bind() {
    fillGradeSelect($("home-grade"));
    fillGradeSelect($("test-grade"));
    setGrade(null, false);

    $("home-grade").addEventListener("change", function (e) {
      setGrade(e.target.value);
    });
    $("test-grade").addEventListener("change", function (e) {
      setGrade(e.target.value);
    });

    document.querySelectorAll("#home-mods .mod-card").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var go = btn.getAttribute("data-go");
        if (go === "test") {
          if (!needAccount("请先登录或注册，再做小测。")) return;
          if (!level) return;
          show("screen-test-start");
        } else if (go === "words") startWords(0);
        else if (go === "grammar") startGrammar(0);
      });
    });
    document.querySelectorAll("[data-back=home]").forEach(function (b) {
      b.addEventListener("click", goHome);
    });
    $("btn-start").addEventListener("click", startTest);
    $("btn-next").addEventListener("click", nextQuestion);
    $("btn-prev").addEventListener("click", prevQuestion);
    $("btn-to-words").addEventListener("click", function () {
      startWords(0);
    });
    $("btn-to-grammar").addEventListener("click", function () {
      startGrammar(0);
    });
    $("btn-result-home").addEventListener("click", goHome);
    $("btn-wrongbook").addEventListener("click", openWrong);
    $("btn-materials").addEventListener("click", function () {
      show("screen-materials");
    });
    $("word-next").addEventListener("click", function () {
      if (wordIdx >= wordSet.length - 1) finishWords();
      else {
        wordIdx += 1;
        renderWord();
      }
    });
    $("grammar-next").addEventListener("click", function () {
      if (gramIdx >= gramSet.length - 1) finishGrammar();
      else {
        gramIdx += 1;
        renderGrammar();
      }
    });

    $("btn-open-auth").addEventListener("click", function () {
      setAuthMessage("");
      openAuth();
    });
    $("btn-logout").addEventListener("click", function () {
      if (!auth) return;
      auth.signOut().catch(function (err) {
        showSaveNote(authErrorText(err));
      });
    });
    $("tab-login").addEventListener("click", function () {
      setAuthMode("login");
      setAuthMessage("");
    });
    $("tab-register").addEventListener("click", function () {
      setAuthMode("register");
      setAuthMessage("");
    });
    $("auth-form").addEventListener("submit", function (e) {
      e.preventDefault();
      if (!auth) {
        setAuthMessage("登录组件没有加载出来。请检查网络后刷新页面。");
        return;
      }
      var email = $("auth-email").value.trim();
      var password = $("auth-password").value;
      setAuthMessage("");
      if (!email || !EMAIL_RE.test(email)) {
        setAuthMessage("请填写有效的邮箱。");
        return;
      }
      if (!password || password.length < 6) {
        setAuthMessage("密码至少 6 位。");
        return;
      }
      var btn = $("auth-submit");
      btn.disabled = true;
      var task =
        authMode === "register"
          ? auth.createUserWithEmailAndPassword(email, password)
          : auth.signInWithEmailAndPassword(email, password);
      task
        .then(function () {
          setAuthMessage(authMode === "register" ? "注册成功，正在进入练习…" : "登录成功，正在进入练习…", true);
        })
        .catch(function (err) {
          setAuthMessage(authErrorText(err));
        })
        .then(function () {
          btn.disabled = false;
        });
    });
    $("btn-forgot").addEventListener("click", function () {
      if (!auth) {
        setAuthMessage("登录组件没有加载出来。请检查网络后刷新页面。");
        return;
      }
      var email = $("auth-email").value.trim();
      if (!email || !EMAIL_RE.test(email)) {
        setAuthMessage("请先填写注册时用的邮箱，再发送重置邮件。");
        return;
      }
      auth
        .sendPasswordResetEmail(email)
        .then(function () {
          setAuthMessage("重置邮件已发送。请到邮箱里打开链接，设一个至少 6 位的新密码。", true);
        })
        .catch(function (err) {
          setAuthMessage(authErrorText(err));
        });
    });
  }

  function bootFirebase() {
    if (!window.firebase || !window.HIPPO_FIREBASE) {
      $("live-clock").textContent = "登录组件没有加载";
      return;
    }
    try {
      if (!firebase.apps.length) firebase.initializeApp(window.HIPPO_FIREBASE);
      auth = firebase.auth();
      auth.languageCode = "zh-CN";
      db = firebase.firestore();
    } catch (err) {
      auth = null;
      db = null;
      $("live-clock").textContent = "登录组件没有加载";
      return;
    }
    auth.onAuthStateChanged(function (user) {
      onAuth(user).catch(function (err) {
        showSaveNote(firestoreError(err));
      });
    });
    setInterval(function () {
      if (authUser && profileReady) ensureClock().catch(function () {});
    }, 5 * 60 * 1000);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible" && authUser && profileReady) {
        ensureClock().catch(function () {});
      }
    });
  }

  if (!DATA.levels || !LOGIC) {
    document.body.innerHTML =
      '<div class="wrap" style="padding-top:40px"><div class="empty">练习数据未能加载。请用本地服务器打开本页，或确认 js/data.js 与 js/logic.js 与本页在同一站点。</div></div>';
    return;
  }
  bind();
  startClockTimer();
  bootFirebase();
})();
