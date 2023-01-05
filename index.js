
//*************/ practice these /**************/
// string, string methods , array,',number ,'



// string number array object boolean undefined null
let name = "ashin aboya";
// toUppercase lowecase slice replac
console.log(name.toUpperCase())

let ashin = name.replace(/a/g,"q")
console.log(ashin);

let age = 21;
// Array
// Object

// Number
// string



// array

let animals = ["🦁","🐯","🦏","🦓","🦄"]


// push
animals.push("🦄");
// pop
animals.pop()
// unshift
animals.unshift("🦓")
// shift
animals.shift()
// splice
animals.splice(2,3,"🐸")
console.log(animals)
function sum(num1,num2){
    console.log(num1+num2)
}
sum(1000,600)
// let func = function (arg){
//         console.log(arg)
//     }
// func()
// function func(jomet){
//     let name = "vijitha"
//     jomet(name)
// }

// func(function (i){
// console.log(i)
// })

// higher order array methods
// foreach map filter reduce find findindex
// es6


function foreach(cb){
    for(let i = 0; i < animals.length; i++){
        cb(animals[i])
    }
}


// animals.forEach(function(item){
//     console.log(item)
// })
let array = animals.map(i => i + " sir")
console.log(array)

// let func =  arg => arg

// let result = func(10)
// console.log(result)




let person = [
    {id:1,
    name:"ashin",
    age:15
},
    {id:2,
        name:"jeevan",
        age:17},
        {id:3,
        name:"bibin",
        age:25},
        {id:4,
        name:"VIJITHA",
        age:22},
        {id:5,
        name:"jomet",
        age:10},
        {id:6,
        name:"fathima",
        age:25},
        {id:7,
        name:"vijisha",
        age:25},
]
let kids = person.filter(i=>i.age < 20)
let adults = person.filter(function(i){
    return i.name.startsWith('a')
})

console.log(kids)
console.log(adults)