// Find The Vowels
function findVowels (phrase) {
  var count = 0;
  var vowels = ['a','e','i','o','u'];
  for(var itm of phrase.toLowerCase()) {
    if (vowels.includes(itm)) count++
  }
  return count;
}

console.log(findVowels('psst'));