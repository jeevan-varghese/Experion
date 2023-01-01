var data = 'This is a string, to study';
console.log(data[3]); //get data like array using index number
console.log(data.length); //get length of the data
console.log(data[data.length-1]); //get last index data

var res = data.toUpperCase();
console.log(res); 

//data.trim : to trim white spaces at start and end
//data.trimStart : to trim white spaces at start
//data.trimEnd : to trim white spaces at end

console.log(data.split(','));

var res1 = data.replace(' ','_');
console.log(res1); //This_is a string, to study

var res2 = data.replaceAll(' ','_');
console.log(res2); //This_is_a_string,_to_study

var message = '   Jeevan Varghese       ';
var res3 = message.trim().toUpperCase().replaceAll(' ','/'); //write it on single line
console.log(res3);

//use let or const instead of var, var is global, if the values should not be changing use const
//const should always be initialize




