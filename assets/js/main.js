/*
| Preloader JS 
*/

$(window).on('load', function () {

    function removePreloader() {
        var preLoader = $('.preLoader');
        preLoader.fadeOut();
    }
    setTimeout(removePreloader, 250);
});


/*
| When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var element = document.getElementById("navbar");
    if (prevScrollpos > currentScrollPos) {
        element.style.top = "0";
        element.classList.add("backgroundColor");

    } else {
        element.style.top = "-80px";
        element.classList.remove("backgroundColor");
    }

    if (currentScrollPos === 0) {
        element.classList.remove("backgroundColor");
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
    /*
    | 修正 navbar hiden and show
    */
    $('.navbar-nav a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    $(document).click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    $('#navbar').on('show.bs.collapse', function () {
        document.documentElement.style.overflowY = 'hidden';
        $(".overlay").fadeIn("fast");
    })
    $('#navbar').on('hidden.bs.collapse', function () {
        document.documentElement.style.overflowY = 'scroll';
        $(".overlay").fadeOut("fast");
    })

    $('#myList a').on('click', function (event) {
        console.log(123)
        event.preventDefault()
        $(this).tab('show')
    })

    /*
    | works page
    */

   $('#front-end').on('show.bs.collapse', function () {
        $(".front-end-title svg").removeClass("collapseClose");
    })
    $('#front-end').on('hidden.bs.collapse', function () {
        $(".front-end-title svg").addClass("collapseClose");
    })
    $('#graphic').on('show.bs.collapse', function () {
        $(".graphic-title svg").addClass("collapseOpen");
    })
    $('#graphic').on('hidden.bs.collapse', function () {
        $(".graphic-title svg").removeClass("collapseOpen");
    })

    

    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotsHover: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 996,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '180px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
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
