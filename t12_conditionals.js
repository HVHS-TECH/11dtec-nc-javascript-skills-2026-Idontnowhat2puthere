console.log("Running t12_conditionals.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function start() {

//get value from input box
let username = document.getElementById("usernameInput").value; 
let age = Number(document.getElementById("ageInput").value); 
let money = Number(document.getElementById("moneyInput").value); 



//varibales
let year = 2026;
let birthYear = 2011;
let oldAge;
oldAge = age + 10;
birthYear = year - age;


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
OUTPUT.innerHTML += ("<p>A chocolate bar costs $4</p>")

/****************************
 functions
 ****************************/

Welcome(); 

}

if (money < 4){
    console.log("You're broke")
}
    

function Welcome(){
OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
}

Welcome(); 

function start() {
    spaceForJavaScriptOutput.innerHTML
    spaceForJavaScriptOutput.innerHTML
    answer = currentYear - userAge;
    spaceForJavaScriptOutput.innerHTML
}

// This is a single line comment/