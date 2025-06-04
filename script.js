const prevSlider = new Swiper('.triple-slider .slider-prev', {
	loop: true,
	speed: 600,
	parallax: true,
	allowTouchMove: false,
});

const nextSlider = new Swiper('.triple-slider .slider-next', {
	loop: true,
	speed: 600,
	parallax: true,
	allowTouchMove: false,
});

const centerSlider = new Swiper('.triple-slider .slider-center', {
	loop: true,
	speed: 600,
	parallax: true,
	controller: {
		control: [prevSlider, nextSlider]
	},
	grabCursor: true,
});

prevSlider.on('click', () => {
	centerSlider.slidePrev();
});

nextSlider.on('click', () => {
	centerSlider.slideNext();
});