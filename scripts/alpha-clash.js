// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

function play() {
  hideElementById("home-screen");

  visibleElementById("play-ground");

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

  //get expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log("expected ", expectedAlphabet);

  if (playerPressed === expectedAlphabet) {
    console.log("You type right key");
    plusPoint("current-score");
    continueGame();
    removeBackgroundColor(expectedAlphabet);
  } else {
    console.log("You type wrong");
  }
}

function plusPoint(id) {
  const currentScoreElement = document.getElementById(id);
  const currentScoreText = currentScoreElement.innerText;
  let currentScore = parseInt(currentScoreText);
  const newScore = currentScore + 1;
  currentScoreElement.innerText = newScore;
}
