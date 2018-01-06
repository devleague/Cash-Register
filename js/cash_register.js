
console.log('Cash Register Connected')

let decimalAdded = false;
const calc = calculatorModule();
let screen = document.getElementById('total_value');
let message = document.getElementById('total_text');
let optrValue = '';

//get input from user and display on screen under current total

let numberSelector = document.querySelector('#numbers');
numberSelector.addEventListener('click', loadDisplay);

function loadDisplay(x){
       let btnValue = x.target.id;
       if (screen.innerHTML === '$0.00'){
           screen.innerHTML = '';
       }
       screen.innerHTML += btnValue;
       calc.load(+screen.innerHTML)
       if(btnValue === 'clear'){
            screen.innerHTML = '$0.00';
     }
       if(btnValue === '.'){
            decimalAdded = true;
     }
}

//operator functions.  save _total into _memory and clear screen to allow for next number

let operatorSelector = document.querySelector('#operators');
operatorSelector.addEventListener('click', calculate);

function calculate(x){
        optrValue = x.target.id;
        calc.savedTotal();
        screen.innerHTML = '';
}


//function functions

let functionSelector = document.querySelector('#functions');
functionSelector.addEventListener('click', functionate);

function functionate(x){
        let funcValue = x.target.id;
        if(funcValue === 'total'){
            if(optrValue === '+'){
                calc.add();             
            }else if(optrValue === '-'){
                calc.subtract();
            }else if(optrValue === 'x'){
                calc.multiply();
            }else if(optrValue === '/'){
                calc.divide();
            }
        //let savedTotal = document.createElement('div'); 
        // savedTotal.id = 'savedTotal';
        // document.getElementById('#display').appendChild(savedTotal);      
        // document.getElementById('savedTotal').innerHTML = calc.getTotal();    
         screen.innerHTML = calc.getTotal();      
            }else if(funcValue === 'deposit_cash'){
                calc.saveMemory();
            }else if(funcValue === 'withdraw_cash'){
                calc.withdraw();
            }else if(funcValue === 'get_balance'){
                screen.innerHTML = '$' + calc.recallMemory();
            }
    }


