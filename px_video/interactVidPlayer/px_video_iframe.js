//   This script is designed to insert a px-video instance onto an html page.  
//   Four (4) things are necessary for this script to work
//   All video files must be on a server (somewhere) where they can be accessed by
//   the page on which the iframe exists.  
//   1.  a unique name for the video (e.g. myNewVideo)  The name should have no spaces and only letters.  
//       and only letters.  This is less of a concern if there is only one video on the page.
//   2.  URL of the video or .mp4  (e.g. https://   www.mysite.gov/myNewVideo.mp4
//   3.  URL of the image thumbnail .jpg or .padding
//   4.  URL of the closed caption file.  This player will on except 1 closed caption file.  
//       I must be a .vtt format.

//  Example
//  <iframe id="uniqueVideoName" class="px_video_instance" data-video_mp4_url="" data_thumbnail_jpg_url="" data-closedcaption_vtt_url=""> </iframe>



var videoOnPage = 0;
var pxVidInstance = {

  mp4URLTitle: "",
  videoId: "",
  imageThumb: "",
  vttCC: ""
};


(function () {
  'use strict';

  $(document).ready(function () {
    main();
    done();

  });

  function main() {

    alert("start");
 
  }

  function done() {
    alert("Yeah!");

  }


  // end of function wrapper


})();
