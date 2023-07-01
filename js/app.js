const serie = document.querySelector('#serie');
const controls = document.querySelector('#controls');
const trailer = document.querySelector('#trailer');
const close = document.querySelector('#close');


controls.addEventListener('click', playSerie);
close.addEventListener('click', closeVideo)

function playSerie() {
  serie.classList.add("video-visible");
  trailer.play()
}

function closeVideo() {
  trailer.pause();
  trailer.currentTime = 0;
  serie.classList.remove("video-visible");
}