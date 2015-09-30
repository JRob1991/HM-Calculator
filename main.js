var calcStr = '';
var resultStr = '';

//Adding event listener for each click
var buttons = document.querySelectorAll('.box > div > div');
for (var i = 0, len = buttons.length; i < len; i++) {
  buttons[i].addEventListener('click', handleButtonClick, false);
}

//Getting the value within the span
var resultWindow = document.querySelector('.result-window');
function handleButtonClick (evt) {
  var button = evt.target;
  var value = button.nodeName === 'DIV' ? button.children[0].innerHTML : button.innerHTML;
  switch(value) {
    case 'C':
      calcStr = '';
      resultWindow.innerHTML = calcStr;
      break;
    case '=':
      resultStr = eval(calcStr);
      resultWindow.innerHTML = resultStr;
      break;
    default:
      if (value === 'X') {
        calcStr += '*';
      }
      else {
        calcStr += value;
      }
 
      resultWindow.innerHTML = calcStr;
  }

}