const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.querySelectorAll('.modal__close_times');
const btnSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

modalClose.forEach(item => item.onclick = function() {
      modalMain.classList.remove('modal_active');
      modalSuccess.classList.remove('modal_active');
  });


btnSuccess.onclick = function() {
    btnSuccess.classList.remove('modal_active')
    modalSuccess.classList.add('modal_active');
  };
