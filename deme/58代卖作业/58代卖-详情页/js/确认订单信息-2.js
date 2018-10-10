// JavaScript Document
/*window.onload=function(){
  var oS=document.getElementById('s1');	
  var oCon=document.getElementById('con');	
  var timer=null;
	function show(){
	   clearInterval(timer);	
	   oCon.style.display='block';
	}
	function hide(){
	   timer=setTimeout(function(){
	     oCon.style.display='none';
	   },500);	
	}
	oS.onmouseover=show;
	oS.onmouseout=hide;
	oCon.onmouseover=show;
	oCon.onmouseout=hide;
}*/
$(function(){
	$('.xszn').click(function(){
		$(this).nextAll().toggle();
	})
    $('.xszn2').click(function(){
		$(this).nextAll().toggle();
	})
	$('.xszn3').click(function(){
		$(this).nextAll().toggle();
	})
   	$('.xszn4').click(function(){
		$(this).nextAll().toggle();
	})
	$('.xszn5').click(function(){
		$(this).nextAll().toggle();
	})
	
	
//-----------------------------------------------//
	$('.nav ul>li').mouseover(function(){
		$(this).find('ul').stop().slideDown();
	})
	$('.nav ul>li').mouseout(function(){
		$(this).find('ul').stop().slideUp();
	})

//-----------------------------------------------------------//

$('.fix ul>li').mouseover(function(){
		$(this).find('ul').stop().slideDown();
	})
	$('.fix ul>li').mouseout(function(){
		$(this).find('ul').stop().slideUp();
	})	
	
	


//------------------------------------------------//


$(window).scroll(function(){
		if($(document).scrollTop()>135){
			$('.fix').slideDown();
		}else{
			$('.fix').slideUp();
		}
	});
	
	$(window).scroll(function(){
		if($(document).scrollTop()>$(window).height()){
			$('.back').slideDown();
		}else{
			$('.back').slideUp();
		}
	});
	
	$('.back').click(function(){
		$('body,html').animate({'scrollTop':0},500);
	});
	
	
})


//----------------------------------------------------------------//

$('.sanjiao').click(function(){
		$(this).addClass('hover');
		$('#s1').addClass('hover');	
		$('#con').toggle(function(){
			
			
		},function(){
			$('#s1').removeClass('hover');
			});
		
		
		
		
		
	})
/*$('.sanjiao').mouseout(function(){
	$(this).removeClass('hover')
	})*/

