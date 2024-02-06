// 1) შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

function longestWord(sentence) {
    const words = sentence.split(" ");

    let longestWord = "";
    let longestWordLength = 0;

    for (const word of words) {
        if (word.length > longestWordLength) {
            longestWord = word;
            longestWordLength = word.length;
        }
    }
    return longestWord;
}

let sentence = "ეს არის სატესტო წინადადება რამდენიმე სხვადასხვა ზომის სიტყვით";
let longest = longestWord(sentence);
console.log(`მოცემულ წინადადებაში ყველაზე გრძელი სიტყაა: "${longest}".`);


// 2) შექმენით ობიექტი სახელით "calculator"

let calculator = {
    num1: 10,
    num2: 5,

    add: function () { return this.num1 + this.num2; },
    subtract: function () { return this.num1 - this.num2; },
    multiply: function () { return this.num1 * this.num2; },
    divide: function () { return this.num1 / this.num2; }
};

// 3) შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს ფუნქციის ჰოისტინგის მაგალითად.

console.log(greet("ლუკა"));

function greet(name) {
    return `გამარჯობა ${name}!`;
}

//ფუნქცია ჯერ გამოძახებულია და მერე დეკლარირებული, მაგრამ მაინც მუშაობს ჰოისტინგის საშუალებით.