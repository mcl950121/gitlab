$(function(){
	
	$('#ymm').blur(function(){
		var user_pass_word=$('#ymm').val();
		var reg_pass_word=/^(\w){6,20}$/;
		if(reg_pass_word.test(user_pass_word)){
			$('#ymm1').html('输入正确');
			$('#ymm1').css('color','green');
		}else if(user_pass_word==""){
			$('#ymm1').html('输入信息不能为空');
			$('#ymm1').css('color','red');
		}else{
			$('#ymm1').html('请输入数字或英文字母1-16位');
			$('#ymm1').css('color','red');
		}
	})
	$('#xmm').blur(function(){
		var user_pass_word=$('#xmm').val();
		var reg_pass_word=/^(\w){6,20}$/;
		if(reg_pass_word.test(user_pass_word)){
			$('#xmm1').html('输入正确');
			$('#xmm1').css('color','green');
		}else if(user_pass_word==""){
			$('#xmm1').html('输入信息不能为空');
			$('#xmm1').css('color','red');
		}else{
			$('#xmm1').html('请输入数字或英文字母1-16位');
			$('#xmm1').css('color','red');
		}
	})
	
	$('#qr').click(function(){
		var user_pass_word1=$('#ymm').val();	
		if(user_pass_word1===localStorage.getItem("user_pass_word")){
			var user_pass_word=$('#xmm').val();
			$.ajax({
				url:"http://10.115.12.226/project/data/user_update_pwd.php",
				data:{"user_pass_word":user_pass_word,"user_phone":localStorage.getItem("user_phone")},
				type:'post',
				dataType:'jsonp',					
				jsonp:'callback',
				jsonpCallback:'success_jsonnpCallback',
				success:function(data){
					debugger;
					localStorage.setItem('user_name',localStorage.getItem("user_name"))
					localStorage.setItem('user_pass_word',user_pass_word)
					localStorage.setItem('user_phone',localStorage.getItem("user_phone"))
					alert('修改成功')
					window.location='login.html'
				}
			})
		}else{
			alert('密码输入有误')
		}
		
	})
	$('#pass_return').click(function(){
		window.location='set.html';
	})
})