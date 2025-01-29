//Union
//Literal Types
//Type Alias
//

// 🔴Union (|) pipe in typescript
// 🔴 Union basically used for getting the more than one variable .

function combine1(num1: number | string, num2: number | string) {
  let result: string | number;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum = combine1(5, 8);
const name1 = combine1("subrat", "kumar");
console.log(sum, name1);

//🔴 Literal Types
//🔴 in this type we use our own type

function combine2(
  num1: number | string,
  num2: number | string,
  conversionType: "as-number" | "as-string"
) {
  let result: string | number;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType == "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const result1 = combine2(23, 34, "as-number");
const result2 = combine2(45, 34, "as-number");
const combineName1 = combine2("hello", "world", "as-string");

console.log(result1, result2, combineName1);

//🔴 Custom Type, Type Alias
// this is used for give a given name and use it

type Combinable = number | string;

function combine3(
  num1: Combinable,
  num2: number | string,
  conversionType: "as-number" | "as-string"
) {
  let result: string | number;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType == "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum3 = combine3(23, 34, "as-number");
const sum2 = combine3(45, 34, "as-number");
const combineName = combine3("hello", "world", "as-string");

console.log(sum3, sum2, combineName);

//🔴 type alias in object

type User = {
  // we can write this
  name: string;
  age: number;
  skills: string[];
};
const user: User = {
  name: "chandan",
  age: 34,
  skills: ["js", "css"],
};

function greet1(user: User) {
  console.log(`Hi i am  ${user.name}`);
}
greet1(user)