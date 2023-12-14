function PersonSlider(gridSelector, nameSelector, copySelector, peopleSelector, slidersSelector, sliderIndexes, controlPrevSelector, controlNextSelector) {
	this.grid = document.querySelector(gridSelector);
	this.sliderNames = document.querySelectorAll(nameSelector);
	this.copy = Array.from(this.grid.querySelectorAll(copySelector));
	this.people = Array.from(this.grid.querySelectorAll(peopleSelector));
	this.sliders = Array.from(document.querySelectorAll(slidersSelector));
	this.sliderIndexes = Array.from(document.querySelectorAll(sliderIndexes));
	this.controlPrev = document.querySelector(controlPrevSelector);
	this.controlNext = document.querySelector(controlNextSelector);
	this.currentIndex = 0;

	this.init = function () {
			this.setListeners();
	};

	this.setListeners = function () {
			var self = this;
			this.controlPrev.addEventListener('click', function () {
					self.handlePrev();
			});
			this.controlNext.addEventListener('click', function () {
					self.handleNext();
			});
	};

	this.handlePrev = function () {
			this.currentIndex--;
			if (this.currentIndex < 0) {
					this.currentIndex = this.people.length - 1;
			}
			this.setActiveClass();
	};

	this.handleNext = function () {
			this.currentIndex++;
			if (this.currentIndex > this.people.length - 1) {
					this.currentIndex = 0;
			}
			this.setActiveClass();
	};

	this.setActiveClass = function () {
			var self = this;
			this.sliderNames.forEach(function (name, i) {
					name.classList.toggle('active', i === self.currentIndex);
			});
			this.copy.forEach(function (pTag, i) {
					pTag.classList.toggle('active', i === self.currentIndex);
			});
			this.people.forEach(function (person, i) {
					person.classList.toggle('active', i === self.currentIndex);
			});
			this.sliders.forEach(function (slide, i) {
					slide.classList.toggle('active', i === self.currentIndex);
			});
			this.sliderIndexes.forEach(function (slideIndex, i) {
					slideIndex.classList.toggle('active', i === self.currentIndex);
			});
	};
}

function ImageSlider(parent, slidesSelector, currentImageNumElSelector, totalImageNumElSelector, controlPrevSelector, controlNextSelector) {
	this.slides = Array.from(parent.querySelectorAll(slidesSelector));
	this.currentImageNumEl = parent.querySelector(currentImageNumElSelector);
	this.totalImageNumEl = parent.querySelector(totalImageNumElSelector);
	this.controlPrev = parent.querySelector(controlPrevSelector);
	this.controlNext = parent.querySelector(controlNextSelector);
	this.currentIndex = 0;
	this.totalImageNum = this.slides.length;

	this.init = function () {
			this.setTotalPageNum();
			this.setListeners();
	};

	this.setListeners = function () {
			var self = this;
			this.controlPrev.addEventListener('click', function () {
					self.handlePrev();
			});
			this.controlNext.addEventListener('click', function () {
					self.handleNext();
			});
	};

	this.handlePrev = function () {
			this.currentIndex--;
			if (this.currentIndex < 0) {
					this.currentIndex = this.slides.length - 1;
			}
			this.setActiveClass();
			this.setCurrentImageNum();
	};

	this.handleNext = function () {
			this.currentIndex++;
			if (this.currentIndex > this.slides.length - 1) {
					this.currentIndex = 0;
			}
			this.setActiveClass();
			this.setCurrentImageNum();
	};

	this.setActiveClass = function () {
			var self = this;
			this.slides.forEach(function (slide, i) {
					slide.classList.toggle('active', i === self.currentIndex);
			});
	};

	this.setCurrentImageNum = function () {
			this.currentImageNumEl.innerHTML = this.currentIndex + 1;
	};

	this.setTotalPageNum = function () {
			this.totalImageNumEl.innerHTML = this.totalImageNum;
	};
}

var personSliderInstance = new PersonSlider(
	'.portfolio-slider__left-cont__grid',
	'.portfolio-slider__left-cont__name-cont__name span',
	'.portfolio-slider__left-cont__grid__copy p',
	'.js-person',
	'.portfolio-slider__image-slider-cont__slider',
	'.portfolio-slider__image-slider-cont__controls-cont__index',
	'.portfolio-slider__left-cont__name-cont__controls__prev',
	'.portfolio-slider__left-cont__name-cont__controls__next'
);

personSliderInstance.init();

var imageSliders = document.querySelectorAll('.portfolio-slider__image-slider-cont__slider');

Array.from(imageSliders).forEach(function (slider) {
	slider = new ImageSlider(
			slider,
			'.js-slide',
			'.js-current-image-num',
			'.js-total-image-num',
			'.portfolio-slider__image-slider-cont__slider__controls-cont__prev',
			'.portfolio-slider__image-slider-cont__slider__controls-cont__next'
	);
	slider.init();
});
