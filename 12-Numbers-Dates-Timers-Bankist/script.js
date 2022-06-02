'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-05-30T16:33:06.386Z',
    '2022-05-31T14:43:26.374Z',
    '2022-06-01T18:49:59.371Z',
    '2022-06-02T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2022-05-30T18:49:59.371Z',
    '2022-06-01T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function(date,locale) {
  const calcDaysPassed = (date1,date2)=> Math.round(Math.abs(date2-date1)/(1000*60*60*24));

  const daysPassed = calcDaysPassed(new Date(),date);
  // console.log(new Date(),date);
  // console.log(daysPassed);
  if (daysPassed==0) return 'Today';
  if (daysPassed==1) return 'Yesterday';
  if (daysPassed<=7) { 
    return `${daysPassed} days ago`
  }
  else {
    // const day = `${date.getDate()}`.padStart(2,'0');
    // const month = `${date.getMonth()+1}`.padStart(2,'0');
    // const year = date.getFullYear();
    // return day+'/'+month+'/'+year;
    return Intl.DateTimeFormat(locale).format(date);
  };
      
}



const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date,acc.locale);
    
    const formatedMovements = new Intl.NumberFormat(acc.locale,{
      style: 'currency',
      currency: acc.currency,
    }).format(mov);

    console.log('movements:'+formatedMovements);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatedMovements}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;


// FAKE THAT YOU ARE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity=100;

// CREATE THE CURRENT DATE TO BE DISPLAYED 
// const now = new Date();
// const day = `${now.getDate()}`.padStart(2,'0');
// const month = `${now.getMonth()+1}`.padStart(2,'0');
// const year = now.getFullYear();
// const hours = `${now.getHours()}`.padStart(2,'0');
// const minutes = `${now.getMinutes()}`.padStart(2,'0');
// labelDate.textContent=day+'/'+month+'/'+year+', '+hours+':'+minutes;
// day/month/year

//testing the internationalization API
// const locale = navigator.language;
// console.log(locale);
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
// };
// labelDate.textContent= Intl.DateTimeFormat(locale,options).format(now);
//labelDate.textContent= Intl.DateTimeFormat('en-us').format(now);



btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //const locale = navigator.language;
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'long',
    };
    labelDate.textContent= Intl.DateTimeFormat(currentAccount.locale,options).format(now);


    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.ceil(Number(inputLoanAmount.value));
  
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // add the date of the movement
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// JavaScript treats all numbers as decimals and are stored as 64bits number, which can lead to some representation errors with real numbers
// console.log(23 === 23.0);
// console.log(1/10+2/10); // representation error
// console.log(0.3===(1/10+2/10));
// console.log(0.3===(0.1+0.2));
// console.log(10/3);

// console.log('23'); //print the string 23
// console.log(Number('23')); // print the number 23
// console.log(+'23'); // print the number 23

// console.log('maxvalue: ', Number.MAX_VALUE);
// console.log('positive infinity: ', Number.POSITIVE_INFINITY);
// console.log('min value: ',Number.MIN_VALUE);
// console.log('epsilon: ',Number.EPSILON);
// console.log('max safe integer: ',Number.MAX_SAFE_INTEGER);
// console.log('min safe integer: ',Number.MIN_SAFE_INTEGER);

// console.log("Number.parseInt('30px',10): ", Number.parseInt('30px',10));
// console.log("Number.parseInt('px30',10): ", Number.parseInt('px30',10));
// console.log("Number.parseFloat('10e4')", Number.parseFloat('10e4'));
// console.log("10e4: ", 10e4);
// console.log("Number.parseFloat('2.5rem'): ",Number.parseFloat('2.5rem'));
// console.log("Number.parseInt('2.5rem'): ", Number.parseInt('2.5rem'));
// console.log("Number.isNaN(23): ",Number.isNaN(23));
// console.log("Number.isNaN('23'): ",Number.isNaN('23'));
// console.log("Number.isNaN('zzz'): ",Number.isNaN('zzz'));
// console.log("Number.isNaN(+'zzz'): ",Number.isNaN(+'zzz'));
// console.log("Number.isNaN(23/0): ",Number.isNaN(23/0));//infinity
// console.log("23/0: ",23/0);

// console.log("Number.isFinite(23): ",Number.isFinite(23));
// console.log("Number.isFinite('23'): ",Number.isFinite('23'));
// console.log("Number.isFinite('zzz'): ",Number.isFinite('zzz'));
// console.log("Number.isFinite(+'zzz'): ",Number.isFinite(+'zzz'));
// console.log("Number.isFinite(23/0): ",Number.isFinite(23/0));//infinity

// console.log("Number.isInteger(23): ",Number.isInteger(23));
// console.log("Number.isInteger('23'): ",Number.isInteger('23'));
// console.log("Number.isInteger(23.0): ",Number.isInteger(23.0));
// console.log("Number.isInteger(23.1): ",Number.isInteger(23.1));
// console.log("Number.isInteger(23/0): ",Number.isInteger(23/0));

// console.log(Math.sqrt(25));
// console.log(25**0.5);
// console.log(Math.sqrt(2));
// console.log(Math.max(23,1,60,34,90));
// console.log(Math.max(23,1,60,34,'90'));
// console.log(Math.max(23,1,60,34,'90px'));
// console.log(Math.min(23,1,60,34,90));

// console.log(Math.PI);
// console.log(Math.trunc(Math.random()*6)+1);

// const randomInt = (max,min) => Math.trunc(Math.random()*(max-min)+min);
// console.log(randomInt(6,1));

// console.log(Math.round(17.2));
// console.log(Math.round(17.9));

// console.log(Math.trunc(17.2));
// console.log(Math.trunc(17.9));

// console.log(Math.ceil(17.2));
// console.log(Math.ceil(17.9));

// console.log(Math.floor(17.2));
// console.log(Math.floor(17.9));
// console.log(Math.trunc(-19.9));
// console.log(Math.floor(-19.9));

// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.12345).toFixed(3));
// console.log(+(2.12345).toFixed(3));


// working with dates
// //const now = new Date();
// //console.log(now);
// console.log(new Date('May 28 2022 22:51:43'));
// console.log(new Date('December, 25, 2022'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2022,6,27,14,30,35));
// console.log(new Date(0));
// console.log(new Date(1*24*60*60*1000));

// const future = new Date(new Date(2023,6,27,14,30,35));
// console.log(future.getFullYear());
// console.log(future.getDay());
// console.log(Number(future)); // converts future to miliseconds
// console.log(future);
// console.log(new Date(Number(future)))
// const calcDaysPassed = (date1,date2)=> Math.abs(date2-date1)/(1000*60*60*24);
// console.log(calcDaysPassed(new Date(2023,6,27),new Date(2023,6,29)));

// formating number with the internationalization API
const number = 2987654.32;
const options = {
  //style: 'unit',
  style: 'currency',
  // style: 'percent',
  //unit: 'mile-per-hour'
  // unit: 'celsius',
  // currency: 'brl',
  // currency: 'usd',
  currency: 'gbp',
  //useGrouping: false, //without separators
  useGrouping: true, //with separators
}
console.log('US: '+Intl.NumberFormat('en-US',options).format(number));
console.log('DE: '+Intl.NumberFormat('de-DE',options).format(number));
console.log('BR: '+Intl.NumberFormat('pt-BR',options).format(number));
console.log('navigator: '+Intl.NumberFormat(navigator.language,options).format(number));



