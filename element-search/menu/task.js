const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach(item => item.onclick = function(event) {
    const parentItem = this.closest('.menu__item');
    console.log(parentItem)
    const menuSubs = parentItem.querySelector('.menu_sub');
    if (menuSubs) {
        event.preventDefault();
        menuSubs.classList.toggle('menu_active');
    }
});
