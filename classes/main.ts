// Define a base class 'Person'
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  
    // An abstract method for describing the person's role
    describeRole(): string {
      throw new Error("Subclasses must implement describeRole method.");
    }
  }
  
  // Define a derived class 'Student' that inherits from 'Person'
  class Student extends Person {
    grade: string;
  
    constructor(name: string, age: number, grade: string) {
      super(name, age);
      this.grade = grade;
    }
  
    describeRole(): string {
      return "I am a student.";
    }
  
    study() {
      console.log(`${this.name} is studying hard.`);
    }
  }
  
  // Define a derived class 'Teacher' that inherits from 'Person'
  class Teacher extends Person {
    subject: string;
  
    constructor(name: string, age: number, subject: string) {
      super(name, age);
      this.subject = subject;
    }
  
    describeRole(): string {
      return "I am a teacher.";
    }
  
    teach() {
      console.log(`${this.name} is teaching ${this.subject}.`);
    }
  }
  
  // Define a derived class 'Administrator' that inherits from 'Person'
  class Administrator extends Person {
    department: string;
  
    constructor(name: string, age: number, department: string) {
      super(name, age);
      this.department = department;
    }
  
    describeRole(): string {
      return "I am an administrator.";
    }
  
    manage() {
      console.log(`${this.name} is managing the ${this.department} department.`);
    }
  }
  
  // Create instances of 'Student', 'Teacher', and 'Administrator' classes
  const student1 = new Student("Alice", 20, "A");
  const teacher1 = new Teacher("Bob", 35, "Math");
  const admin1 = new Administrator("Carol", 40, "HR");
  
  // Store instances in an array
  const people: Person[] = [student1, teacher1, admin1];
  
  // Iterate through the array and call describeRole for each person
  people.forEach((person) => {
    console.log(`${person.name}: ${person.describeRole()}`);
  });
  
  // Demonstrate polymorphism
  people.forEach((person) => {
    if (person instanceof Teacher) {
      person.teach();
    } else if (person instanceof Administrator) {
      person.manage();
    }
  });
  