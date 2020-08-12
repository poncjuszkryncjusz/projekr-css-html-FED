var navButton = document.querySelector("[data-js=navButton]"),
  BODY = document.body,
  videoCont = document.querySelector("[data-video-cont]")
video_el = videoCont.querySelector("[data-video]")
btnPlay = videoCont.querySelector("[data-play]")
btnPause = videoCont.querySelector("[data-pause]")
progressBar = videoCont.querySelector("[data-progress]")

navButton.onclick = function () {
  BODY.classList.toggle("open");
};

btnPlay.onclick = function () {
  video_el.play()
};
btnPause.onclick = function () {
  video_el.pause()
};

video_el.ontimeupdate = function () {
  progressBar.style.width = Math.ceil(video_el.currentTime / video_el.duration * 100) + "%";
};
var myForm = document.querySelector("form");
var fieldsRequired = myForm.querySelectorAll("[required]");

myForm.onsubmit = function (e) {
  e.preventDefault();
  var isError = false;
  for (var i = 0; i < fieldsRequired.length; i++) {
    if (fieldsRequired[i].checkValidity() != true) {
      isError = true;
    } else {
      isError = false
    }
  }

    if (isError) {
      myForm.classList.add("is-submitted");
      alert("form not send")
    } else {
      alert("form send")
    }
  };

  var btnTransform = document.getElementById('apla-btn');
  var apla = document.getElementById('apla');
  var body = document.getElementById('body');

  btnTransform.onclick = function() {
    console.log("dzzzzzzzzzzzz")
    apla.style.display = 'block';
    body.style.overflow = 'hidden';
  };

  apla.onclick = function() {
    body.style.overflow = 'scroll';
    apla.style.display = 'none'
  };


