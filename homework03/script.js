function getMaxDigit(number) {
    let string = number.toString();
    let max = 0;
    for (let i = 0; i <= string.length; i++) {
        let check = string[i];
        if (check > max) {
            max = check;
        };
        console.log(max);
    }
    
    return max;
}

document.writeln(`<p>Функція 1 (Завдання І): ${getMaxDigit(23793847)}</p>`);



function getNormalName(name) {
    const lowerLetters = name.toLowerCase();
    const firstLetter = name[0];
    const upperLetter = firstLetter.toUpperCase();

    console.log(lowerLetters);
    console.log(firstLetter);
    console.log(upperLetter);

   return upperLetter+lowerLetters.slice(1, name.length);
}

document.writeln(`<p>Функція 2 (Завдання ІІІ): ${getNormalName("вЛаД")}</p>`);



function getRandomNumber(N, M) {
    return Math.floor(Math.random() * (M - N) + N);
}

document.writeln(`<p>Функція 3 (Завдання IV): ${getRandomNumber(1, 10)}</p>`);



function countLetter(letter, word) {
    let number = 0;
    for (let ch of word.toLowerCase()) {
        if (ch === letter) {
            number++
        };

    }
    return number;
}

document.writeln(`<p>Функція 4 (Завдання VI): ${countLetter("а", "Асталавіста")}</p>`);



function convertCurrency(currency) {
    let number = 0;
    const checkUah = "UAH";
    const check$ = "$";
    if (checkUah == currency.slice(-3)) {
        number = Number(currency.slice(length, length - 3)) / 25 + " $";
    }
    else if (check$ == currency.slice(-1)) {
        number = Number(currency.slice(length, length - 1)) * 25 + " грн.";
    }
    else { number = "Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і такожрегістр uah не має значення." }
    return number;
}

convertCurrency("2500UAH");
convertCurrency("100$")
convertCurrency("2500uah")
convertCurrency("100PL")

document.writeln(`<p>Функція 5 (Завдання VII): ${convertCurrency("2500UAH")}</p>`);




function deleteLetters(letter, word) {

    let string = "";
  
    for (const ch of word) {
        if (ch != letter) {
            string = string + ch;
        }
    }
     return string; 
}

document.writeln(`<p>Функція 6 (Завдання XI) результат : ${deleteLetters('a', "blablabla")}</p>`)


function isPalyndrom(word) {
let direct ='';
let reversed ='';
for (let ch of word){
    if(ch !== ' '){
        direct += ch;
    }
}

for (let ch of word){
    if(ch !== ' '){
        reversed = ch + reversed;
    }
}

if (direct.toLowerCase() === reversed.toLowerCase()){
    return true;
}
else
{
    return false;
}

}

document.writeln(`<p>Функція 7 (Завдання XII) результат : ${isPalyndrom("кокос")}</p>`)