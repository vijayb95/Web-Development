document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    makeSound(btn.textContent);
  });
});

addEventListener("keydown", (e) => {
  makeSound(e.key);
});

function makeSound(content) {
  switch (content) {
    case "w":
      playAudio("sounds/tom-1.mp3");
      break;
    case "a":
      playAudio("sounds/tom-2.mp3");
      break;
    case "s":
      playAudio("sounds/tom-3.mp3");
      break;
    case "d":
      playAudio("sounds/tom-4.mp3");
      break;
    case "j":
      playAudio("sounds/snare.mp3");
      break;
    case "k":
      playAudio("sounds/crash.mp3");
      break;
    case "l":
      playAudio("sounds/kick-bass.mp3");
      break;
    default:
      console.log("not a valid strike");
      break;
  }
  buttonAnimation(content);
}

function playAudio(audioFile) {
  var audio = new Audio(audioFile);
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
