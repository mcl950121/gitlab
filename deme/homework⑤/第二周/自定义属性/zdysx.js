// JavaScript Document
window.onload=function(){
	
/*	var oList=document.getElementById('list');
	var aLi=document.getElementsByTagName('li');
	var arr=['a','b','c']
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].innerHTML=arr[i];
	}
	for(var i=0;i<aLi.length;i++){
		aLi.onclick=function(){
			alert(this.index)
		}
		
	}*/
	var aBtn=document.getElementsByTagName('input');
	var aP=document.getElementsByTagName('p');
	var arr=['a','b','c'];
	
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=0;
		aBtn[i].onclick=function(){
			this.value=arr[this.index]
			this.index++;
			if(this.index==arr.length-1){
				this.index=0;
			}
			aP[this.index].innerHTML=arr[this.value];
			
		}
	}
	/*for(var i=0;i<aBtn.length;i++){
	aBtn[i].onclick=function(){
		aP[i].innerHTML=arr[i];
	}
	
	}*/
	
}