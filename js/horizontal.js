var data = new Array();
data = [
		"year",
		
		"Chemical Servers","year",
		
		"Lifeguard","year",
		
		"THT","JCC","3D Dots","year",
		
		"GSST","Jamestown","Jitterzz","Restore","2113","IMH","year",
		
		"Pheme","ODU OUT","Java Tetris","LowEndBox","year",
		
		"Minecraft Dev","Mobile Menus","Centration","TSA","year",
		
		"ODU","year",
		
		"About"
		]

function adjustStyle(width) {
    width = parseInt(width);
    if (width < 701) {
        $("#size-stylesheet").attr("href", "css/narrow.css");
    } else {
       $("#size-stylesheet").attr("href", "css/wide.css"); 
    }
}

function adjustSideShadows(width) {
    width = (parseInt(width)/2) - 200;
    $(".hover-left").css("width", width-2);
    $(".hover-right").css("width", width+2);
}

/*global Sly, console */
jQuery(function ($) {
	'use strict';

	var options = {
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateOn: 'click',
			activateMiddle: 1,
            dragSource: '#crazy',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 1,  // start at location for #crazy
			scrollBar: '#scrollbar',
			scrollBy: 1,
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			keyboardNavBy: 'items',
		};
	var frame = new Sly('#crazy', options);

	frame.on('active', function(eventName) {
		
		// Determine item to load up
		var activeItem = this.rel['activeItem'];
		var slyLength = this.items.length-1;
		var tempdat = data[slyLength-activeItem];
		
		if ( tempdat == 'year' ) {
			$('.hover').stop(true,true).fadeOut('fast', function() {});
		} else {
			$('.hover').stop(true,true).fadeIn('fast', function() {});
			$('#hover-inner').html(tempdat);
		}
	});
	
	// Initiate frame
	frame.init();

        // Reload on resize
	$(window).on('resize', function () {
		frame.reload();
        adjustStyle($(this).width());
        adjustSideShadows($(this).width());
	});

});


$(window).ready(function() {
  adjustStyle($(this).width());
  adjustSideShadows($(this).width())
});
