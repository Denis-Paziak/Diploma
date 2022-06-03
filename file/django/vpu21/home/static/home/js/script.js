
if (document.readyState || document.body.readyState == 'complete') {
  let preloader = document.querySelector(".preloader");
  preloader.classList.add("hide");
  // setTimeout(() => {
  //   preloader.style.display = "none";
  // }, 1500);
}

// zeroing
let zero_el_arr = document.querySelectorAll(".zero");

if (zero_el_arr) {
  zero_el_arr.forEach(element => {
    element.style.margin = 0;
  });
}
// open and close header menu
let but_open = document.querySelector(".header_nav_btn");
let but_close = document.querySelector(".nav_block .close");
let menu = document.querySelector(".nav_block");

if (but_open) {
  but_open.addEventListener("click", open_menu_func);
}
if (but_close) {
  but_close.addEventListener("click", close_menu_func);
}

function open_menu_func() {
  menu.style.left = "0";
}
function close_menu_func() {
  menu.style.left = "100%";
}
// typing text
let i = 0;
let txt = 'Професія повинна приносити задоволення та гарний дохід!';
let speed = 100;

function typeWriter() {
  if (i < txt.length) {
    let el = document.querySelector(".typing_text");
    if (el) {
      el.innerHTML += txt.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}
// home start animation
function start_home_anim() {
  document.querySelector("main .text p").classList.add("active");
  document.querySelector("main .text .my_button").classList.add("active");
}
