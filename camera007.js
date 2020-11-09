var stream;
var video;
navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(function (stream) {
  stream = stream;
  video = document.getElementById('video');
  video.src = window.URL.createObjectURL(stream);
  video.play();
  setTimeout(function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var w = video.offsetWidth;
    var h = video.offsetHeight;
    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);
    ctx.drawImage(video, 0, 0, w, h);
    canvas.toBlob(function(blob) {
      var img = document.getElementById('image');
      img.src = window.URL.createObjectURL(blob);
    }, 'image/jpeg', 0.95);
    stream.getTracks()[0].stop();
  }, 3000);
}).catch(function (error) {
  console.error('mediaDevice.getUserMedia() error:', error);
  return;
});