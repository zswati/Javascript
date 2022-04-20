const firstList = [2, 7, 11, 15]
const secondList = [3, 2, 4]
const thirdList = [3, 3]

var twoSum = function (nums, target) {

    //1.Brute force
    /*for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            //compare values of both and there indexes are not same
            if (nums[i] + nums[j] === target && i != j) return [i, j]
        }
    }*/
    //2. Faster way 
    /*const hash = {};

    nums.forEach((number, index) => {
        hash[number] = index;
    });

    for (i = 0; i < nums.length; i++) {

        //9-2 =7 
        let targetMinusValue = target - nums[i];

        if (hash[targetMinusValue] !== undefined && hash[targetMinusValue] !== i) {
            return [hash[targetMinusValue], i]
        }
    }
    return hash;*/

    //3.The most efficient way

    const hash = {};

    for (i = 0; i < nums.length; i++) {

        const targetMinusValue = target - nums[i];

        if (hash[targetMinusValue] !== undefined) return [hash[targetMinusValue], i];
        hash[nums[i]] = i;
    }


};
console.log(twoSum(thirdList, 6));