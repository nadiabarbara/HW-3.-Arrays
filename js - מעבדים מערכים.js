'use strict';

// Task 1
const numbers = [1, 2, 3, 4, 5]; 
let sumOfSquares = 0;
numbers.forEach(num => {
  sumOfSquares += num * num;
});
console.log("Sum of squares:", sumOfSquares);

// Task 2
let arr = [1, 2, 3];
arr.forEach((element, index, array) => {
    array[index] = element + 1; 
});
console.log(arr);

// Task 3
let arr2 = [16,4,25,9];
let res = arr2.map(Math.sqrt);
console.log(res); 

// Task 4
let arr3 = ['qwe', 'wer', 'ert'];
let res1 = arr3.map(str => str + '!');
console.log(res1); 

// Task 5
let arr4 = ["hello", "world", "javascript"];
let res2 = arr4.map(str => str.split('').reverse().join(''));
console.log(res2);

//Task 6
let arr5 = [-2, 5, 10, -5, -1, 1, 30, 4, -1];
let res3 = arr5.filter(num => num > 0 && num < 10);
console.log(res3);

//Task 7
let arr6 = ['qwe','wer','ertert','dfg','asdasdqwe']; 
let res4 = arr6.filter(str=> str.length > 5);
console.log(res4);

// Task 8
let arr7 = [20, 3, 12, 6, 22, 1, 23]; 
let res5 = arr7.filter((num, idx) => num * idx < 30);
console.log(res5);

// Task 9
let arr8 = [1, 2, [3, 4], 5, [6, 7]];
let res6 = arr8.filter(el => typeof el === 'number');
console.log(res6);

// Task 10
let arr9 = [1, -2,  -5, -6, -7];
let result = arr9.some(function(elem) {
	return elem > 0;
});
console.log(result);

// Task 11
let arr10 = ["-1", "sdf",  "5", "wer", "-7"];
let allStrings = arr10.every(item => typeof item === 'string');
console.log(allStrings);

// Task 12
const users = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 20 },
{ name: 'Charlie', age: 17 }
];
let allAbove18 = users.every(user => user.age > 18);
console.log(allAbove18);

// Task 13
function areAllStringsLongerThan(arr, n) {
  return arr.every(str => str.length > n);
}
let arrForCheck = ["sdf","xcvxcv","wer","qweweqw","sdfg"]
let result1 = areAllStringsLongerThan(arrForCheck, 2);
console.log(result1);

// Task 14
const students = ["דני", "נועה", "רן", "תמר"];
students.forEach(name => {
  console.log(`שלום, ${name}! בהצלחה במבחן!`);
});

//Task 15
const pricesILS = [100, 250, 75, 320];
const pricesUSD = pricesILS.map(price => (price / 3.5).toFixed(2));
console.log(pricesUSD)

// Task 16
const users1 = [
{ username: "Tom", isLoggedIn: true },
{ username: "Jerry", isLoggedIn: false },
{ username: "Spike", isLoggedIn: true }
];
const loggedInUsers = users1.filter(users => users.isLoggedIn);
console.log(loggedInUsers);

// Task 17
const products = [
{ name: "Book", quantity: 3 },
{ name: "Pen", quantity: 0 },
{ name: "Notebook", quantity: 5 }
];
const hasEmptyProduct = products.some(product => product.quantity === 0);
console.log(hasEmptyProduct);

// Task 18
const grades = [72, 85, 90, 67, 58];
const allPassed = grades.every(grade => grade >= 60);
console.log(allPassed);

// Task 19
const employees = [
  { name: "Sharon", salary: 9500 },
  { name: "David", salary: 7000 },
  { name: "Lior", salary: 12000 }
];

const highEarners = employees
  .filter(emp => emp.salary > 8000)
  .map(emp => emp.name.toUpperCase());

console.log(highEarners);

// Task 20
const books = [
  { title: "Book A", pages: 450 },
  { title: "Book B", pages: 520 },
  { title: "Book C", pages: 600 }
];
const bigBooks = books.filter(book => book.pages > 500);
console.log(bigBooks);