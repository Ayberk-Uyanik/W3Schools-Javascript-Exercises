// W3 SCHOOLS JAVASCRIPT EXERCISES FOR BEGINNERS //

// Basics //
// 1. Write a JavaScript program to display the current day and time. // 
let now = new Date()
let day1 = now.toDateString ();
let time1 = now.toISOString ();
console.log ("Today is:" + "" + day1);
console.log ("Current time is:" + "" + time1);

// 2. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. //
let t1 = {x:5, y:6, z:7};
let p1 = (t1.x + t1.y + t1.z) / 2
let area1 = Math.sqrt((p1* (p1-t1.x)*(p1-t1.y)*(p1-t1.z)));
console.log (area1);

// 3. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". //
function guessNumber () {
  let random_number = Math.ceil(Math.random()*10);
  let user = document.getElementById ("user_input").value;
  let result = document.getElementById ("result"); 
  if (random_number == user) {
    result.innerHTML = "Good Work!";
  } else {
    result.innerHTML = "Not Matched! The number was:" + random_number
  }
}

// 4. Write a JavaScript program to calculate multiplication and division of two numbers (input from user). //

function multiply () {
  let input_arr = document.getElementsByClassName
  ("user_inputs");
  let inputs = [];
  for (let i=0; i < input_arr.length; i++) {
    inputs.push (input_arr[i].value); 
  }
  alert ("Input list is:" + inputs);  
  multiplication = inputs.reduce ((a,b) => a*b)
  document.getElementById ("result2").innerHTML = multiplication   
}

function divide () {
  let input_arr = document.getElementsByClassName
  ("user_inputs");
  let inputs = [];
  for (let i=0; i < input_arr.length; i++) {
    inputs.push (input_arr[i].value); 
  }
  alert ("Input list is:" + inputs);  
  division = inputs.reduce ((a,b) => a/b)
  document.getElementById ("result2").innerHTML = division   
}

// 5. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. //

const temperature = document.getElementById ("to_convert");
function convertTemperatures () {
  let button_list = document.getElementsByClassName ("convert");
  let conversion = document.getElementById ("converted");

  button_list[0].addEventListener ("click", function () {
    let F = (temperature.value * 1.8) + 32;
    conversion.innerHTML = F 
  });
  button_list[1].addEventListener ("click", function () {
    let C = (temperature.value - 32) / 1.8;
    conversion.innerHTML = C 
  });
}
convertTemperatures ()

// 6. Write a JavaScript program to get the website URL (loading page). //
function displayUrl () {
  alert ("The URL is;" + window.location.href)
}

// 7. Write a JavaScript exercise to create a variable using a user-defined name. //