let but_close_info_block = document.querySelector('.my_info_profession .close');
let but_open_info_block = document.querySelectorAll('.box .open_info');

let info_block = document.querySelector('.my_info_profession');
let info_block_text = document.querySelector('.info_block_text');
let info_block_img = document.querySelector('.info_block_img');

but_open_info_block.forEach(element => {
    element.addEventListener("click", open_info);
});

but_close_info_block.addEventListener("click", close_info);


function close_info() {
    document.body.style.overflow = "visible";
    info_block.style.left = "-100%";
}

function open_info(e) {
    document.body.style.overflow = "hidden";

    let parent_el = e.path[3];

    let text = parent_el.querySelector(".text p").innerHTML;
    let img = parent_el.querySelector("img");

    info_block_img.src = img.src;
    info_block_text.innerHTML = text;
    info_block.style.left = "0%";
}
