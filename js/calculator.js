
console.log('Calculator Connected');



function calculatorModule() {
    let _memory = 0;
	let _total = 0;
	let _savedTotal = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

function load(x){
  validation(x);
  _total = x;
  return _total;
}

// saves the entered number to allow for a second number
function savedTotal(){
	_savedTotal = _total;
}

function recallSavedTotal(){
	return _savedTotal;
}
  /**
   * Return the value of `total`
   * @return { Number }
   */
function getTotal() {
  return _total;
}

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
function add() {
  //validation();
  _total += _savedTotal;
}

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
function subtract () {
  //validation(x);
  _total = _savedTotal - _total;
}

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
function multiply () {
  //validation(x);
  _total *= _savedTotal;
}

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
function divide () {
  //validation(x);
  _total = _savedTotal / _total;
}


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
function recallMemory(){
  return _memory;
}

  /**
   * Stores the value of `total` to `memory`
   */
function saveMemory(){
  _memory += _total;
}

function withdraw(){
  _memory = _memory - _total;
}

  /**
   * Clear the value stored at `memory`
   */
  function clearMemory(){
    _memory = 0;
  }

  /**
   * Validation
   */
function validation(x){
  if (typeof x !== 'number'){
    throw Error ('is not a number');
}
}
  return calculator = {
    load: load,
    getTotal:getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
	  clearMemory: clearMemory,
	  savedTotal: savedTotal,
    recallSavedTotal: recallSavedTotal,
    withdraw: withdraw
  }
};



















//window.onload = function (){

/*

var calculator = (function () {

    let _total = '';
    let _saved_total = '';


    function load(x){
        _total = x;
        return _total;
    }

    function add(x){
        _total += x;
    }

    function subtract(x){
        _total -= x;
    }

    function saveTotal(){
        _saved_total += _total;
    }

})();

//}

// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}
*/