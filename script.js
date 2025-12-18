//Chapter 6 alert
//  Arithmetic result
var num = 10;
var result = (((num + 5) * 10) / 2);
console.log(result);

// pre/post increment
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(a, b, result);

//greet user
var name = prompt("Enter your name");
alert("Hello " + name);
console.log(name);

//multiplication table
var num = prompt("Enter number", 5);
for (var i = 1; i <= 10; i++) 
console.log(num);




//Chapter 7 math expressions
//  Add two numbers
var a = 5, b = 3;
var sum = a + b;
console.log(sum);

//Movie ticket cost
var ticketPrice = 600;
var total = ticketPrice * 5;
console.log(total);

//table
var num = 4;
for(var i=1;i<=10;i++)


//Chapter 8 more math
//temperature converter
var c = 30;
var f = (c * 9/5) + 32;
console.log(f);

//percentage
var total = 500;
var obtained = 420;
var percent = (obtained/total)*100;
console.log(percent);




//Chapter 9 user input
//city name
var city = prompt("Enter city");
if(city === "Karachi"){
  alert("Welcome to city of lights");
}
console.log(city);

//genter
var gender = prompt("Enter gender");
if(gender === "male"){
  alert("Good Morning Sir");
}else if(gender === "female"){
  alert("Good Morning Ma’am");
}


//Chapter 10 conditional statements
//traffic signal
var color = prompt("Signal color");
if(color==="red") alert("Must Stop");
else if(color==="yellow") alert("Ready to move");
else if(color==="green") alert("Move now");

//fuel check
var fuel = prompt("Fuel in litres");
if(fuel < 0.25){
  alert("Please refill the fuel");
}

//guess game
var secret = 7;
var guess = +prompt("Guess number");
if(guess === secret){
  alert("Bingo! Correct answer");
}else if(guess+1 === secret){
  alert("Close enough");
}



//Chapter 11 if else & calculator
//even/odd
var num = prompt("Enter number");
if(num % 2 === 0){
  alert("Even Number");
}else{
  alert("Odd Number");
}

//divisible by 3
var num = prompt("Enter number");
if(num % 3 === 0){
  alert("Divisible by 3");
}else{
  alert("Not Divisible by 3");
}

//calculator
var a = +prompt("First number");
var b = +prompt("Second number");
var op = prompt("Operator");

var result;
if(op==="+") result = a+b;
else if(op==="-") result = a-b;
else if(op==="*") result = a*b;
else if(op==="/") result = a/b;
else if(op==="%") result = a%b;

alert("Result: " + result);
console.log(result);