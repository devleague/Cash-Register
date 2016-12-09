

var calculator = {

  display: document.getElementById("Display"),
  number: function () {
    if (document.querySelectorAll("button.number, button.decimal")){
    return number.parseFloat();
    }
  },
  memory: 0,
  total: 0
};
//how to create number as a passable argument?
//how to incorporate parseFloat()?

for (var i = 0; i < calculator.number.length; i++) {
  calculator.number[i].onclick = appendCalc;
}

function appendCalc (number) {
  calculator.display.innerHTML += this.innerHTML;
}

  // function load (number) {
  //   if (typeof number !== "number") {
  //     return "error error!";
  //   }
  //   total = number;
  //   return total;
  // }

  // function getTotal (number) {
  //   var equal = document.querySelector("button.equals");
  //   var total = equal.onclick.parseFloat(addTotal).calculator.display.innerHTML;
  //   if (equal.onclick) {
  //   return total;
  //  }
  // }

  // var plus = document.querySelector("button.add");
  // plus.onclick = addMe;

  function addMe (number) {
    if (number) {
      console.log (alert("hello"));
    }
   //calculator.display.innerHTML = number + plus + total;
  }

   //for (var i=0; i < number.length; i++) {
      // newNumber = Math.floor(Math.random() * number.length);
      //   addTotal = newNumber + "+ plus" + number;
      //   return addTotal;

  //   } else if (number !== number) {
  //       console.log("not a number");
  //     }
  // }

  function minus (number) {

    total = total - number;
    return total;
    }

  function multiply (number) {

    total = total * number;
    return total;
    }

  function divide (number) {

    total = total / number;
    return total;
    }

  function recallMemory (number) {

    return memory;
    }

  function saveMemory (number) {

    memory = total;
    return memory;
    }

  function clearMemory (number) {

    memory = 0;
    return memory;
    }












