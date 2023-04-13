const button = document.querySelector("button");
const costinput = document.querySelector('input[name="cost"]');
const litresinput = document.querySelector('input[name="litres"]');
costinput.value = "1.72";
litresinput.value = "0";
const p = document.querySelector("p");

button.addEventListener("click", () => {
  const cost = costinput.value;
  const litres = litresinput.value;
  const totalCost = cost * litres;
  p.textContent = `total cost: ${totalCost.toFixed(2)}` + " AED";
  p.style.display = "block";
});
