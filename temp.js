const inputTemp = document.getElementById("inputTemp");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

function convertTemperature() {
  let temp = parseFloat(inputTemp.value);

  if (isNaN(temp)) {
    result.innerText = "❌ Please enter a valid number";
    return;
  }

  let converted = temp;

  if (fromUnit.value !== toUnit.value) {
    if (fromUnit.value === "celsius") {
      converted = toUnit.value === "fahrenheit" ? (temp * 9/5) + 32 : temp + 273.15;
    } else if (fromUnit.value === "fahrenheit") {
      converted = toUnit.value === "celsius" ? (temp - 32) * 5/9 : ((temp - 32) * 5/9) + 273.15;
    } else if (fromUnit.value === "kelvin") {
      converted = toUnit.value === "celsius" ? temp - 273.15 : ((temp - 273.15) * 9/5) + 32;
    }
  }

  result.innerText = `✅ Converted Temperature: ${converted.toFixed(2)} ${toUnit.value}`;
}

convertBtn.addEventListener("click", convertTemperature);
