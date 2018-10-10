// JavaScript Document
window.onload=function(){
	var oP1=document.getElementById("p1");
	var oP2=document.getElementById("p2");
	var oNr=document.getElementById("nr");
	var num = 14;
	
	oP1.onclick = function(){
		
		if(num<25){num++}
		oNr.style.fontSize=num+"px";
	
		}
	
	oP2.onclick = function(){
		
		if(num>14){num--}
		oNr.style.fontSize=num+"px";
	
		}
	
	
	
	
}