
let str = `Swati is Awesome`
console.log(str)

let surname = new String('swati')
console.log(surname)

console.log(typeof str)
console.log(typeof surname)

/*toUpperCase() */
console.log(str.toUpperCase())
/*toLowerCase() */
console.log(str.toLowerCase())
/*includes() */
console.log(str.includes('Awesome'))
/*split */
console.log(str.split(" "))
let words = str.split(' ')
words.forEach(ele => {
    console.log(ele);
})
/*length */
console.log(str.length)
/*trim */
let space = '         Hey Swati         '
console.log(space.trim())
/*trimLeft */
console.log(space.trimLeft())
/*trimRight */
console.log(space.trimRight())
/*charAt(position)*/
console.log(str.charAt(0))

let len = str.length
console.log(str.charAt(len - 1))
/*subString */
let email = "swatiupr01@habemcodev.com"
splitEmail = email.substring(0, 9)
console.log(splitEmail)
firstName = email.substring(0, 5)
console.log(firstName)
let firstNameEmail = firstName + email
console.log(firstNameEmail)


