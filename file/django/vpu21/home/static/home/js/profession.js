let but_close_info_block = document.querySelector('.info_profession .close');
let but_open_info_block = document.querySelectorAll('.box ');

let info_block = document.querySelector('.info_profession');
let info_block_text = document.querySelector('.info_block_text');
let info_block_img = document.querySelector('.info_block_img');


but_open_info_block.forEach(element => {
    element.addEventListener("click", open_info);
});

but_close_info_block.addEventListener("click", close_info);


function close_info() {
    info_block.style.opacity = "0";
    info_block.style.left = "-100%";
    document.querySelector(".profession_container__box").style.display = "block";
}
function open_info(e) {
    let parent_el = e.path[3];
    let text = parent_el.querySelector(".text p").innerHTML;
    let img = parent_el.querySelector("img");

    info_block_img.src = img.src;
    info_block_text.innerHTML = text;
    info_block.style.opacity = "1";
    info_block.style.left = "0%";

    if (window.innerWidth <= 600) {
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.querySelector(".profession_container__box").style.display = "none";
        }, 600);
    }
}
