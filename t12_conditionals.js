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
let oldAge = age + 10;
birthYear = year - age;
money = money / 2; 
let halfMoney = money / 2;


//clear output (important)
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"; 


/****************************
 Main code
 ****************************/

OUTPUT.innerHTML += ("<p>Hi "+ username + " as of "+ year +" you are " + age + " years old.</p>") 
OUTPUT.innerHTML += ("<p>You were born in " + birthYear + "</p>")
OUTPUT.innerHTML += ("<p>In 10 years you'll be " + oldAge + "year old</p>")
OUTPUT.innerHTML += ("<p>You have " + money + " dollars</p>")
OUTPUT.innerHTML += ("<p>You spend half of your money, now you have " + halfMoney + " dollars</p>")
OUTPUT.innerHTML += ("<p>Then you get $3, now you have" + (halfMoney + 3) + "dollars</p>")


/****************************
 functions
 ****************************/
 let finalMoney = halfMoney + 3;

 OUTPUT.innerHTML += ("<p>A chocolate bar costs $4</p>");

 if (finalMoney >= 4) {
     OUTPUT.innerHTML += ("<p>You CAN afford a chocolate bar</p>");

    } else {
     OUTPUT.innerHTML += ("<p>Sorry you CAN'T afford a chocolate bar</p>");
}

Welcome(); 

}

function start() {
    spaceForJavaScriptOutput.innerHTML
    spaceForJavaScriptOutput.innerHTML
    answer = currentYear - userAge;
    spaceForJavaScriptOutput.innerHTML
}

function calculateChange() {
    
}

// This is a single line comment/