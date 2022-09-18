let btn = document.querySelector('.btn');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let vif = document.querySelector('video')

btn.onclick = () => {
  btn.classList.add('active')
  clip.classList.add('active')
  vif.play()
  vif.currentTime = 0;
}

close.onclick = () => {
  btn.classList.remove('active');
  clip.classList.remove('active');
  vif.pause()
}