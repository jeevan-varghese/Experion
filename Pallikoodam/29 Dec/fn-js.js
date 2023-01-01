// function greet(){
//     console.log('hi..');
// }

// greet();

// function add(x, y) {
//     console.log(x + y);
// }

// add(1, 2);

// function add(x, y) {
//     return x + y;
// }

// const res = add(3, 2);
// console.log(res);

// function convertCase(value) {
//     return value.toUpperCase();
// }

// let res1 = convertCase('hello');
// console.log(res1);


// function getFirstChar1(value){
//     return value[0];
// }

// const getFirstChar2 = function (value){
//     return value[0];
// };

// const getFirstChar3 = (value)=>{
//     return value[0];
// };

// const getFirstChar4 = value => value[0];

// console.log(getFirstChar1('hi'));
// console.log(getFirstChar2('hi'));
// console.log(getFirstChar3('hi'));
// console.log(getFirstChar4('hi'));

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newNum = [];

// function even(){
//     for(let i = 0 ; i < nums.length ; i++)
//     {
//         let element = nums[i];
//         if(element % 2 == 0)
//         {
//             newNum.push(element);
//         }
//     }
//     console.log(newNum);
// }

// even();

// ****************************

// function isEven(value){
//     return value % 2 == 0;
// }

const res = nums.filter(value => value % 2 == 0);
console.log(res);

