/* $(window).on('scroll', function() {
	$('.cContainer').css({
		'opacity': 1 - $(window).scrollTop() / 700
	});
}); */

$(function(){
	$('.intro_arrow').on('click', function(event){
		event.preventDefault();


		var blockOffset = $('.for-scrollonl').offset().top;
		$('html, body').animate({
			scrollTop: blockOffset
		});
	});




});