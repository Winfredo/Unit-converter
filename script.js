let convertBtn = document.querySelector(".convert-btn");
let inputValue = document.querySelector(".inputValue");
let conversionResult = document.querySelector(".conversion-result");
let conversionResult1 = document.querySelector(".conversion-result1");
let conversionResult2 = document.querySelector(".conversion-result2");
let header = document.querySelector(".header");
inputValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    convertBtn.click();
  }
});

let animateResult = (element)=> {
  element.classList.remove("fade-in");
  void element.offsetWidth; 
  element.classList.add("fade-in");
}

convertBtn.addEventListener("click", () => {
  let number = Number(inputValue.value);
  if (number === "") {
    alert("Please enter a number to convert.");
    return;
  } else if (number < "0") {
    alert("Please enter a positive number.");
    inputValue.value = "";
    return;
  }

  if (number === "1") {
    conversionResult.textContent = `1 meter = 3.281 feet | 1 foot = 0.3048 meters`;
    conversionResult1.textContent = `1 liter = 0.264 gallons | 1 gallon = 3.785 liters`;
    conversionResult2.textContent = `1 kilogram = 2.204 pounds | 1 pound = 0.453 kilograms`;
    return;
  }
  conversionResult.innerHTML = `${number} meters = <span>${(
    number * 3.281
  ).toFixed(2)}</span> feet | ${number} feet = <span>${(number / 3.281).toFixed(
    2
  )}</span> meters`;
  conversionResult1.innerHTML = `${number} liters = <span>${(
    number * 0.264
  ).toFixed(2)}</span> gallon | ${number} gallon = <span>${(
    number / 0.264
  ).toFixed(2)}</span> liters`;
  conversionResult2.innerHTML = `${number} kilograms = <span>${(
    number * 2.204
  ).toFixed(2)}</span> pounds | ${number} pounds = <span>${(
    number / 2.204
  ).toFixed(2)}</span> kilograms`;

  animateResult(conversionResult);
  animateResult(conversionResult1);
  animateResult(conversionResult2);
  inputValue.value = "";
});

header.addEventListener("click", (e) => {
  if (
    !e.target.closest("input") &&
    !e.target.closest("button") &&
    inputValue.value !== ""
  ) {
    convertBtn.click();
  }
});
