import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const number1 = Big(numberOne);
  const number2 = Big(numberTwo);
  let result;
  switch (operation) {
    case '*':
      result = number1.times(number2);
      break;
    case '÷':
      result = number1.div(number2);
      break;
    case '+':
      result = number1.plus(number2);
      break;
    case '-':
      result = number1.minus(number2);
      break;
    default:
      break;
  }
  return result;
};

export default Operate;
