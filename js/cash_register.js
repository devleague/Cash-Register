var balance = 0;
var display = getEm("display");
var operation = null;
var calculator = Calculator();
var displayVal = Number(display.innerHTML);
var storedNumber = 0;

//'getEm()' hoisted above var display
function getEm(x){
  return document.getElementById(x);
}

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


  return {
    deposit: deposit,
    withdraw: withdraw,
    balance: getBalance,
    clearDisplay: clearDisplay,
    equals: equals
  };
})();


getEm("nine").addEventListener('click',function(){
  // cRegister.clearDisplay();
  getEm("display").innerHTML += 9;});

getEm("eight").addEventListener('click',function(){
  display.innerHTML += 8;});

getEm("seven").addEventListener('click',function(){
  display.innerHTML += 7;});

getEm("six").addEventListener('click',function(){
  display.innerHTML += 6;});

getEm("five").addEventListener('click',function(){
  display.innerHTML += 5;});

getEm("four").addEventListener('click',function(){
  display.innerHTML += 4;});

getEm("three").addEventListener('click',function(){
  display.innerHTML += 3;});

getEm("two").addEventListener('click',function(){
  display.innerHTML += 2;});

getEm("one").addEventListener('click',function(){
  display.innerHTML += 1;});

getEm("deci").addEventListener('click',function(){
  display.innerHTML += '.';});

getEm("zero").addEventListener('click',function(){
  display.innerHTML += 0;});

getEm("zeroZero").addEventListener('click',function(){
  display.innerHTML += 00;});

getEm("divide").addEventListener('click',function(){
  calculator.divide(parseFloat(display.innerHTML));    
    operation = "divide";
    cRegister.clearDisplay();
  });

getEm("multiply").addEventListener('click',function(){
    calculator.multiply(parseFloat(display.innerHTML));    
    operation = "multiply";
    cRegister.clearDisplay();
  });

getEm("minus").addEventListener('click',function(){
  calculator.subtract(parseFloat(display.innerHTML));    
    operation = "subtract";
    cRegister.clearDisplay();
  });

getEm("plus").addEventListener('click',function(){
    // displayVal = Number(display.innerHTML);
    calculator.add(parseFloat(display.innerHTML));    
    operation = "add";
    cRegister.clearDisplay();
  });

getEm("clear").addEventListener('click',function(){cRegister.clearDisplay();
});

getEm("balance").addEventListener('click',function(){
  display.innerHTML = 'checkin on my baby';});

getEm("deposit").addEventListener('click',function(){
  display.innerHTML = 'added $krilla: ' + cRegister.deposit();
      });

getEm("withdraw").addEventListener('click',function(){
  display.innerHTML = 'withdrew yer $ biyatch';});


getEm("equal").addEventListener('click',function(){
  storedNumber = parseFloat(display.innerHTML); 
    switch(operation){

      case 'add': calculator.add(storedNumber);

      case 'subtract': calculator.subtract(storedNumber);

      case 'multiply': calculator.multiply(storedNumber);

      case 'divide': calculator.divide(storedNumber);
      }

      return calculator.returnTotal();
      // calculator.deleteMemory();

});



