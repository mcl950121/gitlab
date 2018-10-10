$(function(){
	$('#use1').html(localStorage.getItem("user_name"));
	$('#shou').html(localStorage.getItem("user_phone"));
	
	$('#xiu').click(function(){
		window.location.href='pass.html'
	})
	$('#bian').click(function(){
		window.location.href='edit.html'
	})
	
	$('#out').click(function(){
		localStorage.clear();
		sessionStorage.clear();
		clearCookie();
		window.location.href='login.html'
	})

	function setCookie(cookie_name,cookie_value,timeOut) {
		var date=new Date();
		date.setDate(date.getDate()+timeOut);
		document.cookie=cookie_name+'='+escape(cookie_value)+';expires='+date.toGMTString();
	}
	function getCookie(u_n){
		var arr = document.cookie.split('; ');
		var name = arr.filter(function(item,index,array){
			return (item.indexOf(u_n)!=-1&&item.toString().split("=")[0].toString().length==u_n.length)
		})
		return unescape(name.toString().split('=')[1]);
	}
	function clearCookie(){
		setCookie('user_name',getCookie("user_name"),-1)
		setCookie('user_pass_word',getCookie("user_pass_word"),-1)	
	}
	
})
