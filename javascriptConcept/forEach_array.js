//Method 1: to find even number in array
const numbers =[34,33,56,12,78]

numbers.forEach(number=>{
    console.log(number)
})
//Method 2: to find even number in array
const array =[8,56,23,89,25,78,45,66,33,4,21]

const evenArray = array.filter(swati => swati %2 ===0)
console.log(evenArray)

//Method 2: to find even number in array using foreach
    const arr = [1,2,3,4,5,2,6,2,9]
    const even= [];

    arr.forEach(value => {
        
        if(value %2 ===0){
            even.push(value)
        }
    });

    console.log(even)