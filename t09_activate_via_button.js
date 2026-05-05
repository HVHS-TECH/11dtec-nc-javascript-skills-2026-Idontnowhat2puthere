/****************************
Name of task: Javascript and HTML
****************************/
Name: James Beaton
Task: Activate JavaScript Via Button
Description: Displays user info when button is clicked
****************************/
console.log("Running t09_activate_via_button.js")

//varibales
let username = "James";
let year = 2026;
let age = 15;
let money = 255;
let birthYear = 2011;
let oldAge;
oldAge = age + 10;
birthYear = year - age;
money = money / 2; 
halfMoney = money / 2;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"; 
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
 Main code
 ****************************/

OUTPUT.innerHTML += ("<p>Hi "+ username + " as of "+ year +" you are " + age + " years old.</p>") 
OUTPUT.innerHTML += ("<p>You were born in " + birthYear)
OUTPUT.innerHTML += ("<p>In 10 years you'll be " + oldAge + "year old</p>")
OUTPUT.innerHTML += ("<p>You have " + money + " dollars</p>")
OUTPUT.innerHTML += ("<p>You spend half of your money, now you have " + halfMoney + " dollars</p>")
OUTPUT.innerHTML += ("<p>Then you get $3, now you have" + (halfMoney + 3) + "dollars</p>")


/****************************
 functions
 ****************************/
function Welcome(){
OUTPUT.innerHTML += "<p>Welcome</p>";
}

Welcome(); 

function start() {
    spaceForJavaScriptOutput.innerHTML
    spaceForJavaScriptOutput.innerHTML
    answer = currentYear - userAge;
    spaceForJavaScriptOutput.innerHTML
}

// This is a single line comment/