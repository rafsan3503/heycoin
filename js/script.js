$(document).ready(function(){
	$('.menu__button>a').on("click" ,function(e){
		if ($(this).hasClass('active')) {
			$(this).removeClass("active");
			$('body,html').css("overflow-y" ,"initial");
			$('header .outer__header ul').css("top" ,"-100%");
		} else {
			$(this).addClass("active");
			$('header .outer__header ul').css("top" ,"0px");
			$('body,html').css("overflow-y" ,"hidden");
		}
	});

	$('.scrollable__link').on("click" ,function(e){
		e.preventDefault();
		$('body,html').css("overflow-y" ,"initial");
		$('header .outer__header ul').css("top" ,"-100%");
		$('.menu__button>a').removeClass('active');
		let currScroll = $(this).attr("data-scroll");
		 $('html').animate({ 
    	    scrollTop: $(currScroll).offset().top // прокручиваем страницу к требуемому элементу
        }, 900
        );
	});
});