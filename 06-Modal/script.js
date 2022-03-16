'use strict';

const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const overlay = document.querySelector('.overlay');
const btnCloseModal1 = document.querySelector('.close-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal1 = function () {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log('close modal 1');
};

const closeModal2 = function () {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log('close modal 2');
};

const closeOverlay = function () {
  modal1.classList.add('hidden');
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log('close overlay and modal');
};

const openModal1 = function () {
  console.log('button 1 clicked');
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openModal2 = function () {
  console.log('button 2 clicked');
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

console.log(btnsShowModal);

//for (let i = 0; i < btnsShowModal.length; i++) {
//btnsShowModal[i].addEventListener('click', function () {
//console.log('button clicked');
//})};

overlay.addEventListener('click', closeOverlay);

btnCloseModal1.addEventListener('click', closeModal1);
btnCloseModal2.addEventListener('click', closeModal2);

btnsShowModal[0].addEventListener('click', openModal1);
btnsShowModal[1].addEventListener('click', openModal2);
btnsShowModal[2].addEventListener('click', function () {
  console.log('button 3 clicked');
});

document.addEventListener('keydown', function (e) {
  console.log('A key was pressed');
  console.log(e.key);
  console.log('modal1 is hidden?', modal1.classList.contains('hidden'));
  console.log('modal2 is hidden?', modal2.classList.contains('hidden'));
  if (e.key === 'Escape') {
    closeModal1();
    closeModal2();
    closeOverlay();
  }
});
