const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello, world!!!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: jay@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("This is the coolest website you ever vistied 😛");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
