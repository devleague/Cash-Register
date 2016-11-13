function Calculator(){
  
  var total = 0;
  var memory = 0;
  // function clear(x){
  //   return total = 0;
    
  // }

  function add(x){
    total += x;
  }
  function subtract(x){
    return total -= x;
  }
  function multiply(x){
    return total *= x;
  }
  function divide(x){
    return total /= x;
  }
  function saveMemory(x){
    return memory = total;
  }
  function returnTotal() {
    return total;
  }

  return{
  clear: clear,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  returnTotal: returnTotal
  };
}