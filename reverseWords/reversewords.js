// Reverse words
function reverseWords (phrase) {
  var listMots = phrase.split(' ');

  var listMotInverse = [];
  listMots.forEach(function(mot) {
    var motInverse = mot.split('').reverse().join('');
    listMotInverse.push(motInverse);
  })

  return listMotInverse.join(' ');
}

console.log(reverseWords('Bienvenue dans cette formation'));