$(function(){
	function getCookie(u_n){
		var arr = document.cookie.split('; ');
		var rst = arr.filter(function(item,index,array){
			return (item.indexOf(u_n)!=-1&&item.toString().split("=")[0].toString().length==u_n.length)
		})
		return unescape(rst.toString().split('=')[1]);
	}
	
	if(getCookie('user_name') && getCookie('user_pass_word')){		
		$.ajax({
			url:'http://10.115.12.226/project/data/login.php',
			data:{"user_name":getCookie('user_name'),"user_pass_word":getCookie('user_pass_word')},
			type:'post',
			dataType:'jsonp',					
			jsonp:'callback',
			jsonpCallback:'success_jsonnpCallback',
			success:function(data){
				debugger;
				if(data.user_name==you.value && data.user_pass_word==pas.value){
					alert("自动登录成功")
					localStorage.setItem('user_name',data.user_name)
					localStorage.setItem('user_pass_word',data.user_pass_word)
					localStorage.setItem('user_phone',data.user_phone)
					window.location='order.html'
				}
			}
		})
	}
	
	$('.login').click(function(){
		var user_name=$('#username1').val();
		var user_pass_word=$('#pass1').val();
		$.ajax({
			url:'http://10.115.12.226/project/data/login.php',
			data:{"user_name":user_name,"user_pass_word":user_pass_word},
			type:'post',
			dataType:'jsonp',					
			jsonp:'callback',
			jsonpCallback:'success_jsonnpCallback',
			success:function(data){
				debugger;
				if(data==''){
					alert('用户名不存在或密码错误')
				}else{
					if($('#mian').is(':checked')){
						setCookie('user_name',data.user_name,7)
						setCookie('user_pass_word',data.user_pass_word,7)
					}
					localStorage.setItem('user_name',data.user_name)
					localStorage.setItem('user_pass_word',data.user_pass_word)
					localStorage.setItem('user_phone',data.user_phone)
					window.location='order.html'
				}
			},
			error:function(data){
				alert('登录失败')
			}
		})
	})
	$('.login2').click(function(){
		window.location='enroll.html'
	})
	
	var you=document.getElementById('username1');
	var pas=document.getElementById('pass1');	
	function setCookie(cookie_name,cookie_value,timeOut) {
		var date=new Date();
		date.setDate(date.getDate()+timeOut);
		document.cookie=cookie_name+'='+escape(cookie_value)+';expires='+date.toGMTString();
	}
	
	if(sessionStorage.user_name && sessionStorage.user_pass_word) {		
		you.value = sessionStorage.getItem("user_name");
		pas.value = sessionStorage.getItem("user_pass_word");
	} else {
		function getCookie(u_n){
			var arr = document.cookie.split('; ');
			var name = arr.filter(function(item,index,array){
				return (item.indexOf(u_n)!=-1&&item.toString().split("=")[0].toString().length==u_n.length)
			})
			return unescape(name.toString().split('=')[1]);
		}
		if(getCookie("user_name")&&getCookie("user_name")!='undefined'){
			you.value = getCookie("user_name");
		}
		if(getCookie("user_name")&&getCookie("user_name")!='undefined'){
			pas.value = getCookie("user_pass_word");
		}
	}
	
})
