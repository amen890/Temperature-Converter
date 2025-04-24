 const textbox = document.getElementById("textbox");
const tofahrehnit = document.getElementById("tofahrehnit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");

function convert() {
    let temp = Number(textbox.value); 
    if (tofahrehnit.checked) {
 
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + " °F"; // Display result in Fahrenheit with 2 decimals
    } else if (tocelsius.checked) {
     
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(2) + " °C"; // Display result in Celsius with 2 decimals
    } else {
      
        result.textContent = "Please select a conversion unit.";
    }
} 
