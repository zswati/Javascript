// Array is collection on variable
//let marks = Array (6)

//let marks = new Array(20,34,98,23,99)
/*
var marks =[20,34,98,23,99,77]
console.log(marks[3])
marks[3]= 11
console.log(marks)
console.log ("*******************************")
console.log("length of array is ",marks.length)
console.log ("*******************************")
console.log("Element of array are ",marks)
marks.push(55)
console.log("length of array is ",marks.length)
console.log("updated Element of array are ",marks)
console.log ("*******************************")
marks.pop() 
console.log("updated Element of array are ",marks)
console.log("length of array is ",marks.length)
marks.unshift(99)
console.log ("*******************************")
console.log(marks.indexOf(77))
// 120 is present in the array
console.log(marks.includes(120))

console.log(subMarks=marks.slice(2,4))

var sum=0
for(let i=0;i<marks.length;i++)
{
    sum=sum +marks[i]
}
console.log(sum)

// reduce filter map

console.log (marks.reduce((sum,totalMarks)=> sum +totalMarks,0))
// crate new array with even number [12,14,16]
var scores = [2,3,4,6]
var evenScores=[]
for(let i=0;i<scores.length;i++)
{
   if (scores[i]%2 ==0)
   {
       evenScores.push(scores[i])
   }
}
console.log(evenScores)

let newFiltereven = scores.filter(score=>score%2==0)
console.log(newFiltereven)// [2,3,4,6]

// map function 
let mapArray= newFiltereven.map(score=>score*12)
console.log(mapArray)
let totalVal= mapArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)
*/

var newArray=[9,2,4,8,5]

let sumValue= newArray.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log("Combine filter/multipication/summing =", sumValue)

// Sorting array
let fruits =["apple", "mango","orange","blackberry","banana"]
fruits.sort()
console.log(fruits)
fruits.reverse()
console.log(fruits)

var newArray=[09,2.4,4.1,8.5,3,5]
console.log(newArray.sort())
newArray.sort(function(a,b){
    return a-b
})

console.log(newArray.sort((a,b)=> a-b))
console.log(newArray.sort((a,b)=> b-a))






