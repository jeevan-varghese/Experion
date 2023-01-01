
// // ********** object 0r dictionary ***********
// const person = {
//     name: 'Jeevan',
//     age: 21,
//     experience: [
//         {
//             company: 'ABC',
//             years: '2'
//         },
//         {
//             company: 'XYZ',
//             years: '4'
//         }
//     ]
// };

// console.log(person);

// person.name = 'Jeevan Varghese'; // update name

// console.log(person.name);   // display name
// console.log(person['name']); // another way to display name

// person.email = 'user@gmail.com'; // it will create 

// console.log(person.experience[0].company); // display company name of first

// person.experience.forEach(element => {
//     console.log(element.company);       // get all the company names
// });

// const student = {
//     name: 'student1',
//     mark1: 20,
//     mark2: 70,
//     total: function(){
//         const extraMark = 10;
//         console.log(this.mark1 + this.mark2 + extraMark);
//     }
// };

// student.total();

// *************** copy an object *************

// const student = {
//     name: 'student1',
//     mark1: 20,
//     mark2: 70,
    
// };

// const copy = Object.assign({}, student);
// copy.name = 'new name';
// console.log(student);
// console.log(copy);

// ********** copy multiple objects ***********

const student = {
    name: 'student1',
   
};

const mark = {
    mark1: 20,
    mark2: 70,
};

const copy = Object.assign({}, student, mark);
console.log(copy);














































































































































































































