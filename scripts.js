// Higher-Order Function for Conversion
const createConverter = (unit1, unit2, conversionRate) => {
  return (value) => {
    if (Array.isArray(value)) {
      return value.map(v => v * conversionRate); // Convert array of values
    }
    return value * conversionRate; // Convert single value
  };
};

// Create specific converters using higher-order function
const lbToKg = createConverter('lb', 'kg', 1 / 2.20462);
const kgToLb = createConverter('kg', 'lb', 2.20462);
const miToKm = createConverter('mi', 'km', 1 / 0.621371);
const kmToMi = createConverter('km', 'mi', 0.621371);
const cToF = (value) => (value * 9/5) + 32; // Celsius to Fahrenheit
const fToC = (value) => (value - 32) * 5/9; // Fahrenheit to Celsius

function switchTab(tabId) {
  // Hide all tabs first
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.classList.add('hidden'); // Hide all content
  });

  // Show the clicked tab's content
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.remove('hidden'); // Show the selected tab content
}

// Tab Switching Event Listeners
document.getElementById('weightButton').addEventListener('click', () => switchTab('weightTab'));
document.getElementById('distanceButton').addEventListener('click', () => switchTab('distanceTab'));
document.getElementById('temperatureButton').addEventListener('click', () => switchTab('temperatureTab'));

// Convert Weight Function
function convertWeight() {
  const weightInput1 = document.getElementById('weightInput1').value;
  const weightDirection1 = document.getElementById('weightDirection1').value;
  const weightDirection2 = document.getElementById('weightDirection2').value;

  let result;

  if (weightDirection1 === 'lb' && weightDirection2 === 'kg') {
    result = lbToKg(parseFloat(weightInput1));
  }
  else if (weightDirection1 === 'kg' && weightDirection2 === 'lb') {
    result = kgToLb(parseFloat(weightInput1));
  }  else {
    result = weightInput1;
  }

  document.getElementById('weightInput2').value = result.toFixed(2);
}

// Convert Distance Function
function convertDistance() {
  const distanceInput1 = document.getElementById('distanceInput1').value;
  const distanceDirection1 = document.getElementById('distanceDirection1').value;
  const distanceDirection2 = document.getElementById('distanceDirection2').value;

  let result;

  if (distanceDirection1 === 'mi' && distanceDirection2 === 'km') {
    result = miToKm(parseFloat(distanceInput1));
  }
  else if (distanceDirection1 === 'km' && distanceDirection2 === 'mi') {
    result = kmToMi(parseFloat(distanceInput1));
  }  else {
    result = distanceInput1;
  }

  document.getElementById('distanceInput2').value = result.toFixed(2);
}

// Convert Temperature Function
function convertTemperature() {
  const temperatureInput1 = document.getElementById('temperatureInput1').value;
  const temperatureDirection1 = document.getElementById('temperatureDirection1').value;
  const temperatureDirection2 = document.getElementById('temperatureDirection2').value;

  let result;

  if (temperatureDirection1 === 'c' && temperatureDirection2 === 'f') {
    result = cToF(parseFloat(temperatureInput1));
  } else if (temperatureDirection1 === 'f' && temperatureDirection2 === 'c') {
    result = fToC(parseFloat(temperatureInput1));
  } else {
    result = temperatureInput1;
  }

  document.getElementById('temperatureInput2').value = result.toFixed(2);
}
