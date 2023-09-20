//Example of string enum

const enum lays {
  masala,
  frenchCheese,
  yougurtNhurbs,
}

let flavour = lays.masala;

// console.log(flavour);

//Example of numeric enum

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

// console.log(StatusCodes.NotFound);

// console.log(StatusCodes.Success);

//Example of numeric enum with const

const enum StatusCodes2 {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

// console.log(StatusCodes2.BadRequest);
// console.log(StatusCodes2.Accepted);

//   When you use const enum, you're telling TypeScript to treat the enum as a compile-time construct and not generate any runtime code for it. The generated JavaScript code will directly replace references to StatusCodes.NotFound and StatusCodes.Success with their respective numeric values (404 and 200) during compilation. This can lead to smaller bundle sizes in your compiled JavaScript.

//Reverse Mapping

enum Color {
  Red,
  Green,
  Blue,
}

let colorName: string = Color[Color.Red]; 
// console.log(colorName);

// enum examples
enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = FileAccess.Read | FileAccess.Write,
  G = "123".length,
}

console.log("FileAccess.None:", FileAccess.None);
console.log("FileAccess.Read:", FileAccess.Read);
console.log("FileAccess.Write:", FileAccess.Write);
console.log("FileAccess.ReadWrite:", FileAccess.ReadWrite);
console.log("FileAccess.G:", FileAccess.G);

