balance = 0;
var display = document.getElementById("display");
var displayVal = Number(display.innerHTML);
var operation = null;
var calculator = Calculator();

var cRegister = (function runRegister(){

  function getBalance(){
    return balance;
  }

  function deposit(num){
    balance = calculator.add(num);
    return balance;  
  }
  function withdraw(num){
    balance = calculator.subtract(num);
  }
  function clearDisplay(){
    // if(operation !== null || displayVal === 'number'){
      display.innerHTML = "";
  }
  function equals(){
    return balance;
  }
  return {
    deposit: deposit,
    withdraw: withdraw,
    balance: getBalance,
    clearDisplay: clearDisplay,
    equals: equals
  };
})();

document.getElementById("9").addEventListener('click',function(){
  // cRegister.clearDisplay();
  document.getElementById("display").innerHTML += 9;});

document.getElementById("8").addEventListener('click',function(){
  display.innerHTML += 8;});

document.getElementById("7").addEventListener('click',function(){
  display.innerHTML += 7;});

document.getElementById("6").addEventListener('click',function(){
  display.innerHTML += 6;});

document.getElementById("5").addEventListener('click',function(){
  display.innerHTML += 5;});

document.getElementById("4").addEventListener('click',function(){
  display.innerHTML += 4;});

document.getElementById("3").addEventListener('click',function(){
  display.innerHTML += 3;});

document.getElementById("2").addEventListener('click',function(){
  display.innerHTML += 2;});

document.getElementById("1").addEventListener('click',function(){
  display.innerHTML += 1;});

document.getElementById(".").addEventListener('click',function(){
  display.innerHTML += '.';});

document.getElementById("0").addEventListener('click',function(){
  display.innerHTML += '0';});

document.getElementById("00").addEventListener('click',function(){
  display.innerHTML += '00';});

document.getElementById("/").addEventListener('click',function(){
  display.innerHTML += '/';});

document.getElementById("*").addEventListener('click',function(){
  display.innerHTML += '*';});

document.getElementById("-").addEventListener('click',function(){
  display.innerHTML += '-';});

document.getElementById("+").addEventListener('click',function(){
    displayVal = Number(display.innerHTML);
    calculator.add(displayVal);
    operation = "+";
  });

document.getElementById("clear").addEventListener('click',function(){cRegister.clearDisplay();
});

document.getElementById("balance").addEventListener('click',function(){
  display.innerHTML = 'checkin on my baby';});

document.getElementById("deposit").addEventListener('click',function(){
  display.innerHTML = 'added $krilla: ' + cRegister.deposit();});

document.getElementById("withdraw").addEventListener('click',function(){
  display.innerHTML = 'withdrew yer $ biyatch';});

document.getElementById("=").addEventListener('click',function(){
  if (operation === "+"){
    calculator.add(displayVal);
    display.innerHTML = calculator.returnTotal();
  }
  display.innerHTML = cRegister.equals();
});
