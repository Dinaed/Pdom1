//бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
	iconMenu.addEventListener('click', function(event){
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

//slider

const swiper = new Swiper('.swiper', {
	pagination: {
	  el: '.swiper-pagination',
	  type: 'bullets',
	  clickable: true
	},
	autoplay: {
		delay: 5000,
	  }
  });
  