// JavaScript Document
$(function(){
	var aLi=$('.box2 ul li');
	var aImg=$('.box2 div img');
	var timer1=null;
	var index=null;
	aLi.mouseover(function(){
		index=$(this).index();
		aImg.eq(index).fadeIn().siblings().fadeOut();
		$(this).addClass('hover').siblings().removeClass('hover');
	})
	$('.box2').hover(function(){
		clearInterval(timer1);
	},function(){
		timer1=setInterval(function(){
			index++;
			if(index==aLi.length){
				index=0;
			}
			aImg.eq(index).fadeIn().siblings().fadeOut();
			aLi.eq(index).addClass('hover').siblings().removeClass('hover');
		},1000)
	}).trigger('mouseleave');




});