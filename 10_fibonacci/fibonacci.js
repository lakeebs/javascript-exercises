const fibonacci = function(n) {
  if (n == 0 || isNaN(n)) {
    return 0;
  } else if (n < 0) {
    return "OOPS";
  }

  let sequence = [1, 1];

  for (let i = 2; i < n; i++) { // Use less than to compensate for the 0 index
    let prevNum = sequence[sequence.length -1];
    let prevPrevNum = sequence[sequence.length -2];
    sequence.push(prevNum + prevPrevNum);
  }
  return sequence[n-1]; // Use -1 to compensate for the 0 index

};

// 1, 1, 2, 3, 5, 8

// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8

// Do not edit below this line
module.exports = fibonacci;
