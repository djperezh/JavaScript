'use strict';

// DEMO: Function Execution
sayHi();
function sayHi() {
    return console.log('hello from fuction');
}

// DEMO: IIFE (Inmediately Invoke Function Execution)
const greeting = (function () {
    return console.log('hello from IFEE');
})();

// DEMO: Callback
function reguralFunction(msg,  callback) {
    console.log('regural function: first ' + msg);
    callback('callback function: second ' + msg);
}

// using anonimos function
reguralFunction('message from anonimos function', (msg) => {
    console.log(msg)
});


// using callback function as parameter
function CallbackFunction(msg) {
    console.log(msg)
}
reguralFunction('message from param function', CallbackFunction);

// DEMO: Class: ES6 vs Vanilla JS sintax
// ES6 Definition
class Person {
    //.ctor
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    // getter
    get fullName() {
        return this.GetFullName();
    }

    // method
    GetFullName() {
        return this.name + " " + this.lastName;
    }
}

const person = new Person("John", "Smith", 26);
console.log(person.fullName);

// class hierarchy
class Student extends Person {
    constructor(name, lastName, age) {
        super(name, lastName, age);
        this.occupation = "student";
    }
}

const student = new Student("Taylor", "Swift", 16);
console.log(student.fullName + ": " + student.occupation);

// Functional Definition
// .ctor
function Animal(name) {
    this.name = name;
}
// method
Animal.prototype.speak = function() {
    console.log(this.name + ' speaks');
}
let animal = new Animal("dog");
animal.speak();