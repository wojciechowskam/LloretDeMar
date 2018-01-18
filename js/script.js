document.addEventListener('DOMContentLoaded', function() {
    var prev = document.querySelector(".left");
    var next = document.querySelector(".right");
    var photos = document.querySelectorAll(".slide img");
    var index = 0;
    var timer = null; //dla intervala
    var timeDelay = 5000; //czas automatycznego przelaczania

    for (var i = 1; i < photos.length; i++) {
        photos[i].classList.add("invisible");
    }

    var timeoutNextSlide = function() {
        timer = setTimeout(function() {
            next.click();
        }, timeDelay);
    }
    timeoutNextSlide();

    /*slider */
    
    next.addEventListener("click", function() {
        photos[index].classList.add("invisible");
        index++;
        if (index == photos.length) {
            index = 0;
        }
        photos[index].classList.remove("invisible");
        clearTimeout(timer);
        timeoutNextSlide();
    });

    prev.addEventListener("click", function() {
        photos[index].classList.add("invisible");
        index--;
        if (index < 0) {
            index = photos.length - 1;
        }
        photos[index].classList.remove("invisible");
        clearTimeout(timer);
        timeoutNextSlide();
    });

});
