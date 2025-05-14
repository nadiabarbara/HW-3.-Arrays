'use strict';

// Task 1
let arr1 = ['a', 'b', 'c', 'd', 'e'];
arr1.splice(0,3)
console.log(arr1);

// Task 2
let arr2 = ['a', 'b', 'c', 'd', 'e'];
arr2.splice(2, 1, '1', '2', '3');
console.log(arr2);

// Task 2.1
const fruits = ["apple", "banana", "cherry", "date", "fig", "grape"];
console.log(fruits.slice(1,4));
console.log(fruits.slice(-3));

// Task 2.2
const animals1 = ["cat", "dog", "rabbit"];
const animals2 = ["lion", "tiger"];
const animals3 = ["elephant", "giraffe"];
const allAnimals = animals1.concat(animals2, animals3);
console.log(allAnimals);

// Task 2.3
const people = [
    { firstName: "John", lastName: "Smith" },
    { firstName: "Anna", lastName: "Brown" },
    { firstName: "James", lastName: "Gift" },
    { firstName: "Zoe", lastName: "Adams" },
    { firstName: "Emily", lastName: "Smith" }
];
people.sort(function(a,b){
    return a.lastName.localeCompare(b.lastName)
})
//people.sort((a, b) => a.lastName.localeCompare(b.lastName));
console.log(people);

// Task 2.4
const words = ["banana", "apple", "kiwi", "strawberry", "fig", "pineapple", "grape"];
words.sort((a, b) => b.length - a.length);
console.log(words);

// Task 3
let arr = ['d', 'b', 'a', 'c']; 
arr.sort();
arr.reverse();
console.log( arr); 

// Task 3.1
const employees = 
[
{ name: "רותם", salary: 7500 },
{ name: "אור", salary: 5000 },
{ name: "ליאן", salary: 12000 },
{ name: "דניאל", salary: 9000 }
];

employees.sort((a, b) => b.salary - a.salary);
console.log(employees);

// Task 4
let str = '523457789';
let reversedStr = str.split('').sort().reverse().join('');
console.log(reversedStr); 

// Task 5
const fruits1 = ["apple", "banana", "cherry", "date"];
fruits1.splice(1,1,  'blueberry', 'blackberry');
//fruits1.splice(fruits.indexOf("banana"), 1, "blackberry", "blueberry");
console.log(fruits1);

// Task 6
const colors = ["red", "orange", "yellow", "green", "blue"];
console.log(colors.slice(1, 3)); 


// Task 7
const animals4 = ["cat", "dog"];
const animals5 = ["lion", "tiger"];
const combinedAnimals = animals4.concat(animals5);
console.log(combinedAnimals);

// Task 8
const numbers = [7, 3, 9, 1, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Task 9
const letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters);

// Task 10
const sentence = "JavaScript is awesome";
const words1 = sentence.split(" ");
console.log(words1);

// Task 10
const words2 = ["Hello", "world"];
const combinedString = words2.join(' ');
console.log(combinedString);
