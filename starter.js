/*Using Exports method*/

const { __esModule } = require("node-fetch");

//find the largest number in an array
exports.largeNumber = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
        if (x > largest) {
            largest = x;
        }
    })
    return largest;

}

// remove the 3rd item from array
exports.cut3 = (arr) => {
    arr.splice(2, 1);
    return arr
}