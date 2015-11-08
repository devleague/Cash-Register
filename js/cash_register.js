// var calculatorModule = require('./calculator.js');
console.log("Test register");

var register = {

  balance: 0,

  // display: ,// todo,

  getBalance: function() {
    //push 'balance' to 'display'
    this.display = this.balance;
    return this.display;
  },

  depositCash: function(num) {
    this.balance += num;
    this.display = null;
  },

  withdrawCash: function(num) {
    this.balance -= num;
    this.display = null;
  }
};

//