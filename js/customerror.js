// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000); // set duration in brackets    
});

// ERROR BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/background.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})