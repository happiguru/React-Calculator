import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const number1 = Big(numberOne);
  const number2 = Big(numberTwo);
  let total = 0;

  const divide = () => (number2 === 0 ? 'NaN' : number1.div(number2));

  switch (operation) {
    case 'x':
      total = number1.times(number2).toString();
      break;
    case '÷':
      total = divide(number1, number2).toString();
      break;
    case '+':
      total = number1.plus(number2).toString();
      break;
    case '-':
      total = number1.minus(number2).toString();
      break;
    case '%':
      total = number1.mod(number2).toString();
      break;
    default:
  }
  return total;
};

export default operate;
