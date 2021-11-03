// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age;
age = 12;
var userName;
userName = "Stkman";
var isStudent;
isStudent = true;
// More complex types
var hobbies;
hobbies = ["Sports", "Crypto", "Music"];
var person;
person = {
    name: "Stkman",
    age: 24
};
var people;
// Type inference
var course = "React";
// course = 12345
// Union Types
var companies = "Meta";
companies = 16;
// Function and types
function subtract(a, b) {
    return a - b;
}
function output(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, 0); //type: number
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'z'); //type: string
