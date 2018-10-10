// JavaScript Document
window.onload=function (){
//	
//	var oBtn=document.getElementsByTagName('input')[0];
//	var oUl=document.getElementsByTagName('ul')[0];
//	var oDiv=['<div style="width:100px;height:100px;background:red;">'+'</div>'];
//	var onoff=true;
//	
//	//var i=oDiv.length;
//	
//		
//		oBtn.onclick=function(){
//			if(onoff){
//			
//		for(var i=0;i<10;i++){
//			
//		oUl.innerHTML+='<li style="float:left;margin:10px;list-style:none">'+oDiv+i+'</li>';
//		onoff=false;
//		
//		}
//		
//		
//		}
//		
//	}
var oDiv=document.getElementsByTagName('div');
var oBtn=document.getElementsByTagName('input')[0];

oBtn.onclick=function(){
	for(var i=0;i<10;i++){
		
		document.body.innerHTML+='<div>'+i+'</div>';
		oDiv[i].style.left=10+60*i+'px';
		
		}
	
}
	
}