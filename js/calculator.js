console.log("Test calculator");

var calculator = {
  total: 0,

  clear: function() {this.total = 0;},

  add: function(num) {return this.total += num;},

  subtract: function(num) {return this.total -= num;},

  multiply: function(num) {return this.total *= num;},

  divide: function(num) {
    // add event listener
    return this.total /= num;
  },

  equals: function() { return this.total ;} //push this.total to register.display
};
