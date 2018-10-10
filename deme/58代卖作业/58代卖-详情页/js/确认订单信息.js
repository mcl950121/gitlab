// JavaScript Document
$(function(){
	/*$('.ma-y3z ul>li').mouseover(function(){
		$(this).find('ul').slideDown();
		})
	$('.ma-y3z ul>li').mouseout(function(){
		$(this).find('ul').slideUp();
		})*/
	var oLi=$('.ma-y3z ul>li');
    oLi.hover(function(){
		$(this).find('ul').stop().slideToggle();
		});
		$('.ma-y3z ul li ul li').hover(function(){
		 $(this).addClass('hover')
		},function(){
		 $(this).removeClass('hover')
			})
	
	
	
	var $sub=$(':submit');
	var regname=/^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/;
	
	$('.one').blur(function(){
		
		var name=$('.one').val();
		if( regname.test(name)){
			
			$('.one-1').html('对');
			result=0;
			}else{
				$('.one-1').html('错');
			    result=1;
			 	};
		
		});
	
	var regnum=/^[0-9]{6}$/;
	
	$('.tow').blur(function(){
		
		var num=$('.tow').val();
		if( regnum.test(num)){
		
			$('.tow-1').html('对');
				result=0;
			}else{
				$('.tow-1').html('错');
			    result=1;
			 	};
		
		});
		
	
	var regtext=/^1[34578]\d{9}$/;
	$('.three').blur(function(){
		var tel=$('.three').val();
		if(regtext.test(tel)){
			
			$('.three-1').html('对');
			result=0;
			}else{
				$('three-1').html('错');
				result=1;
			}
		
		});
	
		$sub.click(function(e){
			if(result==0){
				submit();
				}else{
				e.preventDefault();
					}
			
			});
		
	})