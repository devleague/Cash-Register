var operations = calculatorModule();

	

window.register = (function () {
	// var mycalc = cashRegistorModule();
	// console.log(mycalc.getBalance());

	var display = document.getElementById("d");
			document.getElementById('btn7').addEventListener("click", function(){
				display.innerHTML += 7;
			});
			
			document.getElementById('btn8').addEventListener("click", function(){
				display.innerHTML+= 8;
			});
			
			document.getElementById('btn9').addEventListener("click", function(){
				display.innerHTML += 9;
			});
				
			document.getElementById('btn4').addEventListener("click", function(){
				display.innerHTML += 4;
			});
			
			document.getElementById('btn5').addEventListener("click", function(){
				display.innerHTML += 5;
			});
			
			document.getElementById('btn6').addEventListener("click", function(){
				display.innerHTML += 6;
			});
			
			document.getElementById('btn1').addEventListener("click", function(){
				display.innerHTML += 1;
			});
			document.getElementById('btn2').addEventListener("click", function(){
				display.innerHTML += 2;
			});
			document.getElementById('btn3').addEventListener("click", function(){
				display.innerHTML += 3;
			});
			
			document.getElementById('btn0').addEventListener("click", function(){
				display.innerHTML += 0;
			});
			document.getElementById('btn00').addEventListener("click", function(){
				display.innerHTML += '00';
			});
			document.getElementById('desml').addEventListener("click", function(){
				display.innerHTML += '.';
			});
			document.getElementById('add').addEventListener("click", function(){
				console.log(display.innerHTML);
				var value = operations.add(display.innerHTML);
				console.log(value);
				});
			document.getElementById('wdcash').addEventListener("click", function(){
				return cashRegistorModule.withdrawCash;
			});
			// document.getElementById('equals').addEventListener("click", function(){
			// 	return operations.equals;
			// });
			document.getElementById('divide').addEventListener("click", function(){
				return operations.divide;
			});
			
			// document.getElementById('clear').addEventListener("click", function(){
			// 	return operations.clear;
			// });
			document.getElementById('mlti').addEventListener("click", function(){
				return operations.multiple;
			});
			document.getElementById('getbal').addEventListener("click", function(){
			return cashRegistorModule.getBalance;
			});
			document.getElementById('subtr').addEventListener("click", function(){
				return operations.subtract;
			});
			document.getElementById('depcash').addEventListener("click", function(){
				return cashRegistorModule.depositCash;
			});

	function concatenateNumbers (number){
  if(display.innerHTML.trim() !== ""){
    var currentValue = parseFloat(display.innerHTML.trim());
    display.innerHTML = parseFloat(number) + parseFloat(currentValue);
  }else {
    console.log ("Empty");
    display.innerHTML = number;
  }
var str = "   ";
console.log(str.trim());

	}
	function cashRegistorModule (){
		var cashreg;
		LastOperator = " ";

		var cashRegistor1 = {
			cashreg: 0,

		  depositCash: function (){
		   operations.total = cashreg;
		  },

		  withdrawCash: function(){
		    operations.total = 0;
		    cashreg = 0;
		  },
		  getBalance: function (){
		    return operations.equals;
		  }
		};
	}
	
	})();
	
console.log('test');
