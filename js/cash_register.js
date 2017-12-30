
for(var i = 0; i < 10; i++) {
  var btn = document.getElementById("btn" + i);
  btn.addEventListener("click", function(event) {
    display(event.target.value);
  }, false);
}

var displayElement = document.getElementById("display");


var myCalculator = Calculator();
var clearDisplay = true;

var bankBalance = 0;

function display(val) {
  if (clearDisplay) {
    clear();
    clearDisplay = false;
  }

  displayElement.value += val;
}

function clear() {
  displayElement.value = '';
}

function add() {
  myCalculator.add(Number(displayElement.value));
  clearDisplay = true;
  display(myCalculator.getTotal());
  clearDisplay = true;
}

function sub() {
  myCalculator.subtract(Number(displayElement.value));
  clearDisplay = true;
  display(myCalculator.getTotal());
  clearDisplay = true;
}

function multiply() {
  myCalculator.multiply(Number(displayElement.value));
  clearDisplay = true;
  display(myCalculator.getTotal());
  clearDisplay = true;
}

function divide() {
  myCalculator.divide(Number(displayElement.value));
  clearDisplay = true;
  display(myCalculator.getTotal());
  clearDisplay = true;
}

function equals() {
  console.log('test') 
  myCalculator.getTotal('total');
  clearDisplay = true;
  display(myCalculator.getTotal());
  clearDisplay = true;
}

function clearTotal() {
  myCalculator.load(0);
  clearDisplay = true;
  display(myCalculator.getTotal());
  clearDisplay = true;
}


function deposit(amt) {
  bankBalance += amt;
  getBalance();
}

function withdraw(amt) {
  console.log("test")
  bankBalance -= amt;
  getBalance();
}

function getBalance() {
  clearDisplay = true;
  display(bankBalance);
  clearDisplay = true;
} 

document.getElementById('addbtn').addEventListener('click', add);
document.getElementById('subbtn').addEventListener('click', sub);
document.getElementById('btnmul').addEventListener('click', multiply);
document.getElementById('divbtn').addEventListener('click', divide);
document.getElementById('equalbtn').addEventListener('click', equals);
document.getElementById('clear').addEventListener('click', clearTotal);
document.getElementById('depbtn').addEventListener('click', deposit);
document.getElementById('balbtn').addEventListener('click', getBalance);
document.getElementById('witbtn').addEventListener('click', withdraw);