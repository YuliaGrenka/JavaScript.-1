var imgs = ["img/slide_01.jpg", "img/slide_02.jpg", "img/slide_03.jpg", "img/slide_04.jpg", "img/slide_05.jpg"]
var slider = new nav(imgs);
var buttons = document.querySelectorAll('.sliderList button');
var result = document.querySelector('.slider-item-content');


function nav(img) {
    var current = -1, len = img.length - 1;
    this.next = function () {
        current = current < len ? current + 1 : 0;
        return "<img src=" + img[current] + " width='640px' height='427px'>";
    };
    this.prev = function () {
        current = current > 0 ? current - 1 : len;
        return "<img src=" + img[current] + " width='640px' height='427px'>";
    };
}

function sliderSet() {
    result.innerHTML = slider.next();
}

sliderSet();

buttons[1].onclick = function () {
    result.innerHTML = slider.next();
};

buttons[0].onclick = function () {
    result.innerHTML = slider.prev();
};