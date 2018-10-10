// JavaScript Document
window.onload=function () {
	
	var oDiv=document.getElementById('div');
	var oBtn=document.getElementById('btn');
	var oBtn2=document.getElementById('btn2');
	var arr=['img/m1.jpg','img/m2.jpg','img/m3.jpg','img/m4.jpg','img/m5.jpg'];
	var num=0;
	var oSpan=document.getElementById('span');
	var arr1=['a','b','c','d','e',];
	var oP=document.getElementById('p');
	var oXh=document.getElementById('xh');
	var oSx=document.getElementById('sx');
	
	function abc (){
		oDiv.innerHTML='<img src='+arr[num]+'>';
		oSpan.innerHTML=num+1+'/'+arr.length;
		oP.innerHTML=arr1[num];   
	}
	abc();
	//循环切换
	oXh.onclick=function (){
	oBtn.onclick=function(){
		num++;
		if(num==arr.length){
			num=0;
			//num=arr.length-1;
		}
		
		abc();
	} 
	
	oBtn2.onclick=function(){
		num--;
		if(num==-1){
			num=arr.length-1;
			//num=arr.length-1;
		}
		
		abc();
	}
	}
	
	//顺序切换
	oSx.onclick=function (){
	oBtn.onclick=function(){
		num++;
		if(num==arr.length){
			//num=0;
			num=arr.length-1;
			alert('已经是最后一张了');
		}
		
		abc();
	} 
	
	oBtn2.onclick=function(){
		num--;
		if(num==-1){
			num=0;
			//num=arr.length-1;
			alert('已经是第一张了');
		}
		
		abc();
	}
	}
	
	
}