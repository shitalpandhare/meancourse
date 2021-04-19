const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Accept,Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,PUT");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({ message: "post added sucessfully!" });
});

app.get("/api/posts", (req, res, next) => {
  const post = [
    {
      id: "1rfwe",
      title: "first serverside post",
      content: "first post content",
    },
    {
      id: "2fghfgh",
      title: "second  server side post ",
      content: "second post content",
    },
  ];

  res.status(200).json({
    message: "Post fetch successfully",
    posts: post,
  });
});

module.exports = app;
