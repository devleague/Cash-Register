// var calculatorModule = require('./calculator.js');
console.log("Test register");

var register = {

  balance: 0,

  display: 0,

  getBalance: function() {
    //push 'balance' to 'display'
    return this.balance;
    // this.display = this.balance;
    // return this.display;
  },

  depositCash: function(num) {
    this.balance += num;
    // this.display = null;
    return this.balance;
  },

  withdrawCash: function(num) {
    this.balance -= num;
    // this.display = null;
    return this.balance;
  }
};

document.getElementById("keyGetBalance").addEventListener("click", function(){
  console.log("This is your balance.");
  console.log(register.getBalance());
});

document.getElementById("keyDepositCash").addEventListener("click", function(){
  console.log("This is how much you deposited.");
  console.log(register.depositCash());
});

document.getElementById("keyWithdrawCash").addEventListener("click", function(){
  console.log("This is your balance.");
  console.log(register.withdrawCash());
});

var keys = {
  display: document.getElementById("display"),
  key1: document.getElementById("key1"),
  key2: document.getElementById("key2"),
  key3: document.getElementById("key3"),
  key4: document.getElementById("key4"),
  key5: document.getElementById("key5"),
  key6: document.getElementById("key6"),
  key7: document.getElementById("key7"),
  key8: document.getElementById("key8"),
  key9: document.getElementById("key9"),
  key0: document.getElementById("key0"),
  key00: document.getElementById("key00"),
  keyPeriod: document.getElementById("keyPeriod"),
  keyClear: document.getElementById("keyClear"),

};


var press = {
  press1: keys.key1.addEventListener('click', function() {
    display.innerHTML += 1;}),
  press2: keys.key2.addEventListener('click', function() {
    display.innerHTML += 2;}),
  press3: keys.key3.addEventListener('click', function() {
    display.innerHTML += 3;}),
  press4: keys.key4.addEventListener('click', function() {
    display.innerHTML += 4;}),
  press5: keys.key5.addEventListener('click', function() {
    display.innerHTML += 5;}),
  press6: keys.key6.addEventListener('click', function() {
    display.innerHTML += 6;}),
  press7: keys.key7.addEventListener('click', function() {
    display.innerHTML += 7;}),
  press8: keys.key8.addEventListener('click', function() {
    display.innerHTML += 8;}),
  press9: keys.key9.addEventListener('click', function() {
    display.innerHTML += 9;}),
  press0: keys.key0.addEventListener('click', function() {
    display.innerHTML += 0;}),
  press00: keys.key00.addEventListener('click', function() {
    display.innerHTML += '00';}),
  pressPeriod: keys.keyPeriod.addEventListener('click', function() {display.innerHTML += '.';}),
  pressClear: keys.keyClear.addEventListener('click', function() {
    display.innerHTML = '';
    calculator.total = null;
    calculator.lastOperator = '';
  })
};

/* Calculation Steps
1. Enter a number.
2. Click an operator.
3. Move displayed number to "total".
4. Clear display.
5. Enter a second number.
6. Click operator.
7. Apply first operator.
8. Set output to "total".
9. Display output.
*/



var operations = {
  equalsButton: document.getElementById("keyEquals").addEventListener("click", function() {
      if (calculator.lastOperator === "add") {
        console.log(display.innerHTML);
        calculator.add(parseFloat(keys.display.innerHTML));
      } else if (calculator.lastOperator === "subtract") {
        console.log(display.innerHTML);
        calculator.subtract(parseFloat(keys.display.innerHTML));
      } else if (calculator.lastOperator === "multiply") {
        console.log(display.innerHTML);
        calculator.multiply(parseFloat(keys.display.innerHTML));
        console.log(calculator.total);
      } else if (calculator.lastOperator === "divide") {
        console.log(display.innerHTML);
        calculator.divide(parseFloat(keys.display.innerHTML));
        console.log(calculator.total);
      } else {
        console.log("You broke the damn calculator.");
      }
      console.log("=========");
      console.log(calculator.total);
      calculator.lastOperator = "";
      display.innerHTML = calculator.total;
    }),

  addButton: document.getElementById("keyAdd").addEventListener("click", function() {
      console.log(parseFloat(keys.display.innerHTML));
      if (calculator.lastOperator.length > 0) {
        if (calculator.lastOperator === "add") {
          console.log(display.innerHTML);
          calculator.add(parseFloat(keys.display.innerHTML));
        } else if (calculator.lastOperator === "subtract") {
          console.log(display.innerHTML);
          calculator.subtract(parseFloat(keys.display.innerHTML));
        } else if (calculator.lastOperator === "multiply") {
          console.log(display.innerHTML);
          calculator.multiply(parseFloat(keys.display.innerHTML));
          console.log(calculator.total);
        } else if (calculator.lastOperator === "divide") {
          console.log(display.innerHTML);
          calculator.divide(parseFloat(keys.display.innerHTML));
          console.log(calculator.total);
        } else {
          console.log("You broke the damn calculator.");
        }
      } else {
        if (calculator.total !== null) {
          calculator.total += parseFloat(keys.display.innerHTML);
        } else {
          calculator.total = parseFloat(keys.display.innerHTML);
        }
      }
      calculator.lastOperator = "add";
      display.innerHTML = "";
    }),

  subtractButton: document.getElementById("keySubtract").addEventListener("click", function() {
      console.log(parseFloat(keys.display.innerHTML));
      if (calculator.lastOperator.length > 0) {
        if (calculator.lastOperator === "add") {
          console.log(display.innerHTML);
          calculator.add(parseFloat(keys.display.innerHTML));
        } else if (calculator.lastOperator === "subtract") {
          console.log(display.innerHTML);
          calculator.subtract(parseFloat(keys.display.innerHTML));
        } else if (calculator.lastOperator === "multiply") {
          console.log(display.innerHTML);
          calculator.multiply(parseFloat(keys.display.innerHTML));
          console.log(calculator.total);
        } else if (calculator.lastOperator === "divide") {
          console.log(display.innerHTML);
          calculator.divide(parseFloat(keys.display.innerHTML));
          console.log(calculator.total);
        } else {
          console.log("You broke the damn calculator.");
        }
      } else {
        if (calculator.total !== null) {
          calculator.total -= parseFloat(keys.display.innerHTML);
        } else {
          calculator.total = parseFloat(keys.display.innerHTML);
        }
      }
      calculator.lastOperator = "subtract";
      display.innerHTML = "";
    }),

  multiplyButton: document.getElementById("keyMultiply").addEventListener("click", function() {
      console.log(parseFloat(keys.display.innerHTML));
      if (calculator.lastOperator.length > 0) {
        if (calculator.lastOperator === "add") {
          console.log(display.innerHTML);
          calculator.add(parseFloat(keys.display.innerHTML));
        } else if (calculator.lastOperator === "subtract") {
          console.log(display.innerHTML);
          calculator.subtract(parseFloat(keys.display.innerHTML));
        } else if (calculator.lastOperator === "multiply") {
          console.log(display.innerHTML);
          calculator.multiply(parseFloat(keys.display.innerHTML));
          console.log(calculator.total);
        } else if (calculator.lastOperator === "divide") {
          console.log(display.innerHTML);
          calculator.divide(parseFloat(keys.display.innerHTML));
          console.log(calculator.total);
        } else {
          console.log("You broke the damn calculator.");
        }
      } else {
          if (calculator.total !== null) {
          console.log("total was not null, so multiplied");
          calculator.total *= parseFloat(keys.display.innerHTML);
          console.log(calculator.total);
        } else {
          console.log("total was null, can't multiply by zero, so made entry equal total");
          calculator.total = parseFloat(keys.display.innerHTML);
          console.log(calculator.total);
        }
      }
      calculator.lastOperator = "multiply";
      display.innerHTML = "";
    }),

  divideButton: document.getElementById("keyDivide").addEventListener("click", function() {
      console.log(parseFloat(keys.display.innerHTML));
      if (calculator.lastOperator.length > 0) {
        if (calculator.lastOperator === "add") {
          console.log(display.innerHTML);
          calculator.add(parseFloat(keys.display.innerHTML));
        } else if (calculator.lastOperator === "subtract") {
          console.log(display.innerHTML);
          calculator.subtract(parseFloat(keys.display.innerHTML));
        } else if (calculator.lastOperator === "multiply") {
          console.log(display.innerHTML);
          calculator.multiply(parseFloat(keys.display.innerHTML));
          console.log(calculator.total);
        } else if (calculator.lastOperator === "divide") {
          console.log(display.innerHTML);
          calculator.divide(parseFloat(keys.display.innerHTML));
          console.log(calculator.total);
        } else {
          console.log("You broke the damn calculator.");
        }
      } else {
        if (calculator.total !== null) {
          console.log("total was not null, so divided");
          calculator.total /= parseFloat(keys.display.innerHTML);
          console.log(calculator.total);
        } else {
          console.log("dividing....");
          calculator.total = parseFloat(keys.display.innerHTML);
          console.log(calculator.total);
        }
      }
      calculator.lastOperator = "divide";
      display.innerHTML = "";
    }),
};





// var subtractButton = document.getElementById("keySubtract");

// subtractButton.addEventListener("click", function(){
//   calculator.subtract();
//   console.log(calculator.subtract());
// });

// var mulitplyButton = document.getElementById("keyMultiply");

// mulitplyButton.addEventListener("click", function(){
//   calculator.mulitply();
//   console.log(calculator.mulitply());
// });

// var divideButton = document.getElementById("keyDivide");

// divideButton.addEventListener("click", function(){
//   calculator.divide();
//   console.log(calculator.divide());
// });