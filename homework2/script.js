let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th", "st", "nd", "rd"]

// 1)

console.log(typeof color === "object");

// 2)

console.log(color[0]);

// 3)

console.log(color[color.length - 1]);

// 4)

console.log(`1${o[1]} choice is ${color[0]}.`);
console.log(`2${o[2]} choice is ${color[1]}.`);
console.log(`3${o[3]} choice is ${color[2]}.`);

// 5)

let student = {
    name: "Goga",
    age: 24
};

student["city"] = "Tbilisi"; //add

student["name"] = "Giorgi"; //replace

delete student.age; //delete

console.log(student);