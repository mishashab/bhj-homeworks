const slideArrowPrev = document.querySelector('.slider__arrow_prev');
const slideArrowNext= document.querySelector('.slider__arrow_next');

const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));


function changeSlide(nextIindex) {
	item = document.querySelector('.slider__item_active');
	currentIndex = sliderItems.indexOf(item);
	sliderItems[currentIndex].classList.remove('slider__item_active');
	sliderDots[currentIndex].classList.remove('slider__dot_active');
	sliderItems[nextIindex].classList.add('slider__item_active');
	sliderDots[nextIindex].classList.add('slider__dot_active');
}


function prevSlide() {
	item = document.querySelector('.slider__item_active');
	i = sliderItems.indexOf(item);
	console.log(i);
	i -= 1;
	if (i == -1){
		i = sliderItems.length - 1;
	}
	changeSlide(i);
}


function nextSlide() {
	item = document.querySelector('.slider__item_active');
	i = sliderItems.indexOf(item);
	console.log(i);
	i += 1;
	if (i == sliderItems.length){
		i = 0;
	}
	changeSlide(i);
}


document.querySelectorAll('.slider__dot').forEach(item => item.onclick = function() {
	nextIndex = sliderDots.indexOf(item);
	changeSlide(nextIndex);
});

slideArrowPrev.onclick = function() {prevSlide()};
slideArrowNext.onclick = function() {nextSlide()};


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
