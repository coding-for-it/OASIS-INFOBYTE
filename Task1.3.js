const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const resultDiv = document.getElementById("result");

// Function to reset the form
function resetForm() {
    temperatureInput.value = "";
    unitSelect.value = "celsius";
    resultDiv.textContent = "";
}

convertBtn.addEventListener("click", () => {
    const temperature = parseFloat(temperatureInput.value);

    if (!isNaN(temperature)) {
        const unit = unitSelect.value;
        let convertedTemperature = 0;
        let convertedUnit = "";

        if (unit === "celsius") {
            convertedTemperature = (temperature - 32) * 5/9;
            convertedUnit = "Celsius";
        } else if (unit === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = "Fahrenheit";
        } else if (unit === "kelvin") {
            convertedTemperature = temperature + 273.15;
            convertedUnit = "Kelvin";
        }

        resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
    } else {
        resultDiv.textContent = "Please enter a valid number for temperature.";
    }
});

resetBtn.addEventListener("click", () => {
    resetForm();
});

// Initialize the form
resetForm();
