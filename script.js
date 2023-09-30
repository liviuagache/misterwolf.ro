window.addEventListener("scroll", function() {
    var button = document.getElementById("btnFixed");
    var buttonHeight = button.clientHeight;

    if ((window.pageYOffset) < (buttonHeight * 2)) {
        button.style.right = "";
        button.style.bottom = "";
    }
    else {
        button.style.right = "-12rem";
        button.style.bottom = "-1rem";
    }
});