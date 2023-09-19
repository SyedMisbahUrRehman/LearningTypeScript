"use strict";
//use json.parse() if the json is string
const jsonString = '{"name": "Mohsin Taj", "age": 21}';
const parsedData = JSON.parse(jsonString);
// console.log(parsedData.name);
// console.log(parsedData.age);
//json with all structures
const myJson = {
    name: "Eman",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "gaming", "cooking"],
    address: {
        street: "123 Main St",
        city: "Cityville",
    },
};
// console.log(myJson.address);
//use json.stringify()
const data = {
    name: "Ali",
    age: 20,
};
const jsonString2 = JSON.stringify(data);
const jsonString3 = '{"name": "Ahmed", "age": 18}';
const parsedData2 = JSON.parse(jsonString3);
// console.log(parsedData2.name);
// console.log(parsedData2.age);
//parsing array
const jsonArray = '[{"firstName": "Lionel"}, {"lastName": "Messi"}]';
const parsedArray = JSON.parse(jsonArray);
// console.log(parsedArray[0].firstName);
// console.log(parsedArray[1].lastName);
//Handling errors
try {
    const invalidJsonString = '{"name": "Eman", "age": 21}';
    const parsedData = JSON.parse(invalidJsonString);
    console.log(parsedData);
}
catch (error) {
    console.error("Error parsing JSON:", error);
}
