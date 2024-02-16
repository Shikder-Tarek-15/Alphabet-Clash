function hideElementById(id) {
  const element = document.getElementById(id);
  element.classList.add("hidden");
}

function visibleElementById(id) {
  const element = document.getElementById(id);
  element.classList.remove("hidden");
}

function getTextElementById(id) {
  const valueElement = document.getElementById(id);
  const valueText = valueElement.innerText;
  const value = parseInt(valueText);
  return value;
}

function getElementTextById(id) {
  const valueElement = document.getElementById(id);
  const valueText = valueElement.innerText;
  return valueText;
}

function setTextElementById(id, value) {
  let valueElement = document.getElementById(id);
  valueElement.innerText = value;
}

function getRandomAlphabet() {
  const alphabetSrting = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetSrting.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  console.log(index, alphabet);
  return alphabet;
}

function setBackgroundColor(id) {
  const element = document.getElementById(id);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColor(id) {
  const element = document.getElementById(id);
  element.classList.remove("bg-orange-400");
}
