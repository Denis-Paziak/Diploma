let form_hide = document.querySelector(".form_hide_el");
let course, group, day;
let course_btn = document.querySelector(".course");
let day_btn = document.querySelector(".day");
let group_btn = document.querySelector(".group");

let group_container = document.querySelector(".group");


let arr_group = {
    "1": ["ОПЗ-16", "ОПЗ-18"],
    "2": ["ОПЗ-26", "ОПЗ-28"],
    "3": ["ОПЗ-36", "ОПЗ-38"]
}

course = "1";
build_group();

// course
if (course_btn) {
    course_btn.addEventListener("click", e => {
        if (!e.target.classList.contains('course')) {
            course_btn.querySelectorAll("div").forEach(el => {
                el.classList.remove("active");
            });

            course = +e.target.innerHTML;
            e.target.classList.add("active");
            build_group();
        }
        build_arr();
    });
}
// group
if (group_btn) {
    group_btn.addEventListener("click", e => {
        if (e.classList != "group") {
            group_btn.querySelectorAll("div").forEach(el => {
                el.classList.remove("active");
            });

            group = e.target.innerHTML;
            e.target.classList.add("active");
        }
        build_arr();
    });
}
// day
if (day_btn) {
    day_btn.addEventListener("click", e => {
        if (e.classList != "day") {
            day_btn.querySelectorAll("div").forEach(el => {
                el.classList.remove("active");
            });

            day = e.target.innerHTML;
            e.target.classList.add("active");
        }
        build_arr();
    });
}

function build_group() {
    if (group_container) {
        group_container.innerHTML = "";

        arr_group[course].forEach(element => {
            group_container.innerHTML += `<div class="form_select_button">${element}</div>`;
        });
    }
}

function build_arr() {
    if (course && group && day) {
        form_hide.value = course + "|" + group + "|" + day;
    }
}

let block_lession = document.querySelectorAll(".block-lession");
let block_lession_time = document.querySelectorAll(".block-lession .time");
let block_lession_count = document.querySelectorAll(".block-lession .count");
let time_less = ["8:30 - 9:15", "9:20 - 10:05", "10:15 - 11:00", "11:20 - 12:05", "12:30 - 13:15", "13:20 - 14:05", "14:10 - 14:55", "15:00 - 15:45"];
let time_less_start = ["8:30", "9:20", "10:15", "11:20", "12:30", "13:20", "14:10", "15:00"]
let time_count = 0;

block_lession_time.forEach(element => {
    if (time_less[time_count]) {
        element.innerHTML = time_less[time_count];
    } else {
        element.innerHTML = "";
    }
    block_lession_count[time_count].innerHTML = time_count + 1;
    time_count++;
});
