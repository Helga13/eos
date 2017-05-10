$(document).ready(function () {
	'use strict';
	
	$('.disabled').on('click', function(e){
		e.preventDefault();
	});
	
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
	
	// select
	
  $('.js-select').select2({
		minimumResultsForSearch: Infinity
	});
	
	// slider times

jQuery('.js-sliderTime').slider({
	min: 8,
	max: 19,
	values: [9,18],
	range: true,
	step: 1,
	stop: function(event, ui) {
		jQuery('input#minTime').val(jQuery('.js-sliderTime').slider("values",0));
		jQuery('input#maxTime').val(jQuery('.js-sliderTime').slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery('input#minTime').val(jQuery('.js-sliderTime').slider("values",0));
		jQuery('input#maxTime').val(jQuery('.js-sliderTime').slider("values",1));
    }
});

jQuery('input#minTime').change(function(){

	var value1=jQuery('input#minTime').val();
	var value2=jQuery('input#maxTime').val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery('input#minTime').val(value1);
	}
	jQuery('.js-sliderTime').slider("values",0,value1);	
});

	
jQuery('input#maxTime').change(function(){
		
	var value1=jQuery('input#minTime').val();
	var value2=jQuery('input#maxTime').val();
	
	if (value2 > 19) { value2 = 19; jQuery('input#maxTime').val(19)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery('input#maxTime').val(value2);
	}
	jQuery('.js-sliderTime').slider("values",1,value2);
});
	
	// slider delivery price
	
	jQuery('.js-sliderPrice').slider({
	min: 0,
	max: 40,
	values: [10,30],
	range: true,
	step: 1,
	stop: function(event, ui) {
		jQuery('input#minCost').val(jQuery('.js-sliderPrice').slider("values",0));
		jQuery('input#maxCost').val(jQuery('.js-sliderPrice').slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery('input#minCost').val(jQuery('.js-sliderPrice').slider("values",0));
		jQuery('input#maxCost').val(jQuery('.js-sliderPrice').slider("values",1));
    }
});

jQuery('input#minCost').change(function(){

	var value1=jQuery('input#minCost').val();
	var value2=jQuery('input#maxCost').val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery('input#minCost').val(value1);
	}
	jQuery('.js-sliderPrice').slider("values",0,value1);	
});

	
jQuery('input#maxCost').change(function(){
		
	var value1=jQuery('input#minCost').val();
	var value2=jQuery('input#maxCost').val();
	
	if (value2 > 19) { value2 = 19; jQuery('input#maxCost').val(19)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery('input#maxCost').val(value2);
	}
	jQuery('.js-sliderPrice').slider("values",1,value2);
});


// фильтрация ввода в поля
	jQuery('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});
	
	
	// height left_col
	
	var blockHeight = $('.left_col_wrap').height();
	$('.left_col__inner').css('height',blockHeight - 88);

	
	
	
	// sticky
	
	
	
});