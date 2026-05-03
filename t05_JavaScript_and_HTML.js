/****************************
Name of task: Javascript and HTML
****************************/
console.log("Running t05_javascriptAnd Html.js")

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

/****************************
 Main code
 ****************************/

OUTPUT.innnerHTML += ("<p>Hi "+ username + " as of "+ year +" you are " + age + " years old.</p>") 
OUTPUT.innnerHTML += ("<p>You were born in " + birthYear)
OUTPUT.innnerHTML += ("<p>In 10 years you'll be " + oldAge + "year old</p>")
OUTPUT.innnerHTML += ("<p>You have " + money + " dollars</p>")
OUTPUT.innnerHTML += ("<p>You spend half of your money, now you have " + halfMoney + " dollars</p>")
OUTPUT.innnerHTML += ("<p>Then you get $3, now you have" + (halfMoney + 3) + "dollars</p>")


/****************************
 functions
 ****************************/

// This is a single line comment/