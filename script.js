const swiper = new Swiper(".swiper-slider", {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
	
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let body = document.body;

// Обработчик клика по кнопке меню
menuBtn.addEventListener('click', function(event) {
  event.stopPropagation(); // Остановить всплытие события, чтобы оно не добралось до документа

  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  
  body.classList.toggle('no-scroll', menu.classList.contains('active'));
});

// Обработчик клика по документу
document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    // Клик был сделан вне menu и menuBtn, скрываем menu
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('no-scroll');
  }
});

// Обработчик клика для закрытия меню при нажатии на ссылки внутри меню (если необходимо)
menu.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('no-scroll');
  }
});







