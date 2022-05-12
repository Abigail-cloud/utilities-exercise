const fileArr1 = require('./starter.js');
console.log(`Large Numuber: ${fileArr1.largeNumber([3,5,8,10,20])}`);
console.log(`Cut3:${fileArr1.cut3([4,6,8,9])}`);

//Module.exports from module.js
const lists = require('./module.js');
lists.sum();
lists.concat()