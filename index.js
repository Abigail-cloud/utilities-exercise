/*Calling a function as a "function" method*/
const fileArr1 = require('./Utilities folder/utility1.1');
console.log(`Large Numuber: ${fileArr1.largeNumber([3,5,8,10,20])}`);
console.log(`Cut3:${fileArr1.cut3([4,6,8,9])}`);

//Calling a function as a method: the functioons are wrapped in an object{lists}
const lists = require('./Utilities folder/utility1.2');
lists.sum();
lists.concat()