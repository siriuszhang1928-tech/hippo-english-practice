# 河马英语练习

这是给河马英语趣味挑战做的**练习站点**，不是 Global Association 官方报名网站，也不是官方注册页面。题目来自 2026 年初轮 Reading & Use of English 真题和官方答案，单词来自 Gatehouse Awards ESOL Cadets 单词表（Pre A1–A2），Hippo 4 / 5 的单词补充自 2026 年初轮试卷。

## 在线访问

练习站发布在 GitHub Pages（仓库根目录）。主站用邮箱登录，年级、打卡连续天数、错题和上次小测记在账号里：

https://siriuszhang1928-tech.github.io/hippo-english-practice/

不登录的样例站是改版前的页面，仍可直接练习，进度只留在这台浏览器里：

https://siriuszhang1928-tech.github.io/hippo-english-practice/sample/

两个地址都是练习页，不能用来报名或注册官方比赛。主站里的「注册」只建立练习账号。

## 怎么在本地打开

主站文件在仓库根目录（`index.html`，以及 `css/`、`js/`、`img/`）。在仓库根目录启动一个本地静态服务器：

```bash
python3 -m http.server 8080
```

然后用浏览器打开：http://localhost:8080/

主站从官方 CDN 加载 Firebase，用来做邮箱登录，并把练习数据写到当前账号。打卡用的「今天」先写入服务器时间，再换算成亚洲/上海的日期，不看设备自己的时钟。样例站在 `sample/`，路径都是相对的，不登录，进度仍在 localStorage。

## 三个模块

1. **初轮样题小测**  
   登录后选年级（1–12），对应 Baby Hippo 到 Hippo 5。共 6 道真题：每次点击开始都会重新打乱题目顺序。可返回修改，最后一题显示「提交答卷」。正确率 **大于 60%** 算达标，达标会有彩带动画，并给出答案对照表。交卷后还有准确度评价（较强 / 达标 / 还需加强），以及按题目自带标记做出的薄弱项（看图阅读、词汇语法）。每个级别只有这 6 道样题。

2. **单词打卡**  
   按级别每天 8 个词，混合「英选中」「中选英」和拼写。可「换一组」。连续天数记在登录账号里，按上海日期计算。

3. **词汇语法打卡**  
   每天约 8 道该级别初轮真题短选择题（Use of English，以及 Hippo 2–4 的 Reading Task 1 短填空）。即时反馈。连续天数同样记在账号里。

首页还可以打开「错题本」和「学习资料」（官方学术材料二维码，不是报名码）。错题本大约保留最近 200 条，清空时会删掉账号里的错题。学习资料不用登录。

## 年级对应

| 年级 | 级别 | CEFR |
| --- | --- | --- |
| 1–2 | Baby Hippo | Pre A1 YL · Starters |
| 3–4 | Little Hippo | Pre A1 YL · Starters |
| 5–6 | Hippo 1 | A1 YL · Movers |
| 7 | Hippo 2 | A1 · Movers |
| 8–9 | Hippo 3 | A2 · Flyers / KET |
| 10–11 | Hippo 4 | B1 · PET |
| 12 | Hippo 5 | B2 · FCE |

## 说明

- 2026 年 Baby Hippo 与 Little Hippo 初轮试卷题目相同（仅封面级别名不同），所以这两个级别共用官方阅读 Stage 1 答案和同一套 Use of English 答案；小测里选了不同的 6 道题。
- Hippo 1 的阅读 Task 1–5 没有采用 GA STAGE 2 答案，因为与 2026 Hippo 1 V1 明显对不上。Hippo 1 的小测和语法打卡只用了有官方 MC KEY 的 Use of English 第 31–50 题。
- 所有计分题目都能追溯到官方试卷 + 官方答案；不确定的题目没有收入。
