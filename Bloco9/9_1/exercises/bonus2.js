// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const word = [];
  const reverseWord = [];

  for (let i = 0; i < str.length; i += 1) {
    word.push(str[i]);
    reverseWord.push(str[(str.length - 1) - i]);
  }

  let dif = false;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] !== reverseWord[i]) {
      dif = true;
    }
  }

  return dif;
}

module.exports = palindrome;
