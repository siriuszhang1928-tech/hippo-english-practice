/* 河马英语练习数据：题目均来自 2026 年初轮真题与官方答案；词汇来自 Gatehouse Awards ESOL Cadets 单词表及 2026 试卷。 */
window.HIPPO = {
  "title": "河马英语练习",
  "updated": "2026-11-11",
  "levels": [
    {
      "id": "baby",
      "name": "Baby Hippo",
      "cefr": "Pre A1 YL · Starters",
      "grades": [
        1,
        2
      ],
      "gradeLabel": "1–2 年级"
    },
    {
      "id": "little",
      "name": "Little Hippo",
      "cefr": "Pre A1 YL · Starters",
      "grades": [
        3,
        4
      ],
      "gradeLabel": "3–4 年级"
    },
    {
      "id": "hippo1",
      "name": "Hippo 1",
      "cefr": "A1 YL · Movers",
      "grades": [
        5,
        6
      ],
      "gradeLabel": "5–6 年级"
    },
    {
      "id": "hippo2",
      "name": "Hippo 2",
      "cefr": "A1 · Movers",
      "grades": [
        7
      ],
      "gradeLabel": "7 年级"
    },
    {
      "id": "hippo3",
      "name": "Hippo 3",
      "cefr": "A2 · Flyers / KET",
      "grades": [
        8,
        9
      ],
      "gradeLabel": "8–9 年级"
    },
    {
      "id": "hippo4",
      "name": "Hippo 4",
      "cefr": "B1 · PET",
      "grades": [
        10,
        11
      ],
      "gradeLabel": "10–11 年级"
    },
    {
      "id": "hippo5",
      "name": "Hippo 5",
      "cefr": "B2 · FCE",
      "grades": [
        12
      ],
      "gradeLabel": "12 年级"
    }
  ],
  "tests": {
    "baby": [
      {
        "id": "baby-r-01",
        "title": "判断对错",
        "prompt": "Look at the picture. Is the sentence true or false?\nThis is a basketball.",
        "image": "img/q/baby-01.jpg",
        "options": [
          {
            "letter": "A",
            "text": "True  正确"
          },
          {
            "letter": "B",
            "text": "False  错误"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "图中是篮球，句子正确。",
        "source": "2026 Preliminary Baby / Little Hippo Reading（Cadets Stage 1）+ GA STAGE 1 KEY",
        "multi": false
      },
      {
        "id": "baby-r-03",
        "title": "判断对错",
        "prompt": "Look at the picture. Is the sentence true or false?\nThis is a frog.",
        "image": "img/q/baby-03.jpg",
        "options": [
          {
            "letter": "A",
            "text": "True  正确"
          },
          {
            "letter": "B",
            "text": "False  错误"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "图中是鳄鱼，不是青蛙，句子错误。",
        "source": "2026 Preliminary Baby / Little Hippo Reading（Cadets Stage 1）+ GA STAGE 1 KEY",
        "multi": false
      },
      {
        "id": "baby-r-08",
        "title": "看图选词",
        "prompt": "This is a ______________.",
        "image": "img/q/baby-08.jpg",
        "options": [
          {
            "letter": "A",
            "text": "bike"
          },
          {
            "letter": "B",
            "text": "kite"
          },
          {
            "letter": "C",
            "text": "skateboard"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "图中是风筝 kite。",
        "source": "2026 Preliminary Baby / Little Hippo Reading（Cadets Stage 1）+ GA STAGE 1 KEY",
        "multi": false
      },
      {
        "id": "baby-r-10",
        "title": "看图选词",
        "prompt": "This is a ______________.",
        "image": "img/q/baby-10.jpg",
        "options": [
          {
            "letter": "A",
            "text": "hippo"
          },
          {
            "letter": "B",
            "text": "horse"
          },
          {
            "letter": "C",
            "text": "elephant"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "图中是河马 hippo。",
        "source": "2026 Preliminary Baby / Little Hippo Reading（Cadets Stage 1）+ GA STAGE 1 KEY",
        "multi": false
      },
      {
        "id": "baby-uoe-33",
        "prompt": "Look! The cat __________ on the table.",
        "options": [
          {
            "letter": "A",
            "text": "jumped"
          },
          {
            "letter": "B",
            "text": "jumps"
          },
          {
            "letter": "C",
            "text": "jump"
          },
          {
            "letter": "D",
            "text": "is jumping"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "Look! 表示动作正在发生，用现在进行时 is jumping。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-38",
        "prompt": "We __________ to London last year.",
        "options": [
          {
            "letter": "A",
            "text": "went"
          },
          {
            "letter": "B",
            "text": "go"
          },
          {
            "letter": "C",
            "text": "are going"
          },
          {
            "letter": "D",
            "text": "goes"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "last year 是过去时间，go 的过去式是 went。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      }
    ],
    "little": [
      {
        "id": "baby-r-05",
        "title": "判断对错",
        "prompt": "Look at the picture. Is the sentence true or false?\nThese are cups.",
        "image": "img/q/baby-05.jpg",
        "options": [
          {
            "letter": "A",
            "text": "True  正确"
          },
          {
            "letter": "B",
            "text": "False  错误"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "图中是一叠盘子，不是杯子，句子错误。",
        "source": "2026 Preliminary Baby / Little Hippo Reading（Cadets Stage 1）+ GA STAGE 1 KEY",
        "multi": false
      },
      {
        "id": "baby-r-06",
        "title": "判断对错",
        "prompt": "Look at the picture. Is the sentence true or false?\nThis is a beach.",
        "image": "img/q/baby-06.jpg",
        "options": [
          {
            "letter": "A",
            "text": "True  正确"
          },
          {
            "letter": "B",
            "text": "False  错误"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "图中是海滩，句子正确。",
        "source": "2026 Preliminary Baby / Little Hippo Reading（Cadets Stage 1）+ GA STAGE 1 KEY",
        "multi": false
      },
      {
        "id": "baby-r-07",
        "title": "看图选词",
        "prompt": "This is a ______________.",
        "image": "img/q/baby-07.jpg",
        "options": [
          {
            "letter": "A",
            "text": "bedroom"
          },
          {
            "letter": "B",
            "text": "kitchen"
          },
          {
            "letter": "C",
            "text": "bathroom"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "图中有浴缸、洗手池和淋浴，是卫生间。",
        "source": "2026 Preliminary Baby / Little Hippo Reading（Cadets Stage 1）+ GA STAGE 1 KEY",
        "multi": false
      },
      {
        "id": "baby-r-11",
        "title": "看图选词",
        "prompt": "This is a ______________.",
        "image": "img/q/baby-11.jpg",
        "options": [
          {
            "letter": "A",
            "text": "sea"
          },
          {
            "letter": "B",
            "text": "river"
          },
          {
            "letter": "C",
            "text": "pool"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "图中是弯曲的河流 river。",
        "source": "2026 Preliminary Baby / Little Hippo Reading（Cadets Stage 1）+ GA STAGE 1 KEY",
        "multi": false
      },
      {
        "id": "baby-uoe-37",
        "prompt": "She is the _________ girl in our class.",
        "options": [
          {
            "letter": "A",
            "text": "more taller"
          },
          {
            "letter": "B",
            "text": "tallest"
          },
          {
            "letter": "C",
            "text": "taller"
          },
          {
            "letter": "D",
            "text": "most tall"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "in our class 表示在范围内最高，用最高级 the tallest。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-43",
        "prompt": "Is this _________ umbrella?",
        "options": [
          {
            "letter": "A",
            "text": "yours"
          },
          {
            "letter": "B",
            "text": "you"
          },
          {
            "letter": "C",
            "text": "you’re"
          },
          {
            "letter": "D",
            "text": "your"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "umbrella 前要用形容词性物主代词 your。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      }
    ],
    "hippo1": [
      {
        "id": "h1-uoe-32",
        "prompt": "I’d like __________ tea, please.",
        "options": [
          {
            "letter": "A",
            "text": "a"
          },
          {
            "letter": "B",
            "text": "an"
          },
          {
            "letter": "C",
            "text": "some"
          },
          {
            "letter": "D",
            "text": "any"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "tea 不可数，肯定句中表示“一些”用 some。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-34",
        "prompt": "Svetozar’s really bad _________ remembering names but he’s great with faces!",
        "options": [
          {
            "letter": "A",
            "text": "in"
          },
          {
            "letter": "B",
            "text": "at"
          },
          {
            "letter": "C",
            "text": "on"
          },
          {
            "letter": "D",
            "text": "with"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "固定搭配：be bad at doing something。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-36",
        "prompt": "Do you know the man _______ lives next door?",
        "options": [
          {
            "letter": "A",
            "text": "what"
          },
          {
            "letter": "B",
            "text": "which"
          },
          {
            "letter": "C",
            "text": "whom"
          },
          {
            "letter": "D",
            "text": "who"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "先行词是人，在从句中作主语，用 who。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-41",
        "prompt": "My little brother is afraid _________ spiders.",
        "options": [
          {
            "letter": "A",
            "text": "of"
          },
          {
            "letter": "B",
            "text": "from"
          },
          {
            "letter": "C",
            "text": "off"
          },
          {
            "letter": "D",
            "text": "by"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "固定搭配：be afraid of。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-45",
        "prompt": "The music is too loud. I __________ hear you.",
        "options": [
          {
            "letter": "A",
            "text": "won’t"
          },
          {
            "letter": "B",
            "text": "can"
          },
          {
            "letter": "C",
            "text": "can’t"
          },
          {
            "letter": "D",
            "text": "couldn’t"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "太吵所以现在听不见，用 can’t。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-49",
        "prompt": "___________ I finish homework, I can’t play video games.",
        "options": [
          {
            "letter": "A",
            "text": "Unless"
          },
          {
            "letter": "B",
            "text": "If"
          },
          {
            "letter": "C",
            "text": "When"
          },
          {
            "letter": "D",
            "text": "Because"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "Unless = if not，表示“除非完成作业”。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      }
    ],
    "hippo2": [
      {
        "id": "h2-r1-01",
        "prompt": "Do you want to watch a _____________ tomorrow?",
        "options": [
          {
            "letter": "A",
            "text": "film"
          },
          {
            "letter": "B",
            "text": "cinema"
          },
          {
            "letter": "C",
            "text": "photo"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "watch a film 是习惯搭配；cinema 是地点。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-03",
        "prompt": "I love that joke because it is so __________________ .",
        "options": [
          {
            "letter": "A",
            "text": "boring"
          },
          {
            "letter": "B",
            "text": "exciting"
          },
          {
            "letter": "C",
            "text": "funny"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "joke 用 funny 来形容。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-07",
        "prompt": "His house is __________________ than mine – it only has 2 bedrooms.",
        "options": [
          {
            "letter": "A",
            "text": "small"
          },
          {
            "letter": "B",
            "text": "smaller"
          },
          {
            "letter": "C",
            "text": "the smallest"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "than 表示比较，用 smaller。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-uoe-35",
        "prompt": "We saw many ______________ at the zoo.",
        "options": [
          {
            "letter": "A",
            "text": "mouses"
          },
          {
            "letter": "B",
            "text": "mice"
          },
          {
            "letter": "C",
            "text": "mices"
          },
          {
            "letter": "D",
            "text": "mouse"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "mouse 的复数是 mice。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-41",
        "prompt": "She always takes care __________ her younger brother.",
        "options": [
          {
            "letter": "A",
            "text": "from"
          },
          {
            "letter": "B",
            "text": "about"
          },
          {
            "letter": "C",
            "text": "over"
          },
          {
            "letter": "D",
            "text": "of"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "固定搭配：take care of。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-48",
        "prompt": "We have lived here ____________ 2018.",
        "options": [
          {
            "letter": "A",
            "text": "for"
          },
          {
            "letter": "B",
            "text": "since"
          },
          {
            "letter": "C",
            "text": "from"
          },
          {
            "letter": "D",
            "text": "at"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "自从某一时间点开始，用 since + 2018。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      }
    ],
    "hippo3": [
      {
        "id": "h3-r1-01",
        "prompt": "I need to _________________ a pen – I left mine at home.",
        "options": [
          {
            "letter": "A",
            "text": "give"
          },
          {
            "letter": "B",
            "text": "borrow"
          },
          {
            "letter": "C",
            "text": "lend"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "自己的笔忘在家，需要向别人借：borrow。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-03",
        "prompt": "Sorry, I didn’t mean to break the lamp. It was an _________________.",
        "options": [
          {
            "letter": "A",
            "text": "exam"
          },
          {
            "letter": "B",
            "text": "invitation"
          },
          {
            "letter": "C",
            "text": "accident"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "不是故意打碎的，是 accident。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-09",
        "prompt": "The train was _________________, so we missed the party.",
        "options": [
          {
            "letter": "A",
            "text": "leaving"
          },
          {
            "letter": "B",
            "text": "delayed"
          },
          {
            "letter": "C",
            "text": "taken"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "因为误了派对，火车是 delayed（晚点）。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-uoe-35",
        "prompt": "I haven’t seen her ___________ Monday.",
        "options": [
          {
            "letter": "A",
            "text": "since"
          },
          {
            "letter": "B",
            "text": "for"
          },
          {
            "letter": "C",
            "text": "from"
          },
          {
            "letter": "D",
            "text": "by"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "自从 Monday 这个时间点，用 since。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-38",
        "prompt": "___________ of my friends is coming to the meeting. They are busy.",
        "options": [
          {
            "letter": "A",
            "text": "Either"
          },
          {
            "letter": "B",
            "text": "Both"
          },
          {
            "letter": "C",
            "text": "Neither"
          },
          {
            "letter": "D",
            "text": "Everyone"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "他们都很忙，所以一个也不来：Neither of my friends is…",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-54",
        "prompt": "The British are very fond ____________ tea.",
        "options": [
          {
            "letter": "A",
            "text": "off"
          },
          {
            "letter": "B",
            "text": "about"
          },
          {
            "letter": "C",
            "text": "on"
          },
          {
            "letter": "D",
            "text": "of"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "固定搭配：be fond of。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      }
    ],
    "hippo4": [
      {
        "id": "h4-r1-02",
        "context": "Researchers have tried to understand why many teenage girls stop playing sport.",
        "prompt": "Researchers have tried to understand _______ this is happening.",
        "options": [
          {
            "letter": "A",
            "text": "if"
          },
          {
            "letter": "B",
            "text": "when"
          },
          {
            "letter": "C",
            "text": "where"
          },
          {
            "letter": "D",
            "text": "why"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "要理解“为什么”发生，用 why。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-r1-09",
        "prompt": "_______ these views, most adults in the study agreed that sport is valuable for girls.",
        "options": [
          {
            "letter": "A",
            "text": "Because of"
          },
          {
            "letter": "B",
            "text": "However"
          },
          {
            "letter": "C",
            "text": "During"
          },
          {
            "letter": "D",
            "text": "Despite"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "尽管有这些看法，大多数人仍同意运动有价值：Despite。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-uoe-41",
        "prompt": "____________ Pacific Ocean is the largest in the world.",
        "options": [
          {
            "letter": "A",
            "text": "The"
          },
          {
            "letter": "B",
            "text": "A"
          },
          {
            "letter": "C",
            "text": "An"
          },
          {
            "letter": "D",
            "text": "-"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "海洋名称前加 the：the Pacific Ocean。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-44",
        "prompt": "She ___________ here for two weeks and still hasn’t met anyone.",
        "options": [
          {
            "letter": "A",
            "text": "was"
          },
          {
            "letter": "B",
            "text": "has been"
          },
          {
            "letter": "C",
            "text": "had been"
          },
          {
            "letter": "D",
            "text": "being"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "for two weeks 且与现在有关，用现在完成时 has been。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-52",
        "prompt": "I am in two ______________ about whether to go to the wedding or not.",
        "options": [
          {
            "letter": "A",
            "text": "hearts"
          },
          {
            "letter": "B",
            "text": "thoughts"
          },
          {
            "letter": "C",
            "text": "minds"
          },
          {
            "letter": "D",
            "text": "brains"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "固定搭配：be in two minds（犹豫不决）。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-54",
        "prompt": "I honestly don’t know how you __________ up with Milly’s nagging all the time!",
        "options": [
          {
            "letter": "A",
            "text": "put"
          },
          {
            "letter": "B",
            "text": "make"
          },
          {
            "letter": "C",
            "text": "do"
          },
          {
            "letter": "D",
            "text": "go"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "固定搭配：put up with（忍受）。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      }
    ],
    "hippo5": [
      {
        "id": "h5-uoe-41",
        "prompt": "Neither of the answers ______________ correct.",
        "options": [
          {
            "letter": "A",
            "text": "are"
          },
          {
            "letter": "B",
            "text": "were"
          },
          {
            "letter": "C",
            "text": "is"
          },
          {
            "letter": "D",
            "text": "be"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "官方答案为 is（Neither of… 后常用单数）。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-44",
        "prompt": "She had her house ______________ last summer.",
        "options": [
          {
            "letter": "A",
            "text": "paint"
          },
          {
            "letter": "B",
            "text": "painted"
          },
          {
            "letter": "C",
            "text": "for painting"
          },
          {
            "letter": "D",
            "text": "to paint"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "have something done：请人把房子粉刷了。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-47",
        "prompt": "I would rather you ______________ eat in my car.",
        "options": [
          {
            "letter": "A",
            "text": "didn’t"
          },
          {
            "letter": "B",
            "text": "don’t"
          },
          {
            "letter": "C",
            "text": "haven’t"
          },
          {
            "letter": "D",
            "text": "wouldn’t"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "would rather + 主语 + 过去时，表示现在/将来的愿望。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-51",
        "prompt": "He apologized ______________ being late.",
        "options": [
          {
            "letter": "A",
            "text": "for"
          },
          {
            "letter": "B",
            "text": "to"
          },
          {
            "letter": "C",
            "text": "on"
          },
          {
            "letter": "D",
            "text": "of"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "固定搭配：apologize for doing。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-55",
        "prompt": "By next June, they ______________ in this city for twenty years.",
        "options": [
          {
            "letter": "A",
            "text": "lived"
          },
          {
            "letter": "B",
            "text": "live"
          },
          {
            "letter": "C",
            "text": "have lived"
          },
          {
            "letter": "D",
            "text": "will have lived"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "到将来某个时间已持续二十年，用将来完成时。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-59",
        "prompt": "There isn’t ______________ information available right now.",
        "options": [
          {
            "letter": "A",
            "text": "a"
          },
          {
            "letter": "B",
            "text": "the"
          },
          {
            "letter": "C",
            "text": "an"
          },
          {
            "letter": "D",
            "text": "any"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "information 不可数，否定句用 any。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      }
    ]
  },
  "grammar": {
    "baby": [
      {
        "id": "baby-uoe-31",
        "prompt": "He has very _________ time to finish his homework.",
        "options": [
          {
            "letter": "A",
            "text": "little"
          },
          {
            "letter": "B",
            "text": "few"
          },
          {
            "letter": "C",
            "text": "a little"
          },
          {
            "letter": "D",
            "text": "a few"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "time 是不可数名词，表示“很少时间”用 little。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-32",
        "prompt": "My birthday is on the _________ of March.",
        "options": [
          {
            "letter": "A",
            "text": "three"
          },
          {
            "letter": "B",
            "text": "thirty"
          },
          {
            "letter": "C",
            "text": "third"
          },
          {
            "letter": "D",
            "text": "thrice"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "日期要用序数词：the third of March。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-33",
        "prompt": "Look! The cat __________ on the table.",
        "options": [
          {
            "letter": "A",
            "text": "jumped"
          },
          {
            "letter": "B",
            "text": "jumps"
          },
          {
            "letter": "C",
            "text": "jump"
          },
          {
            "letter": "D",
            "text": "is jumping"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "Look! 表示动作正在发生，用现在进行时 is jumping。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-34",
        "prompt": "We __________ dinner at 7 p.m. every day.",
        "options": [
          {
            "letter": "A",
            "text": "had"
          },
          {
            "letter": "B",
            "text": "has"
          },
          {
            "letter": "C",
            "text": "have"
          },
          {
            "letter": "D",
            "text": "having"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "every day 是习惯，主语 We 用 have。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-35",
        "prompt": "We are going _________ holiday in July.",
        "options": [
          {
            "letter": "A",
            "text": "to"
          },
          {
            "letter": "B",
            "text": "at"
          },
          {
            "letter": "C",
            "text": "in"
          },
          {
            "letter": "D",
            "text": "on"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "固定搭配：go on holiday。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-36",
        "prompt": "Mum is __________ cream and sugar.",
        "options": [
          {
            "letter": "A",
            "text": "mix"
          },
          {
            "letter": "B",
            "text": "mixing"
          },
          {
            "letter": "C",
            "text": "mixed"
          },
          {
            "letter": "D",
            "text": "mixes"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "is 后面接现在分词，构成现在进行时。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-37",
        "prompt": "She is the _________ girl in our class.",
        "options": [
          {
            "letter": "A",
            "text": "more taller"
          },
          {
            "letter": "B",
            "text": "tallest"
          },
          {
            "letter": "C",
            "text": "taller"
          },
          {
            "letter": "D",
            "text": "most tall"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "in our class 表示在范围内最高，用最高级 the tallest。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-38",
        "prompt": "We __________ to London last year.",
        "options": [
          {
            "letter": "A",
            "text": "went"
          },
          {
            "letter": "B",
            "text": "go"
          },
          {
            "letter": "C",
            "text": "are going"
          },
          {
            "letter": "D",
            "text": "goes"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "last year 是过去时间，go 的过去式是 went。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-39",
        "prompt": "Our house is _________ than yours.",
        "options": [
          {
            "letter": "A",
            "text": "biggest"
          },
          {
            "letter": "B",
            "text": "big"
          },
          {
            "letter": "C",
            "text": "bigger"
          },
          {
            "letter": "D",
            "text": "more big"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "than 表示比较，big 的比较级是 bigger。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-40",
        "prompt": "We __________ going to the cinema tonight.",
        "options": [
          {
            "letter": "A",
            "text": "is"
          },
          {
            "letter": "B",
            "text": "are"
          },
          {
            "letter": "C",
            "text": "be"
          },
          {
            "letter": "D",
            "text": "was"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "主语 We，be 动词用 are（are going to）。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-41",
        "prompt": "I ________ like a sandwich, please.",
        "options": [
          {
            "letter": "A",
            "text": "should"
          },
          {
            "letter": "B",
            "text": "would"
          },
          {
            "letter": "C",
            "text": "could"
          },
          {
            "letter": "D",
            "text": "can"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "礼貌点餐：I would like…",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-42",
        "prompt": "We have _______ milk in the fridge.",
        "options": [
          {
            "letter": "A",
            "text": "a few"
          },
          {
            "letter": "B",
            "text": "few"
          },
          {
            "letter": "C",
            "text": "little"
          },
          {
            "letter": "D",
            "text": "many"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "milk 不可数，表示“不多”用 little。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-43",
        "prompt": "Is this _________ umbrella?",
        "options": [
          {
            "letter": "A",
            "text": "yours"
          },
          {
            "letter": "B",
            "text": "you"
          },
          {
            "letter": "C",
            "text": "you’re"
          },
          {
            "letter": "D",
            "text": "your"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "umbrella 前要用形容词性物主代词 your。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-44",
        "prompt": "We didn’t __________ any photos.",
        "options": [
          {
            "letter": "A",
            "text": "take"
          },
          {
            "letter": "B",
            "text": "make"
          },
          {
            "letter": "C",
            "text": "play"
          },
          {
            "letter": "D",
            "text": "design"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "固定搭配：take photos。didn't 后用动词原形。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-45",
        "prompt": "How _________ time do we have?",
        "options": [
          {
            "letter": "A",
            "text": "little"
          },
          {
            "letter": "B",
            "text": "few"
          },
          {
            "letter": "C",
            "text": "many"
          },
          {
            "letter": "D",
            "text": "much"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "time 不可数，疑问句用 How much。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-46",
        "prompt": "I would like ________ cup of tea, please.",
        "options": [
          {
            "letter": "A",
            "text": "-"
          },
          {
            "letter": "B",
            "text": "the"
          },
          {
            "letter": "C",
            "text": "a"
          },
          {
            "letter": "D",
            "text": "an"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "cup 以辅音开头，用不定冠词 a。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-47",
        "prompt": "Tom is ________ player on the team.",
        "options": [
          {
            "letter": "A",
            "text": "the worst"
          },
          {
            "letter": "B",
            "text": "bad"
          },
          {
            "letter": "C",
            "text": "worst"
          },
          {
            "letter": "D",
            "text": "worse"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "on the team 表示范围内最差，用 the worst。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-48",
        "prompt": "He always drinks a glass of milk __________ bedtime.",
        "options": [
          {
            "letter": "A",
            "text": "on"
          },
          {
            "letter": "B",
            "text": "during"
          },
          {
            "letter": "C",
            "text": "in"
          },
          {
            "letter": "D",
            "text": "before"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "睡前喝牛奶，用 before bedtime。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-49",
        "prompt": "We __________ have a test tomorrow.",
        "options": [
          {
            "letter": "A",
            "text": "may be"
          },
          {
            "letter": "B",
            "text": "sure"
          },
          {
            "letter": "C",
            "text": "maybe"
          },
          {
            "letter": "D",
            "text": "might"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "情态动词 might 后接动词原形 have，表示“也许”。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-50",
        "prompt": "We will _________ football tomorrow.",
        "options": [
          {
            "letter": "A",
            "text": "played"
          },
          {
            "letter": "B",
            "text": "plays"
          },
          {
            "letter": "C",
            "text": "playing"
          },
          {
            "letter": "D",
            "text": "play"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "will 后面用动词原形 play。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      }
    ],
    "little": [
      {
        "id": "baby-uoe-31",
        "prompt": "He has very _________ time to finish his homework.",
        "options": [
          {
            "letter": "A",
            "text": "little"
          },
          {
            "letter": "B",
            "text": "few"
          },
          {
            "letter": "C",
            "text": "a little"
          },
          {
            "letter": "D",
            "text": "a few"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "time 是不可数名词，表示“很少时间”用 little。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-32",
        "prompt": "My birthday is on the _________ of March.",
        "options": [
          {
            "letter": "A",
            "text": "three"
          },
          {
            "letter": "B",
            "text": "thirty"
          },
          {
            "letter": "C",
            "text": "third"
          },
          {
            "letter": "D",
            "text": "thrice"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "日期要用序数词：the third of March。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-33",
        "prompt": "Look! The cat __________ on the table.",
        "options": [
          {
            "letter": "A",
            "text": "jumped"
          },
          {
            "letter": "B",
            "text": "jumps"
          },
          {
            "letter": "C",
            "text": "jump"
          },
          {
            "letter": "D",
            "text": "is jumping"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "Look! 表示动作正在发生，用现在进行时 is jumping。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-34",
        "prompt": "We __________ dinner at 7 p.m. every day.",
        "options": [
          {
            "letter": "A",
            "text": "had"
          },
          {
            "letter": "B",
            "text": "has"
          },
          {
            "letter": "C",
            "text": "have"
          },
          {
            "letter": "D",
            "text": "having"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "every day 是习惯，主语 We 用 have。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-35",
        "prompt": "We are going _________ holiday in July.",
        "options": [
          {
            "letter": "A",
            "text": "to"
          },
          {
            "letter": "B",
            "text": "at"
          },
          {
            "letter": "C",
            "text": "in"
          },
          {
            "letter": "D",
            "text": "on"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "固定搭配：go on holiday。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-36",
        "prompt": "Mum is __________ cream and sugar.",
        "options": [
          {
            "letter": "A",
            "text": "mix"
          },
          {
            "letter": "B",
            "text": "mixing"
          },
          {
            "letter": "C",
            "text": "mixed"
          },
          {
            "letter": "D",
            "text": "mixes"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "is 后面接现在分词，构成现在进行时。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-37",
        "prompt": "She is the _________ girl in our class.",
        "options": [
          {
            "letter": "A",
            "text": "more taller"
          },
          {
            "letter": "B",
            "text": "tallest"
          },
          {
            "letter": "C",
            "text": "taller"
          },
          {
            "letter": "D",
            "text": "most tall"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "in our class 表示在范围内最高，用最高级 the tallest。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-38",
        "prompt": "We __________ to London last year.",
        "options": [
          {
            "letter": "A",
            "text": "went"
          },
          {
            "letter": "B",
            "text": "go"
          },
          {
            "letter": "C",
            "text": "are going"
          },
          {
            "letter": "D",
            "text": "goes"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "last year 是过去时间，go 的过去式是 went。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-39",
        "prompt": "Our house is _________ than yours.",
        "options": [
          {
            "letter": "A",
            "text": "biggest"
          },
          {
            "letter": "B",
            "text": "big"
          },
          {
            "letter": "C",
            "text": "bigger"
          },
          {
            "letter": "D",
            "text": "more big"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "than 表示比较，big 的比较级是 bigger。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-40",
        "prompt": "We __________ going to the cinema tonight.",
        "options": [
          {
            "letter": "A",
            "text": "is"
          },
          {
            "letter": "B",
            "text": "are"
          },
          {
            "letter": "C",
            "text": "be"
          },
          {
            "letter": "D",
            "text": "was"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "主语 We，be 动词用 are（are going to）。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-41",
        "prompt": "I ________ like a sandwich, please.",
        "options": [
          {
            "letter": "A",
            "text": "should"
          },
          {
            "letter": "B",
            "text": "would"
          },
          {
            "letter": "C",
            "text": "could"
          },
          {
            "letter": "D",
            "text": "can"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "礼貌点餐：I would like…",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-42",
        "prompt": "We have _______ milk in the fridge.",
        "options": [
          {
            "letter": "A",
            "text": "a few"
          },
          {
            "letter": "B",
            "text": "few"
          },
          {
            "letter": "C",
            "text": "little"
          },
          {
            "letter": "D",
            "text": "many"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "milk 不可数，表示“不多”用 little。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-43",
        "prompt": "Is this _________ umbrella?",
        "options": [
          {
            "letter": "A",
            "text": "yours"
          },
          {
            "letter": "B",
            "text": "you"
          },
          {
            "letter": "C",
            "text": "you’re"
          },
          {
            "letter": "D",
            "text": "your"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "umbrella 前要用形容词性物主代词 your。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-44",
        "prompt": "We didn’t __________ any photos.",
        "options": [
          {
            "letter": "A",
            "text": "take"
          },
          {
            "letter": "B",
            "text": "make"
          },
          {
            "letter": "C",
            "text": "play"
          },
          {
            "letter": "D",
            "text": "design"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "固定搭配：take photos。didn't 后用动词原形。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-45",
        "prompt": "How _________ time do we have?",
        "options": [
          {
            "letter": "A",
            "text": "little"
          },
          {
            "letter": "B",
            "text": "few"
          },
          {
            "letter": "C",
            "text": "many"
          },
          {
            "letter": "D",
            "text": "much"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "time 不可数，疑问句用 How much。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-46",
        "prompt": "I would like ________ cup of tea, please.",
        "options": [
          {
            "letter": "A",
            "text": "-"
          },
          {
            "letter": "B",
            "text": "the"
          },
          {
            "letter": "C",
            "text": "a"
          },
          {
            "letter": "D",
            "text": "an"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "cup 以辅音开头，用不定冠词 a。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-47",
        "prompt": "Tom is ________ player on the team.",
        "options": [
          {
            "letter": "A",
            "text": "the worst"
          },
          {
            "letter": "B",
            "text": "bad"
          },
          {
            "letter": "C",
            "text": "worst"
          },
          {
            "letter": "D",
            "text": "worse"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "on the team 表示范围内最差，用 the worst。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-48",
        "prompt": "He always drinks a glass of milk __________ bedtime.",
        "options": [
          {
            "letter": "A",
            "text": "on"
          },
          {
            "letter": "B",
            "text": "during"
          },
          {
            "letter": "C",
            "text": "in"
          },
          {
            "letter": "D",
            "text": "before"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "睡前喝牛奶，用 before bedtime。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-49",
        "prompt": "We __________ have a test tomorrow.",
        "options": [
          {
            "letter": "A",
            "text": "may be"
          },
          {
            "letter": "B",
            "text": "sure"
          },
          {
            "letter": "C",
            "text": "maybe"
          },
          {
            "letter": "D",
            "text": "might"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "情态动词 might 后接动词原形 have，表示“也许”。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      },
      {
        "id": "baby-uoe-50",
        "prompt": "We will _________ football tomorrow.",
        "options": [
          {
            "letter": "A",
            "text": "played"
          },
          {
            "letter": "B",
            "text": "plays"
          },
          {
            "letter": "C",
            "text": "playing"
          },
          {
            "letter": "D",
            "text": "play"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "will 后面用动词原形 play。",
        "source": "2026 Preliminary Baby / Little Hippo Use of English MC Test V1",
        "multi": false
      }
    ],
    "hippo1": [
      {
        "id": "h1-uoe-31",
        "prompt": "_________ did you go on holiday last year?",
        "options": [
          {
            "letter": "A",
            "text": "Why"
          },
          {
            "letter": "B",
            "text": "When"
          },
          {
            "letter": "C",
            "text": "Where"
          },
          {
            "letter": "D",
            "text": "Whose"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "问去哪里度假，用 Where。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-32",
        "prompt": "I’d like __________ tea, please.",
        "options": [
          {
            "letter": "A",
            "text": "a"
          },
          {
            "letter": "B",
            "text": "an"
          },
          {
            "letter": "C",
            "text": "some"
          },
          {
            "letter": "D",
            "text": "any"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "tea 不可数，肯定句中表示“一些”用 some。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-33",
        "prompt": "If they hurry, they ____________ the train.",
        "options": [
          {
            "letter": "A",
            "text": "caught"
          },
          {
            "letter": "B",
            "text": "will catch"
          },
          {
            "letter": "C",
            "text": "catch"
          },
          {
            "letter": "D",
            "text": "would catch"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "真实条件句：if + 现在时，主句用 will。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-34",
        "prompt": "Svetozar’s really bad _________ remembering names but he’s great with faces!",
        "options": [
          {
            "letter": "A",
            "text": "in"
          },
          {
            "letter": "B",
            "text": "at"
          },
          {
            "letter": "C",
            "text": "on"
          },
          {
            "letter": "D",
            "text": "with"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "固定搭配：be bad at doing something。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-35",
        "prompt": "We spent the weekend at _______ Lake Geneva.",
        "options": [
          {
            "letter": "A",
            "text": "-"
          },
          {
            "letter": "B",
            "text": "an"
          },
          {
            "letter": "C",
            "text": "a"
          },
          {
            "letter": "D",
            "text": "the"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "Lake + 专有湖名前面通常不加冠词。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-36",
        "prompt": "Do you know the man _______ lives next door?",
        "options": [
          {
            "letter": "A",
            "text": "what"
          },
          {
            "letter": "B",
            "text": "which"
          },
          {
            "letter": "C",
            "text": "whom"
          },
          {
            "letter": "D",
            "text": "who"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "先行词是人，在从句中作主语，用 who。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-37",
        "prompt": "He wants to become _______ engineer someday.",
        "options": [
          {
            "letter": "A",
            "text": "the"
          },
          {
            "letter": "B",
            "text": "-"
          },
          {
            "letter": "C",
            "text": "a"
          },
          {
            "letter": "D",
            "text": "an"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "engineer 以元音音素开头，用 an。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-38",
        "prompt": "This exercise is __________ difficult than the previous one.",
        "options": [
          {
            "letter": "A",
            "text": "more"
          },
          {
            "letter": "B",
            "text": "much"
          },
          {
            "letter": "C",
            "text": "the most"
          },
          {
            "letter": "D",
            "text": "very"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "than 表示比较，difficult 用 more difficult。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-39",
        "prompt": "She can’t decide ________ the red dress and the blue one.",
        "options": [
          {
            "letter": "A",
            "text": "from"
          },
          {
            "letter": "B",
            "text": "among"
          },
          {
            "letter": "C",
            "text": "with"
          },
          {
            "letter": "D",
            "text": "between"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "两者之间用 between。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-40",
        "prompt": "We visited ________ Alps last year.",
        "options": [
          {
            "letter": "A",
            "text": "a"
          },
          {
            "letter": "B",
            "text": "the"
          },
          {
            "letter": "C",
            "text": "-"
          },
          {
            "letter": "D",
            "text": "an"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "山脉名称前通常加 the：the Alps。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-41",
        "prompt": "My little brother is afraid _________ spiders.",
        "options": [
          {
            "letter": "A",
            "text": "of"
          },
          {
            "letter": "B",
            "text": "from"
          },
          {
            "letter": "C",
            "text": "off"
          },
          {
            "letter": "D",
            "text": "by"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "固定搭配：be afraid of。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-42",
        "prompt": "You can take the book. I ___________ it.",
        "options": [
          {
            "letter": "A",
            "text": "’m not reading"
          },
          {
            "letter": "B",
            "text": "can read"
          },
          {
            "letter": "C",
            "text": "don’t read"
          },
          {
            "letter": "D",
            "text": "’m not read"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "此刻不在读这本书，用现在进行时的否定。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-43",
        "prompt": "Jerry _________ this t-shirt in the new shopping mall!",
        "options": [
          {
            "letter": "A",
            "text": "has bought"
          },
          {
            "letter": "B",
            "text": "buyed"
          },
          {
            "letter": "C",
            "text": "has buyed"
          },
          {
            "letter": "D",
            "text": "bought"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "官方答案为 bought（一般过去时）。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-44",
        "prompt": "The plane is out of control! It ___________!",
        "options": [
          {
            "letter": "A",
            "text": "had crashed"
          },
          {
            "letter": "B",
            "text": "will crash"
          },
          {
            "letter": "C",
            "text": "is going to crash"
          },
          {
            "letter": "D",
            "text": "would crash"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "根据眼前迹象判断即将发生，用 be going to。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-45",
        "prompt": "The music is too loud. I __________ hear you.",
        "options": [
          {
            "letter": "A",
            "text": "won’t"
          },
          {
            "letter": "B",
            "text": "can"
          },
          {
            "letter": "C",
            "text": "can’t"
          },
          {
            "letter": "D",
            "text": "couldn’t"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "太吵所以现在听不见，用 can’t。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-46",
        "prompt": "I don’t mind _____________ the dishes.",
        "options": [
          {
            "letter": "A",
            "text": "washing"
          },
          {
            "letter": "B",
            "text": "to wash"
          },
          {
            "letter": "C",
            "text": "wash"
          },
          {
            "letter": "D",
            "text": "can wash"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "mind 后面接动名词：mind doing。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-47",
        "prompt": "Turtles walk _________ because they have short legs.",
        "options": [
          {
            "letter": "A",
            "text": "slow"
          },
          {
            "letter": "B",
            "text": "easy"
          },
          {
            "letter": "C",
            "text": "slowly"
          },
          {
            "letter": "D",
            "text": "fast"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "修饰动词 walk 要用副词 slowly。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-48",
        "prompt": "It was very late, _________ we took a taxi.",
        "options": [
          {
            "letter": "A",
            "text": "and"
          },
          {
            "letter": "B",
            "text": "but"
          },
          {
            "letter": "C",
            "text": "or"
          },
          {
            "letter": "D",
            "text": "so"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "前后是因果关系，用 so。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-49",
        "prompt": "___________ I finish homework, I can’t play video games.",
        "options": [
          {
            "letter": "A",
            "text": "Unless"
          },
          {
            "letter": "B",
            "text": "If"
          },
          {
            "letter": "C",
            "text": "When"
          },
          {
            "letter": "D",
            "text": "Because"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "Unless = if not，表示“除非完成作业”。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      },
      {
        "id": "h1-uoe-50",
        "prompt": "We usually hang ___________ in the park after school.",
        "options": [
          {
            "letter": "A",
            "text": "over"
          },
          {
            "letter": "B",
            "text": "on"
          },
          {
            "letter": "C",
            "text": "out"
          },
          {
            "letter": "D",
            "text": "about"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "固定搭配：hang out 闲逛。",
        "source": "2026 Preliminary Hippo 1 Use of English MC Test V1 + HIPPO 1 MC KEY",
        "multi": false
      }
    ],
    "hippo2": [
      {
        "id": "h2-r1-01",
        "prompt": "Do you want to watch a _____________ tomorrow?",
        "options": [
          {
            "letter": "A",
            "text": "film"
          },
          {
            "letter": "B",
            "text": "cinema"
          },
          {
            "letter": "C",
            "text": "photo"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "watch a film 是习惯搭配；cinema 是地点。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-02",
        "prompt": "This letter is ______________ and I need to post it today.",
        "options": [
          {
            "letter": "A",
            "text": "bigger"
          },
          {
            "letter": "B",
            "text": "important"
          },
          {
            "letter": "C",
            "text": "pleasant"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "需要今天寄出，说明这封信很重要。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-03",
        "prompt": "I love that joke because it is so __________________ .",
        "options": [
          {
            "letter": "A",
            "text": "boring"
          },
          {
            "letter": "B",
            "text": "exciting"
          },
          {
            "letter": "C",
            "text": "funny"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "joke 用 funny 来形容。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-04",
        "prompt": "____________ getting ready now or you will be late!",
        "options": [
          {
            "letter": "A",
            "text": "Start"
          },
          {
            "letter": "B",
            "text": "Wait"
          },
          {
            "letter": "C",
            "text": "Help"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "再不出发会迟到，所以要 Start getting ready。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-05",
        "prompt": "It’s always hotter here in the ___________________ .",
        "options": [
          {
            "letter": "A",
            "text": "wind"
          },
          {
            "letter": "B",
            "text": "weather"
          },
          {
            "letter": "C",
            "text": "summer"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "更热的季节是 summer。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-06",
        "prompt": "What a beautiful tree. Why don’t you ______________ a picture?",
        "options": [
          {
            "letter": "A",
            "text": "take"
          },
          {
            "letter": "B",
            "text": "give"
          },
          {
            "letter": "C",
            "text": "have"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "固定搭配：take a picture。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-07",
        "prompt": "His house is __________________ than mine – it only has 2 bedrooms.",
        "options": [
          {
            "letter": "A",
            "text": "small"
          },
          {
            "letter": "B",
            "text": "smaller"
          },
          {
            "letter": "C",
            "text": "the smallest"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "than 表示比较，用 smaller。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-08",
        "prompt": "We need to _____________ our parents soon.",
        "options": [
          {
            "letter": "A",
            "text": "choose"
          },
          {
            "letter": "B",
            "text": "visit"
          },
          {
            "letter": "C",
            "text": "know"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "visit our parents 表示去探望父母。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-09",
        "prompt": "My mother and my sister are _____________ very clever.",
        "options": [
          {
            "letter": "A",
            "text": "other"
          },
          {
            "letter": "B",
            "text": "both"
          },
          {
            "letter": "C",
            "text": "us"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "两个人都聪明，用 both。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-r1-10",
        "prompt": "If you want to buy that car, you need _________ money.",
        "options": [
          {
            "letter": "A",
            "text": "much"
          },
          {
            "letter": "B",
            "text": "many"
          },
          {
            "letter": "C",
            "text": "more"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "表示还需要“更多”钱，用 more。",
        "source": "2026 Preliminary Hippo 2 Reading Task 1 + A1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h2-uoe-35",
        "prompt": "We saw many ______________ at the zoo.",
        "options": [
          {
            "letter": "A",
            "text": "mouses"
          },
          {
            "letter": "B",
            "text": "mice"
          },
          {
            "letter": "C",
            "text": "mices"
          },
          {
            "letter": "D",
            "text": "mouse"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "mouse 的复数是 mice。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-36",
        "prompt": "There isn’t _____________ water in the bottle.",
        "options": [
          {
            "letter": "A",
            "text": "many"
          },
          {
            "letter": "B",
            "text": "a few"
          },
          {
            "letter": "C",
            "text": "much"
          },
          {
            "letter": "D",
            "text": "some"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "water 不可数，否定句用 much。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-37",
        "prompt": "This book is ___________ than the one we read last year.",
        "options": [
          {
            "letter": "A",
            "text": "most interesting"
          },
          {
            "letter": "B",
            "text": "interestinger"
          },
          {
            "letter": "C",
            "text": "more interesting"
          },
          {
            "letter": "D",
            "text": "very interesting"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "than 比较，interesting 用 more interesting。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-38",
        "prompt": "There ______________ some milk on the table.",
        "options": [
          {
            "letter": "A",
            "text": "are"
          },
          {
            "letter": "B",
            "text": "is"
          },
          {
            "letter": "C",
            "text": "are many"
          },
          {
            "letter": "D",
            "text": "is a"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "milk 不可数，用 There is。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-39",
        "prompt": "This is my sister. The baby is ___________.",
        "options": [
          {
            "letter": "A",
            "text": "hers"
          },
          {
            "letter": "B",
            "text": "her"
          },
          {
            "letter": "C",
            "text": "she"
          },
          {
            "letter": "D",
            "text": "she’s"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "表语要用名词性物主代词 hers。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-40",
        "prompt": "It is ___________ for me to get up for school. I am not a morning person.",
        "options": [
          {
            "letter": "A",
            "text": "easy"
          },
          {
            "letter": "B",
            "text": "hard"
          },
          {
            "letter": "C",
            "text": "strange"
          },
          {
            "letter": "D",
            "text": "boring"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "不是早起的人，所以起床很难 hard。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-41",
        "prompt": "She always takes care __________ her younger brother.",
        "options": [
          {
            "letter": "A",
            "text": "from"
          },
          {
            "letter": "B",
            "text": "about"
          },
          {
            "letter": "C",
            "text": "over"
          },
          {
            "letter": "D",
            "text": "of"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "固定搭配：take care of。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-42",
        "prompt": "The meaning of ‘break the ice’ is ____________________.",
        "options": [
          {
            "letter": "A",
            "text": "stop talking"
          },
          {
            "letter": "B",
            "text": "freeze something"
          },
          {
            "letter": "C",
            "text": "start a friendly conversation"
          },
          {
            "letter": "D",
            "text": "say something rude"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "break the ice 的意思是打开话题、开始友好交谈。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-43",
        "prompt": "The opposite of ‘polite’ is ______________.",
        "options": [
          {
            "letter": "A",
            "text": "unpolite"
          },
          {
            "letter": "B",
            "text": "angry"
          },
          {
            "letter": "C",
            "text": "rude"
          },
          {
            "letter": "D",
            "text": "weak"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "polite 的反义词是 rude。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-44",
        "prompt": "She made the decision ___________ her own.",
        "options": [
          {
            "letter": "A",
            "text": "at"
          },
          {
            "letter": "B",
            "text": "for"
          },
          {
            "letter": "C",
            "text": "in"
          },
          {
            "letter": "D",
            "text": "on"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "固定搭配：on her own（独自）。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-45",
        "prompt": "This is the third time this month Ousamma ____________ late for school.",
        "options": [
          {
            "letter": "A",
            "text": "is"
          },
          {
            "letter": "B",
            "text": "was"
          },
          {
            "letter": "C",
            "text": "was being"
          },
          {
            "letter": "D",
            "text": "has been"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "This is the third time 后面常用现在完成时。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-46",
        "prompt": "She bought a pair of shoes ___________ sale.",
        "options": [
          {
            "letter": "A",
            "text": "at"
          },
          {
            "letter": "B",
            "text": "under"
          },
          {
            "letter": "C",
            "text": "in"
          },
          {
            "letter": "D",
            "text": "on"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "固定搭配：on sale。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-47",
        "prompt": "A person who writes books is a(n) _____________.",
        "options": [
          {
            "letter": "A",
            "text": "singer"
          },
          {
            "letter": "B",
            "text": "poet"
          },
          {
            "letter": "C",
            "text": "author"
          },
          {
            "letter": "D",
            "text": "reader"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "写书的人是 author（作者）。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-48",
        "prompt": "We have lived here ____________ 2018.",
        "options": [
          {
            "letter": "A",
            "text": "for"
          },
          {
            "letter": "B",
            "text": "since"
          },
          {
            "letter": "C",
            "text": "from"
          },
          {
            "letter": "D",
            "text": "at"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "自从某一时间点开始，用 since + 2018。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-49",
        "prompt": "The weather today is ______________ than yesterday.",
        "options": [
          {
            "letter": "A",
            "text": "bad"
          },
          {
            "letter": "B",
            "text": "worse"
          },
          {
            "letter": "C",
            "text": "the worst"
          },
          {
            "letter": "D",
            "text": "more bad"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "than 比较，bad 的比较级是 worse。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-50",
        "prompt": "I ______________ the movie last week, so I am not going to watch it again.",
        "options": [
          {
            "letter": "A",
            "text": "see"
          },
          {
            "letter": "B",
            "text": "have seen"
          },
          {
            "letter": "C",
            "text": "saw"
          },
          {
            "letter": "D",
            "text": "was watching"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "last week 是过去时间，用 saw。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-51",
        "prompt": "He always ____________ breakfast at 7.",
        "options": [
          {
            "letter": "A",
            "text": "have"
          },
          {
            "letter": "B",
            "text": "having"
          },
          {
            "letter": "C",
            "text": "has"
          },
          {
            "letter": "D",
            "text": "had"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "always 表现在习惯，主语 He 用 has。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-52",
        "prompt": "My brother usually goes to school _________ bus.",
        "options": [
          {
            "letter": "A",
            "text": "in a"
          },
          {
            "letter": "B",
            "text": "by"
          },
          {
            "letter": "C",
            "text": "on the"
          },
          {
            "letter": "D",
            "text": "with"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "交通方式用 by bus。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-53",
        "prompt": "My father _____________ dinner yesterday because my mum was sick.",
        "options": [
          {
            "letter": "A",
            "text": "cook"
          },
          {
            "letter": "B",
            "text": "cooked"
          },
          {
            "letter": "C",
            "text": "was cooking"
          },
          {
            "letter": "D",
            "text": "cooks"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "yesterday 用一般过去时 cooked。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      },
      {
        "id": "h2-uoe-54",
        "prompt": "There are ____________ apples in the fridge.",
        "options": [
          {
            "letter": "A",
            "text": "much"
          },
          {
            "letter": "B",
            "text": "few"
          },
          {
            "letter": "C",
            "text": "a little"
          },
          {
            "letter": "D",
            "text": "any"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "apples 可数，官方答案为 few。",
        "source": "2026 Preliminary Hippo 2 Use of English MC Test V1 + HIPPO 2-S1 MC KEY",
        "multi": false
      }
    ],
    "hippo3": [
      {
        "id": "h3-r1-01",
        "prompt": "I need to _________________ a pen – I left mine at home.",
        "options": [
          {
            "letter": "A",
            "text": "give"
          },
          {
            "letter": "B",
            "text": "borrow"
          },
          {
            "letter": "C",
            "text": "lend"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "自己的笔忘在家，需要向别人借：borrow。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-02",
        "prompt": "He likes to __________ fridge magnets – it’s his hobby.",
        "options": [
          {
            "letter": "A",
            "text": "collect"
          },
          {
            "letter": "B",
            "text": "earn"
          },
          {
            "letter": "C",
            "text": "watch"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "爱好是收集 collect fridge magnets。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-03",
        "prompt": "Sorry, I didn’t mean to break the lamp. It was an _________________.",
        "options": [
          {
            "letter": "A",
            "text": "exam"
          },
          {
            "letter": "B",
            "text": "invitation"
          },
          {
            "letter": "C",
            "text": "accident"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "不是故意打碎的，是 accident。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-04",
        "prompt": "If you are camping, most of your holiday will be _________________.",
        "options": [
          {
            "letter": "A",
            "text": "outside"
          },
          {
            "letter": "B",
            "text": "inside"
          },
          {
            "letter": "C",
            "text": "upstairs"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "露营大多在户外 outside。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-05",
        "prompt": "We loved the food at the new restaurant, the _______________ was delicious.",
        "options": [
          {
            "letter": "A",
            "text": "lunchtime"
          },
          {
            "letter": "B",
            "text": "main course"
          },
          {
            "letter": "C",
            "text": "plate"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "菜很好吃，指主菜 main course。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-06",
        "prompt": "The word ‘terrible’ means the same as __________.",
        "options": [
          {
            "letter": "A",
            "text": "fine"
          },
          {
            "letter": "B",
            "text": "horrible"
          },
          {
            "letter": "C",
            "text": "pleasant"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "terrible 与 horrible 同义。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-07",
        "prompt": "I strongly dislike vegetables, __________________ broccoli. It’s the worst!",
        "options": [
          {
            "letter": "A",
            "text": "however"
          },
          {
            "letter": "B",
            "text": "clearly"
          },
          {
            "letter": "C",
            "text": "especially"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "尤其讨厌西兰花，用 especially。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-08",
        "prompt": "We did lots of ________________ in Paris; we even visited the Eiffel tower.",
        "options": [
          {
            "letter": "A",
            "text": "sightseeing"
          },
          {
            "letter": "B",
            "text": "watching"
          },
          {
            "letter": "C",
            "text": "studying"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "在巴黎观光，用 sightseeing。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-09",
        "prompt": "The train was _________________, so we missed the party.",
        "options": [
          {
            "letter": "A",
            "text": "leaving"
          },
          {
            "letter": "B",
            "text": "delayed"
          },
          {
            "letter": "C",
            "text": "taken"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "因为误了派对，火车是 delayed（晚点）。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-r1-10",
        "prompt": "To keep _______________, you need regular exercise and a good diet.",
        "options": [
          {
            "letter": "A",
            "text": "healthy"
          },
          {
            "letter": "B",
            "text": "ready"
          },
          {
            "letter": "C",
            "text": "interested"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "规律运动和饮食是为了 keep healthy。",
        "source": "2026 Preliminary Hippo 3 Reading Task 1 + A2 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h3-uoe-35",
        "prompt": "I haven’t seen her ___________ Monday.",
        "options": [
          {
            "letter": "A",
            "text": "since"
          },
          {
            "letter": "B",
            "text": "for"
          },
          {
            "letter": "C",
            "text": "from"
          },
          {
            "letter": "D",
            "text": "by"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "自从 Monday 这个时间点，用 since。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-36",
        "prompt": "________ Mount Everest is the highest mountain in the world.",
        "options": [
          {
            "letter": "A",
            "text": "A"
          },
          {
            "letter": "B",
            "text": "An"
          },
          {
            "letter": "C",
            "text": "The"
          },
          {
            "letter": "D",
            "text": "-"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "Mount + 山名前面通常不加冠词。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-37",
        "prompt": "When I called her, she ________________ dinner.",
        "options": [
          {
            "letter": "A",
            "text": "cooked"
          },
          {
            "letter": "B",
            "text": "was cooking"
          },
          {
            "letter": "C",
            "text": "cooks"
          },
          {
            "letter": "D",
            "text": "is cooking"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "打电话那一刻她正在吃饭，用过去进行时。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-38",
        "prompt": "___________ of my friends is coming to the meeting. They are busy.",
        "options": [
          {
            "letter": "A",
            "text": "Either"
          },
          {
            "letter": "B",
            "text": "Both"
          },
          {
            "letter": "C",
            "text": "Neither"
          },
          {
            "letter": "D",
            "text": "Everyone"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "他们都很忙，所以一个也不来：Neither of my friends is…",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-39",
        "prompt": "I’ve never been to _________ Maldives!",
        "options": [
          {
            "letter": "A",
            "text": "a"
          },
          {
            "letter": "B",
            "text": "an"
          },
          {
            "letter": "C",
            "text": "the"
          },
          {
            "letter": "D",
            "text": "-"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "群岛名称前通常加 the：the Maldives。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-40",
        "prompt": "The _________ number of species on Earth is estimated to be around 8.7 million.",
        "options": [
          {
            "letter": "A",
            "text": "total"
          },
          {
            "letter": "B",
            "text": "sum"
          },
          {
            "letter": "C",
            "text": "round"
          },
          {
            "letter": "D",
            "text": "final"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "总数用 total number。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-41",
        "prompt": "A circus is a form of _____________ that typically features a company of performers.",
        "options": [
          {
            "letter": "A",
            "text": "entertaining"
          },
          {
            "letter": "B",
            "text": "fun"
          },
          {
            "letter": "C",
            "text": "entertainment"
          },
          {
            "letter": "D",
            "text": "activity"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "a form of 后接名词 entertainment。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-42",
        "prompt": "If doctors say everything is okay, he ______________ out the day after tomorrow.",
        "options": [
          {
            "letter": "A",
            "text": "is coming"
          },
          {
            "letter": "B",
            "text": "will be"
          },
          {
            "letter": "C",
            "text": "is going"
          },
          {
            "letter": "D",
            "text": "is returning"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "he will be out 表示后天可以出院/外出。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-43",
        "prompt": "None of us ______________ to experience another pandemic.",
        "options": [
          {
            "letter": "A",
            "text": "want"
          },
          {
            "letter": "B",
            "text": "wants"
          },
          {
            "letter": "C",
            "text": "is wanting"
          },
          {
            "letter": "D",
            "text": "are wanting"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "None of us 后动词常用单数 wants。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-44",
        "prompt": "If you hadn’t made that wrong turn, we ________________ arrived by now.",
        "options": [
          {
            "letter": "A",
            "text": "will"
          },
          {
            "letter": "B",
            "text": "would have"
          },
          {
            "letter": "C",
            "text": "wouldn’t"
          },
          {
            "letter": "D",
            "text": "would"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "与过去相反的虚拟：would have arrived。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-45",
        "prompt": "Suzy _____________ her keys yesterday.",
        "options": [
          {
            "letter": "A",
            "text": "lost"
          },
          {
            "letter": "B",
            "text": "have lost"
          },
          {
            "letter": "C",
            "text": "was lost"
          },
          {
            "letter": "D",
            "text": "had lost"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "yesterday 用一般过去时 lost。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-46",
        "prompt": "Veronica _____________ breakfast and then went to work.",
        "options": [
          {
            "letter": "A",
            "text": "was having"
          },
          {
            "letter": "B",
            "text": "has"
          },
          {
            "letter": "C",
            "text": "had"
          },
          {
            "letter": "D",
            "text": "having"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "两个先后发生的过去动作，用 had … and then went。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-47",
        "prompt": "There isn’t _____________ milk in the fridge.",
        "options": [
          {
            "letter": "A",
            "text": "some"
          },
          {
            "letter": "B",
            "text": "much"
          },
          {
            "letter": "C",
            "text": "few"
          },
          {
            "letter": "D",
            "text": "many"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "milk 不可数，否定句用 much。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-48",
        "prompt": "_____________ he invites me to the party, I will stay at home.",
        "options": [
          {
            "letter": "A",
            "text": "If"
          },
          {
            "letter": "B",
            "text": "Should"
          },
          {
            "letter": "C",
            "text": "Can"
          },
          {
            "letter": "D",
            "text": "Unless"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "除非他邀请，否则就待在家：Unless。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-49",
        "prompt": "Scientists say that insects make ___________ the vast majority of animal species.",
        "options": [
          {
            "letter": "A",
            "text": "out"
          },
          {
            "letter": "B",
            "text": "on"
          },
          {
            "letter": "C",
            "text": "in"
          },
          {
            "letter": "D",
            "text": "up"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "固定搭配：make up（占、构成）。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-50",
        "prompt": "I think I ________________ chocolate since I was born.",
        "options": [
          {
            "letter": "A",
            "text": "’ve been liking"
          },
          {
            "letter": "B",
            "text": "like"
          },
          {
            "letter": "C",
            "text": "don’t like"
          },
          {
            "letter": "D",
            "text": "’ve liked"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "since I was born 用现在完成时；like 一般不用完成进行时。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-51",
        "prompt": "I’m not used to ______________ dinner at 6pm – in my country we have dinner late.",
        "options": [
          {
            "letter": "A",
            "text": "have"
          },
          {
            "letter": "B",
            "text": "having"
          },
          {
            "letter": "C",
            "text": "had"
          },
          {
            "letter": "D",
            "text": "has had"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "be used to 后接动名词 having。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-52",
        "prompt": "The lights _________ in the whole building because of the earthquake.",
        "options": [
          {
            "letter": "A",
            "text": "came off"
          },
          {
            "letter": "B",
            "text": "went on"
          },
          {
            "letter": "C",
            "text": "went off"
          },
          {
            "letter": "D",
            "text": "gave off"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "灯因地震熄灭，用 went off。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-53",
        "prompt": "There was ___________ bad weather that we had to stay home all day.",
        "options": [
          {
            "letter": "A",
            "text": "such"
          },
          {
            "letter": "B",
            "text": "such a"
          },
          {
            "letter": "C",
            "text": "so"
          },
          {
            "letter": "D",
            "text": "much"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "weather 不可数，用 such bad weather（不能用 such a）。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      },
      {
        "id": "h3-uoe-54",
        "prompt": "The British are very fond ____________ tea.",
        "options": [
          {
            "letter": "A",
            "text": "off"
          },
          {
            "letter": "B",
            "text": "about"
          },
          {
            "letter": "C",
            "text": "on"
          },
          {
            "letter": "D",
            "text": "of"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "固定搭配：be fond of。",
        "source": "2026 Preliminary Hippo 3 Use of English MC Test V1 + HIPPO 3-S2 MC KEY",
        "multi": false
      }
    ],
    "hippo4": [
      {
        "id": "h4-r1-01",
        "context": "Recent studies show that many girls aged 12–16 take part in very little physical activity.",
        "prompt": "The data also _______ that a large number of girls stop being active as they enter their teenage years.",
        "options": [
          {
            "letter": "A",
            "text": "matches"
          },
          {
            "letter": "B",
            "text": "approves"
          },
          {
            "letter": "C",
            "text": "indicates"
          },
          {
            "letter": "D",
            "text": "returns"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "data indicates that… 表示“数据显示”。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-r1-02",
        "context": "Researchers have tried to understand why many teenage girls stop playing sport.",
        "prompt": "Researchers have tried to understand _______ this is happening.",
        "options": [
          {
            "letter": "A",
            "text": "if"
          },
          {
            "letter": "B",
            "text": "when"
          },
          {
            "letter": "C",
            "text": "where"
          },
          {
            "letter": "D",
            "text": "why"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "要理解“为什么”发生，用 why。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-r1-03",
        "prompt": "Others said they didn’t receive enough _______ from teachers, coaches, or family members.",
        "options": [
          {
            "letter": "A",
            "text": "support"
          },
          {
            "letter": "B",
            "text": "offers"
          },
          {
            "letter": "C",
            "text": "time"
          },
          {
            "letter": "D",
            "text": "gifts"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "来自老师、教练或家人的是 support（支持）。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-r1-04",
        "prompt": "Schoolwork and exam preparation often _______ priority, leaving little time for exercise.",
        "options": [
          {
            "letter": "A",
            "text": "like"
          },
          {
            "letter": "B",
            "text": "give"
          },
          {
            "letter": "C",
            "text": "take"
          },
          {
            "letter": "D",
            "text": "make"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "固定搭配：take priority（占优先）。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-r1-05",
        "prompt": "Around two fifths of teenage girls feel that their parents are not _______ for them to join sports clubs or teams.",
        "options": [
          {
            "letter": "A",
            "text": "certain"
          },
          {
            "letter": "B",
            "text": "keen"
          },
          {
            "letter": "C",
            "text": "clear"
          },
          {
            "letter": "D",
            "text": "afraid"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "be keen for someone to do 表示很希望对方去做。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-r1-06",
        "prompt": "More than one in ten parents said they were unsure whether sport is as _______ for girls as it is for boys.",
        "options": [
          {
            "letter": "A",
            "text": "difficult"
          },
          {
            "letter": "B",
            "text": "active"
          },
          {
            "letter": "C",
            "text": "important"
          },
          {
            "letter": "D",
            "text": "limited"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "是否对女孩和对男孩同样 important。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-r1-07",
        "prompt": "The research team also questioned adults about their general _______ girls playing sport.",
        "options": [
          {
            "letter": "A",
            "text": "attitude to"
          },
          {
            "letter": "B",
            "text": "feature of"
          },
          {
            "letter": "C",
            "text": "excuse for"
          },
          {
            "letter": "D",
            "text": "answer to"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "对女孩参与运动的态度：attitude to。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-r1-08",
        "prompt": "Nearly a quarter felt that boys have a better _______ of becoming professional athletes.",
        "options": [
          {
            "letter": "A",
            "text": "option"
          },
          {
            "letter": "B",
            "text": "promise"
          },
          {
            "letter": "C",
            "text": "skill"
          },
          {
            "letter": "D",
            "text": "chance"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "“更好的机会”是 a better chance of…",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-r1-09",
        "prompt": "_______ these views, most adults in the study agreed that sport is valuable for girls.",
        "options": [
          {
            "letter": "A",
            "text": "Because of"
          },
          {
            "letter": "B",
            "text": "However"
          },
          {
            "letter": "C",
            "text": "During"
          },
          {
            "letter": "D",
            "text": "Despite"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "尽管有这些看法，大多数人仍同意运动有价值：Despite。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-r1-10",
        "prompt": "They also _______ that regular physical activity can help young people build confidence, manage stress, and develop important social skills.",
        "options": [
          {
            "letter": "A",
            "text": "proposed"
          },
          {
            "letter": "B",
            "text": "recognised"
          },
          {
            "letter": "C",
            "text": "delivered"
          },
          {
            "letter": "D",
            "text": "complained"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "他们也认识到 recognised 这些好处。",
        "source": "2026 Preliminary Hippo 4 Reading Task 1 + B1 Reading Key 2026",
        "multi": false
      },
      {
        "id": "h4-uoe-35",
        "prompt": "Noah got his girlfriend _____________ him a huge birthday cake.",
        "options": [
          {
            "letter": "A",
            "text": "to bake"
          },
          {
            "letter": "B",
            "text": "bake"
          },
          {
            "letter": "C",
            "text": "baking"
          },
          {
            "letter": "D",
            "text": "baked"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "get someone to do something：让某人做某事。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-36",
        "prompt": "She ______________ her homework before she went out.",
        "options": [
          {
            "letter": "A",
            "text": "had finished"
          },
          {
            "letter": "B",
            "text": "has finished"
          },
          {
            "letter": "C",
            "text": "finished"
          },
          {
            "letter": "D",
            "text": "was finished"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "出门前已经完成，用过去完成时 had finished。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-37",
        "prompt": "He was found guilty and given a ten-year _______________.",
        "options": [
          {
            "letter": "A",
            "text": "verdict"
          },
          {
            "letter": "B",
            "text": "accusation"
          },
          {
            "letter": "C",
            "text": "punishment"
          },
          {
            "letter": "D",
            "text": "sentence"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "十年徒刑：a ten-year sentence。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-38",
        "prompt": "Could you ______________ the cream until it’s smooth?",
        "options": [
          {
            "letter": "A",
            "text": "whisk"
          },
          {
            "letter": "B",
            "text": "stir"
          },
          {
            "letter": "C",
            "text": "mix"
          },
          {
            "letter": "D",
            "text": "shake"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "把奶油搅打至顺滑，用 whisk。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-39",
        "prompt": "The teacher asked if we ______________ our homework yet.",
        "options": [
          {
            "letter": "A",
            "text": "did"
          },
          {
            "letter": "B",
            "text": "do"
          },
          {
            "letter": "C",
            "text": "have done"
          },
          {
            "letter": "D",
            "text": "had done"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "主句是过去时 asked，从句用过去完成时 had done。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-40",
        "prompt": "I didn’t really like the stew, it was somewhat _______________.",
        "options": [
          {
            "letter": "A",
            "text": "sensational"
          },
          {
            "letter": "B",
            "text": "jaded"
          },
          {
            "letter": "C",
            "text": "bland"
          },
          {
            "letter": "D",
            "text": "blend"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "不太喜欢，因为味道 bland（淡而无味）。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-41",
        "prompt": "____________ Pacific Ocean is the largest in the world.",
        "options": [
          {
            "letter": "A",
            "text": "The"
          },
          {
            "letter": "B",
            "text": "A"
          },
          {
            "letter": "C",
            "text": "An"
          },
          {
            "letter": "D",
            "text": "-"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "海洋名称前加 the：the Pacific Ocean。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-42",
        "prompt": "I’ve never heard such __________ strange story before.",
        "options": [
          {
            "letter": "A",
            "text": "a"
          },
          {
            "letter": "B",
            "text": "an"
          },
          {
            "letter": "C",
            "text": "the"
          },
          {
            "letter": "D",
            "text": "-"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "such a strange story（辅音开头）。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-43",
        "prompt": "He is quite well ____________, he can afford all the luxuries he wants.",
        "options": [
          {
            "letter": "A",
            "text": "on"
          },
          {
            "letter": "B",
            "text": "of"
          },
          {
            "letter": "C",
            "text": "off"
          },
          {
            "letter": "D",
            "text": "done"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "well off 表示富裕。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-44",
        "prompt": "She ___________ here for two weeks and still hasn’t met anyone.",
        "options": [
          {
            "letter": "A",
            "text": "was"
          },
          {
            "letter": "B",
            "text": "has been"
          },
          {
            "letter": "C",
            "text": "had been"
          },
          {
            "letter": "D",
            "text": "being"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "for two weeks 且与现在有关，用现在完成时 has been。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-45",
        "prompt": "By the time we reach the station, the train ____________.",
        "options": [
          {
            "letter": "A",
            "text": "will leave"
          },
          {
            "letter": "B",
            "text": "has left"
          },
          {
            "letter": "C",
            "text": "will have left"
          },
          {
            "letter": "D",
            "text": "is about to leave"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "到将来某一时刻之前已经离开，用将来完成时 will have left。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-46",
        "prompt": "She sounded quite _____________, you could see it was an unpleasant experience for her.",
        "options": [
          {
            "letter": "A",
            "text": "arrogant"
          },
          {
            "letter": "B",
            "text": "anxious"
          },
          {
            "letter": "C",
            "text": "detached"
          },
          {
            "letter": "D",
            "text": "relieved"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "不愉快的经历，听起来 anxious（焦虑）。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-47",
        "prompt": "If you had explained your idea more clearly, they ________________ it.",
        "options": [
          {
            "letter": "A",
            "text": "might have accepted"
          },
          {
            "letter": "B",
            "text": "accepted"
          },
          {
            "letter": "C",
            "text": "will have accepted"
          },
          {
            "letter": "D",
            "text": "will accept"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "与过去相反的虚拟：might have accepted。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-48",
        "prompt": "Sarah behaved so ____________ during the meeting that everyone felt uncomfortable.",
        "options": [
          {
            "letter": "A",
            "text": "anxiously"
          },
          {
            "letter": "B",
            "text": "arrogantly"
          },
          {
            "letter": "C",
            "text": "apprehensively"
          },
          {
            "letter": "D",
            "text": "timidly"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "让大家都感到不舒服，官方答案是 arrogantly（傲慢地）。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-49",
        "prompt": "The students wondered why their test results _________________ yet.",
        "options": [
          {
            "letter": "A",
            "text": "haven’t been posted"
          },
          {
            "letter": "B",
            "text": "aren’t posted"
          },
          {
            "letter": "C",
            "text": "hadn’t been posted"
          },
          {
            "letter": "D",
            "text": "didn’t post"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "wondered 是过去时，从句用 hadn’t been posted。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-50",
        "prompt": "He ______________ his coffee when the phone rang.",
        "options": [
          {
            "letter": "A",
            "text": "have just finished"
          },
          {
            "letter": "B",
            "text": "had just finished"
          },
          {
            "letter": "C",
            "text": "has just finished"
          },
          {
            "letter": "D",
            "text": "having just finished"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "电话响之前刚喝完，用过去完成时 had just finished。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-51",
        "prompt": "Mrs. Smith refused ________________ the firemen into her house.",
        "options": [
          {
            "letter": "A",
            "text": "allowing"
          },
          {
            "letter": "B",
            "text": "to allowing"
          },
          {
            "letter": "C",
            "text": "that she allowed"
          },
          {
            "letter": "D",
            "text": "to allow"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "refuse to do something。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-52",
        "prompt": "I am in two ______________ about whether to go to the wedding or not.",
        "options": [
          {
            "letter": "A",
            "text": "hearts"
          },
          {
            "letter": "B",
            "text": "thoughts"
          },
          {
            "letter": "C",
            "text": "minds"
          },
          {
            "letter": "D",
            "text": "brains"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "固定搭配：be in two minds（犹豫不决）。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-53",
        "prompt": "Only €100 for that dress? That’s a real _________________!",
        "options": [
          {
            "letter": "A",
            "text": "sale"
          },
          {
            "letter": "B",
            "text": "bargain"
          },
          {
            "letter": "C",
            "text": "contract"
          },
          {
            "letter": "D",
            "text": "donation"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "很便宜，是 a real bargain。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      },
      {
        "id": "h4-uoe-54",
        "prompt": "I honestly don’t know how you __________ up with Milly’s nagging all the time!",
        "options": [
          {
            "letter": "A",
            "text": "put"
          },
          {
            "letter": "B",
            "text": "make"
          },
          {
            "letter": "C",
            "text": "do"
          },
          {
            "letter": "D",
            "text": "go"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "固定搭配：put up with（忍受）。",
        "source": "2026 Preliminary Hippo 4 Use of English MC Test V1 + HIPPO 4-S3 MC KEY",
        "multi": false
      }
    ],
    "hippo5": [
      {
        "id": "h5-uoe-41",
        "prompt": "Neither of the answers ______________ correct.",
        "options": [
          {
            "letter": "A",
            "text": "are"
          },
          {
            "letter": "B",
            "text": "were"
          },
          {
            "letter": "C",
            "text": "is"
          },
          {
            "letter": "D",
            "text": "be"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "官方答案为 is（Neither of… 后常用单数）。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-42",
        "prompt": "If only I ______________ harder for the test!",
        "options": [
          {
            "letter": "A",
            "text": "study"
          },
          {
            "letter": "B",
            "text": "had studied"
          },
          {
            "letter": "C",
            "text": "have studied"
          },
          {
            "letter": "D",
            "text": "would study"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "If only 对过去的 regretting，用 had studied。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-43",
        "prompt": "He said he ______________ her before.",
        "options": [
          {
            "letter": "A",
            "text": "saw"
          },
          {
            "letter": "B",
            "text": "have seen"
          },
          {
            "letter": "C",
            "text": "had seen"
          },
          {
            "letter": "D",
            "text": "was seen"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "间接引语里，“之前见过”用过去完成时 had seen。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-44",
        "prompt": "She had her house ______________ last summer.",
        "options": [
          {
            "letter": "A",
            "text": "paint"
          },
          {
            "letter": "B",
            "text": "painted"
          },
          {
            "letter": "C",
            "text": "for painting"
          },
          {
            "letter": "D",
            "text": "to paint"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "have something done：请人把房子粉刷了。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-45",
        "prompt": "I’ll just ______________ some ice to put in our drinks.",
        "options": [
          {
            "letter": "A",
            "text": "squeeze"
          },
          {
            "letter": "B",
            "text": "crush"
          },
          {
            "letter": "C",
            "text": "squash"
          },
          {
            "letter": "D",
            "text": "compact"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "把冰块压碎，官方答案是 crush。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-46",
        "prompt": "If you ______________ earlier, you wouldn’t have missed the bus.",
        "options": [
          {
            "letter": "A",
            "text": "leave"
          },
          {
            "letter": "B",
            "text": "left"
          },
          {
            "letter": "C",
            "text": "had left"
          },
          {
            "letter": "D",
            "text": "would leave"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "与过去相反的虚拟：If you had left earlier…",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-47",
        "prompt": "I would rather you ______________ eat in my car.",
        "options": [
          {
            "letter": "A",
            "text": "didn’t"
          },
          {
            "letter": "B",
            "text": "don’t"
          },
          {
            "letter": "C",
            "text": "haven’t"
          },
          {
            "letter": "D",
            "text": "wouldn’t"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "would rather + 主语 + 过去时，表示现在/将来的愿望。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-48",
        "prompt": "The concert ______________ by the time we arrived.",
        "options": [
          {
            "letter": "A",
            "text": "finished"
          },
          {
            "letter": "B",
            "text": "had finished"
          },
          {
            "letter": "C",
            "text": "finishes"
          },
          {
            "letter": "D",
            "text": "was finishing"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "到达之前已经结束，用过去完成时。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-49",
        "prompt": "The manager demanded that the report ______________ ready by noon.",
        "options": [
          {
            "letter": "A",
            "text": "is"
          },
          {
            "letter": "B",
            "text": "was"
          },
          {
            "letter": "C",
            "text": "be"
          },
          {
            "letter": "D",
            "text": "being"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "demand that + 动词原形（虚拟语气）：be ready。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-50",
        "prompt": "Nobody has any firm information, so we can only ______________ on what caused the accident.",
        "options": [
          {
            "letter": "A",
            "text": "convert"
          },
          {
            "letter": "B",
            "text": "grasp"
          },
          {
            "letter": "C",
            "text": "reckon"
          },
          {
            "letter": "D",
            "text": "deduce"
          }
        ],
        "answer": [
          "C"
        ],
        "explain": "官方答案为 reckon（reckon on）。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-51",
        "prompt": "He apologized ______________ being late.",
        "options": [
          {
            "letter": "A",
            "text": "for"
          },
          {
            "letter": "B",
            "text": "to"
          },
          {
            "letter": "C",
            "text": "on"
          },
          {
            "letter": "D",
            "text": "of"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "固定搭配：apologize for doing。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-52",
        "prompt": "The film was so boring that I wished I ______________ stayed home.",
        "options": [
          {
            "letter": "A",
            "text": "had"
          },
          {
            "letter": "B",
            "text": "have"
          },
          {
            "letter": "C",
            "text": "had had"
          },
          {
            "letter": "D",
            "text": "will have"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "wish + had stayed，对过去的虚拟。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-53",
        "prompt": "I’m not used to ______________ up early.",
        "options": [
          {
            "letter": "A",
            "text": "get"
          },
          {
            "letter": "B",
            "text": "getting"
          },
          {
            "letter": "C",
            "text": "have got"
          },
          {
            "letter": "D",
            "text": "got"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "be used to + doing：getting up。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-54",
        "prompt": "Scarcely ______________ he arrived when it started to rain.",
        "options": [
          {
            "letter": "A",
            "text": "had"
          },
          {
            "letter": "B",
            "text": "have"
          },
          {
            "letter": "C",
            "text": "did"
          },
          {
            "letter": "D",
            "text": "was"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "Scarcely 放句首要倒装：Scarcely had he arrived…",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-55",
        "prompt": "By next June, they ______________ in this city for twenty years.",
        "options": [
          {
            "letter": "A",
            "text": "lived"
          },
          {
            "letter": "B",
            "text": "live"
          },
          {
            "letter": "C",
            "text": "have lived"
          },
          {
            "letter": "D",
            "text": "will have lived"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "到将来某个时间已持续二十年，用将来完成时。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-56",
        "prompt": "I didn’t remember ______________ the door.",
        "options": [
          {
            "letter": "A",
            "text": "to lock"
          },
          {
            "letter": "B",
            "text": "locking"
          },
          {
            "letter": "C",
            "text": "lock"
          },
          {
            "letter": "D",
            "text": "to have locked"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "官方答案为 to lock（忘记要去做某事）。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-57",
        "prompt": "If he ______________ harder, he would pass the exam.",
        "options": [
          {
            "letter": "A",
            "text": "studied"
          },
          {
            "letter": "B",
            "text": "had studied"
          },
          {
            "letter": "C",
            "text": "study"
          },
          {
            "letter": "D",
            "text": "studies"
          }
        ],
        "answer": [
          "A"
        ],
        "explain": "与现在/将来相反的虚拟：If he studied harder, he would…",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-58",
        "prompt": "She must ______________ the message by now.",
        "options": [
          {
            "letter": "A",
            "text": "receive"
          },
          {
            "letter": "B",
            "text": "have received"
          },
          {
            "letter": "C",
            "text": "received"
          },
          {
            "letter": "D",
            "text": "has received"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "对过去的肯定推测：must have received。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-59",
        "prompt": "There isn’t ______________ information available right now.",
        "options": [
          {
            "letter": "A",
            "text": "a"
          },
          {
            "letter": "B",
            "text": "the"
          },
          {
            "letter": "C",
            "text": "an"
          },
          {
            "letter": "D",
            "text": "any"
          }
        ],
        "answer": [
          "D"
        ],
        "explain": "information 不可数，否定句用 any。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      },
      {
        "id": "h5-uoe-60",
        "prompt": "Roberto will have to ______________ his shoes quite hard to get the grass stains off them.",
        "options": [
          {
            "letter": "A",
            "text": "polish"
          },
          {
            "letter": "B",
            "text": "scrub"
          },
          {
            "letter": "C",
            "text": "pat"
          },
          {
            "letter": "D",
            "text": "crush"
          }
        ],
        "answer": [
          "B"
        ],
        "explain": "要去掉草渍，需要用力 scrub（擦洗）。",
        "source": "2026 Preliminary Hippo 5 Use of English MC Test V1 + HIPPO 5-S4 MC KEY",
        "multi": false
      }
    ]
  },
  "words": {
    "baby": [
      {
        "id": "s1-a",
        "en": "a",
        "zh": "一个（冠词）",
        "pos": "限定词",
        "spell": "a"
      },
      {
        "id": "s1-a-lot",
        "en": "a lot",
        "zh": "许多",
        "pos": "副词 / 代词",
        "spell": "a lot"
      },
      {
        "id": "s1-a-lot-of",
        "en": "a lot of",
        "zh": "许多",
        "pos": "限定词",
        "spell": "a lot of"
      },
      {
        "id": "s1-about",
        "en": "about",
        "zh": "关于",
        "pos": "介词",
        "spell": "about"
      },
      {
        "id": "s1-add",
        "en": "add",
        "zh": "加；增加",
        "pos": "动词",
        "spell": "add"
      },
      {
        "id": "s1-address",
        "en": "address",
        "zh": "地址",
        "pos": "名词",
        "spell": "address"
      },
      {
        "id": "s1-afternoon",
        "en": "afternoon",
        "zh": "下午",
        "pos": "名词",
        "spell": "afternoon"
      },
      {
        "id": "s1-again",
        "en": "again",
        "zh": "再；又",
        "pos": "副词",
        "spell": "again"
      },
      {
        "id": "s1-alien",
        "en": "alien",
        "zh": "外星人",
        "pos": "名词",
        "spell": "alien"
      },
      {
        "id": "s1-all-right",
        "en": "all right",
        "zh": "好的；没关系",
        "pos": "形容词 / 副词",
        "spell": "all right"
      },
      {
        "id": "s1-alphabet",
        "en": "alphabet",
        "zh": "字母表",
        "pos": "名词",
        "spell": "alphabet"
      },
      {
        "id": "s1-an",
        "en": "an",
        "zh": "一个（元音前）",
        "pos": "限定词",
        "spell": "an"
      },
      {
        "id": "s1-and",
        "en": "and",
        "zh": "和",
        "pos": "连词",
        "spell": "and"
      },
      {
        "id": "s1-angry",
        "en": "angry",
        "zh": "生气的",
        "pos": "形容词",
        "spell": "angry"
      },
      {
        "id": "s1-animal",
        "en": "animal",
        "zh": "动物",
        "pos": "名词",
        "spell": "animal"
      },
      {
        "id": "s1-answer",
        "en": "answer",
        "zh": "回答；答案",
        "pos": "名词 / 动词",
        "spell": "answer"
      },
      {
        "id": "s1-apartment-uk-flat",
        "en": "apartment (UK flat)",
        "zh": "公寓",
        "pos": "名词",
        "spell": "apartment"
      },
      {
        "id": "s1-apple",
        "en": "apple",
        "zh": "苹果",
        "pos": "名词",
        "spell": "apple"
      },
      {
        "id": "s1-arm",
        "en": "arm",
        "zh": "胳膊",
        "pos": "名词",
        "spell": "arm"
      },
      {
        "id": "s1-armchair",
        "en": "armchair",
        "zh": "扶手椅",
        "pos": "名词",
        "spell": "armchair"
      },
      {
        "id": "s1-ask",
        "en": "ask",
        "zh": "问",
        "pos": "动词",
        "spell": "ask"
      },
      {
        "id": "s1-at",
        "en": "at",
        "zh": "在",
        "pos": "介词",
        "spell": "at"
      },
      {
        "id": "s1-baby",
        "en": "baby",
        "zh": "婴儿",
        "pos": "名词",
        "spell": "baby"
      },
      {
        "id": "s1-badminton",
        "en": "badminton",
        "zh": "羽毛球",
        "pos": "名词",
        "spell": "badminton"
      },
      {
        "id": "s1-bag",
        "en": "bag",
        "zh": "包",
        "pos": "名词",
        "spell": "bag"
      },
      {
        "id": "s1-ball",
        "en": "ball",
        "zh": "球",
        "pos": "名词",
        "spell": "ball"
      },
      {
        "id": "s1-balloon",
        "en": "balloon",
        "zh": "气球",
        "pos": "名词",
        "spell": "balloon"
      },
      {
        "id": "s1-banana",
        "en": "banana",
        "zh": "香蕉",
        "pos": "名词",
        "spell": "banana"
      },
      {
        "id": "s1-baseball-cap",
        "en": "baseball cap",
        "zh": "棒球帽",
        "pos": "名词",
        "spell": "baseball cap"
      },
      {
        "id": "s1-baseball",
        "en": "baseball",
        "zh": "棒球",
        "pos": "名词",
        "spell": "baseball"
      },
      {
        "id": "s1-basketball",
        "en": "basketball",
        "zh": "篮球",
        "pos": "名词",
        "spell": "basketball"
      },
      {
        "id": "s1-bath",
        "en": "bath",
        "zh": "浴缸；洗澡",
        "pos": "名词",
        "spell": "bath"
      },
      {
        "id": "s1-bathroom",
        "en": "bathroom",
        "zh": "卫生间",
        "pos": "名词",
        "spell": "bathroom"
      },
      {
        "id": "s1-be",
        "en": "be",
        "zh": "是",
        "pos": "动词",
        "spell": "be"
      },
      {
        "id": "s1-beach",
        "en": "beach",
        "zh": "海滩",
        "pos": "名词",
        "spell": "beach"
      },
      {
        "id": "s1-bear",
        "en": "bear",
        "zh": "熊",
        "pos": "名词",
        "spell": "bear"
      },
      {
        "id": "s1-beautiful",
        "en": "beautiful",
        "zh": "美丽的",
        "pos": "形容词",
        "spell": "beautiful"
      },
      {
        "id": "s1-bed",
        "en": "bed",
        "zh": "床",
        "pos": "名词",
        "spell": "bed"
      },
      {
        "id": "s1-bedroom",
        "en": "bedroom",
        "zh": "卧室",
        "pos": "名词",
        "spell": "bedroom"
      },
      {
        "id": "s1-bee",
        "en": "bee",
        "zh": "蜜蜂",
        "pos": "名词",
        "spell": "bee"
      },
      {
        "id": "s1-behind",
        "en": "behind",
        "zh": "在……后面",
        "pos": "介词",
        "spell": "behind"
      },
      {
        "id": "s1-between",
        "en": "between",
        "zh": "在……之间",
        "pos": "介词",
        "spell": "between"
      },
      {
        "id": "s1-big",
        "en": "big",
        "zh": "大的",
        "pos": "形容词",
        "spell": "big"
      },
      {
        "id": "s1-birthday",
        "en": "birthday",
        "zh": "生日",
        "pos": "名词",
        "spell": "birthday"
      },
      {
        "id": "s1-black",
        "en": "black",
        "zh": "黑色的",
        "pos": "形容词",
        "spell": "black"
      },
      {
        "id": "s1-blanket",
        "en": "blanket",
        "zh": "毯子",
        "pos": "名词",
        "spell": "blanket"
      },
      {
        "id": "s1-blue",
        "en": "blue",
        "zh": "蓝色的",
        "pos": "形容词",
        "spell": "blue"
      },
      {
        "id": "s1-board-game",
        "en": "board game",
        "zh": "棋类游戏；桌游",
        "pos": "名词",
        "spell": "board game"
      },
      {
        "id": "s1-board",
        "en": "board",
        "zh": "板",
        "pos": "名词",
        "spell": "board"
      },
      {
        "id": "s1-boat",
        "en": "boat",
        "zh": "船",
        "pos": "名词",
        "spell": "boat"
      },
      {
        "id": "s1-body",
        "en": "body",
        "zh": "身体",
        "pos": "名词",
        "spell": "body"
      },
      {
        "id": "s1-book",
        "en": "book",
        "zh": "书",
        "pos": "名词",
        "spell": "book"
      },
      {
        "id": "s1-bookcase",
        "en": "bookcase",
        "zh": "书柜",
        "pos": "名词",
        "spell": "bookcase"
      },
      {
        "id": "s1-bookshop",
        "en": "bookshop",
        "zh": "书店",
        "pos": "名词",
        "spell": "bookshop"
      },
      {
        "id": "s1-boots",
        "en": "boots",
        "zh": "靴子",
        "pos": "名词",
        "spell": "boots"
      },
      {
        "id": "s1-bounce",
        "en": "bounce",
        "zh": "弹跳",
        "pos": "动词",
        "spell": "bounce"
      },
      {
        "id": "s1-box",
        "en": "box",
        "zh": "盒子",
        "pos": "名词",
        "spell": "box"
      },
      {
        "id": "s1-boy",
        "en": "boy",
        "zh": "男孩",
        "pos": "名词",
        "spell": "boy"
      },
      {
        "id": "s1-bread",
        "en": "bread",
        "zh": "面包",
        "pos": "名词",
        "spell": "bread"
      },
      {
        "id": "s1-breakfast",
        "en": "breakfast",
        "zh": "早餐",
        "pos": "名词",
        "spell": "breakfast"
      },
      {
        "id": "s1-brother",
        "en": "brother",
        "zh": "兄弟",
        "pos": "名词",
        "spell": "brother"
      },
      {
        "id": "s1-brown",
        "en": "brown",
        "zh": "棕色的",
        "pos": "形容词",
        "spell": "brown"
      },
      {
        "id": "s1-burger",
        "en": "burger",
        "zh": "汉堡",
        "pos": "名词",
        "spell": "burger"
      },
      {
        "id": "s1-bus",
        "en": "bus",
        "zh": "公共汽车",
        "pos": "名词",
        "spell": "bus"
      },
      {
        "id": "s1-but",
        "en": "but",
        "zh": "但是",
        "pos": "连词",
        "spell": "but"
      },
      {
        "id": "s1-bye",
        "en": "bye",
        "zh": "再见",
        "pos": "感叹",
        "spell": "bye"
      },
      {
        "id": "s1-cake",
        "en": "cake",
        "zh": "蛋糕",
        "pos": "名词",
        "spell": "cake"
      },
      {
        "id": "s1-camera",
        "en": "camera",
        "zh": "照相机",
        "pos": "名词",
        "spell": "camera"
      },
      {
        "id": "s1-can",
        "en": "can",
        "zh": "能；可以",
        "pos": "动词",
        "spell": "can"
      },
      {
        "id": "s1-car",
        "en": "car",
        "zh": "小汽车",
        "pos": "名词",
        "spell": "car"
      },
      {
        "id": "s1-carrot",
        "en": "carrot",
        "zh": "胡萝卜",
        "pos": "名词",
        "spell": "carrot"
      },
      {
        "id": "s1-castle",
        "en": "castle",
        "zh": "城堡",
        "pos": "名词",
        "spell": "castle"
      },
      {
        "id": "s1-cat",
        "en": "cat",
        "zh": "猫",
        "pos": "名词",
        "spell": "cat"
      },
      {
        "id": "s1-catch-e-g-a-ball",
        "en": "catch (e.g. a ball)",
        "zh": "接住",
        "pos": "动词",
        "spell": "catch"
      },
      {
        "id": "s1-chair",
        "en": "chair",
        "zh": "椅子",
        "pos": "名词",
        "spell": "chair"
      },
      {
        "id": "s1-cheese",
        "en": "cheese",
        "zh": "奶酪",
        "pos": "名词",
        "spell": "cheese"
      },
      {
        "id": "s1-chicken",
        "en": "chicken",
        "zh": "鸡；鸡肉",
        "pos": "名词",
        "spell": "chicken"
      },
      {
        "id": "s1-child-children",
        "en": "child/children",
        "zh": "孩子",
        "pos": "名词",
        "spell": "child"
      },
      {
        "id": "s1-chips-us-fries",
        "en": "chips (US fries)",
        "zh": "薯条",
        "pos": "名词",
        "spell": "chips"
      },
      {
        "id": "s1-chocolate",
        "en": "chocolate",
        "zh": "巧克力",
        "pos": "名词",
        "spell": "chocolate"
      },
      {
        "id": "s1-choose",
        "en": "choose",
        "zh": "选择",
        "pos": "动词",
        "spell": "choose"
      },
      {
        "id": "s1-clap",
        "en": "clap",
        "zh": "鼓掌",
        "pos": "动词",
        "spell": "clap"
      },
      {
        "id": "s1-class",
        "en": "class",
        "zh": "班级",
        "pos": "名词",
        "spell": "class"
      },
      {
        "id": "s1-classmate",
        "en": "classmate",
        "zh": "同学",
        "pos": "名词",
        "spell": "classmate"
      },
      {
        "id": "s1-clock",
        "en": "clock",
        "zh": "时钟",
        "pos": "名词",
        "spell": "clock"
      },
      {
        "id": "s1-close",
        "en": "close",
        "zh": "关闭",
        "pos": "动词",
        "spell": "close"
      },
      {
        "id": "s1-closed",
        "en": "closed",
        "zh": "关闭的",
        "pos": "形容词",
        "spell": "closed"
      },
      {
        "id": "s1-clothes",
        "en": "clothes",
        "zh": "衣服",
        "pos": "名词",
        "spell": "clothes"
      },
      {
        "id": "s1-cloud",
        "en": "cloud",
        "zh": "云",
        "pos": "名词",
        "spell": "cloud"
      },
      {
        "id": "s1-coconut",
        "en": "coconut",
        "zh": "椰子",
        "pos": "名词",
        "spell": "coconut"
      },
      {
        "id": "s1-come",
        "en": "come",
        "zh": "来",
        "pos": "动词",
        "spell": "come"
      },
      {
        "id": "s1-complete",
        "en": "complete",
        "zh": "完成",
        "pos": "动词",
        "spell": "complete"
      },
      {
        "id": "s1-computer",
        "en": "computer",
        "zh": "电脑",
        "pos": "名词",
        "spell": "computer"
      },
      {
        "id": "s1-cool",
        "en": "cool",
        "zh": "酷的；凉爽的",
        "pos": "形容词 / 感叹",
        "spell": "cool"
      },
      {
        "id": "s1-correct",
        "en": "correct",
        "zh": "正确的",
        "pos": "形容词",
        "spell": "correct"
      },
      {
        "id": "s1-count",
        "en": "count",
        "zh": "数",
        "pos": "动词",
        "spell": "count"
      },
      {
        "id": "s1-cousin",
        "en": "cousin",
        "zh": "表亲；堂亲",
        "pos": "名词",
        "spell": "cousin"
      },
      {
        "id": "s1-cow",
        "en": "cow",
        "zh": "奶牛",
        "pos": "名词",
        "spell": "cow"
      },
      {
        "id": "s1-crayon",
        "en": "crayon",
        "zh": "蜡笔",
        "pos": "名词",
        "spell": "crayon"
      },
      {
        "id": "s1-crocodile",
        "en": "crocodile",
        "zh": "鳄鱼",
        "pos": "名词",
        "spell": "crocodile"
      },
      {
        "id": "s1-cross",
        "en": "cross",
        "zh": "十字；划掉",
        "pos": "名词 / 动词",
        "spell": "cross"
      },
      {
        "id": "s1-cup",
        "en": "cup",
        "zh": "杯子",
        "pos": "名词",
        "spell": "cup"
      },
      {
        "id": "s1-cupboard",
        "en": "cupboard",
        "zh": "橱柜",
        "pos": "名词",
        "spell": "cupboard"
      },
      {
        "id": "s1-dad",
        "en": "dad",
        "zh": "爸爸",
        "pos": "名词",
        "spell": "dad"
      },
      {
        "id": "s1-day",
        "en": "day",
        "zh": "天；日子",
        "pos": "名词",
        "spell": "day"
      },
      {
        "id": "s1-desk",
        "en": "desk",
        "zh": "书桌",
        "pos": "名词",
        "spell": "desk"
      },
      {
        "id": "s1-dining-room",
        "en": "dining room",
        "zh": "餐厅",
        "pos": "名词",
        "spell": "dining room"
      },
      {
        "id": "s1-dinner",
        "en": "dinner",
        "zh": "晚餐",
        "pos": "名词",
        "spell": "dinner"
      },
      {
        "id": "s1-dirty",
        "en": "dirty",
        "zh": "脏的",
        "pos": "形容词",
        "spell": "dirty"
      },
      {
        "id": "s1-do",
        "en": "do",
        "zh": "做",
        "pos": "动词",
        "spell": "do"
      },
      {
        "id": "s1-doll",
        "en": "doll",
        "zh": "玩具娃娃",
        "pos": "名词",
        "spell": "doll"
      },
      {
        "id": "s1-don-t-worry",
        "en": "don’t worry",
        "zh": "别担心",
        "pos": "感叹",
        "spell": "don’t worry"
      },
      {
        "id": "s1-donkey",
        "en": "donkey",
        "zh": "驴",
        "pos": "名词",
        "spell": "donkey"
      },
      {
        "id": "s1-door",
        "en": "door",
        "zh": "门",
        "pos": "名词",
        "spell": "door"
      },
      {
        "id": "s1-double",
        "en": "double",
        "zh": "双的；两倍的",
        "pos": "形容词",
        "spell": "double"
      },
      {
        "id": "s1-dragon",
        "en": "dragon",
        "zh": "龙",
        "pos": "名词",
        "spell": "dragon"
      },
      {
        "id": "s1-draw",
        "en": "draw",
        "zh": "画画",
        "pos": "动词",
        "spell": "draw"
      },
      {
        "id": "s1-drawing",
        "en": "drawing",
        "zh": "图画",
        "pos": "名词",
        "spell": "drawing"
      },
      {
        "id": "s1-dress",
        "en": "dress",
        "zh": "连衣裙",
        "pos": "名词",
        "spell": "dress"
      },
      {
        "id": "s1-drink",
        "en": "drink",
        "zh": "喝；饮料",
        "pos": "名词 / 动词",
        "spell": "drink"
      },
      {
        "id": "s1-drive",
        "en": "drive",
        "zh": "开车",
        "pos": "动词",
        "spell": "drive"
      },
      {
        "id": "s1-duck",
        "en": "duck",
        "zh": "鸭子",
        "pos": "名词",
        "spell": "duck"
      },
      {
        "id": "s1-ear",
        "en": "ear",
        "zh": "耳朵",
        "pos": "名词",
        "spell": "ear"
      },
      {
        "id": "s1-eat",
        "en": "eat",
        "zh": "吃",
        "pos": "动词",
        "spell": "eat"
      },
      {
        "id": "s1-end",
        "en": "end",
        "zh": "结尾；结束",
        "pos": "名词",
        "spell": "end"
      },
      {
        "id": "s1-english",
        "en": "English",
        "zh": "英语；英国的",
        "pos": "形容词 / 名词",
        "spell": "English"
      },
      {
        "id": "s1-enjoy",
        "en": "enjoy",
        "zh": "享受",
        "pos": "动词",
        "spell": "enjoy"
      },
      {
        "id": "s1-eraser-uk-rubber",
        "en": "eraser (UK rubber)",
        "zh": "橡皮",
        "pos": "名词",
        "spell": "eraser"
      },
      {
        "id": "s1-evening",
        "en": "evening",
        "zh": "晚上",
        "pos": "名词",
        "spell": "evening"
      },
      {
        "id": "s1-example",
        "en": "example",
        "zh": "例子",
        "pos": "名词",
        "spell": "example"
      },
      {
        "id": "s1-eye",
        "en": "eye",
        "zh": "眼睛",
        "pos": "名词",
        "spell": "eye"
      },
      {
        "id": "s1-face",
        "en": "face",
        "zh": "脸",
        "pos": "名词",
        "spell": "face"
      },
      {
        "id": "s1-family",
        "en": "family",
        "zh": "家庭",
        "pos": "名词",
        "spell": "family"
      },
      {
        "id": "s1-fantastic",
        "en": "fantastic",
        "zh": "极好的",
        "pos": "形容词 / 感叹",
        "spell": "fantastic"
      },
      {
        "id": "s1-farm",
        "en": "farm",
        "zh": "农场",
        "pos": "名词",
        "spell": "farm"
      },
      {
        "id": "s1-father",
        "en": "father",
        "zh": "父亲",
        "pos": "名词",
        "spell": "father"
      },
      {
        "id": "s1-favourite-us-favorite",
        "en": "favourite (US favorite)",
        "zh": "最喜欢的",
        "pos": "形容词",
        "spell": "favourite"
      },
      {
        "id": "s1-find",
        "en": "find",
        "zh": "找到",
        "pos": "动词",
        "spell": "find"
      },
      {
        "id": "s1-finger",
        "en": "finger",
        "zh": "手指",
        "pos": "名词",
        "spell": "finger"
      },
      {
        "id": "s1-fish-s-pl",
        "en": "fish (s + pl)",
        "zh": "鱼",
        "pos": "名词",
        "spell": "fish"
      },
      {
        "id": "s1-fishing",
        "en": "fishing",
        "zh": "钓鱼",
        "pos": "名词",
        "spell": "fishing"
      },
      {
        "id": "s1-flat-us-apartment",
        "en": "flat (US apartment)",
        "zh": "公寓",
        "pos": "名词",
        "spell": "flat"
      },
      {
        "id": "s1-floor",
        "en": "floor",
        "zh": "地板；楼层",
        "pos": "名词",
        "spell": "floor"
      },
      {
        "id": "s1-flower",
        "en": "flower",
        "zh": "花",
        "pos": "名词",
        "spell": "flower"
      },
      {
        "id": "s1-fly",
        "en": "fly",
        "zh": "飞；苍蝇",
        "pos": "动词",
        "spell": "fly"
      },
      {
        "id": "s1-food",
        "en": "food",
        "zh": "食物",
        "pos": "名词",
        "spell": "food"
      },
      {
        "id": "s1-foot-feet",
        "en": "foot/feet",
        "zh": "脚",
        "pos": "名词",
        "spell": "foot"
      },
      {
        "id": "s1-football-us-soccer",
        "en": "football (US soccer)",
        "zh": "足球",
        "pos": "名词",
        "spell": "football"
      },
      {
        "id": "s1-for",
        "en": "for",
        "zh": "为了",
        "pos": "介词",
        "spell": "for"
      },
      {
        "id": "s1-fork",
        "en": "fork",
        "zh": "叉子",
        "pos": "名词",
        "spell": "fork"
      },
      {
        "id": "s1-friend",
        "en": "friend",
        "zh": "朋友",
        "pos": "名词",
        "spell": "friend"
      },
      {
        "id": "s1-fries-uk-chips",
        "en": "fries (UK chips)",
        "zh": "薯条",
        "pos": "名词",
        "spell": "fries"
      },
      {
        "id": "s1-frog",
        "en": "frog",
        "zh": "青蛙",
        "pos": "名词",
        "spell": "frog"
      },
      {
        "id": "s1-from",
        "en": "from",
        "zh": "从",
        "pos": "介词",
        "spell": "from"
      },
      {
        "id": "s1-fruit",
        "en": "fruit",
        "zh": "水果",
        "pos": "名词",
        "spell": "fruit"
      },
      {
        "id": "s1-fun",
        "en": "fun",
        "zh": "有趣；乐趣",
        "pos": "形容词 / 名词",
        "spell": "fun"
      },
      {
        "id": "s1-funny",
        "en": "funny",
        "zh": "好笑的",
        "pos": "形容词",
        "spell": "funny"
      },
      {
        "id": "s1-game",
        "en": "game",
        "zh": "游戏",
        "pos": "名词",
        "spell": "game"
      },
      {
        "id": "s1-garden",
        "en": "garden",
        "zh": "花园",
        "pos": "名词",
        "spell": "garden"
      },
      {
        "id": "s1-get",
        "en": "get",
        "zh": "得到；到达",
        "pos": "动词",
        "spell": "get"
      },
      {
        "id": "s1-ghost",
        "en": "ghost",
        "zh": "鬼",
        "pos": "名词",
        "spell": "ghost"
      },
      {
        "id": "s1-giraffe",
        "en": "giraffe",
        "zh": "长颈鹿",
        "pos": "名词",
        "spell": "giraffe"
      },
      {
        "id": "s1-girl",
        "en": "girl",
        "zh": "女孩",
        "pos": "名词",
        "spell": "girl"
      },
      {
        "id": "s1-give",
        "en": "give",
        "zh": "给",
        "pos": "动词",
        "spell": "give"
      },
      {
        "id": "s1-glasses",
        "en": "glasses",
        "zh": "眼镜",
        "pos": "名词",
        "spell": "glasses"
      },
      {
        "id": "s1-glove",
        "en": "glove",
        "zh": "手套",
        "pos": "名词",
        "spell": "glove"
      },
      {
        "id": "s1-go",
        "en": "go",
        "zh": "去",
        "pos": "动词",
        "spell": "go"
      },
      {
        "id": "s1-goat",
        "en": "goat",
        "zh": "山羊",
        "pos": "名词",
        "spell": "goat"
      },
      {
        "id": "s1-good",
        "en": "good",
        "zh": "好的",
        "pos": "形容词",
        "spell": "good"
      },
      {
        "id": "s1-goodbye",
        "en": "goodbye",
        "zh": "再见",
        "pos": "感叹",
        "spell": "goodbye"
      },
      {
        "id": "s1-grandfather",
        "en": "grandfather",
        "zh": "祖父",
        "pos": "名词",
        "spell": "grandfather"
      },
      {
        "id": "s1-grandma",
        "en": "grandma",
        "zh": "奶奶；外婆",
        "pos": "名词",
        "spell": "grandma"
      },
      {
        "id": "s1-grandmother",
        "en": "grandmother",
        "zh": "祖母",
        "pos": "名词",
        "spell": "grandmother"
      },
      {
        "id": "s1-grandpa",
        "en": "grandpa",
        "zh": "爷爷；外公",
        "pos": "名词",
        "spell": "grandpa"
      },
      {
        "id": "s1-grape",
        "en": "grape",
        "zh": "葡萄",
        "pos": "名词",
        "spell": "grape"
      },
      {
        "id": "s1-gray-uk-grey",
        "en": "gray (UK grey)",
        "zh": "灰色的",
        "pos": "形容词",
        "spell": "gray"
      },
      {
        "id": "s1-great",
        "en": "great",
        "zh": "很棒的",
        "pos": "形容词 / 感叹",
        "spell": "great"
      },
      {
        "id": "s1-green",
        "en": "green",
        "zh": "绿色的",
        "pos": "形容词",
        "spell": "green"
      },
      {
        "id": "s1-grey-us-gray",
        "en": "grey (US gray)",
        "zh": "灰色的",
        "pos": "形容词",
        "spell": "grey"
      },
      {
        "id": "s1-guitar",
        "en": "guitar",
        "zh": "吉他",
        "pos": "名词",
        "spell": "guitar"
      },
      {
        "id": "s1-hair",
        "en": "hair",
        "zh": "头发",
        "pos": "名词",
        "spell": "hair"
      },
      {
        "id": "s1-hall",
        "en": "hall",
        "zh": "大厅",
        "pos": "名词",
        "spell": "hall"
      },
      {
        "id": "s1-hand",
        "en": "hand",
        "zh": "手",
        "pos": "名词",
        "spell": "hand"
      },
      {
        "id": "s1-handbag",
        "en": "handbag",
        "zh": "手提包",
        "pos": "名词",
        "spell": "handbag"
      },
      {
        "id": "s1-happy",
        "en": "happy",
        "zh": "高兴的",
        "pos": "形容词",
        "spell": "happy"
      },
      {
        "id": "s1-hat",
        "en": "hat",
        "zh": "帽子",
        "pos": "名词",
        "spell": "hat"
      },
      {
        "id": "s1-have-got",
        "en": "have got",
        "zh": "有",
        "pos": "动词",
        "spell": "have got"
      },
      {
        "id": "s1-have",
        "en": "have",
        "zh": "有；吃",
        "pos": "动词",
        "spell": "have"
      },
      {
        "id": "s1-he",
        "en": "he",
        "zh": "他",
        "pos": "代词",
        "spell": "he"
      },
      {
        "id": "s1-head",
        "en": "head",
        "zh": "头",
        "pos": "名词",
        "spell": "head"
      },
      {
        "id": "s1-helicopter",
        "en": "helicopter",
        "zh": "直升机",
        "pos": "名词",
        "spell": "helicopter"
      },
      {
        "id": "s1-hello",
        "en": "hello",
        "zh": "你好",
        "pos": "感叹",
        "spell": "hello"
      },
      {
        "id": "s1-her",
        "en": "her",
        "zh": "她的；她",
        "pos": "形容词 / 代词",
        "spell": "her"
      },
      {
        "id": "s1-here",
        "en": "here",
        "zh": "这里",
        "pos": "副词",
        "spell": "here"
      },
      {
        "id": "s1-hers",
        "en": "hers",
        "zh": "她的（名词性）",
        "pos": "代词",
        "spell": "hers"
      },
      {
        "id": "s1-hi",
        "en": "hi",
        "zh": "嗨",
        "pos": "感叹",
        "spell": "hi"
      },
      {
        "id": "s1-him",
        "en": "him",
        "zh": "他（宾格）",
        "pos": "代词",
        "spell": "him"
      },
      {
        "id": "s1-hippo",
        "en": "hippo",
        "zh": "河马",
        "pos": "名词",
        "spell": "hippo"
      },
      {
        "id": "s1-his",
        "en": "his",
        "zh": "他的",
        "pos": "形容词 / 代词",
        "spell": "his"
      },
      {
        "id": "s1-hit",
        "en": "hit",
        "zh": "打；击",
        "pos": "动词",
        "spell": "hit"
      },
      {
        "id": "s1-hobby",
        "en": "hobby",
        "zh": "爱好",
        "pos": "名词",
        "spell": "hobby"
      },
      {
        "id": "s1-hockey",
        "en": "hockey",
        "zh": "曲棍球",
        "pos": "名词",
        "spell": "hockey"
      },
      {
        "id": "s1-hold",
        "en": "hold",
        "zh": "握住",
        "pos": "动词",
        "spell": "hold"
      },
      {
        "id": "s1-home",
        "en": "home",
        "zh": "家",
        "pos": "名词 / 副词",
        "spell": "home"
      },
      {
        "id": "s1-hooray",
        "en": "hooray",
        "zh": "好哇",
        "pos": "感叹",
        "spell": "hooray"
      },
      {
        "id": "s1-horse",
        "en": "horse",
        "zh": "马",
        "pos": "名词",
        "spell": "horse"
      },
      {
        "id": "s1-house",
        "en": "house",
        "zh": "房子",
        "pos": "名词",
        "spell": "house"
      },
      {
        "id": "s1-how",
        "en": "how",
        "zh": "怎样",
        "pos": "疑问词",
        "spell": "how"
      },
      {
        "id": "s1-how-many",
        "en": "how many",
        "zh": "多少（可数）",
        "pos": "疑问词",
        "spell": "how many"
      },
      {
        "id": "s1-i",
        "en": "I",
        "zh": "我",
        "pos": "代词",
        "spell": "I"
      },
      {
        "id": "s1-ice-cream",
        "en": "ice cream",
        "zh": "冰淇淋",
        "pos": "名词",
        "spell": "ice cream"
      },
      {
        "id": "s1-in-front-of",
        "en": "in front of",
        "zh": "在……前面",
        "pos": "介词",
        "spell": "in front of"
      },
      {
        "id": "s1-in",
        "en": "in",
        "zh": "在……里",
        "pos": "介词",
        "spell": "in"
      },
      {
        "id": "s1-it",
        "en": "it",
        "zh": "它",
        "pos": "代词",
        "spell": "it"
      },
      {
        "id": "s1-its",
        "en": "its",
        "zh": "它的",
        "pos": "形容词 / 代词",
        "spell": "its"
      },
      {
        "id": "s1-jacket",
        "en": "jacket",
        "zh": "夹克",
        "pos": "名词",
        "spell": "jacket"
      },
      {
        "id": "s1-jeans",
        "en": "jeans",
        "zh": "牛仔裤",
        "pos": "名词",
        "spell": "jeans"
      },
      {
        "id": "s1-jellyfish",
        "en": "jellyfish",
        "zh": "水母",
        "pos": "名词",
        "spell": "jellyfish"
      },
      {
        "id": "s1-juice",
        "en": "juice",
        "zh": "果汁",
        "pos": "名词",
        "spell": "juice"
      },
      {
        "id": "s1-jump",
        "en": "jump",
        "zh": "跳",
        "pos": "动词",
        "spell": "jump"
      },
      {
        "id": "s1-kick",
        "en": "kick",
        "zh": "踢",
        "pos": "动词",
        "spell": "kick"
      },
      {
        "id": "s1-kid",
        "en": "kid",
        "zh": "小孩",
        "pos": "名词",
        "spell": "kid"
      },
      {
        "id": "s1-king",
        "en": "king",
        "zh": "国王",
        "pos": "名词",
        "spell": "king"
      },
      {
        "id": "s1-kitchen",
        "en": "kitchen",
        "zh": "厨房",
        "pos": "名词",
        "spell": "kitchen"
      },
      {
        "id": "s1-kite",
        "en": "kite",
        "zh": "风筝",
        "pos": "名词",
        "spell": "kite"
      },
      {
        "id": "s1-kiwi",
        "en": "kiwi",
        "zh": "猕猴桃；几维鸟",
        "pos": "名词",
        "spell": "kiwi"
      },
      {
        "id": "s1-knife",
        "en": "knife",
        "zh": "刀",
        "pos": "名词",
        "spell": "knife"
      },
      {
        "id": "s1-know",
        "en": "know",
        "zh": "知道",
        "pos": "动词",
        "spell": "know"
      },
      {
        "id": "s1-lamp",
        "en": "lamp",
        "zh": "灯",
        "pos": "名词",
        "spell": "lamp"
      },
      {
        "id": "s1-learn",
        "en": "learn",
        "zh": "学习",
        "pos": "动词",
        "spell": "learn"
      },
      {
        "id": "s1-leg",
        "en": "leg",
        "zh": "腿",
        "pos": "名词",
        "spell": "leg"
      },
      {
        "id": "s1-lemon",
        "en": "lemon",
        "zh": "柠檬",
        "pos": "名词",
        "spell": "lemon"
      },
      {
        "id": "s1-lemonade",
        "en": "lemonade",
        "zh": "柠檬水",
        "pos": "名词",
        "spell": "lemonade"
      },
      {
        "id": "s1-lesson",
        "en": "lesson",
        "zh": "课",
        "pos": "名词",
        "spell": "lesson"
      },
      {
        "id": "s1-let-s",
        "en": "let’s",
        "zh": "让我们",
        "pos": "动词",
        "spell": "let’s"
      },
      {
        "id": "s1-like",
        "en": "like",
        "zh": "喜欢；像",
        "pos": "介词 / 动词",
        "spell": "like"
      },
      {
        "id": "s1-lime",
        "en": "lime",
        "zh": "青柠",
        "pos": "名词",
        "spell": "lime"
      },
      {
        "id": "s1-line",
        "en": "line",
        "zh": "线",
        "pos": "名词",
        "spell": "line"
      },
      {
        "id": "s1-lion",
        "en": "lion",
        "zh": "狮子",
        "pos": "名词",
        "spell": "lion"
      },
      {
        "id": "s1-listen",
        "en": "listen",
        "zh": "听",
        "pos": "动词",
        "spell": "listen"
      },
      {
        "id": "s1-live",
        "en": "live",
        "zh": "居住；生活",
        "pos": "动词",
        "spell": "live"
      },
      {
        "id": "s1-living-room",
        "en": "living room",
        "zh": "客厅",
        "pos": "名词",
        "spell": "living room"
      },
      {
        "id": "s1-lizard",
        "en": "lizard",
        "zh": "蜥蜴",
        "pos": "名词",
        "spell": "lizard"
      },
      {
        "id": "s1-long",
        "en": "long",
        "zh": "长的",
        "pos": "形容词",
        "spell": "long"
      },
      {
        "id": "s1-look-at",
        "en": "look at",
        "zh": "看",
        "pos": "动词",
        "spell": "look at"
      },
      {
        "id": "s1-lots",
        "en": "lots",
        "zh": "许多",
        "pos": "副词 / 代词",
        "spell": "lots"
      },
      {
        "id": "s1-lots-of",
        "en": "lots of",
        "zh": "许多",
        "pos": "限定词",
        "spell": "lots of"
      },
      {
        "id": "s1-love",
        "en": "love",
        "zh": "爱",
        "pos": "动词",
        "spell": "love"
      },
      {
        "id": "s1-lunch",
        "en": "lunch",
        "zh": "午餐",
        "pos": "名词",
        "spell": "lunch"
      },
      {
        "id": "s1-make",
        "en": "make",
        "zh": "做；制作",
        "pos": "动词",
        "spell": "make"
      },
      {
        "id": "s1-man-men",
        "en": "man/men",
        "zh": "男人",
        "pos": "名词",
        "spell": "man"
      },
      {
        "id": "s1-mango",
        "en": "mango",
        "zh": "芒果",
        "pos": "名词",
        "spell": "mango"
      },
      {
        "id": "s1-many",
        "en": "many",
        "zh": "许多（可数）",
        "pos": "限定词",
        "spell": "many"
      },
      {
        "id": "s1-mat",
        "en": "mat",
        "zh": "垫子",
        "pos": "名词",
        "spell": "mat"
      },
      {
        "id": "s1-me",
        "en": "me",
        "zh": "我（宾格）",
        "pos": "代词",
        "spell": "me"
      },
      {
        "id": "s1-me-too",
        "en": "me too",
        "zh": "我也是",
        "pos": "话语标记",
        "spell": "me too"
      },
      {
        "id": "s1-meat",
        "en": "meat",
        "zh": "肉",
        "pos": "名词",
        "spell": "meat"
      },
      {
        "id": "s1-meatballs",
        "en": "meatballs",
        "zh": "肉丸",
        "pos": "名词",
        "spell": "meatballs"
      },
      {
        "id": "s1-milk",
        "en": "milk",
        "zh": "牛奶",
        "pos": "名词",
        "spell": "milk"
      },
      {
        "id": "s1-mine",
        "en": "mine",
        "zh": "我的（名词性）",
        "pos": "代词",
        "spell": "mine"
      },
      {
        "id": "s1-mirror",
        "en": "mirror",
        "zh": "镜子",
        "pos": "名词",
        "spell": "mirror"
      },
      {
        "id": "s1-miss",
        "en": "Miss",
        "zh": "小姐（称呼）",
        "pos": "称呼",
        "spell": "Miss"
      },
      {
        "id": "s1-monkey",
        "en": "monkey",
        "zh": "猴子",
        "pos": "名词",
        "spell": "monkey"
      },
      {
        "id": "s1-monster",
        "en": "monster",
        "zh": "怪物",
        "pos": "名词",
        "spell": "monster"
      },
      {
        "id": "s1-morning",
        "en": "morning",
        "zh": "早晨",
        "pos": "名词",
        "spell": "morning"
      },
      {
        "id": "s1-mother",
        "en": "mother",
        "zh": "母亲",
        "pos": "名词",
        "spell": "mother"
      },
      {
        "id": "s1-motorbike",
        "en": "motorbike",
        "zh": "摩托车",
        "pos": "名词",
        "spell": "motorbike"
      },
      {
        "id": "s1-mouse-computer",
        "en": "mouse (computer)",
        "zh": "鼠标",
        "pos": "名词",
        "spell": "mouse"
      },
      {
        "id": "s1-mouse-mice",
        "en": "mouse/mice",
        "zh": "老鼠",
        "pos": "名词",
        "spell": "mouse"
      },
      {
        "id": "s1-mouth",
        "en": "mouth",
        "zh": "嘴",
        "pos": "名词",
        "spell": "mouth"
      },
      {
        "id": "s1-mr",
        "en": "Mr",
        "zh": "先生",
        "pos": "称呼",
        "spell": "Mr"
      },
      {
        "id": "s1-mrs",
        "en": "Mrs",
        "zh": "太太",
        "pos": "称呼",
        "spell": "Mrs"
      },
      {
        "id": "s1-mum",
        "en": "mum",
        "zh": "妈妈",
        "pos": "名词",
        "spell": "mum"
      },
      {
        "id": "s1-music",
        "en": "music",
        "zh": "音乐",
        "pos": "名词",
        "spell": "music"
      },
      {
        "id": "s1-my",
        "en": "my",
        "zh": "我的",
        "pos": "形容词",
        "spell": "my"
      },
      {
        "id": "s1-name",
        "en": "name",
        "zh": "名字",
        "pos": "名词",
        "spell": "name"
      },
      {
        "id": "s1-new",
        "en": "new",
        "zh": "新的",
        "pos": "形容词",
        "spell": "new"
      },
      {
        "id": "s1-next-to",
        "en": "next to",
        "zh": "在……旁边",
        "pos": "介词",
        "spell": "next to"
      },
      {
        "id": "s1-nice",
        "en": "nice",
        "zh": "好的；友好的",
        "pos": "形容词",
        "spell": "nice"
      },
      {
        "id": "s1-night",
        "en": "night",
        "zh": "夜晚",
        "pos": "名词",
        "spell": "night"
      },
      {
        "id": "s1-no",
        "en": "no",
        "zh": "不",
        "pos": "副词 / 限定词",
        "spell": "no"
      },
      {
        "id": "s1-nobody",
        "en": "nobody",
        "zh": "没有人",
        "pos": "代词",
        "spell": "nobody"
      },
      {
        "id": "s1-nose",
        "en": "nose",
        "zh": "鼻子",
        "pos": "名词",
        "spell": "nose"
      },
      {
        "id": "s1-not",
        "en": "not",
        "zh": "不",
        "pos": "副词",
        "spell": "not"
      },
      {
        "id": "s1-notebook",
        "en": "notebook",
        "zh": "笔记本",
        "pos": "名词",
        "spell": "notebook"
      },
      {
        "id": "s1-now",
        "en": "now",
        "zh": "现在",
        "pos": "副词",
        "spell": "now"
      },
      {
        "id": "s1-number",
        "en": "number",
        "zh": "数字",
        "pos": "名词",
        "spell": "number"
      },
      {
        "id": "s1-of",
        "en": "of",
        "zh": "……的",
        "pos": "介词",
        "spell": "of"
      },
      {
        "id": "s1-oh-dear",
        "en": "oh dear",
        "zh": "哎呀",
        "pos": "感叹",
        "spell": "oh dear"
      },
      {
        "id": "s1-oh",
        "en": "oh",
        "zh": "哦",
        "pos": "话语标记",
        "spell": "oh"
      },
      {
        "id": "s1-ok",
        "en": "OK",
        "zh": "好的",
        "pos": "形容词 / 话语标记",
        "spell": "OK"
      },
      {
        "id": "s1-old",
        "en": "old",
        "zh": "老的；旧的",
        "pos": "形容词",
        "spell": "old"
      },
      {
        "id": "s1-on",
        "en": "on",
        "zh": "在……上面",
        "pos": "介词",
        "spell": "on"
      },
      {
        "id": "s1-one",
        "en": "one",
        "zh": "一；一个",
        "pos": "限定词 / 代词",
        "spell": "one"
      },
      {
        "id": "s1-onion",
        "en": "onion",
        "zh": "洋葱",
        "pos": "名词",
        "spell": "onion"
      },
      {
        "id": "s1-open",
        "en": "open",
        "zh": "打开；开着的",
        "pos": "形容词 / 动词",
        "spell": "open"
      },
      {
        "id": "s1-or",
        "en": "or",
        "zh": "或者",
        "pos": "连词",
        "spell": "or"
      },
      {
        "id": "s1-orange",
        "en": "orange",
        "zh": "橙子；橙色的",
        "pos": "形容词 / 名词",
        "spell": "orange"
      },
      {
        "id": "s1-our",
        "en": "our",
        "zh": "我们的",
        "pos": "形容词",
        "spell": "our"
      },
      {
        "id": "s1-ours",
        "en": "ours",
        "zh": "我们的（名词性）",
        "pos": "代词",
        "spell": "ours"
      },
      {
        "id": "s1-page",
        "en": "page",
        "zh": "页",
        "pos": "名词",
        "spell": "page"
      },
      {
        "id": "s1-paint",
        "en": "paint",
        "zh": "油漆；绘画",
        "pos": "名词 / 动词",
        "spell": "paint"
      },
      {
        "id": "s1-painting",
        "en": "painting",
        "zh": "画",
        "pos": "名词",
        "spell": "painting"
      },
      {
        "id": "s1-paper",
        "en": "paper",
        "zh": "纸",
        "pos": "形容词 / 名词",
        "spell": "paper"
      },
      {
        "id": "s1-pardon",
        "en": "pardon",
        "zh": "请再说一遍",
        "pos": "疑问词",
        "spell": "pardon"
      },
      {
        "id": "s1-park",
        "en": "park",
        "zh": "公园",
        "pos": "名词",
        "spell": "park"
      },
      {
        "id": "s1-part",
        "en": "part",
        "zh": "部分",
        "pos": "名词",
        "spell": "part"
      },
      {
        "id": "s1-pea",
        "en": "pea",
        "zh": "豌豆",
        "pos": "名词",
        "spell": "pea"
      },
      {
        "id": "s1-pear",
        "en": "pear",
        "zh": "梨",
        "pos": "名词",
        "spell": "pear"
      },
      {
        "id": "s1-pen",
        "en": "pen",
        "zh": "钢笔",
        "pos": "名词",
        "spell": "pen"
      },
      {
        "id": "s1-pencil",
        "en": "pencil",
        "zh": "铅笔",
        "pos": "名词",
        "spell": "pencil"
      },
      {
        "id": "s1-person-people",
        "en": "person/people",
        "zh": "人",
        "pos": "名词",
        "spell": "person"
      },
      {
        "id": "s1-pet",
        "en": "pet",
        "zh": "宠物",
        "pos": "名词",
        "spell": "pet"
      },
      {
        "id": "s1-phone",
        "en": "phone",
        "zh": "电话",
        "pos": "名词 / 动词",
        "spell": "phone"
      },
      {
        "id": "s1-photo",
        "en": "photo",
        "zh": "照片",
        "pos": "名词",
        "spell": "photo"
      },
      {
        "id": "s1-piano",
        "en": "piano",
        "zh": "钢琴",
        "pos": "名词",
        "spell": "piano"
      },
      {
        "id": "s1-pick-up",
        "en": "pick up",
        "zh": "捡起；接（人）",
        "pos": "动词",
        "spell": "pick up"
      },
      {
        "id": "s1-picnic",
        "en": "picnic",
        "zh": "野餐",
        "pos": "名词",
        "spell": "picnic"
      },
      {
        "id": "s1-picture",
        "en": "picture",
        "zh": "图画；照片",
        "pos": "名词",
        "spell": "picture"
      },
      {
        "id": "s1-pie",
        "en": "pie",
        "zh": "馅饼",
        "pos": "名词",
        "spell": "pie"
      },
      {
        "id": "s1-pineapple",
        "en": "pineapple",
        "zh": "菠萝",
        "pos": "名词",
        "spell": "pineapple"
      },
      {
        "id": "s1-pink",
        "en": "pink",
        "zh": "粉红色的",
        "pos": "形容词",
        "spell": "pink"
      },
      {
        "id": "s1-pirate",
        "en": "pirate",
        "zh": "海盗",
        "pos": "名词",
        "spell": "pirate"
      },
      {
        "id": "s1-plane",
        "en": "plane",
        "zh": "飞机",
        "pos": "名词",
        "spell": "plane"
      },
      {
        "id": "s1-play",
        "en": "play",
        "zh": "玩；演奏",
        "pos": "动词",
        "spell": "play"
      },
      {
        "id": "s1-playground",
        "en": "playground",
        "zh": "操场",
        "pos": "名词",
        "spell": "playground"
      },
      {
        "id": "s1-please",
        "en": "please",
        "zh": "请",
        "pos": "话语标记",
        "spell": "please"
      },
      {
        "id": "s1-point",
        "en": "point",
        "zh": "指",
        "pos": "动词",
        "spell": "point"
      },
      {
        "id": "s1-polar-bear",
        "en": "polar bear",
        "zh": "北极熊",
        "pos": "名词",
        "spell": "polar bear"
      },
      {
        "id": "s1-princess",
        "en": "princess",
        "zh": "公主",
        "pos": "名词",
        "spell": "princess"
      },
      {
        "id": "s1-pupil",
        "en": "pupil",
        "zh": "学生",
        "pos": "名词",
        "spell": "pupil"
      },
      {
        "id": "s1-purple",
        "en": "purple",
        "zh": "紫色的",
        "pos": "形容词",
        "spell": "purple"
      },
      {
        "id": "s1-put",
        "en": "put",
        "zh": "放",
        "pos": "动词",
        "spell": "put"
      },
      {
        "id": "s1-queen",
        "en": "queen",
        "zh": "女王",
        "pos": "名词",
        "spell": "queen"
      },
      {
        "id": "s1-question",
        "en": "question",
        "zh": "问题",
        "pos": "名词",
        "spell": "question"
      },
      {
        "id": "s1-radio",
        "en": "radio",
        "zh": "收音机",
        "pos": "名词",
        "spell": "radio"
      },
      {
        "id": "s1-rain",
        "en": "rain",
        "zh": "雨；下雨",
        "pos": "名词 / 动词",
        "spell": "rain"
      },
      {
        "id": "s1-read",
        "en": "read",
        "zh": "读",
        "pos": "动词",
        "spell": "read"
      },
      {
        "id": "s1-really",
        "en": "really",
        "zh": "真正地；很",
        "pos": "副词",
        "spell": "really"
      },
      {
        "id": "s1-red",
        "en": "red",
        "zh": "红色的",
        "pos": "形容词",
        "spell": "red"
      },
      {
        "id": "s1-rice",
        "en": "rice",
        "zh": "米饭；米",
        "pos": "名词",
        "spell": "rice"
      },
      {
        "id": "s1-ride",
        "en": "ride",
        "zh": "骑",
        "pos": "动词",
        "spell": "ride"
      },
      {
        "id": "s1-right-as-in-correct",
        "en": "right (as in correct)",
        "zh": "对的",
        "pos": "形容词",
        "spell": "right"
      },
      {
        "id": "s1-right",
        "en": "right",
        "zh": "右边；对的",
        "pos": "话语标记",
        "spell": "right"
      },
      {
        "id": "s1-robot",
        "en": "robot",
        "zh": "机器人",
        "pos": "名词",
        "spell": "robot"
      },
      {
        "id": "s1-room",
        "en": "room",
        "zh": "房间",
        "pos": "名词",
        "spell": "room"
      },
      {
        "id": "s1-rubber-us-eraser",
        "en": "rubber (US eraser)",
        "zh": "橡皮",
        "pos": "名词",
        "spell": "rubber"
      },
      {
        "id": "s1-rug",
        "en": "rug",
        "zh": "小地毯",
        "pos": "名词",
        "spell": "rug"
      },
      {
        "id": "s1-ruler",
        "en": "ruler",
        "zh": "尺子",
        "pos": "名词",
        "spell": "ruler"
      },
      {
        "id": "s1-run",
        "en": "run",
        "zh": "跑",
        "pos": "动词",
        "spell": "run"
      },
      {
        "id": "s1-sad",
        "en": "sad",
        "zh": "伤心的",
        "pos": "形容词",
        "spell": "sad"
      },
      {
        "id": "s1-sand",
        "en": "sand",
        "zh": "沙子",
        "pos": "名词",
        "spell": "sand"
      },
      {
        "id": "s1-sausage",
        "en": "sausage",
        "zh": "香肠",
        "pos": "名词",
        "spell": "sausage"
      },
      {
        "id": "s1-say",
        "en": "say",
        "zh": "说",
        "pos": "动词",
        "spell": "say"
      },
      {
        "id": "s1-scary",
        "en": "scary",
        "zh": "可怕的",
        "pos": "形容词",
        "spell": "scary"
      },
      {
        "id": "s1-school",
        "en": "school",
        "zh": "学校",
        "pos": "名词",
        "spell": "school"
      },
      {
        "id": "s1-sea",
        "en": "sea",
        "zh": "海",
        "pos": "名词",
        "spell": "sea"
      },
      {
        "id": "s1-see",
        "en": "see",
        "zh": "看见",
        "pos": "动词",
        "spell": "see"
      },
      {
        "id": "s1-see-you",
        "en": "see you",
        "zh": "再见",
        "pos": "感叹",
        "spell": "see you"
      },
      {
        "id": "s1-sentence",
        "en": "sentence",
        "zh": "判决；句子",
        "pos": "名词",
        "spell": "sentence"
      },
      {
        "id": "s1-she",
        "en": "she",
        "zh": "她",
        "pos": "代词",
        "spell": "she"
      },
      {
        "id": "s1-sheep-s-pl",
        "en": "sheep (s + pl)",
        "zh": "羊",
        "pos": "名词",
        "spell": "sheep"
      },
      {
        "id": "s1-shell",
        "en": "shell",
        "zh": "贝壳",
        "pos": "名词",
        "spell": "shell"
      },
      {
        "id": "s1-ship",
        "en": "ship",
        "zh": "轮船",
        "pos": "名词",
        "spell": "ship"
      },
      {
        "id": "s1-shirt",
        "en": "shirt",
        "zh": "衬衫",
        "pos": "名词",
        "spell": "shirt"
      },
      {
        "id": "s1-shoe",
        "en": "shoe",
        "zh": "鞋",
        "pos": "名词",
        "spell": "shoe"
      },
      {
        "id": "s1-shop-us-store",
        "en": "shop (US store)",
        "zh": "商店",
        "pos": "名词",
        "spell": "shop"
      },
      {
        "id": "s1-short",
        "en": "short",
        "zh": "短的；矮的",
        "pos": "形容词",
        "spell": "short"
      },
      {
        "id": "s1-shorts",
        "en": "shorts",
        "zh": "短裤",
        "pos": "名词",
        "spell": "shorts"
      },
      {
        "id": "s1-sing",
        "en": "sing",
        "zh": "唱",
        "pos": "动词",
        "spell": "sing"
      },
      {
        "id": "s1-sister",
        "en": "sister",
        "zh": "姐妹",
        "pos": "名词",
        "spell": "sister"
      },
      {
        "id": "s1-sit",
        "en": "sit",
        "zh": "坐",
        "pos": "动词",
        "spell": "sit"
      },
      {
        "id": "s1-skateboard",
        "en": "skateboard",
        "zh": "滑板",
        "pos": "名词",
        "spell": "skateboard"
      },
      {
        "id": "s1-skateboarding",
        "en": "skateboarding",
        "zh": "滑滑板",
        "pos": "名词",
        "spell": "skateboarding"
      },
      {
        "id": "s1-skirt",
        "en": "skirt",
        "zh": "裙子",
        "pos": "名词",
        "spell": "skirt"
      },
      {
        "id": "s1-sky",
        "en": "sky",
        "zh": "天空",
        "pos": "名词",
        "spell": "sky"
      },
      {
        "id": "s1-sleep",
        "en": "sleep",
        "zh": "睡觉",
        "pos": "动词",
        "spell": "sleep"
      },
      {
        "id": "s1-small",
        "en": "small",
        "zh": "小的",
        "pos": "形容词",
        "spell": "small"
      },
      {
        "id": "s1-smile",
        "en": "smile",
        "zh": "微笑",
        "pos": "名词 / 动词",
        "spell": "smile"
      },
      {
        "id": "s1-snake",
        "en": "snake",
        "zh": "蛇",
        "pos": "名词",
        "spell": "snake"
      },
      {
        "id": "s1-snow",
        "en": "snow",
        "zh": "雪；下雪",
        "pos": "名词 / 动词",
        "spell": "snow"
      },
      {
        "id": "s1-so",
        "en": "so",
        "zh": "所以；如此",
        "pos": "话语标记",
        "spell": "so"
      },
      {
        "id": "s1-sock",
        "en": "sock",
        "zh": "袜子",
        "pos": "名词",
        "spell": "sock"
      },
      {
        "id": "s1-sofa",
        "en": "sofa",
        "zh": "沙发",
        "pos": "名词",
        "spell": "sofa"
      },
      {
        "id": "s1-some",
        "en": "some",
        "zh": "一些",
        "pos": "限定词",
        "spell": "some"
      },
      {
        "id": "s1-song",
        "en": "song",
        "zh": "歌曲",
        "pos": "名词",
        "spell": "song"
      },
      {
        "id": "s1-sorry",
        "en": "sorry",
        "zh": "对不起",
        "pos": "形容词 / 疑问词",
        "spell": "sorry"
      },
      {
        "id": "s1-spell",
        "en": "spell",
        "zh": "拼写",
        "pos": "动词",
        "spell": "spell"
      },
      {
        "id": "s1-spider",
        "en": "spider",
        "zh": "蜘蛛",
        "pos": "名词",
        "spell": "spider"
      },
      {
        "id": "s1-spoon",
        "en": "spoon",
        "zh": "勺子",
        "pos": "名词",
        "spell": "spoon"
      },
      {
        "id": "s1-sport",
        "en": "sport",
        "zh": "运动",
        "pos": "名词",
        "spell": "sport"
      },
      {
        "id": "s1-stand",
        "en": "stand",
        "zh": "站",
        "pos": "动词",
        "spell": "stand"
      },
      {
        "id": "s1-start",
        "en": "start",
        "zh": "开始",
        "pos": "动词",
        "spell": "start"
      },
      {
        "id": "s1-stop",
        "en": "stop",
        "zh": "停止",
        "pos": "动词",
        "spell": "stop"
      },
      {
        "id": "s1-store-uk-shop",
        "en": "store (UK shop)",
        "zh": "商店",
        "pos": "名词",
        "spell": "store"
      },
      {
        "id": "s1-story",
        "en": "story",
        "zh": "故事",
        "pos": "名词",
        "spell": "story"
      },
      {
        "id": "s1-street",
        "en": "street",
        "zh": "街道",
        "pos": "名词",
        "spell": "street"
      },
      {
        "id": "s1-sun",
        "en": "sun",
        "zh": "太阳",
        "pos": "名词",
        "spell": "sun"
      },
      {
        "id": "s1-sunny",
        "en": "sunny",
        "zh": "晴朗的",
        "pos": "形容词",
        "spell": "sunny"
      },
      {
        "id": "s1-sweet-s-us-candy",
        "en": "sweet(s) (US candy)",
        "zh": "糖果",
        "pos": "名词",
        "spell": "sweet"
      },
      {
        "id": "s1-swim",
        "en": "swim",
        "zh": "游泳",
        "pos": "动词",
        "spell": "swim"
      },
      {
        "id": "s1-table",
        "en": "table",
        "zh": "桌子",
        "pos": "名词",
        "spell": "table"
      },
      {
        "id": "s1-table-tennis",
        "en": "table tennis",
        "zh": "乒乓球",
        "pos": "名词",
        "spell": "table tennis"
      },
      {
        "id": "s1-tablet",
        "en": "tablet",
        "zh": "平板电脑",
        "pos": "名词",
        "spell": "tablet"
      },
      {
        "id": "s1-tail",
        "en": "tail",
        "zh": "尾巴",
        "pos": "名词",
        "spell": "tail"
      },
      {
        "id": "s1-talk",
        "en": "talk",
        "zh": "谈话",
        "pos": "动词",
        "spell": "talk"
      },
      {
        "id": "s1-teacher",
        "en": "teacher",
        "zh": "老师",
        "pos": "名词",
        "spell": "teacher"
      },
      {
        "id": "s1-teddy-bear",
        "en": "teddy (bear)",
        "zh": "泰迪熊",
        "pos": "名词",
        "spell": "teddy"
      },
      {
        "id": "s1-television-tv",
        "en": "television/TV",
        "zh": "电视",
        "pos": "名词",
        "spell": "television"
      },
      {
        "id": "s1-tell",
        "en": "tell",
        "zh": "告诉",
        "pos": "动词",
        "spell": "tell"
      },
      {
        "id": "s1-thank-you",
        "en": "thank you",
        "zh": "谢谢",
        "pos": "话语标记",
        "spell": "thank you"
      },
      {
        "id": "s1-thanks",
        "en": "thanks",
        "zh": "谢谢",
        "pos": "话语标记",
        "spell": "thanks"
      },
      {
        "id": "s1-that",
        "en": "that",
        "zh": "那个",
        "pos": "限定词 / 代词",
        "spell": "that"
      },
      {
        "id": "s1-the",
        "en": "the",
        "zh": "这；那（定冠词）",
        "pos": "限定词",
        "spell": "the"
      },
      {
        "id": "s1-their",
        "en": "their",
        "zh": "他们的",
        "pos": "形容词",
        "spell": "their"
      },
      {
        "id": "s1-theirs",
        "en": "theirs",
        "zh": "他们的（名词性）",
        "pos": "代词",
        "spell": "theirs"
      },
      {
        "id": "s1-them",
        "en": "them",
        "zh": "他们（宾格）",
        "pos": "代词",
        "spell": "them"
      },
      {
        "id": "s1-then",
        "en": "then",
        "zh": "然后",
        "pos": "话语标记",
        "spell": "then"
      },
      {
        "id": "s1-there",
        "en": "there",
        "zh": "那里",
        "pos": "副词",
        "spell": "there"
      },
      {
        "id": "s1-these",
        "en": "these",
        "zh": "这些",
        "pos": "限定词 / 代词",
        "spell": "these"
      },
      {
        "id": "s1-they",
        "en": "they",
        "zh": "他们",
        "pos": "代词",
        "spell": "they"
      },
      {
        "id": "s1-thing",
        "en": "thing",
        "zh": "东西",
        "pos": "名词",
        "spell": "thing"
      },
      {
        "id": "s1-this",
        "en": "this",
        "zh": "这个",
        "pos": "限定词 / 代词",
        "spell": "this"
      },
      {
        "id": "s1-throw",
        "en": "throw",
        "zh": "扔",
        "pos": "动词",
        "spell": "throw"
      },
      {
        "id": "s1-tick",
        "en": "tick",
        "zh": "打勾",
        "pos": "名词 / 动词",
        "spell": "tick"
      },
      {
        "id": "s1-tiger",
        "en": "tiger",
        "zh": "老虎",
        "pos": "名词",
        "spell": "tiger"
      },
      {
        "id": "s1-to",
        "en": "to",
        "zh": "到；向",
        "pos": "介词",
        "spell": "to"
      },
      {
        "id": "s1-today",
        "en": "today",
        "zh": "今天",
        "pos": "副词 / 名词",
        "spell": "today"
      },
      {
        "id": "s1-tomato",
        "en": "tomato",
        "zh": "西红柿",
        "pos": "名词",
        "spell": "tomato"
      },
      {
        "id": "s1-too",
        "en": "too",
        "zh": "也；太",
        "pos": "副词",
        "spell": "too"
      },
      {
        "id": "s1-tooth-teeth",
        "en": "tooth/teeth",
        "zh": "牙齿",
        "pos": "名词",
        "spell": "tooth"
      },
      {
        "id": "s1-toy",
        "en": "toy",
        "zh": "玩具",
        "pos": "名词",
        "spell": "toy"
      },
      {
        "id": "s1-train",
        "en": "train",
        "zh": "火车",
        "pos": "名词",
        "spell": "train"
      },
      {
        "id": "s1-tree",
        "en": "tree",
        "zh": "树",
        "pos": "名词",
        "spell": "tree"
      },
      {
        "id": "s1-trousers",
        "en": "trousers",
        "zh": "裤子",
        "pos": "名词",
        "spell": "trousers"
      },
      {
        "id": "s1-truck-uk-lorry",
        "en": "truck (UK lorry)",
        "zh": "卡车",
        "pos": "名词",
        "spell": "truck"
      },
      {
        "id": "s1-try",
        "en": "try",
        "zh": "尝试",
        "pos": "名词 / 动词",
        "spell": "try"
      },
      {
        "id": "s1-t-shirt",
        "en": "T-shirt",
        "zh": "T恤",
        "pos": "名词",
        "spell": "T-shirt"
      },
      {
        "id": "s1-tv-television",
        "en": "TV/television",
        "zh": "电视",
        "pos": "名词",
        "spell": "TV"
      },
      {
        "id": "s1-ugly",
        "en": "ugly",
        "zh": "丑的",
        "pos": "形容词",
        "spell": "ugly"
      },
      {
        "id": "s1-under",
        "en": "under",
        "zh": "在……下面",
        "pos": "介词",
        "spell": "under"
      },
      {
        "id": "s1-understand",
        "en": "understand",
        "zh": "理解",
        "pos": "动词",
        "spell": "understand"
      },
      {
        "id": "s1-us",
        "en": "us",
        "zh": "我们（宾格）",
        "pos": "代词",
        "spell": "us"
      },
      {
        "id": "s1-very",
        "en": "very",
        "zh": "非常",
        "pos": "副词",
        "spell": "very"
      },
      {
        "id": "s1-walk",
        "en": "walk",
        "zh": "走；散步",
        "pos": "动词",
        "spell": "walk"
      },
      {
        "id": "s1-wall",
        "en": "wall",
        "zh": "墙",
        "pos": "名词",
        "spell": "wall"
      },
      {
        "id": "s1-want",
        "en": "want",
        "zh": "想要",
        "pos": "动词",
        "spell": "want"
      },
      {
        "id": "s1-watch",
        "en": "watch",
        "zh": "观看；手表",
        "pos": "名词 / 动词",
        "spell": "watch"
      },
      {
        "id": "s1-water",
        "en": "water",
        "zh": "水",
        "pos": "名词",
        "spell": "water"
      },
      {
        "id": "s1-we",
        "en": "we",
        "zh": "我们",
        "pos": "代词",
        "spell": "we"
      },
      {
        "id": "s1-wear",
        "en": "wear",
        "zh": "穿；戴",
        "pos": "动词",
        "spell": "wear"
      },
      {
        "id": "s1-weather",
        "en": "weather",
        "zh": "天气",
        "pos": "名词",
        "spell": "weather"
      },
      {
        "id": "s1-well",
        "en": "well",
        "zh": "好地；健康的",
        "pos": "话语标记",
        "spell": "well"
      },
      {
        "id": "s1-well-done",
        "en": "well done",
        "zh": "做得好",
        "pos": "话语标记",
        "spell": "well done"
      },
      {
        "id": "s1-what",
        "en": "what",
        "zh": "什么",
        "pos": "疑问词",
        "spell": "what"
      },
      {
        "id": "s1-where",
        "en": "where",
        "zh": "哪里",
        "pos": "疑问词",
        "spell": "where"
      },
      {
        "id": "s1-which",
        "en": "which",
        "zh": "哪一个",
        "pos": "疑问词",
        "spell": "which"
      },
      {
        "id": "s1-white",
        "en": "white",
        "zh": "白色的",
        "pos": "形容词",
        "spell": "white"
      },
      {
        "id": "s1-who",
        "en": "who",
        "zh": "谁",
        "pos": "疑问词",
        "spell": "who"
      },
      {
        "id": "s1-whose",
        "en": "whose",
        "zh": "谁的",
        "pos": "疑问词",
        "spell": "whose"
      },
      {
        "id": "s1-window",
        "en": "window",
        "zh": "窗户",
        "pos": "名词",
        "spell": "window"
      },
      {
        "id": "s1-with",
        "en": "with",
        "zh": "和；用",
        "pos": "介词",
        "spell": "with"
      },
      {
        "id": "s1-wizard",
        "en": "wizard",
        "zh": "男巫师",
        "pos": "名词",
        "spell": "wizard"
      },
      {
        "id": "s1-woman-women",
        "en": "woman/women",
        "zh": "女人",
        "pos": "名词",
        "spell": "woman"
      },
      {
        "id": "s1-word",
        "en": "word",
        "zh": "单词",
        "pos": "名词",
        "spell": "word"
      },
      {
        "id": "s1-would-like",
        "en": "would like",
        "zh": "想要",
        "pos": "动词",
        "spell": "would like"
      },
      {
        "id": "s1-wow",
        "en": "wow",
        "zh": "哇",
        "pos": "感叹",
        "spell": "wow"
      },
      {
        "id": "s1-write",
        "en": "write",
        "zh": "写",
        "pos": "动词",
        "spell": "write"
      },
      {
        "id": "s1-year",
        "en": "year",
        "zh": "年",
        "pos": "名词",
        "spell": "year"
      },
      {
        "id": "s1-yellow",
        "en": "yellow",
        "zh": "黄色的",
        "pos": "形容词",
        "spell": "yellow"
      },
      {
        "id": "s1-yes",
        "en": "yes",
        "zh": "是的",
        "pos": "副词",
        "spell": "yes"
      },
      {
        "id": "s1-you",
        "en": "you",
        "zh": "你；你们",
        "pos": "代词",
        "spell": "you"
      },
      {
        "id": "s1-young",
        "en": "young",
        "zh": "年轻的",
        "pos": "形容词",
        "spell": "young"
      },
      {
        "id": "s1-your",
        "en": "your",
        "zh": "你的",
        "pos": "形容词",
        "spell": "your"
      },
      {
        "id": "s1-yours",
        "en": "yours",
        "zh": "你的（名词性）",
        "pos": "代词",
        "spell": "yours"
      },
      {
        "id": "s1-zebra",
        "en": "zebra",
        "zh": "斑马",
        "pos": "名词",
        "spell": "zebra"
      },
      {
        "id": "s1-zoo",
        "en": "zoo",
        "zh": "动物园",
        "pos": "名词",
        "spell": "zoo"
      },
      {
        "id": "s1-biscuit-us-cookie",
        "en": "biscuit (US cookie)",
        "zh": "饼干",
        "pos": "名词",
        "spell": "biscuit"
      },
      {
        "id": "s1-candy-uk-sweet-s",
        "en": "candy (UK sweet(s))",
        "zh": "糖果",
        "pos": "名词",
        "spell": "candy)"
      },
      {
        "id": "s1-colour-us-color",
        "en": "colour (US color)",
        "zh": "颜色；涂色",
        "pos": "名词 / 动词",
        "spell": "colour"
      },
      {
        "id": "s1-keyboard-computer",
        "en": "keyboard (computer)",
        "zh": "键盘",
        "pos": "名词",
        "spell": "keyboard"
      },
      {
        "id": "s1-letter-as-in-alphabet",
        "en": "letter (as in alphabet)",
        "zh": "字母",
        "pos": "名词",
        "spell": "letter"
      },
      {
        "id": "s1-take-a-photo-picture",
        "en": "take a photo/picture",
        "zh": "拍照",
        "pos": "动词",
        "spell": "take a photo"
      },
      {
        "id": "baby-soccer-uk-football-",
        "en": "soccer (UK football)",
        "zh": "足球",
        "pos": "名词",
        "spell": "soccer"
      }
    ],
    "little": [
      {
        "id": "s1-a",
        "en": "a",
        "zh": "一个（冠词）",
        "pos": "限定词",
        "spell": "a"
      },
      {
        "id": "s1-a-lot",
        "en": "a lot",
        "zh": "许多",
        "pos": "副词 / 代词",
        "spell": "a lot"
      },
      {
        "id": "s1-a-lot-of",
        "en": "a lot of",
        "zh": "许多",
        "pos": "限定词",
        "spell": "a lot of"
      },
      {
        "id": "s1-about",
        "en": "about",
        "zh": "关于",
        "pos": "介词",
        "spell": "about"
      },
      {
        "id": "s1-add",
        "en": "add",
        "zh": "加；增加",
        "pos": "动词",
        "spell": "add"
      },
      {
        "id": "s1-address",
        "en": "address",
        "zh": "地址",
        "pos": "名词",
        "spell": "address"
      },
      {
        "id": "s1-afternoon",
        "en": "afternoon",
        "zh": "下午",
        "pos": "名词",
        "spell": "afternoon"
      },
      {
        "id": "s1-again",
        "en": "again",
        "zh": "再；又",
        "pos": "副词",
        "spell": "again"
      },
      {
        "id": "s1-alien",
        "en": "alien",
        "zh": "外星人",
        "pos": "名词",
        "spell": "alien"
      },
      {
        "id": "s1-all-right",
        "en": "all right",
        "zh": "好的；没关系",
        "pos": "形容词 / 副词",
        "spell": "all right"
      },
      {
        "id": "s1-alphabet",
        "en": "alphabet",
        "zh": "字母表",
        "pos": "名词",
        "spell": "alphabet"
      },
      {
        "id": "s1-an",
        "en": "an",
        "zh": "一个（元音前）",
        "pos": "限定词",
        "spell": "an"
      },
      {
        "id": "s1-and",
        "en": "and",
        "zh": "和",
        "pos": "连词",
        "spell": "and"
      },
      {
        "id": "s1-angry",
        "en": "angry",
        "zh": "生气的",
        "pos": "形容词",
        "spell": "angry"
      },
      {
        "id": "s1-animal",
        "en": "animal",
        "zh": "动物",
        "pos": "名词",
        "spell": "animal"
      },
      {
        "id": "s1-answer",
        "en": "answer",
        "zh": "回答；答案",
        "pos": "名词 / 动词",
        "spell": "answer"
      },
      {
        "id": "s1-apartment-uk-flat",
        "en": "apartment (UK flat)",
        "zh": "公寓",
        "pos": "名词",
        "spell": "apartment"
      },
      {
        "id": "s1-apple",
        "en": "apple",
        "zh": "苹果",
        "pos": "名词",
        "spell": "apple"
      },
      {
        "id": "s1-arm",
        "en": "arm",
        "zh": "胳膊",
        "pos": "名词",
        "spell": "arm"
      },
      {
        "id": "s1-armchair",
        "en": "armchair",
        "zh": "扶手椅",
        "pos": "名词",
        "spell": "armchair"
      },
      {
        "id": "s1-ask",
        "en": "ask",
        "zh": "问",
        "pos": "动词",
        "spell": "ask"
      },
      {
        "id": "s1-at",
        "en": "at",
        "zh": "在",
        "pos": "介词",
        "spell": "at"
      },
      {
        "id": "s1-baby",
        "en": "baby",
        "zh": "婴儿",
        "pos": "名词",
        "spell": "baby"
      },
      {
        "id": "s1-badminton",
        "en": "badminton",
        "zh": "羽毛球",
        "pos": "名词",
        "spell": "badminton"
      },
      {
        "id": "s1-bag",
        "en": "bag",
        "zh": "包",
        "pos": "名词",
        "spell": "bag"
      },
      {
        "id": "s1-ball",
        "en": "ball",
        "zh": "球",
        "pos": "名词",
        "spell": "ball"
      },
      {
        "id": "s1-balloon",
        "en": "balloon",
        "zh": "气球",
        "pos": "名词",
        "spell": "balloon"
      },
      {
        "id": "s1-banana",
        "en": "banana",
        "zh": "香蕉",
        "pos": "名词",
        "spell": "banana"
      },
      {
        "id": "s1-baseball-cap",
        "en": "baseball cap",
        "zh": "棒球帽",
        "pos": "名词",
        "spell": "baseball cap"
      },
      {
        "id": "s1-baseball",
        "en": "baseball",
        "zh": "棒球",
        "pos": "名词",
        "spell": "baseball"
      },
      {
        "id": "s1-basketball",
        "en": "basketball",
        "zh": "篮球",
        "pos": "名词",
        "spell": "basketball"
      },
      {
        "id": "s1-bath",
        "en": "bath",
        "zh": "浴缸；洗澡",
        "pos": "名词",
        "spell": "bath"
      },
      {
        "id": "s1-bathroom",
        "en": "bathroom",
        "zh": "卫生间",
        "pos": "名词",
        "spell": "bathroom"
      },
      {
        "id": "s1-be",
        "en": "be",
        "zh": "是",
        "pos": "动词",
        "spell": "be"
      },
      {
        "id": "s1-beach",
        "en": "beach",
        "zh": "海滩",
        "pos": "名词",
        "spell": "beach"
      },
      {
        "id": "s1-bear",
        "en": "bear",
        "zh": "熊",
        "pos": "名词",
        "spell": "bear"
      },
      {
        "id": "s1-beautiful",
        "en": "beautiful",
        "zh": "美丽的",
        "pos": "形容词",
        "spell": "beautiful"
      },
      {
        "id": "s1-bed",
        "en": "bed",
        "zh": "床",
        "pos": "名词",
        "spell": "bed"
      },
      {
        "id": "s1-bedroom",
        "en": "bedroom",
        "zh": "卧室",
        "pos": "名词",
        "spell": "bedroom"
      },
      {
        "id": "s1-bee",
        "en": "bee",
        "zh": "蜜蜂",
        "pos": "名词",
        "spell": "bee"
      },
      {
        "id": "s1-behind",
        "en": "behind",
        "zh": "在……后面",
        "pos": "介词",
        "spell": "behind"
      },
      {
        "id": "s1-between",
        "en": "between",
        "zh": "在……之间",
        "pos": "介词",
        "spell": "between"
      },
      {
        "id": "s1-big",
        "en": "big",
        "zh": "大的",
        "pos": "形容词",
        "spell": "big"
      },
      {
        "id": "s1-birthday",
        "en": "birthday",
        "zh": "生日",
        "pos": "名词",
        "spell": "birthday"
      },
      {
        "id": "s1-black",
        "en": "black",
        "zh": "黑色的",
        "pos": "形容词",
        "spell": "black"
      },
      {
        "id": "s1-blanket",
        "en": "blanket",
        "zh": "毯子",
        "pos": "名词",
        "spell": "blanket"
      },
      {
        "id": "s1-blue",
        "en": "blue",
        "zh": "蓝色的",
        "pos": "形容词",
        "spell": "blue"
      },
      {
        "id": "s1-board-game",
        "en": "board game",
        "zh": "棋类游戏；桌游",
        "pos": "名词",
        "spell": "board game"
      },
      {
        "id": "s1-board",
        "en": "board",
        "zh": "板",
        "pos": "名词",
        "spell": "board"
      },
      {
        "id": "s1-boat",
        "en": "boat",
        "zh": "船",
        "pos": "名词",
        "spell": "boat"
      },
      {
        "id": "s1-body",
        "en": "body",
        "zh": "身体",
        "pos": "名词",
        "spell": "body"
      },
      {
        "id": "s1-book",
        "en": "book",
        "zh": "书",
        "pos": "名词",
        "spell": "book"
      },
      {
        "id": "s1-bookcase",
        "en": "bookcase",
        "zh": "书柜",
        "pos": "名词",
        "spell": "bookcase"
      },
      {
        "id": "s1-bookshop",
        "en": "bookshop",
        "zh": "书店",
        "pos": "名词",
        "spell": "bookshop"
      },
      {
        "id": "s1-boots",
        "en": "boots",
        "zh": "靴子",
        "pos": "名词",
        "spell": "boots"
      },
      {
        "id": "s1-bounce",
        "en": "bounce",
        "zh": "弹跳",
        "pos": "动词",
        "spell": "bounce"
      },
      {
        "id": "s1-box",
        "en": "box",
        "zh": "盒子",
        "pos": "名词",
        "spell": "box"
      },
      {
        "id": "s1-boy",
        "en": "boy",
        "zh": "男孩",
        "pos": "名词",
        "spell": "boy"
      },
      {
        "id": "s1-bread",
        "en": "bread",
        "zh": "面包",
        "pos": "名词",
        "spell": "bread"
      },
      {
        "id": "s1-breakfast",
        "en": "breakfast",
        "zh": "早餐",
        "pos": "名词",
        "spell": "breakfast"
      },
      {
        "id": "s1-brother",
        "en": "brother",
        "zh": "兄弟",
        "pos": "名词",
        "spell": "brother"
      },
      {
        "id": "s1-brown",
        "en": "brown",
        "zh": "棕色的",
        "pos": "形容词",
        "spell": "brown"
      },
      {
        "id": "s1-burger",
        "en": "burger",
        "zh": "汉堡",
        "pos": "名词",
        "spell": "burger"
      },
      {
        "id": "s1-bus",
        "en": "bus",
        "zh": "公共汽车",
        "pos": "名词",
        "spell": "bus"
      },
      {
        "id": "s1-but",
        "en": "but",
        "zh": "但是",
        "pos": "连词",
        "spell": "but"
      },
      {
        "id": "s1-bye",
        "en": "bye",
        "zh": "再见",
        "pos": "感叹",
        "spell": "bye"
      },
      {
        "id": "s1-cake",
        "en": "cake",
        "zh": "蛋糕",
        "pos": "名词",
        "spell": "cake"
      },
      {
        "id": "s1-camera",
        "en": "camera",
        "zh": "照相机",
        "pos": "名词",
        "spell": "camera"
      },
      {
        "id": "s1-can",
        "en": "can",
        "zh": "能；可以",
        "pos": "动词",
        "spell": "can"
      },
      {
        "id": "s1-car",
        "en": "car",
        "zh": "小汽车",
        "pos": "名词",
        "spell": "car"
      },
      {
        "id": "s1-carrot",
        "en": "carrot",
        "zh": "胡萝卜",
        "pos": "名词",
        "spell": "carrot"
      },
      {
        "id": "s1-castle",
        "en": "castle",
        "zh": "城堡",
        "pos": "名词",
        "spell": "castle"
      },
      {
        "id": "s1-cat",
        "en": "cat",
        "zh": "猫",
        "pos": "名词",
        "spell": "cat"
      },
      {
        "id": "s1-catch-e-g-a-ball",
        "en": "catch (e.g. a ball)",
        "zh": "接住",
        "pos": "动词",
        "spell": "catch"
      },
      {
        "id": "s1-chair",
        "en": "chair",
        "zh": "椅子",
        "pos": "名词",
        "spell": "chair"
      },
      {
        "id": "s1-cheese",
        "en": "cheese",
        "zh": "奶酪",
        "pos": "名词",
        "spell": "cheese"
      },
      {
        "id": "s1-chicken",
        "en": "chicken",
        "zh": "鸡；鸡肉",
        "pos": "名词",
        "spell": "chicken"
      },
      {
        "id": "s1-child-children",
        "en": "child/children",
        "zh": "孩子",
        "pos": "名词",
        "spell": "child"
      },
      {
        "id": "s1-chips-us-fries",
        "en": "chips (US fries)",
        "zh": "薯条",
        "pos": "名词",
        "spell": "chips"
      },
      {
        "id": "s1-chocolate",
        "en": "chocolate",
        "zh": "巧克力",
        "pos": "名词",
        "spell": "chocolate"
      },
      {
        "id": "s1-choose",
        "en": "choose",
        "zh": "选择",
        "pos": "动词",
        "spell": "choose"
      },
      {
        "id": "s1-clap",
        "en": "clap",
        "zh": "鼓掌",
        "pos": "动词",
        "spell": "clap"
      },
      {
        "id": "s1-class",
        "en": "class",
        "zh": "班级",
        "pos": "名词",
        "spell": "class"
      },
      {
        "id": "s1-classmate",
        "en": "classmate",
        "zh": "同学",
        "pos": "名词",
        "spell": "classmate"
      },
      {
        "id": "s1-clock",
        "en": "clock",
        "zh": "时钟",
        "pos": "名词",
        "spell": "clock"
      },
      {
        "id": "s1-close",
        "en": "close",
        "zh": "关闭",
        "pos": "动词",
        "spell": "close"
      },
      {
        "id": "s1-closed",
        "en": "closed",
        "zh": "关闭的",
        "pos": "形容词",
        "spell": "closed"
      },
      {
        "id": "s1-clothes",
        "en": "clothes",
        "zh": "衣服",
        "pos": "名词",
        "spell": "clothes"
      },
      {
        "id": "s1-cloud",
        "en": "cloud",
        "zh": "云",
        "pos": "名词",
        "spell": "cloud"
      },
      {
        "id": "s1-coconut",
        "en": "coconut",
        "zh": "椰子",
        "pos": "名词",
        "spell": "coconut"
      },
      {
        "id": "s1-come",
        "en": "come",
        "zh": "来",
        "pos": "动词",
        "spell": "come"
      },
      {
        "id": "s1-complete",
        "en": "complete",
        "zh": "完成",
        "pos": "动词",
        "spell": "complete"
      },
      {
        "id": "s1-computer",
        "en": "computer",
        "zh": "电脑",
        "pos": "名词",
        "spell": "computer"
      },
      {
        "id": "s1-cool",
        "en": "cool",
        "zh": "酷的；凉爽的",
        "pos": "形容词 / 感叹",
        "spell": "cool"
      },
      {
        "id": "s1-correct",
        "en": "correct",
        "zh": "正确的",
        "pos": "形容词",
        "spell": "correct"
      },
      {
        "id": "s1-count",
        "en": "count",
        "zh": "数",
        "pos": "动词",
        "spell": "count"
      },
      {
        "id": "s1-cousin",
        "en": "cousin",
        "zh": "表亲；堂亲",
        "pos": "名词",
        "spell": "cousin"
      },
      {
        "id": "s1-cow",
        "en": "cow",
        "zh": "奶牛",
        "pos": "名词",
        "spell": "cow"
      },
      {
        "id": "s1-crayon",
        "en": "crayon",
        "zh": "蜡笔",
        "pos": "名词",
        "spell": "crayon"
      },
      {
        "id": "s1-crocodile",
        "en": "crocodile",
        "zh": "鳄鱼",
        "pos": "名词",
        "spell": "crocodile"
      },
      {
        "id": "s1-cross",
        "en": "cross",
        "zh": "十字；划掉",
        "pos": "名词 / 动词",
        "spell": "cross"
      },
      {
        "id": "s1-cup",
        "en": "cup",
        "zh": "杯子",
        "pos": "名词",
        "spell": "cup"
      },
      {
        "id": "s1-cupboard",
        "en": "cupboard",
        "zh": "橱柜",
        "pos": "名词",
        "spell": "cupboard"
      },
      {
        "id": "s1-dad",
        "en": "dad",
        "zh": "爸爸",
        "pos": "名词",
        "spell": "dad"
      },
      {
        "id": "s1-day",
        "en": "day",
        "zh": "天；日子",
        "pos": "名词",
        "spell": "day"
      },
      {
        "id": "s1-desk",
        "en": "desk",
        "zh": "书桌",
        "pos": "名词",
        "spell": "desk"
      },
      {
        "id": "s1-dining-room",
        "en": "dining room",
        "zh": "餐厅",
        "pos": "名词",
        "spell": "dining room"
      },
      {
        "id": "s1-dinner",
        "en": "dinner",
        "zh": "晚餐",
        "pos": "名词",
        "spell": "dinner"
      },
      {
        "id": "s1-dirty",
        "en": "dirty",
        "zh": "脏的",
        "pos": "形容词",
        "spell": "dirty"
      },
      {
        "id": "s1-do",
        "en": "do",
        "zh": "做",
        "pos": "动词",
        "spell": "do"
      },
      {
        "id": "s1-doll",
        "en": "doll",
        "zh": "玩具娃娃",
        "pos": "名词",
        "spell": "doll"
      },
      {
        "id": "s1-don-t-worry",
        "en": "don’t worry",
        "zh": "别担心",
        "pos": "感叹",
        "spell": "don’t worry"
      },
      {
        "id": "s1-donkey",
        "en": "donkey",
        "zh": "驴",
        "pos": "名词",
        "spell": "donkey"
      },
      {
        "id": "s1-door",
        "en": "door",
        "zh": "门",
        "pos": "名词",
        "spell": "door"
      },
      {
        "id": "s1-double",
        "en": "double",
        "zh": "双的；两倍的",
        "pos": "形容词",
        "spell": "double"
      },
      {
        "id": "s1-dragon",
        "en": "dragon",
        "zh": "龙",
        "pos": "名词",
        "spell": "dragon"
      },
      {
        "id": "s1-draw",
        "en": "draw",
        "zh": "画画",
        "pos": "动词",
        "spell": "draw"
      },
      {
        "id": "s1-drawing",
        "en": "drawing",
        "zh": "图画",
        "pos": "名词",
        "spell": "drawing"
      },
      {
        "id": "s1-dress",
        "en": "dress",
        "zh": "连衣裙",
        "pos": "名词",
        "spell": "dress"
      },
      {
        "id": "s1-drink",
        "en": "drink",
        "zh": "喝；饮料",
        "pos": "名词 / 动词",
        "spell": "drink"
      },
      {
        "id": "s1-drive",
        "en": "drive",
        "zh": "开车",
        "pos": "动词",
        "spell": "drive"
      },
      {
        "id": "s1-duck",
        "en": "duck",
        "zh": "鸭子",
        "pos": "名词",
        "spell": "duck"
      },
      {
        "id": "s1-ear",
        "en": "ear",
        "zh": "耳朵",
        "pos": "名词",
        "spell": "ear"
      },
      {
        "id": "s1-eat",
        "en": "eat",
        "zh": "吃",
        "pos": "动词",
        "spell": "eat"
      },
      {
        "id": "s1-end",
        "en": "end",
        "zh": "结尾；结束",
        "pos": "名词",
        "spell": "end"
      },
      {
        "id": "s1-english",
        "en": "English",
        "zh": "英语；英国的",
        "pos": "形容词 / 名词",
        "spell": "English"
      },
      {
        "id": "s1-enjoy",
        "en": "enjoy",
        "zh": "享受",
        "pos": "动词",
        "spell": "enjoy"
      },
      {
        "id": "s1-eraser-uk-rubber",
        "en": "eraser (UK rubber)",
        "zh": "橡皮",
        "pos": "名词",
        "spell": "eraser"
      },
      {
        "id": "s1-evening",
        "en": "evening",
        "zh": "晚上",
        "pos": "名词",
        "spell": "evening"
      },
      {
        "id": "s1-example",
        "en": "example",
        "zh": "例子",
        "pos": "名词",
        "spell": "example"
      },
      {
        "id": "s1-eye",
        "en": "eye",
        "zh": "眼睛",
        "pos": "名词",
        "spell": "eye"
      },
      {
        "id": "s1-face",
        "en": "face",
        "zh": "脸",
        "pos": "名词",
        "spell": "face"
      },
      {
        "id": "s1-family",
        "en": "family",
        "zh": "家庭",
        "pos": "名词",
        "spell": "family"
      },
      {
        "id": "s1-fantastic",
        "en": "fantastic",
        "zh": "极好的",
        "pos": "形容词 / 感叹",
        "spell": "fantastic"
      },
      {
        "id": "s1-farm",
        "en": "farm",
        "zh": "农场",
        "pos": "名词",
        "spell": "farm"
      },
      {
        "id": "s1-father",
        "en": "father",
        "zh": "父亲",
        "pos": "名词",
        "spell": "father"
      },
      {
        "id": "s1-favourite-us-favorite",
        "en": "favourite (US favorite)",
        "zh": "最喜欢的",
        "pos": "形容词",
        "spell": "favourite"
      },
      {
        "id": "s1-find",
        "en": "find",
        "zh": "找到",
        "pos": "动词",
        "spell": "find"
      },
      {
        "id": "s1-finger",
        "en": "finger",
        "zh": "手指",
        "pos": "名词",
        "spell": "finger"
      },
      {
        "id": "s1-fish-s-pl",
        "en": "fish (s + pl)",
        "zh": "鱼",
        "pos": "名词",
        "spell": "fish"
      },
      {
        "id": "s1-fishing",
        "en": "fishing",
        "zh": "钓鱼",
        "pos": "名词",
        "spell": "fishing"
      },
      {
        "id": "s1-flat-us-apartment",
        "en": "flat (US apartment)",
        "zh": "公寓",
        "pos": "名词",
        "spell": "flat"
      },
      {
        "id": "s1-floor",
        "en": "floor",
        "zh": "地板；楼层",
        "pos": "名词",
        "spell": "floor"
      },
      {
        "id": "s1-flower",
        "en": "flower",
        "zh": "花",
        "pos": "名词",
        "spell": "flower"
      },
      {
        "id": "s1-fly",
        "en": "fly",
        "zh": "飞；苍蝇",
        "pos": "动词",
        "spell": "fly"
      },
      {
        "id": "s1-food",
        "en": "food",
        "zh": "食物",
        "pos": "名词",
        "spell": "food"
      },
      {
        "id": "s1-foot-feet",
        "en": "foot/feet",
        "zh": "脚",
        "pos": "名词",
        "spell": "foot"
      },
      {
        "id": "s1-football-us-soccer",
        "en": "football (US soccer)",
        "zh": "足球",
        "pos": "名词",
        "spell": "football"
      },
      {
        "id": "s1-for",
        "en": "for",
        "zh": "为了",
        "pos": "介词",
        "spell": "for"
      },
      {
        "id": "s1-fork",
        "en": "fork",
        "zh": "叉子",
        "pos": "名词",
        "spell": "fork"
      },
      {
        "id": "s1-friend",
        "en": "friend",
        "zh": "朋友",
        "pos": "名词",
        "spell": "friend"
      },
      {
        "id": "s1-fries-uk-chips",
        "en": "fries (UK chips)",
        "zh": "薯条",
        "pos": "名词",
        "spell": "fries"
      },
      {
        "id": "s1-frog",
        "en": "frog",
        "zh": "青蛙",
        "pos": "名词",
        "spell": "frog"
      },
      {
        "id": "s1-from",
        "en": "from",
        "zh": "从",
        "pos": "介词",
        "spell": "from"
      },
      {
        "id": "s1-fruit",
        "en": "fruit",
        "zh": "水果",
        "pos": "名词",
        "spell": "fruit"
      },
      {
        "id": "s1-fun",
        "en": "fun",
        "zh": "有趣；乐趣",
        "pos": "形容词 / 名词",
        "spell": "fun"
      },
      {
        "id": "s1-funny",
        "en": "funny",
        "zh": "好笑的",
        "pos": "形容词",
        "spell": "funny"
      },
      {
        "id": "s1-game",
        "en": "game",
        "zh": "游戏",
        "pos": "名词",
        "spell": "game"
      },
      {
        "id": "s1-garden",
        "en": "garden",
        "zh": "花园",
        "pos": "名词",
        "spell": "garden"
      },
      {
        "id": "s1-get",
        "en": "get",
        "zh": "得到；到达",
        "pos": "动词",
        "spell": "get"
      },
      {
        "id": "s1-ghost",
        "en": "ghost",
        "zh": "鬼",
        "pos": "名词",
        "spell": "ghost"
      },
      {
        "id": "s1-giraffe",
        "en": "giraffe",
        "zh": "长颈鹿",
        "pos": "名词",
        "spell": "giraffe"
      },
      {
        "id": "s1-girl",
        "en": "girl",
        "zh": "女孩",
        "pos": "名词",
        "spell": "girl"
      },
      {
        "id": "s1-give",
        "en": "give",
        "zh": "给",
        "pos": "动词",
        "spell": "give"
      },
      {
        "id": "s1-glasses",
        "en": "glasses",
        "zh": "眼镜",
        "pos": "名词",
        "spell": "glasses"
      },
      {
        "id": "s1-glove",
        "en": "glove",
        "zh": "手套",
        "pos": "名词",
        "spell": "glove"
      },
      {
        "id": "s1-go",
        "en": "go",
        "zh": "去",
        "pos": "动词",
        "spell": "go"
      },
      {
        "id": "s1-goat",
        "en": "goat",
        "zh": "山羊",
        "pos": "名词",
        "spell": "goat"
      },
      {
        "id": "s1-good",
        "en": "good",
        "zh": "好的",
        "pos": "形容词",
        "spell": "good"
      },
      {
        "id": "s1-goodbye",
        "en": "goodbye",
        "zh": "再见",
        "pos": "感叹",
        "spell": "goodbye"
      },
      {
        "id": "s1-grandfather",
        "en": "grandfather",
        "zh": "祖父",
        "pos": "名词",
        "spell": "grandfather"
      },
      {
        "id": "s1-grandma",
        "en": "grandma",
        "zh": "奶奶；外婆",
        "pos": "名词",
        "spell": "grandma"
      },
      {
        "id": "s1-grandmother",
        "en": "grandmother",
        "zh": "祖母",
        "pos": "名词",
        "spell": "grandmother"
      },
      {
        "id": "s1-grandpa",
        "en": "grandpa",
        "zh": "爷爷；外公",
        "pos": "名词",
        "spell": "grandpa"
      },
      {
        "id": "s1-grape",
        "en": "grape",
        "zh": "葡萄",
        "pos": "名词",
        "spell": "grape"
      },
      {
        "id": "s1-gray-uk-grey",
        "en": "gray (UK grey)",
        "zh": "灰色的",
        "pos": "形容词",
        "spell": "gray"
      },
      {
        "id": "s1-great",
        "en": "great",
        "zh": "很棒的",
        "pos": "形容词 / 感叹",
        "spell": "great"
      },
      {
        "id": "s1-green",
        "en": "green",
        "zh": "绿色的",
        "pos": "形容词",
        "spell": "green"
      },
      {
        "id": "s1-grey-us-gray",
        "en": "grey (US gray)",
        "zh": "灰色的",
        "pos": "形容词",
        "spell": "grey"
      },
      {
        "id": "s1-guitar",
        "en": "guitar",
        "zh": "吉他",
        "pos": "名词",
        "spell": "guitar"
      },
      {
        "id": "s1-hair",
        "en": "hair",
        "zh": "头发",
        "pos": "名词",
        "spell": "hair"
      },
      {
        "id": "s1-hall",
        "en": "hall",
        "zh": "大厅",
        "pos": "名词",
        "spell": "hall"
      },
      {
        "id": "s1-hand",
        "en": "hand",
        "zh": "手",
        "pos": "名词",
        "spell": "hand"
      },
      {
        "id": "s1-handbag",
        "en": "handbag",
        "zh": "手提包",
        "pos": "名词",
        "spell": "handbag"
      },
      {
        "id": "s1-happy",
        "en": "happy",
        "zh": "高兴的",
        "pos": "形容词",
        "spell": "happy"
      },
      {
        "id": "s1-hat",
        "en": "hat",
        "zh": "帽子",
        "pos": "名词",
        "spell": "hat"
      },
      {
        "id": "s1-have-got",
        "en": "have got",
        "zh": "有",
        "pos": "动词",
        "spell": "have got"
      },
      {
        "id": "s1-have",
        "en": "have",
        "zh": "有；吃",
        "pos": "动词",
        "spell": "have"
      },
      {
        "id": "s1-he",
        "en": "he",
        "zh": "他",
        "pos": "代词",
        "spell": "he"
      },
      {
        "id": "s1-head",
        "en": "head",
        "zh": "头",
        "pos": "名词",
        "spell": "head"
      },
      {
        "id": "s1-helicopter",
        "en": "helicopter",
        "zh": "直升机",
        "pos": "名词",
        "spell": "helicopter"
      },
      {
        "id": "s1-hello",
        "en": "hello",
        "zh": "你好",
        "pos": "感叹",
        "spell": "hello"
      },
      {
        "id": "s1-her",
        "en": "her",
        "zh": "她的；她",
        "pos": "形容词 / 代词",
        "spell": "her"
      },
      {
        "id": "s1-here",
        "en": "here",
        "zh": "这里",
        "pos": "副词",
        "spell": "here"
      },
      {
        "id": "s1-hers",
        "en": "hers",
        "zh": "她的（名词性）",
        "pos": "代词",
        "spell": "hers"
      },
      {
        "id": "s1-hi",
        "en": "hi",
        "zh": "嗨",
        "pos": "感叹",
        "spell": "hi"
      },
      {
        "id": "s1-him",
        "en": "him",
        "zh": "他（宾格）",
        "pos": "代词",
        "spell": "him"
      },
      {
        "id": "s1-hippo",
        "en": "hippo",
        "zh": "河马",
        "pos": "名词",
        "spell": "hippo"
      },
      {
        "id": "s1-his",
        "en": "his",
        "zh": "他的",
        "pos": "形容词 / 代词",
        "spell": "his"
      },
      {
        "id": "s1-hit",
        "en": "hit",
        "zh": "打；击",
        "pos": "动词",
        "spell": "hit"
      },
      {
        "id": "s1-hobby",
        "en": "hobby",
        "zh": "爱好",
        "pos": "名词",
        "spell": "hobby"
      },
      {
        "id": "s1-hockey",
        "en": "hockey",
        "zh": "曲棍球",
        "pos": "名词",
        "spell": "hockey"
      },
      {
        "id": "s1-hold",
        "en": "hold",
        "zh": "握住",
        "pos": "动词",
        "spell": "hold"
      },
      {
        "id": "s1-home",
        "en": "home",
        "zh": "家",
        "pos": "名词 / 副词",
        "spell": "home"
      },
      {
        "id": "s1-hooray",
        "en": "hooray",
        "zh": "好哇",
        "pos": "感叹",
        "spell": "hooray"
      },
      {
        "id": "s1-horse",
        "en": "horse",
        "zh": "马",
        "pos": "名词",
        "spell": "horse"
      },
      {
        "id": "s1-house",
        "en": "house",
        "zh": "房子",
        "pos": "名词",
        "spell": "house"
      },
      {
        "id": "s1-how",
        "en": "how",
        "zh": "怎样",
        "pos": "疑问词",
        "spell": "how"
      },
      {
        "id": "s1-how-many",
        "en": "how many",
        "zh": "多少（可数）",
        "pos": "疑问词",
        "spell": "how many"
      },
      {
        "id": "s1-i",
        "en": "I",
        "zh": "我",
        "pos": "代词",
        "spell": "I"
      },
      {
        "id": "s1-ice-cream",
        "en": "ice cream",
        "zh": "冰淇淋",
        "pos": "名词",
        "spell": "ice cream"
      },
      {
        "id": "s1-in-front-of",
        "en": "in front of",
        "zh": "在……前面",
        "pos": "介词",
        "spell": "in front of"
      },
      {
        "id": "s1-in",
        "en": "in",
        "zh": "在……里",
        "pos": "介词",
        "spell": "in"
      },
      {
        "id": "s1-it",
        "en": "it",
        "zh": "它",
        "pos": "代词",
        "spell": "it"
      },
      {
        "id": "s1-its",
        "en": "its",
        "zh": "它的",
        "pos": "形容词 / 代词",
        "spell": "its"
      },
      {
        "id": "s1-jacket",
        "en": "jacket",
        "zh": "夹克",
        "pos": "名词",
        "spell": "jacket"
      },
      {
        "id": "s1-jeans",
        "en": "jeans",
        "zh": "牛仔裤",
        "pos": "名词",
        "spell": "jeans"
      },
      {
        "id": "s1-jellyfish",
        "en": "jellyfish",
        "zh": "水母",
        "pos": "名词",
        "spell": "jellyfish"
      },
      {
        "id": "s1-juice",
        "en": "juice",
        "zh": "果汁",
        "pos": "名词",
        "spell": "juice"
      },
      {
        "id": "s1-jump",
        "en": "jump",
        "zh": "跳",
        "pos": "动词",
        "spell": "jump"
      },
      {
        "id": "s1-kick",
        "en": "kick",
        "zh": "踢",
        "pos": "动词",
        "spell": "kick"
      },
      {
        "id": "s1-kid",
        "en": "kid",
        "zh": "小孩",
        "pos": "名词",
        "spell": "kid"
      },
      {
        "id": "s1-king",
        "en": "king",
        "zh": "国王",
        "pos": "名词",
        "spell": "king"
      },
      {
        "id": "s1-kitchen",
        "en": "kitchen",
        "zh": "厨房",
        "pos": "名词",
        "spell": "kitchen"
      },
      {
        "id": "s1-kite",
        "en": "kite",
        "zh": "风筝",
        "pos": "名词",
        "spell": "kite"
      },
      {
        "id": "s1-kiwi",
        "en": "kiwi",
        "zh": "猕猴桃；几维鸟",
        "pos": "名词",
        "spell": "kiwi"
      },
      {
        "id": "s1-knife",
        "en": "knife",
        "zh": "刀",
        "pos": "名词",
        "spell": "knife"
      },
      {
        "id": "s1-know",
        "en": "know",
        "zh": "知道",
        "pos": "动词",
        "spell": "know"
      },
      {
        "id": "s1-lamp",
        "en": "lamp",
        "zh": "灯",
        "pos": "名词",
        "spell": "lamp"
      },
      {
        "id": "s1-learn",
        "en": "learn",
        "zh": "学习",
        "pos": "动词",
        "spell": "learn"
      },
      {
        "id": "s1-leg",
        "en": "leg",
        "zh": "腿",
        "pos": "名词",
        "spell": "leg"
      },
      {
        "id": "s1-lemon",
        "en": "lemon",
        "zh": "柠檬",
        "pos": "名词",
        "spell": "lemon"
      },
      {
        "id": "s1-lemonade",
        "en": "lemonade",
        "zh": "柠檬水",
        "pos": "名词",
        "spell": "lemonade"
      },
      {
        "id": "s1-lesson",
        "en": "lesson",
        "zh": "课",
        "pos": "名词",
        "spell": "lesson"
      },
      {
        "id": "s1-let-s",
        "en": "let’s",
        "zh": "让我们",
        "pos": "动词",
        "spell": "let’s"
      },
      {
        "id": "s1-like",
        "en": "like",
        "zh": "喜欢；像",
        "pos": "介词 / 动词",
        "spell": "like"
      },
      {
        "id": "s1-lime",
        "en": "lime",
        "zh": "青柠",
        "pos": "名词",
        "spell": "lime"
      },
      {
        "id": "s1-line",
        "en": "line",
        "zh": "线",
        "pos": "名词",
        "spell": "line"
      },
      {
        "id": "s1-lion",
        "en": "lion",
        "zh": "狮子",
        "pos": "名词",
        "spell": "lion"
      },
      {
        "id": "s1-listen",
        "en": "listen",
        "zh": "听",
        "pos": "动词",
        "spell": "listen"
      },
      {
        "id": "s1-live",
        "en": "live",
        "zh": "居住；生活",
        "pos": "动词",
        "spell": "live"
      },
      {
        "id": "s1-living-room",
        "en": "living room",
        "zh": "客厅",
        "pos": "名词",
        "spell": "living room"
      },
      {
        "id": "s1-lizard",
        "en": "lizard",
        "zh": "蜥蜴",
        "pos": "名词",
        "spell": "lizard"
      },
      {
        "id": "s1-long",
        "en": "long",
        "zh": "长的",
        "pos": "形容词",
        "spell": "long"
      },
      {
        "id": "s1-look-at",
        "en": "look at",
        "zh": "看",
        "pos": "动词",
        "spell": "look at"
      },
      {
        "id": "s1-lots",
        "en": "lots",
        "zh": "许多",
        "pos": "副词 / 代词",
        "spell": "lots"
      },
      {
        "id": "s1-lots-of",
        "en": "lots of",
        "zh": "许多",
        "pos": "限定词",
        "spell": "lots of"
      },
      {
        "id": "s1-love",
        "en": "love",
        "zh": "爱",
        "pos": "动词",
        "spell": "love"
      },
      {
        "id": "s1-lunch",
        "en": "lunch",
        "zh": "午餐",
        "pos": "名词",
        "spell": "lunch"
      },
      {
        "id": "s1-make",
        "en": "make",
        "zh": "做；制作",
        "pos": "动词",
        "spell": "make"
      },
      {
        "id": "s1-man-men",
        "en": "man/men",
        "zh": "男人",
        "pos": "名词",
        "spell": "man"
      },
      {
        "id": "s1-mango",
        "en": "mango",
        "zh": "芒果",
        "pos": "名词",
        "spell": "mango"
      },
      {
        "id": "s1-many",
        "en": "many",
        "zh": "许多（可数）",
        "pos": "限定词",
        "spell": "many"
      },
      {
        "id": "s1-mat",
        "en": "mat",
        "zh": "垫子",
        "pos": "名词",
        "spell": "mat"
      },
      {
        "id": "s1-me",
        "en": "me",
        "zh": "我（宾格）",
        "pos": "代词",
        "spell": "me"
      },
      {
        "id": "s1-me-too",
        "en": "me too",
        "zh": "我也是",
        "pos": "话语标记",
        "spell": "me too"
      },
      {
        "id": "s1-meat",
        "en": "meat",
        "zh": "肉",
        "pos": "名词",
        "spell": "meat"
      },
      {
        "id": "s1-meatballs",
        "en": "meatballs",
        "zh": "肉丸",
        "pos": "名词",
        "spell": "meatballs"
      },
      {
        "id": "s1-milk",
        "en": "milk",
        "zh": "牛奶",
        "pos": "名词",
        "spell": "milk"
      },
      {
        "id": "s1-mine",
        "en": "mine",
        "zh": "我的（名词性）",
        "pos": "代词",
        "spell": "mine"
      },
      {
        "id": "s1-mirror",
        "en": "mirror",
        "zh": "镜子",
        "pos": "名词",
        "spell": "mirror"
      },
      {
        "id": "s1-miss",
        "en": "Miss",
        "zh": "小姐（称呼）",
        "pos": "称呼",
        "spell": "Miss"
      },
      {
        "id": "s1-monkey",
        "en": "monkey",
        "zh": "猴子",
        "pos": "名词",
        "spell": "monkey"
      },
      {
        "id": "s1-monster",
        "en": "monster",
        "zh": "怪物",
        "pos": "名词",
        "spell": "monster"
      },
      {
        "id": "s1-morning",
        "en": "morning",
        "zh": "早晨",
        "pos": "名词",
        "spell": "morning"
      },
      {
        "id": "s1-mother",
        "en": "mother",
        "zh": "母亲",
        "pos": "名词",
        "spell": "mother"
      },
      {
        "id": "s1-motorbike",
        "en": "motorbike",
        "zh": "摩托车",
        "pos": "名词",
        "spell": "motorbike"
      },
      {
        "id": "s1-mouse-computer",
        "en": "mouse (computer)",
        "zh": "鼠标",
        "pos": "名词",
        "spell": "mouse"
      },
      {
        "id": "s1-mouse-mice",
        "en": "mouse/mice",
        "zh": "老鼠",
        "pos": "名词",
        "spell": "mouse"
      },
      {
        "id": "s1-mouth",
        "en": "mouth",
        "zh": "嘴",
        "pos": "名词",
        "spell": "mouth"
      },
      {
        "id": "s1-mr",
        "en": "Mr",
        "zh": "先生",
        "pos": "称呼",
        "spell": "Mr"
      },
      {
        "id": "s1-mrs",
        "en": "Mrs",
        "zh": "太太",
        "pos": "称呼",
        "spell": "Mrs"
      },
      {
        "id": "s1-mum",
        "en": "mum",
        "zh": "妈妈",
        "pos": "名词",
        "spell": "mum"
      },
      {
        "id": "s1-music",
        "en": "music",
        "zh": "音乐",
        "pos": "名词",
        "spell": "music"
      },
      {
        "id": "s1-my",
        "en": "my",
        "zh": "我的",
        "pos": "形容词",
        "spell": "my"
      },
      {
        "id": "s1-name",
        "en": "name",
        "zh": "名字",
        "pos": "名词",
        "spell": "name"
      },
      {
        "id": "s1-new",
        "en": "new",
        "zh": "新的",
        "pos": "形容词",
        "spell": "new"
      },
      {
        "id": "s1-next-to",
        "en": "next to",
        "zh": "在……旁边",
        "pos": "介词",
        "spell": "next to"
      },
      {
        "id": "s1-nice",
        "en": "nice",
        "zh": "好的；友好的",
        "pos": "形容词",
        "spell": "nice"
      },
      {
        "id": "s1-night",
        "en": "night",
        "zh": "夜晚",
        "pos": "名词",
        "spell": "night"
      },
      {
        "id": "s1-no",
        "en": "no",
        "zh": "不",
        "pos": "副词 / 限定词",
        "spell": "no"
      },
      {
        "id": "s1-nobody",
        "en": "nobody",
        "zh": "没有人",
        "pos": "代词",
        "spell": "nobody"
      },
      {
        "id": "s1-nose",
        "en": "nose",
        "zh": "鼻子",
        "pos": "名词",
        "spell": "nose"
      },
      {
        "id": "s1-not",
        "en": "not",
        "zh": "不",
        "pos": "副词",
        "spell": "not"
      },
      {
        "id": "s1-notebook",
        "en": "notebook",
        "zh": "笔记本",
        "pos": "名词",
        "spell": "notebook"
      },
      {
        "id": "s1-now",
        "en": "now",
        "zh": "现在",
        "pos": "副词",
        "spell": "now"
      },
      {
        "id": "s1-number",
        "en": "number",
        "zh": "数字",
        "pos": "名词",
        "spell": "number"
      },
      {
        "id": "s1-of",
        "en": "of",
        "zh": "……的",
        "pos": "介词",
        "spell": "of"
      },
      {
        "id": "s1-oh-dear",
        "en": "oh dear",
        "zh": "哎呀",
        "pos": "感叹",
        "spell": "oh dear"
      },
      {
        "id": "s1-oh",
        "en": "oh",
        "zh": "哦",
        "pos": "话语标记",
        "spell": "oh"
      },
      {
        "id": "s1-ok",
        "en": "OK",
        "zh": "好的",
        "pos": "形容词 / 话语标记",
        "spell": "OK"
      },
      {
        "id": "s1-old",
        "en": "old",
        "zh": "老的；旧的",
        "pos": "形容词",
        "spell": "old"
      },
      {
        "id": "s1-on",
        "en": "on",
        "zh": "在……上面",
        "pos": "介词",
        "spell": "on"
      },
      {
        "id": "s1-one",
        "en": "one",
        "zh": "一；一个",
        "pos": "限定词 / 代词",
        "spell": "one"
      },
      {
        "id": "s1-onion",
        "en": "onion",
        "zh": "洋葱",
        "pos": "名词",
        "spell": "onion"
      },
      {
        "id": "s1-open",
        "en": "open",
        "zh": "打开；开着的",
        "pos": "形容词 / 动词",
        "spell": "open"
      },
      {
        "id": "s1-or",
        "en": "or",
        "zh": "或者",
        "pos": "连词",
        "spell": "or"
      },
      {
        "id": "s1-orange",
        "en": "orange",
        "zh": "橙子；橙色的",
        "pos": "形容词 / 名词",
        "spell": "orange"
      },
      {
        "id": "s1-our",
        "en": "our",
        "zh": "我们的",
        "pos": "形容词",
        "spell": "our"
      },
      {
        "id": "s1-ours",
        "en": "ours",
        "zh": "我们的（名词性）",
        "pos": "代词",
        "spell": "ours"
      },
      {
        "id": "s1-page",
        "en": "page",
        "zh": "页",
        "pos": "名词",
        "spell": "page"
      },
      {
        "id": "s1-paint",
        "en": "paint",
        "zh": "油漆；绘画",
        "pos": "名词 / 动词",
        "spell": "paint"
      },
      {
        "id": "s1-painting",
        "en": "painting",
        "zh": "画",
        "pos": "名词",
        "spell": "painting"
      },
      {
        "id": "s1-paper",
        "en": "paper",
        "zh": "纸",
        "pos": "形容词 / 名词",
        "spell": "paper"
      },
      {
        "id": "s1-pardon",
        "en": "pardon",
        "zh": "请再说一遍",
        "pos": "疑问词",
        "spell": "pardon"
      },
      {
        "id": "s1-park",
        "en": "park",
        "zh": "公园",
        "pos": "名词",
        "spell": "park"
      },
      {
        "id": "s1-part",
        "en": "part",
        "zh": "部分",
        "pos": "名词",
        "spell": "part"
      },
      {
        "id": "s1-pea",
        "en": "pea",
        "zh": "豌豆",
        "pos": "名词",
        "spell": "pea"
      },
      {
        "id": "s1-pear",
        "en": "pear",
        "zh": "梨",
        "pos": "名词",
        "spell": "pear"
      },
      {
        "id": "s1-pen",
        "en": "pen",
        "zh": "钢笔",
        "pos": "名词",
        "spell": "pen"
      },
      {
        "id": "s1-pencil",
        "en": "pencil",
        "zh": "铅笔",
        "pos": "名词",
        "spell": "pencil"
      },
      {
        "id": "s1-person-people",
        "en": "person/people",
        "zh": "人",
        "pos": "名词",
        "spell": "person"
      },
      {
        "id": "s1-pet",
        "en": "pet",
        "zh": "宠物",
        "pos": "名词",
        "spell": "pet"
      },
      {
        "id": "s1-phone",
        "en": "phone",
        "zh": "电话",
        "pos": "名词 / 动词",
        "spell": "phone"
      },
      {
        "id": "s1-photo",
        "en": "photo",
        "zh": "照片",
        "pos": "名词",
        "spell": "photo"
      },
      {
        "id": "s1-piano",
        "en": "piano",
        "zh": "钢琴",
        "pos": "名词",
        "spell": "piano"
      },
      {
        "id": "s1-pick-up",
        "en": "pick up",
        "zh": "捡起；接（人）",
        "pos": "动词",
        "spell": "pick up"
      },
      {
        "id": "s1-picnic",
        "en": "picnic",
        "zh": "野餐",
        "pos": "名词",
        "spell": "picnic"
      },
      {
        "id": "s1-picture",
        "en": "picture",
        "zh": "图画；照片",
        "pos": "名词",
        "spell": "picture"
      },
      {
        "id": "s1-pie",
        "en": "pie",
        "zh": "馅饼",
        "pos": "名词",
        "spell": "pie"
      },
      {
        "id": "s1-pineapple",
        "en": "pineapple",
        "zh": "菠萝",
        "pos": "名词",
        "spell": "pineapple"
      },
      {
        "id": "s1-pink",
        "en": "pink",
        "zh": "粉红色的",
        "pos": "形容词",
        "spell": "pink"
      },
      {
        "id": "s1-pirate",
        "en": "pirate",
        "zh": "海盗",
        "pos": "名词",
        "spell": "pirate"
      },
      {
        "id": "s1-plane",
        "en": "plane",
        "zh": "飞机",
        "pos": "名词",
        "spell": "plane"
      },
      {
        "id": "s1-play",
        "en": "play",
        "zh": "玩；演奏",
        "pos": "动词",
        "spell": "play"
      },
      {
        "id": "s1-playground",
        "en": "playground",
        "zh": "操场",
        "pos": "名词",
        "spell": "playground"
      },
      {
        "id": "s1-please",
        "en": "please",
        "zh": "请",
        "pos": "话语标记",
        "spell": "please"
      },
      {
        "id": "s1-point",
        "en": "point",
        "zh": "指",
        "pos": "动词",
        "spell": "point"
      },
      {
        "id": "s1-polar-bear",
        "en": "polar bear",
        "zh": "北极熊",
        "pos": "名词",
        "spell": "polar bear"
      },
      {
        "id": "s1-princess",
        "en": "princess",
        "zh": "公主",
        "pos": "名词",
        "spell": "princess"
      },
      {
        "id": "s1-pupil",
        "en": "pupil",
        "zh": "学生",
        "pos": "名词",
        "spell": "pupil"
      },
      {
        "id": "s1-purple",
        "en": "purple",
        "zh": "紫色的",
        "pos": "形容词",
        "spell": "purple"
      },
      {
        "id": "s1-put",
        "en": "put",
        "zh": "放",
        "pos": "动词",
        "spell": "put"
      },
      {
        "id": "s1-queen",
        "en": "queen",
        "zh": "女王",
        "pos": "名词",
        "spell": "queen"
      },
      {
        "id": "s1-question",
        "en": "question",
        "zh": "问题",
        "pos": "名词",
        "spell": "question"
      },
      {
        "id": "s1-radio",
        "en": "radio",
        "zh": "收音机",
        "pos": "名词",
        "spell": "radio"
      },
      {
        "id": "s1-rain",
        "en": "rain",
        "zh": "雨；下雨",
        "pos": "名词 / 动词",
        "spell": "rain"
      },
      {
        "id": "s1-read",
        "en": "read",
        "zh": "读",
        "pos": "动词",
        "spell": "read"
      },
      {
        "id": "s1-really",
        "en": "really",
        "zh": "真正地；很",
        "pos": "副词",
        "spell": "really"
      },
      {
        "id": "s1-red",
        "en": "red",
        "zh": "红色的",
        "pos": "形容词",
        "spell": "red"
      },
      {
        "id": "s1-rice",
        "en": "rice",
        "zh": "米饭；米",
        "pos": "名词",
        "spell": "rice"
      },
      {
        "id": "s1-ride",
        "en": "ride",
        "zh": "骑",
        "pos": "动词",
        "spell": "ride"
      },
      {
        "id": "s1-right-as-in-correct",
        "en": "right (as in correct)",
        "zh": "对的",
        "pos": "形容词",
        "spell": "right"
      },
      {
        "id": "s1-right",
        "en": "right",
        "zh": "右边；对的",
        "pos": "话语标记",
        "spell": "right"
      },
      {
        "id": "s1-robot",
        "en": "robot",
        "zh": "机器人",
        "pos": "名词",
        "spell": "robot"
      },
      {
        "id": "s1-room",
        "en": "room",
        "zh": "房间",
        "pos": "名词",
        "spell": "room"
      },
      {
        "id": "s1-rubber-us-eraser",
        "en": "rubber (US eraser)",
        "zh": "橡皮",
        "pos": "名词",
        "spell": "rubber"
      },
      {
        "id": "s1-rug",
        "en": "rug",
        "zh": "小地毯",
        "pos": "名词",
        "spell": "rug"
      },
      {
        "id": "s1-ruler",
        "en": "ruler",
        "zh": "尺子",
        "pos": "名词",
        "spell": "ruler"
      },
      {
        "id": "s1-run",
        "en": "run",
        "zh": "跑",
        "pos": "动词",
        "spell": "run"
      },
      {
        "id": "s1-sad",
        "en": "sad",
        "zh": "伤心的",
        "pos": "形容词",
        "spell": "sad"
      },
      {
        "id": "s1-sand",
        "en": "sand",
        "zh": "沙子",
        "pos": "名词",
        "spell": "sand"
      },
      {
        "id": "s1-sausage",
        "en": "sausage",
        "zh": "香肠",
        "pos": "名词",
        "spell": "sausage"
      },
      {
        "id": "s1-say",
        "en": "say",
        "zh": "说",
        "pos": "动词",
        "spell": "say"
      },
      {
        "id": "s1-scary",
        "en": "scary",
        "zh": "可怕的",
        "pos": "形容词",
        "spell": "scary"
      },
      {
        "id": "s1-school",
        "en": "school",
        "zh": "学校",
        "pos": "名词",
        "spell": "school"
      },
      {
        "id": "s1-sea",
        "en": "sea",
        "zh": "海",
        "pos": "名词",
        "spell": "sea"
      },
      {
        "id": "s1-see",
        "en": "see",
        "zh": "看见",
        "pos": "动词",
        "spell": "see"
      },
      {
        "id": "s1-see-you",
        "en": "see you",
        "zh": "再见",
        "pos": "感叹",
        "spell": "see you"
      },
      {
        "id": "s1-sentence",
        "en": "sentence",
        "zh": "判决；句子",
        "pos": "名词",
        "spell": "sentence"
      },
      {
        "id": "s1-she",
        "en": "she",
        "zh": "她",
        "pos": "代词",
        "spell": "she"
      },
      {
        "id": "s1-sheep-s-pl",
        "en": "sheep (s + pl)",
        "zh": "羊",
        "pos": "名词",
        "spell": "sheep"
      },
      {
        "id": "s1-shell",
        "en": "shell",
        "zh": "贝壳",
        "pos": "名词",
        "spell": "shell"
      },
      {
        "id": "s1-ship",
        "en": "ship",
        "zh": "轮船",
        "pos": "名词",
        "spell": "ship"
      },
      {
        "id": "s1-shirt",
        "en": "shirt",
        "zh": "衬衫",
        "pos": "名词",
        "spell": "shirt"
      },
      {
        "id": "s1-shoe",
        "en": "shoe",
        "zh": "鞋",
        "pos": "名词",
        "spell": "shoe"
      },
      {
        "id": "s1-shop-us-store",
        "en": "shop (US store)",
        "zh": "商店",
        "pos": "名词",
        "spell": "shop"
      },
      {
        "id": "s1-short",
        "en": "short",
        "zh": "短的；矮的",
        "pos": "形容词",
        "spell": "short"
      },
      {
        "id": "s1-shorts",
        "en": "shorts",
        "zh": "短裤",
        "pos": "名词",
        "spell": "shorts"
      },
      {
        "id": "s1-sing",
        "en": "sing",
        "zh": "唱",
        "pos": "动词",
        "spell": "sing"
      },
      {
        "id": "s1-sister",
        "en": "sister",
        "zh": "姐妹",
        "pos": "名词",
        "spell": "sister"
      },
      {
        "id": "s1-sit",
        "en": "sit",
        "zh": "坐",
        "pos": "动词",
        "spell": "sit"
      },
      {
        "id": "s1-skateboard",
        "en": "skateboard",
        "zh": "滑板",
        "pos": "名词",
        "spell": "skateboard"
      },
      {
        "id": "s1-skateboarding",
        "en": "skateboarding",
        "zh": "滑滑板",
        "pos": "名词",
        "spell": "skateboarding"
      },
      {
        "id": "s1-skirt",
        "en": "skirt",
        "zh": "裙子",
        "pos": "名词",
        "spell": "skirt"
      },
      {
        "id": "s1-sky",
        "en": "sky",
        "zh": "天空",
        "pos": "名词",
        "spell": "sky"
      },
      {
        "id": "s1-sleep",
        "en": "sleep",
        "zh": "睡觉",
        "pos": "动词",
        "spell": "sleep"
      },
      {
        "id": "s1-small",
        "en": "small",
        "zh": "小的",
        "pos": "形容词",
        "spell": "small"
      },
      {
        "id": "s1-smile",
        "en": "smile",
        "zh": "微笑",
        "pos": "名词 / 动词",
        "spell": "smile"
      },
      {
        "id": "s1-snake",
        "en": "snake",
        "zh": "蛇",
        "pos": "名词",
        "spell": "snake"
      },
      {
        "id": "s1-snow",
        "en": "snow",
        "zh": "雪；下雪",
        "pos": "名词 / 动词",
        "spell": "snow"
      },
      {
        "id": "s1-so",
        "en": "so",
        "zh": "所以；如此",
        "pos": "话语标记",
        "spell": "so"
      },
      {
        "id": "s1-sock",
        "en": "sock",
        "zh": "袜子",
        "pos": "名词",
        "spell": "sock"
      },
      {
        "id": "s1-sofa",
        "en": "sofa",
        "zh": "沙发",
        "pos": "名词",
        "spell": "sofa"
      },
      {
        "id": "s1-some",
        "en": "some",
        "zh": "一些",
        "pos": "限定词",
        "spell": "some"
      },
      {
        "id": "s1-song",
        "en": "song",
        "zh": "歌曲",
        "pos": "名词",
        "spell": "song"
      },
      {
        "id": "s1-sorry",
        "en": "sorry",
        "zh": "对不起",
        "pos": "形容词 / 疑问词",
        "spell": "sorry"
      },
      {
        "id": "s1-spell",
        "en": "spell",
        "zh": "拼写",
        "pos": "动词",
        "spell": "spell"
      },
      {
        "id": "s1-spider",
        "en": "spider",
        "zh": "蜘蛛",
        "pos": "名词",
        "spell": "spider"
      },
      {
        "id": "s1-spoon",
        "en": "spoon",
        "zh": "勺子",
        "pos": "名词",
        "spell": "spoon"
      },
      {
        "id": "s1-sport",
        "en": "sport",
        "zh": "运动",
        "pos": "名词",
        "spell": "sport"
      },
      {
        "id": "s1-stand",
        "en": "stand",
        "zh": "站",
        "pos": "动词",
        "spell": "stand"
      },
      {
        "id": "s1-start",
        "en": "start",
        "zh": "开始",
        "pos": "动词",
        "spell": "start"
      },
      {
        "id": "s1-stop",
        "en": "stop",
        "zh": "停止",
        "pos": "动词",
        "spell": "stop"
      },
      {
        "id": "s1-store-uk-shop",
        "en": "store (UK shop)",
        "zh": "商店",
        "pos": "名词",
        "spell": "store"
      },
      {
        "id": "s1-story",
        "en": "story",
        "zh": "故事",
        "pos": "名词",
        "spell": "story"
      },
      {
        "id": "s1-street",
        "en": "street",
        "zh": "街道",
        "pos": "名词",
        "spell": "street"
      },
      {
        "id": "s1-sun",
        "en": "sun",
        "zh": "太阳",
        "pos": "名词",
        "spell": "sun"
      },
      {
        "id": "s1-sunny",
        "en": "sunny",
        "zh": "晴朗的",
        "pos": "形容词",
        "spell": "sunny"
      },
      {
        "id": "s1-sweet-s-us-candy",
        "en": "sweet(s) (US candy)",
        "zh": "糖果",
        "pos": "名词",
        "spell": "sweet"
      },
      {
        "id": "s1-swim",
        "en": "swim",
        "zh": "游泳",
        "pos": "动词",
        "spell": "swim"
      },
      {
        "id": "s1-table",
        "en": "table",
        "zh": "桌子",
        "pos": "名词",
        "spell": "table"
      },
      {
        "id": "s1-table-tennis",
        "en": "table tennis",
        "zh": "乒乓球",
        "pos": "名词",
        "spell": "table tennis"
      },
      {
        "id": "s1-tablet",
        "en": "tablet",
        "zh": "平板电脑",
        "pos": "名词",
        "spell": "tablet"
      },
      {
        "id": "s1-tail",
        "en": "tail",
        "zh": "尾巴",
        "pos": "名词",
        "spell": "tail"
      },
      {
        "id": "s1-talk",
        "en": "talk",
        "zh": "谈话",
        "pos": "动词",
        "spell": "talk"
      },
      {
        "id": "s1-teacher",
        "en": "teacher",
        "zh": "老师",
        "pos": "名词",
        "spell": "teacher"
      },
      {
        "id": "s1-teddy-bear",
        "en": "teddy (bear)",
        "zh": "泰迪熊",
        "pos": "名词",
        "spell": "teddy"
      },
      {
        "id": "s1-television-tv",
        "en": "television/TV",
        "zh": "电视",
        "pos": "名词",
        "spell": "television"
      },
      {
        "id": "s1-tell",
        "en": "tell",
        "zh": "告诉",
        "pos": "动词",
        "spell": "tell"
      },
      {
        "id": "s1-thank-you",
        "en": "thank you",
        "zh": "谢谢",
        "pos": "话语标记",
        "spell": "thank you"
      },
      {
        "id": "s1-thanks",
        "en": "thanks",
        "zh": "谢谢",
        "pos": "话语标记",
        "spell": "thanks"
      },
      {
        "id": "s1-that",
        "en": "that",
        "zh": "那个",
        "pos": "限定词 / 代词",
        "spell": "that"
      },
      {
        "id": "s1-the",
        "en": "the",
        "zh": "这；那（定冠词）",
        "pos": "限定词",
        "spell": "the"
      },
      {
        "id": "s1-their",
        "en": "their",
        "zh": "他们的",
        "pos": "形容词",
        "spell": "their"
      },
      {
        "id": "s1-theirs",
        "en": "theirs",
        "zh": "他们的（名词性）",
        "pos": "代词",
        "spell": "theirs"
      },
      {
        "id": "s1-them",
        "en": "them",
        "zh": "他们（宾格）",
        "pos": "代词",
        "spell": "them"
      },
      {
        "id": "s1-then",
        "en": "then",
        "zh": "然后",
        "pos": "话语标记",
        "spell": "then"
      },
      {
        "id": "s1-there",
        "en": "there",
        "zh": "那里",
        "pos": "副词",
        "spell": "there"
      },
      {
        "id": "s1-these",
        "en": "these",
        "zh": "这些",
        "pos": "限定词 / 代词",
        "spell": "these"
      },
      {
        "id": "s1-they",
        "en": "they",
        "zh": "他们",
        "pos": "代词",
        "spell": "they"
      },
      {
        "id": "s1-thing",
        "en": "thing",
        "zh": "东西",
        "pos": "名词",
        "spell": "thing"
      },
      {
        "id": "s1-this",
        "en": "this",
        "zh": "这个",
        "pos": "限定词 / 代词",
        "spell": "this"
      },
      {
        "id": "s1-throw",
        "en": "throw",
        "zh": "扔",
        "pos": "动词",
        "spell": "throw"
      },
      {
        "id": "s1-tick",
        "en": "tick",
        "zh": "打勾",
        "pos": "名词 / 动词",
        "spell": "tick"
      },
      {
        "id": "s1-tiger",
        "en": "tiger",
        "zh": "老虎",
        "pos": "名词",
        "spell": "tiger"
      },
      {
        "id": "s1-to",
        "en": "to",
        "zh": "到；向",
        "pos": "介词",
        "spell": "to"
      },
      {
        "id": "s1-today",
        "en": "today",
        "zh": "今天",
        "pos": "副词 / 名词",
        "spell": "today"
      },
      {
        "id": "s1-tomato",
        "en": "tomato",
        "zh": "西红柿",
        "pos": "名词",
        "spell": "tomato"
      },
      {
        "id": "s1-too",
        "en": "too",
        "zh": "也；太",
        "pos": "副词",
        "spell": "too"
      },
      {
        "id": "s1-tooth-teeth",
        "en": "tooth/teeth",
        "zh": "牙齿",
        "pos": "名词",
        "spell": "tooth"
      },
      {
        "id": "s1-toy",
        "en": "toy",
        "zh": "玩具",
        "pos": "名词",
        "spell": "toy"
      },
      {
        "id": "s1-train",
        "en": "train",
        "zh": "火车",
        "pos": "名词",
        "spell": "train"
      },
      {
        "id": "s1-tree",
        "en": "tree",
        "zh": "树",
        "pos": "名词",
        "spell": "tree"
      },
      {
        "id": "s1-trousers",
        "en": "trousers",
        "zh": "裤子",
        "pos": "名词",
        "spell": "trousers"
      },
      {
        "id": "s1-truck-uk-lorry",
        "en": "truck (UK lorry)",
        "zh": "卡车",
        "pos": "名词",
        "spell": "truck"
      },
      {
        "id": "s1-try",
        "en": "try",
        "zh": "尝试",
        "pos": "名词 / 动词",
        "spell": "try"
      },
      {
        "id": "s1-t-shirt",
        "en": "T-shirt",
        "zh": "T恤",
        "pos": "名词",
        "spell": "T-shirt"
      },
      {
        "id": "s1-tv-television",
        "en": "TV/television",
        "zh": "电视",
        "pos": "名词",
        "spell": "TV"
      },
      {
        "id": "s1-ugly",
        "en": "ugly",
        "zh": "丑的",
        "pos": "形容词",
        "spell": "ugly"
      },
      {
        "id": "s1-under",
        "en": "under",
        "zh": "在……下面",
        "pos": "介词",
        "spell": "under"
      },
      {
        "id": "s1-understand",
        "en": "understand",
        "zh": "理解",
        "pos": "动词",
        "spell": "understand"
      },
      {
        "id": "s1-us",
        "en": "us",
        "zh": "我们（宾格）",
        "pos": "代词",
        "spell": "us"
      },
      {
        "id": "s1-very",
        "en": "very",
        "zh": "非常",
        "pos": "副词",
        "spell": "very"
      },
      {
        "id": "s1-walk",
        "en": "walk",
        "zh": "走；散步",
        "pos": "动词",
        "spell": "walk"
      },
      {
        "id": "s1-wall",
        "en": "wall",
        "zh": "墙",
        "pos": "名词",
        "spell": "wall"
      },
      {
        "id": "s1-want",
        "en": "want",
        "zh": "想要",
        "pos": "动词",
        "spell": "want"
      },
      {
        "id": "s1-watch",
        "en": "watch",
        "zh": "观看；手表",
        "pos": "名词 / 动词",
        "spell": "watch"
      },
      {
        "id": "s1-water",
        "en": "water",
        "zh": "水",
        "pos": "名词",
        "spell": "water"
      },
      {
        "id": "s1-we",
        "en": "we",
        "zh": "我们",
        "pos": "代词",
        "spell": "we"
      },
      {
        "id": "s1-wear",
        "en": "wear",
        "zh": "穿；戴",
        "pos": "动词",
        "spell": "wear"
      },
      {
        "id": "s1-weather",
        "en": "weather",
        "zh": "天气",
        "pos": "名词",
        "spell": "weather"
      },
      {
        "id": "s1-well",
        "en": "well",
        "zh": "好地；健康的",
        "pos": "话语标记",
        "spell": "well"
      },
      {
        "id": "s1-well-done",
        "en": "well done",
        "zh": "做得好",
        "pos": "话语标记",
        "spell": "well done"
      },
      {
        "id": "s1-what",
        "en": "what",
        "zh": "什么",
        "pos": "疑问词",
        "spell": "what"
      },
      {
        "id": "s1-where",
        "en": "where",
        "zh": "哪里",
        "pos": "疑问词",
        "spell": "where"
      },
      {
        "id": "s1-which",
        "en": "which",
        "zh": "哪一个",
        "pos": "疑问词",
        "spell": "which"
      },
      {
        "id": "s1-white",
        "en": "white",
        "zh": "白色的",
        "pos": "形容词",
        "spell": "white"
      },
      {
        "id": "s1-who",
        "en": "who",
        "zh": "谁",
        "pos": "疑问词",
        "spell": "who"
      },
      {
        "id": "s1-whose",
        "en": "whose",
        "zh": "谁的",
        "pos": "疑问词",
        "spell": "whose"
      },
      {
        "id": "s1-window",
        "en": "window",
        "zh": "窗户",
        "pos": "名词",
        "spell": "window"
      },
      {
        "id": "s1-with",
        "en": "with",
        "zh": "和；用",
        "pos": "介词",
        "spell": "with"
      },
      {
        "id": "s1-wizard",
        "en": "wizard",
        "zh": "男巫师",
        "pos": "名词",
        "spell": "wizard"
      },
      {
        "id": "s1-woman-women",
        "en": "woman/women",
        "zh": "女人",
        "pos": "名词",
        "spell": "woman"
      },
      {
        "id": "s1-word",
        "en": "word",
        "zh": "单词",
        "pos": "名词",
        "spell": "word"
      },
      {
        "id": "s1-would-like",
        "en": "would like",
        "zh": "想要",
        "pos": "动词",
        "spell": "would like"
      },
      {
        "id": "s1-wow",
        "en": "wow",
        "zh": "哇",
        "pos": "感叹",
        "spell": "wow"
      },
      {
        "id": "s1-write",
        "en": "write",
        "zh": "写",
        "pos": "动词",
        "spell": "write"
      },
      {
        "id": "s1-year",
        "en": "year",
        "zh": "年",
        "pos": "名词",
        "spell": "year"
      },
      {
        "id": "s1-yellow",
        "en": "yellow",
        "zh": "黄色的",
        "pos": "形容词",
        "spell": "yellow"
      },
      {
        "id": "s1-yes",
        "en": "yes",
        "zh": "是的",
        "pos": "副词",
        "spell": "yes"
      },
      {
        "id": "s1-you",
        "en": "you",
        "zh": "你；你们",
        "pos": "代词",
        "spell": "you"
      },
      {
        "id": "s1-young",
        "en": "young",
        "zh": "年轻的",
        "pos": "形容词",
        "spell": "young"
      },
      {
        "id": "s1-your",
        "en": "your",
        "zh": "你的",
        "pos": "形容词",
        "spell": "your"
      },
      {
        "id": "s1-yours",
        "en": "yours",
        "zh": "你的（名词性）",
        "pos": "代词",
        "spell": "yours"
      },
      {
        "id": "s1-zebra",
        "en": "zebra",
        "zh": "斑马",
        "pos": "名词",
        "spell": "zebra"
      },
      {
        "id": "s1-zoo",
        "en": "zoo",
        "zh": "动物园",
        "pos": "名词",
        "spell": "zoo"
      },
      {
        "id": "s1-biscuit-us-cookie",
        "en": "biscuit (US cookie)",
        "zh": "饼干",
        "pos": "名词",
        "spell": "biscuit"
      },
      {
        "id": "s1-candy-uk-sweet-s",
        "en": "candy (UK sweet(s))",
        "zh": "糖果",
        "pos": "名词",
        "spell": "candy)"
      },
      {
        "id": "s1-colour-us-color",
        "en": "colour (US color)",
        "zh": "颜色；涂色",
        "pos": "名词 / 动词",
        "spell": "colour"
      },
      {
        "id": "s1-keyboard-computer",
        "en": "keyboard (computer)",
        "zh": "键盘",
        "pos": "名词",
        "spell": "keyboard"
      },
      {
        "id": "s1-letter-as-in-alphabet",
        "en": "letter (as in alphabet)",
        "zh": "字母",
        "pos": "名词",
        "spell": "letter"
      },
      {
        "id": "s1-take-a-photo-picture",
        "en": "take a photo/picture",
        "zh": "拍照",
        "pos": "动词",
        "spell": "take a photo"
      },
      {
        "id": "little-soccer-uk-football-",
        "en": "soccer (UK football)",
        "zh": "足球",
        "pos": "名词",
        "spell": "soccer"
      }
    ],
    "hippo1": [
      {
        "id": "s2-above",
        "en": "above",
        "zh": "在……上面",
        "pos": "介词",
        "spell": "above"
      },
      {
        "id": "s2-address",
        "en": "address",
        "zh": "地址",
        "pos": "名词",
        "spell": "address"
      },
      {
        "id": "s2-afraid",
        "en": "afraid",
        "zh": "害怕的",
        "pos": "形容词",
        "spell": "afraid"
      },
      {
        "id": "s2-after",
        "en": "after",
        "zh": "在……之后",
        "pos": "介词",
        "spell": "after"
      },
      {
        "id": "s2-age",
        "en": "age",
        "zh": "年龄",
        "pos": "名词",
        "spell": "age"
      },
      {
        "id": "s2-airport",
        "en": "airport",
        "zh": "机场",
        "pos": "名词",
        "spell": "airport"
      },
      {
        "id": "s2-all",
        "en": "all",
        "zh": "全部",
        "pos": "形容词 / 副词 / 限定词 / 代词",
        "spell": "all"
      },
      {
        "id": "s2-all-right",
        "en": "all right",
        "zh": "好的；没关系",
        "pos": "形容词 / 副词",
        "spell": "all right"
      },
      {
        "id": "s2-along",
        "en": "along",
        "zh": "沿着",
        "pos": "介词",
        "spell": "along"
      },
      {
        "id": "s2-always",
        "en": "always",
        "zh": "总是",
        "pos": "副词",
        "spell": "always"
      },
      {
        "id": "s2-another",
        "en": "another",
        "zh": "另一个",
        "pos": "限定词 / 代词",
        "spell": "another"
      },
      {
        "id": "s2-any",
        "en": "any",
        "zh": "任何；一些",
        "pos": "限定词 / 代词",
        "spell": "any"
      },
      {
        "id": "s2-app",
        "en": "app",
        "zh": "应用程序",
        "pos": "名词",
        "spell": "app"
      },
      {
        "id": "s2-april",
        "en": "April",
        "zh": "四月",
        "pos": "名词",
        "spell": "April"
      },
      {
        "id": "s2-around",
        "en": "around",
        "zh": "在周围",
        "pos": "介词",
        "spell": "around"
      },
      {
        "id": "s2-asleep",
        "en": "asleep",
        "zh": "睡着的",
        "pos": "形容词",
        "spell": "asleep"
      },
      {
        "id": "s2-astronaut",
        "en": "astronaut",
        "zh": "宇航员",
        "pos": "名词",
        "spell": "astronaut"
      },
      {
        "id": "s2-august",
        "en": "August",
        "zh": "八月",
        "pos": "名词",
        "spell": "August"
      },
      {
        "id": "s2-aunt",
        "en": "aunt",
        "zh": "阿姨；姑妈",
        "pos": "名词",
        "spell": "aunt"
      },
      {
        "id": "s2-autumn-us-fall",
        "en": "autumn (US fall)",
        "zh": "秋天",
        "pos": "名词",
        "spell": "autumn"
      },
      {
        "id": "s2-awake",
        "en": "awake",
        "zh": "醒着的",
        "pos": "形容词",
        "spell": "awake"
      },
      {
        "id": "s2-back",
        "en": "back",
        "zh": "后面；回来",
        "pos": "形容词 / 副词 / 名词",
        "spell": "back"
      },
      {
        "id": "s2-bad",
        "en": "bad",
        "zh": "坏的",
        "pos": "形容词",
        "spell": "bad"
      },
      {
        "id": "s2-badly",
        "en": "badly",
        "zh": "糟糕地",
        "pos": "副词",
        "spell": "badly"
      },
      {
        "id": "s2-balcony",
        "en": "balcony",
        "zh": "阳台",
        "pos": "名词",
        "spell": "balcony"
      },
      {
        "id": "s2-band-music",
        "en": "band (music)",
        "zh": "乐队",
        "pos": "名词",
        "spell": "band"
      },
      {
        "id": "s2-basement",
        "en": "basement",
        "zh": "地下室",
        "pos": "名词",
        "spell": "basement"
      },
      {
        "id": "s2-bat",
        "en": "bat",
        "zh": "球拍；蝙蝠",
        "pos": "名词",
        "spell": "bat"
      },
      {
        "id": "s2-be-called",
        "en": "be called",
        "zh": "叫作",
        "pos": "动词",
        "spell": "be called"
      },
      {
        "id": "s2-bean",
        "en": "bean",
        "zh": "豆子",
        "pos": "名词",
        "spell": "bean"
      },
      {
        "id": "s2-beard",
        "en": "beard",
        "zh": "胡子",
        "pos": "名词",
        "spell": "beard"
      },
      {
        "id": "s2-because",
        "en": "because",
        "zh": "因为",
        "pos": "连词",
        "spell": "because"
      },
      {
        "id": "s2-before",
        "en": "before",
        "zh": "在……之前",
        "pos": "介词",
        "spell": "before"
      },
      {
        "id": "s2-below",
        "en": "below",
        "zh": "在……下面",
        "pos": "介词",
        "spell": "below"
      },
      {
        "id": "s2-best",
        "en": "best",
        "zh": "最好的",
        "pos": "形容词 / 副词",
        "spell": "best"
      },
      {
        "id": "s2-better",
        "en": "better",
        "zh": "更好的",
        "pos": "形容词 / 副词",
        "spell": "better"
      },
      {
        "id": "s2-blond-e",
        "en": "blond(e)",
        "zh": "金发的",
        "pos": "形容词",
        "spell": "blond"
      },
      {
        "id": "s2-boring",
        "en": "boring",
        "zh": "无聊的",
        "pos": "形容词",
        "spell": "boring"
      },
      {
        "id": "s2-bottom",
        "en": "bottom",
        "zh": "底部",
        "pos": "形容词 / 名词",
        "spell": "bottom"
      },
      {
        "id": "s2-bowl",
        "en": "bowl",
        "zh": "碗",
        "pos": "名词",
        "spell": "bowl"
      },
      {
        "id": "s2-brave",
        "en": "brave",
        "zh": "勇敢的",
        "pos": "形容词",
        "spell": "brave"
      },
      {
        "id": "s2-break",
        "en": "break",
        "zh": "打破；休息",
        "pos": "名词",
        "spell": "break"
      },
      {
        "id": "s2-brilliant",
        "en": "brilliant",
        "zh": "极好的",
        "pos": "形容词 / 感叹",
        "spell": "brilliant"
      },
      {
        "id": "s2-bring",
        "en": "bring",
        "zh": "带来",
        "pos": "动词",
        "spell": "bring"
      },
      {
        "id": "s2-build",
        "en": "build",
        "zh": "建造",
        "pos": "动词",
        "spell": "build"
      },
      {
        "id": "s2-building",
        "en": "building",
        "zh": "建筑物",
        "pos": "名词",
        "spell": "building"
      },
      {
        "id": "s2-bus-station",
        "en": "bus station",
        "zh": "公共汽车站",
        "pos": "名词",
        "spell": "bus station"
      },
      {
        "id": "s2-bus-stop",
        "en": "bus stop",
        "zh": "公交车站",
        "pos": "名词",
        "spell": "bus stop"
      },
      {
        "id": "s2-busy",
        "en": "busy",
        "zh": "忙碌的",
        "pos": "形容词",
        "spell": "busy"
      },
      {
        "id": "s2-buy",
        "en": "buy",
        "zh": "买",
        "pos": "动词",
        "spell": "buy"
      },
      {
        "id": "s2-by",
        "en": "by",
        "zh": "乘（交通工具）；被",
        "pos": "介词",
        "spell": "by"
      },
      {
        "id": "s2-caf",
        "en": "café",
        "zh": "咖啡馆",
        "pos": "名词",
        "spell": "café"
      },
      {
        "id": "s2-cage",
        "en": "cage",
        "zh": "笼子",
        "pos": "名词",
        "spell": "cage"
      },
      {
        "id": "s2-call",
        "en": "call",
        "zh": "打电话；称呼",
        "pos": "动词",
        "spell": "call"
      },
      {
        "id": "s2-car-park",
        "en": "car park",
        "zh": "停车场",
        "pos": "名词",
        "spell": "car park"
      },
      {
        "id": "s2-careful",
        "en": "careful",
        "zh": "小心的",
        "pos": "形容词",
        "spell": "careful"
      },
      {
        "id": "s2-carefully",
        "en": "carefully",
        "zh": "小心地",
        "pos": "副词",
        "spell": "carefully"
      },
      {
        "id": "s2-carry",
        "en": "carry",
        "zh": "搬运",
        "pos": "动词",
        "spell": "carry"
      },
      {
        "id": "s2-catch-e-g-a-bus",
        "en": "catch (e.g. a bus)",
        "zh": "赶上（车）",
        "pos": "动词",
        "spell": "catch"
      },
      {
        "id": "s2-cd",
        "en": "CD",
        "zh": "光盘",
        "pos": "名词",
        "spell": "CD"
      },
      {
        "id": "s2-centre-us-center",
        "en": "centre (US center)",
        "zh": "中心",
        "pos": "名词",
        "spell": "centre"
      },
      {
        "id": "s2-change",
        "en": "change",
        "zh": "改变；零钱",
        "pos": "动词",
        "spell": "change"
      },
      {
        "id": "s2-cheap",
        "en": "cheap",
        "zh": "便宜的",
        "pos": "形容词",
        "spell": "cheap"
      },
      {
        "id": "s2-cinema",
        "en": "cinema",
        "zh": "电影院",
        "pos": "名词",
        "spell": "cinema"
      },
      {
        "id": "s2-circle",
        "en": "circle",
        "zh": "圆形",
        "pos": "名词",
        "spell": "circle"
      },
      {
        "id": "s2-circus",
        "en": "circus",
        "zh": "马戏团",
        "pos": "名词",
        "spell": "circus"
      },
      {
        "id": "s2-city",
        "en": "city",
        "zh": "城市",
        "pos": "名词",
        "spell": "city"
      },
      {
        "id": "s2-clever",
        "en": "clever",
        "zh": "聪明的",
        "pos": "形容词",
        "spell": "clever"
      },
      {
        "id": "s2-climb",
        "en": "climb",
        "zh": "爬",
        "pos": "动词",
        "spell": "climb"
      },
      {
        "id": "s2-cloudy",
        "en": "cloudy",
        "zh": "多云的",
        "pos": "形容词",
        "spell": "cloudy"
      },
      {
        "id": "s2-clown",
        "en": "clown",
        "zh": "小丑",
        "pos": "名词",
        "spell": "clown"
      },
      {
        "id": "s2-coat",
        "en": "coat",
        "zh": "外套",
        "pos": "名词",
        "spell": "coat"
      },
      {
        "id": "s2-coffee",
        "en": "coffee",
        "zh": "咖啡",
        "pos": "名词",
        "spell": "coffee"
      },
      {
        "id": "s2-cold",
        "en": "cold",
        "zh": "冷的；感冒",
        "pos": "形容词 / 名词",
        "spell": "cold"
      },
      {
        "id": "s2-come-on",
        "en": "come on",
        "zh": "加油；来吧",
        "pos": "感叹",
        "spell": "come on"
      },
      {
        "id": "s2-comic-book",
        "en": "comic book",
        "zh": "漫画书",
        "pos": "名词",
        "spell": "comic book"
      },
      {
        "id": "s2-comic",
        "en": "comic",
        "zh": "漫画",
        "pos": "名词",
        "spell": "comic"
      },
      {
        "id": "s2-cook",
        "en": "cook",
        "zh": "烹饪；厨师",
        "pos": "名词 / 动词",
        "spell": "cook"
      },
      {
        "id": "s2-country",
        "en": "country",
        "zh": "国家；乡下",
        "pos": "名词",
        "spell": "country"
      },
      {
        "id": "s2-countryside",
        "en": "countryside",
        "zh": "乡下",
        "pos": "名词",
        "spell": "countryside"
      },
      {
        "id": "s2-cry",
        "en": "cry",
        "zh": "哭",
        "pos": "动词",
        "spell": "cry"
      },
      {
        "id": "s2-cup",
        "en": "cup",
        "zh": "杯子",
        "pos": "名词",
        "spell": "cup"
      },
      {
        "id": "s2-curly",
        "en": "curly",
        "zh": "卷曲的",
        "pos": "形容词",
        "spell": "curly"
      },
      {
        "id": "s2-dance",
        "en": "dance",
        "zh": "跳舞",
        "pos": "名词 / 动词",
        "spell": "dance"
      },
      {
        "id": "s2-dangerous",
        "en": "dangerous",
        "zh": "危险的",
        "pos": "形容词",
        "spell": "dangerous"
      },
      {
        "id": "s2-daughter",
        "en": "daughter",
        "zh": "女儿",
        "pos": "名词",
        "spell": "daughter"
      },
      {
        "id": "s2-december",
        "en": "December",
        "zh": "十二月",
        "pos": "名词",
        "spell": "December"
      },
      {
        "id": "s2-dentist",
        "en": "dentist",
        "zh": "牙医",
        "pos": "名词",
        "spell": "dentist"
      },
      {
        "id": "s2-dessert",
        "en": "dessert",
        "zh": "甜点",
        "pos": "名词",
        "spell": "dessert"
      },
      {
        "id": "s2-dictionary",
        "en": "dictionary",
        "zh": "词典",
        "pos": "名词",
        "spell": "dictionary"
      },
      {
        "id": "s2-difference",
        "en": "difference",
        "zh": "区别",
        "pos": "名词",
        "spell": "difference"
      },
      {
        "id": "s2-different",
        "en": "different",
        "zh": "不同的",
        "pos": "形容词",
        "spell": "different"
      },
      {
        "id": "s2-difficult",
        "en": "difficult",
        "zh": "困难的",
        "pos": "形容词",
        "spell": "difficult"
      },
      {
        "id": "s2-doctor",
        "en": "doctor",
        "zh": "医生",
        "pos": "名词",
        "spell": "doctor"
      },
      {
        "id": "s2-dolphin",
        "en": "dolphin",
        "zh": "海豚",
        "pos": "名词",
        "spell": "dolphin"
      },
      {
        "id": "s2-down",
        "en": "down",
        "zh": "向下",
        "pos": "副词 / 介词",
        "spell": "down"
      },
      {
        "id": "s2-downstairs",
        "en": "downstairs",
        "zh": "在楼下",
        "pos": "副词 / 名词",
        "spell": "downstairs"
      },
      {
        "id": "s2-dream",
        "en": "dream",
        "zh": "梦；做梦",
        "pos": "名词 / 动词",
        "spell": "dream"
      },
      {
        "id": "s2-dress-up",
        "en": "dress up",
        "zh": "装扮",
        "pos": "动词",
        "spell": "dress up"
      },
      {
        "id": "s2-drive",
        "en": "drive",
        "zh": "开车",
        "pos": "名词",
        "spell": "drive"
      },
      {
        "id": "s2-driver",
        "en": "driver",
        "zh": "司机",
        "pos": "名词",
        "spell": "driver"
      },
      {
        "id": "s2-drop",
        "en": "drop",
        "zh": "掉下",
        "pos": "动词",
        "spell": "drop"
      },
      {
        "id": "s2-dry",
        "en": "dry",
        "zh": "干的；擦干",
        "pos": "形容词 / 动词",
        "spell": "dry"
      },
      {
        "id": "s2-dvd",
        "en": "DVD",
        "zh": "数字影碟",
        "pos": "名词",
        "spell": "DVD"
      },
      {
        "id": "s2-earache",
        "en": "earache",
        "zh": "耳痛",
        "pos": "名词",
        "spell": "earache"
      },
      {
        "id": "s2-easy",
        "en": "easy",
        "zh": "容易的",
        "pos": "形容词",
        "spell": "easy"
      },
      {
        "id": "s2-e-book",
        "en": "e-book",
        "zh": "电子书",
        "pos": "名词",
        "spell": "e-book"
      },
      {
        "id": "s2-elevator-uk-lift",
        "en": "elevator (UK lift)",
        "zh": "电梯",
        "pos": "名词",
        "spell": "elevator"
      },
      {
        "id": "s2-email",
        "en": "email",
        "zh": "电子邮件",
        "pos": "名词 / 动词",
        "spell": "email"
      },
      {
        "id": "s2-every",
        "en": "every",
        "zh": "每个",
        "pos": "限定词",
        "spell": "every"
      },
      {
        "id": "s2-everyone",
        "en": "everyone",
        "zh": "每个人",
        "pos": "代词",
        "spell": "everyone"
      },
      {
        "id": "s2-everything",
        "en": "everything",
        "zh": "一切",
        "pos": "代词",
        "spell": "everything"
      },
      {
        "id": "s2-exciting",
        "en": "exciting",
        "zh": "令人兴奋的",
        "pos": "形容词",
        "spell": "exciting"
      },
      {
        "id": "s2-excuse-me",
        "en": "excuse me",
        "zh": "对不起；劳驾",
        "pos": "话语标记",
        "spell": "excuse me"
      },
      {
        "id": "s2-fair",
        "en": "fair",
        "zh": "公平的；集市",
        "pos": "形容词",
        "spell": "fair"
      },
      {
        "id": "s2-farmer",
        "en": "farmer",
        "zh": "农民",
        "pos": "名词",
        "spell": "farmer"
      },
      {
        "id": "s2-fat",
        "en": "fat",
        "zh": "胖的",
        "pos": "形容词",
        "spell": "fat"
      },
      {
        "id": "s2-february",
        "en": "February",
        "zh": "二月",
        "pos": "名词",
        "spell": "February"
      },
      {
        "id": "s2-feed",
        "en": "feed",
        "zh": "喂",
        "pos": "动词",
        "spell": "feed"
      },
      {
        "id": "s2-field",
        "en": "field",
        "zh": "田地；场地",
        "pos": "名词",
        "spell": "field"
      },
      {
        "id": "s2-film-us-movie",
        "en": "film (US movie)",
        "zh": "电影",
        "pos": "名词 / 动词",
        "spell": "film"
      },
      {
        "id": "s2-film-us-movie-star",
        "en": "film (US movie) star",
        "zh": "电影明星",
        "pos": "名词",
        "spell": "film star"
      },
      {
        "id": "s2-fine",
        "en": "fine",
        "zh": "好的",
        "pos": "形容词 / 感叹",
        "spell": "fine"
      },
      {
        "id": "s2-first",
        "en": "first",
        "zh": "第一",
        "pos": "形容词 / 副词",
        "spell": "first"
      },
      {
        "id": "s2-fish",
        "en": "fish",
        "zh": "鱼；钓鱼",
        "pos": "动词",
        "spell": "fish"
      },
      {
        "id": "s2-fix",
        "en": "fix",
        "zh": "修理",
        "pos": "动词",
        "spell": "fix"
      },
      {
        "id": "s2-flat",
        "en": "flat",
        "zh": "平的；平坦的",
        "pos": "形容词",
        "spell": "flat"
      },
      {
        "id": "s2-floor",
        "en": "floor",
        "zh": "地板；楼层",
        "pos": "名词",
        "spell": "floor"
      },
      {
        "id": "s2-fly",
        "en": "fly",
        "zh": "飞；苍蝇",
        "pos": "名词",
        "spell": "fly"
      },
      {
        "id": "s2-forest",
        "en": "forest",
        "zh": "森林",
        "pos": "名词",
        "spell": "forest"
      },
      {
        "id": "s2-friday",
        "en": "Friday",
        "zh": "星期五",
        "pos": "名词",
        "spell": "Friday"
      },
      {
        "id": "s2-frightened",
        "en": "frightened",
        "zh": "害怕的",
        "pos": "形容词",
        "spell": "frightened"
      },
      {
        "id": "s2-funfair",
        "en": "funfair",
        "zh": "游乐场",
        "pos": "名词",
        "spell": "funfair"
      },
      {
        "id": "s2-geography",
        "en": "geography",
        "zh": "地理",
        "pos": "名词",
        "spell": "geography"
      },
      {
        "id": "s2-get-dressed",
        "en": "get dressed",
        "zh": "穿衣服",
        "pos": "动词",
        "spell": "get dressed"
      },
      {
        "id": "s2-get-off",
        "en": "get off",
        "zh": "下车",
        "pos": "动词",
        "spell": "get off"
      },
      {
        "id": "s2-get-on",
        "en": "get on",
        "zh": "上车",
        "pos": "动词",
        "spell": "get on"
      },
      {
        "id": "s2-get-undressed",
        "en": "get undressed",
        "zh": "脱衣服",
        "pos": "动词",
        "spell": "get undressed"
      },
      {
        "id": "s2-get-up",
        "en": "get up",
        "zh": "起床",
        "pos": "动词",
        "spell": "get up"
      },
      {
        "id": "s2-glass",
        "en": "glass",
        "zh": "玻璃杯；玻璃",
        "pos": "名词",
        "spell": "glass"
      },
      {
        "id": "s2-go-shopping",
        "en": "go shopping",
        "zh": "去购物",
        "pos": "动词",
        "spell": "go shopping"
      },
      {
        "id": "s2-goal",
        "en": "goal",
        "zh": "进球；目标",
        "pos": "名词",
        "spell": "goal"
      },
      {
        "id": "s2-granddad",
        "en": "granddad",
        "zh": "爷爷；外公",
        "pos": "名词",
        "spell": "granddad"
      },
      {
        "id": "s2-granddaughter",
        "en": "granddaughter",
        "zh": "孙女；外孙女",
        "pos": "名词",
        "spell": "granddaughter"
      },
      {
        "id": "s2-grandparent",
        "en": "grandparent",
        "zh": "祖父母；外祖父母",
        "pos": "名词",
        "spell": "grandparent"
      },
      {
        "id": "s2-grandson",
        "en": "grandson",
        "zh": "孙子；外孙",
        "pos": "名词",
        "spell": "grandson"
      },
      {
        "id": "s2-grass",
        "en": "grass",
        "zh": "草",
        "pos": "名词",
        "spell": "grass"
      },
      {
        "id": "s2-ground",
        "en": "ground",
        "zh": "地面",
        "pos": "名词",
        "spell": "ground"
      },
      {
        "id": "s2-grow-up",
        "en": "grow up",
        "zh": "长大",
        "pos": "动词",
        "spell": "grow up"
      },
      {
        "id": "s2-grow",
        "en": "grow",
        "zh": "生长",
        "pos": "动词",
        "spell": "grow"
      },
      {
        "id": "s2-grown-up",
        "en": "grown-up",
        "zh": "成年人",
        "pos": "名词",
        "spell": "grown-up"
      },
      {
        "id": "s2-ham",
        "en": "ham",
        "zh": "火腿",
        "pos": "名词",
        "spell": "ham"
      },
      {
        "id": "s2-hamster",
        "en": "hamster",
        "zh": "仓鼠",
        "pos": "名词",
        "spell": "hamster"
      },
      {
        "id": "s2-have-got-to",
        "en": "have (got) to",
        "zh": "必须",
        "pos": "动词",
        "spell": "have to"
      },
      {
        "id": "s2-headache",
        "en": "headache",
        "zh": "头痛",
        "pos": "名词",
        "spell": "headache"
      },
      {
        "id": "s2-helmet",
        "en": "helmet",
        "zh": "头盔",
        "pos": "名词",
        "spell": "helmet"
      },
      {
        "id": "s2-help",
        "en": "help",
        "zh": "帮助",
        "pos": "动词",
        "spell": "help"
      },
      {
        "id": "s2-holiday",
        "en": "holiday",
        "zh": "假期",
        "pos": "名词",
        "spell": "holiday"
      },
      {
        "id": "s2-homework",
        "en": "homework",
        "zh": "作业",
        "pos": "名词",
        "spell": "homework"
      },
      {
        "id": "s2-honey",
        "en": "honey",
        "zh": "蜂蜜",
        "pos": "名词",
        "spell": "honey"
      },
      {
        "id": "s2-hop",
        "en": "hop",
        "zh": "单脚跳",
        "pos": "动词",
        "spell": "hop"
      },
      {
        "id": "s2-hospital",
        "en": "hospital",
        "zh": "医院",
        "pos": "名词",
        "spell": "hospital"
      },
      {
        "id": "s2-hot",
        "en": "hot",
        "zh": "热的",
        "pos": "形容词",
        "spell": "hot"
      },
      {
        "id": "s2-hotel",
        "en": "hotel",
        "zh": "旅馆",
        "pos": "名词",
        "spell": "hotel"
      },
      {
        "id": "s2-how",
        "en": "how",
        "zh": "怎样",
        "pos": "副词",
        "spell": "how"
      },
      {
        "id": "s2-how-much",
        "en": "how much",
        "zh": "多少（不可数）",
        "pos": "副词 / 疑问词",
        "spell": "how much"
      },
      {
        "id": "s2-how-often",
        "en": "how often",
        "zh": "多久一次",
        "pos": "副词 / 疑问词",
        "spell": "how often"
      },
      {
        "id": "s2-huge",
        "en": "huge",
        "zh": "巨大的",
        "pos": "形容词",
        "spell": "huge"
      },
      {
        "id": "s2-hundred",
        "en": "hundred",
        "zh": "百",
        "pos": "名词",
        "spell": "hundred"
      },
      {
        "id": "s2-hungry",
        "en": "hungry",
        "zh": "饿的",
        "pos": "形容词",
        "spell": "hungry"
      },
      {
        "id": "s2-hurt",
        "en": "hurt",
        "zh": "受伤；疼痛",
        "pos": "动词",
        "spell": "hurt"
      },
      {
        "id": "s2-ice",
        "en": "ice",
        "zh": "冰",
        "pos": "名词",
        "spell": "ice"
      },
      {
        "id": "s2-ice-skates",
        "en": "ice skates",
        "zh": "溜冰鞋",
        "pos": "名词",
        "spell": "ice skates"
      },
      {
        "id": "s2-ice-skating",
        "en": "ice skating",
        "zh": "溜冰",
        "pos": "名词",
        "spell": "ice skating"
      },
      {
        "id": "s2-idea",
        "en": "idea",
        "zh": "想法",
        "pos": "名词",
        "spell": "idea"
      },
      {
        "id": "s2-ill",
        "en": "ill",
        "zh": "生病的",
        "pos": "形容词",
        "spell": "ill"
      },
      {
        "id": "s2-inside",
        "en": "inside",
        "zh": "在里面",
        "pos": "副词 / 名词 / 介词",
        "spell": "inside"
      },
      {
        "id": "s2-interesting",
        "en": "interesting",
        "zh": "有趣的",
        "pos": "形容词",
        "spell": "interesting"
      },
      {
        "id": "s2-internet",
        "en": "internet",
        "zh": "互联网",
        "pos": "名词",
        "spell": "internet"
      },
      {
        "id": "s2-into",
        "en": "into",
        "zh": "进入",
        "pos": "介词",
        "spell": "into"
      },
      {
        "id": "s2-invite",
        "en": "invite",
        "zh": "邀请",
        "pos": "动词",
        "spell": "invite"
      },
      {
        "id": "s2-island",
        "en": "island",
        "zh": "岛",
        "pos": "名词",
        "spell": "island"
      },
      {
        "id": "s2-january",
        "en": "January",
        "zh": "一月",
        "pos": "名词",
        "spell": "January"
      },
      {
        "id": "s2-jam",
        "en": "jam",
        "zh": "果酱",
        "pos": "名词",
        "spell": "jam"
      },
      {
        "id": "s2-july",
        "en": "July",
        "zh": "七月",
        "pos": "名词",
        "spell": "July"
      },
      {
        "id": "s2-june",
        "en": "June",
        "zh": "六月",
        "pos": "名词",
        "spell": "June"
      },
      {
        "id": "s2-jungle",
        "en": "jungle",
        "zh": "丛林",
        "pos": "名词",
        "spell": "jungle"
      },
      {
        "id": "s2-kangaroo",
        "en": "kangaroo",
        "zh": "袋鼠",
        "pos": "名词",
        "spell": "kangaroo"
      },
      {
        "id": "s2-kick",
        "en": "kick",
        "zh": "踢",
        "pos": "名词",
        "spell": "kick"
      },
      {
        "id": "s2-kind",
        "en": "kind",
        "zh": "友善的；种类",
        "pos": "名词",
        "spell": "kind"
      },
      {
        "id": "s2-kitten",
        "en": "kitten",
        "zh": "小猫",
        "pos": "名词",
        "spell": "kitten"
      },
      {
        "id": "s2-lake",
        "en": "lake",
        "zh": "湖",
        "pos": "名词",
        "spell": "lake"
      },
      {
        "id": "s2-language",
        "en": "language",
        "zh": "语言",
        "pos": "名词",
        "spell": "language"
      },
      {
        "id": "s2-laptop",
        "en": "laptop",
        "zh": "笔记本电脑",
        "pos": "名词",
        "spell": "laptop"
      },
      {
        "id": "s2-last",
        "en": "last",
        "zh": "上一个；最后的",
        "pos": "形容词 / 副词",
        "spell": "last"
      },
      {
        "id": "s2-laugh",
        "en": "laugh",
        "zh": "笑",
        "pos": "名词 / 动词",
        "spell": "laugh"
      },
      {
        "id": "s2-lift-us-elevator",
        "en": "lift (US elevator)",
        "zh": "电梯",
        "pos": "名词",
        "spell": "lift"
      },
      {
        "id": "s2-little",
        "en": "little",
        "zh": "小的；少的",
        "pos": "形容词",
        "spell": "little"
      },
      {
        "id": "s2-look-for",
        "en": "look for",
        "zh": "寻找",
        "pos": "动词",
        "spell": "look for"
      },
      {
        "id": "s2-lose",
        "en": "lose",
        "zh": "丢失",
        "pos": "动词",
        "spell": "lose"
      },
      {
        "id": "s2-loud",
        "en": "loud",
        "zh": "大声的",
        "pos": "形容词",
        "spell": "loud"
      },
      {
        "id": "s2-loudly",
        "en": "loudly",
        "zh": "大声地",
        "pos": "副词",
        "spell": "loudly"
      },
      {
        "id": "s2-machine",
        "en": "machine",
        "zh": "机器",
        "pos": "名词",
        "spell": "machine"
      },
      {
        "id": "s2-map",
        "en": "map",
        "zh": "地图",
        "pos": "名词",
        "spell": "map"
      },
      {
        "id": "s2-march",
        "en": "March",
        "zh": "三月",
        "pos": "名词",
        "spell": "March"
      },
      {
        "id": "s2-market",
        "en": "market",
        "zh": "市场",
        "pos": "名词",
        "spell": "market"
      },
      {
        "id": "s2-maths-us-math",
        "en": "maths (US math)",
        "zh": "数学",
        "pos": "名词",
        "spell": "maths"
      },
      {
        "id": "s2-matter",
        "en": "matter",
        "zh": "要紧；事情",
        "pos": "名词",
        "spell": "matter"
      },
      {
        "id": "s2-may",
        "en": "May",
        "zh": "五月；可以",
        "pos": "名词",
        "spell": "May"
      },
      {
        "id": "s2-maybe",
        "en": "maybe",
        "zh": "也许",
        "pos": "副词",
        "spell": "maybe"
      },
      {
        "id": "s2-mean",
        "en": "mean",
        "zh": "意思是",
        "pos": "动词",
        "spell": "mean"
      },
      {
        "id": "s2-message",
        "en": "message",
        "zh": "消息",
        "pos": "名词",
        "spell": "message"
      },
      {
        "id": "s2-milkshake",
        "en": "milkshake",
        "zh": "奶昔",
        "pos": "名词",
        "spell": "milkshake"
      },
      {
        "id": "s2-minute",
        "en": "minute",
        "zh": "分钟",
        "pos": "名词",
        "spell": "minute"
      },
      {
        "id": "s2-mistake",
        "en": "mistake",
        "zh": "错误",
        "pos": "名词",
        "spell": "mistake"
      },
      {
        "id": "s2-model",
        "en": "model",
        "zh": "模型；模特",
        "pos": "名词",
        "spell": "model"
      },
      {
        "id": "s2-monday",
        "en": "Monday",
        "zh": "星期一",
        "pos": "名词",
        "spell": "Monday"
      },
      {
        "id": "s2-moon",
        "en": "moon",
        "zh": "月亮",
        "pos": "名词",
        "spell": "moon"
      },
      {
        "id": "s2-more",
        "en": "more",
        "zh": "更多",
        "pos": "副词 / 限定词 / 代词",
        "spell": "more"
      },
      {
        "id": "s2-most",
        "en": "most",
        "zh": "最多的",
        "pos": "副词 / 限定词 / 代词",
        "spell": "most"
      },
      {
        "id": "s2-mountain",
        "en": "mountain",
        "zh": "山",
        "pos": "名词",
        "spell": "mountain"
      },
      {
        "id": "s2-moustache",
        "en": "moustache",
        "zh": "小胡子",
        "pos": "名词",
        "spell": "moustache"
      },
      {
        "id": "s2-move",
        "en": "move",
        "zh": "移动",
        "pos": "动词",
        "spell": "move"
      },
      {
        "id": "s2-movie-uk-film",
        "en": "movie (UK film)",
        "zh": "电影",
        "pos": "名词",
        "spell": "movie"
      },
      {
        "id": "s2-must",
        "en": "must",
        "zh": "必须",
        "pos": "动词",
        "spell": "must"
      },
      {
        "id": "s2-naughty",
        "en": "naughty",
        "zh": "淘气的",
        "pos": "形容词",
        "spell": "naughty"
      },
      {
        "id": "s2-near",
        "en": "near",
        "zh": "靠近",
        "pos": "副词 / 介词",
        "spell": "near"
      },
      {
        "id": "s2-neck",
        "en": "neck",
        "zh": "脖子",
        "pos": "名词",
        "spell": "neck"
      },
      {
        "id": "s2-need",
        "en": "need",
        "zh": "需要",
        "pos": "动词",
        "spell": "need"
      },
      {
        "id": "s2-net",
        "en": "net",
        "zh": "网",
        "pos": "名词",
        "spell": "net"
      },
      {
        "id": "s2-never",
        "en": "never",
        "zh": "从不",
        "pos": "副词",
        "spell": "never"
      },
      {
        "id": "s2-newspaper",
        "en": "newspaper",
        "zh": "报纸",
        "pos": "名词",
        "spell": "newspaper"
      },
      {
        "id": "s2-noise",
        "en": "noise",
        "zh": "噪音",
        "pos": "名词",
        "spell": "noise"
      },
      {
        "id": "s2-nothing",
        "en": "nothing",
        "zh": "没有东西",
        "pos": "代词",
        "spell": "nothing"
      },
      {
        "id": "s2-november",
        "en": "November",
        "zh": "十一月",
        "pos": "名词",
        "spell": "November"
      },
      {
        "id": "s2-nurse",
        "en": "nurse",
        "zh": "护士",
        "pos": "名词",
        "spell": "nurse"
      },
      {
        "id": "s2-october",
        "en": "October",
        "zh": "十月",
        "pos": "名词",
        "spell": "October"
      },
      {
        "id": "s2-off",
        "en": "off",
        "zh": "离开；关掉",
        "pos": "副词 / 介词",
        "spell": "off"
      },
      {
        "id": "s2-often",
        "en": "often",
        "zh": "经常",
        "pos": "副词",
        "spell": "often"
      },
      {
        "id": "s2-only",
        "en": "only",
        "zh": "仅仅",
        "pos": "副词",
        "spell": "only"
      },
      {
        "id": "s2-opposite",
        "en": "opposite",
        "zh": "相反的；在对面",
        "pos": "介词",
        "spell": "opposite"
      },
      {
        "id": "s2-out",
        "en": "out",
        "zh": "出来",
        "pos": "副词",
        "spell": "out"
      },
      {
        "id": "s2-out-of",
        "en": "out of",
        "zh": "从……出来",
        "pos": "介词",
        "spell": "out of"
      },
      {
        "id": "s2-outside",
        "en": "outside",
        "zh": "在外面",
        "pos": "副词 / 名词 / 介词",
        "spell": "outside"
      },
      {
        "id": "s2-pair",
        "en": "pair",
        "zh": "一双；一对",
        "pos": "名词",
        "spell": "pair"
      },
      {
        "id": "s2-pancake",
        "en": "pancake",
        "zh": "薄煎饼",
        "pos": "名词",
        "spell": "pancake"
      },
      {
        "id": "s2-panda",
        "en": "panda",
        "zh": "熊猫",
        "pos": "名词",
        "spell": "panda"
      },
      {
        "id": "s2-parent",
        "en": "parent",
        "zh": "父或母",
        "pos": "名词",
        "spell": "parent"
      },
      {
        "id": "s2-parrot",
        "en": "parrot",
        "zh": "鹦鹉",
        "pos": "名词",
        "spell": "parrot"
      },
      {
        "id": "s2-party",
        "en": "party",
        "zh": "聚会",
        "pos": "名词",
        "spell": "party"
      },
      {
        "id": "s2-pasta",
        "en": "pasta",
        "zh": "意大利面",
        "pos": "名词",
        "spell": "pasta"
      },
      {
        "id": "s2-penguin",
        "en": "penguin",
        "zh": "企鹅",
        "pos": "名词",
        "spell": "penguin"
      },
      {
        "id": "s2-pizza",
        "en": "pizza",
        "zh": "比萨饼",
        "pos": "名词",
        "spell": "pizza"
      },
      {
        "id": "s2-place",
        "en": "place",
        "zh": "地方",
        "pos": "名词",
        "spell": "place"
      },
      {
        "id": "s2-plant",
        "en": "plant",
        "zh": "植物；种植",
        "pos": "名词 / 动词",
        "spell": "plant"
      },
      {
        "id": "s2-plate",
        "en": "plate",
        "zh": "盘子",
        "pos": "名词",
        "spell": "plate"
      },
      {
        "id": "s2-player",
        "en": "player",
        "zh": "选手；演奏者",
        "pos": "名词",
        "spell": "player"
      },
      {
        "id": "s2-pool",
        "en": "pool",
        "zh": "水池",
        "pos": "名词",
        "spell": "pool"
      },
      {
        "id": "s2-pop-star",
        "en": "pop star",
        "zh": "流行歌星",
        "pos": "名词",
        "spell": "pop star"
      },
      {
        "id": "s2-postcard",
        "en": "postcard",
        "zh": "明信片",
        "pos": "名词",
        "spell": "postcard"
      },
      {
        "id": "s2-postman",
        "en": "postman",
        "zh": "邮递员",
        "pos": "名词",
        "spell": "postman"
      },
      {
        "id": "s2-pound",
        "en": "pound",
        "zh": "英镑",
        "pos": "名词",
        "spell": "pound"
      },
      {
        "id": "s2-practice",
        "en": "practice",
        "zh": "练习（名）",
        "pos": "名词",
        "spell": "practice"
      },
      {
        "id": "s2-practise",
        "en": "practise",
        "zh": "练习（动）",
        "pos": "动词",
        "spell": "practise"
      },
      {
        "id": "s2-present",
        "en": "present",
        "zh": "礼物；现在的",
        "pos": "名词",
        "spell": "present"
      },
      {
        "id": "s2-pretty",
        "en": "pretty",
        "zh": "漂亮的",
        "pos": "形容词",
        "spell": "pretty"
      },
      {
        "id": "s2-puppy",
        "en": "puppy",
        "zh": "小狗",
        "pos": "名词",
        "spell": "puppy"
      },
      {
        "id": "s2-put-on",
        "en": "put on",
        "zh": "穿上",
        "pos": "动词",
        "spell": "put on"
      },
      {
        "id": "s2-quick",
        "en": "quick",
        "zh": "快的",
        "pos": "形容词",
        "spell": "quick"
      },
      {
        "id": "s2-quickly",
        "en": "quickly",
        "zh": "迅速地",
        "pos": "副词",
        "spell": "quickly"
      },
      {
        "id": "s2-quiet",
        "en": "quiet",
        "zh": "安静的",
        "pos": "形容词",
        "spell": "quiet"
      },
      {
        "id": "s2-quietly",
        "en": "quietly",
        "zh": "安静地",
        "pos": "副词",
        "spell": "quietly"
      },
      {
        "id": "s2-rainbow",
        "en": "rainbow",
        "zh": "彩虹",
        "pos": "名词",
        "spell": "rainbow"
      },
      {
        "id": "s2-ride",
        "en": "ride",
        "zh": "骑",
        "pos": "名词",
        "spell": "ride"
      },
      {
        "id": "s2-river",
        "en": "river",
        "zh": "河",
        "pos": "名词",
        "spell": "river"
      },
      {
        "id": "s2-road",
        "en": "road",
        "zh": "路",
        "pos": "名词",
        "spell": "road"
      },
      {
        "id": "s2-rock",
        "en": "rock",
        "zh": "岩石；摇滚",
        "pos": "名词",
        "spell": "rock"
      },
      {
        "id": "s2-roller-skates",
        "en": "roller skates",
        "zh": "旱冰鞋",
        "pos": "名词",
        "spell": "roller skates"
      },
      {
        "id": "s2-roller-skating",
        "en": "roller skating",
        "zh": "滑旱冰",
        "pos": "名词",
        "spell": "roller skating"
      },
      {
        "id": "s2-roof",
        "en": "roof",
        "zh": "屋顶",
        "pos": "名词",
        "spell": "roof"
      },
      {
        "id": "s2-round",
        "en": "round",
        "zh": "圆形的；围绕",
        "pos": "形容词 / 副词 / 介词",
        "spell": "round"
      },
      {
        "id": "s2-safe",
        "en": "safe",
        "zh": "安全的",
        "pos": "形容词",
        "spell": "safe"
      },
      {
        "id": "s2-sail",
        "en": "sail",
        "zh": "航行",
        "pos": "名词 / 动词",
        "spell": "sail"
      },
      {
        "id": "s2-salad",
        "en": "salad",
        "zh": "沙拉",
        "pos": "名词",
        "spell": "salad"
      },
      {
        "id": "s2-sandwich",
        "en": "sandwich",
        "zh": "三明治",
        "pos": "名词",
        "spell": "sandwich"
      },
      {
        "id": "s2-saturday",
        "en": "Saturday",
        "zh": "星期六",
        "pos": "名词",
        "spell": "Saturday"
      },
      {
        "id": "s2-sauce",
        "en": "sauce",
        "zh": "酱汁",
        "pos": "名词",
        "spell": "sauce"
      },
      {
        "id": "s2-scarf",
        "en": "scarf",
        "zh": "围巾",
        "pos": "名词",
        "spell": "scarf"
      },
      {
        "id": "s2-score",
        "en": "score",
        "zh": "得分",
        "pos": "动词",
        "spell": "score"
      },
      {
        "id": "s2-seat",
        "en": "seat",
        "zh": "座位",
        "pos": "名词",
        "spell": "seat"
      },
      {
        "id": "s2-second",
        "en": "second",
        "zh": "第二；秒",
        "pos": "形容词 / 副词",
        "spell": "second"
      },
      {
        "id": "s2-send",
        "en": "send",
        "zh": "发送",
        "pos": "动词",
        "spell": "send"
      },
      {
        "id": "s2-september",
        "en": "September",
        "zh": "九月",
        "pos": "名词",
        "spell": "September"
      },
      {
        "id": "s2-shall",
        "en": "shall",
        "zh": "将；……好吗",
        "pos": "动词",
        "spell": "shall"
      },
      {
        "id": "s2-shape",
        "en": "shape",
        "zh": "形状",
        "pos": "名词",
        "spell": "shape"
      },
      {
        "id": "s2-shark",
        "en": "shark",
        "zh": "鲨鱼",
        "pos": "名词",
        "spell": "shark"
      },
      {
        "id": "s2-shop",
        "en": "shop",
        "zh": "购物；商店",
        "pos": "动词",
        "spell": "shop"
      },
      {
        "id": "s2-shopping-centre",
        "en": "shopping centre",
        "zh": "购物中心",
        "pos": "名词",
        "spell": "shopping centre"
      },
      {
        "id": "s2-shopping",
        "en": "shopping",
        "zh": "购物",
        "pos": "名词",
        "spell": "shopping"
      },
      {
        "id": "s2-shoulder",
        "en": "shoulder",
        "zh": "肩膀",
        "pos": "名词",
        "spell": "shoulder"
      },
      {
        "id": "s2-shout",
        "en": "shout",
        "zh": "喊",
        "pos": "动词",
        "spell": "shout"
      },
      {
        "id": "s2-shower",
        "en": "shower",
        "zh": "淋浴",
        "pos": "名词",
        "spell": "shower"
      },
      {
        "id": "s2-sick",
        "en": "sick",
        "zh": "生病的",
        "pos": "形容词",
        "spell": "sick"
      },
      {
        "id": "s2-skate",
        "en": "skate",
        "zh": "滑冰",
        "pos": "名词 / 动词",
        "spell": "skate"
      },
      {
        "id": "s2-skip",
        "en": "skip",
        "zh": "跳绳；跳过",
        "pos": "动词",
        "spell": "skip"
      },
      {
        "id": "s2-slow",
        "en": "slow",
        "zh": "慢的",
        "pos": "形容词",
        "spell": "slow"
      },
      {
        "id": "s2-slowly",
        "en": "slowly",
        "zh": "慢慢地",
        "pos": "副词",
        "spell": "slowly"
      },
      {
        "id": "s2-smart",
        "en": "smart",
        "zh": "聪明的；整齐的",
        "pos": "形容词",
        "spell": "smart"
      },
      {
        "id": "s2-snack",
        "en": "snack",
        "zh": "零食",
        "pos": "名词",
        "spell": "snack"
      },
      {
        "id": "s2-snail",
        "en": "snail",
        "zh": "蜗牛",
        "pos": "名词",
        "spell": "snail"
      },
      {
        "id": "s2-soft",
        "en": "soft",
        "zh": "柔软的",
        "pos": "形容词",
        "spell": "soft"
      },
      {
        "id": "s2-somebody",
        "en": "somebody",
        "zh": "某人",
        "pos": "代词",
        "spell": "somebody"
      },
      {
        "id": "s2-someone",
        "en": "someone",
        "zh": "某人",
        "pos": "代词",
        "spell": "someone"
      },
      {
        "id": "s2-something",
        "en": "something",
        "zh": "某事；某物",
        "pos": "代词",
        "spell": "something"
      },
      {
        "id": "s2-son",
        "en": "son",
        "zh": "儿子",
        "pos": "名词",
        "spell": "son"
      },
      {
        "id": "s2-soup",
        "en": "soup",
        "zh": "汤",
        "pos": "名词",
        "spell": "soup"
      },
      {
        "id": "s2-space",
        "en": "space",
        "zh": "太空；空间",
        "pos": "名词",
        "spell": "space"
      },
      {
        "id": "s2-speak",
        "en": "speak",
        "zh": "说",
        "pos": "动词",
        "spell": "speak"
      },
      {
        "id": "s2-spend",
        "en": "spend",
        "zh": "花费",
        "pos": "动词",
        "spell": "spend"
      },
      {
        "id": "s2-spring",
        "en": "spring",
        "zh": "春天",
        "pos": "名词",
        "spell": "spring"
      },
      {
        "id": "s2-square",
        "en": "square",
        "zh": "正方形；广场",
        "pos": "形容词 / 名词",
        "spell": "square"
      },
      {
        "id": "s2-stair-s",
        "en": "stair(s)",
        "zh": "楼梯",
        "pos": "名词",
        "spell": "stair"
      },
      {
        "id": "s2-star",
        "en": "star",
        "zh": "星星；明星",
        "pos": "名词",
        "spell": "star"
      },
      {
        "id": "s2-station",
        "en": "station",
        "zh": "车站",
        "pos": "名词",
        "spell": "station"
      },
      {
        "id": "s2-stay",
        "en": "stay",
        "zh": "停留",
        "pos": "动词",
        "spell": "stay"
      },
      {
        "id": "s2-stomach",
        "en": "stomach",
        "zh": "胃；肚子",
        "pos": "名词",
        "spell": "stomach"
      },
      {
        "id": "s2-stomach-ache",
        "en": "stomach-ache",
        "zh": "肚子痛",
        "pos": "名词",
        "spell": "stomach-ache"
      },
      {
        "id": "s2-straight",
        "en": "straight",
        "zh": "直的",
        "pos": "形容词",
        "spell": "straight"
      },
      {
        "id": "s2-strong",
        "en": "strong",
        "zh": "强壮的",
        "pos": "形容词",
        "spell": "strong"
      },
      {
        "id": "s2-student",
        "en": "student",
        "zh": "学生",
        "pos": "名词",
        "spell": "student"
      },
      {
        "id": "s2-subject",
        "en": "subject",
        "zh": "科目",
        "pos": "名词",
        "spell": "subject"
      },
      {
        "id": "s2-summer",
        "en": "summer",
        "zh": "夏天",
        "pos": "名词",
        "spell": "summer"
      },
      {
        "id": "s2-sunday",
        "en": "Sunday",
        "zh": "星期日",
        "pos": "名词",
        "spell": "Sunday"
      },
      {
        "id": "s2-supermarket",
        "en": "supermarket",
        "zh": "超市",
        "pos": "名词",
        "spell": "supermarket"
      },
      {
        "id": "s2-supper",
        "en": "supper",
        "zh": "晚饭",
        "pos": "名词",
        "spell": "supper"
      },
      {
        "id": "s2-surprised",
        "en": "surprised",
        "zh": "吃惊的",
        "pos": "形容词",
        "spell": "surprised"
      },
      {
        "id": "s2-sweater",
        "en": "sweater",
        "zh": "毛衣",
        "pos": "名词",
        "spell": "sweater"
      },
      {
        "id": "s2-sweet",
        "en": "sweet",
        "zh": "甜的；糖果",
        "pos": "形容词",
        "spell": "sweet"
      },
      {
        "id": "s2-swim",
        "en": "swim",
        "zh": "游泳",
        "pos": "名词",
        "spell": "swim"
      },
      {
        "id": "s2-swimming-pool",
        "en": "swimming pool",
        "zh": "游泳池",
        "pos": "名词",
        "spell": "swimming pool"
      },
      {
        "id": "s2-swimsuit",
        "en": "swimsuit",
        "zh": "泳衣",
        "pos": "名词",
        "spell": "swimsuit"
      },
      {
        "id": "s2-take",
        "en": "take",
        "zh": "拿；乘坐",
        "pos": "动词",
        "spell": "take"
      },
      {
        "id": "s2-tall",
        "en": "tall",
        "zh": "高的",
        "pos": "形容词",
        "spell": "tall"
      },
      {
        "id": "s2-tea",
        "en": "tea",
        "zh": "茶",
        "pos": "名词",
        "spell": "tea"
      },
      {
        "id": "s2-teach",
        "en": "teach",
        "zh": "教",
        "pos": "动词",
        "spell": "teach"
      },
      {
        "id": "s2-temperature",
        "en": "temperature",
        "zh": "温度；体温",
        "pos": "名词",
        "spell": "temperature"
      },
      {
        "id": "s2-terrible",
        "en": "terrible",
        "zh": "糟糕的",
        "pos": "形容词",
        "spell": "terrible"
      },
      {
        "id": "s2-text",
        "en": "text",
        "zh": "短信；文本",
        "pos": "名词 / 动词",
        "spell": "text"
      },
      {
        "id": "s2-than",
        "en": "than",
        "zh": "比",
        "pos": "连词 / 介词",
        "spell": "than"
      },
      {
        "id": "s2-then",
        "en": "then",
        "zh": "然后",
        "pos": "副词",
        "spell": "then"
      },
      {
        "id": "s2-thin",
        "en": "thin",
        "zh": "瘦的；薄的",
        "pos": "形容词",
        "spell": "thin"
      },
      {
        "id": "s2-think",
        "en": "think",
        "zh": "想",
        "pos": "动词",
        "spell": "think"
      },
      {
        "id": "s2-third",
        "en": "third",
        "zh": "第三",
        "pos": "形容词 / 副词",
        "spell": "third"
      },
      {
        "id": "s2-thirsty",
        "en": "thirsty",
        "zh": "渴的",
        "pos": "形容词",
        "spell": "thirsty"
      },
      {
        "id": "s2-thursday",
        "en": "Thursday",
        "zh": "星期四",
        "pos": "名词",
        "spell": "Thursday"
      },
      {
        "id": "s2-tired",
        "en": "tired",
        "zh": "累的",
        "pos": "形容词",
        "spell": "tired"
      },
      {
        "id": "s2-tomorrow",
        "en": "tomorrow",
        "zh": "明天",
        "pos": "副词 / 名词",
        "spell": "tomorrow"
      },
      {
        "id": "s2-toothache",
        "en": "toothache",
        "zh": "牙痛",
        "pos": "名词",
        "spell": "toothache"
      },
      {
        "id": "s2-toothbrush",
        "en": "toothbrush",
        "zh": "牙刷",
        "pos": "名词",
        "spell": "toothbrush"
      },
      {
        "id": "s2-toothpaste",
        "en": "toothpaste",
        "zh": "牙膏",
        "pos": "名词",
        "spell": "toothpaste"
      },
      {
        "id": "s2-top",
        "en": "top",
        "zh": "顶部",
        "pos": "形容词 / 名词",
        "spell": "top"
      },
      {
        "id": "s2-towel",
        "en": "towel",
        "zh": "毛巾",
        "pos": "名词",
        "spell": "towel"
      },
      {
        "id": "s2-town",
        "en": "town",
        "zh": "城镇",
        "pos": "名词",
        "spell": "town"
      },
      {
        "id": "s2-tractor",
        "en": "tractor",
        "zh": "拖拉机",
        "pos": "名词",
        "spell": "tractor"
      },
      {
        "id": "s2-travel",
        "en": "travel",
        "zh": "旅行",
        "pos": "动词",
        "spell": "travel"
      },
      {
        "id": "s2-treasure",
        "en": "treasure",
        "zh": "宝藏",
        "pos": "名词",
        "spell": "treasure"
      },
      {
        "id": "s2-trip",
        "en": "trip",
        "zh": "旅行",
        "pos": "名词",
        "spell": "trip"
      },
      {
        "id": "s2-tuesday",
        "en": "Tuesday",
        "zh": "星期二",
        "pos": "名词",
        "spell": "Tuesday"
      },
      {
        "id": "s2-uncle",
        "en": "uncle",
        "zh": "叔叔；舅舅",
        "pos": "名词",
        "spell": "uncle"
      },
      {
        "id": "s2-up",
        "en": "up",
        "zh": "向上",
        "pos": "副词 / 介词",
        "spell": "up"
      },
      {
        "id": "s2-upstairs",
        "en": "upstairs",
        "zh": "在楼上",
        "pos": "副词 / 名词",
        "spell": "upstairs"
      },
      {
        "id": "s2-vegetable",
        "en": "vegetable",
        "zh": "蔬菜",
        "pos": "名词",
        "spell": "vegetable"
      },
      {
        "id": "s2-video",
        "en": "video",
        "zh": "视频",
        "pos": "名词 / 动词",
        "spell": "video"
      },
      {
        "id": "s2-village",
        "en": "village",
        "zh": "村庄",
        "pos": "名词",
        "spell": "village"
      },
      {
        "id": "s2-wait",
        "en": "wait",
        "zh": "等待",
        "pos": "动词",
        "spell": "wait"
      },
      {
        "id": "s2-wake-up",
        "en": "wake (up)",
        "zh": "醒来",
        "pos": "动词",
        "spell": "wake"
      },
      {
        "id": "s2-walk",
        "en": "walk",
        "zh": "走；散步",
        "pos": "名词",
        "spell": "walk"
      },
      {
        "id": "s2-wardrobe",
        "en": "wardrobe",
        "zh": "衣柜",
        "pos": "名词",
        "spell": "wardrobe"
      },
      {
        "id": "s2-wash",
        "en": "wash",
        "zh": "洗",
        "pos": "名词 / 动词",
        "spell": "wash"
      },
      {
        "id": "s2-water",
        "en": "water",
        "zh": "水",
        "pos": "动词",
        "spell": "water"
      },
      {
        "id": "s2-waterfall",
        "en": "waterfall",
        "zh": "瀑布",
        "pos": "名词",
        "spell": "waterfall"
      },
      {
        "id": "s2-wave",
        "en": "wave",
        "zh": "挥手；波浪",
        "pos": "名词",
        "spell": "wave"
      },
      {
        "id": "s2-weak",
        "en": "weak",
        "zh": "虚弱的",
        "pos": "形容词",
        "spell": "weak"
      },
      {
        "id": "s2-website",
        "en": "website",
        "zh": "网站",
        "pos": "名词",
        "spell": "website"
      },
      {
        "id": "s2-wednesday",
        "en": "Wednesday",
        "zh": "星期三",
        "pos": "名词",
        "spell": "Wednesday"
      },
      {
        "id": "s2-week",
        "en": "week",
        "zh": "星期",
        "pos": "名词",
        "spell": "week"
      },
      {
        "id": "s2-weekend",
        "en": "weekend",
        "zh": "周末",
        "pos": "名词",
        "spell": "weekend"
      },
      {
        "id": "s2-well",
        "en": "well",
        "zh": "好地；健康的",
        "pos": "形容词 / 副词",
        "spell": "well"
      },
      {
        "id": "s2-wet",
        "en": "wet",
        "zh": "湿的",
        "pos": "形容词",
        "spell": "wet"
      },
      {
        "id": "s2-whale",
        "en": "whale",
        "zh": "鲸",
        "pos": "名词",
        "spell": "whale"
      },
      {
        "id": "s2-when",
        "en": "when",
        "zh": "什么时候",
        "pos": "副词 / 连词 / 疑问词",
        "spell": "when"
      },
      {
        "id": "s2-where",
        "en": "where",
        "zh": "哪里",
        "pos": "代词",
        "spell": "where"
      },
      {
        "id": "s2-why",
        "en": "why",
        "zh": "为什么",
        "pos": "疑问词",
        "spell": "why"
      },
      {
        "id": "s2-wind",
        "en": "wind",
        "zh": "风",
        "pos": "名词",
        "spell": "wind"
      },
      {
        "id": "s2-windy",
        "en": "windy",
        "zh": "有风的",
        "pos": "形容词",
        "spell": "windy"
      },
      {
        "id": "s2-winter",
        "en": "winter",
        "zh": "冬天",
        "pos": "名词",
        "spell": "winter"
      },
      {
        "id": "s2-work",
        "en": "work",
        "zh": "工作",
        "pos": "名词 / 动词",
        "spell": "work"
      },
      {
        "id": "s2-world",
        "en": "world",
        "zh": "世界",
        "pos": "名词",
        "spell": "world"
      },
      {
        "id": "s2-worse",
        "en": "worse",
        "zh": "更差的",
        "pos": "形容词 / 副词",
        "spell": "worse"
      },
      {
        "id": "s2-worst",
        "en": "worst",
        "zh": "最差的",
        "pos": "形容词 / 副词",
        "spell": "worst"
      },
      {
        "id": "s2-would",
        "en": "would",
        "zh": "将；愿意",
        "pos": "动词",
        "spell": "would"
      },
      {
        "id": "s2-wrong",
        "en": "wrong",
        "zh": "错误的",
        "pos": "形容词",
        "spell": "wrong"
      },
      {
        "id": "s2-yesterday",
        "en": "yesterday",
        "zh": "昨天",
        "pos": "副词 / 名词",
        "spell": "yesterday"
      },
      {
        "id": "s2-a-m",
        "en": "a.m.",
        "zh": "上午",
        "pos": "名词",
        "spell": "a.m."
      },
      {
        "id": "s2-p-m",
        "en": "p.m.",
        "zh": "下午",
        "pos": "名词",
        "spell": "p.m."
      },
      {
        "id": "s2-bat-sports-equipment",
        "en": "bat (sports equipment)",
        "zh": "球拍；蝙蝠",
        "pos": "名词",
        "spell": "bat"
      },
      {
        "id": "s2-city-town-centre-us-center",
        "en": "city/town centre (US center)",
        "zh": "市中心",
        "pos": "名词",
        "spell": "city"
      },
      {
        "id": "s2-neighbour",
        "en": "neighbour",
        "zh": "邻居",
        "pos": "名词",
        "spell": "neighbour"
      },
      {
        "id": "s2-rocket",
        "en": "rocket",
        "zh": "火箭",
        "pos": "名词",
        "spell": "rocket"
      },
      {
        "id": "s2-sports-centre-us-center",
        "en": "sports centre (US center)",
        "zh": "体育中心",
        "pos": "名词",
        "spell": "sports centre"
      },
      {
        "id": "s2-take-off",
        "en": "take off",
        "zh": "脱下；起飞",
        "pos": "动词",
        "spell": "take off"
      },
      {
        "id": "hippo1-could",
        "en": "could",
        "zh": "能；可以（过去式）",
        "pos": "动词",
        "spell": "could"
      }
    ],
    "hippo2": [
      {
        "id": "s2-above",
        "en": "above",
        "zh": "在……上面",
        "pos": "介词",
        "spell": "above"
      },
      {
        "id": "s2-address",
        "en": "address",
        "zh": "地址",
        "pos": "名词",
        "spell": "address"
      },
      {
        "id": "s2-afraid",
        "en": "afraid",
        "zh": "害怕的",
        "pos": "形容词",
        "spell": "afraid"
      },
      {
        "id": "s2-after",
        "en": "after",
        "zh": "在……之后",
        "pos": "介词",
        "spell": "after"
      },
      {
        "id": "s2-age",
        "en": "age",
        "zh": "年龄",
        "pos": "名词",
        "spell": "age"
      },
      {
        "id": "s2-airport",
        "en": "airport",
        "zh": "机场",
        "pos": "名词",
        "spell": "airport"
      },
      {
        "id": "s2-all",
        "en": "all",
        "zh": "全部",
        "pos": "形容词 / 副词 / 限定词 / 代词",
        "spell": "all"
      },
      {
        "id": "s2-all-right",
        "en": "all right",
        "zh": "好的；没关系",
        "pos": "形容词 / 副词",
        "spell": "all right"
      },
      {
        "id": "s2-along",
        "en": "along",
        "zh": "沿着",
        "pos": "介词",
        "spell": "along"
      },
      {
        "id": "s2-always",
        "en": "always",
        "zh": "总是",
        "pos": "副词",
        "spell": "always"
      },
      {
        "id": "s2-another",
        "en": "another",
        "zh": "另一个",
        "pos": "限定词 / 代词",
        "spell": "another"
      },
      {
        "id": "s2-any",
        "en": "any",
        "zh": "任何；一些",
        "pos": "限定词 / 代词",
        "spell": "any"
      },
      {
        "id": "s2-app",
        "en": "app",
        "zh": "应用程序",
        "pos": "名词",
        "spell": "app"
      },
      {
        "id": "s2-april",
        "en": "April",
        "zh": "四月",
        "pos": "名词",
        "spell": "April"
      },
      {
        "id": "s2-around",
        "en": "around",
        "zh": "在周围",
        "pos": "介词",
        "spell": "around"
      },
      {
        "id": "s2-asleep",
        "en": "asleep",
        "zh": "睡着的",
        "pos": "形容词",
        "spell": "asleep"
      },
      {
        "id": "s2-astronaut",
        "en": "astronaut",
        "zh": "宇航员",
        "pos": "名词",
        "spell": "astronaut"
      },
      {
        "id": "s2-august",
        "en": "August",
        "zh": "八月",
        "pos": "名词",
        "spell": "August"
      },
      {
        "id": "s2-aunt",
        "en": "aunt",
        "zh": "阿姨；姑妈",
        "pos": "名词",
        "spell": "aunt"
      },
      {
        "id": "s2-autumn-us-fall",
        "en": "autumn (US fall)",
        "zh": "秋天",
        "pos": "名词",
        "spell": "autumn"
      },
      {
        "id": "s2-awake",
        "en": "awake",
        "zh": "醒着的",
        "pos": "形容词",
        "spell": "awake"
      },
      {
        "id": "s2-back",
        "en": "back",
        "zh": "后面；回来",
        "pos": "形容词 / 副词 / 名词",
        "spell": "back"
      },
      {
        "id": "s2-bad",
        "en": "bad",
        "zh": "坏的",
        "pos": "形容词",
        "spell": "bad"
      },
      {
        "id": "s2-badly",
        "en": "badly",
        "zh": "糟糕地",
        "pos": "副词",
        "spell": "badly"
      },
      {
        "id": "s2-balcony",
        "en": "balcony",
        "zh": "阳台",
        "pos": "名词",
        "spell": "balcony"
      },
      {
        "id": "s2-band-music",
        "en": "band (music)",
        "zh": "乐队",
        "pos": "名词",
        "spell": "band"
      },
      {
        "id": "s2-basement",
        "en": "basement",
        "zh": "地下室",
        "pos": "名词",
        "spell": "basement"
      },
      {
        "id": "s2-bat",
        "en": "bat",
        "zh": "球拍；蝙蝠",
        "pos": "名词",
        "spell": "bat"
      },
      {
        "id": "s2-be-called",
        "en": "be called",
        "zh": "叫作",
        "pos": "动词",
        "spell": "be called"
      },
      {
        "id": "s2-bean",
        "en": "bean",
        "zh": "豆子",
        "pos": "名词",
        "spell": "bean"
      },
      {
        "id": "s2-beard",
        "en": "beard",
        "zh": "胡子",
        "pos": "名词",
        "spell": "beard"
      },
      {
        "id": "s2-because",
        "en": "because",
        "zh": "因为",
        "pos": "连词",
        "spell": "because"
      },
      {
        "id": "s2-before",
        "en": "before",
        "zh": "在……之前",
        "pos": "介词",
        "spell": "before"
      },
      {
        "id": "s2-below",
        "en": "below",
        "zh": "在……下面",
        "pos": "介词",
        "spell": "below"
      },
      {
        "id": "s2-best",
        "en": "best",
        "zh": "最好的",
        "pos": "形容词 / 副词",
        "spell": "best"
      },
      {
        "id": "s2-better",
        "en": "better",
        "zh": "更好的",
        "pos": "形容词 / 副词",
        "spell": "better"
      },
      {
        "id": "s2-blond-e",
        "en": "blond(e)",
        "zh": "金发的",
        "pos": "形容词",
        "spell": "blond"
      },
      {
        "id": "s2-boring",
        "en": "boring",
        "zh": "无聊的",
        "pos": "形容词",
        "spell": "boring"
      },
      {
        "id": "s2-bottom",
        "en": "bottom",
        "zh": "底部",
        "pos": "形容词 / 名词",
        "spell": "bottom"
      },
      {
        "id": "s2-bowl",
        "en": "bowl",
        "zh": "碗",
        "pos": "名词",
        "spell": "bowl"
      },
      {
        "id": "s2-brave",
        "en": "brave",
        "zh": "勇敢的",
        "pos": "形容词",
        "spell": "brave"
      },
      {
        "id": "s2-break",
        "en": "break",
        "zh": "打破；休息",
        "pos": "名词",
        "spell": "break"
      },
      {
        "id": "s2-brilliant",
        "en": "brilliant",
        "zh": "极好的",
        "pos": "形容词 / 感叹",
        "spell": "brilliant"
      },
      {
        "id": "s2-bring",
        "en": "bring",
        "zh": "带来",
        "pos": "动词",
        "spell": "bring"
      },
      {
        "id": "s2-build",
        "en": "build",
        "zh": "建造",
        "pos": "动词",
        "spell": "build"
      },
      {
        "id": "s2-building",
        "en": "building",
        "zh": "建筑物",
        "pos": "名词",
        "spell": "building"
      },
      {
        "id": "s2-bus-station",
        "en": "bus station",
        "zh": "公共汽车站",
        "pos": "名词",
        "spell": "bus station"
      },
      {
        "id": "s2-bus-stop",
        "en": "bus stop",
        "zh": "公交车站",
        "pos": "名词",
        "spell": "bus stop"
      },
      {
        "id": "s2-busy",
        "en": "busy",
        "zh": "忙碌的",
        "pos": "形容词",
        "spell": "busy"
      },
      {
        "id": "s2-buy",
        "en": "buy",
        "zh": "买",
        "pos": "动词",
        "spell": "buy"
      },
      {
        "id": "s2-by",
        "en": "by",
        "zh": "乘（交通工具）；被",
        "pos": "介词",
        "spell": "by"
      },
      {
        "id": "s2-caf",
        "en": "café",
        "zh": "咖啡馆",
        "pos": "名词",
        "spell": "café"
      },
      {
        "id": "s2-cage",
        "en": "cage",
        "zh": "笼子",
        "pos": "名词",
        "spell": "cage"
      },
      {
        "id": "s2-call",
        "en": "call",
        "zh": "打电话；称呼",
        "pos": "动词",
        "spell": "call"
      },
      {
        "id": "s2-car-park",
        "en": "car park",
        "zh": "停车场",
        "pos": "名词",
        "spell": "car park"
      },
      {
        "id": "s2-careful",
        "en": "careful",
        "zh": "小心的",
        "pos": "形容词",
        "spell": "careful"
      },
      {
        "id": "s2-carefully",
        "en": "carefully",
        "zh": "小心地",
        "pos": "副词",
        "spell": "carefully"
      },
      {
        "id": "s2-carry",
        "en": "carry",
        "zh": "搬运",
        "pos": "动词",
        "spell": "carry"
      },
      {
        "id": "s2-catch-e-g-a-bus",
        "en": "catch (e.g. a bus)",
        "zh": "赶上（车）",
        "pos": "动词",
        "spell": "catch"
      },
      {
        "id": "s2-cd",
        "en": "CD",
        "zh": "光盘",
        "pos": "名词",
        "spell": "CD"
      },
      {
        "id": "s2-centre-us-center",
        "en": "centre (US center)",
        "zh": "中心",
        "pos": "名词",
        "spell": "centre"
      },
      {
        "id": "s2-change",
        "en": "change",
        "zh": "改变；零钱",
        "pos": "动词",
        "spell": "change"
      },
      {
        "id": "s2-cheap",
        "en": "cheap",
        "zh": "便宜的",
        "pos": "形容词",
        "spell": "cheap"
      },
      {
        "id": "s2-cinema",
        "en": "cinema",
        "zh": "电影院",
        "pos": "名词",
        "spell": "cinema"
      },
      {
        "id": "s2-circle",
        "en": "circle",
        "zh": "圆形",
        "pos": "名词",
        "spell": "circle"
      },
      {
        "id": "s2-circus",
        "en": "circus",
        "zh": "马戏团",
        "pos": "名词",
        "spell": "circus"
      },
      {
        "id": "s2-city",
        "en": "city",
        "zh": "城市",
        "pos": "名词",
        "spell": "city"
      },
      {
        "id": "s2-clever",
        "en": "clever",
        "zh": "聪明的",
        "pos": "形容词",
        "spell": "clever"
      },
      {
        "id": "s2-climb",
        "en": "climb",
        "zh": "爬",
        "pos": "动词",
        "spell": "climb"
      },
      {
        "id": "s2-cloudy",
        "en": "cloudy",
        "zh": "多云的",
        "pos": "形容词",
        "spell": "cloudy"
      },
      {
        "id": "s2-clown",
        "en": "clown",
        "zh": "小丑",
        "pos": "名词",
        "spell": "clown"
      },
      {
        "id": "s2-coat",
        "en": "coat",
        "zh": "外套",
        "pos": "名词",
        "spell": "coat"
      },
      {
        "id": "s2-coffee",
        "en": "coffee",
        "zh": "咖啡",
        "pos": "名词",
        "spell": "coffee"
      },
      {
        "id": "s2-cold",
        "en": "cold",
        "zh": "冷的；感冒",
        "pos": "形容词 / 名词",
        "spell": "cold"
      },
      {
        "id": "s2-come-on",
        "en": "come on",
        "zh": "加油；来吧",
        "pos": "感叹",
        "spell": "come on"
      },
      {
        "id": "s2-comic-book",
        "en": "comic book",
        "zh": "漫画书",
        "pos": "名词",
        "spell": "comic book"
      },
      {
        "id": "s2-comic",
        "en": "comic",
        "zh": "漫画",
        "pos": "名词",
        "spell": "comic"
      },
      {
        "id": "s2-cook",
        "en": "cook",
        "zh": "烹饪；厨师",
        "pos": "名词 / 动词",
        "spell": "cook"
      },
      {
        "id": "s2-country",
        "en": "country",
        "zh": "国家；乡下",
        "pos": "名词",
        "spell": "country"
      },
      {
        "id": "s2-countryside",
        "en": "countryside",
        "zh": "乡下",
        "pos": "名词",
        "spell": "countryside"
      },
      {
        "id": "s2-cry",
        "en": "cry",
        "zh": "哭",
        "pos": "动词",
        "spell": "cry"
      },
      {
        "id": "s2-cup",
        "en": "cup",
        "zh": "杯子",
        "pos": "名词",
        "spell": "cup"
      },
      {
        "id": "s2-curly",
        "en": "curly",
        "zh": "卷曲的",
        "pos": "形容词",
        "spell": "curly"
      },
      {
        "id": "s2-dance",
        "en": "dance",
        "zh": "跳舞",
        "pos": "名词 / 动词",
        "spell": "dance"
      },
      {
        "id": "s2-dangerous",
        "en": "dangerous",
        "zh": "危险的",
        "pos": "形容词",
        "spell": "dangerous"
      },
      {
        "id": "s2-daughter",
        "en": "daughter",
        "zh": "女儿",
        "pos": "名词",
        "spell": "daughter"
      },
      {
        "id": "s2-december",
        "en": "December",
        "zh": "十二月",
        "pos": "名词",
        "spell": "December"
      },
      {
        "id": "s2-dentist",
        "en": "dentist",
        "zh": "牙医",
        "pos": "名词",
        "spell": "dentist"
      },
      {
        "id": "s2-dessert",
        "en": "dessert",
        "zh": "甜点",
        "pos": "名词",
        "spell": "dessert"
      },
      {
        "id": "s2-dictionary",
        "en": "dictionary",
        "zh": "词典",
        "pos": "名词",
        "spell": "dictionary"
      },
      {
        "id": "s2-difference",
        "en": "difference",
        "zh": "区别",
        "pos": "名词",
        "spell": "difference"
      },
      {
        "id": "s2-different",
        "en": "different",
        "zh": "不同的",
        "pos": "形容词",
        "spell": "different"
      },
      {
        "id": "s2-difficult",
        "en": "difficult",
        "zh": "困难的",
        "pos": "形容词",
        "spell": "difficult"
      },
      {
        "id": "s2-doctor",
        "en": "doctor",
        "zh": "医生",
        "pos": "名词",
        "spell": "doctor"
      },
      {
        "id": "s2-dolphin",
        "en": "dolphin",
        "zh": "海豚",
        "pos": "名词",
        "spell": "dolphin"
      },
      {
        "id": "s2-down",
        "en": "down",
        "zh": "向下",
        "pos": "副词 / 介词",
        "spell": "down"
      },
      {
        "id": "s2-downstairs",
        "en": "downstairs",
        "zh": "在楼下",
        "pos": "副词 / 名词",
        "spell": "downstairs"
      },
      {
        "id": "s2-dream",
        "en": "dream",
        "zh": "梦；做梦",
        "pos": "名词 / 动词",
        "spell": "dream"
      },
      {
        "id": "s2-dress-up",
        "en": "dress up",
        "zh": "装扮",
        "pos": "动词",
        "spell": "dress up"
      },
      {
        "id": "s2-drive",
        "en": "drive",
        "zh": "开车",
        "pos": "名词",
        "spell": "drive"
      },
      {
        "id": "s2-driver",
        "en": "driver",
        "zh": "司机",
        "pos": "名词",
        "spell": "driver"
      },
      {
        "id": "s2-drop",
        "en": "drop",
        "zh": "掉下",
        "pos": "动词",
        "spell": "drop"
      },
      {
        "id": "s2-dry",
        "en": "dry",
        "zh": "干的；擦干",
        "pos": "形容词 / 动词",
        "spell": "dry"
      },
      {
        "id": "s2-dvd",
        "en": "DVD",
        "zh": "数字影碟",
        "pos": "名词",
        "spell": "DVD"
      },
      {
        "id": "s2-earache",
        "en": "earache",
        "zh": "耳痛",
        "pos": "名词",
        "spell": "earache"
      },
      {
        "id": "s2-easy",
        "en": "easy",
        "zh": "容易的",
        "pos": "形容词",
        "spell": "easy"
      },
      {
        "id": "s2-e-book",
        "en": "e-book",
        "zh": "电子书",
        "pos": "名词",
        "spell": "e-book"
      },
      {
        "id": "s2-elevator-uk-lift",
        "en": "elevator (UK lift)",
        "zh": "电梯",
        "pos": "名词",
        "spell": "elevator"
      },
      {
        "id": "s2-email",
        "en": "email",
        "zh": "电子邮件",
        "pos": "名词 / 动词",
        "spell": "email"
      },
      {
        "id": "s2-every",
        "en": "every",
        "zh": "每个",
        "pos": "限定词",
        "spell": "every"
      },
      {
        "id": "s2-everyone",
        "en": "everyone",
        "zh": "每个人",
        "pos": "代词",
        "spell": "everyone"
      },
      {
        "id": "s2-everything",
        "en": "everything",
        "zh": "一切",
        "pos": "代词",
        "spell": "everything"
      },
      {
        "id": "s2-exciting",
        "en": "exciting",
        "zh": "令人兴奋的",
        "pos": "形容词",
        "spell": "exciting"
      },
      {
        "id": "s2-excuse-me",
        "en": "excuse me",
        "zh": "对不起；劳驾",
        "pos": "话语标记",
        "spell": "excuse me"
      },
      {
        "id": "s2-fair",
        "en": "fair",
        "zh": "公平的；集市",
        "pos": "形容词",
        "spell": "fair"
      },
      {
        "id": "s2-farmer",
        "en": "farmer",
        "zh": "农民",
        "pos": "名词",
        "spell": "farmer"
      },
      {
        "id": "s2-fat",
        "en": "fat",
        "zh": "胖的",
        "pos": "形容词",
        "spell": "fat"
      },
      {
        "id": "s2-february",
        "en": "February",
        "zh": "二月",
        "pos": "名词",
        "spell": "February"
      },
      {
        "id": "s2-feed",
        "en": "feed",
        "zh": "喂",
        "pos": "动词",
        "spell": "feed"
      },
      {
        "id": "s2-field",
        "en": "field",
        "zh": "田地；场地",
        "pos": "名词",
        "spell": "field"
      },
      {
        "id": "s2-film-us-movie",
        "en": "film (US movie)",
        "zh": "电影",
        "pos": "名词 / 动词",
        "spell": "film"
      },
      {
        "id": "s2-film-us-movie-star",
        "en": "film (US movie) star",
        "zh": "电影明星",
        "pos": "名词",
        "spell": "film star"
      },
      {
        "id": "s2-fine",
        "en": "fine",
        "zh": "好的",
        "pos": "形容词 / 感叹",
        "spell": "fine"
      },
      {
        "id": "s2-first",
        "en": "first",
        "zh": "第一",
        "pos": "形容词 / 副词",
        "spell": "first"
      },
      {
        "id": "s2-fish",
        "en": "fish",
        "zh": "鱼；钓鱼",
        "pos": "动词",
        "spell": "fish"
      },
      {
        "id": "s2-fix",
        "en": "fix",
        "zh": "修理",
        "pos": "动词",
        "spell": "fix"
      },
      {
        "id": "s2-flat",
        "en": "flat",
        "zh": "平的；平坦的",
        "pos": "形容词",
        "spell": "flat"
      },
      {
        "id": "s2-floor",
        "en": "floor",
        "zh": "地板；楼层",
        "pos": "名词",
        "spell": "floor"
      },
      {
        "id": "s2-fly",
        "en": "fly",
        "zh": "飞；苍蝇",
        "pos": "名词",
        "spell": "fly"
      },
      {
        "id": "s2-forest",
        "en": "forest",
        "zh": "森林",
        "pos": "名词",
        "spell": "forest"
      },
      {
        "id": "s2-friday",
        "en": "Friday",
        "zh": "星期五",
        "pos": "名词",
        "spell": "Friday"
      },
      {
        "id": "s2-frightened",
        "en": "frightened",
        "zh": "害怕的",
        "pos": "形容词",
        "spell": "frightened"
      },
      {
        "id": "s2-funfair",
        "en": "funfair",
        "zh": "游乐场",
        "pos": "名词",
        "spell": "funfair"
      },
      {
        "id": "s2-geography",
        "en": "geography",
        "zh": "地理",
        "pos": "名词",
        "spell": "geography"
      },
      {
        "id": "s2-get-dressed",
        "en": "get dressed",
        "zh": "穿衣服",
        "pos": "动词",
        "spell": "get dressed"
      },
      {
        "id": "s2-get-off",
        "en": "get off",
        "zh": "下车",
        "pos": "动词",
        "spell": "get off"
      },
      {
        "id": "s2-get-on",
        "en": "get on",
        "zh": "上车",
        "pos": "动词",
        "spell": "get on"
      },
      {
        "id": "s2-get-undressed",
        "en": "get undressed",
        "zh": "脱衣服",
        "pos": "动词",
        "spell": "get undressed"
      },
      {
        "id": "s2-get-up",
        "en": "get up",
        "zh": "起床",
        "pos": "动词",
        "spell": "get up"
      },
      {
        "id": "s2-glass",
        "en": "glass",
        "zh": "玻璃杯；玻璃",
        "pos": "名词",
        "spell": "glass"
      },
      {
        "id": "s2-go-shopping",
        "en": "go shopping",
        "zh": "去购物",
        "pos": "动词",
        "spell": "go shopping"
      },
      {
        "id": "s2-goal",
        "en": "goal",
        "zh": "进球；目标",
        "pos": "名词",
        "spell": "goal"
      },
      {
        "id": "s2-granddad",
        "en": "granddad",
        "zh": "爷爷；外公",
        "pos": "名词",
        "spell": "granddad"
      },
      {
        "id": "s2-granddaughter",
        "en": "granddaughter",
        "zh": "孙女；外孙女",
        "pos": "名词",
        "spell": "granddaughter"
      },
      {
        "id": "s2-grandparent",
        "en": "grandparent",
        "zh": "祖父母；外祖父母",
        "pos": "名词",
        "spell": "grandparent"
      },
      {
        "id": "s2-grandson",
        "en": "grandson",
        "zh": "孙子；外孙",
        "pos": "名词",
        "spell": "grandson"
      },
      {
        "id": "s2-grass",
        "en": "grass",
        "zh": "草",
        "pos": "名词",
        "spell": "grass"
      },
      {
        "id": "s2-ground",
        "en": "ground",
        "zh": "地面",
        "pos": "名词",
        "spell": "ground"
      },
      {
        "id": "s2-grow-up",
        "en": "grow up",
        "zh": "长大",
        "pos": "动词",
        "spell": "grow up"
      },
      {
        "id": "s2-grow",
        "en": "grow",
        "zh": "生长",
        "pos": "动词",
        "spell": "grow"
      },
      {
        "id": "s2-grown-up",
        "en": "grown-up",
        "zh": "成年人",
        "pos": "名词",
        "spell": "grown-up"
      },
      {
        "id": "s2-ham",
        "en": "ham",
        "zh": "火腿",
        "pos": "名词",
        "spell": "ham"
      },
      {
        "id": "s2-hamster",
        "en": "hamster",
        "zh": "仓鼠",
        "pos": "名词",
        "spell": "hamster"
      },
      {
        "id": "s2-have-got-to",
        "en": "have (got) to",
        "zh": "必须",
        "pos": "动词",
        "spell": "have to"
      },
      {
        "id": "s2-headache",
        "en": "headache",
        "zh": "头痛",
        "pos": "名词",
        "spell": "headache"
      },
      {
        "id": "s2-helmet",
        "en": "helmet",
        "zh": "头盔",
        "pos": "名词",
        "spell": "helmet"
      },
      {
        "id": "s2-help",
        "en": "help",
        "zh": "帮助",
        "pos": "动词",
        "spell": "help"
      },
      {
        "id": "s2-holiday",
        "en": "holiday",
        "zh": "假期",
        "pos": "名词",
        "spell": "holiday"
      },
      {
        "id": "s2-homework",
        "en": "homework",
        "zh": "作业",
        "pos": "名词",
        "spell": "homework"
      },
      {
        "id": "s2-honey",
        "en": "honey",
        "zh": "蜂蜜",
        "pos": "名词",
        "spell": "honey"
      },
      {
        "id": "s2-hop",
        "en": "hop",
        "zh": "单脚跳",
        "pos": "动词",
        "spell": "hop"
      },
      {
        "id": "s2-hospital",
        "en": "hospital",
        "zh": "医院",
        "pos": "名词",
        "spell": "hospital"
      },
      {
        "id": "s2-hot",
        "en": "hot",
        "zh": "热的",
        "pos": "形容词",
        "spell": "hot"
      },
      {
        "id": "s2-hotel",
        "en": "hotel",
        "zh": "旅馆",
        "pos": "名词",
        "spell": "hotel"
      },
      {
        "id": "s2-how",
        "en": "how",
        "zh": "怎样",
        "pos": "副词",
        "spell": "how"
      },
      {
        "id": "s2-how-much",
        "en": "how much",
        "zh": "多少（不可数）",
        "pos": "副词 / 疑问词",
        "spell": "how much"
      },
      {
        "id": "s2-how-often",
        "en": "how often",
        "zh": "多久一次",
        "pos": "副词 / 疑问词",
        "spell": "how often"
      },
      {
        "id": "s2-huge",
        "en": "huge",
        "zh": "巨大的",
        "pos": "形容词",
        "spell": "huge"
      },
      {
        "id": "s2-hundred",
        "en": "hundred",
        "zh": "百",
        "pos": "名词",
        "spell": "hundred"
      },
      {
        "id": "s2-hungry",
        "en": "hungry",
        "zh": "饿的",
        "pos": "形容词",
        "spell": "hungry"
      },
      {
        "id": "s2-hurt",
        "en": "hurt",
        "zh": "受伤；疼痛",
        "pos": "动词",
        "spell": "hurt"
      },
      {
        "id": "s2-ice",
        "en": "ice",
        "zh": "冰",
        "pos": "名词",
        "spell": "ice"
      },
      {
        "id": "s2-ice-skates",
        "en": "ice skates",
        "zh": "溜冰鞋",
        "pos": "名词",
        "spell": "ice skates"
      },
      {
        "id": "s2-ice-skating",
        "en": "ice skating",
        "zh": "溜冰",
        "pos": "名词",
        "spell": "ice skating"
      },
      {
        "id": "s2-idea",
        "en": "idea",
        "zh": "想法",
        "pos": "名词",
        "spell": "idea"
      },
      {
        "id": "s2-ill",
        "en": "ill",
        "zh": "生病的",
        "pos": "形容词",
        "spell": "ill"
      },
      {
        "id": "s2-inside",
        "en": "inside",
        "zh": "在里面",
        "pos": "副词 / 名词 / 介词",
        "spell": "inside"
      },
      {
        "id": "s2-interesting",
        "en": "interesting",
        "zh": "有趣的",
        "pos": "形容词",
        "spell": "interesting"
      },
      {
        "id": "s2-internet",
        "en": "internet",
        "zh": "互联网",
        "pos": "名词",
        "spell": "internet"
      },
      {
        "id": "s2-into",
        "en": "into",
        "zh": "进入",
        "pos": "介词",
        "spell": "into"
      },
      {
        "id": "s2-invite",
        "en": "invite",
        "zh": "邀请",
        "pos": "动词",
        "spell": "invite"
      },
      {
        "id": "s2-island",
        "en": "island",
        "zh": "岛",
        "pos": "名词",
        "spell": "island"
      },
      {
        "id": "s2-january",
        "en": "January",
        "zh": "一月",
        "pos": "名词",
        "spell": "January"
      },
      {
        "id": "s2-jam",
        "en": "jam",
        "zh": "果酱",
        "pos": "名词",
        "spell": "jam"
      },
      {
        "id": "s2-july",
        "en": "July",
        "zh": "七月",
        "pos": "名词",
        "spell": "July"
      },
      {
        "id": "s2-june",
        "en": "June",
        "zh": "六月",
        "pos": "名词",
        "spell": "June"
      },
      {
        "id": "s2-jungle",
        "en": "jungle",
        "zh": "丛林",
        "pos": "名词",
        "spell": "jungle"
      },
      {
        "id": "s2-kangaroo",
        "en": "kangaroo",
        "zh": "袋鼠",
        "pos": "名词",
        "spell": "kangaroo"
      },
      {
        "id": "s2-kick",
        "en": "kick",
        "zh": "踢",
        "pos": "名词",
        "spell": "kick"
      },
      {
        "id": "s2-kind",
        "en": "kind",
        "zh": "友善的；种类",
        "pos": "名词",
        "spell": "kind"
      },
      {
        "id": "s2-kitten",
        "en": "kitten",
        "zh": "小猫",
        "pos": "名词",
        "spell": "kitten"
      },
      {
        "id": "s2-lake",
        "en": "lake",
        "zh": "湖",
        "pos": "名词",
        "spell": "lake"
      },
      {
        "id": "s2-language",
        "en": "language",
        "zh": "语言",
        "pos": "名词",
        "spell": "language"
      },
      {
        "id": "s2-laptop",
        "en": "laptop",
        "zh": "笔记本电脑",
        "pos": "名词",
        "spell": "laptop"
      },
      {
        "id": "s2-last",
        "en": "last",
        "zh": "上一个；最后的",
        "pos": "形容词 / 副词",
        "spell": "last"
      },
      {
        "id": "s2-laugh",
        "en": "laugh",
        "zh": "笑",
        "pos": "名词 / 动词",
        "spell": "laugh"
      },
      {
        "id": "s2-lift-us-elevator",
        "en": "lift (US elevator)",
        "zh": "电梯",
        "pos": "名词",
        "spell": "lift"
      },
      {
        "id": "s2-little",
        "en": "little",
        "zh": "小的；少的",
        "pos": "形容词",
        "spell": "little"
      },
      {
        "id": "s2-look-for",
        "en": "look for",
        "zh": "寻找",
        "pos": "动词",
        "spell": "look for"
      },
      {
        "id": "s2-lose",
        "en": "lose",
        "zh": "丢失",
        "pos": "动词",
        "spell": "lose"
      },
      {
        "id": "s2-loud",
        "en": "loud",
        "zh": "大声的",
        "pos": "形容词",
        "spell": "loud"
      },
      {
        "id": "s2-loudly",
        "en": "loudly",
        "zh": "大声地",
        "pos": "副词",
        "spell": "loudly"
      },
      {
        "id": "s2-machine",
        "en": "machine",
        "zh": "机器",
        "pos": "名词",
        "spell": "machine"
      },
      {
        "id": "s2-map",
        "en": "map",
        "zh": "地图",
        "pos": "名词",
        "spell": "map"
      },
      {
        "id": "s2-march",
        "en": "March",
        "zh": "三月",
        "pos": "名词",
        "spell": "March"
      },
      {
        "id": "s2-market",
        "en": "market",
        "zh": "市场",
        "pos": "名词",
        "spell": "market"
      },
      {
        "id": "s2-maths-us-math",
        "en": "maths (US math)",
        "zh": "数学",
        "pos": "名词",
        "spell": "maths"
      },
      {
        "id": "s2-matter",
        "en": "matter",
        "zh": "要紧；事情",
        "pos": "名词",
        "spell": "matter"
      },
      {
        "id": "s2-may",
        "en": "May",
        "zh": "五月；可以",
        "pos": "名词",
        "spell": "May"
      },
      {
        "id": "s2-maybe",
        "en": "maybe",
        "zh": "也许",
        "pos": "副词",
        "spell": "maybe"
      },
      {
        "id": "s2-mean",
        "en": "mean",
        "zh": "意思是",
        "pos": "动词",
        "spell": "mean"
      },
      {
        "id": "s2-message",
        "en": "message",
        "zh": "消息",
        "pos": "名词",
        "spell": "message"
      },
      {
        "id": "s2-milkshake",
        "en": "milkshake",
        "zh": "奶昔",
        "pos": "名词",
        "spell": "milkshake"
      },
      {
        "id": "s2-minute",
        "en": "minute",
        "zh": "分钟",
        "pos": "名词",
        "spell": "minute"
      },
      {
        "id": "s2-mistake",
        "en": "mistake",
        "zh": "错误",
        "pos": "名词",
        "spell": "mistake"
      },
      {
        "id": "s2-model",
        "en": "model",
        "zh": "模型；模特",
        "pos": "名词",
        "spell": "model"
      },
      {
        "id": "s2-monday",
        "en": "Monday",
        "zh": "星期一",
        "pos": "名词",
        "spell": "Monday"
      },
      {
        "id": "s2-moon",
        "en": "moon",
        "zh": "月亮",
        "pos": "名词",
        "spell": "moon"
      },
      {
        "id": "s2-more",
        "en": "more",
        "zh": "更多",
        "pos": "副词 / 限定词 / 代词",
        "spell": "more"
      },
      {
        "id": "s2-most",
        "en": "most",
        "zh": "最多的",
        "pos": "副词 / 限定词 / 代词",
        "spell": "most"
      },
      {
        "id": "s2-mountain",
        "en": "mountain",
        "zh": "山",
        "pos": "名词",
        "spell": "mountain"
      },
      {
        "id": "s2-moustache",
        "en": "moustache",
        "zh": "小胡子",
        "pos": "名词",
        "spell": "moustache"
      },
      {
        "id": "s2-move",
        "en": "move",
        "zh": "移动",
        "pos": "动词",
        "spell": "move"
      },
      {
        "id": "s2-movie-uk-film",
        "en": "movie (UK film)",
        "zh": "电影",
        "pos": "名词",
        "spell": "movie"
      },
      {
        "id": "s2-must",
        "en": "must",
        "zh": "必须",
        "pos": "动词",
        "spell": "must"
      },
      {
        "id": "s2-naughty",
        "en": "naughty",
        "zh": "淘气的",
        "pos": "形容词",
        "spell": "naughty"
      },
      {
        "id": "s2-near",
        "en": "near",
        "zh": "靠近",
        "pos": "副词 / 介词",
        "spell": "near"
      },
      {
        "id": "s2-neck",
        "en": "neck",
        "zh": "脖子",
        "pos": "名词",
        "spell": "neck"
      },
      {
        "id": "s2-need",
        "en": "need",
        "zh": "需要",
        "pos": "动词",
        "spell": "need"
      },
      {
        "id": "s2-net",
        "en": "net",
        "zh": "网",
        "pos": "名词",
        "spell": "net"
      },
      {
        "id": "s2-never",
        "en": "never",
        "zh": "从不",
        "pos": "副词",
        "spell": "never"
      },
      {
        "id": "s2-newspaper",
        "en": "newspaper",
        "zh": "报纸",
        "pos": "名词",
        "spell": "newspaper"
      },
      {
        "id": "s2-noise",
        "en": "noise",
        "zh": "噪音",
        "pos": "名词",
        "spell": "noise"
      },
      {
        "id": "s2-nothing",
        "en": "nothing",
        "zh": "没有东西",
        "pos": "代词",
        "spell": "nothing"
      },
      {
        "id": "s2-november",
        "en": "November",
        "zh": "十一月",
        "pos": "名词",
        "spell": "November"
      },
      {
        "id": "s2-nurse",
        "en": "nurse",
        "zh": "护士",
        "pos": "名词",
        "spell": "nurse"
      },
      {
        "id": "s2-october",
        "en": "October",
        "zh": "十月",
        "pos": "名词",
        "spell": "October"
      },
      {
        "id": "s2-off",
        "en": "off",
        "zh": "离开；关掉",
        "pos": "副词 / 介词",
        "spell": "off"
      },
      {
        "id": "s2-often",
        "en": "often",
        "zh": "经常",
        "pos": "副词",
        "spell": "often"
      },
      {
        "id": "s2-only",
        "en": "only",
        "zh": "仅仅",
        "pos": "副词",
        "spell": "only"
      },
      {
        "id": "s2-opposite",
        "en": "opposite",
        "zh": "相反的；在对面",
        "pos": "介词",
        "spell": "opposite"
      },
      {
        "id": "s2-out",
        "en": "out",
        "zh": "出来",
        "pos": "副词",
        "spell": "out"
      },
      {
        "id": "s2-out-of",
        "en": "out of",
        "zh": "从……出来",
        "pos": "介词",
        "spell": "out of"
      },
      {
        "id": "s2-outside",
        "en": "outside",
        "zh": "在外面",
        "pos": "副词 / 名词 / 介词",
        "spell": "outside"
      },
      {
        "id": "s2-pair",
        "en": "pair",
        "zh": "一双；一对",
        "pos": "名词",
        "spell": "pair"
      },
      {
        "id": "s2-pancake",
        "en": "pancake",
        "zh": "薄煎饼",
        "pos": "名词",
        "spell": "pancake"
      },
      {
        "id": "s2-panda",
        "en": "panda",
        "zh": "熊猫",
        "pos": "名词",
        "spell": "panda"
      },
      {
        "id": "s2-parent",
        "en": "parent",
        "zh": "父或母",
        "pos": "名词",
        "spell": "parent"
      },
      {
        "id": "s2-parrot",
        "en": "parrot",
        "zh": "鹦鹉",
        "pos": "名词",
        "spell": "parrot"
      },
      {
        "id": "s2-party",
        "en": "party",
        "zh": "聚会",
        "pos": "名词",
        "spell": "party"
      },
      {
        "id": "s2-pasta",
        "en": "pasta",
        "zh": "意大利面",
        "pos": "名词",
        "spell": "pasta"
      },
      {
        "id": "s2-penguin",
        "en": "penguin",
        "zh": "企鹅",
        "pos": "名词",
        "spell": "penguin"
      },
      {
        "id": "s2-pizza",
        "en": "pizza",
        "zh": "比萨饼",
        "pos": "名词",
        "spell": "pizza"
      },
      {
        "id": "s2-place",
        "en": "place",
        "zh": "地方",
        "pos": "名词",
        "spell": "place"
      },
      {
        "id": "s2-plant",
        "en": "plant",
        "zh": "植物；种植",
        "pos": "名词 / 动词",
        "spell": "plant"
      },
      {
        "id": "s2-plate",
        "en": "plate",
        "zh": "盘子",
        "pos": "名词",
        "spell": "plate"
      },
      {
        "id": "s2-player",
        "en": "player",
        "zh": "选手；演奏者",
        "pos": "名词",
        "spell": "player"
      },
      {
        "id": "s2-pool",
        "en": "pool",
        "zh": "水池",
        "pos": "名词",
        "spell": "pool"
      },
      {
        "id": "s2-pop-star",
        "en": "pop star",
        "zh": "流行歌星",
        "pos": "名词",
        "spell": "pop star"
      },
      {
        "id": "s2-postcard",
        "en": "postcard",
        "zh": "明信片",
        "pos": "名词",
        "spell": "postcard"
      },
      {
        "id": "s2-postman",
        "en": "postman",
        "zh": "邮递员",
        "pos": "名词",
        "spell": "postman"
      },
      {
        "id": "s2-pound",
        "en": "pound",
        "zh": "英镑",
        "pos": "名词",
        "spell": "pound"
      },
      {
        "id": "s2-practice",
        "en": "practice",
        "zh": "练习（名）",
        "pos": "名词",
        "spell": "practice"
      },
      {
        "id": "s2-practise",
        "en": "practise",
        "zh": "练习（动）",
        "pos": "动词",
        "spell": "practise"
      },
      {
        "id": "s2-present",
        "en": "present",
        "zh": "礼物；现在的",
        "pos": "名词",
        "spell": "present"
      },
      {
        "id": "s2-pretty",
        "en": "pretty",
        "zh": "漂亮的",
        "pos": "形容词",
        "spell": "pretty"
      },
      {
        "id": "s2-puppy",
        "en": "puppy",
        "zh": "小狗",
        "pos": "名词",
        "spell": "puppy"
      },
      {
        "id": "s2-put-on",
        "en": "put on",
        "zh": "穿上",
        "pos": "动词",
        "spell": "put on"
      },
      {
        "id": "s2-quick",
        "en": "quick",
        "zh": "快的",
        "pos": "形容词",
        "spell": "quick"
      },
      {
        "id": "s2-quickly",
        "en": "quickly",
        "zh": "迅速地",
        "pos": "副词",
        "spell": "quickly"
      },
      {
        "id": "s2-quiet",
        "en": "quiet",
        "zh": "安静的",
        "pos": "形容词",
        "spell": "quiet"
      },
      {
        "id": "s2-quietly",
        "en": "quietly",
        "zh": "安静地",
        "pos": "副词",
        "spell": "quietly"
      },
      {
        "id": "s2-rainbow",
        "en": "rainbow",
        "zh": "彩虹",
        "pos": "名词",
        "spell": "rainbow"
      },
      {
        "id": "s2-ride",
        "en": "ride",
        "zh": "骑",
        "pos": "名词",
        "spell": "ride"
      },
      {
        "id": "s2-river",
        "en": "river",
        "zh": "河",
        "pos": "名词",
        "spell": "river"
      },
      {
        "id": "s2-road",
        "en": "road",
        "zh": "路",
        "pos": "名词",
        "spell": "road"
      },
      {
        "id": "s2-rock",
        "en": "rock",
        "zh": "岩石；摇滚",
        "pos": "名词",
        "spell": "rock"
      },
      {
        "id": "s2-roller-skates",
        "en": "roller skates",
        "zh": "旱冰鞋",
        "pos": "名词",
        "spell": "roller skates"
      },
      {
        "id": "s2-roller-skating",
        "en": "roller skating",
        "zh": "滑旱冰",
        "pos": "名词",
        "spell": "roller skating"
      },
      {
        "id": "s2-roof",
        "en": "roof",
        "zh": "屋顶",
        "pos": "名词",
        "spell": "roof"
      },
      {
        "id": "s2-round",
        "en": "round",
        "zh": "圆形的；围绕",
        "pos": "形容词 / 副词 / 介词",
        "spell": "round"
      },
      {
        "id": "s2-safe",
        "en": "safe",
        "zh": "安全的",
        "pos": "形容词",
        "spell": "safe"
      },
      {
        "id": "s2-sail",
        "en": "sail",
        "zh": "航行",
        "pos": "名词 / 动词",
        "spell": "sail"
      },
      {
        "id": "s2-salad",
        "en": "salad",
        "zh": "沙拉",
        "pos": "名词",
        "spell": "salad"
      },
      {
        "id": "s2-sandwich",
        "en": "sandwich",
        "zh": "三明治",
        "pos": "名词",
        "spell": "sandwich"
      },
      {
        "id": "s2-saturday",
        "en": "Saturday",
        "zh": "星期六",
        "pos": "名词",
        "spell": "Saturday"
      },
      {
        "id": "s2-sauce",
        "en": "sauce",
        "zh": "酱汁",
        "pos": "名词",
        "spell": "sauce"
      },
      {
        "id": "s2-scarf",
        "en": "scarf",
        "zh": "围巾",
        "pos": "名词",
        "spell": "scarf"
      },
      {
        "id": "s2-score",
        "en": "score",
        "zh": "得分",
        "pos": "动词",
        "spell": "score"
      },
      {
        "id": "s2-seat",
        "en": "seat",
        "zh": "座位",
        "pos": "名词",
        "spell": "seat"
      },
      {
        "id": "s2-second",
        "en": "second",
        "zh": "第二；秒",
        "pos": "形容词 / 副词",
        "spell": "second"
      },
      {
        "id": "s2-send",
        "en": "send",
        "zh": "发送",
        "pos": "动词",
        "spell": "send"
      },
      {
        "id": "s2-september",
        "en": "September",
        "zh": "九月",
        "pos": "名词",
        "spell": "September"
      },
      {
        "id": "s2-shall",
        "en": "shall",
        "zh": "将；……好吗",
        "pos": "动词",
        "spell": "shall"
      },
      {
        "id": "s2-shape",
        "en": "shape",
        "zh": "形状",
        "pos": "名词",
        "spell": "shape"
      },
      {
        "id": "s2-shark",
        "en": "shark",
        "zh": "鲨鱼",
        "pos": "名词",
        "spell": "shark"
      },
      {
        "id": "s2-shop",
        "en": "shop",
        "zh": "购物；商店",
        "pos": "动词",
        "spell": "shop"
      },
      {
        "id": "s2-shopping-centre",
        "en": "shopping centre",
        "zh": "购物中心",
        "pos": "名词",
        "spell": "shopping centre"
      },
      {
        "id": "s2-shopping",
        "en": "shopping",
        "zh": "购物",
        "pos": "名词",
        "spell": "shopping"
      },
      {
        "id": "s2-shoulder",
        "en": "shoulder",
        "zh": "肩膀",
        "pos": "名词",
        "spell": "shoulder"
      },
      {
        "id": "s2-shout",
        "en": "shout",
        "zh": "喊",
        "pos": "动词",
        "spell": "shout"
      },
      {
        "id": "s2-shower",
        "en": "shower",
        "zh": "淋浴",
        "pos": "名词",
        "spell": "shower"
      },
      {
        "id": "s2-sick",
        "en": "sick",
        "zh": "生病的",
        "pos": "形容词",
        "spell": "sick"
      },
      {
        "id": "s2-skate",
        "en": "skate",
        "zh": "滑冰",
        "pos": "名词 / 动词",
        "spell": "skate"
      },
      {
        "id": "s2-skip",
        "en": "skip",
        "zh": "跳绳；跳过",
        "pos": "动词",
        "spell": "skip"
      },
      {
        "id": "s2-slow",
        "en": "slow",
        "zh": "慢的",
        "pos": "形容词",
        "spell": "slow"
      },
      {
        "id": "s2-slowly",
        "en": "slowly",
        "zh": "慢慢地",
        "pos": "副词",
        "spell": "slowly"
      },
      {
        "id": "s2-smart",
        "en": "smart",
        "zh": "聪明的；整齐的",
        "pos": "形容词",
        "spell": "smart"
      },
      {
        "id": "s2-snack",
        "en": "snack",
        "zh": "零食",
        "pos": "名词",
        "spell": "snack"
      },
      {
        "id": "s2-snail",
        "en": "snail",
        "zh": "蜗牛",
        "pos": "名词",
        "spell": "snail"
      },
      {
        "id": "s2-soft",
        "en": "soft",
        "zh": "柔软的",
        "pos": "形容词",
        "spell": "soft"
      },
      {
        "id": "s2-somebody",
        "en": "somebody",
        "zh": "某人",
        "pos": "代词",
        "spell": "somebody"
      },
      {
        "id": "s2-someone",
        "en": "someone",
        "zh": "某人",
        "pos": "代词",
        "spell": "someone"
      },
      {
        "id": "s2-something",
        "en": "something",
        "zh": "某事；某物",
        "pos": "代词",
        "spell": "something"
      },
      {
        "id": "s2-son",
        "en": "son",
        "zh": "儿子",
        "pos": "名词",
        "spell": "son"
      },
      {
        "id": "s2-soup",
        "en": "soup",
        "zh": "汤",
        "pos": "名词",
        "spell": "soup"
      },
      {
        "id": "s2-space",
        "en": "space",
        "zh": "太空；空间",
        "pos": "名词",
        "spell": "space"
      },
      {
        "id": "s2-speak",
        "en": "speak",
        "zh": "说",
        "pos": "动词",
        "spell": "speak"
      },
      {
        "id": "s2-spend",
        "en": "spend",
        "zh": "花费",
        "pos": "动词",
        "spell": "spend"
      },
      {
        "id": "s2-spring",
        "en": "spring",
        "zh": "春天",
        "pos": "名词",
        "spell": "spring"
      },
      {
        "id": "s2-square",
        "en": "square",
        "zh": "正方形；广场",
        "pos": "形容词 / 名词",
        "spell": "square"
      },
      {
        "id": "s2-stair-s",
        "en": "stair(s)",
        "zh": "楼梯",
        "pos": "名词",
        "spell": "stair"
      },
      {
        "id": "s2-star",
        "en": "star",
        "zh": "星星；明星",
        "pos": "名词",
        "spell": "star"
      },
      {
        "id": "s2-station",
        "en": "station",
        "zh": "车站",
        "pos": "名词",
        "spell": "station"
      },
      {
        "id": "s2-stay",
        "en": "stay",
        "zh": "停留",
        "pos": "动词",
        "spell": "stay"
      },
      {
        "id": "s2-stomach",
        "en": "stomach",
        "zh": "胃；肚子",
        "pos": "名词",
        "spell": "stomach"
      },
      {
        "id": "s2-stomach-ache",
        "en": "stomach-ache",
        "zh": "肚子痛",
        "pos": "名词",
        "spell": "stomach-ache"
      },
      {
        "id": "s2-straight",
        "en": "straight",
        "zh": "直的",
        "pos": "形容词",
        "spell": "straight"
      },
      {
        "id": "s2-strong",
        "en": "strong",
        "zh": "强壮的",
        "pos": "形容词",
        "spell": "strong"
      },
      {
        "id": "s2-student",
        "en": "student",
        "zh": "学生",
        "pos": "名词",
        "spell": "student"
      },
      {
        "id": "s2-subject",
        "en": "subject",
        "zh": "科目",
        "pos": "名词",
        "spell": "subject"
      },
      {
        "id": "s2-summer",
        "en": "summer",
        "zh": "夏天",
        "pos": "名词",
        "spell": "summer"
      },
      {
        "id": "s2-sunday",
        "en": "Sunday",
        "zh": "星期日",
        "pos": "名词",
        "spell": "Sunday"
      },
      {
        "id": "s2-supermarket",
        "en": "supermarket",
        "zh": "超市",
        "pos": "名词",
        "spell": "supermarket"
      },
      {
        "id": "s2-supper",
        "en": "supper",
        "zh": "晚饭",
        "pos": "名词",
        "spell": "supper"
      },
      {
        "id": "s2-surprised",
        "en": "surprised",
        "zh": "吃惊的",
        "pos": "形容词",
        "spell": "surprised"
      },
      {
        "id": "s2-sweater",
        "en": "sweater",
        "zh": "毛衣",
        "pos": "名词",
        "spell": "sweater"
      },
      {
        "id": "s2-sweet",
        "en": "sweet",
        "zh": "甜的；糖果",
        "pos": "形容词",
        "spell": "sweet"
      },
      {
        "id": "s2-swim",
        "en": "swim",
        "zh": "游泳",
        "pos": "名词",
        "spell": "swim"
      },
      {
        "id": "s2-swimming-pool",
        "en": "swimming pool",
        "zh": "游泳池",
        "pos": "名词",
        "spell": "swimming pool"
      },
      {
        "id": "s2-swimsuit",
        "en": "swimsuit",
        "zh": "泳衣",
        "pos": "名词",
        "spell": "swimsuit"
      },
      {
        "id": "s2-take",
        "en": "take",
        "zh": "拿；乘坐",
        "pos": "动词",
        "spell": "take"
      },
      {
        "id": "s2-tall",
        "en": "tall",
        "zh": "高的",
        "pos": "形容词",
        "spell": "tall"
      },
      {
        "id": "s2-tea",
        "en": "tea",
        "zh": "茶",
        "pos": "名词",
        "spell": "tea"
      },
      {
        "id": "s2-teach",
        "en": "teach",
        "zh": "教",
        "pos": "动词",
        "spell": "teach"
      },
      {
        "id": "s2-temperature",
        "en": "temperature",
        "zh": "温度；体温",
        "pos": "名词",
        "spell": "temperature"
      },
      {
        "id": "s2-terrible",
        "en": "terrible",
        "zh": "糟糕的",
        "pos": "形容词",
        "spell": "terrible"
      },
      {
        "id": "s2-text",
        "en": "text",
        "zh": "短信；文本",
        "pos": "名词 / 动词",
        "spell": "text"
      },
      {
        "id": "s2-than",
        "en": "than",
        "zh": "比",
        "pos": "连词 / 介词",
        "spell": "than"
      },
      {
        "id": "s2-then",
        "en": "then",
        "zh": "然后",
        "pos": "副词",
        "spell": "then"
      },
      {
        "id": "s2-thin",
        "en": "thin",
        "zh": "瘦的；薄的",
        "pos": "形容词",
        "spell": "thin"
      },
      {
        "id": "s2-think",
        "en": "think",
        "zh": "想",
        "pos": "动词",
        "spell": "think"
      },
      {
        "id": "s2-third",
        "en": "third",
        "zh": "第三",
        "pos": "形容词 / 副词",
        "spell": "third"
      },
      {
        "id": "s2-thirsty",
        "en": "thirsty",
        "zh": "渴的",
        "pos": "形容词",
        "spell": "thirsty"
      },
      {
        "id": "s2-thursday",
        "en": "Thursday",
        "zh": "星期四",
        "pos": "名词",
        "spell": "Thursday"
      },
      {
        "id": "s2-tired",
        "en": "tired",
        "zh": "累的",
        "pos": "形容词",
        "spell": "tired"
      },
      {
        "id": "s2-tomorrow",
        "en": "tomorrow",
        "zh": "明天",
        "pos": "副词 / 名词",
        "spell": "tomorrow"
      },
      {
        "id": "s2-toothache",
        "en": "toothache",
        "zh": "牙痛",
        "pos": "名词",
        "spell": "toothache"
      },
      {
        "id": "s2-toothbrush",
        "en": "toothbrush",
        "zh": "牙刷",
        "pos": "名词",
        "spell": "toothbrush"
      },
      {
        "id": "s2-toothpaste",
        "en": "toothpaste",
        "zh": "牙膏",
        "pos": "名词",
        "spell": "toothpaste"
      },
      {
        "id": "s2-top",
        "en": "top",
        "zh": "顶部",
        "pos": "形容词 / 名词",
        "spell": "top"
      },
      {
        "id": "s2-towel",
        "en": "towel",
        "zh": "毛巾",
        "pos": "名词",
        "spell": "towel"
      },
      {
        "id": "s2-town",
        "en": "town",
        "zh": "城镇",
        "pos": "名词",
        "spell": "town"
      },
      {
        "id": "s2-tractor",
        "en": "tractor",
        "zh": "拖拉机",
        "pos": "名词",
        "spell": "tractor"
      },
      {
        "id": "s2-travel",
        "en": "travel",
        "zh": "旅行",
        "pos": "动词",
        "spell": "travel"
      },
      {
        "id": "s2-treasure",
        "en": "treasure",
        "zh": "宝藏",
        "pos": "名词",
        "spell": "treasure"
      },
      {
        "id": "s2-trip",
        "en": "trip",
        "zh": "旅行",
        "pos": "名词",
        "spell": "trip"
      },
      {
        "id": "s2-tuesday",
        "en": "Tuesday",
        "zh": "星期二",
        "pos": "名词",
        "spell": "Tuesday"
      },
      {
        "id": "s2-uncle",
        "en": "uncle",
        "zh": "叔叔；舅舅",
        "pos": "名词",
        "spell": "uncle"
      },
      {
        "id": "s2-up",
        "en": "up",
        "zh": "向上",
        "pos": "副词 / 介词",
        "spell": "up"
      },
      {
        "id": "s2-upstairs",
        "en": "upstairs",
        "zh": "在楼上",
        "pos": "副词 / 名词",
        "spell": "upstairs"
      },
      {
        "id": "s2-vegetable",
        "en": "vegetable",
        "zh": "蔬菜",
        "pos": "名词",
        "spell": "vegetable"
      },
      {
        "id": "s2-video",
        "en": "video",
        "zh": "视频",
        "pos": "名词 / 动词",
        "spell": "video"
      },
      {
        "id": "s2-village",
        "en": "village",
        "zh": "村庄",
        "pos": "名词",
        "spell": "village"
      },
      {
        "id": "s2-wait",
        "en": "wait",
        "zh": "等待",
        "pos": "动词",
        "spell": "wait"
      },
      {
        "id": "s2-wake-up",
        "en": "wake (up)",
        "zh": "醒来",
        "pos": "动词",
        "spell": "wake"
      },
      {
        "id": "s2-walk",
        "en": "walk",
        "zh": "走；散步",
        "pos": "名词",
        "spell": "walk"
      },
      {
        "id": "s2-wardrobe",
        "en": "wardrobe",
        "zh": "衣柜",
        "pos": "名词",
        "spell": "wardrobe"
      },
      {
        "id": "s2-wash",
        "en": "wash",
        "zh": "洗",
        "pos": "名词 / 动词",
        "spell": "wash"
      },
      {
        "id": "s2-water",
        "en": "water",
        "zh": "水",
        "pos": "动词",
        "spell": "water"
      },
      {
        "id": "s2-waterfall",
        "en": "waterfall",
        "zh": "瀑布",
        "pos": "名词",
        "spell": "waterfall"
      },
      {
        "id": "s2-wave",
        "en": "wave",
        "zh": "挥手；波浪",
        "pos": "名词",
        "spell": "wave"
      },
      {
        "id": "s2-weak",
        "en": "weak",
        "zh": "虚弱的",
        "pos": "形容词",
        "spell": "weak"
      },
      {
        "id": "s2-website",
        "en": "website",
        "zh": "网站",
        "pos": "名词",
        "spell": "website"
      },
      {
        "id": "s2-wednesday",
        "en": "Wednesday",
        "zh": "星期三",
        "pos": "名词",
        "spell": "Wednesday"
      },
      {
        "id": "s2-week",
        "en": "week",
        "zh": "星期",
        "pos": "名词",
        "spell": "week"
      },
      {
        "id": "s2-weekend",
        "en": "weekend",
        "zh": "周末",
        "pos": "名词",
        "spell": "weekend"
      },
      {
        "id": "s2-well",
        "en": "well",
        "zh": "好地；健康的",
        "pos": "形容词 / 副词",
        "spell": "well"
      },
      {
        "id": "s2-wet",
        "en": "wet",
        "zh": "湿的",
        "pos": "形容词",
        "spell": "wet"
      },
      {
        "id": "s2-whale",
        "en": "whale",
        "zh": "鲸",
        "pos": "名词",
        "spell": "whale"
      },
      {
        "id": "s2-when",
        "en": "when",
        "zh": "什么时候",
        "pos": "副词 / 连词 / 疑问词",
        "spell": "when"
      },
      {
        "id": "s2-where",
        "en": "where",
        "zh": "哪里",
        "pos": "代词",
        "spell": "where"
      },
      {
        "id": "s2-why",
        "en": "why",
        "zh": "为什么",
        "pos": "疑问词",
        "spell": "why"
      },
      {
        "id": "s2-wind",
        "en": "wind",
        "zh": "风",
        "pos": "名词",
        "spell": "wind"
      },
      {
        "id": "s2-windy",
        "en": "windy",
        "zh": "有风的",
        "pos": "形容词",
        "spell": "windy"
      },
      {
        "id": "s2-winter",
        "en": "winter",
        "zh": "冬天",
        "pos": "名词",
        "spell": "winter"
      },
      {
        "id": "s2-work",
        "en": "work",
        "zh": "工作",
        "pos": "名词 / 动词",
        "spell": "work"
      },
      {
        "id": "s2-world",
        "en": "world",
        "zh": "世界",
        "pos": "名词",
        "spell": "world"
      },
      {
        "id": "s2-worse",
        "en": "worse",
        "zh": "更差的",
        "pos": "形容词 / 副词",
        "spell": "worse"
      },
      {
        "id": "s2-worst",
        "en": "worst",
        "zh": "最差的",
        "pos": "形容词 / 副词",
        "spell": "worst"
      },
      {
        "id": "s2-would",
        "en": "would",
        "zh": "将；愿意",
        "pos": "动词",
        "spell": "would"
      },
      {
        "id": "s2-wrong",
        "en": "wrong",
        "zh": "错误的",
        "pos": "形容词",
        "spell": "wrong"
      },
      {
        "id": "s2-yesterday",
        "en": "yesterday",
        "zh": "昨天",
        "pos": "副词 / 名词",
        "spell": "yesterday"
      },
      {
        "id": "s2-a-m",
        "en": "a.m.",
        "zh": "上午",
        "pos": "名词",
        "spell": "a.m."
      },
      {
        "id": "s2-p-m",
        "en": "p.m.",
        "zh": "下午",
        "pos": "名词",
        "spell": "p.m."
      },
      {
        "id": "s2-bat-sports-equipment",
        "en": "bat (sports equipment)",
        "zh": "球拍；蝙蝠",
        "pos": "名词",
        "spell": "bat"
      },
      {
        "id": "s2-city-town-centre-us-center",
        "en": "city/town centre (US center)",
        "zh": "市中心",
        "pos": "名词",
        "spell": "city"
      },
      {
        "id": "s2-neighbour",
        "en": "neighbour",
        "zh": "邻居",
        "pos": "名词",
        "spell": "neighbour"
      },
      {
        "id": "s2-rocket",
        "en": "rocket",
        "zh": "火箭",
        "pos": "名词",
        "spell": "rocket"
      },
      {
        "id": "s2-sports-centre-us-center",
        "en": "sports centre (US center)",
        "zh": "体育中心",
        "pos": "名词",
        "spell": "sports centre"
      },
      {
        "id": "s2-take-off",
        "en": "take off",
        "zh": "脱下；起飞",
        "pos": "动词",
        "spell": "take off"
      },
      {
        "id": "hippo2-could",
        "en": "could",
        "zh": "能；可以（过去式）",
        "pos": "动词",
        "spell": "could"
      }
    ],
    "hippo3": [
      {
        "id": "s3-a-few",
        "en": "a few",
        "zh": "一些（可数）",
        "pos": "限定词",
        "spell": "a few"
      },
      {
        "id": "s3-a-little",
        "en": "a little",
        "zh": "一点（不可数）",
        "pos": "副词 / 限定词",
        "spell": "a little"
      },
      {
        "id": "s3-across",
        "en": "across",
        "zh": "穿过",
        "pos": "介词",
        "spell": "across"
      },
      {
        "id": "s3-act",
        "en": "act",
        "zh": "表演；行动",
        "pos": "动词",
        "spell": "act"
      },
      {
        "id": "s3-actor",
        "en": "actor",
        "zh": "演员",
        "pos": "名词",
        "spell": "actor"
      },
      {
        "id": "s3-actually",
        "en": "actually",
        "zh": "实际上",
        "pos": "副词",
        "spell": "actually"
      },
      {
        "id": "s3-adventure",
        "en": "adventure",
        "zh": "冒险",
        "pos": "名词",
        "spell": "adventure"
      },
      {
        "id": "s3-after",
        "en": "after",
        "zh": "在……之后",
        "pos": "副词 / 连词",
        "spell": "after"
      },
      {
        "id": "s3-ago",
        "en": "ago",
        "zh": "以前",
        "pos": "副词",
        "spell": "ago"
      },
      {
        "id": "s3-agree",
        "en": "agree",
        "zh": "同意",
        "pos": "动词",
        "spell": "agree"
      },
      {
        "id": "s3-air",
        "en": "air",
        "zh": "空气",
        "pos": "名词",
        "spell": "air"
      },
      {
        "id": "s3-alone",
        "en": "alone",
        "zh": "单独的",
        "pos": "形容词",
        "spell": "alone"
      },
      {
        "id": "s3-already",
        "en": "already",
        "zh": "已经",
        "pos": "副词",
        "spell": "already"
      },
      {
        "id": "s3-also",
        "en": "also",
        "zh": "也",
        "pos": "副词",
        "spell": "also"
      },
      {
        "id": "s3-amazing",
        "en": "amazing",
        "zh": "令人惊叹的",
        "pos": "形容词 / 感叹",
        "spell": "amazing"
      },
      {
        "id": "s3-ambulance",
        "en": "ambulance",
        "zh": "救护车",
        "pos": "名词",
        "spell": "ambulance"
      },
      {
        "id": "s3-anyone",
        "en": "anyone",
        "zh": "任何人",
        "pos": "代词",
        "spell": "anyone"
      },
      {
        "id": "s3-anything",
        "en": "anything",
        "zh": "任何事物",
        "pos": "代词",
        "spell": "anything"
      },
      {
        "id": "s3-anytime",
        "en": "anytime",
        "zh": "任何时候",
        "pos": "副词",
        "spell": "anytime"
      },
      {
        "id": "s3-anywhere",
        "en": "anywhere",
        "zh": "任何地方",
        "pos": "副词",
        "spell": "anywhere"
      },
      {
        "id": "s3-appear",
        "en": "appear",
        "zh": "出现",
        "pos": "动词",
        "spell": "appear"
      },
      {
        "id": "s3-arrive",
        "en": "arrive",
        "zh": "到达",
        "pos": "动词",
        "spell": "arrive"
      },
      {
        "id": "s3-art",
        "en": "art",
        "zh": "艺术",
        "pos": "名词",
        "spell": "art"
      },
      {
        "id": "s3-article",
        "en": "article",
        "zh": "文章",
        "pos": "名词",
        "spell": "article"
      },
      {
        "id": "s3-artist",
        "en": "artist",
        "zh": "艺术家",
        "pos": "名词",
        "spell": "artist"
      },
      {
        "id": "s3-as-as",
        "en": "as ... as",
        "zh": "和……一样",
        "pos": "副词",
        "spell": "as ... as"
      },
      {
        "id": "s3-as",
        "en": "as",
        "zh": "作为；当",
        "pos": "副词",
        "spell": "as"
      },
      {
        "id": "s3-astronaut",
        "en": "astronaut",
        "zh": "宇航员",
        "pos": "名词",
        "spell": "astronaut"
      },
      {
        "id": "s3-at-the-moment",
        "en": "at the moment",
        "zh": "此刻",
        "pos": "副词",
        "spell": "at the moment"
      },
      {
        "id": "s3-away",
        "en": "away",
        "zh": "离开",
        "pos": "副词",
        "spell": "away"
      },
      {
        "id": "s3-babysitter",
        "en": "babysitter",
        "zh": "保姆",
        "pos": "名词",
        "spell": "babysitter"
      },
      {
        "id": "s3-ballerina",
        "en": "ballerina",
        "zh": "芭蕾舞女演员",
        "pos": "名词",
        "spell": "ballerina"
      },
      {
        "id": "s3-bandage",
        "en": "bandage",
        "zh": "绷带",
        "pos": "名词",
        "spell": "bandage"
      },
      {
        "id": "s3-bank",
        "en": "bank",
        "zh": "银行",
        "pos": "名词",
        "spell": "bank"
      },
      {
        "id": "s3-beetle",
        "en": "beetle",
        "zh": "甲虫",
        "pos": "名词",
        "spell": "beetle"
      },
      {
        "id": "s3-before",
        "en": "before",
        "zh": "在……之前",
        "pos": "副词 / 连词",
        "spell": "before"
      },
      {
        "id": "s3-begin",
        "en": "begin",
        "zh": "开始",
        "pos": "动词",
        "spell": "begin"
      },
      {
        "id": "s3-believe",
        "en": "believe",
        "zh": "相信",
        "pos": "动词",
        "spell": "believe"
      },
      {
        "id": "s3-belt",
        "en": "belt",
        "zh": "腰带",
        "pos": "名词",
        "spell": "belt"
      },
      {
        "id": "s3-bicycle",
        "en": "bicycle",
        "zh": "自行车",
        "pos": "名词",
        "spell": "bicycle"
      },
      {
        "id": "s3-bin",
        "en": "bin",
        "zh": "垃圾桶",
        "pos": "名词",
        "spell": "bin"
      },
      {
        "id": "s3-borrow",
        "en": "borrow",
        "zh": "借入",
        "pos": "动词",
        "spell": "borrow"
      },
      {
        "id": "s3-bracelet",
        "en": "bracelet",
        "zh": "手镯",
        "pos": "名词",
        "spell": "bracelet"
      },
      {
        "id": "s3-break",
        "en": "break",
        "zh": "打破；休息",
        "pos": "动词",
        "spell": "break"
      },
      {
        "id": "s3-bridge",
        "en": "bridge",
        "zh": "桥",
        "pos": "名词",
        "spell": "bridge"
      },
      {
        "id": "s3-broken",
        "en": "broken",
        "zh": "坏掉的",
        "pos": "形容词",
        "spell": "broken"
      },
      {
        "id": "s3-brush",
        "en": "brush",
        "zh": "刷子；刷",
        "pos": "名词 / 动词",
        "spell": "brush"
      },
      {
        "id": "s3-burn",
        "en": "burn",
        "zh": "燃烧；烫伤",
        "pos": "动词",
        "spell": "burn"
      },
      {
        "id": "s3-business",
        "en": "business",
        "zh": "商业；生意",
        "pos": "名词",
        "spell": "business"
      },
      {
        "id": "s3-butter",
        "en": "butter",
        "zh": "黄油",
        "pos": "名词",
        "spell": "butter"
      },
      {
        "id": "s3-butterfly",
        "en": "butterfly",
        "zh": "蝴蝶",
        "pos": "名词",
        "spell": "butterfly"
      },
      {
        "id": "s3-by-myself",
        "en": "by myself",
        "zh": "我自己（独自）",
        "pos": "副词",
        "spell": "by myself"
      },
      {
        "id": "s3-by-yourself",
        "en": "by yourself",
        "zh": "你自己（独自）",
        "pos": "副词",
        "spell": "by yourself"
      },
      {
        "id": "s3-calculator",
        "en": "calculator",
        "zh": "计算器",
        "pos": "名词",
        "spell": "calculator"
      },
      {
        "id": "s3-calendar",
        "en": "calendar",
        "zh": "日历",
        "pos": "名词",
        "spell": "calendar"
      },
      {
        "id": "s3-camel",
        "en": "camel",
        "zh": "骆驼",
        "pos": "名词",
        "spell": "camel"
      },
      {
        "id": "s3-camp",
        "en": "camp",
        "zh": "露营",
        "pos": "动词",
        "spell": "camp"
      },
      {
        "id": "s3-card",
        "en": "card",
        "zh": "卡片",
        "pos": "名词",
        "spell": "card"
      },
      {
        "id": "s3-cartoon",
        "en": "cartoon",
        "zh": "动画片",
        "pos": "名词",
        "spell": "cartoon"
      },
      {
        "id": "s3-cave",
        "en": "cave",
        "zh": "洞穴",
        "pos": "名词",
        "spell": "cave"
      },
      {
        "id": "s3-century",
        "en": "century",
        "zh": "世纪",
        "pos": "名词",
        "spell": "century"
      },
      {
        "id": "s3-cereal",
        "en": "cereal",
        "zh": "麦片",
        "pos": "名词",
        "spell": "cereal"
      },
      {
        "id": "s3-channel",
        "en": "channel",
        "zh": "频道",
        "pos": "名词",
        "spell": "channel"
      },
      {
        "id": "s3-chat",
        "en": "chat",
        "zh": "聊天",
        "pos": "动词",
        "spell": "chat"
      },
      {
        "id": "s3-check",
        "en": "check",
        "zh": "检查",
        "pos": "动词",
        "spell": "check"
      },
      {
        "id": "s3-chemist-s",
        "en": "chemist(’s)",
        "zh": "药店",
        "pos": "名词",
        "spell": "chemist"
      },
      {
        "id": "s3-chess",
        "en": "chess",
        "zh": "国际象棋",
        "pos": "名词",
        "spell": "chess"
      },
      {
        "id": "s3-chopsticks",
        "en": "chopsticks",
        "zh": "筷子",
        "pos": "名词",
        "spell": "chopsticks"
      },
      {
        "id": "s3-club",
        "en": "club",
        "zh": "俱乐部",
        "pos": "名词",
        "spell": "club"
      },
      {
        "id": "s3-coin",
        "en": "coin",
        "zh": "硬币",
        "pos": "名词",
        "spell": "coin"
      },
      {
        "id": "s3-collect",
        "en": "collect",
        "zh": "收集",
        "pos": "动词",
        "spell": "collect"
      },
      {
        "id": "s3-college",
        "en": "college",
        "zh": "学院",
        "pos": "名词",
        "spell": "college"
      },
      {
        "id": "s3-comb",
        "en": "comb",
        "zh": "梳子",
        "pos": "名词 / 动词",
        "spell": "comb"
      },
      {
        "id": "s3-competition",
        "en": "competition",
        "zh": "比赛",
        "pos": "名词",
        "spell": "competition"
      },
      {
        "id": "s3-concert",
        "en": "concert",
        "zh": "音乐会",
        "pos": "名词",
        "spell": "concert"
      },
      {
        "id": "s3-conversation",
        "en": "conversation",
        "zh": "交谈",
        "pos": "名词",
        "spell": "conversation"
      },
      {
        "id": "s3-cooker",
        "en": "cooker",
        "zh": "炉具",
        "pos": "名词",
        "spell": "cooker"
      },
      {
        "id": "s3-cookie-uk-biscuit",
        "en": "cookie (UK biscuit)",
        "zh": "饼干",
        "pos": "名词",
        "spell": "cookie"
      },
      {
        "id": "s3-corner",
        "en": "corner",
        "zh": "角落",
        "pos": "名词",
        "spell": "corner"
      },
      {
        "id": "s3-creature",
        "en": "creature",
        "zh": "生物",
        "pos": "名词",
        "spell": "creature"
      },
      {
        "id": "s3-crown",
        "en": "crown",
        "zh": "王冠",
        "pos": "名词",
        "spell": "crown"
      },
      {
        "id": "s3-cushion",
        "en": "cushion",
        "zh": "垫子",
        "pos": "名词",
        "spell": "cushion"
      },
      {
        "id": "s3-cycle",
        "en": "cycle",
        "zh": "骑自行车",
        "pos": "动词",
        "spell": "cycle"
      },
      {
        "id": "s3-damage",
        "en": "damage",
        "zh": "损坏",
        "pos": "动词",
        "spell": "damage"
      },
      {
        "id": "s3-dancer",
        "en": "dancer",
        "zh": "舞蹈演员",
        "pos": "名词",
        "spell": "dancer"
      },
      {
        "id": "s3-dark",
        "en": "dark",
        "zh": "黑暗的",
        "pos": "形容词",
        "spell": "dark"
      },
      {
        "id": "s3-date-as-in-time",
        "en": "date (as in time)",
        "zh": "日期",
        "pos": "名词",
        "spell": "date"
      },
      {
        "id": "s3-dear",
        "en": "dear",
        "zh": "亲爱的",
        "pos": "形容词",
        "spell": "dear"
      },
      {
        "id": "s3-decide",
        "en": "decide",
        "zh": "决定",
        "pos": "动词",
        "spell": "decide"
      },
      {
        "id": "s3-decision",
        "en": "decision",
        "zh": "决定",
        "pos": "名词",
        "spell": "decision"
      },
      {
        "id": "s3-deep",
        "en": "deep",
        "zh": "深的",
        "pos": "形容词",
        "spell": "deep"
      },
      {
        "id": "s3-delicious",
        "en": "delicious",
        "zh": "美味的",
        "pos": "形容词",
        "spell": "delicious"
      },
      {
        "id": "s3-desert",
        "en": "desert",
        "zh": "沙漠",
        "pos": "名词",
        "spell": "desert"
      },
      {
        "id": "s3-design",
        "en": "design",
        "zh": "设计",
        "pos": "名词 / 动词",
        "spell": "design"
      },
      {
        "id": "s3-designer",
        "en": "designer",
        "zh": "设计师",
        "pos": "名词",
        "spell": "designer"
      },
      {
        "id": "s3-diary",
        "en": "diary",
        "zh": "日记",
        "pos": "名词",
        "spell": "diary"
      },
      {
        "id": "s3-dinosaur",
        "en": "dinosaur",
        "zh": "恐龙",
        "pos": "名词",
        "spell": "dinosaur"
      },
      {
        "id": "s3-disappear",
        "en": "disappear",
        "zh": "消失",
        "pos": "动词",
        "spell": "disappear"
      },
      {
        "id": "s3-drawer",
        "en": "drawer",
        "zh": "抽屉",
        "pos": "名词",
        "spell": "drawer"
      },
      {
        "id": "s3-drum",
        "en": "drum",
        "zh": "鼓",
        "pos": "名词",
        "spell": "drum"
      },
      {
        "id": "s3-dry",
        "en": "dry",
        "zh": "干的；擦干",
        "pos": "形容词",
        "spell": "dry"
      },
      {
        "id": "s3-during",
        "en": "during",
        "zh": "在……期间",
        "pos": "介词",
        "spell": "during"
      },
      {
        "id": "s3-each",
        "en": "each",
        "zh": "每个",
        "pos": "限定词 / 代词",
        "spell": "each"
      },
      {
        "id": "s3-eagle",
        "en": "eagle",
        "zh": "鹰",
        "pos": "名词",
        "spell": "eagle"
      },
      {
        "id": "s3-early",
        "en": "early",
        "zh": "早的",
        "pos": "形容词 / 副词",
        "spell": "early"
      },
      {
        "id": "s3-earth",
        "en": "Earth",
        "zh": "地球",
        "pos": "名词",
        "spell": "Earth"
      },
      {
        "id": "s3-east",
        "en": "east",
        "zh": "东",
        "pos": "名词",
        "spell": "east"
      },
      {
        "id": "s3-elbow",
        "en": "elbow",
        "zh": "肘",
        "pos": "名词",
        "spell": "elbow"
      },
      {
        "id": "s3-else",
        "en": "else",
        "zh": "其他",
        "pos": "副词",
        "spell": "else"
      },
      {
        "id": "s3-empty",
        "en": "empty",
        "zh": "空的",
        "pos": "形容词",
        "spell": "empty"
      },
      {
        "id": "s3-end",
        "en": "end",
        "zh": "结尾；结束",
        "pos": "动词",
        "spell": "end"
      },
      {
        "id": "s3-engine",
        "en": "engine",
        "zh": "发动机",
        "pos": "名词",
        "spell": "engine"
      },
      {
        "id": "s3-engineer",
        "en": "engineer",
        "zh": "工程师",
        "pos": "名词",
        "spell": "engineer"
      },
      {
        "id": "s3-enormous",
        "en": "enormous",
        "zh": "巨大的",
        "pos": "形容词",
        "spell": "enormous"
      },
      {
        "id": "s3-enough",
        "en": "enough",
        "zh": "足够的",
        "pos": "形容词 / 代词",
        "spell": "enough"
      },
      {
        "id": "s3-enter",
        "en": "enter",
        "zh": "进入",
        "pos": "动词",
        "spell": "enter"
      },
      {
        "id": "s3-entrance",
        "en": "entrance",
        "zh": "入口",
        "pos": "名词",
        "spell": "entrance"
      },
      {
        "id": "s3-envelope",
        "en": "envelope",
        "zh": "信封",
        "pos": "名词",
        "spell": "envelope"
      },
      {
        "id": "s3-environment",
        "en": "environment",
        "zh": "环境",
        "pos": "名词",
        "spell": "environment"
      },
      {
        "id": "s3-event",
        "en": "event",
        "zh": "事件",
        "pos": "名词",
        "spell": "event"
      },
      {
        "id": "s3-everywhere",
        "en": "everywhere",
        "zh": "到处",
        "pos": "副词",
        "spell": "everywhere"
      },
      {
        "id": "s3-exam",
        "en": "exam",
        "zh": "考试",
        "pos": "名词",
        "spell": "exam"
      },
      {
        "id": "s3-excellent",
        "en": "excellent",
        "zh": "优秀的",
        "pos": "形容词 / 感叹",
        "spell": "excellent"
      },
      {
        "id": "s3-exit",
        "en": "exit",
        "zh": "出口",
        "pos": "名词",
        "spell": "exit"
      },
      {
        "id": "s3-expensive",
        "en": "expensive",
        "zh": "昂贵的",
        "pos": "形容词",
        "spell": "expensive"
      },
      {
        "id": "s3-explain",
        "en": "explain",
        "zh": "解释",
        "pos": "动词",
        "spell": "explain"
      },
      {
        "id": "s3-explore",
        "en": "explore",
        "zh": "探索",
        "pos": "动词",
        "spell": "explore"
      },
      {
        "id": "s3-extinct",
        "en": "extinct",
        "zh": "灭绝的",
        "pos": "形容词",
        "spell": "extinct"
      },
      {
        "id": "s3-factory",
        "en": "factory",
        "zh": "工厂",
        "pos": "名词",
        "spell": "factory"
      },
      {
        "id": "s3-fall-uk-autumn",
        "en": "fall (UK autumn)",
        "zh": "秋天；跌倒",
        "pos": "名词",
        "spell": "fall"
      },
      {
        "id": "s3-fall-over",
        "en": "fall over",
        "zh": "摔倒",
        "pos": "动词",
        "spell": "fall over"
      },
      {
        "id": "s3-fan",
        "en": "fan",
        "zh": "风扇；粉丝",
        "pos": "名词",
        "spell": "fan"
      },
      {
        "id": "s3-far",
        "en": "far",
        "zh": "远的",
        "pos": "形容词 / 副词",
        "spell": "far"
      },
      {
        "id": "s3-fast",
        "en": "fast",
        "zh": "快的",
        "pos": "形容词 / 副词",
        "spell": "fast"
      },
      {
        "id": "s3-feel",
        "en": "feel",
        "zh": "感觉",
        "pos": "动词",
        "spell": "feel"
      },
      {
        "id": "s3-festival",
        "en": "festival",
        "zh": "节日",
        "pos": "名词",
        "spell": "festival"
      },
      {
        "id": "s3-fetch",
        "en": "fetch",
        "zh": "去取来",
        "pos": "动词",
        "spell": "fetch"
      },
      {
        "id": "s3-file",
        "en": "file",
        "zh": "文件",
        "pos": "名词",
        "spell": "file"
      },
      {
        "id": "s3-find-out",
        "en": "find out",
        "zh": "查明",
        "pos": "动词",
        "spell": "find out"
      },
      {
        "id": "s3-finish",
        "en": "finish",
        "zh": "完成",
        "pos": "动词",
        "spell": "finish"
      },
      {
        "id": "s3-fire-engine-us-fire-truck",
        "en": "fire engine (US fire truck)",
        "zh": "消防车",
        "pos": "名词",
        "spell": "fire engine"
      },
      {
        "id": "s3-fire-fighter",
        "en": "fire fighter",
        "zh": "消防员",
        "pos": "名词",
        "spell": "fire fighter"
      },
      {
        "id": "s3-fire",
        "en": "fire",
        "zh": "火",
        "pos": "名词",
        "spell": "fire"
      },
      {
        "id": "s3-fire-station",
        "en": "fire station",
        "zh": "消防站",
        "pos": "名词",
        "spell": "fire station"
      },
      {
        "id": "s3-flag",
        "en": "flag",
        "zh": "旗",
        "pos": "名词",
        "spell": "flag"
      },
      {
        "id": "s3-flashlight-uk-torch",
        "en": "flashlight (UK torch)",
        "zh": "手电筒",
        "pos": "名词",
        "spell": "flashlight"
      },
      {
        "id": "s3-flour",
        "en": "flour",
        "zh": "面粉",
        "pos": "名词",
        "spell": "flour"
      },
      {
        "id": "s3-fog",
        "en": "fog",
        "zh": "雾",
        "pos": "名词",
        "spell": "fog"
      },
      {
        "id": "s3-foggy",
        "en": "foggy",
        "zh": "有雾的",
        "pos": "形容词",
        "spell": "foggy"
      },
      {
        "id": "s3-follow",
        "en": "follow",
        "zh": "跟随",
        "pos": "动词",
        "spell": "follow"
      },
      {
        "id": "s3-forever",
        "en": "forever",
        "zh": "永远",
        "pos": "副词",
        "spell": "forever"
      },
      {
        "id": "s3-forget",
        "en": "forget",
        "zh": "忘记",
        "pos": "动词",
        "spell": "forget"
      },
      {
        "id": "s3-fresh",
        "en": "fresh",
        "zh": "新鲜的",
        "pos": "形容词",
        "spell": "fresh"
      },
      {
        "id": "s3-fridge",
        "en": "fridge",
        "zh": "冰箱",
        "pos": "名词",
        "spell": "fridge"
      },
      {
        "id": "s3-friendly",
        "en": "friendly",
        "zh": "友好的",
        "pos": "形容词",
        "spell": "friendly"
      },
      {
        "id": "s3-frightening",
        "en": "frightening",
        "zh": "吓人的",
        "pos": "形容词",
        "spell": "frightening"
      },
      {
        "id": "s3-front",
        "en": "front",
        "zh": "前面",
        "pos": "形容词 / 名词",
        "spell": "front"
      },
      {
        "id": "s3-full",
        "en": "full",
        "zh": "满的",
        "pos": "形容词",
        "spell": "full"
      },
      {
        "id": "s3-fur",
        "en": "fur",
        "zh": "毛皮",
        "pos": "名词",
        "spell": "fur"
      },
      {
        "id": "s3-furry",
        "en": "furry",
        "zh": "毛茸茸的",
        "pos": "形容词",
        "spell": "furry"
      },
      {
        "id": "s3-future",
        "en": "future",
        "zh": "未来",
        "pos": "名词",
        "spell": "future"
      },
      {
        "id": "s3-gate",
        "en": "gate",
        "zh": "大门",
        "pos": "名词",
        "spell": "gate"
      },
      {
        "id": "s3-get-to",
        "en": "get to",
        "zh": "到达",
        "pos": "动词",
        "spell": "get to"
      },
      {
        "id": "s3-glove",
        "en": "glove",
        "zh": "手套",
        "pos": "名词",
        "spell": "glove"
      },
      {
        "id": "s3-glue",
        "en": "glue",
        "zh": "胶水",
        "pos": "名词 / 动词",
        "spell": "glue"
      },
      {
        "id": "s3-go-away",
        "en": "go away",
        "zh": "走开",
        "pos": "感叹",
        "spell": "go away"
      },
      {
        "id": "s3-go-out",
        "en": "go out",
        "zh": "出去",
        "pos": "动词",
        "spell": "go out"
      },
      {
        "id": "s3-gold",
        "en": "gold",
        "zh": "金子；金色的",
        "pos": "形容词 / 名词",
        "spell": "gold"
      },
      {
        "id": "s3-golf",
        "en": "golf",
        "zh": "高尔夫",
        "pos": "名词",
        "spell": "golf"
      },
      {
        "id": "s3-group",
        "en": "group",
        "zh": "小组",
        "pos": "名词",
        "spell": "group"
      },
      {
        "id": "s3-guess",
        "en": "guess",
        "zh": "猜测",
        "pos": "名词 / 动词",
        "spell": "guess"
      },
      {
        "id": "s3-gym",
        "en": "gym",
        "zh": "健身房",
        "pos": "名词",
        "spell": "gym"
      },
      {
        "id": "s3-half",
        "en": "half",
        "zh": "一半",
        "pos": "形容词 / 名词",
        "spell": "half"
      },
      {
        "id": "s3-happen",
        "en": "happen",
        "zh": "发生",
        "pos": "动词",
        "spell": "happen"
      },
      {
        "id": "s3-hard",
        "en": "hard",
        "zh": "努力地；硬的",
        "pos": "形容词 / 副词",
        "spell": "hard"
      },
      {
        "id": "s3-hate",
        "en": "hate",
        "zh": "讨厌",
        "pos": "动词",
        "spell": "hate"
      },
      {
        "id": "s3-hear",
        "en": "hear",
        "zh": "听见",
        "pos": "动词",
        "spell": "hear"
      },
      {
        "id": "s3-heavy",
        "en": "heavy",
        "zh": "重的",
        "pos": "形容词",
        "spell": "heavy"
      },
      {
        "id": "s3-high",
        "en": "high",
        "zh": "高的",
        "pos": "形容词",
        "spell": "high"
      },
      {
        "id": "s3-hill",
        "en": "hill",
        "zh": "小山",
        "pos": "名词",
        "spell": "hill"
      },
      {
        "id": "s3-hole",
        "en": "hole",
        "zh": "洞",
        "pos": "名词",
        "spell": "hole"
      },
      {
        "id": "s3-honest",
        "en": "honest",
        "zh": "诚实的",
        "pos": "形容词",
        "spell": "honest"
      },
      {
        "id": "s3-hope",
        "en": "hope",
        "zh": "希望",
        "pos": "动词",
        "spell": "hope"
      },
      {
        "id": "s3-horrible",
        "en": "horrible",
        "zh": "可怕的",
        "pos": "形容词",
        "spell": "horrible"
      },
      {
        "id": "s3-hour",
        "en": "hour",
        "zh": "小时",
        "pos": "名词",
        "spell": "hour"
      },
      {
        "id": "s3-how-long",
        "en": "how long",
        "zh": "多久",
        "pos": "副词 / 疑问词",
        "spell": "how long"
      },
      {
        "id": "s3-hurry",
        "en": "hurry",
        "zh": "赶快",
        "pos": "动词",
        "spell": "hurry"
      },
      {
        "id": "s3-husband",
        "en": "husband",
        "zh": "丈夫",
        "pos": "名词",
        "spell": "husband"
      },
      {
        "id": "s3-if",
        "en": "if",
        "zh": "如果",
        "pos": "连词",
        "spell": "if"
      },
      {
        "id": "s3-if-you-want",
        "en": "if you want",
        "zh": "如果你愿意",
        "pos": "感叹",
        "spell": "if you want"
      },
      {
        "id": "s3-important",
        "en": "important",
        "zh": "重要的",
        "pos": "形容词",
        "spell": "important"
      },
      {
        "id": "s3-improve",
        "en": "improve",
        "zh": "提高",
        "pos": "动词",
        "spell": "improve"
      },
      {
        "id": "s3-in-a-minute",
        "en": "in a minute",
        "zh": "马上",
        "pos": "感叹",
        "spell": "in a minute"
      },
      {
        "id": "s3-information",
        "en": "information",
        "zh": "信息",
        "pos": "名词",
        "spell": "information"
      },
      {
        "id": "s3-insect",
        "en": "insect",
        "zh": "昆虫",
        "pos": "名词",
        "spell": "insect"
      },
      {
        "id": "s3-instead",
        "en": "instead",
        "zh": "代替",
        "pos": "副词",
        "spell": "instead"
      },
      {
        "id": "s3-instrument",
        "en": "instrument",
        "zh": "乐器",
        "pos": "名词",
        "spell": "instrument"
      },
      {
        "id": "s3-interested",
        "en": "interested",
        "zh": "感兴趣的",
        "pos": "形容词",
        "spell": "interested"
      },
      {
        "id": "s3-invent",
        "en": "invent",
        "zh": "发明",
        "pos": "动词",
        "spell": "invent"
      },
      {
        "id": "s3-job",
        "en": "job",
        "zh": "工作",
        "pos": "名词",
        "spell": "job"
      },
      {
        "id": "s3-join-a-club",
        "en": "join (a club)",
        "zh": "加入",
        "pos": "动词",
        "spell": "join"
      },
      {
        "id": "s3-journalist",
        "en": "journalist",
        "zh": "记者",
        "pos": "名词",
        "spell": "journalist"
      },
      {
        "id": "s3-just",
        "en": "just",
        "zh": "刚刚；只是",
        "pos": "副词",
        "spell": "just"
      },
      {
        "id": "s3-keep",
        "en": "keep",
        "zh": "保持",
        "pos": "动词",
        "spell": "keep"
      },
      {
        "id": "s3-key",
        "en": "key",
        "zh": "钥匙；关键",
        "pos": "名词",
        "spell": "key"
      },
      {
        "id": "s3-kind",
        "en": "kind",
        "zh": "友善的；种类",
        "pos": "形容词",
        "spell": "kind"
      },
      {
        "id": "s3-knee",
        "en": "knee",
        "zh": "膝盖",
        "pos": "名词",
        "spell": "knee"
      },
      {
        "id": "s3-land",
        "en": "land",
        "zh": "着陆；土地",
        "pos": "动词",
        "spell": "land"
      },
      {
        "id": "s3-large",
        "en": "large",
        "zh": "大的",
        "pos": "形容词",
        "spell": "large"
      },
      {
        "id": "s3-late",
        "en": "late",
        "zh": "晚的",
        "pos": "形容词 / 副词",
        "spell": "late"
      },
      {
        "id": "s3-later",
        "en": "later",
        "zh": "稍后",
        "pos": "副词",
        "spell": "later"
      },
      {
        "id": "s3-lazy",
        "en": "lazy",
        "zh": "懒惰的",
        "pos": "形容词",
        "spell": "lazy"
      },
      {
        "id": "s3-leave",
        "en": "leave",
        "zh": "离开；留下",
        "pos": "动词",
        "spell": "leave"
      },
      {
        "id": "s3-left-as-in-direction",
        "en": "left (as in direction)",
        "zh": "左边",
        "pos": "形容词",
        "spell": "left"
      },
      {
        "id": "s3-let",
        "en": "let",
        "zh": "让",
        "pos": "动词",
        "spell": "let"
      },
      {
        "id": "s3-letter-as-in-mail",
        "en": "letter (as in mail)",
        "zh": "信",
        "pos": "名词",
        "spell": "letter"
      },
      {
        "id": "s3-lie-as-in-lie-down",
        "en": "lie (as in lie down)",
        "zh": "躺",
        "pos": "动词",
        "spell": "lie"
      },
      {
        "id": "s3-lie",
        "en": "lie",
        "zh": "撒谎；躺",
        "pos": "名词 / 动词",
        "spell": "lie"
      },
      {
        "id": "s3-lift-ride",
        "en": "lift (ride)",
        "zh": "搭便车",
        "pos": "名词",
        "spell": "lift"
      },
      {
        "id": "s3-lift",
        "en": "lift",
        "zh": "举起；电梯",
        "pos": "动词",
        "spell": "lift"
      },
      {
        "id": "s3-light",
        "en": "light",
        "zh": "光；轻的",
        "pos": "形容词 / 名词",
        "spell": "light"
      },
      {
        "id": "s3-london",
        "en": "London",
        "zh": "伦敦",
        "pos": "名词",
        "spell": "London"
      },
      {
        "id": "s3-look-after",
        "en": "look after",
        "zh": "照顾",
        "pos": "动词",
        "spell": "look after"
      },
      {
        "id": "s3-look-like",
        "en": "look like",
        "zh": "看起来像",
        "pos": "动词",
        "spell": "look like"
      },
      {
        "id": "s3-lovely",
        "en": "lovely",
        "zh": "可爱的",
        "pos": "形容词",
        "spell": "lovely"
      },
      {
        "id": "s3-low",
        "en": "low",
        "zh": "低的",
        "pos": "形容词",
        "spell": "low"
      },
      {
        "id": "s3-lucky",
        "en": "lucky",
        "zh": "幸运的",
        "pos": "形容词",
        "spell": "lucky"
      },
      {
        "id": "s3-magazine",
        "en": "magazine",
        "zh": "杂志",
        "pos": "名词",
        "spell": "magazine"
      },
      {
        "id": "s3-magician",
        "en": "magician",
        "zh": "魔术师",
        "pos": "名词",
        "spell": "magician"
      },
      {
        "id": "s3-make-sure",
        "en": "make sure",
        "zh": "确保",
        "pos": "动词",
        "spell": "make sure"
      },
      {
        "id": "s3-manager",
        "en": "manager",
        "zh": "经理",
        "pos": "名词",
        "spell": "manager"
      },
      {
        "id": "s3-married",
        "en": "married",
        "zh": "已婚的",
        "pos": "形容词",
        "spell": "married"
      },
      {
        "id": "s3-match-football",
        "en": "match (football)",
        "zh": "比赛",
        "pos": "名词",
        "spell": "match"
      },
      {
        "id": "s3-may",
        "en": "may",
        "zh": "五月；可以",
        "pos": "动词",
        "spell": "may"
      },
      {
        "id": "s3-meal",
        "en": "meal",
        "zh": "一餐",
        "pos": "名词",
        "spell": "meal"
      },
      {
        "id": "s3-mechanic",
        "en": "mechanic",
        "zh": "机械师",
        "pos": "名词",
        "spell": "mechanic"
      },
      {
        "id": "s3-medicine",
        "en": "medicine",
        "zh": "药",
        "pos": "名词",
        "spell": "medicine"
      },
      {
        "id": "s3-meet",
        "en": "meet",
        "zh": "遇见",
        "pos": "动词",
        "spell": "meet"
      },
      {
        "id": "s3-meeting",
        "en": "meeting",
        "zh": "会议",
        "pos": "名词",
        "spell": "meeting"
      },
      {
        "id": "s3-member",
        "en": "member",
        "zh": "成员",
        "pos": "名词",
        "spell": "member"
      },
      {
        "id": "s3-messy",
        "en": "messy",
        "zh": "凌乱的",
        "pos": "形容词",
        "spell": "messy"
      },
      {
        "id": "s3-middle",
        "en": "middle",
        "zh": "中间",
        "pos": "名词 / 形容词",
        "spell": "middle"
      },
      {
        "id": "s3-midnight",
        "en": "midnight",
        "zh": "午夜",
        "pos": "名词",
        "spell": "midnight"
      },
      {
        "id": "s3-might",
        "en": "might",
        "zh": "可能",
        "pos": "动词",
        "spell": "might"
      },
      {
        "id": "s3-million",
        "en": "million",
        "zh": "百万",
        "pos": "名词",
        "spell": "million"
      },
      {
        "id": "s3-mind",
        "en": "mind",
        "zh": "介意；头脑",
        "pos": "动词",
        "spell": "mind"
      },
      {
        "id": "s3-missing",
        "en": "missing",
        "zh": "失踪的；缺少的",
        "pos": "形容词",
        "spell": "missing"
      },
      {
        "id": "s3-mix",
        "en": "mix",
        "zh": "混合",
        "pos": "动词",
        "spell": "mix"
      },
      {
        "id": "s3-money",
        "en": "money",
        "zh": "钱",
        "pos": "名词",
        "spell": "money"
      },
      {
        "id": "s3-month",
        "en": "month",
        "zh": "月份",
        "pos": "名词",
        "spell": "month"
      },
      {
        "id": "s3-motorway",
        "en": "motorway",
        "zh": "高速公路",
        "pos": "名词",
        "spell": "motorway"
      },
      {
        "id": "s3-much",
        "en": "much",
        "zh": "许多（不可数）",
        "pos": "副词 / 限定词 / 代词",
        "spell": "much"
      },
      {
        "id": "s3-museum",
        "en": "museum",
        "zh": "博物馆",
        "pos": "名词",
        "spell": "museum"
      },
      {
        "id": "s3-nearby",
        "en": "nearby",
        "zh": "附近的",
        "pos": "副词",
        "spell": "nearby"
      },
      {
        "id": "s3-necklace",
        "en": "necklace",
        "zh": "项链",
        "pos": "名词",
        "spell": "necklace"
      },
      {
        "id": "s3-nest",
        "en": "nest",
        "zh": "巢",
        "pos": "名词",
        "spell": "nest"
      },
      {
        "id": "s3-news",
        "en": "news",
        "zh": "新闻",
        "pos": "名词",
        "spell": "news"
      },
      {
        "id": "s3-next",
        "en": "next",
        "zh": "下一个",
        "pos": "形容词 / 副词",
        "spell": "next"
      },
      {
        "id": "s3-no-problem",
        "en": "no problem",
        "zh": "没问题",
        "pos": "感叹",
        "spell": "no problem"
      },
      {
        "id": "s3-noisy",
        "en": "noisy",
        "zh": "吵闹的",
        "pos": "形容词",
        "spell": "noisy"
      },
      {
        "id": "s3-no-one",
        "en": "no-one",
        "zh": "没有人",
        "pos": "代词",
        "spell": "no-one"
      },
      {
        "id": "s3-north",
        "en": "north",
        "zh": "北",
        "pos": "名词",
        "spell": "north"
      },
      {
        "id": "s3-nowhere",
        "en": "nowhere",
        "zh": "无处",
        "pos": "副词",
        "spell": "nowhere"
      },
      {
        "id": "s3-nursery",
        "en": "nursery",
        "zh": "托儿所",
        "pos": "名词",
        "spell": "nursery"
      },
      {
        "id": "s3-ocean",
        "en": "ocean",
        "zh": "海洋",
        "pos": "名词",
        "spell": "ocean"
      },
      {
        "id": "s3-octopus",
        "en": "octopus",
        "zh": "章鱼",
        "pos": "名词",
        "spell": "octopus"
      },
      {
        "id": "s3-of-course",
        "en": "of course",
        "zh": "当然",
        "pos": "副词",
        "spell": "of course"
      },
      {
        "id": "s3-offer",
        "en": "offer",
        "zh": "提供",
        "pos": "动词",
        "spell": "offer"
      },
      {
        "id": "s3-office",
        "en": "office",
        "zh": "办公室",
        "pos": "名词",
        "spell": "office"
      },
      {
        "id": "s3-olives",
        "en": "olives",
        "zh": "橄榄",
        "pos": "名词",
        "spell": "olives"
      },
      {
        "id": "s3-once",
        "en": "once",
        "zh": "一次；曾经",
        "pos": "副词",
        "spell": "once"
      },
      {
        "id": "s3-online",
        "en": "online",
        "zh": "在线的",
        "pos": "形容词",
        "spell": "online"
      },
      {
        "id": "s3-other",
        "en": "other",
        "zh": "其他的",
        "pos": "限定词 / 代词",
        "spell": "other"
      },
      {
        "id": "s3-oven",
        "en": "oven",
        "zh": "烤箱",
        "pos": "名词",
        "spell": "oven"
      },
      {
        "id": "s3-over",
        "en": "over",
        "zh": "在……上方；结束",
        "pos": "副词 / 介词",
        "spell": "over"
      },
      {
        "id": "s3-pack",
        "en": "pack",
        "zh": "打包",
        "pos": "动词",
        "spell": "pack"
      },
      {
        "id": "s3-passenger",
        "en": "passenger",
        "zh": "乘客",
        "pos": "名词",
        "spell": "passenger"
      },
      {
        "id": "s3-past",
        "en": "past",
        "zh": "过去；经过",
        "pos": "名词 / 介词",
        "spell": "past"
      },
      {
        "id": "s3-path",
        "en": "path",
        "zh": "小径",
        "pos": "名词",
        "spell": "path"
      },
      {
        "id": "s3-pharmacy",
        "en": "pharmacy",
        "zh": "药店",
        "pos": "名词",
        "spell": "pharmacy"
      },
      {
        "id": "s3-photographer",
        "en": "photographer",
        "zh": "摄影师",
        "pos": "名词",
        "spell": "photographer"
      },
      {
        "id": "s3-piece",
        "en": "piece",
        "zh": "一块；一片",
        "pos": "名词",
        "spell": "piece"
      },
      {
        "id": "s3-pillow",
        "en": "pillow",
        "zh": "枕头",
        "pos": "名词",
        "spell": "pillow"
      },
      {
        "id": "s3-pilot",
        "en": "pilot",
        "zh": "飞行员",
        "pos": "名词",
        "spell": "pilot"
      },
      {
        "id": "s3-planet",
        "en": "planet",
        "zh": "行星",
        "pos": "名词",
        "spell": "planet"
      },
      {
        "id": "s3-plastic",
        "en": "plastic",
        "zh": "塑料",
        "pos": "形容词 / 名词",
        "spell": "plastic"
      },
      {
        "id": "s3-platform",
        "en": "platform",
        "zh": "站台",
        "pos": "名词",
        "spell": "platform"
      },
      {
        "id": "s3-pleased",
        "en": "pleased",
        "zh": "高兴的",
        "pos": "形容词",
        "spell": "pleased"
      },
      {
        "id": "s3-pocket",
        "en": "pocket",
        "zh": "口袋",
        "pos": "名词",
        "spell": "pocket"
      },
      {
        "id": "s3-police-officer",
        "en": "police officer",
        "zh": "警察",
        "pos": "名词",
        "spell": "police officer"
      },
      {
        "id": "s3-police-station",
        "en": "police station",
        "zh": "警察局",
        "pos": "名词",
        "spell": "police station"
      },
      {
        "id": "s3-pond",
        "en": "pond",
        "zh": "池塘",
        "pos": "名词",
        "spell": "pond"
      },
      {
        "id": "s3-poor",
        "en": "poor",
        "zh": "贫穷的",
        "pos": "形容词",
        "spell": "poor"
      },
      {
        "id": "s3-pop-music",
        "en": "pop music",
        "zh": "流行音乐",
        "pos": "名词",
        "spell": "pop music"
      },
      {
        "id": "s3-popular",
        "en": "popular",
        "zh": "受欢迎的",
        "pos": "形容词",
        "spell": "popular"
      },
      {
        "id": "s3-post-office",
        "en": "post office",
        "zh": "邮局",
        "pos": "名词",
        "spell": "post office"
      },
      {
        "id": "s3-post",
        "en": "post",
        "zh": "邮寄",
        "pos": "动词",
        "spell": "post"
      },
      {
        "id": "s3-prefer",
        "en": "prefer",
        "zh": "更喜欢",
        "pos": "动词",
        "spell": "prefer"
      },
      {
        "id": "s3-prepare",
        "en": "prepare",
        "zh": "准备",
        "pos": "动词",
        "spell": "prepare"
      },
      {
        "id": "s3-prize",
        "en": "prize",
        "zh": "奖品",
        "pos": "名词",
        "spell": "prize"
      },
      {
        "id": "s3-problem",
        "en": "problem",
        "zh": "问题",
        "pos": "名词",
        "spell": "problem"
      },
      {
        "id": "s3-project",
        "en": "project",
        "zh": "项目",
        "pos": "名词",
        "spell": "project"
      },
      {
        "id": "s3-promise",
        "en": "promise",
        "zh": "承诺",
        "pos": "名词 / 动词",
        "spell": "promise"
      },
      {
        "id": "s3-pull",
        "en": "pull",
        "zh": "拉",
        "pos": "动词",
        "spell": "pull"
      },
      {
        "id": "s3-push",
        "en": "push",
        "zh": "推",
        "pos": "动词",
        "spell": "push"
      },
      {
        "id": "s3-put-up",
        "en": "put up",
        "zh": "搭建；张贴",
        "pos": "动词",
        "spell": "put up"
      },
      {
        "id": "s3-puzzle",
        "en": "puzzle",
        "zh": "谜题",
        "pos": "名词",
        "spell": "puzzle"
      },
      {
        "id": "s3-pyjamas-us-pajamas",
        "en": "pyjamas (US pajamas)",
        "zh": "睡衣",
        "pos": "名词",
        "spell": "pyjamas"
      },
      {
        "id": "s3-pyramid",
        "en": "pyramid",
        "zh": "金字塔",
        "pos": "名词",
        "spell": "pyramid"
      },
      {
        "id": "s3-quarter",
        "en": "quarter",
        "zh": "四分之一；一刻",
        "pos": "名词",
        "spell": "quarter"
      },
      {
        "id": "s3-quite",
        "en": "quite",
        "zh": "相当",
        "pos": "副词",
        "spell": "quite"
      },
      {
        "id": "s3-quiz",
        "en": "quiz",
        "zh": "小测验",
        "pos": "名词",
        "spell": "quiz"
      },
      {
        "id": "s3-race",
        "en": "race",
        "zh": "赛跑",
        "pos": "名词 / 动词",
        "spell": "race"
      },
      {
        "id": "s3-racing-car-bike",
        "en": "racing (car; bike)",
        "zh": "赛车；自行车赛",
        "pos": "形容词",
        "spell": "racing"
      },
      {
        "id": "s3-railway",
        "en": "railway",
        "zh": "铁路",
        "pos": "名词",
        "spell": "railway"
      },
      {
        "id": "s3-ready",
        "en": "ready",
        "zh": "准备好的",
        "pos": "形容词",
        "spell": "ready"
      },
      {
        "id": "s3-remember",
        "en": "remember",
        "zh": "记得",
        "pos": "动词",
        "spell": "remember"
      },
      {
        "id": "s3-repair",
        "en": "repair",
        "zh": "修理",
        "pos": "动词",
        "spell": "repair"
      },
      {
        "id": "s3-repeat",
        "en": "repeat",
        "zh": "重复",
        "pos": "动词",
        "spell": "repeat"
      },
      {
        "id": "s3-return",
        "en": "return",
        "zh": "返回",
        "pos": "动词",
        "spell": "return"
      },
      {
        "id": "s3-rich",
        "en": "rich",
        "zh": "富有的",
        "pos": "形容词",
        "spell": "rich"
      },
      {
        "id": "s3-right",
        "en": "right",
        "zh": "右边；对的",
        "pos": "形容词",
        "spell": "right"
      },
      {
        "id": "s3-ring",
        "en": "ring",
        "zh": "戒指；铃响",
        "pos": "名词",
        "spell": "ring"
      },
      {
        "id": "s3-robber",
        "en": "robber",
        "zh": "强盗",
        "pos": "名词",
        "spell": "robber"
      },
      {
        "id": "s3-rock-music",
        "en": "rock music",
        "zh": "摇滚乐",
        "pos": "名词",
        "spell": "rock music"
      },
      {
        "id": "s3-rocket",
        "en": "rocket",
        "zh": "火箭",
        "pos": "名词",
        "spell": "rocket"
      },
      {
        "id": "s3-salt",
        "en": "salt",
        "zh": "盐",
        "pos": "名词",
        "spell": "salt"
      },
      {
        "id": "s3-same",
        "en": "same",
        "zh": "相同的",
        "pos": "形容词",
        "spell": "same"
      },
      {
        "id": "s3-save",
        "en": "save",
        "zh": "节省；拯救",
        "pos": "动词",
        "spell": "save"
      },
      {
        "id": "s3-science",
        "en": "science",
        "zh": "科学",
        "pos": "名词",
        "spell": "science"
      },
      {
        "id": "s3-scissors",
        "en": "scissors",
        "zh": "剪刀",
        "pos": "名词",
        "spell": "scissors"
      },
      {
        "id": "s3-score",
        "en": "score",
        "zh": "得分",
        "pos": "名词",
        "spell": "score"
      },
      {
        "id": "s3-screen",
        "en": "screen",
        "zh": "屏幕",
        "pos": "名词",
        "spell": "screen"
      },
      {
        "id": "s3-search",
        "en": "search",
        "zh": "搜索",
        "pos": "名词 / 动词",
        "spell": "search"
      },
      {
        "id": "s3-secret",
        "en": "secret",
        "zh": "秘密",
        "pos": "名词",
        "spell": "secret"
      },
      {
        "id": "s3-sell",
        "en": "sell",
        "zh": "卖",
        "pos": "动词",
        "spell": "sell"
      },
      {
        "id": "s3-several",
        "en": "several",
        "zh": "几个",
        "pos": "形容词",
        "spell": "several"
      },
      {
        "id": "s3-shampoo",
        "en": "shampoo",
        "zh": "洗发水",
        "pos": "名词",
        "spell": "shampoo"
      },
      {
        "id": "s3-shelf",
        "en": "shelf",
        "zh": "架子",
        "pos": "名词",
        "spell": "shelf"
      },
      {
        "id": "s3-should",
        "en": "should",
        "zh": "应该",
        "pos": "动词",
        "spell": "should"
      },
      {
        "id": "s3-silver",
        "en": "silver",
        "zh": "银；银色的",
        "pos": "形容词 / 名词",
        "spell": "silver"
      },
      {
        "id": "s3-since",
        "en": "since",
        "zh": "自从",
        "pos": "介词",
        "spell": "since"
      },
      {
        "id": "s3-singer",
        "en": "singer",
        "zh": "歌手",
        "pos": "名词",
        "spell": "singer"
      },
      {
        "id": "s3-sink",
        "en": "sink",
        "zh": "水槽；下沉",
        "pos": "名词",
        "spell": "sink"
      },
      {
        "id": "s3-ski",
        "en": "ski",
        "zh": "滑雪",
        "pos": "名词 / 动词",
        "spell": "ski"
      },
      {
        "id": "s3-skyscraper",
        "en": "skyscraper",
        "zh": "摩天大楼",
        "pos": "名词",
        "spell": "skyscraper"
      },
      {
        "id": "s3-sledge",
        "en": "sledge",
        "zh": "雪橇",
        "pos": "名词 / 动词",
        "spell": "sledge"
      },
      {
        "id": "s3-smell",
        "en": "smell",
        "zh": "闻；气味",
        "pos": "名词 / 动词",
        "spell": "smell"
      },
      {
        "id": "s3-snowball",
        "en": "snowball",
        "zh": "雪球",
        "pos": "名词",
        "spell": "snowball"
      },
      {
        "id": "s3-snowboard",
        "en": "snowboard",
        "zh": "滑雪板",
        "pos": "名词",
        "spell": "snowboard"
      },
      {
        "id": "s3-snowboarding",
        "en": "snowboarding",
        "zh": "单板滑雪",
        "pos": "名词",
        "spell": "snowboarding"
      },
      {
        "id": "s3-snowman",
        "en": "snowman",
        "zh": "雪人",
        "pos": "名词",
        "spell": "snowman"
      },
      {
        "id": "s3-so",
        "en": "so",
        "zh": "所以；如此",
        "pos": "副词 / 连词",
        "spell": "so"
      },
      {
        "id": "s3-soap",
        "en": "soap",
        "zh": "肥皂",
        "pos": "名词",
        "spell": "soap"
      },
      {
        "id": "s3-somewhere",
        "en": "somewhere",
        "zh": "某处",
        "pos": "副词",
        "spell": "somewhere"
      },
      {
        "id": "s3-soon",
        "en": "soon",
        "zh": "很快",
        "pos": "副词",
        "spell": "soon"
      },
      {
        "id": "s3-sore",
        "en": "sore",
        "zh": "疼痛的",
        "pos": "形容词",
        "spell": "sore"
      },
      {
        "id": "s3-sound",
        "en": "sound",
        "zh": "听起来；声音",
        "pos": "名词 / 动词",
        "spell": "sound"
      },
      {
        "id": "s3-south",
        "en": "south",
        "zh": "南",
        "pos": "名词",
        "spell": "south"
      },
      {
        "id": "s3-special",
        "en": "special",
        "zh": "特别的",
        "pos": "形容词",
        "spell": "special"
      },
      {
        "id": "s3-spot",
        "en": "spot",
        "zh": "斑点；地点",
        "pos": "名词",
        "spell": "spot"
      },
      {
        "id": "s3-stadium",
        "en": "stadium",
        "zh": "体育场",
        "pos": "名词",
        "spell": "stadium"
      },
      {
        "id": "s3-stage-theatre",
        "en": "stage (theatre)",
        "zh": "舞台",
        "pos": "名词",
        "spell": "stage"
      },
      {
        "id": "s3-stamp",
        "en": "stamp",
        "zh": "邮票",
        "pos": "名词",
        "spell": "stamp"
      },
      {
        "id": "s3-steal",
        "en": "steal",
        "zh": "偷",
        "pos": "动词",
        "spell": "steal"
      },
      {
        "id": "s3-step",
        "en": "step",
        "zh": "步骤；台阶",
        "pos": "名词",
        "spell": "step"
      },
      {
        "id": "s3-stick",
        "en": "stick",
        "zh": "棍子；粘贴",
        "pos": "名词",
        "spell": "stick"
      },
      {
        "id": "s3-still",
        "en": "still",
        "zh": "仍然",
        "pos": "副词",
        "spell": "still"
      },
      {
        "id": "s3-stone",
        "en": "stone",
        "zh": "石头",
        "pos": "名词",
        "spell": "stone"
      },
      {
        "id": "s3-storm",
        "en": "storm",
        "zh": "暴风雨",
        "pos": "名词",
        "spell": "storm"
      },
      {
        "id": "s3-straight-on",
        "en": "straight on",
        "zh": "一直往前",
        "pos": "副词",
        "spell": "straight on"
      },
      {
        "id": "s3-strange",
        "en": "strange",
        "zh": "奇怪的",
        "pos": "形容词",
        "spell": "strange"
      },
      {
        "id": "s3-strawberry",
        "en": "strawberry",
        "zh": "草莓",
        "pos": "名词",
        "spell": "strawberry"
      },
      {
        "id": "s3-stream",
        "en": "stream",
        "zh": "小溪",
        "pos": "名词",
        "spell": "stream"
      },
      {
        "id": "s3-stripe",
        "en": "stripe",
        "zh": "条纹",
        "pos": "名词",
        "spell": "stripe"
      },
      {
        "id": "s3-striped",
        "en": "striped",
        "zh": "有条纹的",
        "pos": "形容词",
        "spell": "striped"
      },
      {
        "id": "s3-study",
        "en": "study",
        "zh": "学习",
        "pos": "动词",
        "spell": "study"
      },
      {
        "id": "s3-such",
        "en": "such",
        "zh": "如此的",
        "pos": "限定词",
        "spell": "such"
      },
      {
        "id": "s3-suddenly",
        "en": "suddenly",
        "zh": "突然",
        "pos": "副词",
        "spell": "suddenly"
      },
      {
        "id": "s3-sugar",
        "en": "sugar",
        "zh": "糖",
        "pos": "名词",
        "spell": "sugar"
      },
      {
        "id": "s3-suitcase",
        "en": "suitcase",
        "zh": "手提箱",
        "pos": "名词",
        "spell": "suitcase"
      },
      {
        "id": "s3-sunglasses",
        "en": "sunglasses",
        "zh": "太阳镜",
        "pos": "名词",
        "spell": "sunglasses"
      },
      {
        "id": "s3-sure",
        "en": "sure",
        "zh": "确定的",
        "pos": "形容词",
        "spell": "sure"
      },
      {
        "id": "s3-surname",
        "en": "surname",
        "zh": "姓",
        "pos": "名词",
        "spell": "surname"
      },
      {
        "id": "s3-surprise",
        "en": "surprise",
        "zh": "惊喜",
        "pos": "名词",
        "spell": "surprise"
      },
      {
        "id": "s3-swan",
        "en": "swan",
        "zh": "天鹅",
        "pos": "名词",
        "spell": "swan"
      },
      {
        "id": "s3-swing",
        "en": "swing",
        "zh": "秋千；摆动",
        "pos": "名词 / 动词",
        "spell": "swing"
      },
      {
        "id": "s3-task",
        "en": "task",
        "zh": "任务",
        "pos": "名词",
        "spell": "task"
      },
      {
        "id": "s3-taste",
        "en": "taste",
        "zh": "品尝；味道",
        "pos": "名词 / 动词",
        "spell": "taste"
      },
      {
        "id": "s3-taxi",
        "en": "taxi",
        "zh": "出租车",
        "pos": "名词",
        "spell": "taxi"
      },
      {
        "id": "s3-team",
        "en": "team",
        "zh": "队伍",
        "pos": "名词",
        "spell": "team"
      },
      {
        "id": "s3-telephone",
        "en": "telephone",
        "zh": "电话",
        "pos": "名词",
        "spell": "telephone"
      },
      {
        "id": "s3-tent",
        "en": "tent",
        "zh": "帐篷",
        "pos": "名词",
        "spell": "tent"
      },
      {
        "id": "s3-test",
        "en": "test",
        "zh": "测验",
        "pos": "名词 / 动词",
        "spell": "test"
      },
      {
        "id": "s3-thank",
        "en": "thank",
        "zh": "感谢",
        "pos": "动词",
        "spell": "thank"
      },
      {
        "id": "s3-thousand",
        "en": "thousand",
        "zh": "千",
        "pos": "名词",
        "spell": "thousand"
      },
      {
        "id": "s3-through",
        "en": "through",
        "zh": "穿过",
        "pos": "介词",
        "spell": "through"
      },
      {
        "id": "s3-thunder",
        "en": "thunder",
        "zh": "雷",
        "pos": "名词",
        "spell": "thunder"
      },
      {
        "id": "s3-tidy",
        "en": "tidy",
        "zh": "整洁的；整理",
        "pos": "形容词 / 动词",
        "spell": "tidy"
      },
      {
        "id": "s3-together",
        "en": "together",
        "zh": "一起",
        "pos": "副词",
        "spell": "together"
      },
      {
        "id": "s3-tonight",
        "en": "tonight",
        "zh": "今晚",
        "pos": "副词 / 名词",
        "spell": "tonight"
      },
      {
        "id": "s3-tortoise",
        "en": "tortoise",
        "zh": "陆龟",
        "pos": "名词",
        "spell": "tortoise"
      },
      {
        "id": "s3-touch",
        "en": "touch",
        "zh": "触摸",
        "pos": "动词",
        "spell": "touch"
      },
      {
        "id": "s3-tour",
        "en": "tour",
        "zh": "旅游；巡演",
        "pos": "名词",
        "spell": "tour"
      },
      {
        "id": "s3-traffic",
        "en": "traffic",
        "zh": "交通",
        "pos": "名词",
        "spell": "traffic"
      },
      {
        "id": "s3-trainers",
        "en": "trainers",
        "zh": "运动鞋",
        "pos": "名词",
        "spell": "trainers"
      },
      {
        "id": "s3-tummy",
        "en": "tummy",
        "zh": "肚子",
        "pos": "名词",
        "spell": "tummy"
      },
      {
        "id": "s3-tune",
        "en": "tune",
        "zh": "曲调",
        "pos": "名词",
        "spell": "tune"
      },
      {
        "id": "s3-turn-off",
        "en": "turn off",
        "zh": "关掉",
        "pos": "动词",
        "spell": "turn off"
      },
      {
        "id": "s3-turn-on",
        "en": "turn on",
        "zh": "打开",
        "pos": "动词",
        "spell": "turn on"
      },
      {
        "id": "s3-turn",
        "en": "turn",
        "zh": "转弯；变成",
        "pos": "动词",
        "spell": "turn"
      },
      {
        "id": "s3-twice",
        "en": "twice",
        "zh": "两次",
        "pos": "副词",
        "spell": "twice"
      },
      {
        "id": "s3-tyre-us-tire",
        "en": "tyre (US tire)",
        "zh": "轮胎",
        "pos": "名词",
        "spell": "tyre"
      },
      {
        "id": "s3-umbrella",
        "en": "umbrella",
        "zh": "雨伞",
        "pos": "名词",
        "spell": "umbrella"
      },
      {
        "id": "s3-unfriendly",
        "en": "unfriendly",
        "zh": "不友好的",
        "pos": "形容词",
        "spell": "unfriendly"
      },
      {
        "id": "s3-unhappy",
        "en": "unhappy",
        "zh": "不高兴的",
        "pos": "形容词",
        "spell": "unhappy"
      },
      {
        "id": "s3-uniform",
        "en": "uniform",
        "zh": "制服",
        "pos": "名词",
        "spell": "uniform"
      },
      {
        "id": "s3-university",
        "en": "university",
        "zh": "大学",
        "pos": "名词",
        "spell": "university"
      },
      {
        "id": "s3-unkind",
        "en": "unkind",
        "zh": "不友善的",
        "pos": "形容词",
        "spell": "unkind"
      },
      {
        "id": "s3-untidy",
        "en": "untidy",
        "zh": "不整洁的",
        "pos": "形容词",
        "spell": "untidy"
      },
      {
        "id": "s3-until",
        "en": "until",
        "zh": "直到",
        "pos": "介词",
        "spell": "until"
      },
      {
        "id": "s3-unusual",
        "en": "unusual",
        "zh": "不寻常的",
        "pos": "形容词",
        "spell": "unusual"
      },
      {
        "id": "s3-upset",
        "en": "upset",
        "zh": "难过的",
        "pos": "形容词",
        "spell": "upset"
      },
      {
        "id": "s3-use",
        "en": "use",
        "zh": "使用",
        "pos": "动词",
        "spell": "use"
      },
      {
        "id": "s3-usually",
        "en": "usually",
        "zh": "通常",
        "pos": "副词",
        "spell": "usually"
      },
      {
        "id": "s3-view",
        "en": "view",
        "zh": "景色；观点",
        "pos": "名词",
        "spell": "view"
      },
      {
        "id": "s3-violin",
        "en": "violin",
        "zh": "小提琴",
        "pos": "名词",
        "spell": "violin"
      },
      {
        "id": "s3-visit",
        "en": "visit",
        "zh": "参观；拜访",
        "pos": "动词",
        "spell": "visit"
      },
      {
        "id": "s3-volleyball",
        "en": "volleyball",
        "zh": "排球",
        "pos": "名词",
        "spell": "volleyball"
      },
      {
        "id": "s3-waiter",
        "en": "waiter",
        "zh": "服务员",
        "pos": "名词",
        "spell": "waiter"
      },
      {
        "id": "s3-warm",
        "en": "warm",
        "zh": "温暖的",
        "pos": "形容词",
        "spell": "warm"
      },
      {
        "id": "s3-wash-up",
        "en": "wash up",
        "zh": "洗餐具",
        "pos": "动词",
        "spell": "wash up"
      },
      {
        "id": "s3-way",
        "en": "way",
        "zh": "路；方式",
        "pos": "名词",
        "spell": "way"
      },
      {
        "id": "s3-wedding",
        "en": "wedding",
        "zh": "婚礼",
        "pos": "名词",
        "spell": "wedding"
      },
      {
        "id": "s3-west",
        "en": "west",
        "zh": "西",
        "pos": "名词",
        "spell": "west"
      },
      {
        "id": "s3-wheel",
        "en": "wheel",
        "zh": "轮子",
        "pos": "名词",
        "spell": "wheel"
      },
      {
        "id": "s3-while",
        "en": "while",
        "zh": "当……时",
        "pos": "连词",
        "spell": "while"
      },
      {
        "id": "s3-whisper",
        "en": "whisper",
        "zh": "低声说",
        "pos": "动词",
        "spell": "whisper"
      },
      {
        "id": "s3-wi-fi",
        "en": "Wi-Fi",
        "zh": "无线网络",
        "pos": "名词",
        "spell": "Wi-Fi"
      },
      {
        "id": "s3-wild",
        "en": "wild",
        "zh": "野生的",
        "pos": "形容词",
        "spell": "wild"
      },
      {
        "id": "s3-win",
        "en": "win",
        "zh": "赢",
        "pos": "名词",
        "spell": "win"
      },
      {
        "id": "s3-wing",
        "en": "wing",
        "zh": "翅膀",
        "pos": "名词",
        "spell": "wing"
      },
      {
        "id": "s3-winner",
        "en": "winner",
        "zh": "获胜者",
        "pos": "名词",
        "spell": "winner"
      },
      {
        "id": "s3-winter",
        "en": "winter",
        "zh": "冬天",
        "pos": "名词",
        "spell": "winter"
      },
      {
        "id": "s3-wish",
        "en": "wish",
        "zh": "希望；愿望",
        "pos": "名词 / 动词",
        "spell": "wish"
      },
      {
        "id": "s3-without",
        "en": "without",
        "zh": "没有",
        "pos": "介词",
        "spell": "without"
      },
      {
        "id": "s3-wonderful",
        "en": "wonderful",
        "zh": "精彩的",
        "pos": "形容词",
        "spell": "wonderful"
      },
      {
        "id": "s3-wood",
        "en": "wood",
        "zh": "木头；树林",
        "pos": "名词",
        "spell": "wood"
      },
      {
        "id": "s3-wool",
        "en": "wool",
        "zh": "羊毛",
        "pos": "名词",
        "spell": "wool"
      },
      {
        "id": "s3-worried",
        "en": "worried",
        "zh": "担心的",
        "pos": "形容词",
        "spell": "worried"
      },
      {
        "id": "s3-x-ray",
        "en": "x-ray",
        "zh": "X光",
        "pos": "名词",
        "spell": "x-ray"
      },
      {
        "id": "s3-yet",
        "en": "yet",
        "zh": "还；已经",
        "pos": "副词",
        "spell": "yet"
      },
      {
        "id": "s3-yoghurt",
        "en": "yoghurt",
        "zh": "酸奶",
        "pos": "名词",
        "spell": "yoghurt"
      },
      {
        "id": "s3-you-re-welcome",
        "en": "you’re welcome",
        "zh": "不客气",
        "pos": "感叹",
        "spell": "you’re welcome"
      },
      {
        "id": "s3-zero",
        "en": "zero",
        "zh": "零",
        "pos": "名词",
        "spell": "zero"
      },
      {
        "id": "s3-backpack-uk-rucksack",
        "en": "backpack (UK rucksack)",
        "zh": "背包",
        "pos": "名词",
        "spell": "backpack"
      },
      {
        "id": "s3-businessman-woman",
        "en": "businessman/woman",
        "zh": "商人",
        "pos": "名词",
        "spell": "businessman"
      },
      {
        "id": "s3-could-for-possibility",
        "en": "could (for possibility)",
        "zh": "可能",
        "pos": "动词",
        "spell": "could"
      },
      {
        "id": "s3-kilometre",
        "en": "kilometre",
        "zh": "公里",
        "pos": "名词",
        "spell": "kilometre"
      },
      {
        "id": "s3-pajamas-uk-pyjamas",
        "en": "pajamas (UK pyjamas)",
        "zh": "睡衣",
        "pos": "名词",
        "spell": "pajamas"
      },
      {
        "id": "s3-programme",
        "en": "programme",
        "zh": "节目；计划",
        "pos": "名词",
        "spell": "programme"
      },
      {
        "id": "s3-right-as-in-direction",
        "en": "right (as in direction)",
        "zh": "右边；对的",
        "pos": "形容词 / 副词",
        "spell": "right"
      },
      {
        "id": "s3-rucksack",
        "en": "rucksack",
        "zh": "背包",
        "pos": "名词",
        "spell": "rucksack"
      },
      {
        "id": "s3-theatre-us-theater",
        "en": "theatre (US theater)",
        "zh": "剧院",
        "pos": "名词",
        "spell": "theatre"
      },
      {
        "id": "s3-torch-us-flashlight",
        "en": "torch (US flashlight)",
        "zh": "手电筒",
        "pos": "名词",
        "spell": "torch"
      },
      {
        "id": "s3-take-it-takes-5-minutes",
        "en": "take (it takes 5 minutes)",
        "zh": "拿；乘坐",
        "pos": "动词",
        "spell": "take"
      }
    ],
    "hippo4": [
      {
        "id": "h4-indicate",
        "en": "indicate",
        "zh": "表明",
        "pos": "动词",
        "spell": "indicate"
      },
      {
        "id": "h4-support",
        "en": "support",
        "zh": "支持",
        "pos": "名词 / 动词",
        "spell": "support"
      },
      {
        "id": "h4-keen",
        "en": "keen",
        "zh": "热衷的",
        "pos": "形容词",
        "spell": "keen"
      },
      {
        "id": "h4-attitude",
        "en": "attitude",
        "zh": "态度",
        "pos": "名词",
        "spell": "attitude"
      },
      {
        "id": "h4-despite",
        "en": "despite",
        "zh": "尽管",
        "pos": "介词",
        "spell": "despite"
      },
      {
        "id": "h4-recognise",
        "en": "recognise",
        "zh": "认识到",
        "pos": "动词",
        "spell": "recognise"
      },
      {
        "id": "h4-physical",
        "en": "physical",
        "zh": "身体的",
        "pos": "形容词",
        "spell": "physical"
      },
      {
        "id": "h4-confidence",
        "en": "confidence",
        "zh": "自信",
        "pos": "名词",
        "spell": "confidence"
      },
      {
        "id": "h4-bargain",
        "en": "bargain",
        "zh": "便宜货",
        "pos": "名词",
        "spell": "bargain"
      },
      {
        "id": "h4-bland",
        "en": "bland",
        "zh": "淡而无味的",
        "pos": "形容词",
        "spell": "bland"
      },
      {
        "id": "h4-whisk",
        "en": "whisk",
        "zh": "搅打",
        "pos": "动词",
        "spell": "whisk"
      },
      {
        "id": "h4-sentence",
        "en": "sentence",
        "zh": "判决；句子",
        "pos": "名词",
        "spell": "sentence"
      },
      {
        "id": "h4-anxious",
        "en": "anxious",
        "zh": "焦虑的",
        "pos": "形容词",
        "spell": "anxious"
      },
      {
        "id": "h4-arrogant",
        "en": "arrogant",
        "zh": "傲慢的",
        "pos": "形容词",
        "spell": "arrogant"
      },
      {
        "id": "h4-arrogantly",
        "en": "arrogantly",
        "zh": "傲慢地",
        "pos": "副词",
        "spell": "arrogantly"
      },
      {
        "id": "h4-nagging",
        "en": "nagging",
        "zh": "唠叨",
        "pos": "名词",
        "spell": "nagging"
      },
      {
        "id": "h4-luxury",
        "en": "luxury",
        "zh": "奢侈品",
        "pos": "名词",
        "spell": "luxury"
      },
      {
        "id": "h4-stew",
        "en": "stew",
        "zh": "炖菜",
        "pos": "名词",
        "spell": "stew"
      },
      {
        "id": "h4-verdict",
        "en": "verdict",
        "zh": "裁决",
        "pos": "名词",
        "spell": "verdict"
      },
      {
        "id": "h4-accusation",
        "en": "accusation",
        "zh": "指控",
        "pos": "名词",
        "spell": "accusation"
      },
      {
        "id": "h4-punishment",
        "en": "punishment",
        "zh": "惩罚",
        "pos": "名词",
        "spell": "punishment"
      },
      {
        "id": "h4-priority",
        "en": "priority",
        "zh": "优先",
        "pos": "名词",
        "spell": "priority"
      },
      {
        "id": "h4-survey",
        "en": "survey",
        "zh": "调查",
        "pos": "名词",
        "spell": "survey"
      },
      {
        "id": "h4-academic",
        "en": "academic",
        "zh": "学业的",
        "pos": "形容词",
        "spell": "academic"
      },
      {
        "id": "h4-athlete",
        "en": "athlete",
        "zh": "运动员",
        "pos": "名词",
        "spell": "athlete"
      },
      {
        "id": "h4-valuable",
        "en": "valuable",
        "zh": "有价值的",
        "pos": "形容词",
        "spell": "valuable"
      },
      {
        "id": "h4-stress",
        "en": "stress",
        "zh": "压力",
        "pos": "名词",
        "spell": "stress"
      },
      {
        "id": "h4-social",
        "en": "social",
        "zh": "社交的",
        "pos": "形容词",
        "spell": "social"
      },
      {
        "id": "h4-guilty",
        "en": "guilty",
        "zh": "有罪的",
        "pos": "形容词",
        "spell": "guilty"
      },
      {
        "id": "h4-smooth",
        "en": "smooth",
        "zh": "光滑的",
        "pos": "形容词",
        "spell": "smooth"
      },
      {
        "id": "h4-deduce",
        "en": "deduce",
        "zh": "推断",
        "pos": "动词",
        "spell": "deduce"
      },
      {
        "id": "h4-reckon",
        "en": "reckon",
        "zh": "估计；指望",
        "pos": "动词",
        "spell": "reckon"
      },
      {
        "id": "h4-scrub",
        "en": "scrub",
        "zh": "擦洗",
        "pos": "动词",
        "spell": "scrub"
      },
      {
        "id": "h4-polish",
        "en": "polish",
        "zh": "擦亮",
        "pos": "动词",
        "spell": "polish"
      },
      {
        "id": "h4-crush",
        "en": "crush",
        "zh": "压碎",
        "pos": "动词",
        "spell": "crush"
      },
      {
        "id": "h4-demand",
        "en": "demand",
        "zh": "要求",
        "pos": "动词",
        "spell": "demand"
      },
      {
        "id": "h4-neither",
        "en": "neither",
        "zh": "两者都不",
        "pos": "限定词 / 代词",
        "spell": "neither"
      },
      {
        "id": "h4-apologize",
        "en": "apologize",
        "zh": "道歉",
        "pos": "动词",
        "spell": "apologize"
      },
      {
        "id": "h4-stain",
        "en": "stain",
        "zh": "污渍",
        "pos": "名词",
        "spell": "stain"
      },
      {
        "id": "h4-grasp",
        "en": "grasp",
        "zh": "抓住；理解",
        "pos": "动词",
        "spell": "grasp"
      },
      {
        "id": "h4-convert",
        "en": "convert",
        "zh": "转变",
        "pos": "动词",
        "spell": "convert"
      },
      {
        "id": "h4-scarcely",
        "en": "scarcely",
        "zh": "刚……就",
        "pos": "副词",
        "spell": "scarcely"
      },
      {
        "id": "h4-pandemic",
        "en": "pandemic",
        "zh": "大流行病",
        "pos": "名词",
        "spell": "pandemic"
      },
      {
        "id": "h4-entertainment",
        "en": "entertainment",
        "zh": "娱乐",
        "pos": "名词",
        "spell": "entertainment"
      },
      {
        "id": "h4-well-off",
        "en": "well off",
        "zh": "富裕的",
        "pos": "形容词",
        "spell": "well off"
      },
      {
        "id": "h4-in-two-minds",
        "en": "in two minds",
        "zh": "犹豫不决",
        "pos": "短语",
        "spell": "in two minds"
      },
      {
        "id": "h4-put-up-with",
        "en": "put up with",
        "zh": "忍受",
        "pos": "短语",
        "spell": "put up with"
      },
      {
        "id": "h4-break-the-ice",
        "en": "break the ice",
        "zh": "打开话题",
        "pos": "短语",
        "spell": "break the ice"
      },
      {
        "id": "h4-on-her-own",
        "en": "on her own",
        "zh": "独自地",
        "pos": "短语",
        "spell": "on her own"
      },
      {
        "id": "h4-on-sale",
        "en": "on sale",
        "zh": "减价出售",
        "pos": "短语",
        "spell": "on sale"
      },
      {
        "id": "h4-take-care-of",
        "en": "take care of",
        "zh": "照顾",
        "pos": "短语",
        "spell": "take care of"
      },
      {
        "id": "h4-be-fond-of",
        "en": "be fond of",
        "zh": "喜欢",
        "pos": "短语",
        "spell": "be fond of"
      },
      {
        "id": "h4-hang-out",
        "en": "hang out",
        "zh": "闲逛",
        "pos": "短语",
        "spell": "hang out"
      },
      {
        "id": "h4-main-course",
        "en": "main course",
        "zh": "主菜",
        "pos": "名词",
        "spell": "main course"
      },
      {
        "id": "h4-sightseeing",
        "en": "sightseeing",
        "zh": "观光",
        "pos": "名词",
        "spell": "sightseeing"
      },
      {
        "id": "h4-delayed",
        "en": "delayed",
        "zh": "延误的",
        "pos": "形容词",
        "spell": "delayed"
      },
      {
        "id": "h4-especially",
        "en": "especially",
        "zh": "尤其",
        "pos": "副词",
        "spell": "especially"
      },
      {
        "id": "h4-accident",
        "en": "accident",
        "zh": "事故",
        "pos": "名词",
        "spell": "accident"
      },
      {
        "id": "h4-physical-activity",
        "en": "physical activity",
        "zh": "体育活动",
        "pos": "短语",
        "spell": "physical activity"
      },
      {
        "id": "h4-teenage-years",
        "en": "teenage years",
        "zh": "青少年时期",
        "pos": "短语",
        "spell": "teenage years"
      },
      {
        "id": "h4-researcher",
        "en": "researcher",
        "zh": "研究员",
        "pos": "名词",
        "spell": "researcher"
      },
      {
        "id": "h4-unsuccessful",
        "en": "unsuccessful",
        "zh": "不成功的",
        "pos": "形容词",
        "spell": "unsuccessful"
      },
      {
        "id": "h4-exam-preparation",
        "en": "exam preparation",
        "zh": "备考",
        "pos": "短语",
        "spell": "exam preparation"
      },
      {
        "id": "h4-join",
        "en": "join",
        "zh": "加入",
        "pos": "动词",
        "spell": "join"
      },
      {
        "id": "h4-professional",
        "en": "professional",
        "zh": "职业的",
        "pos": "形容词",
        "spell": "professional"
      },
      {
        "id": "h4-build-confidence",
        "en": "build confidence",
        "zh": "建立自信",
        "pos": "短语",
        "spell": "build confidence"
      },
      {
        "id": "h4-manage-stress",
        "en": "manage stress",
        "zh": "缓解压力",
        "pos": "短语",
        "spell": "manage stress"
      },
      {
        "id": "h4-social-skills",
        "en": "social skills",
        "zh": "社交技能",
        "pos": "短语",
        "spell": "social skills"
      },
      {
        "id": "h4-majority",
        "en": "majority",
        "zh": "大多数",
        "pos": "名词",
        "spell": "majority"
      },
      {
        "id": "h4-recent",
        "en": "recent",
        "zh": "最近的",
        "pos": "形容词",
        "spell": "recent"
      },
      {
        "id": "h4-studies",
        "en": "studies",
        "zh": "研究",
        "pos": "名词",
        "spell": "studies"
      },
      {
        "id": "h4-take-part-in",
        "en": "take part in",
        "zh": "参加",
        "pos": "短语",
        "spell": "take part in"
      },
      {
        "id": "h4-data",
        "en": "data",
        "zh": "数据",
        "pos": "名词",
        "spell": "data"
      },
      {
        "id": "h4-interest",
        "en": "interest",
        "zh": "兴趣",
        "pos": "名词",
        "spell": "interest"
      },
      {
        "id": "h4-coach",
        "en": "coach",
        "zh": "教练",
        "pos": "名词",
        "spell": "coach"
      },
      {
        "id": "h4-family-members",
        "en": "family members",
        "zh": "家庭成员",
        "pos": "短语",
        "spell": "family members"
      },
      {
        "id": "h4-leaving-little-time",
        "en": "leaving little time",
        "zh": "几乎不剩时间",
        "pos": "短语",
        "spell": "leaving little time"
      },
      {
        "id": "h4-two-fifths",
        "en": "two fifths",
        "zh": "五分之二",
        "pos": "短语",
        "spell": "two fifths"
      },
      {
        "id": "h4-unsure",
        "en": "unsure",
        "zh": "不确定的",
        "pos": "形容词",
        "spell": "unsure"
      },
      {
        "id": "h4-quarter",
        "en": "quarter",
        "zh": "四分之一",
        "pos": "名词",
        "spell": "quarter"
      },
      {
        "id": "h4-agreed",
        "en": "agreed",
        "zh": "同意",
        "pos": "动词",
        "spell": "agreed"
      },
      {
        "id": "h4-regular",
        "en": "regular",
        "zh": "经常的；规律的",
        "pos": "形容词",
        "spell": "regular"
      },
      {
        "id": "h4-develop",
        "en": "develop",
        "zh": "发展",
        "pos": "动词",
        "spell": "develop"
      },
      {
        "id": "h4-ten-year",
        "en": "ten-year",
        "zh": "十年的",
        "pos": "形容词",
        "spell": "ten-year"
      },
      {
        "id": "h4-birthday-cake",
        "en": "birthday cake",
        "zh": "生日蛋糕",
        "pos": "短语",
        "spell": "birthday cake"
      },
      {
        "id": "h4-cream",
        "en": "cream",
        "zh": "奶油",
        "pos": "名词",
        "spell": "cream"
      },
      {
        "id": "h4-until",
        "en": "until",
        "zh": "直到",
        "pos": "介词",
        "spell": "until"
      },
      {
        "id": "h4-yet",
        "en": "yet",
        "zh": "还；已经",
        "pos": "副词",
        "spell": "yet"
      },
      {
        "id": "h4-somewhat",
        "en": "somewhat",
        "zh": "有点",
        "pos": "副词",
        "spell": "somewhat"
      },
      {
        "id": "h4-afford",
        "en": "afford",
        "zh": "负担得起",
        "pos": "动词",
        "spell": "afford"
      },
      {
        "id": "h4-unpleasant-experience",
        "en": "unpleasant experience",
        "zh": "不愉快的经历",
        "pos": "短语",
        "spell": "unpleasant experience"
      },
      {
        "id": "h4-behaved",
        "en": "behaved",
        "zh": "表现",
        "pos": "动词",
        "spell": "behaved"
      },
      {
        "id": "h4-meeting",
        "en": "meeting",
        "zh": "会议",
        "pos": "名词",
        "spell": "meeting"
      },
      {
        "id": "h4-test-results",
        "en": "test results",
        "zh": "考试成绩",
        "pos": "短语",
        "spell": "test results"
      },
      {
        "id": "h4-refused",
        "en": "refused",
        "zh": "拒绝",
        "pos": "动词",
        "spell": "refused"
      },
      {
        "id": "h4-firemen",
        "en": "firemen",
        "zh": "消防员",
        "pos": "名词",
        "spell": "firemen"
      },
      {
        "id": "h4-dress",
        "en": "dress",
        "zh": "连衣裙",
        "pos": "名词",
        "spell": "dress"
      },
      {
        "id": "h4-honestly",
        "en": "honestly",
        "zh": "老实说",
        "pos": "副词",
        "spell": "honestly"
      },
      {
        "id": "h4-all-the-time",
        "en": "all the time",
        "zh": "一直",
        "pos": "短语",
        "spell": "all the time"
      },
      {
        "id": "h4-starting-a-task",
        "en": "starting a task",
        "zh": "开始一项任务",
        "pos": "短语",
        "spell": "starting a task"
      },
      {
        "id": "h4-delaying",
        "en": "delaying",
        "zh": "拖延",
        "pos": "动词",
        "spell": "delaying"
      },
      {
        "id": "h4-behaviour",
        "en": "behaviour",
        "zh": "行为",
        "pos": "名词",
        "spell": "behaviour"
      },
      {
        "id": "h4-professionals",
        "en": "professionals",
        "zh": "专业人士",
        "pos": "名词",
        "spell": "professionals"
      },
      {
        "id": "h4-everyday-lives",
        "en": "everyday lives",
        "zh": "日常生活",
        "pos": "短语",
        "spell": "everyday lives"
      },
      {
        "id": "h4-pleasant-activities",
        "en": "pleasant activities",
        "zh": "愉快的活动",
        "pos": "短语",
        "spell": "pleasant activities"
      },
      {
        "id": "h4-reorganising",
        "en": "reorganising",
        "zh": "重新整理",
        "pos": "动词",
        "spell": "reorganising"
      },
      {
        "id": "h4-experts",
        "en": "experts",
        "zh": "专家",
        "pos": "名词",
        "spell": "experts"
      },
      {
        "id": "h4-laziness",
        "en": "laziness",
        "zh": "懒惰",
        "pos": "名词",
        "spell": "laziness"
      },
      {
        "id": "h4-state-of-mind",
        "en": "state of mind",
        "zh": "心态",
        "pos": "短语",
        "spell": "state of mind"
      },
      {
        "id": "h4-deadlines",
        "en": "deadlines",
        "zh": "截止日期",
        "pos": "名词",
        "spell": "deadlines"
      },
      {
        "id": "h4-habit",
        "en": "habit",
        "zh": "习惯",
        "pos": "名词",
        "spell": "habit"
      },
      {
        "id": "h4-technique",
        "en": "technique",
        "zh": "方法",
        "pos": "名词",
        "spell": "technique"
      },
      {
        "id": "h4-time-limits",
        "en": "time limits",
        "zh": "时限",
        "pos": "短语",
        "spell": "time limits"
      },
      {
        "id": "h4-continuing",
        "en": "continuing",
        "zh": "继续",
        "pos": "动词",
        "spell": "continuing"
      },
      {
        "id": "h4-removing",
        "en": "removing",
        "zh": "去掉",
        "pos": "动词",
        "spell": "removing"
      },
      {
        "id": "h4-noisy",
        "en": "noisy",
        "zh": "吵闹的",
        "pos": "形容词",
        "spell": "noisy"
      },
      {
        "id": "h4-radios",
        "en": "radios",
        "zh": "收音机",
        "pos": "名词",
        "spell": "radios"
      },
      {
        "id": "h4-difference",
        "en": "difference",
        "zh": "差别",
        "pos": "名词",
        "spell": "difference"
      },
      {
        "id": "h4-fear",
        "en": "fear",
        "zh": "害怕；担心",
        "pos": "名词",
        "spell": "fear"
      },
      {
        "id": "h4-making-mistakes",
        "en": "making mistakes",
        "zh": "犯错",
        "pos": "短语",
        "spell": "making mistakes"
      },
      {
        "id": "h4-improve",
        "en": "improve",
        "zh": "改进",
        "pos": "动词",
        "spell": "improve"
      },
      {
        "id": "h4-practice",
        "en": "practice",
        "zh": "练习",
        "pos": "名词",
        "spell": "practice"
      },
      {
        "id": "h4-greater-confidence",
        "en": "greater confidence",
        "zh": "更大的自信",
        "pos": "短语",
        "spell": "greater confidence"
      },
      {
        "id": "h4-less-stress",
        "en": "less stress",
        "zh": "更少的压力",
        "pos": "短语",
        "spell": "less stress"
      },
      {
        "id": "h4-if-only",
        "en": "if only",
        "zh": "要是……就好了",
        "pos": "短语",
        "spell": "if only"
      },
      {
        "id": "h4-had-studied",
        "en": "had studied",
        "zh": "要是当初努力学习",
        "pos": "短语",
        "spell": "had studied"
      },
      {
        "id": "h4-had-seen",
        "en": "had seen",
        "zh": "曾经见过",
        "pos": "短语",
        "spell": "had seen"
      },
      {
        "id": "h4-had-her-house-painted",
        "en": "had her house painted",
        "zh": "请人粉刷房子",
        "pos": "短语",
        "spell": "had her house painted"
      },
      {
        "id": "h4-would-rather",
        "en": "would rather",
        "zh": "宁愿",
        "pos": "短语",
        "spell": "would rather"
      },
      {
        "id": "h4-by-the-time",
        "en": "by the time",
        "zh": "到……的时候",
        "pos": "短语",
        "spell": "by the time"
      },
      {
        "id": "h4-demanded",
        "en": "demanded",
        "zh": "要求",
        "pos": "动词",
        "spell": "demanded"
      },
      {
        "id": "h4-firm-information",
        "en": "firm information",
        "zh": "确切信息",
        "pos": "短语",
        "spell": "firm information"
      },
      {
        "id": "h4-apologized",
        "en": "apologized",
        "zh": "道歉",
        "pos": "动词",
        "spell": "apologized"
      },
      {
        "id": "h4-being-late",
        "en": "being late",
        "zh": "迟到",
        "pos": "短语",
        "spell": "being late"
      },
      {
        "id": "h4-wished",
        "en": "wished",
        "zh": "希望",
        "pos": "动词",
        "spell": "wished"
      },
      {
        "id": "h4-not-used-to",
        "en": "not used to",
        "zh": "不习惯",
        "pos": "短语",
        "spell": "not used to"
      },
      {
        "id": "h4-getting-up-early",
        "en": "getting up early",
        "zh": "早起",
        "pos": "短语",
        "spell": "getting up early"
      },
      {
        "id": "h4-will-have-lived",
        "en": "will have lived",
        "zh": "将已经居住",
        "pos": "短语",
        "spell": "will have lived"
      },
      {
        "id": "h4-must-have-received",
        "en": "must have received",
        "zh": "一定已经收到",
        "pos": "短语",
        "spell": "must have received"
      },
      {
        "id": "h4-available",
        "en": "available",
        "zh": "可得到的",
        "pos": "形容词",
        "spell": "available"
      },
      {
        "id": "h4-grass-stains",
        "en": "grass stains",
        "zh": "草渍",
        "pos": "短语",
        "spell": "grass stains"
      },
      {
        "id": "h4-soccer-uk-football",
        "en": "soccer (UK football)",
        "zh": "足球",
        "pos": "名词",
        "spell": ""
      },
      {
        "id": "h4-could",
        "en": "could",
        "zh": "能；可以（过去式）",
        "pos": "动词",
        "spell": "could"
      }
    ],
    "hippo5": [
      {
        "id": "h5-indicate",
        "en": "indicate",
        "zh": "表明",
        "pos": "动词",
        "spell": "indicate"
      },
      {
        "id": "h5-support",
        "en": "support",
        "zh": "支持",
        "pos": "名词 / 动词",
        "spell": "support"
      },
      {
        "id": "h5-keen",
        "en": "keen",
        "zh": "热衷的",
        "pos": "形容词",
        "spell": "keen"
      },
      {
        "id": "h5-attitude",
        "en": "attitude",
        "zh": "态度",
        "pos": "名词",
        "spell": "attitude"
      },
      {
        "id": "h5-despite",
        "en": "despite",
        "zh": "尽管",
        "pos": "介词",
        "spell": "despite"
      },
      {
        "id": "h5-recognise",
        "en": "recognise",
        "zh": "认识到",
        "pos": "动词",
        "spell": "recognise"
      },
      {
        "id": "h5-physical",
        "en": "physical",
        "zh": "身体的",
        "pos": "形容词",
        "spell": "physical"
      },
      {
        "id": "h5-confidence",
        "en": "confidence",
        "zh": "自信",
        "pos": "名词",
        "spell": "confidence"
      },
      {
        "id": "h5-bargain",
        "en": "bargain",
        "zh": "便宜货",
        "pos": "名词",
        "spell": "bargain"
      },
      {
        "id": "h5-bland",
        "en": "bland",
        "zh": "淡而无味的",
        "pos": "形容词",
        "spell": "bland"
      },
      {
        "id": "h5-whisk",
        "en": "whisk",
        "zh": "搅打",
        "pos": "动词",
        "spell": "whisk"
      },
      {
        "id": "h5-sentence",
        "en": "sentence",
        "zh": "判决；句子",
        "pos": "名词",
        "spell": "sentence"
      },
      {
        "id": "h5-anxious",
        "en": "anxious",
        "zh": "焦虑的",
        "pos": "形容词",
        "spell": "anxious"
      },
      {
        "id": "h5-arrogant",
        "en": "arrogant",
        "zh": "傲慢的",
        "pos": "形容词",
        "spell": "arrogant"
      },
      {
        "id": "h5-arrogantly",
        "en": "arrogantly",
        "zh": "傲慢地",
        "pos": "副词",
        "spell": "arrogantly"
      },
      {
        "id": "h5-nagging",
        "en": "nagging",
        "zh": "唠叨",
        "pos": "名词",
        "spell": "nagging"
      },
      {
        "id": "h5-luxury",
        "en": "luxury",
        "zh": "奢侈品",
        "pos": "名词",
        "spell": "luxury"
      },
      {
        "id": "h5-stew",
        "en": "stew",
        "zh": "炖菜",
        "pos": "名词",
        "spell": "stew"
      },
      {
        "id": "h5-verdict",
        "en": "verdict",
        "zh": "裁决",
        "pos": "名词",
        "spell": "verdict"
      },
      {
        "id": "h5-accusation",
        "en": "accusation",
        "zh": "指控",
        "pos": "名词",
        "spell": "accusation"
      },
      {
        "id": "h5-punishment",
        "en": "punishment",
        "zh": "惩罚",
        "pos": "名词",
        "spell": "punishment"
      },
      {
        "id": "h5-priority",
        "en": "priority",
        "zh": "优先",
        "pos": "名词",
        "spell": "priority"
      },
      {
        "id": "h5-survey",
        "en": "survey",
        "zh": "调查",
        "pos": "名词",
        "spell": "survey"
      },
      {
        "id": "h5-academic",
        "en": "academic",
        "zh": "学业的",
        "pos": "形容词",
        "spell": "academic"
      },
      {
        "id": "h5-athlete",
        "en": "athlete",
        "zh": "运动员",
        "pos": "名词",
        "spell": "athlete"
      },
      {
        "id": "h5-valuable",
        "en": "valuable",
        "zh": "有价值的",
        "pos": "形容词",
        "spell": "valuable"
      },
      {
        "id": "h5-stress",
        "en": "stress",
        "zh": "压力",
        "pos": "名词",
        "spell": "stress"
      },
      {
        "id": "h5-social",
        "en": "social",
        "zh": "社交的",
        "pos": "形容词",
        "spell": "social"
      },
      {
        "id": "h5-guilty",
        "en": "guilty",
        "zh": "有罪的",
        "pos": "形容词",
        "spell": "guilty"
      },
      {
        "id": "h5-smooth",
        "en": "smooth",
        "zh": "光滑的",
        "pos": "形容词",
        "spell": "smooth"
      },
      {
        "id": "h5-deduce",
        "en": "deduce",
        "zh": "推断",
        "pos": "动词",
        "spell": "deduce"
      },
      {
        "id": "h5-reckon",
        "en": "reckon",
        "zh": "估计；指望",
        "pos": "动词",
        "spell": "reckon"
      },
      {
        "id": "h5-scrub",
        "en": "scrub",
        "zh": "擦洗",
        "pos": "动词",
        "spell": "scrub"
      },
      {
        "id": "h5-polish",
        "en": "polish",
        "zh": "擦亮",
        "pos": "动词",
        "spell": "polish"
      },
      {
        "id": "h5-crush",
        "en": "crush",
        "zh": "压碎",
        "pos": "动词",
        "spell": "crush"
      },
      {
        "id": "h5-demand",
        "en": "demand",
        "zh": "要求",
        "pos": "动词",
        "spell": "demand"
      },
      {
        "id": "h5-neither",
        "en": "neither",
        "zh": "两者都不",
        "pos": "限定词 / 代词",
        "spell": "neither"
      },
      {
        "id": "h5-apologize",
        "en": "apologize",
        "zh": "道歉",
        "pos": "动词",
        "spell": "apologize"
      },
      {
        "id": "h5-stain",
        "en": "stain",
        "zh": "污渍",
        "pos": "名词",
        "spell": "stain"
      },
      {
        "id": "h5-grasp",
        "en": "grasp",
        "zh": "抓住；理解",
        "pos": "动词",
        "spell": "grasp"
      },
      {
        "id": "h5-convert",
        "en": "convert",
        "zh": "转变",
        "pos": "动词",
        "spell": "convert"
      },
      {
        "id": "h5-scarcely",
        "en": "scarcely",
        "zh": "刚……就",
        "pos": "副词",
        "spell": "scarcely"
      },
      {
        "id": "h5-pandemic",
        "en": "pandemic",
        "zh": "大流行病",
        "pos": "名词",
        "spell": "pandemic"
      },
      {
        "id": "h5-entertainment",
        "en": "entertainment",
        "zh": "娱乐",
        "pos": "名词",
        "spell": "entertainment"
      },
      {
        "id": "h5-well-off",
        "en": "well off",
        "zh": "富裕的",
        "pos": "形容词",
        "spell": "well off"
      },
      {
        "id": "h5-in-two-minds",
        "en": "in two minds",
        "zh": "犹豫不决",
        "pos": "短语",
        "spell": "in two minds"
      },
      {
        "id": "h5-put-up-with",
        "en": "put up with",
        "zh": "忍受",
        "pos": "短语",
        "spell": "put up with"
      },
      {
        "id": "h5-break-the-ice",
        "en": "break the ice",
        "zh": "打开话题",
        "pos": "短语",
        "spell": "break the ice"
      },
      {
        "id": "h5-on-her-own",
        "en": "on her own",
        "zh": "独自地",
        "pos": "短语",
        "spell": "on her own"
      },
      {
        "id": "h5-on-sale",
        "en": "on sale",
        "zh": "减价出售",
        "pos": "短语",
        "spell": "on sale"
      },
      {
        "id": "h5-take-care-of",
        "en": "take care of",
        "zh": "照顾",
        "pos": "短语",
        "spell": "take care of"
      },
      {
        "id": "h5-be-fond-of",
        "en": "be fond of",
        "zh": "喜欢",
        "pos": "短语",
        "spell": "be fond of"
      },
      {
        "id": "h5-hang-out",
        "en": "hang out",
        "zh": "闲逛",
        "pos": "短语",
        "spell": "hang out"
      },
      {
        "id": "h5-main-course",
        "en": "main course",
        "zh": "主菜",
        "pos": "名词",
        "spell": "main course"
      },
      {
        "id": "h5-sightseeing",
        "en": "sightseeing",
        "zh": "观光",
        "pos": "名词",
        "spell": "sightseeing"
      },
      {
        "id": "h5-delayed",
        "en": "delayed",
        "zh": "延误的",
        "pos": "形容词",
        "spell": "delayed"
      },
      {
        "id": "h5-especially",
        "en": "especially",
        "zh": "尤其",
        "pos": "副词",
        "spell": "especially"
      },
      {
        "id": "h5-accident",
        "en": "accident",
        "zh": "事故",
        "pos": "名词",
        "spell": "accident"
      },
      {
        "id": "h5-physical-activity",
        "en": "physical activity",
        "zh": "体育活动",
        "pos": "短语",
        "spell": "physical activity"
      },
      {
        "id": "h5-teenage-years",
        "en": "teenage years",
        "zh": "青少年时期",
        "pos": "短语",
        "spell": "teenage years"
      },
      {
        "id": "h5-researcher",
        "en": "researcher",
        "zh": "研究员",
        "pos": "名词",
        "spell": "researcher"
      },
      {
        "id": "h5-unsuccessful",
        "en": "unsuccessful",
        "zh": "不成功的",
        "pos": "形容词",
        "spell": "unsuccessful"
      },
      {
        "id": "h5-exam-preparation",
        "en": "exam preparation",
        "zh": "备考",
        "pos": "短语",
        "spell": "exam preparation"
      },
      {
        "id": "h5-join",
        "en": "join",
        "zh": "加入",
        "pos": "动词",
        "spell": "join"
      },
      {
        "id": "h5-professional",
        "en": "professional",
        "zh": "职业的",
        "pos": "形容词",
        "spell": "professional"
      },
      {
        "id": "h5-build-confidence",
        "en": "build confidence",
        "zh": "建立自信",
        "pos": "短语",
        "spell": "build confidence"
      },
      {
        "id": "h5-manage-stress",
        "en": "manage stress",
        "zh": "缓解压力",
        "pos": "短语",
        "spell": "manage stress"
      },
      {
        "id": "h5-social-skills",
        "en": "social skills",
        "zh": "社交技能",
        "pos": "短语",
        "spell": "social skills"
      },
      {
        "id": "h5-majority",
        "en": "majority",
        "zh": "大多数",
        "pos": "名词",
        "spell": "majority"
      },
      {
        "id": "h5-recent",
        "en": "recent",
        "zh": "最近的",
        "pos": "形容词",
        "spell": "recent"
      },
      {
        "id": "h5-studies",
        "en": "studies",
        "zh": "研究",
        "pos": "名词",
        "spell": "studies"
      },
      {
        "id": "h5-take-part-in",
        "en": "take part in",
        "zh": "参加",
        "pos": "短语",
        "spell": "take part in"
      },
      {
        "id": "h5-data",
        "en": "data",
        "zh": "数据",
        "pos": "名词",
        "spell": "data"
      },
      {
        "id": "h5-interest",
        "en": "interest",
        "zh": "兴趣",
        "pos": "名词",
        "spell": "interest"
      },
      {
        "id": "h5-coach",
        "en": "coach",
        "zh": "教练",
        "pos": "名词",
        "spell": "coach"
      },
      {
        "id": "h5-family-members",
        "en": "family members",
        "zh": "家庭成员",
        "pos": "短语",
        "spell": "family members"
      },
      {
        "id": "h5-leaving-little-time",
        "en": "leaving little time",
        "zh": "几乎不剩时间",
        "pos": "短语",
        "spell": "leaving little time"
      },
      {
        "id": "h5-two-fifths",
        "en": "two fifths",
        "zh": "五分之二",
        "pos": "短语",
        "spell": "two fifths"
      },
      {
        "id": "h5-unsure",
        "en": "unsure",
        "zh": "不确定的",
        "pos": "形容词",
        "spell": "unsure"
      },
      {
        "id": "h5-quarter",
        "en": "quarter",
        "zh": "四分之一",
        "pos": "名词",
        "spell": "quarter"
      },
      {
        "id": "h5-agreed",
        "en": "agreed",
        "zh": "同意",
        "pos": "动词",
        "spell": "agreed"
      },
      {
        "id": "h5-regular",
        "en": "regular",
        "zh": "经常的；规律的",
        "pos": "形容词",
        "spell": "regular"
      },
      {
        "id": "h5-develop",
        "en": "develop",
        "zh": "发展",
        "pos": "动词",
        "spell": "develop"
      },
      {
        "id": "h5-ten-year",
        "en": "ten-year",
        "zh": "十年的",
        "pos": "形容词",
        "spell": "ten-year"
      },
      {
        "id": "h5-birthday-cake",
        "en": "birthday cake",
        "zh": "生日蛋糕",
        "pos": "短语",
        "spell": "birthday cake"
      },
      {
        "id": "h5-cream",
        "en": "cream",
        "zh": "奶油",
        "pos": "名词",
        "spell": "cream"
      },
      {
        "id": "h5-until",
        "en": "until",
        "zh": "直到",
        "pos": "介词",
        "spell": "until"
      },
      {
        "id": "h5-yet",
        "en": "yet",
        "zh": "还；已经",
        "pos": "副词",
        "spell": "yet"
      },
      {
        "id": "h5-somewhat",
        "en": "somewhat",
        "zh": "有点",
        "pos": "副词",
        "spell": "somewhat"
      },
      {
        "id": "h5-afford",
        "en": "afford",
        "zh": "负担得起",
        "pos": "动词",
        "spell": "afford"
      },
      {
        "id": "h5-unpleasant-experience",
        "en": "unpleasant experience",
        "zh": "不愉快的经历",
        "pos": "短语",
        "spell": "unpleasant experience"
      },
      {
        "id": "h5-behaved",
        "en": "behaved",
        "zh": "表现",
        "pos": "动词",
        "spell": "behaved"
      },
      {
        "id": "h5-meeting",
        "en": "meeting",
        "zh": "会议",
        "pos": "名词",
        "spell": "meeting"
      },
      {
        "id": "h5-test-results",
        "en": "test results",
        "zh": "考试成绩",
        "pos": "短语",
        "spell": "test results"
      },
      {
        "id": "h5-refused",
        "en": "refused",
        "zh": "拒绝",
        "pos": "动词",
        "spell": "refused"
      },
      {
        "id": "h5-firemen",
        "en": "firemen",
        "zh": "消防员",
        "pos": "名词",
        "spell": "firemen"
      },
      {
        "id": "h5-dress",
        "en": "dress",
        "zh": "连衣裙",
        "pos": "名词",
        "spell": "dress"
      },
      {
        "id": "h5-honestly",
        "en": "honestly",
        "zh": "老实说",
        "pos": "副词",
        "spell": "honestly"
      },
      {
        "id": "h5-all-the-time",
        "en": "all the time",
        "zh": "一直",
        "pos": "短语",
        "spell": "all the time"
      },
      {
        "id": "h5-starting-a-task",
        "en": "starting a task",
        "zh": "开始一项任务",
        "pos": "短语",
        "spell": "starting a task"
      },
      {
        "id": "h5-delaying",
        "en": "delaying",
        "zh": "拖延",
        "pos": "动词",
        "spell": "delaying"
      },
      {
        "id": "h5-behaviour",
        "en": "behaviour",
        "zh": "行为",
        "pos": "名词",
        "spell": "behaviour"
      },
      {
        "id": "h5-professionals",
        "en": "professionals",
        "zh": "专业人士",
        "pos": "名词",
        "spell": "professionals"
      },
      {
        "id": "h5-everyday-lives",
        "en": "everyday lives",
        "zh": "日常生活",
        "pos": "短语",
        "spell": "everyday lives"
      },
      {
        "id": "h5-pleasant-activities",
        "en": "pleasant activities",
        "zh": "愉快的活动",
        "pos": "短语",
        "spell": "pleasant activities"
      },
      {
        "id": "h5-reorganising",
        "en": "reorganising",
        "zh": "重新整理",
        "pos": "动词",
        "spell": "reorganising"
      },
      {
        "id": "h5-experts",
        "en": "experts",
        "zh": "专家",
        "pos": "名词",
        "spell": "experts"
      },
      {
        "id": "h5-laziness",
        "en": "laziness",
        "zh": "懒惰",
        "pos": "名词",
        "spell": "laziness"
      },
      {
        "id": "h5-state-of-mind",
        "en": "state of mind",
        "zh": "心态",
        "pos": "短语",
        "spell": "state of mind"
      },
      {
        "id": "h5-deadlines",
        "en": "deadlines",
        "zh": "截止日期",
        "pos": "名词",
        "spell": "deadlines"
      },
      {
        "id": "h5-habit",
        "en": "habit",
        "zh": "习惯",
        "pos": "名词",
        "spell": "habit"
      },
      {
        "id": "h5-technique",
        "en": "technique",
        "zh": "方法",
        "pos": "名词",
        "spell": "technique"
      },
      {
        "id": "h5-time-limits",
        "en": "time limits",
        "zh": "时限",
        "pos": "短语",
        "spell": "time limits"
      },
      {
        "id": "h5-continuing",
        "en": "continuing",
        "zh": "继续",
        "pos": "动词",
        "spell": "continuing"
      },
      {
        "id": "h5-removing",
        "en": "removing",
        "zh": "去掉",
        "pos": "动词",
        "spell": "removing"
      },
      {
        "id": "h5-noisy",
        "en": "noisy",
        "zh": "吵闹的",
        "pos": "形容词",
        "spell": "noisy"
      },
      {
        "id": "h5-radios",
        "en": "radios",
        "zh": "收音机",
        "pos": "名词",
        "spell": "radios"
      },
      {
        "id": "h5-difference",
        "en": "difference",
        "zh": "差别",
        "pos": "名词",
        "spell": "difference"
      },
      {
        "id": "h5-fear",
        "en": "fear",
        "zh": "害怕；担心",
        "pos": "名词",
        "spell": "fear"
      },
      {
        "id": "h5-making-mistakes",
        "en": "making mistakes",
        "zh": "犯错",
        "pos": "短语",
        "spell": "making mistakes"
      },
      {
        "id": "h5-improve",
        "en": "improve",
        "zh": "改进",
        "pos": "动词",
        "spell": "improve"
      },
      {
        "id": "h5-practice",
        "en": "practice",
        "zh": "练习",
        "pos": "名词",
        "spell": "practice"
      },
      {
        "id": "h5-greater-confidence",
        "en": "greater confidence",
        "zh": "更大的自信",
        "pos": "短语",
        "spell": "greater confidence"
      },
      {
        "id": "h5-less-stress",
        "en": "less stress",
        "zh": "更少的压力",
        "pos": "短语",
        "spell": "less stress"
      },
      {
        "id": "h5-if-only",
        "en": "if only",
        "zh": "要是……就好了",
        "pos": "短语",
        "spell": "if only"
      },
      {
        "id": "h5-had-studied",
        "en": "had studied",
        "zh": "要是当初努力学习",
        "pos": "短语",
        "spell": "had studied"
      },
      {
        "id": "h5-had-seen",
        "en": "had seen",
        "zh": "曾经见过",
        "pos": "短语",
        "spell": "had seen"
      },
      {
        "id": "h5-had-her-house-painted",
        "en": "had her house painted",
        "zh": "请人粉刷房子",
        "pos": "短语",
        "spell": "had her house painted"
      },
      {
        "id": "h5-would-rather",
        "en": "would rather",
        "zh": "宁愿",
        "pos": "短语",
        "spell": "would rather"
      },
      {
        "id": "h5-by-the-time",
        "en": "by the time",
        "zh": "到……的时候",
        "pos": "短语",
        "spell": "by the time"
      },
      {
        "id": "h5-demanded",
        "en": "demanded",
        "zh": "要求",
        "pos": "动词",
        "spell": "demanded"
      },
      {
        "id": "h5-firm-information",
        "en": "firm information",
        "zh": "确切信息",
        "pos": "短语",
        "spell": "firm information"
      },
      {
        "id": "h5-apologized",
        "en": "apologized",
        "zh": "道歉",
        "pos": "动词",
        "spell": "apologized"
      },
      {
        "id": "h5-being-late",
        "en": "being late",
        "zh": "迟到",
        "pos": "短语",
        "spell": "being late"
      },
      {
        "id": "h5-wished",
        "en": "wished",
        "zh": "希望",
        "pos": "动词",
        "spell": "wished"
      },
      {
        "id": "h5-not-used-to",
        "en": "not used to",
        "zh": "不习惯",
        "pos": "短语",
        "spell": "not used to"
      },
      {
        "id": "h5-getting-up-early",
        "en": "getting up early",
        "zh": "早起",
        "pos": "短语",
        "spell": "getting up early"
      },
      {
        "id": "h5-will-have-lived",
        "en": "will have lived",
        "zh": "将已经居住",
        "pos": "短语",
        "spell": "will have lived"
      },
      {
        "id": "h5-must-have-received",
        "en": "must have received",
        "zh": "一定已经收到",
        "pos": "短语",
        "spell": "must have received"
      },
      {
        "id": "h5-available",
        "en": "available",
        "zh": "可得到的",
        "pos": "形容词",
        "spell": "available"
      },
      {
        "id": "h5-grass-stains",
        "en": "grass stains",
        "zh": "草渍",
        "pos": "短语",
        "spell": "grass stains"
      },
      {
        "id": "h5-soccer-uk-football",
        "en": "soccer (UK football)",
        "zh": "足球",
        "pos": "名词",
        "spell": ""
      },
      {
        "id": "h5-could",
        "en": "could",
        "zh": "能；可以（过去式）",
        "pos": "动词",
        "spell": "could"
      }
    ]
  }
};
