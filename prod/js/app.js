$(document).ready(function () {
	'use strict';
	
	// tabs
	
	$('.tabs_block').each(function() {
    $(this).find('.tab').each(function(i) {
      $(this).on('click', function(e){
       e.preventDefault(); 	$(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active')
      });
    });
  });
	
	$('.js-dropdown').on('click', function(e){
		e.preventDefault();
		$(this).next('.nav_link__dropdown').slideToggle('visible');
	});
	
	// slider
	
	$('.main_slider').slick({
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true
	});
	
	$('.info_slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1
	});
	
	
	$('.info_slider').on('setPosition', function () {
    $(this).find('.slick-slide').height('auto');
    var slickTrack = $(this).find('.slick-track');
    var slickTrackHeight = $(slickTrack).height();
    $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
   });
	
	// sticky
	
	
	
});