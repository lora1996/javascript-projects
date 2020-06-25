const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch");

btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.play();
    } else {
        btn.classList.remove("slide");
        video.pause();
    }
})

//preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
})