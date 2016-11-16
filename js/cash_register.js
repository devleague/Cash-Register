var balance = 0;
var display = getEm("display");
var operation = "";
var calculator = Calculator();
var storedNumber = 0;
var drawer = 0;

//'getEm()' hoisted above var 'display'
function getEm(x){

  return document.getElementById(x);
}

function clearDisplay(){

     return display.innerHTML = "";
  }


//   return {
//     // deposit: deposit,
//     // withdraw: withdraw,
//     // balance: getBalance,
//     clearDisplay: clearDisplay,
//     equals: equals
//   };
// })();

// for (var i = 0; i < this.length; i++) {
// < this[i]
// }
getEm("nine").addEventListener('click',function(){
  display.innerHTML += 9;});

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

    display.innerHTML += '00';

  });

getEm("clear").addEventListener('click',function(){
    clearDisplay();
  });

// CALCULATOR OPERATIONS:

getEm("divide").addEventListener('click',function(){
    var divide = parseFloat(display.innerHTML);
    calculator.load(divide);    
    clearDisplay();
    operation = "divide"; 

  });

getEm("multiply").addEventListener('click',function(){
    var multiply = parseFloat(display.innerHTML);
    calculator.load(multiply);    
    clearDisplay();
    operation = "multiply";  

  });

getEm("minus").addEventListener('click',function(){
    var subtract = parseFloat(display.innerHTML);
    calculator.load(subtract);    
    clearDisplay();
    operation = "subtract";

  });

getEm("plus").addEventListener('click',function(){
    var add = parseFloat(display.innerHTML);
    calculator.load(add);    
    clearDisplay();
    operation = "add";

  });

//CASH REGISTER BUTTONS:

getEm("deposit").addEventListener('click',function(){

    storedNumber = parseFloat(display.innerHTML);
    drawer += storedNumber;
    clearDisplay();

  });

getEm("withdraw").addEventListener('click',function(){

    storedNumber = parseFloat(display.innerHTML);
    display.innerHTML = (drawer -= storedNumber);
    clearDisplay();
  
  });

getEm("balance").addEventListener('click',function(){

    storedNumber = parseFloat(display.innerHTML);
    // drawer += storedNumber;
    display.innerHTML = drawer;

  });


//THE ALMIGHTY EQUALS! THE EQUALITY OF EQUALITY: GENDER/RACIAL/MATHEMATICAL YOU NAME IT.

getEm("equal").addEventListener('click',function(){
  storedNumber = parseFloat(display.innerHTML); 
    
    switch(operation){

      case 'add': calculator.add(storedNumber);
        break;

      case 'subtract': calculator.subtract(storedNumber);
        break;

      case 'multiply': calculator.multiply(storedNumber);
        break;

      case 'divide': calculator.divide(storedNumber);
        break;
      }

    display.innerHTML = calculator.returnTotal();
      calculator.deleteTotal();

});



