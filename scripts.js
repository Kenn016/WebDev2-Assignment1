// Tab switching
document.getElementById('weightButton').addEventListener('click', () => showTab('weightTab'));
document.getElementById('distanceButton').addEventListener('click', () => showTab('distanceTab'));
document.getElementById('temperatureButton').addEventListener('click', () => showTab('temperatureTab'));

function showTab(tabId) {
  const tabs = ['weightTab', 'distanceTab', 'temperatureTab'];
  tabs.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(tabId).classList.remove('hidden');
}

// Utility: handle single number or comma-separated list
function parseInput(value) {
  return value.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
}

function displayOutput(outputElement, values) {
  outputElement.value = values.map(v => v.toFixed(2)).join(', ');
}

// Weight Conversion
function convertWeight() {
  const input = document.getElementById('weightInput1').value;
  const from = document.getElementById('weightDirection1').value;
  const to = document.getElementById('weightDirection2').value;
  const output = document.getElementById('weightInput2');

  const values = parseInput(input);
  const results = values.map(val => {
    if (from === to) return val;
    return from === 'kg' ? val * 2.20462 : val / 2.20462;
  });

  displayOutput(output, results);
}

// Distance Conversion
function convertDistance() {
  const input = document.getElementById('distanceInput1').value;
  const from = document.getElementById('distanceDirection1').value;
  const to = document.getElementById('distanceDirection2').value;
  const output = document.getElementById('distanceInput2');

  const values = parseInput(input);
  const results = values.map(val => {
    if (from === to) return val;
    return from === 'km' ? val * 0.621371 : val / 0.621371;
  });

  displayOutput(output, results);
}

// Temperature Conversion
function convertTemperature() {
  const input = document.getElementById('temperatureInput1').value;
  const from = document.getElementById('temperatureDirection1').value;
  const to = document.getElementById('temperatureDirection2').value;
  const output = document.getElementById('temperatureInput2');

  const values = parseInput(input);
  const results = values.map(val => {
    if (from === to) return val;
    return from === 'c' ? (val * 9/5) + 32 : (val - 32) * 5/9;
  });

  displayOutput(output, results);
}
