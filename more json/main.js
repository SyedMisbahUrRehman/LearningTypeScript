"use strict";
//custom types | interfaces
const jsonData = {
    name: "Eman",
    age: 21,
    address: {
        street: "021",
        city: "Karachi",
    },
};
const productData = {
    id: 1,
    name: "Mouse",
    price: 10.99,
};
console.log(productData);
//Enums
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender || (Gender = {}));
const personData = {
    name: "Eman",
    age: 21,
    gender: Gender.Female,
};
const config1 = { apiKey: "bsifbudfsdfbsdifb" }; // Timeout is optional here
const config2 = { apiKey: "bfsbfus89sdfy8dfhs9", timeout: 2000 };
//Type Assertions: If you're working with JSON data that TypeScript can't infer types for, you can use type assertions to tell TypeScript about the expected type
const jsonData1 = JSON.parse('{"name": "Eman", "age": 21,"weight": 60}'); //why is it runnung when gender is missing???
console.log(jsonData1);
