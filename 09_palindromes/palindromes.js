const palindromes = function (str) {
  const filtered = str.toLowerCase().replace(/[^\w\s]+|\s+/g, '').split('');
  return filtered.join('') === filtered.reverse().join('') ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
