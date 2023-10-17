let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

function convertToCelsius(fahren) {
  const celsius = (fahren - 32) * 5/9;
  return celsius; 
}

function createMessage(fahren, celsius) {
  let feels;

  if (celsius < 32) {
    feels = "very cold!"; 
  }
  else if (celsius < 64) {
    feels = "cold";
  }
  else if (celsius < 86) {
    feels = "warm";
  }
  else if (celsius < 100) {
    feels = "hot!";
  }
  else {
    feels = "extremely hot!"; 
  }

  var fullMessage = "The temperature is " + celsius.toFixed(1) + " degrees Celsius (" + fahren + " degrees Fahrenheit), so it feels " + feels + ".";
  return fullMessage;
}

function rand(limit) {
  return Math.floor(Math.random() * limit)
}
let inputTemps = [30, 50, 70, 85, 101];
inputTemps.forEach(function(temp) {
  let fahren = temp;
  let celsius = convertToCelsius(fahren);
  let output = createMessage(fahren, celsius);
  console.log(output);
});


for (let i = 0; i < 5; i++) { 
  let fahren = rand(110);
  let celsius = convertToCelsius(fahren);
  let output = createMessage(fahren, celsius);
  console.log(output); 
}
