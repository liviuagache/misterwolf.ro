var btnTop = document.getElementById("btnTop");
var btnBottom = document.getElementById("btnBottom");
var bookingAndrei = document.getElementById("booking-andrei");
var bookingLiviu = document.getElementById("booking-liviu");

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight);
}
window.addEventListener("scroll", function() {
    if (isInViewport(btnTop) || isInViewport(bookingAndrei) || isInViewport(bookingLiviu)) {
        btnTop.classList.add("visible-btn");
        btnTop.classList.remove("hidden-btn");
        btnBottom.classList.add("hidden-btn");
        btnBottom.classList.remove("visible-btn");
    }
    else {
        btnTop.classList.add("hidden-btn");
        btnTop.classList.remove("visible-btn");
        btnBottom.classList.add("visible-btn");
        btnBottom.classList.remove("hidden-btn");
    }
});
