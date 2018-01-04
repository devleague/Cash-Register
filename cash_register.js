
window.onload = function(){

let _total = '';
let _memory = '';

// get input from user and display on screen
let numberSelector = document.querySelector("#numbers");
numberSelector.addEventListener("click", loadDisplay);

function loadDisplay(e){
    if (e.target !== e.currentTarget){
       var clickedItem = e.target.id;
       document.getElementById('total_value').innerHTML = clickedItem;
    }
   }
}
  
/*
var cashRegister = (function() {

let _total = '';
let _memory = '';

//take numbers pressed and enter into the display
let numberSelector = document.querySelector("#numbers");
numberSelector.addEventListener("click", loadDisplay);

function loadDisplay(x){
    if (x.target !== x.currentTarget){
       var clickedItem = x.target.id;
       alert("hello " + clickedItem);
    }
   };
   




})();



*/


