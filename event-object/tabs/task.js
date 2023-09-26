document.querySelectorAll('.tab').forEach(item => 
    item.addEventListener('click', (event) => {
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');
        document.querySelector('.tab_active').classList.remove('tab_active');

        index = Array.from(document.querySelectorAll('.tab')).indexOf(item);
        
        document.querySelectorAll('.tab')[index].classList.toggle('tab_active');
        document.querySelectorAll('.tab__content')[index].classList.toggle(
            'tab__content_active');
    })
)