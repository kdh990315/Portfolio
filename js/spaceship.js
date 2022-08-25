window.addEventListener("DOMContentLoaded", function () {

    window.addEventListener("scroll", function() {
        var scrollPos = 0,
            wrap = document.getElementById("wrap"),
            doc = document.documentElement;

            scrollPos = doc.scrollTop;
            console.log(scrollPos);
    });
});