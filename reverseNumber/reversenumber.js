// Reverse Number
function reverseNumber ( num ) {
  var reversedNumber = 
    num.toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversedNumber) * Math.sign(num);
}

console.log(reverseNumber(-50));