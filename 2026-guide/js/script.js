console.log("JavaScript読み込み成功！");

const slider = document.querySelector(".tool-slider");

let isDragging = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener("mousedown", (e) => {

    isDragging = true;

    startX = e.pageX;
    scrollLeft = slider.scrollLeft;

    slider.classList.add("dragging");

});

slider.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    e.preventDefault();

    const distance = e.pageX - startX;

    slider.scrollLeft = scrollLeft - distance;

});

slider.addEventListener("mouseup", () => {

    isDragging = false;

    slider.classList.remove("dragging");

});

slider.addEventListener("mouseleave", () => {

    isDragging = false;

    slider.classList.remove("dragging");

});