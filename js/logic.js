/* 纯计算：上海日期、打卡连续天数、题目归类、准确度。不改题目内容。 */
(function (root) {
  "use strict";

  var SHANGHAI = "Asia/Shanghai";
  var DAY = 24 * 60 * 60 * 1000;
  var AREA_READ = "看图阅读";
  var AREA_GRAM = "词汇语法";

  function ymdInZone(ms, timeZone) {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(new Date(ms));
    var map = {};
    parts.forEach(function (p) {
      map[p.type] = p.value;
    });
    return map.year + "-" + map.month + "-" + map.day;
  }

  function shanghaiYmd(ms) {
    return ymdInZone(ms, SHANGHAI);
  }

  function yesterdayYmd(ms) {
    return shanghaiYmd(ms - DAY);
  }

  function nextStreak(rec, today, yesterday) {
    var streak = rec && typeof rec.streak === "number" && isFinite(rec.streak) ? rec.streak : 0;
    var last = rec && typeof rec.last === "string" ? rec.last : "";
    if (last === today) {
      return { streak: streak, last: today, changed: false };
    }
    var next = last === yesterday ? streak + 1 : 1;
    if (next < 1) next = 1;
    if (next > 10000) next = 10000;
    return { streak: next, last: today, changed: true };
  }

  function classifyItem(q) {
    var id = String((q && q.id) || "");
    if (id.indexOf("-uoe-") >= 0) return AREA_GRAM;
    var title = String((q && q.title) || "");
    var image = q && q.image;
    if (
      id.indexOf("-r1-") >= 0 ||
      id.indexOf("-r-") >= 0 ||
      title === "判断对错" ||
      title === "看图选词" ||
      (typeof image === "string" && image.length > 0)
    ) {
      return AREA_READ;
    }
    return "";
  }

  function analyzeAttempt(rows) {
    var buckets = {};
    buckets[AREA_READ] = { right: 0, total: 0 };
    buckets[AREA_GRAM] = { right: 0, total: 0 };
    var unclassified = 0;
    (rows || []).forEach(function (row) {
      var area = classifyItem(row.item);
      if (!area || !buckets[area]) {
        unclassified += 1;
        return;
      }
      buckets[area].total += 1;
      if (row.ok) buckets[area].right += 1;
    });
    var present = [AREA_READ, AREA_GRAM].filter(function (k) {
      return buckets[k].total > 0;
    });
    var weak = [];
    if (present.length === 1) {
      var only = present[0];
      if (buckets[only].right < buckets[only].total) weak = [only];
    } else if (present.length === 2) {
      var readRate = buckets[AREA_READ].right / buckets[AREA_READ].total;
      var gramRate = buckets[AREA_GRAM].right / buckets[AREA_GRAM].total;
      if (readRate < gramRate) weak = [AREA_READ];
      else if (gramRate < readRate) weak = [AREA_GRAM];
      else if (readRate < 1) weak = [AREA_READ, AREA_GRAM];
    }
    return {
      buckets: buckets,
      weak: weak,
      unclassified: unclassified,
      present: present,
    };
  }

  function accuracyBand(right, total) {
    if (!total) return { key: "work", label: "还需加强" };
    var ratio = right / total;
    if (ratio >= 0.8) return { key: "strong", label: "较强" };
    if (ratio > 0.6) return { key: "pass", label: "达标" };
    return { key: "work", label: "还需加强" };
  }

  function suggestionFor(weak) {
    var names = weak || [];
    var hasRead = names.indexOf(AREA_READ) >= 0;
    var hasGram = names.indexOf(AREA_GRAM) >= 0;
    if (hasRead && hasGram) {
      return "两类都还可以再练：去单词打卡认词，去词汇语法打卡做短选择，再打开错题本把错的看一遍。";
    }
    if (hasRead) {
      return "看图阅读是这次更弱的一类。可以去单词打卡多练认词，再在错题本里复习做错的题。";
    }
    if (hasGram) {
      return "词汇语法是这次更弱的一类。可以去词汇语法打卡做同类短选择，再在错题本里复习做错的题。";
    }
    return "这次样题里没有更弱的一类。如果错题本里有记录，还可以再看一遍。";
  }

  function shuffle(arr, rnd) {
    var a = (arr || []).slice();
    var random = rnd || Math.random;
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  var api = {
    AREA_READ: AREA_READ,
    AREA_GRAM: AREA_GRAM,
    shanghaiYmd: shanghaiYmd,
    yesterdayYmd: yesterdayYmd,
    nextStreak: nextStreak,
    classifyItem: classifyItem,
    analyzeAttempt: analyzeAttempt,
    accuracyBand: accuracyBand,
    suggestionFor: suggestionFor,
    shuffle: shuffle,
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.HippoLogic = api;
})(typeof window !== "undefined" ? window : globalThis);
