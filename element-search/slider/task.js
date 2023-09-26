const slideArrowPrev = document.querySelector('.slider__arrow_prev');
const slideArrowNext= document.querySelector('.slider__arrow_next');

const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

let i = 0;
let maxItem = sliderItems.length - 1;


function prevSlide() {
	sliderItems[i].classList.remove('slider__item_active');
	sliderDots[i].classList.remove('slider__dot_active');
	i -= 1;
	if (i == -1){
		i = maxItem;
	}
	sliderItems[i].classList.add('slider__item_active');
	sliderDots[i].classList.add('slider__dot_active');
};

function nextSlide() {
	sliderItems[i].classList.remove('slider__item_active');
	sliderDots[i].classList.remove('slider__dot_active');
	i += 1;
	if (i > maxItem){
		i = 0;
	}
	sliderItems[i].classList.add('slider__item_active');
	sliderDots[i].classList.add('slider__dot_active');
};

const sliderPrev= Array.from(document.querySelector('.slider__arrow_prev'));
const sliderNext = Array.from(document.querySelector('.slider__arrow_next'));
	
window.addEventListener("keydown", function (event) {
	switch(event.key) {
		case "ArrowLeft":
			prevSlide();
			return;
		case "ArrowRight":
			nextSlide();
			return;
		default:
			return;
	}
});

document.querySelectorAll('.slider__dot').forEach(item => item.onclick = function() {
	document.querySelectorAll('.slider__item').forEach((element) => {element.classList.remove('slider__item_active');});
	document.querySelectorAll('.slider__dot').forEach((element) => {element.classList.remove('slider__dot_active');});
	index = sliderDots.indexOf(item);
	sliderItems[index].classList.add('slider__item_active');
	sliderDots[index].classList.add('slider__dot_active');
});
