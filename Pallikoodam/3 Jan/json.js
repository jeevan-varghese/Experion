// const student = {
//     name: 'Jibi',
//     age: 26,
//     mark1: 10,
//     mark2: 8
// };
 
// const data = JSON.stringify(student);
// console.log(data);

const data = '{"name":"Jibi","age":26,"mark1":10,"mark2":8}';

const student = JSON.parse(data);
    console.log(student);
