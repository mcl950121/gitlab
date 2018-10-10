// JavaScript Document
$(function(){
 	
$(document).ready(function(){
	$(".Ltab li").click(function(){
	$(".Ltab li").eq($(this).index()).addClass("Lcur").siblings().removeClass('Lcur');
	$(".Lcen div").hide().eq($(this).index()).show();
       //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 

    });
});
	
	var oImg=$('.cen-b img');
	var oSpan=$('.cen-b span');
	var oDiv=$('.cen-b div');
	oSpan.width(oDiv.width()*2);
	oDiv.eq(1).html(oDiv.eq(0).html());
	var timer=null;
		$('.cen-b').hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(function(){
			var ml=	parseInt(oSpan.css('margin-left'));
			ml--;
			if(ml==-(oDiv.width())){
				ml=0;
			}
			oSpan.css({'margin-left':ml});
		},10);
		}).trigger('mouseleave');
		
		
		
		
		
		})