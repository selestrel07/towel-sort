
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (!matrix) {
    return result;
  }
  for(let i = 0; i < matrix.length; i++) {
    result.push(i % 2 === 1 ? [...[...matrix[i]].reverse()] : [...matrix[i]]);
  }
  return result.flat();
}
