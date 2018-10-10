// JavaScript Document
//window.onload=function(){
//  var oS=document.getElementById('s1');	
//  var oCon=document.getElementById('con');	
//  var timer=null;
//	function show(){
//	   clearInterval(timer);	
//	   oCon.style.display='block';
//	}
//	function hide(){
//	   timer=setTimeout(function(){
//	     oCon.style.display='none';
//	   },500);	
//	}
//	oS.onmouseover=show;
//	oS.onmouseout=hide;
//	oCon.onmouseover=show;
//	oCon.onmouseout=hide;
//	
//	
//}
$(function(){
	
  
	  
	 
	//下拉菜单 
	var oLi=$('.nav_in ul>li');
		  oLi.hover(function(){
			  $(this).find('ul').stop().slideToggle();
			  $(this).find('ul').addClass('hover');
			  })

    //登录
	
	
	//交易管理
	$('.content_z .s1').click(function(){
		$(this).nextAll('.div').slideToggle();
	})
	$('.content_z a').eq(0).addClass('hover');
	$('.content_z a').click(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
	})
	
	$('.ck').click(function(){
		$('.content_y1').show();
		$('.content_y').hide();
	})
	$('.zhifu c').click(function(){
		$('.content_y2').show();
		$('.content_y1').hide();
	})
	$('.zhifu d').click(function(){
		$('.content_y1').hide();
		$('.content_y').show();
	})
	$('.fh').click(function(){
		$('.content_y').show();
		$('.content_y2').hide();
	})
	$('.content_z a span').eq(0).click(function(){
		$('.div').find('.content_y8').show().siblings().hide();
	})
	$('.content_z a span').eq(1).click(function(){
		$('.div').find('.content_y').show().siblings().hide();
	})
	$('.content_z a span').eq(2).click(function(){
		$('.div').find('.content_y5').show().siblings().hide();
	})
	$('.content_z a span').eq(3).click(function(){
		//$(this).addClass('hover').siblings().removeClass('hover');
		$('.div').find('.content_y6').show().siblings().hide();
	})
	$('.content_z a span').eq(4).click(function(){
		$('.div').find('.content_y4').show().siblings().hide();
	})
	
	
})