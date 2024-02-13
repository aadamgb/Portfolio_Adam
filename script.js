function toggleMenu (){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const video1 =  document.querySelector('.video1');
const video2 = document.querySelector('.video2');

video1.muted = true;
video2.muted = true;

function playVideo1() {
   video1.play();
}
function pauseVideo1() {
    video1.pause();
}

function playVideo2() {
    video2.play();
}
function pauseVideo2() {
    video2.pause();
}