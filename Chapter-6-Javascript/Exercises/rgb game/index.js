const scoreValue = document.querySelector("#score");
//gets the element with the id 'score' from the code and assigns it to the variable scoreValue.
const livesValue = document.querySelector("#lives");
//gets the element with the id 'lives' from the code and assigns it to the variable livesValue.
const rgbValue = document.querySelector("#value");
//gets the element with the id 'value' from the code and assigns it to the variable rgbValue.
const allColors = document.querySelectorAll(".color");
//gets all the elements with class 'color' from the code and assigns them to the variable allColors.
const message = document.querySelector("#message");
//gets the element with id 'message' from the code and assigns it to the variable message.
const restartButton = document.querySelector(".button");
//gets the element with class 'button' from the code and assigns it to the variable restartButton.

let colors = [];
// Creating an empty array to hold the colors

let correctColorIndex;
// Declaring a variable to hold the index of the correct color

let score = 0;
let lives = 3;
// Setting the initial score to 0 and initial live to 3.
scoreValue.textContent = score;
// Setting the text content of the score element to the initial score.
livesValue.textContent = lives;
// Setting the text content of the lives element to the initial lives

function generateRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
// this is  a function that generates a random RGB value

let rgbVal = generateRGB();
// Calling the generateRGB() function and assigning the result to the variable rgbVal.
document.querySelector("#value").textContent = rgbVal;
// Setting the text content of the element with id 'value' to the initial RGB value.

function generateColors() {
  // Declaring a function that generates an array of 4 colors.
  colors = [];
  for (let i = 0; i < 4; i++) {
    //looping 4 times to generate 4 colors.
    let color = generateRGB();
    // Calling the generateRGB() function to generate the color
    colors.push(color);
    //adds the color to the color array.
  }

  correctColorIndex = Math.floor(Math.random() * 4);
  let colorElements = document.querySelectorAll(".color");
  //gets all the elements with class 'color' from the code and assigns them to the variable colorElements.
  for (let i = 0; i < colorElements.length; i++) {
    colorElements[i].style.backgroundColor = colors[i];
  }
  rgbValue.textContent = colors[correctColorIndex];
  // Sets the text content of the element with id 'value' to the RGB value of the correct color.
}

generateColors();
//calling the generate fucntion to generate the initial colors.

function checkCorrectColor(i) {
  //function for checkking  if the clicked color is correct
  if (i === correctColorIndex) {
    message.textContent = "Correct!";
    score++;
    // if the user guesses the correct color then it will increment the score and display the message correct.
    scoreValue.textContent = score;
    rgbVal = generateRGB();
    // Generate new RGB color and colors array
    rgbValue.textContent = rgbVal;
    generateColors();
  } else {
    message.textContent = "Try Again!";
    //if the user guesses the wrong color then it will decrease the score and will display the message try again.
    lives--;
    if (lives < 0) {
      lives = 0;
      //this condition ensures that the lifes dont go below 0.
    }
    livesValue.textContent = lives;
    if (lives === 0) {
      message.textContent = "Game Over";
      //if the lives are equal to zero then the game will display the message game over.
      score = 0;
      lives = 0;
      rgbVal = generateRGB();
      rgbValue.textContent = rgbVal;
    }
  }
}

for (let i = 0; i < allColors.length; i++) {
  allColors[i].addEventListener("click", function () {
    checkCorrectColor(i);
  });
}
//this enables click event listeners for color elements

restartButton.addEventListener("click", function () {
  //this enables click event listener for restart button
  score = 0;
  lives = 3;
  scoreValue.textContent = score;
  livesValue.textContent = lives;
  //this resets score and lives
  rgbVal = generateRGB();
  rgbValue.textContent = rgbVal;
  generateColors();
  message.textContent = "";
});
