'use strict';
// const bookings = [];
// const createbooking = function (
//   flightNumber,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //numPassengers = numPassengers || 1;
//   //price = price || 199;
//   const booking = { flightNumber, numPassengers, price };
//   console.log(booking);
//   bookings.push(booking);
// };

// createbooking('LH123');
// createbooking('LH123', 3);
// createbooking('LH123', undefined);

// let passenger = {
//   name: 'jonatas rossetto',
//   passport: '123456789',
// };
// let flg = 'LH123';

// console.log(passenger);
// console.log(flg);

// function checkIn(flight, client) {
//   client.name = 'Dr. ' + client.name;
//   flight = flight + ' ok';
// }

// checkIn(flg, passenger);

// console.log(passenger);
// console.log(flg);

// //const oneWord = function (str) {
// //  return str.replace(' ', '').toLowerCase();
// //};

// //functions receiving other functions as parameters

// function oneWord(str) {
//   return str.replace(' ', '').toLowerCase();
// }

// console.log(oneWord('Jonatas Rossetto'));

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   console.log(first);
//   console.log([first.toUpperCase(), ...others].join(' '));
// };

// upperFirstWord('Jonatas Rossetto');

// const transform = function (str, fn) {
//   console.log(`original string: ${str}`);
//   console.log(`transformed string: ${fn(str)}`);
//   console.log(`function used: ${fn.name}`);
// };

// transform('Jonatas Rossetto', oneWord);
// console.log('*********************\n\n');
// transform('Jonatas Rossetto', upperFirstWord);
// console.log('*********************\n\n');
// //functions returning functions

// function greet(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

// const greeterHey = greet('Hey');
// greeterHey('jonatas');
// console.log('*********************\n\n');
// greet('Olá')('Olívia');
// console.log('*********************\n\n');

// const greet1 = greeting => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet2 = greeting => name => texto =>
//   console.log(greeting + name + texto);

// greet1('hello')(' jonatas');
// greet2('hello')(' jonatas')(' jfasjlvnasknflasjf');
// console.log('*********************\n\n');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//   }
// }

// lufthansa.book(239, 'Joe Malone');
// lufthansa.book(635, 'Jessica Harter');
// console.log(lufthansa.bookings);

// const bookFunction = lufthansa.book;

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],

// }

// bookFunction.call(eurowings, 23, 'Jessica Harter'); 
// bookFunction.call(lufthansa, 433, 'Mary Jane'); 
// console.log(eurowings);
// console.log(lufthansa);

// // using apply method

// const flightData = [899, 'Jorge Martin'];
// bookFunction.apply(lufthansa,flightData);
// console.log(lufthansa.bookings);
// bookFunction.call(eurowings,...flightData);
// console.log(eurowings.bookings);

// console.log('*********************\n\n');
// //using the bind method - bind the function to some previously defined parameters
// //bookFunction.call(eurowings, 23, 'Jessica Harter'); 

// const bookEurowings = bookFunction.bind(eurowings);

// bookEurowings(345,"Uncle Bob");
// console.log(eurowings.bookings);
// const bookEW56 = bookFunction.bind(eurowings, 56);
// bookEW56('Ken Follet');
// console.log(eurowings.bookings);

// console.log('*********************\n\n');

// //using with event listeners
// lufthansa.planes = 300;
// console.log(lufthansa);

// lufthansa.buyPlane = function() {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// }
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));
// console.log('*********************\n\n');
// // Partial Application
// const addTax = (rate, value) => value + value*rate;
// console.log(addTax(0.1,200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200)); 


// const newAddTax = function (rate){
//   return function(value){
//     return addTax(rate,value);
//   }
// }

// const newAddVat = newAddTax(0.23);
// console.log(newAddVat(100));

// console.log('*********************\n\n');

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// // 1.2. Based on the input number, update the 'answers' array property. For
// // example, if the option is 3, increase the value at position 3 of the array by
// // 1. Make sure to check if the input is a number and if the number makes
// // sense (e.g. answer 52 wouldn't make sense, right?)
// // 2. Call this method whenever the user clicks the "Answer poll" button.
// // 3. Create a method 'displayResults' which displays the poll results. The
// // method takes a string as an input (called 'type'), which can be either 'string'
// // or 'array'. If type is 'array', simply display the results array as it is, using
// // console.log(). This should be the default option. If type is 'string', display a
// // string like "Poll results are 13, 2, 4, 1".
// // 4. Run the 'displayResults' method at the end of each
// // 'registerNewAnswer' method call.
// // 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// // data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// // object! So what should the this keyword look like in this situation?
// // Test data for bonus:
// // § Data 1: [5, 2, 3]
// // § Data 2: [1, 5, 3, 9, 6, 1]
// // Hints: Use many of the tools you learned about in this and the last section 

// const poll = 
//   {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//     answers: new Array(4).fill(0),
//     inc:0,
//     registerNewAnswer()
//     {
//       let answer = Number(window.prompt(this.question+'\n'+this.options.join('\n')+'Write option number: '));
//       if (!answer.isNaN)
//         if (answer>=0 & answer<=3)
//           {
//             this.answers[answer]++;
//           }

//       this.inc = this.inc+1;
//       // console.log('answer:'+answer);
//       console.log('inc: '+this.inc);
//       // console.log(this.answers);
//       this.displayResults('array');
//     },
//     displayResults (type)
//     {
//       if (type=='array')
//       {
//         console.log(this.answers);
//       }
//       if (type=='string')
//       {
//         console.log(`Poll results are ${this.answers.join(', ')}`);
//       }
//     }

//   }

//   document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));
  
//   poll.displayResults.call({answers: [5,2,3]},'string');
//   poll.displayResults.call({answers: [1,5,3,9,6,1]},'array');

// console.log('*********************\n\n');
// console.log('Immediately Invoked Function');

// const runOnce = function()
// {
//   console.log('run once');
// }
// runOnce();

// (function(){
//   console.log('this will never run again');
//   const isPrivate = 100;
//   var isPublic = 200;
// })();
// // console.log(isPublic);
// {
//   const isPrivate = 100;
//   var isPublic = 200;
// }
// // console.log(isPublic);

// console.log('*********************\n\n');
// console.log('Closures');

// const secureBooking = function()
// {
//   let passengerCount = 0;
//   return function()
//   {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();
// // the booker function still have acess to its own local reference to passengerCount, even though the secure booking function vanishes from the global scope, its appear to be a way to encapsulate a variable and make it only accessible to the function execution, but the funny thing is that you don't need to creat an object to do that
// console.dir(booker);

// console.log('*********************\n\n');
// const newBooker = secureBooking();
// newBooker();
// newBooker();
// console.dir(newBooker);

// let f;
// const g= function()
// {
//   let a=11;
//   f= function()
//   {
//     a++;
//     console.log(a*2);
//   }
// }

// g();
// f();
// f();
// f();

console.log('*********************\n\n');
(function () 
{
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click',function()
  {
    header.style.color = 'blue'
    console.log('click');
  }
  )
})();
