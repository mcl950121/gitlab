// JavaScript Document
$(function(){
   $('.ma-y3z ul>li').mouseover(function(){
	    $(this).find('ul').stop().fadeIn();
	  //$(this).find('ul').stop().slideDown();
	})
   $('.ma-y3z ul>li').mouseout(function(){
	   $(this).find('ul').stop().fadeOut();
	  // $(this).find('ul').stop().slideUp();
	})
//手风琴

var oLi=$('.main-left ul>li');
	oLi.click(function(){
		$(this).find('ol').toggle();
	})
//小框
/*  $('.main-left ul li>ol').mouseover(function(){
	  $('.red').show()
	  })	
  $('.main-left ul li>ol').mouseout(function(){
	  $('.red').hide()
	  })
*/	  
	  
//登录框
$('.denglu').click(function(){
		$(this).addClass('hover');
		$('.denglu1').toggle(function(){
			$('.denglu').removeClass('hover')
		});	
})

})
