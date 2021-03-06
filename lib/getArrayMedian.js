/**
 *
 * @function: getArrayCenter
 * @property: [array]
 * @description: Returns number from array which has equal quantity of more and less numbers from same array
 *
 */

//  @define & export: getArrayCenter
module.exports = array => {
  // Check if provided value is not array or has length
  if (
    !array ||
    typeof array !== "object" ||
    !array instanceof Array ||
    !array.length
  )
    return 0;

  // First sort the array ascending
  array.sort((a, b) => a - b);

  // Define half of array
  const half = Math.floor(array.length / 2);

  // Check if array is odd
  if (array.length % 2) {
    return array[half];
  } else {
    return (array[half - 1] + array[half]) / 2;
  }
};
