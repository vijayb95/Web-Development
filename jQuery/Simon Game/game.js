var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var gamePattern = [];

var currentLevel = 0;

function nextSequence() {
  $("#level-title").text("Level " + currentLevel);
  var randomNumber = Math.round(Math.random() * 3);
  var randomChoosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChoosenColor);

  $("#" + randomChoosenColor)
    .fadeOut(100)
    .fadeIn(100);

  playAudio(randomChoosenColor);

  currentLevel++;
}

function animatePress(choosenColor) {
  $("#" + choosenColor).addClass("pressed");
  setTimeout(() => {
    $("#" + choosenColor).removeClass("pressed");
  }, 100);
}

function handler(userChoosenColor) {
  if (gamePattern.length < 1) {
    return;
  }
  userClickedPattern.push(userChoosenColor);

  animatePress(userChoosenColor);

  playAudio(userChoosenColor);

  validate();
}

function validate() {
  for (let index = 0; index < userClickedPattern.length; index++) {
    if (userClickedPattern[index] != gamePattern[index]) {
      playAudio("wrong");
      resetGame();
      return;
    } else if (index === gamePattern.length - 1) {
      setTimeout(() => {
        nextSequence();
        userClickedPattern = [];
      }, 200);
      return;
    }
  }
}

function resetGame() {
  userClickedPattern = [];
  gamePattern = [];
  currentLevel = 0;
  $("#level-title").text("Game Over, Press Any Key to Restart");
}

function playAudio(currentColor) {
  var audio = new Audio("sounds/" + currentColor + ".mp3");
  audio.play();
}

$("body").on("keypress", () => {
  nextSequence();
});

$(".btn").on("click", (e) => handler(e.target.id));
