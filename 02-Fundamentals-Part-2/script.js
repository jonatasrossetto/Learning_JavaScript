'use strict';

/*
function logger() {
    console.log('My name is Jonatas');
}

logger();
console.log('');
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

console.log(fruitProcessor(2, 3));


// function declaration don't need to be declared before its use
function birthAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(birthAge1(1991));

//function expression needs to be declared before its use in the code
const birthAge2 = function (birthYear) {
    return 2037 - birthYear;
}

console.log(birthAge2(1991));

//arrow function
const birthAge3 = birthYear => 2037 - birthYear;
console.log(birthAge3(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jônatas"));

//Challenge #1 part2

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3 / 3);
//var avgDolphins = calcAverage(44, 23, 71);
//var avgKoalas = calcAverage(65, 54, 49);
var avgDolphins = calcAverage(85, 54, 41);
var avgKoalas = calcAverage(23, 34, 27);
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
}
checkWinner(avgDolphins, avgKoalas);


//arrays
const friends = ['jonatas', 'sheila', 'olívia'];
console.log(friends);
const years = new Array(1991, 1992, 1993, 1994, 1995);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log('friends length ' + friends.length);
console.log('years length ' + years.length);
friends[3] = 'teste';

console.log(friends);
friends.push('luzia'); // add elment to the end of the array
console.log(friends);
friends.unshift('alvaro'); //add element to begining of the array 
console.log(friends);
console.log(friends.pop()); // remove the last element
console.log(friends);
console.log(friends.shift()); // remove the first element
console.log(friends);
console.log(friends.indexOf('sheila')); // returns the index of the element
console.log(friends.includes('jonatas')); // returns true if the element is in the array


//code challenge 2
function calcTip(bill) {
    if ((bill >= 50) && (bill <= 300)) {
        return (bill * 0.15);
    } else {
        return (bill * 0.2);
    }
}
const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(totals);


const jonatas = {
    nome: 'Jonatas',
    sobrenome: 'Rossetto',
    anoNascimento: 2010,
    gatos: ['arnold', 'lili', 'bethoven'],
    calcIdade: function (ano) {
        return ano - this.anoNascimento;
    }
}

console.log(jonatas);
console.log(jonatas.sobrenome);
console.log(jonatas['sobrenome']);
console.log(jonatas['anoNascimento']);
/*const interestedIn = prompt('qual informação?');
console.log(interestedIn);
if (jonatas[interestedIn]) {
    console.log(jonatas[interestedIn]);
} else {
    console.log('indefinido!!!')
}*/
/*

jonatas.cidade = 'Salvador';
jonatas['email'] = 'jonatas.rossetto@gmail.com';
console.log(jonatas);

console.log(`Jonatas tem ${jonatas.gatos.length} gatos e o mais fofo é o ${jonatas.gatos[0]}`);

console.log(jonatas.calcIdade(2022));
//console.log(jonatas['calcAge'](2021));
if (jonatas.calcIdade(2022) > 18) {
    console.log(`Jonatas tem ${jonatas.calcIdade(2022)}, e possui carteira de motorista`);
} else {
    console.log(`Jonatas tem ${jonatas.calcIdade(2022)}, e não possui carteira de motorista`);
}

//code challenge
const mark = {
    height: 1.69,
    weight: 78,
    bmi: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi
    }
}

const john = {
    height: 1.95,
    weight: 92,
    bmi: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi
    }
}

console.log(mark);
console.log(john);
console.log(mark.bmi());
console.log(john.bmi());
if (mark.bmi > john.bmi) {
    console.log('Mark bmi is larger than John bmi');
} else {
    console.log('John bmi is larger than Mark bmi');
}

*/

//for loops

//for (let inc = 1; inc <= 10; inc = inc + 1) {
//console.log(inc);
//}
/*
const jonatas = [
    'Jonatas',
    'Rossetto',
    2010,
    ['arnold', 'lili', 'bethoven'],
    true
]

for (let inc = 0; inc <= 4; inc++) {
    console.log(jonatas[inc], typeof jonatas[inc]);
}
console.log('-------------------')

for (let inc = 0; inc <= 4; inc++) {
    if (typeof jonatas[inc] != 'string') { continue };
    console.log(jonatas[inc], typeof jonatas[inc]);
}

console.log('-------------------')
for (let inc = 0; inc <= 4; inc++) {
    if (typeof jonatas[inc] === 'object') { break };
    console.log(jonatas[inc], typeof jonatas[inc]);
}

console.log('-------------------')
for (let inc = 4; inc >= 0; inc--) {
    console.log(jonatas[inc], typeof jonatas[inc]);
}

let rep = 0;
console.log('-------------------while loop')
while (rep < 10) {
    rep = rep + 1;
    console.log(rep);
}

let dice = 0;
console.log('-------------------while loop')
while (dice != 6) {
    dice = Math.trunc(6 * Math.random()) + 1;
    console.log(dice);
}
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];

for (let inc = 0; inc < bills.length; inc++) {
  tips[inc] = calcTip(bills[inc]);
}

console.log(bills);
console.log(tips);

let totals = [];
let inc = 0;
while (inc < bills.length) {
  totals[inc] = bills[inc] + tips[inc];
  inc++;
}

console.log(totals);

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

function calcAverage(dados) {
  let aux = 0;
  for (let inc = 0; inc < dados.length; inc++) {
    aux = aux + dados[inc];
  }
  return aux / dados.length;
}

console.log(calcAverage(totals));
