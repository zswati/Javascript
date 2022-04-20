//Mapping array using map()method
//Example 1
const familymembers =['swati','shivaji','shwetam','shashwat','Zoro','Ganpati']
const maparray= familymembers.map(member =>{
    return member+ " : love each other"
});
console.log("------------------------------");
console.log(maparray);
console.log("------------------------------");

//Example 2 (adding each array with 2)
const number =[2,5,7,4,3,34,7,9]
const addNum = number.map(num=> num+2)
console.log("------------------------------");
console.log(addNum);
console.log("------------------------------");