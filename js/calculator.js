
var total = 0;
// var _memory = 0;

function Calculator(){
 
  
  function load(x){
    total += x;
    return total;
  }
  function add(x){
    total += x;
  }
  function subtract(x){
    total -= x;
  }
  function multiply(x){
    total *= x;
  }
  function divide(x){
    total /= x;
  }
  function deleteTotal(){
     total = 0;

  }
  // function saveMemory(){
  //   _memory = total;
  // }
  // function recallMemory() {
  //    return _memory;
  // }
  function returnTotal(){
     return total;
  }

  return{
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  load: load,
  // saveMemory: saveMemory,
  // recallMemory: recallMemory,
  deleteTotal: deleteTotal,
  returnTotal: returnTotal
  };
}
