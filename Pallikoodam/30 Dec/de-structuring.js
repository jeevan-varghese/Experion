const student = {
    fullname: 'student 1',
    mark1: 40,
    mark2: 50
};

const {fullname} = student;
console.log(fullname);

const keys = Object.keys(student);
keys.forEach(key => {
console.log(student[key]);
    
});

