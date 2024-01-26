// 1)

let number = 5;

console.log(number ** 2);

// 2)

let celsius = 12;

console.log((celsius * 9 / 5) + 32);

// 3)

let start = 3;
let end = 18;
let given = 9;

console.log(start <= given && given <= end);

// 4)

year = 2024;

console.log(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// 5)

let num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
let num2 = Number(prompt("შეიყვანეთ მეორე როცხვი:"));
let action = prompt("შეიყვანეთ ერთერთი მოქმედება (+, -, *, /):");

if (action === "+") {
    alert(`თქვენი პასუხი არის ${num1+num2}.`);
} else if (action === "-") {
    alert(`თქვენი პასუხი არის ${num1-num2}.`);
} else if (action === "*") {
    alert(`თქვენი პასუხი არის ${num1*num2}.`);
} else if (action === "/") {
    alert(`თქვენი პასუხი არის ${num1/num2}.`);
} else {
    alert("დაფიქსირდა არასწორი მონაცემი.\n\nგთხოვთ სცადოთ თავიდან.");
};