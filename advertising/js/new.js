/*************************
Magnific Popup
*************************/

function popupgallery() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        type: 'image',
        /*tLoading: 'Loading image #%curr%...',*/
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') ;
            }
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

}

/*************************
PC MOBILE切換
*************************/


function changeHandler(){
	$(".pcBtn").click(function (){
		$(this).parents(".tn-section").find(".computerAd").css("display","flex");
		$(this).parents(".tn-section").find(".mobileAd").css("display","none");
		$(this).parents(".3c-section").find(".computerAd").css("display","flex");
		$(this).parents(".3c-section").find(".mobileAd").css("display","none");
		$(this).parents(".finance-section").find(".computerAd").css("display","flex");
		$(this).parents(".finance-section").find(".mobileAd").css("display","none");
	});
	$(".mobileBtn").click(function (){
		$(this).parents(".tn-section").find(".computerAd").css("display","none");
		$(this).parents(".tn-section").find(".mobileAd").css("display","flex");
		$(this).parents(".3c-section").find(".computerAd").css("display","none");
		$(this).parents(".3c-section").find(".mobileAd").css("display","flex");
		$(this).parents(".finance-section").find(".computerAd").css("display","none");
		$(this).parents(".finance-section").find(".mobileAd").css("display","flex");
	});
}




/*************************
PC版位資訊說明切換
*************************/

	/************
	tn pc 版位資訊說明切換
	************/
function fadeHandler_pc_tn (){
	$(".tn-Ad-Pc-instruction:not(:first)").fadeOut(0);//將上面的照片全部fadeOut隱藏
	var pcBtn_tn_left = $('.computerBtn-tn-left');
    var pcBtn_tn_right = $('.computerBtn-tn-right');
	var index = 1
    pcBtn_tn_left.on('click', function() {
			if(index>1){
				index--;
			}else{
				index=6;//增減版位須更動的數字
			}

			$(this).parents(".computerAd-tn").find(".tn-Ad-Pc-instruction:eq("+(index-1)+")").fadeIn(400);
			$(this).parents(".computerAd-tn").find(".tn-Ad-Pc-instruction:eq("+(index-1)+")").siblings().fadeOut(400);
    });
    pcBtn_tn_right.on('click', function() {
		if(index<6){//增減版位須更動的數字
			index++;
		}else{
			index=1;
		}
		$(this).parents(".computerAd-tn").find(".tn-Ad-Pc-instruction:eq("+(index-1)+")").fadeIn(400);
		$(this).parents(".computerAd-tn").find(".tn-Ad-Pc-instruction:eq("+(index-1)+")").siblings().fadeOut(400);

    });

}


	/************
	3c pc 版位資訊說明切換
	************/
function fadeHandler_pc_3c (){
	$(".c-Ad-Pc-instruction:not(:first)").fadeOut(0);//將上面的照片全部fadeOut隱藏
    var pcBtn_3c_left = $('.computerBtn-3c-left');
    var pcBtn_3c_right = $('.computerBtn-3c-right');
	var index = 1
    pcBtn_3c_left.on('click', function() {
			if(index>1){
				index--;
			}else{
				index=6;//增減版位須更動的數字
			}

			$(this).parents(".computerAd-3c").find(".c-Ad-Pc-instruction:eq("+(index-1)+")").fadeIn(400);
			$(this).parents(".computerAd-3c").find(".c-Ad-Pc-instruction:eq("+(index-1)+")").siblings().fadeOut(400);
    });
    pcBtn_3c_right.on('click', function() {
		if(index<6){//增減版位須更動的數字
			index++;
		}else{
			index=1;
		}
		$(this).parents(".computerAd-3c").find(".c-Ad-Pc-instruction:eq("+(index-1)+")").fadeIn(400);
		$(this).parents(".computerAd-3c").find(".c-Ad-Pc-instruction:eq("+(index-1)+")").siblings().fadeOut(400);

    });
	
}



	/************
	finance pc 版位資訊說明切換
	************/
function fadeHandler_pc_finance (){
	$(".finance-Ad-Pc-instruction:not(:first)").fadeOut(0);//將上面的照片全部fadeOut隱藏
    var pcBtn_finance_left = $('.computerBtn-finance-left');
    var pcBtn_finance_right = $('.computerBtn-finance-right');
	var index = 1
    pcBtn_finance_left.on('click', function() {
			if(index>1){
				index--;
			}else{
				index=6;//增減版位須更動的數字
			}

			$(this).parents(".computerAd-finance").find(".finance-Ad-Pc-instruction:eq("+(index-1)+")").fadeIn(400);
			$(this).parents(".computerAd-finance").find(".finance-Ad-Pc-instruction:eq("+(index-1)+")").siblings().fadeOut(400);
    });
    pcBtn_finance_right.on('click', function() {
		if(index<6){//增減版位須更動的數字
			index++;
		}else{
			index=1;
		}
		$(this).parents(".computerAd-finance").find(".finance-Ad-Pc-instruction:eq("+(index-1)+")").fadeIn(400);
		$(this).parents(".computerAd-finance").find(".finance-Ad-Pc-instruction:eq("+(index-1)+")").siblings().fadeOut(400);

    });
	
}


/***********************
 moblie 版位資訊說明切換
************************/




	/************
	tn moblie 版位資訊說明切換
	************/
function fadeHandler_mobile_tn (){
	$(".tn-Ad-mobile-instruction:not(:first)").fadeOut(0);//將上面的照片全部fadeOut隱藏
    var mobileBtn_tn_left = $('.mobileBtn-tn-left');
    var mobileBtn_tn_right = $('.mobileBtn-tn-right');
	var index = 1
    mobileBtn_tn_left.on('click', function() {
		if(index>1){
			index--;
		}else{
			index=3;//增減版位須更動的數字
		}

		$(this).parents(".mobileAd-tn").find(".tn-Ad-mobile-instruction:eq("+(index-1)+")").fadeIn(400);
		$(this).parents(".mobileAd-tn").find(".tn-Ad-mobile-instruction:eq("+(index-1)+")").siblings().fadeOut(400);
    });
    mobileBtn_tn_right.on('click', function() {
		if(index<3){//增減版位須更動的數字
			index++;
		}else{
			index=1;
		}
		$(this).parents(".mobileAd-tn").find(".tn-Ad-mobile-instruction:eq("+(index-1)+")").fadeIn(400);
		$(this).parents(".mobileAd-tn").find(".tn-Ad-mobile-instruction:eq("+(index-1)+")").siblings().fadeOut(400);

    });
	
}


	/************
	3c moblie 版位資訊說明切換
	************/
function fadeHandler_mobile_3c (){
	$(".c-Ad-mobile-instruction:not(:first)").fadeOut(0);//將上面的照片全部fadeOut隱藏
    var mobileBtn_3c_left = $('.mobileBtn-3c-left');
    var mobileBtn_3c_right = $('.mobileBtn-3c-right');
	var index = 1
    mobileBtn_3c_left.on('click', function() {
		if(index>1){
			index--;
		}else{
			index=3;//增減版位須更動的數字
		}

		$(this).parents(".mobileAd-3c").find(".c-Ad-mobile-instruction:eq("+(index-1)+")").fadeIn(400);
		$(this).parents(".mobileAd-3c").find(".c-Ad-mobile-instruction:eq("+(index-1)+")").siblings().fadeOut(400);
    });
    mobileBtn_3c_right.on('click', function() {
		if(index<3){//增減版位須更動的數字
			index++;
		}else{
			index=1;
		}
		$(this).parents(".mobileAd-3c").find(".c-Ad-mobile-instruction:eq("+(index-1)+")").fadeIn(400);
		$(this).parents(".mobileAd-3c").find(".c-Ad-mobile-instruction:eq("+(index-1)+")").siblings().fadeOut(400);

    });
	
}



	/************
	finance moblie 版位資訊說明切換
	************/
function fadeHandler_mobile_finance (){
	$(".finance-Ad-mobile-instruction:not(:first)").fadeOut(0);//將上面的照片全部fadeOut隱藏
    var mobileBtn_finance_left = $('.mobileBtn-finance-left');
    var mobileBtn_finance_right = $('.mobileBtn-finance-right');
	var index = 1
    mobileBtn_finance_left.on('click', function() {
		if(index>1){
			index--;
		}else{
			index=3;//增減版位須更動的數字
		}

		$(this).parents(".mobileAd-finance").find(".finance-Ad-mobile-instruction:eq("+(index-1)+")").fadeIn(400);
		$(this).parents(".mobileAd-finance").find(".finance-Ad-mobile-instruction:eq("+(index-1)+")").siblings().fadeOut(400);
    });
    mobileBtn_finance_right.on('click', function() {
		if(index<3){//增減版位須更動的數字
			index++;
		}else{
			index=1;
		}
		$(this).parents(".mobileAd-finance").find(".finance-Ad-mobile-instruction:eq("+(index-1)+")").fadeIn(400);
		$(this).parents(".mobileAd-finance").find(".finance-Ad-mobile-instruction:eq("+(index-1)+")").siblings().fadeOut(400);

    });
	
}
	
	





/*************************
Screenshots silder  TN PC版位
*************************/
function screensilderPcTn() {
  //  var slide = $(this).parents(".slider-container").find('.slider-single');
    var slide = $('.slider-singlePc-tn');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;	
	
    function slideInitial() {
        slide.addClass('proactivede');
        setTimeout(function() {
            slideRight();
        }, 500);
    }

    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }

        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);

        }

        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('preactivede')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
            if (thisSlide.hasClass('preactive')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }

        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('proactivede')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
            if (thisSlide.hasClass('proactive')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    var left = $('.computerBtn-tn-left');
    var right = $('.computerBtn-tn-right');
    left.on('click', function() {
        slideLeft();
    });
    right.on('click', function() {
        slideRight();
    });
    slideInitial();
}

/*************************
Screenshots silder  TN mobile版位
*************************/
function screensilderMobileTn() {
  //  var slide = $(this).parents(".slider-container").find('.slider-single');
    var slide = $('.slider-singleMobile-tn');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;	
	
    function slideInitial() {
        slide.addClass('proactivede');
        setTimeout(function() {
            slideRight();
        }, 500);
    }

    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }

        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);

        }

        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('preactivede')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
            if (thisSlide.hasClass('preactive')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }

        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('proactivede')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
            if (thisSlide.hasClass('proactive')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    var left = $('.mobileBtn-tn-left');
    var right = $('.mobileBtn-tn-right');
    left.on('click', function() {
        slideLeft();
    });
    right.on('click', function() {
        slideRight();
    });
    slideInitial();
}








/*************************
Screenshots silder  3c PC版位
*************************/
function screensilderPc3c() {
  //  var slide = $(this).parents(".slider-container").find('.slider-single');
    var slide = $('.slider-singlePc-3c');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;	
	
    function slideInitial() {
        slide.addClass('proactivede');
        setTimeout(function() {
            slideRight();
        }, 500);
    }

    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }

        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);

        }

        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('preactivede')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
            if (thisSlide.hasClass('preactive')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }

        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('proactivede')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
            if (thisSlide.hasClass('proactive')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    var left = $('.computerBtn-3c-left');
    var right = $('.computerBtn-3c-right');
    left.on('click', function() {
        slideLeft();
    });
    right.on('click', function() {
        slideRight();
    });
    slideInitial();
}

/*************************
Screenshots silder  TN mobile版位
*************************/
function screensilderMobile3c() {
  //  var slide = $(this).parents(".slider-container").find('.slider-single');
    var slide = $('.slider-singleMobile-3c');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;	
	
    function slideInitial() {
        slide.addClass('proactivede');
        setTimeout(function() {
            slideRight();
        }, 500);
    }

    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }

        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);

        }

        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('preactivede')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
            if (thisSlide.hasClass('preactive')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }

        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('proactivede')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
            if (thisSlide.hasClass('proactive')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    var left = $('.mobileBtn-3c-left');
    var right = $('.mobileBtn-3c-right');
    left.on('click', function() {
        slideLeft();
    });
    right.on('click', function() {
        slideRight();
    });
    slideInitial();
}






/*************************
Screenshots silder  finance PC版位
*************************/
function screensilderPcFinance() {
  //  var slide = $(this).parents(".slider-container").find('.slider-single');
    var slide = $('.slider-singlePc-finance');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;	
	
    function slideInitial() {
        slide.addClass('proactivede');
        setTimeout(function() {
            slideRight();
        }, 500);
    }

    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }

        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);

        }

        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('preactivede')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
            if (thisSlide.hasClass('preactive')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }

        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('proactivede')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
            if (thisSlide.hasClass('proactive')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    var left = $('.computerBtn-finance-left');
    var right = $('.computerBtn-finance-right');
    left.on('click', function() {
        slideLeft();
    });
    right.on('click', function() {
        slideRight();
    });
    slideInitial();
}

/*************************
Screenshots silder  TN mobile版位
*************************/
function screensilderMobileFinance() {
  //  var slide = $(this).parents(".slider-container").find('.slider-single');
    var slide = $('.slider-singleMobile-finance');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;	
	
    function slideInitial() {
        slide.addClass('proactivede');
        setTimeout(function() {
            slideRight();
        }, 500);
    }

    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }

        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);

        }

        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('preactivede')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
            if (thisSlide.hasClass('preactive')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }

        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('proactivede')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
            if (thisSlide.hasClass('proactive')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    var left = $('.mobileBtn-finance-left');
    var right = $('.mobileBtn-finance-right');
    left.on('click', function() {
        slideLeft();
    });
    right.on('click', function() {
        slideRight();
    });
    slideInitial();
}






$(document).ready(function() {
    popupgallery(),
	changeHandler(),
    fadeHandler_pc_tn(), 
    fadeHandler_pc_3c(), 
    fadeHandler_pc_finance(), 
    fadeHandler_mobile_tn(),
    fadeHandler_mobile_3c(), 
    fadeHandler_mobile_finance(),
    screensilderPcTn(),
	screensilderMobileTn(),
    screensilderPc3c(),
	screensilderMobile3c(),
    screensilderPcFinance(),
	screensilderMobileFinance();
     
});

