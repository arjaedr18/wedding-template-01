AOS.init({ duration:1200, once:true });

const countdown = document.getElementById('countdown');
const weddingDate = new Date("2027-12-01T15:00:00").getTime();

function updateCountdown(){
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if(distance < 0){
    countdown.innerHTML = "We're Married!";
    return;
  }

  const d = Math.floor(distance / (1000*60*60*24));
  const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((distance%(1000*60*60))/(1000*60));
  const s = Math.floor((distance%(1000*60))/1000);

  countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateCountdown,1000);
updateCountdown();

// Music autoplay workaround
const music = document.getElementById('bg-music');
function enableMusic(){
  music.muted=false;
  music.play();
  window.removeEventListener('click',enableMusic);
}
window.addEventListener('click',enableMusic);