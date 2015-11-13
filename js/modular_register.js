(function() {

  var register = {

    init: function() {
      this.cacheDom();
      this.bindEvents();

    },

    cacheDom: function() {
      this.equalsButton = document.getElementById("keyEquals");
      // this.addButton = document.getElementById("keyAdd");
      // this.subtractButton = document.getElementById("keySubtract");
      // this.multiplyButton = document.getElementById("keymultiply");
      // this.divideButton = document.getElementById("keyDivide");
      this.display = document.getElementById("display");
      this.numberButtons = document.querySelectorAll(".number");
      this.operatorButtons = document.querySelectorAll(".operator");
      this.chainedButton = document.getElementById("chained");
      this.orderedButton = document.getElementById("ordered");

    },

    bindEvents: function() {
      this.equalsButton.addEventListener('click', functionhere);
      this.chainedButton.addEventListener('click', function() {
        states.regMode = "chained";
        clear();
      });
      this.orderedButton.addEventListener('click', function() {
        states.regMode = "ordered";
        clear();
      });
      // this.addButton.addEventListener('click', functionhere);
      // this.subtractButton.addEventListener('click', functionhere);
      // this.multiplyButton.addEventListener('click', functionhere);
      // this.divideButton.addEventListener('click', functionhere);
      for (var i=0; i < this.numberButtons.length; i++) {
        this.numberButtons[i].onclick = this.appendDisplay;
      }
      for (var k=0; k < this.operatorButtons.length; k++) {
        this.operatorButtons[k].addEventListener('click', function() {
          this.operate();
        });
      }
    },

    appendDisplay: function() {
      this.display.innerHTML += this.innerHTML;
    },

    clear: function() {
      display.innerHTML = "";
      states.numArr = [];
    },

    operate: function() {
      if (states.regMode === "ordered") {
        states.numArr.push(parseFloat(this.display.innerHTML));

      }
      if (states.regMode === "chained") {
        if (this.opCheck()) {
          states.numArr[0] = calculateFunction(states.numArr[0], parseFloat(this.display.innerHTML));
          this.display.innerHTML = states.numArr[0];
        } else {
          this.opCheck();
        }
      }
    },

    opCheck: function() {
      if (numArr.length > 0) {
        return true;
      } else {
        states.numArr[0] = parseFloat(this.display.innerHTML);
        states.numArr[1] = /* the correct operator */;
      }
    },

    states: {
      regMode: "ordered",
      numArr: [],
    }

// Use check functions that return true or false

  };

  init();
})();