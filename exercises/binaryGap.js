function solution(N) {
  // simple way to convert string to binary
  let binaryString = N.toString(2);
  let maxGap = 0;
  let currentGap = 0;

  // let's loop through the string - *** Blazing Fast ***
  for (let binaryDigit of binaryString) {
    // if it's zero, let's add to the gap count
    if (binaryDigit === '0') {
      currentGap++;
      // else, check for bigger gap and update maxgap accordingly
    } else {
      maxGap = maxGap > currentGap ? maxGap : currentGap;
      // reset gap count
      currentGap = 0;
    }
  }

  return maxGap;
}