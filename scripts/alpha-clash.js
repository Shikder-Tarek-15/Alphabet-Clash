document.addEventListener("keyup", handleKeyboardKeyUpEvent);

const audio = new Audio();
let isGamePlayOn = false;

//pressed key
function handleKeyboardKeyUpEvent(event) {
  if (isGamePlayOn == false) return;
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

    audio.src = "../audio/right.wav";
    audio.play();
  } else {
    console.log("You type wrong");
    const life = getTextElementById("current-life");
    const updateLife = life - 1;
    setTextElementById("current-life", updateLife);

    audio.src = "../audio/wrong.wav";
    audio.play();
    if (updateLife <= 0) {
      gameOver();
    }
  }
}

function gameOver() {
  audio.src = "../audio/over.wav";
  audio.play();
  hideElementById("play-ground");
  const finalScore = getTextElementById("current-score");
  setTextElementById("final-score", finalScore);
  visibleElementById("final-score-section");
  isGamePlayOn = false;

  //clear last selected alphabet
  const element = getElementTextById("current-alphabet");
  removeBackgroundColor(element);
}

function play() {
  hideElementById("home-screen");
  hideElementById("final-score-section");
  visibleElementById("play-ground");
  isGamePlayOn = true;
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
