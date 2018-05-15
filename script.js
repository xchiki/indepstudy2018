$(document).ready(function() {
	// classes collapse
    $('.triangle').click(function() {
        $(this).parent().siblings('.dropdown').slideToggle('active');
        
        if ($(this).hasClass('leftfacing')) {
           $(this).css({
            '-moz-transform':'rotate(-90deg)',
            '-webkit-transform':'rotate(-90deg)',
            '-o-transform':'rotate(-90deg)',
            '-ms-transform':'rotate(-90deg)',
            'transform':'rotate(-90deg)'
            }); 
        } else {
            $(this).css({
                '-moz-transform':'rotate(0deg)',
                '-webkit-transform':'rotate(0deg)',
                '-o-transform':'rotate(0deg)',
                '-ms-transform':'rotate(0deg)',
                'transform':'rotate(0deg)'
            });
        } 
        
        $(this).toggleClass('leftfacing');
    });
    
	// modal close
    $('.close').click(function() {
       window.location.href = "atbrown.html"; 
    });
	
	// index smooth scroll
	$( "#down_arrow" ).click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1000);
	});
});