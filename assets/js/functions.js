// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }
//
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


// remap jQuery to $
(function($){


		


	    function sizeGrids(){
			$('#spaces>ul>li').height($('#spaces li').width());
			$('.col').height($('.col').width());
		};

		var feed = new Instafeed({
	        get: 'user',
        	userId: 33475386,
        	accessToken: '33475386.467ede5.2500a2c6ccd34db6a5cb0989f433c399',
	        clientId: '591e5de50c83444eb87e29f703ba02b6',
	        target:'vision',
	        template: '<div class="col"><a href="{{link}}" target="_blank"><img class="item" src="{{image}}" alt="vision"/></a></div>',
	        resolution: 'standard_resolution',
	        after: function(){
	        	sizeGrids()
	        	$('#vision').append('<div class="clear"/>')
	        },
	    });
	    feed.run();
		

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
		sizeGrids();
	
	});
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		sizeGrids();
	});

})(window.jQuery);