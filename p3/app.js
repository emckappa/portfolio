  var num1 = document.querySelector("[name='num1']");
  var num2 = document.querySelector("[name='num2']");
  var num3 = document.querySelector("[name='num3']"); 

  var max = document.getElementById("max");
  var min = document.getElementById("min");
  var men = document.getElementById("men");
  
  var btn = document.getElementById("calc");
  
  btn.addEventListener("click", function(){
    maximum();
    mean();
    minimum();
  });

  function maximum() {
    max.textContent = Math.max(num1.value, num2.value, num3.value);  
  }
		
  function minimum() {
    min.textContent = Math.min(num1.value, num2.value, num3.value);  
  }

  function mean() {
    men.textContent = ((+num1.value + +num2.value + +num3.value) / 3).toFixed(1);
  }

  
	
  
