// Returns the minimum of a and b (or b if they are equal)
function min(a, b){
  return a < b ? a : b;
}

// Finds whether or not a number is even by repeatedly subtracting 2
// Doesn't work with numbers lower than 0;
function isEven(num){
  if (num-2 === 0) return true;
  if (num-2 < 0) return false;
  return isEven(num-2);
}

function isEvenFixed(num){
  if (num === 0) return true;
  if (num%1 !== 0) return false;
  else if (num > 0){
    if (num-2 === 0) return true;
    if (num-2 < 0) return false;
    return isEvenFixed(num-2);
  }
  else {
    if (num+2 === 0) return true;
    if (num+2 < 0) return false;
    return isEvenFixed(num+2);
  }
}

// Counts the capital 'B's in a string
function countBs(str) {
  str = str.split("").filter(function(letter){
    return letter === "B";
  });
  console.log(str.length);
}

// Counts the given letter in a string
function countChar(str, char) {
  str = str.split("").filter(function(letter){
    return letter === char;
  });
  console.log(str.length);
}
