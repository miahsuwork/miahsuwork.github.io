/*
| When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

/*
| mainVisualIdentity vlign
*/
$(window).resize(resizeHandler);
$(window).triggerHandler("resize");
function resizeHandler() {
    var winH = $(window).height();
    $(".mainVisualIdentity").css("height", winH);
}


$(document).ready(function () {

    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotsHover: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
})
