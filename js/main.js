$(function() {
	var pagetop = $('.pagetop');
	// $('.menu-show').addEventListener('touchmove', function(e) {
 //      	e.preventDefault();
	// }, false);

	$('.mainvisual .slick').slick({
      dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
    });

    $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  //centerMode: true,
	  variableWidth: true,
	  focusOnSelect: true,
	   responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        centerMode: true
	      }
	    }
	  ]
	});

	$(window).on('load scroll', function() {
		var value = $(this).scrollTop();
		if ( value > 150 ) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});

	$('a[href*=\\#]:not([href=\\#])').not('.inline').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('.search-cat p').click(function(event) {
		$(this).toggleClass('show').next('ul').slideToggle();
	});

	$('.btn__menu').click(function(event) {
		$(this).toggleClass('open').closest('.container').next('.gnav').toggleClass('open');
		$('body').toggleClass('menu-show');
	});

	$('.filter dt').click(function(event) {
		$(this).toggleClass('open').next('dd').slideToggle();
	});

	$(window).on('load resize', function(event) {
		var vw = $(window).width();
		if (vw < 767) {
			$('.gnav > ul > li > a.hasChild').click(function(e) {
				e.preventDefault();
				$(this).next('.submenu').addClass('show');
			});
		}
	});

	$('.menu-back').click(function(event) {
		$(this).closest('.submenu').removeClass('show');
	});

	$('.quality .plus').click(function(event) {
		var x = parseInt($(this).prev('input').val()) + 1;
		$(this).prev('input').val(x);
	});
	$('.quality .mins').click(function(event) {
		var x = parseInt($(this).next('input').val()) - 1;
		$(this).next('input').val(x);
	});

	$('.successful .overlay').click(function(event) {
		$(this).closest('.successful').addClass('hidden');
	});

	var cboxOptions = {
	  width: '100%',
	  maxWidth: '612px',
	  inline:true
	}
	$(".inline").colorbox({
		width: '100%',
		maxWidth: '612px',
		inline:true
	});

	$(window).resize(function(){
	    $.colorbox.resize({
	      width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
	    });
	});

});

(function ($, window, document, undefined) {
	// $.colorbox.settings.onLoad = function() {
	// 	colorboxResize();
	// }

	var colorboxResize = function(resize) {
		var width = "100%";

		$(window).on('load resize', function(event) {
			var vw = $(window).width();
			if (vw < 767) {
				width = "100%";
			}else{
				width = "612px";
			}
		});
		$.colorbox.settings.width = width;

		if(resize) {
			$.colorbox.resize({
				'width': width
			});
		}
	}

	$(window).resize(function() {
		colorboxResize(true);
	});

})(jQuery, this, this.document);