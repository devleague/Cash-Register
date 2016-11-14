
function calculatorModule(){
  
  var calculator = { };
  var _memory = 0;
  var _total = 0;



  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function load (x){
    validation(x);
    _total = x;
    return _total;
  }
  /**
   * Return the value of `total`
   * @return { Number }
   */

    function getTotal (x){
    return _total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   function add (x){
    validation(x);
    _total = _total + x;
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function subtract  (x){
    validation(x);
    _total = _total - x;
   }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   function multiply (x){
    validation(x);
    _total = _total * x;
   }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function divide (x){
    validation(x);
    _total = _total / x;
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   function recallMemory (x){
    return _memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */

   function saveMemory (x){
    _memory = _total;
   }

  /**
   * Clear the value stored at `memory`
   */

   function clearMemory (x){
    _memory = 0;
   }

  /**
   * Validation
   */

  function validation(x){
    if (typeof x !== "number"){
      throw error;
    }
  }


   return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory:  saveMemory,
    clearMemory: clearMemory
  };
}