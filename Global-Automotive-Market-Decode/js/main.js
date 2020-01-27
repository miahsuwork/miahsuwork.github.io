/*============================================
Preloader JS
==============================================*/

    $(window).on('load', function(){

        function removePreloader() {
            var preLoader = $('.preLoader');
            preLoader.fadeOut();
        }
        setTimeout(removePreloader, 1250);
    });
		


/*============================================
主視覺符合螢幕大小 JS
==============================================*/

$(function(){

	var w_h = $(window).height();
	$("#j-slider,#img_h").css({
	  height:w_h-90
	}); 

});



/*--
menu
--*/
//配合移動到區塊變色
$('body').scrollspy({ target: '#navbarNav' });

(function($) {
  "use strict"; // Start of use strict
	
//增加滑動效果
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top + 10)
        }, 1500, "easeInOutExpo");//速度 跟 scroll 方式
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict






$(window).resize(resizeHandler);
$(window).triggerHandler("resize");


function resizeHandler(){


/*--
主視覺垂直置中
--*/


  var winH=$(window).height();
  var MobileindexImg = $(".mobileIndexImg").css("height");
  var PCindexImg = $(".PCIndexImg").css("height");
  var PCindexText = $(".PCindexText").css("height");
  // console.log(MobileindexImg,winH);
  $(".mobileIndexImg").offset({top:(winH-parseInt(MobileindexImg))/2});
  $(".PCIndexImg").offset({top:(winH-parseInt(PCindexImg))/2});
  $(".PCindexText").offset({top:(winH-parseInt(PCindexText))/2});

  var winW=$(window).width();
  // console.log(winW);


/*--
 go top (max-width: 767px)
--*/
  
  if( winW > 767){
    $('#back-to-top').fadeOut(0);
  }else{
    $('#back-to-top').css("display","none");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50 ) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });
    $("#back-to-top").click(function(){
      $("html,body").animate({
        scrollTop:0
      },900);
      return false;
    });  
  }

}


/*--
PC go top
--*/
$(".goTop").click(function(){
  $(this).children(".goTopImg").addClass("change_p-f").animate({
    "bottom": "110%"
    },900).animate({
      "bottom": "0%"
    },0,pcGoTop);
  $("html,body").animate({
    scrollTop:0
  },900);
  return false;
});
function pcGoTop(){
  $(".goTopImg").removeClass("change_p-f");
}

$(".navbar-brand").click(function(){
  $("html,body").animate({
    scrollTop:0
  },900);
  return false;
});

//Mouse over的狀態下註冊按鈕不會隱藏
//以下的mouseover-active是mouseover後動態給予的class name
//假設想要額外客製mouseover與純顯示按鈕時有不同的效果,可以在CSS那邊個別設定

var closetime = 2300;//不滾動頁面時，2.3秒自動消失
var setTimeoutId = null;
var scrolling = false;
jQuery(function($) {
   $(window).on('scroll', function() {
    scrolling = true;
      if (!!setTimeoutId) {
         clearTimeout(setTimeoutId);
       }   
      setTimeoutId = setTimeout(function() {
         scrolling = false;
       }, closetime); 
   });

  setInterval(function() {
    //這邊的active就是偵測到scroll頁面而把按鈕顯示出來的樣式
    $('#slideAD')[scrolling?'addClass':'removeClass']('active');
  }, 500);//每隔0.5秒就執行一次函數，這個無需修改
});
