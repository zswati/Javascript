//split the array "Form an array from this string"

const arr = '12345 676766'
const splitArr = arr.split('');
console.log(splitArr);

const str = 'Form an array from this string';
const arrCopy = str.split();
console.log(arrCopy);
// expected output: ["Form an array from this string"]
const words = str.split(' ');
console.log(words);
// expected output: ["Form", "an", "array", "from", "this", "string"]