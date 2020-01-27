	$(document).ready(init);
	function init(){
		$(".whiteText").delay(1200).fadeIn(1500);
		for (var i=0; i<=5; i++){
		$(".picChange").append("<img src='images/index_"+i+".jpg' />");
		}
		$(".picChange img:not(:first)").fadeOut(0);//將上面的照片全部fadeOut隱藏s
		$(".picChange img:first").fadeIn(1500);//將上面的照片全部fadeOut隱藏s
		}
	setInterval(nextHandler,3000);
	var index=1;
	function nextHandler(event){
		if(index<7){
			index++;
		//console.log(index);
		}else{
			index=2;
		//console.log(index);
		}
		$(".picChange img:eq(" +(index-1)+ ")").fadeIn(1500);
		$(".picChange img:gt(" +(index-1)+ ")").fadeOut(1500);
	}

/*$(window).resize(resizeHandler);
$(window).triggerHandler("resize");
function resizeHandler(){
	var winW=$(window).width();
	var winH=$(window).height();
	var whiteTextH = $(".whiteTextImg").height();
	var picChangeH = $(".picChange img").height();
	console.log(whiteTextH);
	console.log(picChangeH);
	$(".whiteText").css("top",(picChangeH-whiteTextH)/2);
	
}*/


