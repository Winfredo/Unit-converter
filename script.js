let convertBtn = document.querySelector(".convert-btn");
let inputValue = document.querySelector(".inputValue");
let conversionResult = document.querySelector(".conversion-result");
let conversionResult1 = document.querySelector(".conversion-result1");
let conversionResult2 = document.querySelector(".conversion-result2");

convertBtn.addEventListener("click", () => {
  let number = inputValue.value;
  console.log(number);

  if (number === "") {
    alert("Please enter a number to convert.");
    return;
  }

  conversionResult.textContent = `${number} meters = ${(number * 3.281).toFixed(
    2
  )} feet | ${number} feet = ${(number / 3.281).toFixed(2)} meters`;
  conversionResult1.textContent = `${number} liters = ${(
    number * 0.264
  ).toFixed(2)} gallon | ${number} gallon = ${(number / 0.264).toFixed(
    2
  )} liters`;
  conversionResult2.textContent = `${number} kilograms = ${(
    number * 2.204
  ).toFixed(2)} pounds | ${number} pounds = ${(number / 2.204).toFixed(
    2
  )} kilograms`;

  inputValue.value = "";
});
