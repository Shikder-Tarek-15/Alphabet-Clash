// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

function play() {
  hideElementById("home-screen");
  hideElementById("final-score-section");
  visibleElementById("play-ground");

  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);

  continueGame();
}

function continueGame() {
  const alphabet = getRandomAlphabet();

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  setBackgroundColor(alphabet);
}

// document.addEventListener("keyup", function (event) {
//   console.log("I am pressed", event.key);
// });

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

//pressed key
function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log("Player pressed", playerPressed);

  //End game
  if (playerPressed === "Escape") {
    gameOver();
  }

  //get expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log("expected ", expectedAlphabet);

  if (playerPressed === expectedAlphabet) {
    console.log("You type right key");
    let score = getTextElementById("current-score");
    const newScore = score + 1;
    setTextElementById("current-score", newScore);
    continueGame();
    removeBackgroundColor(expectedAlphabet);
  } else {
    console.log("You type wrong");
    const life = getTextElementById("current-life");
    const updateLife = life - 1;
    setTextElementById("current-life", updateLife);
    if (updateLife <= 0) {
      gameOver();
    }
  }
}

function gameOver() {
  hideElementById("play-ground");
  const finalScore = getTextElementById("current-score");
  setTextElementById("final-score", finalScore);
  visibleElementById("final-score-section");

  //clear last selected alphabet
  const element = getElementTextById("current-alphabet");
  removeBackgroundColor(element);
}
