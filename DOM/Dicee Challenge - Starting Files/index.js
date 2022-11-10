function refresh() {
  randomImg1 = Math.round(Math.random() * 6);
  randomImg2 = Math.round(Math.random() * 6);

  console.log(randomImg1);
  console.log(randomImg2);

  document.querySelector(".img1").src = "images/dice" + randomImg1 + ".png";
  document.querySelector(".img2").src = "images/dice" + randomImg2 + ".png";

  var h1Tag = document.querySelector("h1");

  if (randomImg1 > randomImg2) {
    h1Tag.textContent = "Player 1 Wins 🚩";
  } else if (randomImg1 < randomImg2) {
    h1Tag.textContent = "🚩 Player 2 Wins";
  } else {
    h1Tag.textContent = "Draw";
  }
}

refresh();
