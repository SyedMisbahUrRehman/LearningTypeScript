// class Person {

//     name!: string;
//     age?: number;
//     address!: string;

//     constructor(name: string, age: number, address: string) {

//         this.name=name;
//         this.address=address
//         this.age=age

//     }

// }

// class Teacher extends Person {
//     salary: string;
//     constructor(salary: string,name:string,age:number,address:string ) {
//         super(name,age,address)

//         this.salary=salary


//     }
// }
// const Teacherx=new Teacher("i can feel your pain","musab",22,"home sweet home")
// console.log(Teacherx);

//// Getter & Setter

// class Input{

// private pin:string="6666";

//     get CheckPin(){
//         return this.pin

//     }

//     set CheckPin(val){
//         val.length == 4 ? 

//         this.pin=val :
//         console.log("Please enter a valid pin")

//     }

// }

// let EnterPin = new Input()
// console.log(EnterPin.CheckPin);



////implements

interface strcuture {

    id: number;
    user_id: number;

}
interface mandatories {

    vehicleNumber: number;
    ChassisNumber: number | string;

}



class Table implements strcuture, mandatories {

    id: number
    user_id: number
    cardNo: number
    vehicleNumber!: number;
    ChassisNumber!: string;
    static Registered: number = 0


    constructor(id: number, user_id: number, cardNo: number, vehicleNumber: number, ChassisNumber: string) {
        this.id = id;
        this.user_id = user_id;
        this.cardNo = cardNo;
        this.vehicleNumber = vehicleNumber
        this.ChassisNumber = ChassisNumber
        console.log("Registered : ", Table.Registered += 1);


    }

}

let Ahmed: Table = new Table(3, 1, 9035766, 50, "8AV3B0I")
let Musab: Table = new Table(4, 2, 7697687, 80, "YH898GY")


console.log(Ahmed);
console.log(Musab);

