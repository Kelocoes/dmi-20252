// "use strict";
// x = 3.14; // This will cause an error because x is not declared
// console.log(x)

// Working with primitive data types
// var numberA = 10;
// console.log(typeof numberA); // number
// var numberB = 3.14;
// console.log(typeof numberA == typeof numberB); // true

// var word = "Hello";
// console.log(typeof word); // string

// var flag = true;
// console.log(typeof flag); // boolean

// var imNotDefined;
// var imNull = null;

// console.log(typeof imNotDefined); // undefined
// console.log(typeof imNull); // object
// console.log(imNotDefined == imNull); // true


// Working with objects
// var isaac = {
//     name: "Isaac",
//     age: 25,
//     isStudent: true,
//     hello() {
//         console.log("Hello, my name is " + this.name);
//     }
// }

// console.log(typeof isaac); // object
// console.log(isaac.name); // Isaac
// console.log(isaac.age); // 25
// console.log(isaac.isStudent); // true
// isaac.hello(); // Hello, my name is Isaac


// Try it yourself
// class Person {
//     constructor(name, age, isStudent) {
//         this.name = name;
//         this.age = age;
//         this.isStudent = isStudent;
//     }
// }

// var john = new Person("John", 30, false);
// john.hello(); // Hello, my name is John

// var obj = new Object();
// obj.name = "Object";
// obj.age = 100;
// console.table(obj); // Cool view of the object


// Working with arrays
// var list_of_numbers = [1, 2, 3, 4, 5];
// console.log(typeof list_of_numbers); // object

// var list_of_words = ["Hello", "World"];

// var list_of_mixed = [1, "Hello", true, null, undefined, { name: "Object" }];
// console.log(list_of_mixed);

// var list_of_numbers_new = new Array(1, 2, 3, 4, 5);
// console.log(list_of_numbers == list_of_numbers_new); // true?

// console.log(list_of_numbers.length); // 5

// Functions!
// function sayHello() {
//     console.log("Hello");
// }

//Dynamic typing in JavaScript
// var x = 10;
// console.log(typeof x); // number
// console.log(x); // 10

// x = "Hello";
// console.log(typeof x); // string
// console.log(x); // Hello

// Hoisting
// console.log(x); // undefined
// var x;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization

// Scopes and reassignment
// var x = 10; // Function or global scope

// function foo() {
//     console.log(x)

//     var y = 30;
// }

// foo(); // 10
// // console.log(y);

// var q = 10;
// q = 20;
// q = 30;
// console.log(q); // 30

// let withLet = 10; // Block scope
// // let withLet = 10; // SyntaxError: Identifier 'withLet' has already been declared

// const withConst = 10; // Block scope
// // withConst = 20; // TypeError: Assignment to constant variable.

// Coercion

// let num = 5;
// let strNum = String(num); // Converts number to string
// let numAgain = Number(strNum); // Converts string back to number

// // Primitive vs Non-primitive (reference) copy:
// let obj1 = { name: "Alice" };
// let obj2 = obj1; // obj2 is a reference to obj1
// obj2.name = "Bob"; // obj1.name is also "Bob"

// console.log(obj1.name); // Bob
// console.log(obj2.name); // Bob

// let word = ["H", "e", "l", "l", "o"];
// word[10] = "!";
// console.log(word); // ["H", "e", "l", "l", "o", empty x 5, "!"]
// word[2] = "!";
// console.log(word); // ["H", "e", "!", "l", "o", empty x 5, "!"]


// Flow control structures
// let age = 18;

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// let color = "red";

// switch (color) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Caution");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Unknown color");
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i); // Prints 0, 1, 2, 3, 4
// }

// let fruits = ["apple", "banana", "orange"];
// for (let fruit of fruits) {
//     console.log(fruit); // Prints "apple", "banana", "orange"
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 3) break; // Stops the loop when i is 3
//     console.log(i); // Prints 0, 1, 2
// }

// try {
//     let result;
//     // throw "An error occurred.";
// } catch (error) {
//     console.log("An error occurred: ", error);
// } finally {
//     console.log("This runs regardless of success or error.");
// }


// Functions in JavaScript

// const hello = () => {
//     console.log("Hello");
// }

// hello();

// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(1, 2)); // 3

// Encapsulation
// const person = {
//     name: "Kevin",
//     age: 24,
//     greet () {
//         return "Hello, my name is " + this.name;
//     }
// }

// console.log(person.greet()); // Hello, my name is Kevin

// Classes

// class Hello {

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         return "Hello, my name is " + this.name;
//     }
// }

// const kevin = new Hello("Kevin");
// console.log(kevin.greet())

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Im asking something...", (answer) => { console.log(`This is your answer ${answer}`)})


class Superhero {
    constructor(name, power, age) {
        this.name = name;
        this.power = power;
        this.age = age;
    }

    describe() {
        console.log(
            `Superhero: ${this.name}, Power: ${this.power}, Age: ${this.age}`
        );
    }
}

function createSuperHero() {
    rl.question("What is your superhero name? ", (nameIn) => {
        rl.question("What is your superpower? ", (powerIn) => {
            rl.question("What is your age? ", (ageIn) => {
                const hero = new Superhero(nameIn, powerIn, ageIn);
                hero.describe();
                rl.close();
            });
        });
    });
}

createSuperHero();

// Deconstruction
// const person = {
//     name: "Alice",
//     age: 25
// }

// const { name, age } = person;
// console.log(name); // Alice