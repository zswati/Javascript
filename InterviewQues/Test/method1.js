/* Give an array, rotate the array to the right by k steps, where k is non-negative.
ex.[1,2,3,4] k1=[4,1,2,3] k2=[3,4,1,2]
Clarifying Questions:- 
1.what happens if empty array is passed?-return empty array
2.if k=0 , no rotation is to happen? Yes
TESTCASES:- [1,2] k=1 [2,1] 
*/
const reverse = function (nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
const rotate = function (nums, k) {
    k = k % nums.length;// k=102 ,length =5 2 rotation
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;

}
console.log(rotate([1, 2, 3, 4, 5], 10));