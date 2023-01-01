const n1 = 6;
const n2 = 4;

const res = n1 + n2;
console.log(res);

const res1 = n1 + ' + ' + n2 + ' = ' + n1 + n2 ;
console.log(res1); // 6 + 4 = 64.

const res2 = `${n1} + ${n2} = ${n1 + n2}` ;// backtick
console.log(res2); // 6 + 4 = 10.

var firstString = 'Java';
var lastString = 'Script';

// *********3 ways to join string*********
var res3 = firstString + ' ' + lastString;
var res4 = firstString.concat(' ',lastString);
var res5 = `${firstString} ${lastString}`;

console.log(res3); 
console.log(res4); 
console.log(res5); 







