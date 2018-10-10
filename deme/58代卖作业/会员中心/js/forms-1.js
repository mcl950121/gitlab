// JavaScript Document
$(function(){
	var $sub=$(':submit');
	var result=0;
	
	var regip=/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})){3}$/
	var ip=$('.IP');
	ip.blur(function(){
		var ip1=ip.val();	
		if(regip.test(ip1)){
			result=0;
			$('.ip-1').html('对');
		}else{
			result=1;
			$('.ip-1').html('错')	
		}
	});
	
	var regnum=/^[0-9]+(\.[0-9]+){0,1}$/;
	var num=$('.num');
	num.blur(function(){
		var num1=num.val();	
		if(regnum.test(num1)){
			result=0;
			$('.num-1').html('对');
		}else{
			result=1;
			$('.num-1').html('错')	
		}
	});
	
	var regczr=/^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/;
	var czr=$('.czr');
	czr.blur(function(){
		var czr1=czr.val();	
		if(regczr.test(czr1)){
			result=0;
			$('.czr-1').html('对');
		}else{
			result=1;
			$('.czr-1').html('错')	
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
