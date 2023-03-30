interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
let student1: Student = {
    firstName: "Iyk",
    lastName: "John",
    age: 20,
    location: "Lagos",
}
let student2: Student = {
    firstName: "Steve",
    lastName: "John",
    age: 25,
    location: "Abuja",
}
let studentsList: Student[] = [student1, student2];

let table = document.createElement("table");
let tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    let cellText = document.createTextNode(student.firstName);
    cell.appendChild(cellText);
    row.appendChild(cell);
    cell = document.createElement("td");
    cellText = document.createTextNode(student.location);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tableBody.appendChild(row);
}
);

table.appendChild(tableBody);
document.body.appendChild(table);

//test for the code above
console.log(student1);
console.log(student2);

class Teacher {
    constructor({firstName, lastName, fullTimeEmployee, yearsOfExperience, location, ...otherAttributes}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.yearsOfExperience = yearsOfExperience;
        this.location = location;
        Object.assign(this.otherAttributes);
    }
}
