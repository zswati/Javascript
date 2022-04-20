const checkMonotonic = function (array) {
    const first = array[0];
    const last = array[array.length - 1];

    if (first === last) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i + 1] !== array[i])
                return false;
        }
    }
    else if (first < last) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i + 1] < array[i])
                return false;
        }
    }
    else {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i + 1] > array[i])
                return false;
        }
    }
    return true;
}

console.log(checkMonotonic([1, 2, 5, 6]));
console.log(checkMonotonic([1, 2, 9, 6]));
console.log(checkMonotonic([2, 2, 2, 2]));
console.log(checkMonotonic([3]));
console.log(checkMonotonic([6, 4, 3, 2, 1]));
console.log(checkMonotonic([6, 4, 7, 2, 1]));
