"use strict";
//Example of string enum
var flavour = 0 /* lays.masala */;
// console.log(flavour);
//Example of numeric enum
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// console.log(StatusCodes2.BadRequest);
// console.log(StatusCodes2.Accepted);
//   When you use const enum, you're telling TypeScript to treat the enum as a compile-time construct and not generate any runtime code for it. The generated JavaScript code will directly replace references to StatusCodes.NotFound and StatusCodes.Success with their respective numeric values (404 and 200) during compilation. This can lead to smaller bundle sizes in your compiled JavaScript.
//Reverse Mapping
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var colorName = Color[Color.Red];
// console.log(colorName);
// enum examples
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log("FileAccess.None:", FileAccess.None);
console.log("FileAccess.Read:", FileAccess.Read);
console.log("FileAccess.Write:", FileAccess.Write);
console.log("FileAccess.ReadWrite:", FileAccess.ReadWrite);
console.log("FileAccess.G:", FileAccess.G);
