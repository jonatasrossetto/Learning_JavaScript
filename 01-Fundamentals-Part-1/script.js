/*
let js = 'amazing';
if (js == 'amazing') alert("JS IS FUN!!");
console.log(40 + 30 - 10 + 20);

let firstName = "Jonatas";

console.log(firstName);

let javascroptIsFun = true;
console.log(javascroptIsFun);
console.log(typeof javascroptIsFun);
//console.log(typeof 23);
//console.log(typeof "string");
//console.log(typeof 23.23);
javascroptIsFun = 23;
console.log(javascroptIsFun);
console.log(typeof javascroptIsFun);
javascroptIsFun = "texto";
console.log(javascroptIsFun);
console.log(typeof javascroptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

year = null;
console.log(year);
console.log(typeof year);

var job = "professor"
console.log(job);
console.log(typeof job);
var job = 22
console.log(job);
console.log(typeof job);



// Coding Challenge #1 
let markHeight = 1.88; //in meters
let markWeight = 95; // in Kg
let johnHeight = 1.76; //in meters
let johnWeight = 85; // in Kg

let markBmi = markWeight / (markHeight ** 2);
let johnBmi = johnWeight / (johnHeight ** 2);

console.log("Mark's BMI= " + markBmi);
console.log("John's BMI= " + johnBmi);

let markHigherBmi = markBmi > johnBmi;

console.log("Is Mark's BMI higher than John's? " + markHigherBmi);

if (markBmi > johnBmi) {
    console.log(`Mark's BMI is hidgher than John's BMI`)
} else {
    console.log(`John's BMI is hidgher than Mark's BMI`)
}


const texto = `Mark's BMI is ${markBmi} and John's BMI is ${johnBmi}`
console.log(texto)


/* console.log(`teste de
linhas
múltiplas
no java script`);

console.log(`          `);

const age = 15;

if (age >= 18) {
    console.log(`You can start driving`);
} else {
    console.log(`You can't start driving, you are too young, wait ${18 - age} years`);
}



//const averageScoreDolphins = (96 + 108 + 91) / 3;
//const averageScoreKoalas = (88 + 91 + 110) / 3;

//const averageScoreDolphins = (97 + 112 + 101) / 3;
//const averageScoreKoalas = (109 + 95 + 123) / 3;

//const averageScoreDolphins = (97 + 112 + 101) / 3;
//const averageScoreKoalas = (109 + 95 + 106) / 3;

const averageScoreDolphins = 99;
const averageScoreKoalas = 99;

console.log(`The Dolphins average score is ${averageScoreDolphins}`);
console.log(`The Koalas average score is ${averageScoreKoalas}`);

if ((averageScoreKoalas >= 100) || (averageScoreDolphins >= 100)) {
    if (averageScoreDolphins > averageScoreKoalas) {
        console.log(`The Dolphins won!!`);
    } else if (averageScoreKoalas > averageScoreDolphins) {
        console.log(`The Koalas won`);
    } else if (averageScoreDolphins === averageScoreKoalas) {
        console.log(`We have a draw!!`)
    }
} else {
    console.log(`There is no winner!! Both scores are lower than 100`);
}


const weekDay = 'Tuesday';

if (weekDay === "Monday") {
    console.log('lot of stuff');
} else if (weekDay === 'Tuesday') {
    console.log('nothing to do');
}


const age = 17;
const drink = (age >= 18) ? 'wine' : 'water';
console.log(drink);

*/


const bill = 40;
const tip = ((bill >= 50) && (bill <= 300)) ? bill * 0.15 : bill * 0.2;

console.log(`The bill is ${bill} and the tip is ${tip}`);
