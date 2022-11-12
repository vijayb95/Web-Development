const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

const todoItems = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function (req, res) {
  res.render("list", { listTitle: date.getDate(), todoItems: todoItems });
});

app.post("/", function (req, res) {
  let todoItem = req.body.todoItem;
  if (req.body.list === "Work") {
    workItems.push(todoItem);
    res.redirect("/work");
  } else {
    todoItems.push(todoItem);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work To-Do's", todoItems: workItems });
});
app.get("/about", function (req, res) {
  res.render("about", { listTitle: "About", todoItems: workItems });
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
