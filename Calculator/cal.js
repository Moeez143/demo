// function to append the values to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  // function to calculate the result
  function calculate() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
  }
  