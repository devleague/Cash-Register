// Chain of Operations

var operations = {
  equalsButton: document.getElementById("keyEquals").addEventListener("click", function() {
      lastOpCheck(keys.display.innerHTML);
      calculator.lastOperator = [];
      display.innerHTML = calculator.total.toFixed(3);
    }),

  addButton: document.getElementById("keyAdd").addEventListener("click", function() {
      if (calculator.lastOperator.length > 0) {
        lastOpCheck(keys.display.innerHTML);
      } else {
        if (calculator.total !== null) {
          calculator.total += parseFloat(keys.display.innerHTML);
        } else {
          calculator.total = parseFloat(keys.display.innerHTML);
        }
      }
      calculator.lastOperator[0] = "add";
      display.innerHTML = "";
    }),

  subtractButton: document.getElementById("keySubtract").addEventListener("click", function() {
      if (calculator.lastOperator.length > 0) {
        lastOpCheck(keys.display.innerHTML);
      } else {
        if (calculator.total !== null) {
          calculator.total -= parseFloat(keys.display.innerHTML);
        } else {
          calculator.total = parseFloat(keys.display.innerHTML);
        }
      }
      calculator.lastOperator[0] = "subtract";
      display.innerHTML = "";
    }),

  multiplyButton: document.getElementById("keyMultiply").addEventListener("click", function() {
      if (calculator.lastOperator.length > 0) {
        lastOpCheck(keys.display.innerHTML);
      } else {
          if (calculator.total !== null) {
          calculator.total *= parseFloat(keys.display.innerHTML);
        } else {
          calculator.total = parseFloat(keys.display.innerHTML);
        }
      }
      calculator.lastOperator[0] = "multiply";
      display.innerHTML = "";
    }),

  divideButton: document.getElementById("keyDivide").addEventListener("click", function() {
      if (calculator.lastOperator.length > 0) {
        lastOpCheck(keys.display.innerHTML);
      } else {
        if (calculator.total !== null) {
          calculator.total /= parseFloat(keys.display.innerHTML);
        } else {
          calculator.total = parseFloat(keys.display.innerHTML);
        }
      }
      calculator.lastOperator[0] = "divide";
      display.innerHTML = "";
    }),
};