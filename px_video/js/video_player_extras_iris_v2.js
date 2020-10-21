$(document).ready(function () {
	"use strict";
	
	// Overlays a play button and allows the user to click it to pause and play. 
	// The user has to insert <div class="playpause-button"></div> first, to insert the hovering button. Insert it after the video tags, but before the ending div of the px-video-img-captions-container tag.
	// If the video container itself (which has a class of 'px-video-img-captions-container') is clicked on...
	$('.px-video-img-captions-container').click(playPause);
	cssStyling();
	hideDownloadButton();
	
	// Disable the right-click context menu for videos. Do not allow them to be able to right click download videos.
	$('video').bind('contextmenu',function() { return false; });
	
	// For the play button on each video, if it is pressed, its associated playpause-button disappears.
	$('.px-video-play').click(function () {
		// Gets the playpause-button associated with this video.
		var playPauseButton = $(this).closest('.px-video-controls').siblings('.px-video-img-captions-container').children('.playpause-button');
		// Button fades out.
		playPauseButton.fadeOut();		
	});
	
	// For the pause button on each video, if it is pressed, its associated playpause-button re-appears.
	$('.px-video-pause').click(function () {
		// Gets the playpause-button associated with this video.
		var playPauseButton = $(this).closest('.px-video-controls').siblings('.px-video-img-captions-container').children('.playpause-button');
		// Button fades back in.
		playPauseButton.fadeIn();		
	});
});

// Allows the user to click the play/pause button overlay (which is already created in the HTML document iteself) to pause and play. 
function playPause() {
	var video = $(this).find('video')[0]; // The video that this specific container...contains.

	var playButton = $(this).siblings('.px-video-controls').find('[class^=px-video-play]'); // The play button associated with this specific video (container).
	var pauseButton = $(this).siblings('.px-video-controls').find('[class^=px-video-pause]'); // The pause button associated with this specific video (container).

	if (video.paused) { 	// Play the video (if it's already paused). 
		playButton.click(); // Clicks the play button on the control bar directly (programmatically).
		$(this).children('.playpause-button').fadeOut(); // Button fades out

	} else { 					// Else, the video is paused (since it's already playing) and the button fades in. 
		pauseButton.click(); 	// Clicks the pause button on the control bar directly (programmatically).
		$(this).children('.playpause-button').fadeIn(); // Button fades in
	}
}

// Styles things in the HTML file itself so we don't have to pack in a separate CSS file, making this extra portable.
// TODO: CSS PLAYPAUSE BUTTON NOT OVERLAYING OVER THE VIDEO.
function cssStyling() {

	// CSS styling for the play/pause button.
	$('.playpause-button').css({
		'background-image': 'url("/multimedia/images/buttons/play-button-orange.png")',
		'background-repeat': 'no-repeat',
		'width': '30%',
		'height': '30%',
		'position': 'absolute',
		'left': '0%',
		'right': '0%',
		'top': '0%',
		'bottom': '0%',
		'margin': 'auto',
		'background-size': 'contain',
		'background-position': 'center',
		'z-index': '999'
	});

	// CSS styling for the video container (necessary for the button to overlay on top).
	$('.px-video-container').css({
		'display': 'table',
		'width': 'auto',
		'position': 'relative'
	});
}

// Hides the download button (in Chrome. IE's default HTML5 player doesn't allow you to download videos by default) for all videos.
function hideDownloadButton() {
	$('.video').attr('controlsList', 'nodownload');
}

// Checks the browser type. If the browser is IE, changes the visibility of the captions container to visible, so it uses the special PayPal video player captions instead, because IE's own HTML5 captions aren't working >:(
// Legacy code, used in previous drafts to check if the user was in a certain browser.
/*function msieversion() {

	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	// If Internet Explorer, change visibility in the img captions container to visible.
	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		$('.px-video-img-captions-container').css({
			"bottom": "105px"
		});
	} else {
		// Else, do something.

		$('.px-video-img-captions-container').css({
			"visibility": "hidden"
		});
	}
}*/