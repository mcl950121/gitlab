// JavaScript Document
window.onload=function(){
	var oaa=document.getElementById('oma');
	var oma=document.getElementById('ma');
	var ali=oma.getElementsByTagName('li');
		for(var i=0;i<ali.length;i++){
			ali[i].onmouseover=function(){
				this.getElementsByTagName('div')[0].style.display='block';
				this.getElementsByTagName('a')[0].style.background='red';
				this.getElementsByTagName('div')[0].style.right=371+'px';     
			}
			ali[i].onmouseout=function(){
				this.getElementsByTagName('div')[0].style.display='none'; 
				this.getElementsByTagName('a')[0].style.background='black';  	
			}
		}
}