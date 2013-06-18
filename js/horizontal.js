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


/*global Sly, console */
jQuery(function ($) {
	'use strict';

	var options = {
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateOn: 'click',
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 1,  // start at location for #crazy
			scrollBar: '#scrollbar',
			scrollBy: 1,
			//pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			keyboardNavBy: 'items',

			// Buttons
			/*forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')*/
		};
	var frame = new Sly('#crazy', options);

	frame.on('active', function(eventName) {
		
		// Determine item to load up
		var activeItem = this.rel['activeItem'];
		var slyLength = this.items.length-1;
		var tempdat = data[slyLength-activeItem];
		
		if ( tempdat == 'year' ) {
			$('#hover').stop(true,true).fadeOut('fast', function() {});
		} else {
			$('#hover').stop(true,true).fadeIn('fast', function() {});
			$('#hover-inner').html(tempdat);
		}
	});
	
	// Initiate frame
	frame.init();
});
