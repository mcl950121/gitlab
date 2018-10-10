$(function(){
	var flag=false;
	var flag2=false;
	var flag3=false;
	var flag4=false;
	//验证用户名
	$("#username").blur(function(){
		var user_name=$("#username").val();
		var reg_username=/^(([a-zA-Z][a-zA-Z0-9]{2,15})|([\u4E00-\u9FA5]{1,16}))$/;
		if(reg_username.test(user_name)){
			flag=true;
			$('#span1').html('输入正确');
			$('#span1').css('color','green');
		}else if(user_name==""){
			flag=false;
			$('#span1').html('输入信息不能为空');
			$('#span1').css('color','red');
		}else{
			flag=false;
			$('#span1').html('请输入汉字或英文字母1-16位');
			$('#span1').css('color','red');
		}
	})	
	//验证手机号
	$("#phone").blur(function(){
		var user_phone=$("#phone").val();
		reg_phone=/^1[34578]\d{9}$/;
		if(reg_phone.test(user_phone)){
			flag2=true;
			$('#span2').html('输入正确');
			$('#span2').css('color','green');
		}else if(user_phone==""){
			flag2=false;
			$('#span2').html('输入信息不能为空');
			$('#span2').css('color','red');
		}else{
			flag2=false;
			$('#span2').html('请输入11位数字');
			$('#span2').css('color','red');
		}
	})
	//验证密码
	$('#pass').blur(function(){
		var user_pass_word=$('#pass').val();
		var reg_pass_word=/^(\w){6,20}$/;
		if(reg_pass_word.test(user_pass_word)){
			flag3=true;
			$('#span3').html('输入正确');
			$('#span3').css('color','green');
		}else if(user_pass_word==""){
			flag3=false;
			$('#span3').html('输入信息不能为空');
			$('#span3').css('color','red');
		}else{
			flag3=false;
			$('#span3').html('请输入数字或英文字母1-16位');
			$('#span3').css('color','red');
		}
	})
	//确认密码
	$('#pass1').blur(function(){
		var user_pass_word=$('#pass').val();
		var user_pass_word1=$('#pass1').val();
		if(user_pass_word==user_pass_word1){
			flag4=true;
			$('#span4').html('输入正确');
			$('#span4').css('color','green');
		}else if(user_pass_word1==""){
			flag4=false;
			$('#span4').html('输入信息不能为空');
			$('#span4').css('color','red');
		}else{
			flag4=false;
			$('#span4').html('与上面输入不符');
			$('#span4').css('color','red');
		}
	})

	$('.enroll').click(function(){
		var user_name=$('#username').val();
		var user_pass_word=$('#pass').val();
		var user_phone=$('#phone').val();
		if(flag==true&&flag2==true&&flag3==true&&flag4==true){
			$.ajax({
				url:'http://10.115.12.226/project/data/register.php',
				data:{"user_name":user_name,"user_pass_word":user_pass_word,"user_phone":user_phone},
				dataType:'jsonp',
				type:'post',
				jsonp:'callback',
				jsonpCallback:'success_jsonnpCallback',
				success:function(data){
					debugger;
					if(data.msg=='success'){
						//提示语
						sessionStorage.setItem('user_name',user_name);
						sessionStorage.setItem('user_pass_word',user_pass_word);
//						localStorage.setItem("user_name", data.user_name);
//						localStorage.setItem("user_pass_word", data.user_pass_word);
						window.location='login.html'
					}
					if(data.msg=='err'){
						alert(data.reason); 
					}
				}
			})
		}else{
			alert('请核对，填写有误')
		}
	})


})