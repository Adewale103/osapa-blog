const express = require("express");
const path = require("path");
const app = new express();
const ejs = require("ejs");
const BlogPost = require("./models/BlogPost.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/blogProject", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.listen(4000, () => console.log("App is listening on port 4000"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

app.post("/posts/store", async (req, res) => {
  console.log(req.body);
  await BlogPost.create(
    { title: req.body.title, body: req.body.body },
    (error, blogpost) => {
      res.redirect("/");
    }
  );
  // const blog = new BlogPost({
  //   title: req.body.title,
  //   body: req.body.body,
  // });
  // await blog.save();
  // console.log({ blog });
});
