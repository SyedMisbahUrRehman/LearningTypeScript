"use strict";
// class Person {
class Table {
    constructor(id, user_id, cardNo, vehicleNumber, ChassisNumber) {
        this.id = id;
        this.user_id = user_id;
        this.cardNo = cardNo;
        this.vehicleNumber = vehicleNumber;
        this.ChassisNumber = ChassisNumber;
        console.log("Registered : ", Table.Registered += 1);
    }
}
Table.Registered = 0;
let Ahmed = new Table(3, 1, 9035766, 50, "8AV3B0I");
let Musab = new Table(4, 2, 7697687, 80, "YH898GY");
console.log(Ahmed);
console.log(Musab);
