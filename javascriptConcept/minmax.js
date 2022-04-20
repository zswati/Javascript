//Method 1
let array = [37, -5, -15, -37, 5, 15]
console.log(Math.min(...array))
console.log(Math.max(...array))
console.log('====================================================')
//Method 2
const nums = [37, -5, -15, -37, 5, 15].sort((x, y) => x - y)
let min_val = nums[0]
console.log()
let max_val = nums[nums.length - 1]
console.log("Maximum Value of array: " + max_val, "Minimum Value of array: " + min_val)
console.log('====================================================')
//Method 3
let arr = [37, -5, -15, -37, 5, 15]
Math.max.apply(Math, arr);
console.log(Math.max.apply(Math, arr))
console.log(Math.min.apply(Math, arr))
console.log('====================================================')