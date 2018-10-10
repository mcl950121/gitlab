// JavaScript Document
window.onload=function (){
	
	var oDiv=document.getElementById('div');
	var oSx=document.getElementById('sx');
	var oZhi=document.getElementById('zhi');
	var oBtn=document.getElementById('btn');
	
	oBtn['onclick']=function () {
		
		oDiv.style[oSx.value]=oZhi.value;
		//oDiv.style.styleFloat="right";   //IE
		//oDiv.style.cssFloat="right";   //非IE
		oDiv.className='hover';
		oDiv.innerHTML='<span style="float:right">你好</span>';
	}
	
}