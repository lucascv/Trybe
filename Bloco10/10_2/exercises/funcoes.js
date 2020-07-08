const randomNumber = () => Math.floor(Math.random()*101);

const uppercase = string => string.toUpperCase();

const firstWord = string => string[0];

const sumStrings = (string1, string2) => string1 + string2;

module.exports = { randomNumber, uppercase, firstWord, sumStrings };
