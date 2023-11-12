document.querySelectorAll('.font-size').forEach(item => 
    item.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active')
        document.querySelector('.book__content').classList.remove('font-size_small', 'font-size_big')
        if (item.classList[1]) {
            document.querySelector('.book__content').classList.add(item.classList[1])
        }
        item.classList.add('font-size_active')
    })
);
