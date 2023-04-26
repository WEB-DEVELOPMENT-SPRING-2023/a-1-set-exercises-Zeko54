const scoreValue = document.querySelector("#score");
const livesValue = document.querySelector("#lives");
const rgbValue = document.querySelector("#value");
const allColors = document.querySelectorAll(".color");
const message = document.querySelector("#message");
const restartButton = document.querySelector(".button");

let colors = [];
let correctColorIndex;

let score = 0;
let lives = 3;
scoreValue.textContent = score;
livesValue.textContent = lives;

function generateRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

let rgbVal = generateRGB();
document.querySelector("#value").textContent = rgbVal;

function generateColors() {
  colors = [];
  for (let i = 0; i < 4; i++) {
    let color = generateRGB();
    colors.push(color);
  }
  // Pick a random index for the correct color
  correctColorIndex = Math.floor(Math.random() * 4);
  // Set the background color of each color element
  let colorElements = document.querySelectorAll(".color");
  for (let i = 0; i < colorElements.length; i++) {
    colorElements[i].style.backgroundColor = colors[i];
  }
  rgbValue.textContent = colors[correctColorIndex];
}

generateColors();

function checkCorrectColor(i) {
  if (i === correctColorIndex) {
    // Correct guess
    message.textContent = "Correct!";
    // Increment score and update score display
    score++;
    scoreValue.textContent = score;
    // Generate new RGB color and colors array
    rgbVal = generateRGB();
    rgbValue.textContent = rgbVal;
    generateColors();
  } else {
    // Incorrect guess
    message.textContent = "Try Again!";
    // Decrement lives and update lives display
    lives--;
    if (lives < 0) {
      // Ensure lives cannot go below 0
      lives = 0;
    }
    livesValue.textContent = lives;
    if (lives === 0) {
      // Game over
      message.textContent = "Game Over";
      // Reset score, lives, and generate new RGB color and colors array
      score = 0;
      lives = 0;
      rgbVal = generateRGB();
      rgbValue.textContent = rgbVal;
    }
  }
}

// Enable click event listeners for color elements
for (let i = 0; i < allColors.length; i++) {
  allColors[i].addEventListener("click", function () {
    checkCorrectColor(i);
  });
}

// Enable click event listener for restart button
restartButton.addEventListener("click", function () {
  // Reset score, lives, and generate new RGB color and colors array
  score = 0;
  lives = 3;
  scoreValue.textContent = score;
  livesValue.textContent = lives;
  rgbVal = generateRGB();
  rgbValue.textContent = rgbVal;
  generateColors();
  // Reset message text
  message.textContent = "";
});
