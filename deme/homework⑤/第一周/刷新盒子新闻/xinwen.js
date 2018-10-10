// JavaScript Document
window.onload=function () {
	
	var oBtn=document.getElementsByTagName('input')[0];
	var oUl=document.getElementsByTagName('ul')[0];
	var arr=['艾萨克水电费','少打了快放假啦','卡的国家肯德基','拿出自己看哭了']
	var onoff=true;
	
	oBtn.onclick=function(){
		
	if(onoff){
		
	for(var i=0;i<arr.length;i++){
		oUl.innerHTML+='<li>'+arr[i]+'</li>';
	}
		onoff=false
		}
	
	}

}