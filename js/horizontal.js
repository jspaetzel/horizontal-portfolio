function adjustStyle(width) {
    width = parseInt(width);
    if (width < 701) {
        $("#size-stylesheet").attr("href", "css/narrow.css");
    } else {
       $("#size-stylesheet").attr("href", "css/wide.css"); 
    }
    
    $('.frame .item').height($(window).height()-15); // remove bar from it
    $('.year').height($(window).height()-15); // adjust year bar
    
    var newHeight = $('.frame .item').height()/2;
    var heightStyle = 40+10+10; // margin, padding, border
    $('.frame .item div').height(newHeight - heightStyle);
    
    
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
		
		// Dim the sides
		if ( $('.active').hasClass('year') ) {
			$('.hover').stop(true,true).fadeOut('fast', function() {});
		} else {
			$('.hover').stop(true,true).fadeIn('fast', function() {});
		}
        
        
	});
	
	// Initiate frame
	frame.init();

        // Reload on resize
	$(window).on('resize', function () {
		frame.reload();
        adjustStyle($(this).width());
	});

});


$(window).ready(function() {
  adjustStyle($(this).width());
});
