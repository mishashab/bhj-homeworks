actionElements = document.querySelectorAll('.has-tooltip');

actionElements.forEach(item => 
    item.addEventListener('click', (event) => {
	let hasToolTip = false;
	if(document.querySelector('.tooltip_active') && 
		document.querySelector('.tooltip_active').textContent == item.title){
		hasToolTip = true;
	}
		
        event.preventDefault();

        if (document.querySelector('.tooltip_active')) {
            document.querySelector('.tooltip_active').remove();
        }

        if (!hasToolTip){
        const toolTip = document.createElement('div');
        toolTip.classList.add('tooltip');
        toolTip.textContent = item.title;
        toolTip.classList.add('tooltip_active');

        toolTip.style.left = `${item.getBoundingClientRect().left}px`;
        toolTip.style.top = `${item.getBoundingClientRect().bottom}px`;
        item.insertAdjacentElement("afterend", toolTip);
        }
    })
)


const moveToolTips = () => {
    const item = document.querySelector('.tooltip_active');
    if (item) {
        const { top, bottom } = item.getBoundingClientRect();
		
        if (top > window.innerHeight || bottom < 0){
            item.remove();
        } 
        else {
	    const itemParent = document.querySelector(`[title="${item.textContent}"]`);
            item.style.left = `${itemParent.getBoundingClientRect().left}px`;
            item.style.top = `${itemParent.getBoundingClientRect().bottom}px`;
        }
    }
}

window.addEventListener("scroll", moveToolTips);
