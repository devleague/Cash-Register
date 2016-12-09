
var calculatorModule = (function () {
  //total is private
  var total = 0;
  var calculator = {
  
  
      clear: function (){
        total = 0;
        return total;
      },

      add: function (num){
        total += num;
        console.log(total);
        return total;
      },

      subtract: function (num){
        total -= num;
        return total;
      },

      divide: function (num){
        total /= num;
        return total;
      },

      multiply: function (num){
        total *= num;
        return total;
      },

      equals: function (){
        return total;
      },

      total: function (num) {
        return total = num;

      }

  };
//anything after the return is a public variable
return calculator;

})();



