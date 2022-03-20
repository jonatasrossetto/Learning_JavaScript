'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  var teste = true;

  function printAge() {
    const output = `${firstName} Your are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  if (birthYear >= 1981 && birthYear <= 1996) {
    var millenial = true;
    const str = `${firstName}, you are a millenial`;
    console.log(str);
  }
  console.log(millenial);
  //console.log(str);
  printAge();
  return age;
}

const firstName = 'Jonatas';
calcAge(1991);
//printAge();
console.log(teste);


console.log(year);

var me = 'jonatas';
let job = 'teacher';
const year = 1991;


console.log(this);

function calcAge(birthyear) {
  console.log(2022 - birthyear);
  console.log(this);
}

calcAge(1974);


const add = (x, y) => {
  return x + y;
};

console.log(add(1, 2));

let objeto = {
  nome: 'Jonatas',
  sobrenome: 'Rossetto',
  idade: 47,
};
console.log('objeto ', objeto);

let novo = objeto;

console.log(novo);
novo.nome = 'sheila';
objeto.nome = 'olivia';

console.log('objeto ', objeto, 'novo', novo);



function add() {
  console.log(arguments);
  console.log(arguments.length);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

console.log(add(10, 20, 3, 4, 5));



function criaobjeto() {
  return {};
}

let pessoaA = criaobjeto();
let pessoaB = criaobjeto();

pessoaA.nome = 'jonatas';
pessoaB.sobrenome = 'rossetto';

console.log(pessoaA);
console.log(pessoaB);



const arr = [2, 3, 4];
let a = arr[0];
let b = arr[1];
let c = arr[2];

let [x, y, z] = arr;
console.log(x, y, z);


const restaurant = {
  name: 'Classico Italiano',
  local: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//console.log(restaurant.order(1, 2));

//let [starter, main] = restaurant.order(1, 2);

//console.log(starter, main);

//let { name, categories, local } = restaurant;
//console.log(name);
//console.log(categories);
//console.log(local);

//const { menu = [], starterMenu: starters = [] } = restaurant;
//console.log(menu);
//console.log(starters);

restaurant.categories.push('teste');
console.log(restaurant.categories);
//console.log(name);
//console.log(location);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);


*/
/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const player1 = game.players[0];
const player2 = game.players[1];
//const gk = player1[0];
const [gk, ...fieldPlayers] = player1;
console.log(gk);
console.log(fieldPlayers);
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

function printGoals() {
  console.log(arguments);
}

printGoals(...game.scored, game.scored.length);

team1 > team2 && console.log('team1');
team2 > team1 && console.log('team2');

for (const [a, b] of allPlayers.entries()) {
  console.log(a, b);
}

console.log(game.odds.team3);



const weekday = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const openinghours = {
  [weekday[0]]: { open: 17, close: 24 },
  //[weekday[1]]: { open: 18, close: 1 },
  [weekday[2]]: { open: 19, close: 2 },
  //[weekday[3]]: { open: 20, close: 3 },
  [weekday[4]]: { open: 21, close: 4 },
  //[weekday[5]]: { open: 22, close: 5 },
  [weekday[6]]: { open: 23, close: 6 },
};

//console.log(openinghours);

for (const day of weekday) {
  //console.log(day);
  const open = openinghours[day]?.open ?? 'closed';
  console.log(`${day} we open at ${open}`);
}

const propriedades = Object.keys(openinghours);
console.log(propriedades);
const valores = Object.values(openinghours);
console.log(valores);
const entries = Object.entries(openinghours);
console.log(entries);
for (const [key, value] of entries) {
  console.log(key);
  console.log(`On ${key} we open at ${value.open} and close at ${value.close}`);
}

for (const [key, { open, close }] of entries) {
  console.log(key);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal} : ${player}`);
}

const odd = Object.values(game.odds);
let sum = 0;
for (const x of odd) {
  sum = sum + x;
}
console.log('The average odd is ', sum / odd.length);

const oddKey = Object.keys(game.odds);
console.log(oddKey);
for (const key of oddKey) {
  let str = '';
  if (game[key]) {
    str = 'victory ' + game[key];
  } else {
    str = 'draw';
  }
  console.log(`Odd of ${str}: ${game.odds[key]}`);
}

const scorers = {}; // creates an object
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  //caso o player já exista na lista e adiciona 1 ao valor do player senão ele cria o player atribuindo o valor 1
}
console.log(scorers);

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
orderSet.add('Bread');
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Bread'));
orderSet.delete('Pizza');
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
for (const order of orderSet) {
  console.log(order);
}

const rest = new Map();
rest
  .set('name', 'Roma Pasta')
  .set('adress', 'piazza barberini')
  .set('open', 19)
  .set('close', 24)
  .set(true, 'We are open!!')
  .set(false, 'Sorry, we are closed!!');
console.log(rest);
//console.log(rest.get(true));
//console.log(rest.get(false));
const time = 17;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

const weekday = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const openinghours = {
  [weekday[0]]: { open: 17, close: 24 },
  //[weekday[1]]: { open: 18, close: 1 },
  [weekday[2]]: { open: 19, close: 2 },
  //[weekday[3]]: { open: 20, close: 3 },
  [weekday[4]]: { open: 21, close: 4 },
  //[weekday[5]]: { open: 22, close: 5 },
  [weekday[6]]: { open: 23, close: 6 },
};

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'java'],
  [2, 'C#'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);

//convert object to map
console.log(Object.entries(openinghours));
const hoursMap = new Map(Object.entries(openinghours));
console.log(hoursMap);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}

const answer = 1; //Number(prompt('Your answer?'));

console.log(question.get(answer === question.get('correct')));

//converting a map back to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

//***************************************************************

/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = new Set(...[gameEvents.values()]);
console.log(events);
console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);
let ant = 0;
let sum = 0;
for (const time of gameEvents.keys()) {
  console.log(time, ant, time - ant);
  sum = sum + (time - ant);
  ant = time;
}
console.log(`An event happens every ${sum / gameEvents.size} minutes`);

for (const [key, value] of gameEvents) {
  //console.log(key, value);
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key} : ${value}`);
  } else if (key <= 90) {
    console.log(`[SECOND HALF] ${key} : ${value}`);
  }
}

let str = 'Jonatas Fred Rossetto';
console.log(str.length);
console.log(str[0]);
console.log(str.charCodeAt(3));
console.log(str.charAt(3));
console.log(str.endsWith('s'));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.slice(1, str.length));
console.log(str.trim());
console.log(str.toLowerCase().includes('fred'));
console.log(str.split(' '));
let firstname = str.split(' ')[0];
let lastname = str.split(' ')[str.split(' ').length - 1];
console.log(firstname, lastname);
console.log([firstname, lastname].join('*****'));

function capitalizeName(name) {
  const names = name.split(' ');
  const namesCapital = [];
  for (const word of names) {
    namesCapital.push(word[0].toUpperCase() + word.slice(1));
    console.log(namesCapital);
  }
  return namesCapital.join(' ');
}

console.log(capitalizeName('jonatas fred rossetto'));
console.log(capitalizeName('teste'));

function maskCreditCardNumber(number) {
  const word = number + '';
  const last = word.slice(-4);
  return last.slice(-4).padStart(word.length, '*');
}

console.log(maskCreditCardNumber('12345678901234'));


*/
/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

/*

let caixa = document.createElement('textarea');
let btn = document.createElement('button');
document.body.append(caixa);
document.body.append(btn);

let texto =
  'underscore_case \n first_name \nSome_Variable \n  calculate_AGE \ndelayed_departure_to_mo';

caixa.value = texto;

btn.addEventListener('click', function () {
  texto = caixa.value;
  //console.log('click');
  //console.log(texto.toLowerCase());
  //console.log(toCamelCase1(texto));
  //console.log(toCamelCase2(texto));
  //console.log(toCamelCase3(texto));
  //console.log(toCamelCase4(texto));
  //console.log(toCamelCase5(texto));
  console.log(toCamelCase6(texto));
});

function toCamelCase1(word = '') {
  word = word.toLowerCase();
  //let pos = 0;
  while (word.includes('_')) {
    let temp = '';
    let pos = word.search('_');
    temp = word.slice(pos + 1);
    word = word.slice(0, pos);
    temp = temp[0].toUpperCase() + temp.slice(1);
    word = word + temp;
  }
  while (word.includes(' ')) {
    word = word.replace(' ', '');
  }

  return word;
}

function toCamelCase2(word = '') {
  word = word.toLowerCase();
  //let pos = 0;
  while (word.includes('_')) {
    let temp = '';
    let pos = word.search('_');
    word =
      word.slice(0, pos) +
      word.slice(pos + 1)[0].toUpperCase() +
      word.slice(pos + 1).slice(1);
  }
  while (word.includes(' ')) {
    word = word.replace(' ', '');
  }

  return word;
}

function toCamelCase3(word = '') {
  word = word.toLowerCase();
  while (word.includes('_') || word.includes(' ')) {
    let temp = '';
    if (word.includes('_')) {
      let pos = word.search('_');
      word =
        word.slice(0, pos) +
        word.slice(pos + 1)[0].toUpperCase() +
        word.slice(pos + 1).slice(1);
    }
    word = word.replace(' ', '');
  }

  return word;
}

function toCamelCase4(word = '') {
  word = word.toLowerCase();
  while (word.includes('_') || word.includes(' ')) {
    if (word.includes('_')) {
      word =
        word.slice(0, word.search('_')) +
        word.slice(word.search('_') + 1)[0].toUpperCase() +
        word.slice(word.search('_') + 1).slice(1);
    }
    word = word.replace(' ', '');
  }

  return word;
}

function toCamelCase5(word = '') {
  word = word.toLowerCase();
  while (word.includes('_')) {
    word =
      word.slice(0, word.search('_')) +
      word.slice(word.search('_') + 1)[0].toUpperCase() +
      word.slice(word.search('_') + 1).slice(1);
  }
  word = word.replaceAll(' ', '');
  return word;
}

function toCamelCase6(word = '') {
  word = word.toLowerCase();
  while (word.includes('_')) {
    word =
      word.slice(0, word.search('_')) +
      word.slice(word.search('_') + 1)[0].toUpperCase() +
      word.slice(word.search('_') + 1).slice(1);
  }
  word = word.replaceAll(' ', '');
  let lista = word.split('\n');
  for (let i = 0; i < lista.length; i++) {
    //console.log(lista[i].padEnd(20, ' ') + '✅'.repeat(i + 1) + '\n');
    lista[i] = lista[i].padEnd(20, ' ') + '✅'.repeat(i + 1) + '\n';
  }
  //console.log(''.concat(...lista));
  return ''.concat(...lista);
}
*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

let lista = flights.split('+');
console.log(lista);
for (const str of lista) {
  let temp = str.split(';');
  let head = temp[0].slice(1).replace('_', ' ');
  if (head.startsWith('Del')) {
    head = '* ' + head;
  }
  let texto =
    head +
    ' from ' +
    temp[1].slice(0, 3).toUpperCase() +
    ' to ' +
    temp[2].slice(0, 3).toUpperCase() +
    ' (' +
    temp[3] +
    ')';
  console.log(texto.padStart(50, ' '));
}
