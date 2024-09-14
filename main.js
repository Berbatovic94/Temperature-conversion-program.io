const textBox = document.getElementById("textbox");
const to_Fahrenheit = document.getElementById("toFahrenheit");
const to_Celsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (to_Fahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (to_Celsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = `Please select a unit.`;
  }
}
