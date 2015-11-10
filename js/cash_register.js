var register = {

  balance: 0,

  display: 0,

  getBalance: function() {
    return this.balance;
  },

  depositCash: function() {
    this.balance += parseFloat(display.innerHTML);
    display.innerHTML = "";
    console.log(this.balance);
  },

  withdrawCash: function() {
    if (parseFloat(display.innerHTML) > this.balance) {
      display.innerHTML = "ERROR: INSUFFICIENT FUNDS";
      console.log("You is broke.");
    } else {
      this.balance -= parseFloat(display.innerHTML);
      display.innerHTML = "";
      console.log(this.balance);
    }
  }
};

document.getElementById("keyGetBalance").addEventListener("click", function(){
  register.getBalance();
  console.log("This is your balance.");
  console.log(register.getBalance());
  console.log(register.balance);
});

document.getElementById("keyDepositCash").addEventListener("click", function(){
  register.depositCash();
  console.log("This is how much you deposited.");
  console.log(register.balance);
});

document.getElementById("keyWithdrawCash").addEventListener("click", function(){
  register.withdrawCash();
  console.log("This is your balance.");
  console.log(register.balance);
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
  chained: document.getElementById("chained"),
  ordered: document.getElementById("ordered")

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
    calculator.lastOperator = [];
  }),
  pressChained: keys.chained.addEventListener('click', function() {
    // starts with same functionality as clear
    display.innerHTML = '';
    calculator.total = null;
    calculator.lastOperator = [];
    // import chainoperations.js module


  }),
  pressOrdered: keys.ordered.addEventListener('click', function() {
    // starts with same functionality as clear
    display.innerHTML = '';
    calculator.total = null;
    calculator.lastOperator = [];
    // import orderedoperations.js module


  })
};

// This function should be added to the chainoperations.js module
function lastOpCheck(keys) {
  if (calculator.lastOperator[0] === "add") {
    calculator.add(parseFloat(keys));
  } else if (calculator.lastOperator[0] === "subtract") {
    calculator.subtract(parseFloat(keys));
  } else if (calculator.lastOperator[0] === "multiply") {
    calculator.multiply(parseFloat(keys));
  } else if (calculator.lastOperator[0] === "divide") {
    calculator.divide(parseFloat(keys));
  } else {
    console.log("You broke the damn calculator.");
  }
}

// Order Of Operations

var operations = {
  equalsButton: document.getElementById("keyEquals").addEventListener("click", function() {
      calculator.lastOperator.push(parseFloat(keys.display.innerHTML));
      console.log(calculator.lastOperator);

      // these loops should be refactored
      for (var i = 0; i < calculator.lastOperator.length; i++) {
        while (calculator.lastOperator[i] === "*") {
          num = calculator.lastOperator[i-1] * calculator.lastOperator[i+1];
          calculator.lastOperator.splice(i-1, 3, num);
          console.log(calculator.lastOperator);
        }
      }
      for (var k = 0; k < calculator.lastOperator.length; k++) {
        while (calculator.lastOperator[k] === "/") {
          num = calculator.lastOperator[k-1] / calculator.lastOperator[k+1];
          calculator.lastOperator.splice(k-1, 3, num);
          console.log(calculator.lastOperator);
        }
      }
      for (var m = 0; m < calculator.lastOperator.length; m++) {
        while (calculator.lastOperator[m] === "+") {
          num = calculator.lastOperator[m-1] + calculator.lastOperator[m+1];
          calculator.lastOperator.splice(m-1, 3, num);
          console.log(calculator.lastOperator);
        }
      }
      for (var p = 0; p < calculator.lastOperator.length; p++) {
        while (calculator.lastOperator[p] === "-") {
          num = calculator.lastOperator[p-1] - calculator.lastOperator[p+1];
          calculator.lastOperator.splice(p-1, 3, num);
          console.log(calculator.lastOperator);
        }
      }
      console.log(calculator.lastOperator[0]);
      display.innerHTML = calculator.lastOperator[0].toFixed(3);
      calculator.lastOperator = [];
    }),

  addButton: document.getElementById("keyAdd").addEventListener("click", function() {
      calculator.lastOperator.push(parseFloat(keys.display.innerHTML));
      calculator.lastOperator.push('+');
      console.log(calculator.lastOperator);
      display.innerHTML = "";
    }),

  subtractButton: document.getElementById("keySubtract").addEventListener("click", function() {
      calculator.lastOperator.push(parseFloat(keys.display.innerHTML));
      calculator.lastOperator.push('-');
      display.innerHTML = "";
    }),

  multiplyButton: document.getElementById("keyMultiply").addEventListener("click", function() {
      calculator.lastOperator.push(parseFloat(keys.display.innerHTML));
      calculator.lastOperator.push('*');
      console.log(calculator.lastOperator);
      display.innerHTML = "";
    }),

  divideButton: document.getElementById("keyDivide").addEventListener("click", function() {
      calculator.lastOperator.push(parseFloat(keys.display.innerHTML));
      calculator.lastOperator.push('/');
      display.innerHTML = "";
    }),
};