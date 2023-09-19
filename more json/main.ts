//custom types | interfaces

interface Person {
    name: string;
    age: number;
    address: {
      street: string;
      city: string;
    };
  }
  
  const jsonData: Person = {
    name: "Eman",
    age: 21,
    address: {
      street: "021",
      city: "Karachi",
    },
  };
//   console.log(jsonData);
  
//Arrays of Objects

  interface Product {
    id: number;
    name: string;
    price: number | string; // Price can be a number or a string
  }
  
  const productData: Product = {
    id: 1,
    name: "Mouse",
    price: 10.99,
  };
  
  console.log(productData);
  

  //Enums

  enum Gender {
    Male = "male",
    Female = "female",
    Other = "other",
  }
  
  interface PersonDetails {
    name: string;
    age: number;
    gender: Gender;
  }
  
  const personData: PersonDetails = {
    name: "Eman",
    age: 21,
    gender: Gender.Female,
  };
  

  //Optional Properties: In TypeScript, you can make certain properties of an interface optional by using the ? notation

  interface Configuration {
    apiKey: string;
    timeout?: number; // Timeout is optional
  }
  
  const config1: Configuration = { apiKey: "bsifbudfsdfbsdifb" }; // Timeout is optional here
  const config2: Configuration = { apiKey: "bfsbfus89sdfy8dfhs9", timeout: 2000 };

  //Type Assertions: If you're working with JSON data that TypeScript can't infer types for, you can use type assertions to tell TypeScript about the expected type

  const jsonData1 = JSON.parse('{"name": "Eman", "age": 21,"weight": 60}') as PersonDetails; //why is it runnung when gender is missing???

  console.log(jsonData1);
  