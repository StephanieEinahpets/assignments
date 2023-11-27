var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));



function caesarCipher(input, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function shiftCharacter(char, shift) {
        if (alphabet.includes(char)) {
          const index = (alphabet.indexOf(char) + shift) % 26;
          return alphabet.charAt(index);
        } else {
          return char;
        }
      }
    const result = input
    .split('')
    .map((char) => shiftCharacter(char, shift))
    .join('');

  return result;
}

var encryptedText = caesarCipher(input, shift);
console.log('Encrypted text: ', encryptedText);




