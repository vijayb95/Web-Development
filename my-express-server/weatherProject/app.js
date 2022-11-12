const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const city = req.body.cityName;
  const apiKey = "ec6fb34a5d85abe70e36fa6d58cf0eaa";
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=" +
    units;

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const iconUrl =
        "http://openweathermap.org/img/wn/" +
        weatherData.weather[0].icon +
        "@2x.png";
      res.write(
        "<h1>The temperature in " +
          city +
          " is " +
          temp +
          " degress Celsius.</h1>"
      );
      res.write("<p>The weather is currently " + description + ".</p>");
      res.write("<img src=" + iconUrl + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on 3000");
});
