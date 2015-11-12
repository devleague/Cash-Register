console.log("test");



window.register = (function () {
	var calc = calculatorModule;
	//var saved;
	var op = null;
	var balance = 0;
	var display = document.getElementById("displayBox");
	document.getElementById("b7").addEventListener('click', function(){
		
		concatDisplayNumbers(7);
		add(7);
	});
	document.getElementById("b8").addEventListener('click', function(){
		validateInput();
		concatDisplayNumbers(8);
	});
	document.getElementById("b9").addEventListener('click', function(){
		validateInput();
		concatDisplayNumbers(9);
	});
	document.getElementById("b4").addEventListener('click', function(){
		concatDisplayNumbers(4);
	});
	document.getElementById("b5").addEventListener('click', function(){
		concatDisplayNumbers(5);
	});
	document.getElementById("b6").addEventListener('click', function(){
		concatDisplayNumbers(6);
	});
	document.getElementById("b1").addEventListener('click', function(){
		concatDisplayNumbers(1);
	});
	document.getElementById("b2").addEventListener('click', function(){
		concatDisplayNumbers(2);
	});
	document.getElementById("b3").addEventListener('click', function(){
		concatDisplayNumbers(3);
	});
	document.getElementById("b0").addEventListener('click', function(){
		concatDisplayNumbers(0);
	});
	document.getElementById("b00").addEventListener('click', function(){
		concatDisplayNumbers('00');
	});
	document.getElementById("decimal").addEventListener('click', function(){
		concatDisplayNumbers('.');
	});
	document.getElementById("depositCash").addEventListener('click', function(){
		
	});
	document.getElementById("b+").addEventListener('click', function(){
		var displayVal = validateInput(display.innerHTML);
		calc.add(displayVal);
		//op = "add";
		display.innerHTML = "";

	document.getElementById("clear").addEventListener('click', function(){
		clearFunc();
		
	});

		
		

	});
	document.getElementById("b=").addEventListener('click', function(){
		display.innerHTML = calc.equals();

	});


	

function concatDisplayNumbers (number) {
	if (display.innerHTML !== " ") {
		display.innerHTML += number;
	} else {
		console.log("Display is empty");
		display.innerHTML = number;
	}
}


function clearFunc () {
	display.innerHTML = " ";
}


function validateInput (numberString) {
	console.log(typeof display.innerHTML);
	var number = parseFloat(numberString);
	if (isNaN(number)) {
		return 0;
	} else {
		return number;
	}

	
}


})();






	