// JavaScript Document
window.onload=function(){
	
	var oText=document.getElementById('text');
	var oBtn=document.getElementById('btn');
	var Nr='';
	
	oBtn.onclick=function(){
		Nr=oText.value;
		if(Nr==''){
			alert('没有输入QQ号码');
		}	
		else if(isNaN(Nr)){
			alert('请输入纯数字');
		}else if(parseInt(Nr)!=parseFloat(Nr)){
			alert('号码不能为小数');
		}
		else if(Nr.length<5||Nr.length>11){
			alert('请输入5-11位的数字');
		}
		else if(Nr[0]==0){
			alert('第一位不能为0');
		}
	}
	
}