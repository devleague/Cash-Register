// Order Of Operations

var operations = {
  equalsButton: document.getElementById("keyEquals").addEventListener("click", function() {
      calculator.lastOperator.push(parseFloat(keys.display.innerHTML));
      console.log(calculator.lastOperator);

      // 1. Semi-string approach.
      // calculator.total = parseFloat(calculator.lastOperator);
      // console.log(calculator.total);


      // 2. Looping through an array for math functions.
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

      // 3. Joining all elements in an array into a long math string.
      // calculator.numStr = calculator.lastOperator.join('');
      // console.log(calculator.numStr);
      // calculator.total = parseFloat(calculator.numStr);

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