// JavaScript Document
window.onload=function(){
	
	var oUl=document.getElementById('list');
	var aLi=oUl.getElementsByTagName('li');
	
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
		
		this.getElementsByTagName('div')[0].style.display='block';
		
		}
	}
	
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseout=function(){
		
		this.getElementsByTagName('div')[0].style.display='none';
		
		}
	}
	
	
}