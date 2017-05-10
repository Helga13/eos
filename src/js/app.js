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

$('.js-sliderTime').slider({
	min: 8,
	max: 19,
	values: [9,18],
	range: true,
	step: 1,
	stop: function(event, ui) {
		$('input#minTime').val($('.js-sliderTime').slider("values",0));
		$('input#maxTime').val($('.js-sliderTime').slider("values",1));
		
    },
    slide: function(event, ui){
		$('input#minTime').val($('.js-sliderTime').slider("values",0));
		$('input#maxTime').val($('.js-sliderTime').slider("values",1));
    }
});

$('input#minTime').change(function(){

	var value1=$('input#minTime').val();
	var value2=$('input#maxTime').val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$('input#minTime').val(value1);
	}
	$('.js-sliderTime').slider("values",0,value1);	
});

	
$('input#maxTime').change(function(){
		
	var value1=$('input#minTime').val();
	var value2=$('input#maxTime').val();
	
	if (value2 > 19) { value2 = 19; $('input#maxTime').val(19)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$('input#maxTime').val(value2);
	}
	$('.js-sliderTime').slider("values",1,value2);
});
	
	// slider delivery price
	
	$('.js-sliderPrice').slider({
	min: 0,
	max: 40,
	values: [10,30],
	range: true,
	step: 1,
	stop: function(event, ui) {
		$('input#minCost').val($('.js-sliderPrice').slider("values",0));
		$('input#maxCost').val($('.js-sliderPrice').slider("values",1));
		
    },
    slide: function(event, ui){
		$('input#minCost').val($('.js-sliderPrice').slider("values",0));
		$('input#maxCost').val($('.js-sliderPrice').slider("values",1));
    }
});

jQuery('input#minCost').change(function(){

	var value1=$('input#minCost').val();
	var value2=$('input#maxCost').val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$('input#minCost').val(value1);
	}
	$('.js-sliderPrice').slider("values",0,value1);	
});

	
$('input#maxCost').change(function(){
		
	var value1=$('input#minCost').val();
	var value2=$('input#maxCost').val();
	
	if (value2 > 40) { value2 = 40; $('input#maxCost').val(40)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$('input#maxCost').val(value2);
	}
	$('.js-sliderPrice').slider("values",1,value2);
});


// фильтрация ввода в поля
	$('input').keypress(function(event){
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

