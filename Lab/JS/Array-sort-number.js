// let array = [44, 99, 22, 11, 77, 55, 33];
 let array = [1, 2, 5, 3, 9, 4, 7, 6];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log("Sorted array=>", array);