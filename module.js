/*Using Module Exports method*/

// add numbers in an array
const sum = (arr) => {
    arr = [5, 6, 7, 8]
    let total = 0;
    arr.forEach((x) => {
        total += x;
    });
    console.log(total);
};

// concatenate two arrays
const concat = (arr1, arr2) => {
    arr1 = ["My Arrays", 2];
    arr2 = ["The Modules are", 2];
    console.log([...arr1, ...arr2]);
};
module.exports = { sum, concat }