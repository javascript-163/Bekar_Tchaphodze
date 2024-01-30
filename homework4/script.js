// 1) იპოვეთ შეცდომა და გაასწორეთ იგი.

let action = "move";

switch (action) {
    case "move":
        alert("You're moving!");
        break;
    case "jump":
        alert("You're jumping!");
        break;
    case "run":
        alert("You're running!");
        break;
    default:
        alert("Invalid action.");
};


// 2) switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.

let vegetables = "carrot";

switch (vegetables) {
    case "Carrot":
        alert("Hello")
        break;
    case "Broccoli":
        alert("Welcome");
        break;
    default:
        alert("Neither");
};


// 3) შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, რომ მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, რომ მომხმარებელს შეუძლია ხმის მიცემა.

let age = prompt("შეიყვანეთ თქვენი ასაკი:");

age = parseInt(age);

switch (age) {
    case age >= 18:
        alert("თქვენ შეგიძლიათ ხმის მიცემა.");
        break;
    default:
        alert("თქვენ არ შეგიძლიათ ხმის მიცემა.");
        break;
};



// 4) შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია

let password = prompt("გთხოვთ შეიყვანეთ თქვენი პაროლი:");

let symbolCount = password.length;

switch (symbolCount) {
    case /^\d+$/.test(password):
        alert("თქვენი პაროლი შედგება მხოლოდ ციფრებისგან, ამიტომ ის უვარგისია.");
        break;
    case symbolCount <= 3:
        alert("თქვენი პაროლი უვარგისია.");
        break;
    case symbolCount <= 6:
        alert("თქვენი პაროლი სუსტია.");
        break;
    case symbolCount <= 8:
        alert("თქვენი პაროლი მისაღებია.");
        break;
    default:
        alert("თქვენი პაროლი ძლიერია.");
        break;
};


// 5) შექმენით Quiz-ის პროგრამა

let correctAnswers = 0;

let answer1 = prompt("რომელია საფრანგეთის დედაქალაქი?");
if (answer1.toLowerCase() === "პარიზი") {
    correctAnswers++;

    let answer2 = prompt("რომელი პლანეტაა ცნობილი როგორც წითელი პლანეტა?");
    if (answer2.toLowerCase() === "მარსი") {
        correctAnswers++;

        let answer3 = prompt("რამდენი კონტინენტია დედამიწაზე?");
        if (answer3.toLowerCase() === "7" || answer3.toLowerCase() === "შვიდი") {
            correctAnswers++;

            let answer4 = prompt("რომელია ყველაზე დიდი ძუძუმწოვარი?");
            if (answer4.toLowerCase() === "ვეშაპი") {
                correctAnswers++;

                let answer5 = prompt("რომელია წლის მეხუთე თვე?");
                if (answer5.toLowerCase() === "მაისი") {
                    correctAnswers++;
                }
            }
        }
    }
}

alert(`თქვენ სწორად უპასუხეთ 5-დან ${correctAnswers} კითხვას.`);
