// Object , Array, Tuple, enum

// const person: {
//   name: string;
//   age: number;
//   print: () => void;
//   obj: {
//     place: string;
//   };
// } = {
//   name: "John",
//   age: 25,
//   obj: {
//     place: "Mumbai",
//   },
//   print: function () {
//     console.log("Hello");
//   },
// };

// console.log(person);

// Array type
// const person:{
//     name: string;
//     age: number;
//     skills: string[];
// } = {
//     name : "chandan",
//     age: 15,
//     skills: ["js", "ts", "react"],
// }

let favLan: string[];
favLan = ["js", "ts", "react"];

let num: number[];
num = [1, 2, 3, 4, 5];

// any type lose power the type checking
let x: any[] = [1, "hello", true];

// Tuple type

let person: {
  name: string;
  age: number;
  skills: string[];
  product: [string, number]; //tuple add both  fixed array of two types
} = {
  name: "chandan",
  age: 15,
  skills: ["js", "react"],
  product: ["js", 5],
};
// person.product = ["afd", 32, 23] //it gives error because of hwo many value declare that much value will asign in sequence order

//enum

enum Role {
  ADMIN,
  AUTHOR,
  READ_USERONLY,
}

let person1 = {
  name: "chandan",
  age: 15,
  skills: ["js", "react"],
  product: ["js", 5],
  role: Role.ADMIN,
};

if (person1.role == Role.ADMIN) {
  console.log("Admin");
} else if (person1.role == Role.AUTHOR) {
  console.log("admin");
} else if (person1.role == Role.READ_USERONLY) {
  console.log("read only user");
}
