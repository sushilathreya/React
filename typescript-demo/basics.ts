// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Stkman";

let isStudent: boolean;
isStudent = true;

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Crypto", "Music"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Stkman",
  age: 24,
};

let people: Person[];

// Type inference

let course = "React";
// course = 12345

// Union Types

let companies: string | number = "Meta";
companies = 16;

// Function and types

function subtract(a: number, b: number) {
  return a - b;
}

function output(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, 0); //type: number

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'z'); //type: string
