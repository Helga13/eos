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
	
	$('.js-dropdown').on('click', function(){
		$(this).toggleClass('visible').next('.additional_options__content').slideToggle();
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
		$('input#minPrice').val($('.js-sliderPrice').slider("values",0));
		$('input#maxPrice').val($('.js-sliderPrice').slider("values",1));
		
    },
    slide: function(event, ui){
		$('input#minPrice').val($('.js-sliderPrice').slider("values",0));
		$('input#maxPrice').val($('.js-sliderPrice').slider("values",1));
    }
});

$('input#minPrice').change(function(){

	var value1=$('input#minPrice').val();
	var value2=$('input#maxPrice').val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$('input#minPrice').val(value1);
	}
	$('.js-sliderPrice').slider("values",0,value1);	
});
	
$('input#maxPrice').change(function(){
		
	var value1=$('input#minPrice').val();
	var value2=$('input#maxPrice').val();
	
	if (value2 > 40) { value2 = 40; $('input#maxPrice').val(40)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$('input#maxPrice').val(value2);
	}
	$('.js-sliderPrice').slider("values",1,value2);
});
	
	// slider price
	
	$('.js-sliderCost').slider({
	min: 190,
	max: 2000,
	values: [210,1500],
	range: true,
	step: 10,
	stop: function(event, ui) {
		$('input#minCost').val($('.js-sliderCost').slider("values",0));
		$('input#maxCost').val($('.js-sliderCost').slider("values",1));
		
    },
    slide: function(event, ui){
		$('input#minCost').val($('.js-sliderCost').slider("values",0));
		$('input#maxCost').val($('.js-sliderCost').slider("values",1));
    }
});

$('input#minCost').change(function(){

	var value1=$('input#minCost').val();
	var value2=$('input#maxCost').val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$('input#minCost').val(value1);
	}
	$('.js-sliderCost').slider("values",0,value1);	
});
	
$('input#maxCost').change(function(){
		
	var value1=$('input#minCost').val();
	var value2=$('input#maxCost').val();
	
	if (value2 > 40) { value2 = 40; $('input#maxCost').val(40)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$('input#maxCost').val(value2);
	}
	$('.js-sliderCost').slider("values",1,value2);
});

	// slider weight
	
	$('.js-sliderWeight').slider({
	min: 3,
	max: 25,
	values: [6,20],
	range: true,
	step: 1,
	stop: function(event, ui) {
		$('input#minWeight').val($('.js-sliderWeight').slider("values",0));
		$('input#maxWeight').val($('.js-sliderWeight').slider("values",1));
		
    },
    slide: function(event, ui){
		$('input#minWeight').val($('.js-sliderWeight').slider("values",0));
		$('input#maxWeight').val($('.js-sliderWeight').slider("values",1));
    }
});

$('input#minWeight').change(function(){

	var value1=$('input#minWeight').val();
	var value2=$('input#maxWeight').val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$('input#minWeight').val(value1);
	}
	$('.js-sliderWeight').slider("values",0,value1);	
});
	
$('input#maxWeight').change(function(){
		
	var value1=$('input#minWeight').val();
	var value2=$('input#maxWeight').val();
	
	if (value2 > 40) { value2 = 40; $('input#maxWeight').val(40)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$('input#maxWeight').val(value2);
	}
	$('.js-sliderWeight').slider("values",1,value2);
});
	
	// slider height
	
	$('.js-sliderHeight').slider({
	min: 0,
	max: 40,
	values: [10,30],
	range: true,
	step: 1,
	stop: function(event, ui) {
		$('input#minHeight').val($('.js-sliderHeight').slider("values",0));
		$('input#maxHeight').val($('.js-sliderHeight').slider("values",1));
		
    },
    slide: function(event, ui){
		$('input#minHeight').val($('.js-sliderHeight').slider("values",0));
		$('input#maxHeight').val($('.js-sliderHeight').slider("values",1));
    }
});

$('input#minHeight').change(function(){

	var value1=$('input#minHeight').val();
	var value2=$('input#maxHeight').val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$('input#minHeight').val(value1);
	}
	$('.js-sliderHeight').slider("values",0,value1);	
});
	
$('input#maxHeight').change(function(){
		
	var value1=$('input#minHeight').val();
	var value2=$('input#maxHeight').val();
	
	if (value2 > 40) { value2 = 40; $('input#maxHeight').val(40)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$('input#maxHeight').val(value2);
	}
	$('.js-sliderWeight').slider("values",1,value2);
});

// фильтрация ввода в поля
	$('.input_small').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});
	
	// height left_col
	
//	var blockHeight = $('.left_col_wrap').height();
//	$('.left_col__inner').css('height',blockHeight - 88);

	// quantity

	(function(){
		
		$('.quantity').on('click','button',function(){
			var data = $(this).data('direction'),
				i = $(this).parent().children('input[type="text"]'),
				val = i.val();
			if(data == "up"){
				val++;
				i.val(val);
			}else if(data == "down"){
				if(val == 1) return;
				val--;
				i.val(val);
			}
		});

	})();
	
	// delete basket
	
	$('.del').on('click', function(e){
		e.preventDefault();
		$(this).parents('.table_row').remove();
	});
	
	// registered_block
	
	$('.js-reg').on('click', function(e){
		e.preventDefault();
		$(this).next().slideToggle(100);
	});
	
	//popup
	
	$('.js-btn_popup').click(function (e) {
        e.preventDefault();
        var DataId = $(this).attr('data-id');
        if (typeof DataId == "string") {
        	$('#'+DataId).css('display', 'block');
        	$('body').css('overflow', 'hidden');  
        }
    });
    $('.popup').click(function (e) {
        e = event || window.event
        if (e.target == this) {
            $(this).css('display', 'none');
            $('body').css('overflow', 'auto'); 
        }
    });
	$('.popup_close').click(function (e) {
         e.preventDefault();
           $(this).parents('.popup').css('display', 'none');
           $('body').css('overflow', 'auto'); 
    });
    $('.popup .popup_content').click(function(e) {
		e.stopPropagation();
	}); 
	
	// tooltip
	
	 $('.js-tooltip').mousemove(function (e) {
    var tooltip = $(this).next('.tooltip');
      $(tooltip).css({ 
                        "top" : e.pageY+5,
                        "left" : e.pageX+5
                     })
                     .show();

    }).mouseout(function () {
		 var tooltip = $(this).next('.tooltip');
      $(tooltip).hide().css({
                        "top" : 0,
                        "left" : 0
                    });
    });
	
	
});

// sticky

(function(){
var a = document.querySelector('#fixblock'), b = null, P = 0;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
  if ((Ra.top - P) <= 0) {
    if ((Ra.top - P) <= R) {
      b.className = 'stop';
      b.style.top = - R +'px';
    } else {
      b.className = 'sticky';
      b.style.top = P + 'px';
    }
  } else {
    b.className = '';
    b.style.top = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
})();

(function(){
var a = document.querySelector('#fixblock1'), b = null, P = 0;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
  if ((Ra.top - P) <= 0) {
    if ((Ra.top - P) <= R) {
      b.className = 'stop';
      b.style.top = - R +'px';
    } else {
      b.className = 'sticky';
      b.style.top = P + 'px';
    }
  } else {
    b.className = '';
    b.style.top = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
})();