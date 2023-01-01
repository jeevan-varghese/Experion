const m1 = [
    [1, 2],
    [3, 5]
];
const m2 = [
    [6, 7],
    [8, 9]
];

const res = [];

for (let i = 0; i < m1.length; i++) {

    for (let j = 0; j < m1.length; j++) {
        const e1 = m1[i][j];
        const e2 = m2[i][j];
        res.push(e1 + e2);
    }
    
    
    
}
console.log(res);