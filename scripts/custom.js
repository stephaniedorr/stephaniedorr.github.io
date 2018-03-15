


$(document).ready(function () {

var scrollLink = $('.slide-section');

//smooth scrolling
scrollLink.click(function(e) {
	e.preventDefault();
	$('body,html').animate({
		scrollTop: $(this.hash).offset().top - 130
	}, 2000)
});

var toTop = $('.slide-top');

toTop.click(function(e){
	e.preventDefault();
	$('body,html').animate ({
		scrollTop : 0
	}, 2000);
});

});




















































