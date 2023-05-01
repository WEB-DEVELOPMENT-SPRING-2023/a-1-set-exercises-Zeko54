const button = document.querySelector("button");
//references the button element in the code and assigns it to the variable named button.
const costinput = document.querySelector('input[name="cost"]');
//references the cost input field in the code and assigns it to the variable named costinput .
const litresinput = document.querySelector('input[name="litres"]');
//references the liters input field in the code and assigns it to the variable named litresinput.
costinput.value = "1.72";
//sets the default value for the cost input field.
litresinput.value = "0";
//sets the default value for the liters input field.

const p = document.querySelector("p");
//references the p tag in the code that displays the total cost and assigns it to the variable named p.

//adding an event listener to the button tag that will listen for a click event and will execute the code block inside the arrow function when the button is clicked.
button.addEventListener("click", () => {
  const cost = costinput.value;
  const litres = litresinput.value;
  //these two lines will get values entered by user in the costinput and litersinput and will assign them to the cost and litres variables.
  const totalCost = cost * litres;
  //calculating the total cost by multiplying the cost per liter with the liters purchased and assigning it to the variable named totalcost.
  p.textContent = `total cost: ${totalCost.toFixed(2)}` + " AED";
  //this  will show the total cost value rounded to two decimal places and it aslo concatenates AED to the end of the string.
  p.style.display = "block";
  //finally setting the display property of the p etag to block so that it becomes visible and shows the total cost value.
});
