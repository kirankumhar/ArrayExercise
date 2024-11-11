let stringArray = ["String1", "String2", "String3", "String4", "String5"];

let addString = stringArray.splice(0,
    0, 'string6', 'string7');

console.log(stringArray);


// let numbers = [5, 12, 8, 130, 44];
// let removed = numbers.splice(2, 2, 99, 100); // Removes 2 elements at index 2 and adds 99 and 100
// console.log(numbers); // Updated array