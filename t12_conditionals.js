console.log("Running t12_conditionals.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

// get value from input box
let username = document.getElementById("usernameInput").value;
let age = Number(document.getElementById("ageInput").value);
let money = Number(document.getElementById("moneyInput").value);
let year = 2026;

// variables
let oldAge = age + 10;
let birthYear = year - age;
let halfMoney = money / 2;
let dollars = 5;

// clear output
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

/****************************
Main code
****************************/

OUTPUT.innerHTML += "<p>Hi " + username + " as of " + year + " you are " + age + " years old.</p>";

OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";

OUTPUT.innerHTML += "<p>In 10 years you'll be " + oldAge + " years old</p>";

OUTPUT.innerHTML += "<p>You have " + dollars + " dollars</p>";

OUTPUT.innerHTML += "<p>You spend half of your money, now you have " + halfMoney + " dollars</p>";

OUTPUT.innerHTML += "<p>The current year is " + year + "</p>";

/****************************
functions
****************************/

Welcome();

function Welcome() {
OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
}

if (dollars < 4) {
console.log("You're broke");
}

if (dollars > 4) {
console.log("Rich boy");
}