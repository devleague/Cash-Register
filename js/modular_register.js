(function() {

  var register = {

    init: function() {

    },

    cacheDom: function() {
      this.equalsButton = document.getElementById("keyEquals");
      this.addButton = document.getElementById("keyAdd");
      this.subtractButton = document.getElementById("keySubtract");
      this.multiplyButton = document.getElementById("keymultiply");
      this.divideButton = document.getElementById("keyDivide");
      this.display = document.getElementById("display");

    },

    bindEvents: function() {
      this.equalsButton.addEventListener('click', functionhere);
      this.addButton.addEventListener('click', functionhere);
      this.subtractButton.addEventListener('click', functionhere);
      this.multiplyButton.addEventListener('click', functionhere);
      this.divideButton.addEventListener('click', functionhere)

    },



  };

  init();
})();