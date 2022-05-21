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

let accounts = [account1, account2, account3, account4];

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



//***************************************************************************
//console.log('\n\n before display movements \n\n');
//console.log(containerMovements.innerHTML);

const displayMovements = function(movements) 
{
  containerMovements.innerHTML = ' ';
  movements.forEach(function(mov,i)
  {
    
    const movementType = mov > 0 ? 'deposit' : 'withdrawal';
  //  console.log(i+'  :  '+movementType+'  :  '+mov);
    
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movementType}">${i+1} ${movementType}</div>
      <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin',html);

  })
};

const calcPrintBalance = function (movements) 
{
  const balance = movements.reduce((accumulator,value) => accumulator+value,0);
  labelBalance.textContent = `${balance} EUR`;
}

// displayMovements(account1.movements);
// calcPrintBalance(account1.movements);

const displaySummary = function (account)
{
  const incomes = account.movements
    .filter(value=>value>0)
    .reduce((acc,value)=>acc+value);
  // console.log('incomes:'+incomes);
  labelSumIn.textContent = `${incomes}€`
  
  const outcomes = account.movements
    .filter(value => value<0)
    .reduce((acc,value)=>acc+value);
  // console.log('outcomes: '+outcomes);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  
  const interest = account.movements
    .filter(value => value>0)
    .map(value => value*account.interestRate/100)
    .filter(value => value>1)
    .reduce((acc,value)=>acc+value);
  // console.log('interest: '+interest);
  labelSumInterest.textContent=`${interest}€`;
}

// displaySummary(account1.movements);

const account = accounts.find(value => value.owner === 'Jessica Davis');
//console.log(account);

// console.log(containerMovements.innerHTML);

// const user = 'Steven Thomas Williams'; //username stw
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(value => value[0])
//   .join('');
// console.log(username);

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
// console.log(accounts[0].owner);
// console.log(accounts);

//login event handler

let currentAccount;

btnLogin.addEventListener('click',function(e)
{
  e.preventDefault();
  //console.log('USERNAME:'+inputLoginUsername.value);
  //console.log('PIN: '+inputLoginPin.value);
  currentAccount = accounts.find(value => value.username === inputLoginUsername.value);
  //console.log(currentAccount);
  if (currentAccount?.pin===Number(inputLoginPin.value))
  {
    // display ui and messages
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    // clear the login input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
    // display movements
    displayMovements(currentAccount.movements);
    //display balance
    calcPrintBalance(currentAccount.movements);
    //display summary
    displaySummary(currentAccount);
//    console.log('login ok!!!');
  }
})

inputTransferTo
inputTransferAmount
btnTransfer.addEventListener('click',function(e)
{
  e.preventDefault();
  console.log('transfer money!!!');
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(value => value.username === inputTransferTo.value);
  console.log(receiverAccount);
  console.log(amount);
  const currentBalance = currentAccount.movements.reduce((accumulator,value) => accumulator+value,0);
  console.log(currentBalance);
  if (receiverAccount) {
    console.log('receiver account exists!!')
    if (currentBalance>=amount & amount>0) {
      console.log('yes, there is money to transfer!')
      if (receiverAccount.username != currentAccount.username){
        console.log('transfer concluded')
        currentAccount.movements.push(-amount);
        receiverAccount.movements.push(amount);
        displayMovements(currentAccount.movements);
        calcPrintBalance(currentAccount.movements);
        displaySummary(currentAccount);
        
      }
    }
  }
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  inputTransferAmount.blur();
})

btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  console.log('loan button was clicked');
  // Loan is only granted if there is at least one deposit >= than 10% of the requested loan amount
  const requestLoan = Number(inputLoanAmount.value);
  console.log(currentAccount.movements);
  console.log(inputLoanAmount.value);
  if (requestLoan>0) {
    if (currentAccount.movements.some(mov => mov>=0.1*requestLoan)) {
      console.log('loan granted')
      currentAccount.movements.push(requestLoan);
      displayMovements(currentAccount.movements);
      calcPrintBalance(currentAccount.movements);
      displaySummary(currentAccount);
    }
  }
  inputLoanAmount.value='';
  console.log(currentAccount.movements);
}) //end btnLoan event listenner

btnClose.addEventListener('click',function(e){
  e.preventDefault();
  
  // console.log("close clicked");
  if (currentAccount.username === inputCloseUsername.value){
    if(currentAccount.pin === Number(inputClosePin.value)){
      // console.log('closing account');
      // console.log(currentAccount);
      const index = accounts.findIndex(value => value.username === currentAccount.username);
      // console.log(accounts);
      // console.log(index);
      accounts.splice(index,1);
      // console.log(accounts);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }
  }
  inputCloseUsername.value = '';
  inputClosePin.value = '';
  inputClosePin.blur();
}) //end of close account event listenner

// this is not the best way to sort the movements, because it will modifie the original movement array, the best idea may be to implement the sorting on the display movements function!!
// let btnOrder=0;
// btnSort.addEventListener('click',function(e){
//   e.preventDefault();
//   console.log('sort button clicked');
//   if (btnOrder===0) {
//       currentAccount.movements.sort((a,b) => a-b);
//       btnOrder=1;
//       btnSort.value = '&downarrow; SORT'
//   } else {
//     currentAccount.movements.sort((a,b) => b-a);
//     btnOrder=0;
//     btnSort.value = '&uparrow; SORT'
//   }
//   displayMovements(currentAccount.movements);
//   calcPrintBalance(currentAccount.movements);
//   displaySummary(currentAccount);
// }) // end of sort button event listenner











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


// //working with FILTER
// console.log('\n\n working with filter \n\n');
//  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function(value){
//   return value>0;
// })

// const withdrawals = movements.filter(value => value<0)


// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

// //working with REDUCE
// console.log('\n\n working with reduce \n\n');

// const balance = movements.reduce(function(accumulator, value, index, array)
// {
//   console.log(`iteration: ${index} : accumulator: ${accumulator}`);
//   return accumulator + value
// },0)

// console.log(`balance: ${balance}`);

// const max = movements.reduce(function(accumulator, value, index)
// {
//   console.log(`${index} : accumulator: ${accumulator}`);
//   if (value>accumulator)
//   {
//     return value;
//   } else
//   {
//     return accumulator;
//   }
// },0)
// console.log(Math.max(...movements));
// console.log(max);

// *********************************************************************************
// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

// const calcAverageHumanAge = function(arrayAges)
// {
//   // console.log('arrayAges');
//   // console.log(...arrayAges);
//   const humanAge = arrayAges.map(function(value,index)
//   {
//     return value<=2 ? 2*value : 16+4*value;
//   });
//   // console.log('humanAge');
//   // console.log(...humanAge);
//   const humanAgeFiltered = humanAge.filter(value => value>=18);
//   // console.log('humanAgeFiltered')
//   // console.log(...humanAgeFiltered);
//   const n = humanAgeFiltered.length;
//   const average = humanAgeFiltered.reduce(function(accumulator, value)
//   {
//     accumulator = accumulator + value/n;
//     // console.log(accumulator);
//     return accumulator;
//   },0);
//   return average;
// }

// const calcAverageHumanAge2 = function(arrayAges)
// {
//   return arrayAges
//     .map(value => value<=2 ? 2*value : 16+4*value)
//     .filter(value => value>=18)
//     .reduce((acc,value,_,arr) => acc+value/arr.length,0);
// }

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// console.log(calcAverageHumanAge2(data1));
// console.log(calcAverageHumanAge2(data2));

// console.log(calcAverageHumanAge(data1));
// console.log(calcAverageHumanAge(data2));
// *********************************************************************************


//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;
// // kind of a data processing pipeline using, filter, map and reduce
// const totalDepositsUSD = movements
//   .filter(value => value>0)
//   .map(value => value*euroToUsd)
//   .reduce((acc,value) => acc = acc+value);
// console.log(totalDepositsUSD);

// working 21-05-2022
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('includes method application')
// console.log(movements);
// // the includes methods checks for equal values
// console.log(movements.includes(-130));
// console.log(movements.includes(-210));

// // the some methods check if there is at least one element that satisfies the condition
// console.log('some method application')
// console.log(movements.some(mov => mov===-130));
// const anydeposits = movements.some(mov => mov>0);
// console.log(anydeposits);

// // the every method check if all the elements satisfies the condition
// console.log('every method application');
// console.log(movements.every(mov => mov>10000));
// console.log(movements.every(mov => mov<10000));

// // its is also possible to use a separate callback function
// console.log('separate callback function');
// const deposit = mov => mov > 0;
// console.log(movements.filter(deposit)); // filter the depoists in movements array

// // the flat method explodes nested arrays inside an array
// console.log('flat method implementation');
// const arrA = [[1,2,3],[4,5,6],7,8,[9,10]];
// console.log(arrA);
// console.log(arrA.flat(1));//deeps only one level
// const arrB = [[[1,2],3],[4,5,6],7,8,[9,10]];
// console.log(arrB);
// console.log('1 level  ',arrB.flat());//deeps only one level
// console.log('2 levels ',arrB.flat(2));//deeps only one level

// // map iterates over the accounts object separating only the movements array of each account object
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((previousValue, currentValue) => previousValue + currentValue,0);
// console.log(overalBalance);

// //refactoring the overalBalance calculation using method chaning
// const overalBalanceB = accounts.map(acc => acc.movements).flat().reduce((acc,mov) => acc+mov,0);
// console.log(overalBalanceB);

// using the sort method
// take note that the sort method modifies the original array
const owners = ['zeus','poseidon','hermes','atena','venus','persefone'];
console.log('original owners array:           ' + owners);
console.log('sorted owner array:             ' + owners.sort());
console.log('final state of the owner array: ' + owners);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// sorting a numeric array, take note that sort does work on string values
console.log('orignal movements: '+movements);
console.log('sorted movements:  '+movements.sort());

// return -1, b>a, (A,B) keep original order
// return +1, a>b, (B,A) switch order
// sort iterates over the array using the callback function to tell what to do
movements.sort((a,b) => {
  //ascending order
  if (a>b) {
    return +1;
  }
  if (b>a) {
    return -1;
  }
})
console.log('ascending: '+movements);

movements.sort((a,b) => {
  //descending order
  if (a>b) {
    return -1;
  }
  if (b>a) {
    return +1;
  }
})
console.log('descending: '+movements);


// improving the sort callback function
movements.sort((a,b) => a-b) // ascending
console.log('ascending: '+movements);
movements.sort((a,b) => b-a) // descending
console.log('descending: '+movements);