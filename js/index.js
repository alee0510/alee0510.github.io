$( document ).ready(function() {

	// setup command for touch device
	if( 'ontouchstart' in window ){ 
		var click = 'touchstart'; 
	} else { 
		var click = 'click'; 
	};

	// click to open or close burger menu
	$( '.burger' ).on(click, function(){
		if( !$(this).hasClass('open') ){ 
			openMenu();
			$('.screen').parent().css('zIndex', 1);
		}
		else { 
			closeMenu();
			$('.screen').parent().css('zIndex', 0);
		}
	});

	/*$( '.menu ul li a' ).on(click, function(e){
		e.preventDefault();
		closeMenu();
	});*/

	// open and close menu
	function openMenu(){
		
		$( '.burger' ).addClass('open cross');	
		$( '.circle' ).addClass('expand');
		$( '.main li' ).addClass('animate');
		$( '.sub li' ).addClass('animate');
	};

	function closeMenu(){
		$( '.burger' ).removeClass('open cross');
		$( '.circle' ).removeClass('expand');
		$( '.main li' ).removeClass('animate');
		$( '.sub li' ).removeClass('animate');
	};

	// hide navbar when scoll down function
	/*$(function () {
		var lastScrollTop = 0;
		var $navbar = $('nav');
	  
		$(window).scroll(function(event){
		  var st = $(this).scrollTop();
	  
		  if (st == lastScrollTop) {
			$navbar.show();
		  } else{
			$navbar.hide();
		  }
		});
	});*/

	// ripple effects
	$( 'button' ).ripple({
		scaleMode: 'fixed'
	});

	// smooth scoll effect
	/*$( '.btn explore' ).on('click', function(e){
		if (this.hash !== ''){
			e.preventDefault();
			var hash = this.hash;

			$( 'html, body' ).animate({
				scrollTop: $(hash).offset().top
			}, 800, 'easeInOutExpo', function(){
				window.location.hash = hash;
			});
		}
	});*/
	
	// smooth scrool using plugin
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500,
		speedAsDuration: true
	});

	// sub menu scaleOut
	$( '#projects, .fa' ).on('click', function(){
		$( '.sub' ).toggleClass('scaleOut');
		$( '.fa' ).toggleClass('rotate180');
	});

});