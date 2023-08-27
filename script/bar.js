const hamberger = document.querySelector(`.hamberger`);
const menu = document.querySelector(`.mobile-menu`);
let flag = false;
hamberger.addEventListener(`click`, function () {
  if (flag) {
    menu.classList.toggle("menu--active");
    flag = true;
  } else {
    menu.classList.toggle("menu--active");
    flag = false;
  }
});
const btn_video = document.querySelector(`.wrapper-images--circle-auto-play`);

const video = document.querySelector(`.wrapper-images--video`);
btn_video.addEventListener(`click`, function (e) {
  e.preventDefault();
  video.autoplay = true;
  video.contr = true;
  video.controls = true;
  btn_video.remove();
});
