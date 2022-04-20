// Arrays

let fruits = ["apple", "mango", "cherry", "orange", "banana"]

console.log(fruits.length)
console.log(fruits[4])
console.log(fruits)

fruits.forEach(eachFruits => {

    console.log(eachFruits)

})

// PUSH()
const score = [45, 67, 34, 33, 23]
score.push(44)
console.log(score)
score.push(99, 22, 55)
console.log(score)

//pop
score.pop(55)
console.log(score)

//unshift
score.unshift(45)
console.log(score)

//shift
score.shift()
console.log(score)

//fill
score.fill(0, 1, 3)
console.log(score)

// concantation
let newArr = score.concat(fruits)
console.log(newArr)
