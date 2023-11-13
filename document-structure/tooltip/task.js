document.querySelectorAll('.has-tooltip').forEach(item => 
    item.addEventListener('click', (event) => {
        flag = item.childNodes.length === 1
        event.preventDefault()

        if (document.querySelector('.tooltip_active')) {
            document.querySelector('.tooltip_active').remove()
        }

        if (flag){
        const toolTip = document.createElement('div')
        toolTip.classList.add('tooltip');
        toolTip.textContent = item.title
        toolTip.classList.add('tooltip_active')
        console.log(toolTip)

        toolTip.style.left = `${item.getBoundingClientRect().left}px`;
        toolTip.style.top = `${item.getBoundingClientRect().bottom}px`;
        item.insertAdjacentElement("afterbegin", toolTip);
        }
    })
)


const cloleTooltips = () => {
    item = document.querySelector('.tooltip_active')
    if (item) {
        const { top, bottom } = item.getBoundingClientRect()
        
        if (top > window.innerHeight || bottom < 0){
            item.remove();
        } 
        else {
            itemParent = item.parentElement
            item.style.left = `${itemParent.getBoundingClientRect().left}px`
            item.style.top = `${itemParent.getBoundingClientRect().bottom}px`
        }
    }
}

window.addEventListener("scroll", cloleTooltips);