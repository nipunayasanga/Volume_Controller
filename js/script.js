let x = 0;
let output = document.getElementById("output");
let meter = document.getElementById("meter");
output.innerHTML = x;

function plus() {
  if (x < 10) { // Ensures that x does not exceed 10
    output.innerHTML = ++x; // Increments x by 1 and updates the output element
    meter.style.height = x * 10 + "%"; // Sets the meter height as a percentage (x * 10%)
  }
  if (x >= 6) { // Checks if x is 6 or more
    meter.style.background = "red"; // Changes the meter background to red
    meter.style.filter = "drop-shadow(0 0 5px red)"; // Adds a red shadow to the meter
  }
}




function minus() {
  if (x > 0) { // Ensures that x does not go below 0
    output.innerHTML = --x; // Decrements x by 1 and updates the output element
    meter.style.height = x * 10 + "%"; // Sets the meter height as a percentage (x * 10%)
  }
  if (x <= 6) { // Checks if x is 6 or less
    meter.style.background = "#ff0"; // Changes the meter background to yellow
    meter.style.filter = "drop-shadow(0 0 5px #ff0)"; // Adds a yellow shadow to the meter
  }
}

