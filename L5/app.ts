let userInput: unknown; //🔴 unknown is nothing
// let userInput : any; //🔴 any is something
let userName: string;

userInput = 78;
userName = "subrat";

// userName = userInput;  //🔴 error
// userName = userInput;  //🔴 correct

if (typeof userInput === "string") {
  userName = userInput;
}

//🔴 never return type
function generateError(message: string, code: number): never {
  throw { message, statusCode: code }; // after throw all function was killed
}

generateError("Internal server error", 500);
