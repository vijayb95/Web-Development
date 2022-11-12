const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  res.send("The result for calculation is " + (num1 + num2));
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  res.send(
    "Your BMI is " + Math.round(weight / ((height / 100) * (height / 100)))
  );
});

app.listen("3000", function () {
  console.log("Server started!");
});
