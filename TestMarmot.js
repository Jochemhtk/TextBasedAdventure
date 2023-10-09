var readlineSync = require("readline-sync");
// readlineSync active

const a = ["A", "a", "A.", "a."];
const b = ["B", "b", "B.", "b."];
const c = ["C", "c", "C.", "c."];
// array for answer, user error failsafe

var verhaal1 = (`verhaal 1 test`);
var verhaal2 = (`verhaal 2 test`);
var verhaal3 = (`verhaal 3 test`);
var verhaal4 = (`verhaal 4 test`);
// var verhaal_ = (``);
// alle verhaaldelen

var keuze1 = (`vraag 1 test`);
var keuze2 = (`vraag 2 test`);
var keuze3 = (`vraag 3 test`);
var keuze4 = (`vraag 4 test`);
var keuze5 = (`vraag 5 test`);
var keuze6 = (`vraag 6 test`);
var keuze7 = (`vraag 7 test`);
var keuze8 = (`vraag 8 test`);
var keuze9 = (`vraag 9 test`);
var keuze10 = (``);
var keuze11 = (``);
var keuze12 = (``);
var keuze13 = (``);
var keuze14 = (``);
var keuze15 = (``);
var keuze16 = (``);
var keuze17 = (``);
var keuze18 = (``);
var keuze19 = (``);
var keuze20 = (``);
var keuze21 = (``);
var keuze22 = (``);
// alle vragen

var einde1 = (``);
var einde2 = (``);
var einde3 = (``);
var einde4 = (``);
// alle eindes

var huidigVerhaal = verhaal1;
var huidigekeuze = keuze1;

function questionThreeAnswers (verhaal, keuzeA, keuzeB, keuzeC) {
    var antwoord = readlineSync.question(`${verhaal}\n A. ${keuzeA}\n B. ${keuzeB}\n C. ${keuzeC}\n `);
    const Atf = a.some(a => antwoord.includes(a));
    const Btf = b.some(b => antwoord.includes(b));
    const Ctf = c.some(c => antwoord.includes(c));

    console.log(Atf);
    console.log(Btf);
    console.log(Ctf);

    if (Atf === true) {
         return "A";
    }
    else if (Btf === true) {
        return "B";
    }
    else if (Ctf === true) {
        return "C";
    }
    else {
        console.log(`Dit is een ongelding antwoord. Antwoord met A, B of C!`)
        return questionThreeAnswers(verhaal, keuzeA, keuzeB, keuzeC);
    }
}
//function for multiplechoice question with three answers

function questionTwoAnswers (verhaal, keuzeA, keuzeB) {
    var antwoord = readlineSync.question(`${verhaal}\n A. ${keuzeA}\n B. ${keuzeB}\n `);
    const Atf = a.some(a => antwoord.includes(a));
    const Btf = b.some(b => antwoord.includes(b));

    console.log(Atf);
    console.log(Btf);

    if (Atf === true) {
         return "A";
    }
    else if (Btf === true) {
        return "B";
    }
    else {
        console.log(`Dit is een ongelding antwoord. Antwoord met A, B of C!`)
        return questionTwoAnswers(verhaal, keuzeA, keuzeB);
    }
}
//function for multiplechoise question with two answers

function checkAnswer (huidigekeuze, huidigVerhaal) {
    if (huidigekeuze === keuze1) {
        
    }

}

var gegevenAntwoord = questionThreeAnswers(verhaal1, keuze1, keuze2, keuze3);
console.log(`Gekozen antwoord: ${gegevenAntwoord}`);

