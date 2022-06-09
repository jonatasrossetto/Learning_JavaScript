'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault(); // prevent default behavior of clicking the button and the page move to its top because of the href=# link in the html code
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// this creates an event listener to all buttons in the list btnsOpenModal
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//////////////////////////////////

//Selecting Elements
// console.log(document.documentElement); // return the whole html document
// console.log(document.head); // return the head section of the html document
// console.log(document.body); // return the body section of the html document

const header = document.querySelector('.header'); // selects the header section
// const allSections = document.querySelectorAll('.section'); // return a node list with all sections
// console.log(allSections);

// console.log(document.getElementById('section--1')); // returns only the section--1 element
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));


//Create and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improve functionality and analytics.';
message.innerHTML = 'We use cookies for improve functionality and analytics. <button class="btn btn--close-cookie">Got it!"</button>';
// header.prepend(message);
// header.append(message.cloneNode(true));
//header.append(message);
//  header.before(message);
header.after(message);
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove();
})

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height,10)+40+'px';

//document.documentElement.style.setProperty('--color-primary','orangered');

const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// console.log(logo.className);

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// const link1 = document.querySelector('.nav__link--btn');
// console.log(link1.href);
// console.log(link1.getAttribute('href'));

// console.log(logo.dataset.versionNumber);

// //Classes
// logo.classList.add('c', 'j');
// console.log(logo.className);
// logo.classList.remove('c');
// console.log(logo.className);
// logo.classList.toggle('c');
// console.log(logo.className);
// logo.classList.contains('c');
// console.log(logo.className);

//btn--scroll-to
//section--1

const btnScrollTo = document.querySelector('.btn--scroll-to');
console.log(btnScrollTo);
const section1 = document.querySelector('#section--1'); //uses # because it is an id
console.log(section1);

btnScrollTo.addEventListener('click', function(e){
  //e.preventDefault();
  //getting coordinates for the section--1
  const section1coordinates = section1.getBoundingClientRect();
  console.log(section1coordinates);
  //console.log(e.target.getBoundingClientRect());
  console.log('x/y:',
    window.pageXOffset,
    window.pageYOffset);
  console.log('viewport:',
    document.documentElement.clientWidth,
    document.documentElement.clientHeight);
                
  // window.scrollTo(section1coordinates.left+window.pageXOffset,
  //  section1coordinates.top+window.pageYOffset);

  // window.scrollTo({
  //   left: section1coordinates.left+window.pageXOffset,
  //   top: section1coordinates.top+window.pageYOffset,
  //   behavior:'smooth',
  // });

  section1.scrollIntoView({behavior:'smooth'}); // works on modern browsers

})