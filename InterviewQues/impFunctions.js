
let str = `Swati is Awesome`
console.log(str)

let surname = new String('swati')
console.log(surname)

console.log(typeof str)
console.log(typeof surname)

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.includes('Awesome'))

console.log(str.split(" "))
let words = str.split(' ')
words.forEach(ele => {
    console.log(ele);
})

console.log(str.length)

let space = '         Hey Swati         '
console.log(space.trim())
console.log(space.trimLeft())
console.log(space.trimRight())

console.log(str.charAt(0))

let len = str.length
console.log(str.charAt(len - 1))

let email = "swatiupr01@habemcodev.com"
splitEmail = email.substring(0, 9)
console.log(splitEmail)
firstName = email.substring(0, 5)
console.log(firstName)
let firstNameEmail = firstName + email
console.log(firstNameEmail)


