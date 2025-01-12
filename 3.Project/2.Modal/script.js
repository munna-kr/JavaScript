// Adding and removing css style

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// Adding css style 'hidden'
const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Removing css style 'hidden'
const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', OpenModal);
}

btnCloseModal.addEventListener('click', CloseModal);

overlay.addEventListener('click', CloseModal);

// keydown event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    CloseModal();
  }
});
