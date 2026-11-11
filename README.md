# 河马英语练习

这是给河马英语趣味挑战做的**练习站点**，不是 Global Association 官方报名网站，也不是官方注册页面。题目来自 2026 年初轮 Reading & Use of English 真题和官方答案，单词来自 Gatehouse Awards ESOL Cadets 单词表（Pre A1–A2），Hippo 4 / 5 的单词补充自 2026 年初轮试卷。

## 在线访问

站点发布在 GitHub Pages（仓库根目录的静态文件）：

https://siriuszhang1928-tech.github.io/hippo-english-practice/

打开上面的地址即可练习。这是练习页，不能用来报名或注册。

## 怎么在本地打开

站点文件在仓库根目录（`index.html`，以及 `css/`、`js/`、`img/`）。在仓库根目录启动一个本地静态服务器（推荐，避免部分浏览器限制 `file://` 读脚本）：

```bash
python3 -m http.server 8080
```

然后用浏览器打开：http://127.0.0.1:8080/

也可以把根目录的 `index.html` 直接拖到浏览器里打开（`file://`）。本站只用相对路径，不依赖账号、云同步或外链脚本。进度、打卡连续天数和错题本都存在浏览器的 localStorage 里。

## 三个模块

1. **初轮样题小测**  
   先选年级（1–12），对应 Baby Hippo 到 Hippo 5。共 6 道真题：可返回修改，最后一题显示「提交答卷」。正确率 **大于 60%** 算达标，达标会有彩带动画，并给出答案对照表。

2. **单词打卡**  
   按级别每天 8 个词，混合「英选中」「中选英」和拼写。可「换一组」。打卡连续天数记在本机。

3. **词汇语法打卡**  
   每天约 8 道该级别初轮真题短选择题（Use of English，以及 Hippo 2–4 的 Reading Task 1 短填空）。即时反馈。

首页还可以打开「错题本」和「学习资料」（官方学术材料二维码，不是报名码）。

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
