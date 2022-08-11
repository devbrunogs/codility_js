/**
 * Performance only 33%
 */

function solution(A) {
  let distinctCount = 0;
  let previousNumber = [];

  A.forEach(number => {
    if (!previousNumber.includes(number)) {
      distinctCount++;
      previousNumber.push(number)
    }
  })

  return distinctCount;
}