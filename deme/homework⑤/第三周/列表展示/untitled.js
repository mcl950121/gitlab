// JavaScript Document
window.onload=function(){
	var oUl=document.getElementById('list');
	var aLi=oUl.getElementsByTagName('li');
	var aSpan=oUl.getElementsByTagName('span');
	//var aDiv=oUl.getElementsByTagName('div');
	for(var i=0; i<aLi.length; i++){
		aLi[i].onmouseover=function(){
            this.getElementsByTagName('div')[0].style.display='block';
			this.getElementsByTagName('span')[0].style.display='none';  
		}

		aLi[i].onmouseout=function(){
            this.getElementsByTagName('div')[0].style.display='none'; 
			this.getElementsByTagName('span')[0].style.display='block'; 
		}
	}
}