// IsPalindrome
function IsPalindrome(phrase) {
  var regex = /[\W_]/g;
  var phrase = phrase.toLowerCase().replace(regex, '');
  var phraseInverse = phrase
    .split('')
    .reverse()
    .join('');
  
  return phrase === phraseInverse ? 'Vrai' : 'Faux!';
}

console.log(IsPalindrome('Faux'));