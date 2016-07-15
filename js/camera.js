'use strict';

//wait for document to load
window.onload = function() {

  //YOUR CODE GOES IN HERE
  navigator.getUserMedia = navigator.getUserMedia || 

                         navigator.webkitGetUserMedia ||

                         navigator.mozGetUserMedia ||

                         navigator.msGetUserMedia;

  //how to call
  navigator.getUserMedia({
  video:{mandatory: {maxWidth:300, maxHeight:300}}
}, function(mediaStream) {

  var localMediaStream = mediaStream;
   //save reference for use outside this function
   localMediaStream = mediaStream;
   var video = document.querySelector('video');

   //set the src to be the stream
   video.src = window.URL.createObjectURL(mediaStream)
   vidOff();


}, function(err){ 
   console.log(err); 
});

  //what to do on error
  var errFunc = function(err) {
    console.log(err);
  };


};

function vidOff() {
    vid.pause();
    vid.src = "";
    localstream.stop();
}