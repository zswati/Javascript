/*JavaScript’s toUpperCase() method converts a string object into a new string consisting 
of the contents of the first string, 
with all alphabetic characters converted to be upper-case (i.e. capitalized).*/
//1.
const word = 'I am not angry';
console.log(word.toUpperCase(word))

//2.How to convert only the first letter of a string
const firstLetter = "swati zarekar"
const firstUpper = firstLetter[0].toUpperCase()+ firstLetter.substring(1)
console.log(firstUpper);

//3.Making the first letter of every word in a string upper-case
const str = 'swati is very good person by heart'
    //First, separate every word.
const sepWord = str.split(' ');
console.log(sepWord);
    //iterate through the array of words
    //Uppercase every first character.
const allFirstWords =sepWord.map(word=> word[0].toUpperCase()+ word.substring(1));
console.log(allFirstWords);
    //Finally, recombine the array into a single string.
const newStr = allFirstWords.join(' ');
console.log(newStr)    