//? Filter Array: use filter() to create an array of only the odd numbers from an array of numbers.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = numbers.filter((num) => num % 2 === 1);

console.log(oddNumbers);