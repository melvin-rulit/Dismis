// owl.carousel.js
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		autoplay :true,
		loop :true
	});
  });

	/*------------------
		Brands Slider
	--------------------*/
	$('.product-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin : 30,
		autoplay: true,
		navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			768 : {
				items: 3,
			},
			1200 : {
				items: 4,
			}
		}
	});
    
    
// const Fuck = document.querySelector('.Fuck');
// Fuck.style.width = '150px';
// Fuck.style.height = '150px';
// console.log(Fuck.style);
// Fuck.classList.add('korn');
// // Fuck.classList.remove('korn');


  const toogle = document.querySelector('.toggle');
  toogle.onclick = function(){
     this.classList.toggle('korn');
  }

