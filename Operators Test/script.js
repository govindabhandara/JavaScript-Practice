function calculate() {
  let val1 = document.getElementById("value1").value;
  let val2 = document.getElementById('value2').value;
  let operator = document.getElementById('operator').value;
  let result;
  val1=parseFloat(val1);
  val2=parseFloat(val2);

  switch(operator) {
    case '+' : result = val1 + val2; break;
    case '-' : result = val1 - val2; break;
    case '*' : result = val1 * val2; break;
    case '/': result = val2 !== 0 ? val1 / val2 : 'Infinity'; break;
    case '%': result = val1 % val2; break;
    case '==': result = val1 == val2; break;
    case '!=': result = val1 != val2; break;
    case '>': result = val1 > val2; break;
    case '<': result = val1 < val2; break;
    case '>=': result = val1 >= val2; break;
    case '<=': result = val1 <= val2; break;
    default: result = "Invalid Operator";
  }
  document.getElementById("result").innerText = result;
}  

