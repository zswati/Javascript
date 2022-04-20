function tripleAdd(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}
console.log("method 1: ", tripleAdd(10)(20)(30));

function tripleAdd1(num1, num2, num3) {
    return num1 + num2 + num3;

}
console.log("method 2: ", tripleAdd1(10, 20, 30));