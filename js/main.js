$(document).ready(function() {
	var $topHeader = $('.top-header');
	var $header= $('#header');
	var $parent_content= $('.parent-content');
	

	// function to show and hide top header if scroll the page
	$(window).scroll(function(){
        if ($(document).scrollTop() > 1){
            $topHeader.slideUp(400);
            $header.addClass('fixed-top');
        } else {
            $topHeader.slideDown(500);
            $header.removeClass('fixed-top');
        }
    });
  	$parent_content.mouseenter(function(){
   		$(this).find('.after').fadeIn(350);
   	});
   	$parent_content.mouseleave(function(){
   		$(this).find('.after').fadeOut(350);
   	});

// $('.center').slick({
// 	  centerMode: true,
// 	  centerPadding: '60px',
// 	  slidesToShow: 2,
// 	  responsive: [
// 	    {
// 	      breakpoint: 768,
// 	      settings: {
// 	        arrows: false,
// 	        centerMode: true,
// 	        centerPadding: '40px',
// 	        slidesToShow: 2
// 	      }
// 	    },
// 	    {
// 	      breakpoint: 480,
// 	      settings: {
// 	        arrows: false,
// 	        centerMode: true,
// 	        centerPadding: '40px',
// 	        slidesToShow: 1
// 	      }
// 	    }
// 	  ]
// 	});	
});
