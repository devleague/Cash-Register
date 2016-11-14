function cashReg(){
  var _balance = 0; //amount in memory 
  var _total = 0; //inputted from number buttons
  var _withdraw = 0;
  var _deposit = 0;
  //balance amount on hand
  function balance (x){
    _balance = x;
    return _balance;
  }
  //withdraw blance - x
  function withdraw (x){
   _withdraw = _balance - x;
   return _withdraw;
  }
  //deposit total + X
  function deposit(x) {
    _total = _deposit + x;
    return _balance;
  }
 return {
  balance : balance,
  withdraw: withdraw,
  deposit: deposit,
 };
}
var register = cashReg();

var calculations = calculatorModule();

var intNum = 0;

// ADDITION 
var addNumbers = document.getElementById('addition');
  addNumbers.addEventListener("click", function(){
    calculations.load

  };

//subtracts
//multiplies
//divide
//EQUALS

// DISPLAY 

var display = document.getElementById("display");



// DECLARING CALCULATOR VARIABLES
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var doubleZero = document.getElementById("doubleZero");
var decimal = document.getElementById("decimal");
var clearButton = document.getElementById("clearButton");


// CALCULATOR EVENT LISTENERS
one.addEventListener("click", function() {
  display.innerHTML = "1";
});

two.addEventListener("click", function() {
  display.innerHTML = "2";
});

three.addEventListener("click", function() {
  display.innerHTML = "3";
});

four.addEventListener("click", function() {
  display.innerHTML = "4";
});

five.addEventListener("click", function() {
  display.innerHTML = "5";
});

six.addEventListener("click", function() {
  display.innerHTML = "6";
});

seven.addEventListener("click", function() {
  display.innerHTML = "7";
});

eight.addEventListener("click", function() { 
  display.innerHTML = "8";
});

nine.addEventListener("click", function() {
  display.innerHTML = "9";
});

zero.addEventListener("click", function() {
  display.innerHTML = "0";
});

doubleZero.addEventListener("click", function() {
  display.innerHTML = "00";
});

decimal.addEventListener("click", function() {
  display.innerHTML = ".";
});

clearButton.addEventListener("click", function() {
  display.innerHTML = "0";
});

// function myFunction(button) {
//   var x = button.value;
//   document.getElementById("two").innerHTML = x;
// }
