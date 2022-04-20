const arraysOfNumbers =[1,2,3,4]

const sum =arraysOfNumbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
})
console.log("sum of arraysofnumbers " +sum )
