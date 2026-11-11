/* 河马英语练习 — 纯静态，数据在 data.js，进度只存在本机 localStorage */
(function () {
  "use strict";

  const DATA = window.HIPPO || {};
  const STORE = "hippo-practice-v1";
  const PASS = 0.6;
  const WORD_N = 8;
  const GRAM_N = 8;

  const $ = (id) => document.getElementById(id);
  const show = (id) => {
    document.querySelectorAll(".wrap").forEach((el) => {
      el.hidden = el.id !== id;
    });
    window.scrollTo(0, 0);
  };

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORE) || "{}") || {};
    } catch (e) {
      return {};
    }
  }
  function saveState(patch) {
    const s = Object.assign(loadState(), patch);
    try {
      localStorage.setItem(STORE, JSON.stringify(s));
    } catch (e) {}
    return s;
  }

  function levelByGrade(g) {
    return (DATA.levels || []).find((lv) => lv.grades.indexOf(Number(g)) >= 0);
  }
  function todayStr() {
    const d = new Date();
    const z = (n) => String(n).padStart(2, "0");
    return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate());
  }
  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function seededShuffle(arr, seed) {
    const a = arr.slice();
    const rnd = mulberry32(seed);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }
  function hashSeed(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  /* ---------- grade dropdowns ---------- */
  function fillGradeSelect(sel, current) {
    const grades = [];
    (DATA.levels || []).forEach((lv) => lv.grades.forEach((g) => grades.push({ g, lv })));
    sel.innerHTML = '<option value="">请选择你的年级</option>';
    grades.forEach(({ g, lv }) => {
      const o = document.createElement("option");
      o.value = String(g);
      o.textContent = "G" + g + "  ·  " + lv.name + "（" + lv.cefr + "）";
      sel.appendChild(o);
    });
    if (current) sel.value = String(current);
    if (sel.value) sel.classList.add("on");
  }
  function tagText(lv) {
    if (!lv) return "";
    return "你将挑战  ·  <b>" + lv.name + "</b>  ·  共 6 道真题";
  }
  function applyGrade(g, tagEl, wrapEl) {
    const lv = levelByGrade(g);
    const sel = wrapEl ? wrapEl.querySelector("select") : null;
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
    document.querySelectorAll("#home-mods .mod-card").forEach((btn) => {
      btn.disabled = !lv;
    });
    const start = $("btn-start");
    if (start) start.disabled = !lv;
    return lv;
  }

  /* ---------- screens ---------- */
  let grade = null;
  let level = null;
  let quiz = [];
  let answers = [];
  let qIndex = 0;
  let goingBack = false;

  function setGrade(g, persist) {
    grade = g ? Number(g) : null;
    level = grade ? levelByGrade(grade) : null;
    if (persist !== false) saveState({ grade: grade });
    $("home-grade").value = grade ? String(grade) : "";
    $("test-grade").value = grade ? String(grade) : "";
    applyGrade(grade, $("home-level-tag"), $("home-sel-wrap"));
    applyGrade(grade, $("test-level-tag"), $("test-sel-wrap"));
  }

  function goHome() {
    show("screen-home");
  }

  /* ---------- test ---------- */
  function startTest() {
    if (!level) return;
    quiz = (DATA.tests && DATA.tests[level.id]) || [];
    if (quiz.length < 1) {
      alert("这个级别的样题还没有就绪。");
      return;
    }
    answers = quiz.map(() => []);
    qIndex = 0;
    goingBack = false;
    renderQuestion();
    show("screen-quiz");
  }

  function optionClicked(letter, multi) {
    if (multi) {
      const cur = answers[qIndex].slice();
      const i = cur.indexOf(letter);
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
    const cur = answers[qIndex] || [];
    $("qcard").querySelectorAll(".opt").forEach((el) => {
      el.classList.toggle("on", cur.indexOf(el.getAttribute("data-letter")) >= 0);
    });
  }

  function renderQuestion() {
    const q = quiz[qIndex];
    const total = quiz.length;
    $("quiz-count").textContent = qIndex + 1 + " / " + total;
    $("bar-fill").style.width = ((qIndex + 1) / total) * 100 + "%";
    $("btn-prev").style.visibility = qIndex === 0 ? "hidden" : "visible";
    const last = qIndex === total - 1;
    $("btn-next").textContent = last ? "提交答卷" : "下一题 →";
    $("btn-next").disabled = !answers[qIndex] || !answers[qIndex].length;

    const card = $("qcard");
    card.classList.remove("slide-back");
    void card.offsetWidth;
    if (goingBack) card.classList.add("slide-back");

    const multi = !!(q.multi || (q.answer && q.answer.length > 1));
    let html = '<div class="q-head"><span class="q-no">第 ' + (qIndex + 1) + " 题</span>";
    if (q.title) html += '<span class="q-name">' + escapeHtml(q.title) + "</span>";
    if (multi) html += '<span class="q-multi-tip" style="font-size:12px;color:#145a78;background:#d4f0fb;border-radius:8px;padding:3px 8px;font-weight:600">多选题</span>';
    html += "</div>";
    if (q.context) html += '<div class="q-context">' + escapeHtml(q.context) + "</div>";
    if (q.prompt) html += '<div class="q-prompt">' + formatPrompt(q.prompt) + "</div>";
    if (q.image) html += '<img class="qimg" src="' + escapeAttr(q.image) + '" alt="题目配图">';
    html += '<div class="opts">';
    (q.options || []).forEach((op) => {
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
    card.querySelectorAll(".opt").forEach((el) => {
      el.addEventListener("click", () => optionClicked(el.getAttribute("data-letter"), multi));
    });
    highlightOptions();
  }

  function formatPrompt(s) {
    return escapeHtml(s).replace(/_{3,}|______+/g, '<span class="gap">____</span>');
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
    return a.length === k.length && k.every((x) => a.indexOf(x) >= 0);
  }

  function showResult() {
    const qs = quiz;
    let right = 0;
    qs.forEach((q, i) => {
      if (sameAns(answers[i], q.answer)) right++;
    });
    const pct = Math.round((right / qs.length) * 100);
    const pass = right / qs.length > PASS;

    const ring = $("ring");
    const pctEl = $("pct");
    const emoji = $("res-emoji");
    const badge = $("res-badge");
    const title = $("res-title");
    const card = $("result-card");

    emoji.style.animation = "none";
    badge.style.animation = "none";
    title.style.animation = "none";
    void emoji.offsetWidth;

    ring.classList.toggle("cool", !pass);
    ring.style.strokeDashoffset = "527.8";
    pctEl.className = pass ? "hot" : "cool";
    pctEl.textContent = "0%";
    setTimeout(() => {
      ring.style.strokeDashoffset = String(527.8 * (1 - pct / 100));
    }, 120);
    emoji.style.animation = "";
    badge.style.animation = "";
    title.style.animation = "";

    const t0 = performance.now();
    (function tick(t) {
      const p = Math.max(0, Math.min(1, (t - t0) / 1300));
      const ease = 1 - Math.pow(1 - p, 3);
      pctEl.textContent = Math.round(ease * pct) + "%";
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
    setTimeout(() => {
      pctEl.textContent = pct + "%";
    }, 1500);

    if (pass) {
      emoji.textContent = "🏆";
      badge.textContent = "🎉 恭喜达标 🎉";
      badge.classList.remove("fail");
      title.textContent = "太厉害了！";
      $("rc-lead").innerHTML =
        "恭喜你！你答对了 <em>" + right + " / " + qs.length + "</em> 题，正确率达到 <em>" + pct + "%</em>，表现出色！";
      $("rc-body").innerHTML =
        "这 6 道题都来自 2026 年河马英语初轮真题（" +
        escapeHtml(level.name) +
        "）。你可以接着做单词打卡和语法打卡，把这个级别练得更稳。";
      launchConfetti();
    } else {
      emoji.textContent = "🌟";
      badge.textContent = "🎉 恭喜完成 🎉";
      badge.classList.add("fail");
      title.textContent = "完成挑战！";
      $("rc-lead").innerHTML =
        "不错的开始！你答对了 <em>" + right + " / " + qs.length + "</em> 题，正确率 <em>" + pct + "%</em>。";
      $("rc-body").innerHTML =
        "初轮题目有的看图、有的考词汇和语法。先去单词打卡和语法打卡补一补，再回到小测重做一次，会更有感觉。";
    }

    const table = $("ans-table");
    table.innerHTML =
      '<div class="ans-row head"><span class="cell">题号</span><span class="cell">你的答案</span><span class="cell">正确答案</span><span class="cell">结果</span></div>';
    qs.forEach((q, i) => {
      const a = (answers[i] || []).join("、") || "—";
      const k = (q.answer || []).join("、");
      const ok = sameAns(answers[i], q.answer);
      const row = document.createElement("div");
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
      if (!ok) addWrong("test", q, answers[i]);
    });
    show("screen-result");
  }

  function launchConfetti() {
    const cvs = $("confetti");
    if (!cvs || !cvs.getContext) return;
    const ctx = cvs.getContext("2d");
    cvs.width = innerWidth;
    cvs.height = innerHeight;
    const colors = ["#89CFF0", "#A1CAF1", "#b6e4f8", "#6ebfed", "#d4f1fb", "#7ec8ee"];
    const parts = [];
    for (let i = 0; i < 160; i++) {
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
    let frame = 0;
    function tick() {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      parts.forEach((p) => {
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

  /* ---------- wrong book ---------- */
  function addWrong(kind, item, userAns) {
    const s = loadState();
    const book = s.wrong || [];
    const id = kind + ":" + (item.id || item.en || JSON.stringify(item.prompt || item));
    if (book.some((w) => w.id === id)) {
      return;
    }
    book.unshift({
      id: id,
      kind: kind,
      level: level ? level.id : "",
      en: item.en || "",
      zh: item.zh || "",
      prompt: item.prompt || "",
      answer: item.answer || [],
      user: userAns || [],
      options: item.options || [],
      explain: item.explain || "",
      at: Date.now(),
    });
    saveState({ wrong: book.slice(0, 200) });
  }

  function renderWrong() {
    const book = loadState().wrong || [];
    const box = $("wrong-body");
    if (!book.length) {
      box.innerHTML = '<div class="empty">还没有错题。做完小测或打卡后，答错的题目会出现在这里。</div>';
      return;
    }
    box.innerHTML = book
      .map((w) => {
        let body = "";
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
        return '<div class="wrong-item">' + body + "</div>";
      })
      .join("");
    const actions = document.createElement("div");
    actions.className = "wrong-actions";
    actions.innerHTML = '<button class="btn-ghost wide" type="button" id="btn-clear-wrong">清空错题本</button>';
    box.appendChild(actions);
    $("btn-clear-wrong").onclick = () => {
      if (confirm("确定清空错题本吗？")) {
        saveState({ wrong: [] });
        renderWrong();
      }
    };
  }

  /* ---------- streak helpers ---------- */
  function bumpStreak(key) {
    const s = loadState();
    const rec = s[key] || { streak: 0, last: "" };
    const today = todayStr();
    if (rec.last === today) return rec;
    const y = new Date();
    y.setDate(y.getDate() - 1);
    const z = (n) => String(n).padStart(2, "0");
    const yesterday = y.getFullYear() + "-" + z(y.getMonth() + 1) + "-" + z(y.getDate());
    rec.streak = rec.last === yesterday ? rec.streak + 1 : 1;
    rec.last = today;
    const patch = {};
    patch[key] = rec;
    saveState(patch);
    return rec;
  }
  function readStreak(key) {
    return (loadState()[key] || { streak: 0, last: "" }).streak || 0;
  }
  function doneToday(key) {
    return (loadState()[key] || {}).last === todayStr();
  }

  /* ---------- word check-in ---------- */
  let wordSet = [];
  let wordIdx = 0;
  let wordScore = 0;
  let wordShift = 0;

  function startWords(shift) {
    if (!level) return;
    wordShift = shift || 0;
    const bank = (DATA.words && DATA.words[level.id]) || [];
    if (bank.length < WORD_N) {
      $("word-card").innerHTML = '<div class="empty">这个级别的单词还不够一组打卡。</div>';
      $("word-btns").hidden = true;
      $("word-end").hidden = true;
      show("screen-words");
      return;
    }
    const seed = hashSeed(level.id + "|" + todayStr() + "|" + wordShift);
    wordSet = seededShuffle(bank, seed).slice(0, WORD_N).map(assignMode);
    wordIdx = 0;
    wordScore = 0;
    $("word-streak").textContent = "连续 " + readStreak("wordStreak") + " 天";
    $("word-sub").textContent =
      level.name + " · 今日 " + WORD_N + " 个词" + (wordShift ? "（已换一组）" : "") + " · 英汉互选和拼写";
    $("word-end").hidden = true;
    $("word-btns").hidden = true;
    renderWord();
    show("screen-words");
  }

  function assignMode(w, i) {
    const modes = ["en2zh", "zh2en", "spell"];
    let mode = modes[i % 3];
    if (mode === "spell" && !(w.spell && w.spell.replace(/[^A-Za-z]/g, "").length >= 2)) mode = "en2zh";
    return Object.assign({}, w, { mode: mode });
  }

  function renderWord() {
    const w = wordSet[wordIdx];
    $("word-bar").style.width = (wordIdx / wordSet.length) * 100 + "%";
    $("word-btns").hidden = true;
    const card = $("word-card");
    card.classList.remove("slide-back");
    void card.offsetWidth;
    let html = '<div class="q-head"><span class="q-no">' + (wordIdx + 1) + " / " + wordSet.length + "</span>";
    const labels = { en2zh: "看英文选中文", zh2en: "看中文选英文", spell: "拼出这个词" };
    html += '<span class="q-name">' + labels[w.mode] + "</span></div>";

    if (w.mode === "en2zh") {
      html += '<div class="word-en">' + escapeHtml(w.en) + "</div>";
      html += '<span class="word-pos">' + escapeHtml(w.pos || "") + "</span>";
      html += optionsHtml(zhChoices(w), "zh");
    } else if (w.mode === "zh2en") {
      html += '<div class="word-zh">' + escapeHtml(w.zh) + "</div>";
      html += '<span class="word-pos">' + escapeHtml(w.pos || "") + "</span>";
      html += optionsHtml(enChoices(w), "en");
    } else {
      html += '<div class="word-zh">' + escapeHtml(w.zh) + "</div>";
      html += '<span class="word-pos">' + escapeHtml(w.pos || "") + " · 请拼出英文单词</span>";
      html += '<div class="spell-out" id="spell-out"></div><div class="tiles" id="spell-tiles"></div>';
      html += '<button type="button" class="btn-ghost wide" id="spell-reset">重拼</button>';
    }
    card.innerHTML = html;

    if (w.mode === "spell") setupSpell(w);
    else {
      card.querySelectorAll(".opt").forEach((el) => {
        el.addEventListener("click", () => gradeWordChoice(w, el));
      });
    }
  }

  function zhChoices(w) {
    const bank = DATA.words[level.id] || [];
    const others = seededShuffle(
      bank.filter((x) => x.zh && x.zh !== w.zh),
      hashSeed(w.en + "zh")
    ).slice(0, 3);
    return seededShuffle([{ t: w.zh, ok: true }].concat(others.map((x) => ({ t: x.zh, ok: false }))), hashSeed(w.en + "zh2"));
  }
  function enChoices(w) {
    const bank = DATA.words[level.id] || [];
    const others = seededShuffle(
      bank.filter((x) => x.en.toLowerCase() !== w.en.toLowerCase()),
      hashSeed(w.en + "en")
    ).slice(0, 3);
    return seededShuffle([{ t: w.en, ok: true }].concat(others.map((x) => ({ t: x.en, ok: false }))), hashSeed(w.en + "en2"));
  }
  function optionsHtml(choices) {
    const letters = ["A", "B", "C", "D"];
    return (
      '<div class="opts">' +
      choices
        .map(
          (c, i) =>
            '<button type="button" class="opt" data-ok="' +
            (c.ok ? "1" : "0") +
            '" data-text="' +
            escapeAttr(c.t) +
            '"><span class="letter">' +
            letters[i] +
            '</span><span class="opt-t">' +
            escapeHtml(c.t) +
            "</span></button>"
        )
        .join("") +
      "</div>"
    );
  }

  function gradeWordChoice(w, el) {
    const ok = el.getAttribute("data-ok") === "1";
    $("word-card").querySelectorAll(".opt").forEach((o) => {
      o.disabled = true;
      if (o.getAttribute("data-ok") === "1") o.classList.add("good");
    });
    if (ok) {
      el.classList.add("good");
      wordScore++;
    } else {
      el.classList.add("bad");
      addWrong("word", w, [el.getAttribute("data-text")]);
    }
    const box = document.createElement("div");
    box.className = "explain" + (ok ? "" : " bad");
    box.innerHTML = (ok ? "✓ 正确。" : "✗ 正确答案是「" + escapeHtml(w.mode === "en2zh" ? w.zh : w.en) + "」。") +
      " " + escapeHtml(w.en) + "  ·  " + escapeHtml(w.zh);
    $("word-card").appendChild(box);
    $("word-next").textContent = wordIdx === wordSet.length - 1 ? "查看结果" : "下一词 →";
    $("word-btns").hidden = false;
  }

  function setupSpell(w) {
    const target = String(w.spell || w.en).replace(/\s+/g, " ").trim();
    const letters = target.replace(/[^A-Za-z]/g, "").split("");
    // include a few decoys
    const extraPool = "abcdefghijklmnopqrstuvwxyz";
    const rnd = mulberry32(hashSeed(target + "tiles"));
    const tiles = letters.map((ch, i) => ({ ch: ch, i: i }));
    while (tiles.length < Math.min(letters.length + 3, 14)) {
      const ch = extraPool[Math.floor(rnd() * 26)];
      tiles.push({ ch: ch, i: -1 });
    }
    const shuffled = seededShuffle(tiles, hashSeed(target + "sh"));
    const picked = [];
    const out = $("spell-out");
    const wrap = $("spell-tiles");
    function renderOut() {
      out.textContent = picked.map((p) => p.ch).join("") || " ";
    }
    function check() {
      const typed = picked.map((p) => p.ch).join("");
      const norm = (s) => s.replace(/[^A-Za-z]/g, "").toLowerCase();
      if (norm(typed) === norm(target) && typed.replace(/[^A-Za-z]/g, "").length >= letters.length) {
        finishSpell(true, w, typed);
      } else if (typed.replace(/[^A-Za-z]/g, "").length >= letters.length) {
        finishSpell(false, w, typed);
      }
    }
    function finishSpell(ok, w, typed) {
      wrap.querySelectorAll(".tile").forEach((t) => (t.disabled = true));
      const box = document.createElement("div");
      box.className = "explain" + (ok ? "" : " bad");
      if (ok) {
        wordScore++;
        box.textContent = "✓ 拼对了！" + w.en + "  ·  " + w.zh;
      } else {
        box.textContent = "✗ 你拼的是 " + typed + "，正确答案是 " + w.en + "  ·  " + w.zh;
        addWrong("word", w, [typed]);
      }
      $("word-card").appendChild(box);
      $("word-next").textContent = wordIdx === wordSet.length - 1 ? "查看结果" : "下一词 →";
      $("word-btns").hidden = false;
    }
    shuffled.forEach((t, idx) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "tile";
      b.textContent = t.ch;
      b.addEventListener("click", () => {
        if (b.disabled) return;
        b.disabled = true;
        picked.push(t);
        renderOut();
        check();
      });
      wrap.appendChild(b);
    });
    $("spell-reset").onclick = () => {
      if (!$("word-btns").hidden) return;
      picked.length = 0;
      wrap.querySelectorAll(".tile").forEach((t) => (t.disabled = false));
      renderOut();
    };
    renderOut();
  }

  function finishWords() {
    $("word-bar").style.width = "100%";
    $("word-card").hidden = false;
    $("word-card").innerHTML = "";
    $("word-btns").hidden = true;
    const rec = bumpStreak("wordStreak");
    $("word-streak").textContent = "连续 " + rec.streak + " 天";
    const end = $("word-end");
    end.hidden = false;
    end.innerHTML =
      '<div class="score-big">' +
      wordScore +
      " / " +
      wordSet.length +
      "</div><p>今日单词打卡完成" +
      (doneToday("wordStreak") ? "，连续打卡 " + rec.streak + " 天。" : "。") +
      '</p><button class="btn teal" id="word-again">换一组</button><button class="btn-ghost wide" id="word-home">返回首页</button>';
    $("word-again").onclick = () => {
      $("word-card").hidden = false;
      startWords(wordShift + 1);
    };
    $("word-home").onclick = goHome;
  }

  /* ---------- grammar check-in ---------- */
  let gramSet = [];
  let gramIdx = 0;
  let gramScore = 0;
  let gramShift = 0;

  function startGrammar(shift) {
    if (!level) return;
    gramShift = shift || 0;
    const bank = (DATA.grammar && DATA.grammar[level.id]) || [];
    if (bank.length < 1) {
      $("grammar-card").innerHTML = '<div class="empty">这个级别的语法题还没有就绪。</div>';
      $("grammar-btns").hidden = true;
      $("grammar-end").hidden = true;
      show("screen-grammar");
      return;
    }
    const n = Math.min(GRAM_N, bank.length);
    const seed = hashSeed("g|" + level.id + "|" + todayStr() + "|" + gramShift);
    gramSet = seededShuffle(bank, seed).slice(0, n);
    gramIdx = 0;
    gramScore = 0;
    $("grammar-streak").textContent = "连续 " + readStreak("gramStreak") + " 天";
    $("grammar-sub").textContent =
      level.name + " · 今日 " + n + " 道初轮真题" + (gramShift ? "（已换一组）" : "");
    $("grammar-end").hidden = true;
    $("grammar-btns").hidden = true;
    renderGrammar();
    show("screen-grammar");
  }

  function renderGrammar() {
    const q = gramSet[gramIdx];
    $("grammar-bar").style.width = (gramIdx / gramSet.length) * 100 + "%";
    $("grammar-btns").hidden = true;
    const card = $("grammar-card");
    card.classList.remove("slide-back");
    void card.offsetWidth;
    let html = '<div class="q-head"><span class="q-no">' + (gramIdx + 1) + " / " + gramSet.length + "</span>";
    if (q.title) html += '<span class="q-name">' + escapeHtml(q.title) + "</span>";
    html += "</div>";
    if (q.context) html += '<div class="q-context">' + escapeHtml(q.context) + "</div>";
    if (q.prompt) html += '<div class="q-prompt">' + formatPrompt(q.prompt) + "</div>";
    html += '<div class="opts">';
    (q.options || []).forEach((op) => {
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
    card.querySelectorAll(".opt").forEach((el) => {
      el.addEventListener("click", () => gradeGrammar(q, el));
    });
  }

  function gradeGrammar(q, el) {
    const letter = el.getAttribute("data-letter");
    const ok = (q.answer || []).indexOf(letter) >= 0;
    $("grammar-card").querySelectorAll(".opt").forEach((o) => {
      o.disabled = true;
      if ((q.answer || []).indexOf(o.getAttribute("data-letter")) >= 0) o.classList.add("good");
    });
    if (ok) {
      el.classList.add("good");
      gramScore++;
    } else {
      el.classList.add("bad");
      addWrong("grammar", q, [letter]);
    }
    if (q.explain || !ok) {
      const box = document.createElement("div");
      box.className = "explain" + (ok ? "" : " bad");
      box.textContent = (ok ? "✓ " : "✗ 正确答案是 " + (q.answer || []).join("、") + "。 ") + (q.explain || "");
      $("grammar-card").appendChild(box);
    }
    $("grammar-next").textContent = gramIdx === gramSet.length - 1 ? "查看结果" : "下一题 →";
    $("grammar-btns").hidden = false;
  }

  function finishGrammar() {
    $("grammar-bar").style.width = "100%";
    $("grammar-btns").hidden = true;
    const rec = bumpStreak("gramStreak");
    $("grammar-streak").textContent = "连续 " + rec.streak + " 天";
    const end = $("grammar-end");
    end.hidden = false;
    end.innerHTML =
      '<div class="score-big">' +
      gramScore +
      " / " +
      gramSet.length +
      "</div><p>今日词汇语法打卡完成" +
      (rec.streak ? "，连续打卡 " + rec.streak + " 天。" : "。") +
      '</p><button class="btn teal" id="gram-again">换一组</button><button class="btn-ghost wide" id="gram-home">返回首页</button>';
    $("gram-again").onclick = () => startGrammar(gramShift + 1);
    $("gram-home").onclick = goHome;
  }

  /* ---------- bind ---------- */
  function bind() {
    fillGradeSelect($("home-grade"), loadState().grade);
    fillGradeSelect($("test-grade"), loadState().grade);
    const saved = loadState().grade;
    if (saved) setGrade(saved, false);

    $("home-grade").addEventListener("change", (e) => setGrade(e.target.value));
    $("test-grade").addEventListener("change", (e) => setGrade(e.target.value));

    document.querySelectorAll("#home-mods .mod-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        const go = btn.getAttribute("data-go");
        if (!level) return;
        if (go === "test") show("screen-test-start");
        else if (go === "words") startWords(0);
        else if (go === "grammar") startGrammar(0);
      });
    });
    document.querySelectorAll("[data-back=home]").forEach((b) => b.addEventListener("click", goHome));
    $("btn-start").addEventListener("click", startTest);
    $("btn-next").addEventListener("click", nextQuestion);
    $("btn-prev").addEventListener("click", prevQuestion);
    $("btn-to-words").addEventListener("click", () => startWords(0));
    $("btn-to-grammar").addEventListener("click", () => startGrammar(0));
    $("btn-result-home").addEventListener("click", goHome);
    $("btn-wrongbook").addEventListener("click", () => {
      renderWrong();
      show("screen-wrong");
    });
    $("btn-materials").addEventListener("click", () => show("screen-materials"));
    $("word-next").addEventListener("click", () => {
      if (wordIdx >= wordSet.length - 1) finishWords();
      else {
        wordIdx += 1;
        renderWord();
      }
    });
    $("grammar-next").addEventListener("click", () => {
      if (gramIdx >= gramSet.length - 1) finishGrammar();
      else {
        gramIdx += 1;
        renderGrammar();
      }
    });
  }

  if (!DATA.levels) {
    document.body.innerHTML =
      '<div class="wrap" style="padding-top:40px"><div class="empty">练习数据未能加载。请用本地服务器打开 app/ 文件夹，或确认 js/data.js 与本页在同一站点。</div></div>';
    return;
  }
  bind();
})();
