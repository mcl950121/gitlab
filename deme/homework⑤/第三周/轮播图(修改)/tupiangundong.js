// JavaScript Document
window.onload=function(){
	fun('pic1','onmouseover',['img/m1.jpg','img/m2.jpg','img/m3.jpg','img/m4.jpg','img/m5.jpg'],['a','b','c','d','e']);
	fun('pic2','onmouseover',['img/m1.jpg','img/m2.jpg','img/m3.jpg','img/m4.jpg'],['a','b','c','d']);
	
	function fun(id,fn,arrImg,arrText){
	var oPic=document.getElementById(id);
	var oP=oPic.getElementsByTagName('p')[0];
	var oSpan=oPic.getElementsByTagName('span')[0];
	var oUl=oPic.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var oImg=oPic.getElementsByTagName('img')[0];
	//var arrImg=['img/m1.jpg','img/m2.jpg','img/m3.jpg','img/m4.jpg','img/m5.jpg'];
	//var arrText=['a','b','c','d','e'];
	var num=0;
	
	
		
	for(var i=0;i<arrImg.length;i++){
		oUl.innerHTML+='<li>'+(i+1)+'</li>';
	}
	function tab(){
		oSpan.innerHTML=(num+1)+'/'+arrImg.length;
		oImg.src=arrImg[num];
		oP.innerHTML=arrText[num];
		for(var i=0;i<aLi.length;i++){
			aLi[i].className='';
		}
		aLi[num].className='hover';
	}
	
	tab();
	paly();
	//初始化
	oPic.onmouseover=function(){
		clearInterval(timer);
	};
	oPic.onmouseout=function(){
		paly();
	};
	function paly(){
		timer=setInterval(function(){
			num++;
			if(num==arrImg.length){
				num=0;
				}
				tab();
			},500);
	}
	
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i][fn]=function(){
			num=this.index;
			tab();
		}
	}
	
	}

	}