const cafeImage = document.getElementById("cafe-image");

const images = [
    "images/cafe1.jpg",
    "images/cafe2.jpg",
    "images/cafe3.jpg",
    "images/cafe4.jpg",
    "images/cafe5.jpg",
    "images/cafe6.jpg",
    "images/cafe7.jpg",
    "images/cafe8.jpg",
    "images/cafe9.jpg",
    "images/cafe10.jpg",
    "images/cafe11.jpg",
];

let currentImage = 0;

cafeImage.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    cafeImage.src = images[currentImage];

});