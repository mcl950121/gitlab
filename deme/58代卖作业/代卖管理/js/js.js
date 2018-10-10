// JavaScript Document
$(function(){
//导航	
	$('.ma-y3z ul>li').mouseover(function(){
		//$(this).find('ul').show();   //直接显示
		//$(this).find('ul').stop().fadeIn();  //渐显渐隐
		$(this).find('ul').stop().slideDown();	 //速度渐缓	
	})
	$('.ma-y3z ul>li').mouseout(function(){
		//$(this).find('ul').hide();
		//$(this).find('ul').stop().fadeOut();	
		$(this).find('ul').stop().slideUp();		
	})
//手风琴菜单
	var oLi=$('.main-left ul>li');
	oLi.click(function(){
		$(this).find('ol').toggle();
	})
//登录框
	$('.denglu').click(function(){
		$(this).addClass('hover');	
		$('.denglu1').toggle(function(){
			//$('.denglu').removeClass('hover')
		});	
	})
//表单验证
	var $sub=$(':submit');
	var phone=/^1[34578]\d{9}$/;
	var diname=/./;
	var name=/^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/;
	var qq=/[1-9]\d{4,}/
	var result=1;
	$('.dname').blur(function(){
		var diname1=$('.dname').val();
		if(diname.test(diname1)){
			result=0;
			$('.dname-1').html('对');
		}else{
			result=1;
			$('.dname-1').html('错');
		}
	});
	$('.usename').blur(function(){
		var name1=$('.usename').val();
		if(name.test(name1)){
			result=0;
			$('.usename-1').html('对');
		}else{
			result=1;
			$('.usename-1').html('错');
		}
	});
	$('.phone').blur(function(){		
		var phone1=$('.phone').val();
		if(phone.test(phone1)){
			result=0;
			$('.phone-1').html('对');
		}else{
			result=1;
			$('.phone-1').html('错');
		}
	});
	$('.q').blur(function(){		
		var qq1=$('.q').val();
		if(qq.test(qq1)){
			result=0;
			$('.q-1').html('对');
		}else{
			result=1;
			$('.q-1').html('错');
		}
	});
	/*$('input:eq(1)').blur(function(){
		var pass=$('input:eq(1)').val();
		if(pas.test(pass) && regpsw2.test(psw)){
			result=0;
			$('input:eq(1)+span').html('对');
		}else{
			result=1;
			$('input:eq(1)+span').html('错');
		}
	});
	
	$('input:eq(2)').blur(function(){
		var pass=$('input:eq(1)').val();
		var pass2=$('input:eq(2)').val();
		if(pass==pass2){
			result=0;
			$('input:eq(2)+span').html('对');
		}else{
			result=1;
			$('input:eq(2)+span').html('错');
		}
	});
	
	$('input:eq(3)').blur(function(){
		var email=$('input:eq(3)').val();
		if(mail.test(email)){
			result=0;
			$('input:eq(3)+span').html('对');
		}else{
			result=1;
			$('input:eq(3)+span').html('错');
		}
	});
	$sub.click(function(e){
		if(result==0){
			submit();
		}else{
			e.preventDefault();
		}
	})*/

})