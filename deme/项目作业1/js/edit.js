$(function(){
	
	$("#xyhm").blur(function(){
		var user_name=$("#xyhm").val();
		var reg_username=/^(([a-zA-Z][a-zA-Z0-9]{2,15})|([\u4E00-\u9FA5]{1,16}))$/;
		if(reg_username.test(user_name)){
			$('#xyhm1').html('输入正确');
			$('#xyhm1').css('color','green');
		}else if(user_name==""){
			$('#xyhm1').html('输入信息不能为空');
			$('#xyhm1').css('color','red');
		}else{
			$('#xyhm1').html('请输入汉字或英文字母1-16位');
			$('#xyhm1').css('color','red');
		}
	})	
	
	$('#yyhm').val(localStorage.getItem("user_name"));
	$('#qr').click(function(){
		var user_name=$('#xyhm').val();
		$.ajax({
			url:'http://10.115.12.226/project/data/user_update_name.php',
			data:{"user_name":user_name,"user_phone":localStorage.getItem("user_phone")},
			type:'post',
			dataType:'jsonp',					
			jsonp:'callback',
			jsonpCallback:'success_jsonnpCallback',
			success:function(data){
				debugger;
				localStorage.setItem('user_name',user_name)
				localStorage.setItem('user_pass_word',localStorage.getItem("user_pass_word"))
				localStorage.setItem('user_phone',localStorage.getItem("user_phone"))
				alert('修改成功')
				window.location='set.html'
			}
		})
	})
	$('#ret').click(function(){
		window.location='set.html';
	})
})