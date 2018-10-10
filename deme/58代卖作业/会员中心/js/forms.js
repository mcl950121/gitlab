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
	
	var regbirth=/^[\d]{4}[-\ ][\d]{1,2}[-\ ][\d]{1,2}$/;
	var birth=$('.birth');
	birth.blur(function(){
		var bir=birth.val();	
		if(regbirth.test(bir)){
			result=0;
			$('.birth-1').html('对');
		}else{
			result=1;
			$('.birth-1').html('错')	
		}
	});
	
	var regtel=/^0\d{2,3}-\d{5,9}|0\d{2,3}-\d{5,9}$/;
	var tel=$('.tel');
	tel.blur(function(){
		var te=tel.val();	
		if(regtel.test(te)){
			result=0;
			$('.tel-1').html('对');
		}else{
			result=1;
			$('.tel-1').html('错')	
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
	
	var regaddress=/^(?=.*?[\u4E00-\u9FA5])[\d\u4E00-\u9FA5]+$/;
	var address=$('.address');
	address.blur(function(){
		var add=address.val();	
		if(regaddress.test(add)){
			result=0;
			$('.address-1').html('对');
		}else{
			result=1;
			$('.address-1').html('错')	
		}
	});
	
	var regyzbm=/^[0-9]{6}$/;
	var yzbm=$('.yzbm');
	yzbm.blur(function(){
		var yz=yzbm.val();	
		if(regyzbm.test(yz)){
			result=0;
			$('.yzbm-1').html('对');
		}else{
			result=1;
			$('.yzbm-1').html('错')	
		}
	});
	
	var regnc=/^[\u4e00-\u9fa5]{1,6}|[a-zA-Z]{1,12}$/;
	var nc=$('.nc');
	nc.blur(function(){
		var n=nc.val();	
		if(regnc.test(n)){
			result=0;
			$('.nc-1').html('对');
		}else{
			result=1;
			$('.nc-1').html('错')	
		}
	});
	
	var regbgdh=/^0\d{2,3}-\d{5,9}|0\d{2,3}-\d{5,9}$/;
	var bgdh=$('.bgdh');
	bgdh.blur(function(){
		var bg=bgdh.val();	
		if(regbgdh.test(bg)){
			result=0;
			$('.bgdh-1').html('对');
		}else{
			result=1;
			$('.bgdh-1').html('错')	
		}
	});

	var regcz=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
	var cz=$('.cz');
	cz.blur(function(){
		var cz1=cz.val();	
		if(regcz.test(cz1)){
			result=0;
			$('.cz-1').html('对');
		}else{
			result=1;
			$('.cz-1').html('错')	
		}
	});
	
	var regxlt=/^(0[0-9]{9,11})$|^((13|15|18|14|17)[0-9]{9})$/;
	var xlt=$('.xlt');
	xlt.blur(function(){
		var xlt1=xlt.val();	
		if(regxlt.test(xlt1)){
			result=0;
			$('.xlt-1').html('对');
		}else{
			result=1;
			$('.xlt-1').html('错')	
		}
	});
	
	var regsex=/^['男'|'女']$/ ;
	var sex=$('.sex');
	sex.blur(function(){
		var sex1=sex.val();	
		if(regsex.test(sex1)){
			result=0;
			$('.sex-1').html('对');
		}else{
			result=1;
			$('.sex-1').html('错')	
		}
	});
	
	var regsfz=/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
	var sfz=$('.sfz');
	sfz.blur(function(){
		var sfz1=sfz.val();	
		if(regsfz.test(sfz1)){
			result=0;
			$('.sfz-1').html('对');
		}else{
			result=1;
			$('.sfz-1').html('错')	
		}
	});
	
	var regqq=/^\d{5,10}$/;
	var qq=$('.qq');
	qq.blur(function(){
		var qq1=qq.val();	
		if(regqq.test(qq1)){
			result=0;
			$('.qq-1').html('对');
		}else{
			result=1;
			$('.qq-1').html('错')	
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
