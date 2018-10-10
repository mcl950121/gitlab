// JavaScript Document
$(function(){
	var $sub=$(':submit');
	var result=0;
	
	var regname=/^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/;
	var usename=$('.usename');
	usename.blur(function(){
		var name=usename.val();	
		if(regname.test(name)){
			result=0;
			$('.usename-1').html('对');
		}else{
			result=1;
			$('.usename-1').html('错')	
		}
	});
	
	var regphone=/^[1][358][0-9]{9}$/;
	var phone=$('.phone');
	phone.blur(function(){
		var ph=phone.val();	
		if(regphone.test(ph)){
			result=0;
			$('.phone-1').html('对');
		}else{
			result=1;
			$('.phone-1').html('错')	
		}
	});
	
	var regchongzhi=/^(([1-9]\d*)|0)(\.\d{1,2})?$/;
	var chongzhi=$('.chongzhi');
	chongzhi.blur(function(){
		var chongzhi1=chongzhi.val();	
		if(regchongzhi.test(chongzhi1)){
			result=0;
			$('.chongzhi-1').html('对');
		}else{
			result=1;
			$('.chongzhi-1').html('错')	
		}
	});
	
	var regje=/^(([1-9]\d*)|0)(\.\d{1,2})?$/;
	var je=$('.je');
	je.blur(function(){
		var je1=je.val();	
		if(regje.test(je1)){
			result=0;
			$('.je-1').html('对');
		}else{
			result=1;
			$('.je-1').html('错')	
		}
	});
	
	$sub.click(function(e){
		if(result==0){
			submit();
		}else{
			e.preventDefault();
		}
	})
	
	
});
