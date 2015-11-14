

var cashRegister = {
  display: document.getElementById("Display"),
  numbersOnReg: document.querySelectorAll("button.number, button.decimal"),
  symbolsOnReg: document.querySelectorAll("button.add, button.subtract, button.divide, button.multiply, button.equals"),
};

for (var i = 0; i < cashRegister.numbersOnReg.length; i++) {
  cashRegister.numbersOnReg[i].onclick = appendReg;
}

for (var i = 0; i < cashRegister.symbolsOnReg.length; i++) {
  cashRegister.symbolsOnReg[i].onclick = appendReg;
}

function appendReg () {
  cashRegister.display.innerHTML += this.innerHTML;
}

var clearButton = document.querySelector('button.clear');
  clearButton.onclick = clearDisplay;

function clearDisplay () {
  cashRegister.display.innerHTML = "";
}

// var balance = document.querySelector('button.getBalance');
//   getBalance.onclick = balanceDisplay;

// function balanceDisplay () {
//   cashRegister.display.innerHTML += innerHTML;
// }


