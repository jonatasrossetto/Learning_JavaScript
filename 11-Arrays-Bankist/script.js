'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

console.log('\n\n before display movements \n\n');
console.log(containerMovements.innerHTML);

const displayMovements = function(movements) 
{
  containerMovements.innerHTML = ' ';
  movements.forEach(function(mov,i)
  {
    
    const movementType = mov > 0 ? 'deposit' : 'withdrawal';
    console.log(i+'  :  '+movementType+'  :  '+mov);
    
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movementType}">${i+1} ${movementType}</div>
      <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin',html);

  })
};

displayMovements(account1.movements);
console.log(containerMovements.innerHTML);

const user = 'Steven Thomas Williams'; //username stw
const username = user
  .toLowerCase()
  .split(' ')
  .map(value => value[0])
  .join('');
console.log(username);

// const createUserNames = function(array)
// { 
//   return array.map(value => value.owner.toLowerCase().split(' ').map(value => value[0]).join(''));
// }

const createUserNames = function(array)
{
  array.forEach(function(value)
  {
    value.username = value.owner
    .toLowerCase()
    .split(' ')
    .map(value => value[0])
    .join('');
  })
}
createUserNames(accounts);
console.log(accounts[0].owner);
console.log(accounts);















/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// let arr = ['a', 'b', 'c', 'd', 'e', 'f','g'];
// console.log (arr);
// console.log (arr.slice(2));
// console.log (arr.slice(2,5));
// console.log (arr.slice(-1));
// console.log (arr.slice(1,-2));
// console.log([...arr]);
// console.log('splice:'+arr.splice(1,2));
// console.log([...arr]);
// let arr2 = ['a', 'b', 'c', 'd', 'e', 'f','g'];
// console.log(arr2.reverse());
// console.log([...arr2]);
// console.log(arr.concat(arr2));
// console.log([...arr]);

// console.log(arr.at(0));
// console.log(arr.at(-1));
// console.log(arr.concat(arr2).at(0));
// console.log(arr.concat(arr2).at(-1));
// console.log('jonatas'.at(0));
// console.log('jonatas'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log('\n\n********************\n\n');
// console.log('for loop');
// for (const [i,item] of movements.entries())
// {
//   if (item>=0) 
//   {
//     console.log(`#${i} You deposited: ${item}`);
//   } 
//   else
//   {
//     console.log(`#${i} You withdrew: ${Math.abs(item)}`);
//   }
// }

// console.log('\n\n********************\n\n');
// console.log('forEach Method with array');
// movements.forEach(function(item, index, array)
// {
//   console.log(index + '   ' + item + '   ' + array);
//   //break or continue do not wok inside de forEach method
// })

// console.log('\n\n********************\n\n');
// console.log('forEach Method with maps and sets');
// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);
// currencies.forEach(function(value,key,map)
// {
//   console.log(key + " : " + value + " : " + map);
// })

// const currenciesUnique = new Set(['USD','EUR','GBP','USD','EUR','BRL']);
// currenciesUnique.forEach(function(value, key, map)
// {
//   console.log(key + " : " + value + " : " + map);
// })

// ****************************************************************************************
// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉
// GOOD LUCK 😀

// function checkDogs(dogsJulia, dogsKate)
// {
//    const dogsJuliaCopy = dogsJulia.slice(1,-2);
//    console.log(dogsJuliaCopy);
//    const dogsJuliaKate = dogsJuliaCopy.concat(dogsKate);
//    console.log(dogsJuliaKate);
//    dogsJuliaKate.forEach(function(value,index)
//    {
//       if (value>=3) 
//       {
//         console.log(`Dog number ${index} is an adult, and is ${value} years old`);
//       } else
//       {
//         console.log(`Dog number ${index} is still a puppy 🐶`);
//       }
//    })
// }
// let dogsJulia = [3, 5, 2, 12, 7];
// let dogsKate = [4, 1, 15, 8, 3];
// checkDogs(dogsJulia,dogsKate);
// dogsJulia = [9, 16, 6, 8, 3];
// dogsKate = [10, 5, 6, 1, 4];
// checkDogs(dogsJulia,dogsKate);
// ****************************************************************************************


//working with MAP
// console.log('working with map \n\n');
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;
// console.log(...movements);
// // map do not mutate the original array
// const movementsUsd = movements.map(function(value)
// {
//   return value*euroToUsd;
// })

// const movementsUsdArrow = movements.map(value => value*euroToUsd);

// console.log(...movementsUsd);
// console.log(...movementsUsdArrow);

// const movementsDescriptions = movements.map(function(value, index, array)
// {
//   if (value>=0) 
//   {
//     return `#${index} You deposited: ${value}`;
//   } 
//   else
//   {
//     return `#${index} You withdrew: ${Math.abs(value)}`;
//   }
// });

// const movementsDescriptionsZip = movements.map(function(value, index, array)
// {
//   return `#${index} You ${value>0 ? 'deposited:' : 'withdrew'}  ${Math.abs(value)}`
// });

// console.log(movementsDescriptions);
// console.log(movementsDescriptionsZip);


//working with FILTER
console.log('\n\n working with filter \n\n');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function(value){
  return value>0;
})

const withdrawals = movements.filter(value => value<0)


console.log(movements);
console.log(deposits);
console.log(withdrawals);