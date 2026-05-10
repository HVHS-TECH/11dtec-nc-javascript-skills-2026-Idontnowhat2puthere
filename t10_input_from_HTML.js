console.log("Running t10_input_from_HTML.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
function start() {

//get value from input box
let username = document.getElementById("usernameInput").value; 


//varibales
let year = 2026;
let age = 15;
let money = 255;
let birthYear = 2011;
let oldAge;
let currentYear = 2026;
oldAge = age + 10;
birthYear = year - age;
money = money / 2; 
let halfMoney = money / 2;


//clear output (important)
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"; 


/****************************
 Main code
 ****************************/

OUTPUT.innerHTML += ("<p>Hi "+ username + " as of "+ year +" you are " + age + " years old.</p>") 
OUTPUT.innerHTML += ("<p>You were born in " + birthYear)
OUTPUT.innerHTML += ("<p>In 10 years you'll be " + oldAge + "year old</p>")
OUTPUT.innerHTML += ("<p>You have " + money + " dollars</p>")
OUTPUT.innerHTML += ("<p>You spend half of your money, now you have " + halfMoney + " dollars</p>")
OUTPUT.innerHTML += ("<p>Then you get $3, now you have" + (halfMoney + 3) + "dollars</p>")
OUTPUT.innerHTML += ("<p>The current year is" + currentYear)


/****************************
 functions
 ****************************/

Welcome(); 

}

function Welcome(){
OUTPUT.innerHTML += "<p>Welcome</p>";
}

function start() {
    spaceForJavaScriptOutput.innerHTML
    spaceForJavaScriptOutput.innerHTML
    answer = currentYear - userAge;
    spaceForJavaScriptOutput.innerHTML
}

// This is a single line comment/