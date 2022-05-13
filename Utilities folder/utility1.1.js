//find the largest number in an array
module.exports.largeNumber = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
        if (x > largest) {
            largest = x;
        }
    })
    return largest;

}

// remove the 3rd item from array
module.exports.cut3 = (arr) => {
    arr.splice(2, 1);
    return arr
}