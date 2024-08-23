/*
 * Copyright (c) 2024 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	tramp_tm_modalbox();
	tramp_tm_text_hover_effect();
	tramp_tm_page_transition();
	tramp_tm_trigger_menu();
	tramp_tm_modalbox_news();
	tramp_tm_modalbox_portfolio();
	tramp_tm_progress();
	tramp_tm_portfolio();
	tramp_tm_cursor();
	tramp_tm_imgtosvg();
	tramp_tm_popup();
	tramp_tm_data_images();
	tramp_tm_owl_carousel();
	tramp_tm_section_top();
	
	jQuery(window).load('body', function(){
		tramp_tm_my_load();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------   MODALBOX    ------------------
// -----------------------------------------------------

function tramp_tm_modalbox(){
	"use strict";
	
	jQuery('.tramp_tm_all_wrap').prepend('<div class="tramp_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}

// -----------------------------------------------------
// -------------    TEXT HOVER EFFECT    ---------------
// -----------------------------------------------------

function tramp_tm_text_hover_effect(){
	
	"use strict";
	
	var div = jQuery('.tm_text_effect');
	
	div.each(function(){
		var element = jQuery(this);
		var text 	= element.text();
		element.empty();
		element.append('<span class="wrapper"><span class="before">'+text+'</span><span class="after">'+text+'</span></span>');
	});
}

// -----------------------------------------------------
// -------------   PAGE TRANSITION    ------------------
// -----------------------------------------------------

function tramp_tm_page_transition(){
	
	"use strict";
	
	var section 		= jQuery('.tramp_tm_section');
	var allLi 			= jQuery('.transition_link li');
	var button			= jQuery('.transition_link a');
	var wrapper 		= jQuery('.tramp_tm_all_wrap');
	var enter	 		= wrapper.data('enter');
	var exit		 	= wrapper.data('exit');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var href		= element.attr('href');
		if(element.parent().hasClass('tramp_tm_button')){
			jQuery('.menu .transition_link a[href="'+href+'"]').trigger('click');
			return false;
		}
		var sectionID 	= jQuery(href);
		var parent	 	= element.closest('li');
			if(!parent.hasClass('active')) {
				allLi.removeClass('active');
				wrapper.find(section).removeClass('animated '+enter);
				if(wrapper.hasClass('opened')) {
					wrapper.find(section).addClass('animated '+exit);
				}
				parent.addClass('active');
				wrapper.addClass('opened');
				wrapper.find(sectionID).removeClass('animated '+exit).addClass('animated '+enter);
				jQuery(section).addClass('hidden');
				jQuery(sectionID).removeClass('hidden').addClass('active');
			}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function tramp_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.tramp_tm_topbar .trigger .hamburger');
	var mobileMenu		= jQuery('.tramp_tm_mobile_menu');
	var mobileMenuList	= jQuery('.tramp_tm_mobile_menu ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.removeClass('opened');
		}else{
			element.addClass('is-active');
			mobileMenu.addClass('opened');
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.tramp_tm_topbar .trigger .hamburger').removeClass('is-active');
		mobileMenu.removeClass('opened');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function tramp_tm_modalbox_news(){
	
	"use strict";
	
	var modalBox		= jQuery('.tramp_tm_modalbox');
	var button			= jQuery('.tramp_tm_news .title h3');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('li');
		var content 	= parent.find('.news_hidden_details').html();
		var image		= parent.find('.news_image').attr('src');
		var meta		= parent.find('.tramp_tm_metabox').html();
		var title		= parent.find('.title a').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details_news"><div class="tramp_tm_metabox">'+meta+'</div><div class="title"><h3>'+title+'</h3></div></div>');
		tramp_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX PORTFOLIO  --------------
// -------------------------------------------------

function tramp_tm_modalbox_portfolio() {
    "use strict";

    var modalBox = jQuery('.tramp_tm_modalbox');
    var button = jQuery('.tramp_tm_portfolio .portfolio_popup');

    button.on('click', function() {
        var element = jQuery(this);
        var parent = element.closest('li');
        var image = parent.find('.abs_image .main').data('img-url');
        var details = parent.find('.hidden_content_portfolio').html();
        var title = parent.find('.details .title a').text();
        var category = parent.find('.details .category').html();
        
        modalBox.addClass('opened');
        modalBox.find('.description_wrap').html(details);
        modalBox.find('.popup_details').prepend('<div class="top_image"><img src="' + image + '" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
        modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title"><h3>'+title+'</h3><span>'+category+'</span><div>');   
        tramp_tm_data_images();
        return false;
    });
}


// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function tramp_tm_portfolio() {
    "use strict";

    if (jQuery().isotope) {
        // Needed variables
        var list = jQuery('.tramp_tm_portfolio .portfolio_item');
        var filter = jQuery('.tramp_tm_portfolio .portfolio_filter ul');

        if (filter.length) {
            // Find the current filter link
            var currentFilter = filter.find('a.current').attr('data-filter') || '*';

            // Initialize Isotope with the default filter
            list.isotope({
                filter: currentFilter,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            // Isotope Filter
            filter.find('a').on('click', function () {
                var selector = jQuery(this).attr('data-filter');
                list.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

            // Change active element class
            filter.find('a').on('click', function () {
                filter.find('a').removeClass('current');
                jQuery(this).addClass('current');
                return false;
            });
        }
    }
}



// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tramp_tm_progress(){
	
	"use strict";
	
	jQuery('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function tramp_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function tramp_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){tramp_tm_preloader();},speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function tramp_tm_cursor(){
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function tramp_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.html').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function tramp_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function tramp_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function tramp_tm_owl_carousel(){

	"use strict";
	
	var carousel			= jQuery('.tramp_tm_testimonials .owl-carousel');
	carousel.owlCarousel({
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 6000,
		smartSpeed: 2000,
		margin: 0,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive : {
			0 : {
				mouseDrag: false,
				touchDrag: true,
			},
			1100 : {
				mouseDrag: true,
				touchDrag: true,
			}
		}
	});
	tramp_tm_imgtosvg();
}

// -----------------------------------------------------
// -----------------   SECTION TOP    ------------------
// -----------------------------------------------------

function tramp_tm_section_top(){
	"use strict";
	
	var button	= jQuery('.tramp_tm_header .menu ul li a,.tramp_tm_mobile_menu .menu_list ul li a');
	var section = jQuery('.tramp_tm_section');
	
	button.on('click',function(){
		section.animate({ scrollTop: 0 }, 'slow');
		return false;
	});

}
