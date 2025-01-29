//function return type

function addNum(n1: number, n2: number): number {
  return n1 + n2; //return 34
}

addNum(2, 32);

//🔴 if function not return anything it simply type void

function greet(name: string): void {
  console.log("hii kesi ho", name);
}

// let combineFun : Function;  //🔴 define function

// combineFun = 10; //🔴invalid

// combineFun = function hello(){}; //🔴 valid
// combineFun = greet; //🔴 valid

//🔴 good practice

let combineFun: (a: number, b: number) => number;

combineFun = addNum;

console.log(combineFun(10, 12));

// 🔴 function type and call back

type cb = (n: number) => void;

function addHandle(num1: number, num2: number, cb: (n: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addHandle(10, 20, (result) => {
  console.log(result);
});
