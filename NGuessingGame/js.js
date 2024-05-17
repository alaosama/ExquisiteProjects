let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsCount = 0;

const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const hintMessage = document.getElementById("hint");
const attemptsMessage = document.getElementById("attempts");

submitButton.addEventListener("click", checkGuess);

function checkGuess() {
  const userGuess = Number(guessInput.value);
  attemptsCount++;

  if (userGuess === randomNumber) {
    hintMessage.textContent = "Congratulations, you guessed it!";
  } else if (userGuess < randomNumber) {
    hintMessage.textContent = "Too low! Try again.";
  } else {
    hintMessage.textContent = "Too high! Try again.";
  }

  attemptsMessage.textContent = "Attempts: " + attemptsCount;
}
