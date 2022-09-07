const blogArticlesData = 

[{title: "first post",
description: "hello world",
tags: ["introduction"],
fileUpload: "alpaca.jpg",
upvote: {
  type: 5,
  default: 0,
},
creator: "TO",
createdAt: {
  type: Date,
  default: new Date(),
}},



    {title: "second post",
    description: "hello world",
    tags: ["introduction"],
    fileUpload: "alpaca.jpg",
    upvote: {
      type: 5,
      default: 0,
    },
    creator: "TO",
    createdAt: {
      type: Date,
      default: new Date(),
    }},
    

    {title: "new post",
description: "bye world",
tags: ["secondpost"],
fileUpload: "superheroes.jpg",
upvote: {
  type: 3,
  default: 0,
},
creator: "TO",
createdAt: {
  type: Date,
  default: new Date(),
}}
]

module.exports = blogArticlesData;