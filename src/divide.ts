/**
 * Divides a first number by a second number
 *
 * @param firstNum first number (numerator)
 * @param secondNum second number (denominator)
 * @returns result of dividing `firstNum` by `secondNum`
 */
// //original typescript syntax
// const divide = (firstNum: number, secondNum: number): number => {
//   const result = firstNum / secondNum;
//   return result;
// };
// //Make into Arrow
// export default divide;
// const divide = (firstNum: number, secondNum: number): =>
// const result = firstNum/secondNum;
// return result

//one line implicit arrow function
const divide = (firstNum: number, secondNum: number): number =>
  firstNum / secondNum;

export default divide;
