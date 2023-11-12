const revialList = Array.from(document.querySelectorAll('.reveal'));


const showRevialElements = () => {
    revialList.forEach(item => {
        const { top, bottom } = item.getBoundingClientRect()
        
        if (top < window.innerHeight || bottom > 0)
        {
            item.classList.add('reveal_active');
        }
        if (top > window.innerHeight || bottom < 0)
        {
            item.classList.remove('reveal_active');
        }

    })
}


window.addEventListener("scroll", showRevialElements);