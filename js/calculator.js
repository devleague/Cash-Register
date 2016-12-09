function calculatorModule() {
 
  var calculator = {
    total: 0,
  
  clear: function (){
    this.total = 0;
  },

  add: function (x){
    return this.total += x;
  },

  subtract: function (x){
    return this.total -= x;
  },

  divide: function (x){
    return this.total /= x;
  },

  multiple: function (x){
    return this.total *= x;
  },

  equals: function (x){
    return this.total;
  },

};
return calculator;
}


