;
$(document).ready(function () {
  // parallax block
  $('.main-parallax').parallax({imageSrc: 'images/background-fullsize-min.jpg'});
  // end parallax block

  // mobile menu on load page
  if ($(window).width() <= 960) {
  	$('.header').addClass('mobile-header');
  } else {
  	$('.header').removeClass('mobile-header');
  }

  //show-hide mobile-menu
  $('.burger').click(function(){
  	$('.mobile-header .navigation').slideToggle();
  	$(this).toggleClass('close-menu');
  });
});

// mobile-menu
$(window).resize(function(){
  if ($(window).width() <= 960) {
  	$('.header').addClass('mobile-header');
  	$('.navigation').css('display', 'none')
  } else {
  	$('.header').removeClass('mobile-header');
  	$('.navigation').css('display', 'flex')
  }
});
// end-mobile-menu