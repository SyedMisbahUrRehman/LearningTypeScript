"use strict";
//Example of string enum
var flavour = 0 /* lays.masala */;
console.log(flavour);
//Example of numeric enum
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
console.log(400 /* StatusCodes2.BadRequest */);
console.log(202 /* StatusCodes2.Accepted */);
//   When you use const enum, you're telling TypeScript to treat the enum as a compile-time construct and not generate any runtime code for it. The generated JavaScript code will directly replace references to StatusCodes.NotFound and StatusCodes.Success with their respective numeric values (404 and 200) during compilation. This can lead to smaller bundle sizes in your compiled JavaScript.
