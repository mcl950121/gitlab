// JavaScript Document
window.onload=function(){
	//下拉菜单
	var ma1=document.getElementById("div1");
	var mb1=document.getElementById("di1");
	var mb2=document.getElementById("di2");
	var mb3=document.getElementById("di3");
	var mb4=document.getElementById("di4");
	var mb5=document.getElementById("di5");
	var mb6=document.getElementById("di6");
	var maa=document.getElementById("aaa");
	var maa1=document.getElementById("aaa1");
	var maa2=document.getElementById("aaa2");
	var maa3=document.getElementById("aaa3");
	var maa4=document.getElementById("aaa4");
	var maa5=document.getElementById("aaa5");
	var maa6=document.getElementById("aaa6");
	var oSpan=document.getElementById("shouye");
	var oSpan1=document.getElementById("shouye1");
	var oSpan2=document.getElementById("shouye2");
	var oSpan3=document.getElementById("shouye3");
	var oSpan4=document.getElementById("shouye4");
	var oSpan5=document.getElementById("shouye5");
	var oSpan6=document.getElementById("shouye6");
	var ob=document.getElementById("b");
	var ob1=document.getElementById("b1");
	var ob2=document.getElementById("b2");
	var ob3=document.getElementById("b3");
	var ob4=document.getElementById("b4");
	var ob5=document.getElementById("b5");
	var ob6=document.getElementById("b6");
	ma1.onmouseover = function(){
		oSpan.style.borderBottom="none";
		maa.style.display="block";
		ob.style.transform="rotate(180deg)";
	}
	ma1.onmouseout = function(){
		maa.style.display="none";
		ob.style.transform="rotate(0deg)";
	}	
	mb1.onmouseover = function(){
		oSpan1.style.borderBottom="none";
		maa1.style.display="block";
		ob1.style.transform="rotate(180deg)";
	}
	mb1.onmouseout = function(){
		maa1.style.display="none";
		ob1.style.transform="rotate(0deg)";
	}	
	mb2.onmouseover = function(){
		oSpan2.style.borderBottom="none";
		maa2.style.display="block";
		ob2.style.transform="rotate(180deg)";
	}
	mb2.onmouseout = function(){
		maa2.style.display="none";
		ob2.style.transform="rotate(0deg)";
	}	
	mb3.onmouseover = function(){
		oSpan3.style.borderBottom="none";
		maa3.style.display="block";
		ob3.style.transform="rotate(180deg)";
	}
	mb3.onmouseout = function(){
		maa3.style.display="none";
		ob3.style.transform="rotate(0deg)";
	}	
	mb4.onmouseover = function(){
		oSpan4.style.borderBottom="none";
		maa4.style.display="block";
		ob4.style.transform="rotate(180deg)";
	}
	mb4.onmouseout = function(){
		maa4.style.display="none";
		ob4.style.transform="rotate(0deg)";
	}	
	mb5.onmouseover = function(){
		oSpan5.style.borderBottom="none";
		maa5.style.display="block";
		ob5.style.transform="rotate(180deg)";
	}
	mb5.onmouseout = function(){
		maa5.style.display="none";
		ob5.style.transform="rotate(0deg)";
	}	
	mb6.onmouseover = function(){
		maa6.style.display="block";
		ob6.style.transform="rotate(180deg)";
	}
	mb6.onmouseout = function(){
		maa6.style.display="none";
		ob6.style.transform="rotate(0deg)";
	}	
	//banner图
	var oPic=document.getElementById('pic');
	var oImg=oPic.getElementsByTagName('img')[0];
	var arrImg=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];
	var oUl=oPic.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	num=0;
	
	for(var i=0;i<arrImg.length;i++){
		oUl.innerHTML+='<li>'+(i+1)+'</li>';
		}
	//初始化
	function tab (){
	oImg.src=arrImg[num];
	for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
			}
				aLi[num].className='hover';
	}
	tab();
	//鼠标点击
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			num=this.index;
			tab();
		}
	}
	
	//定时器
	function play(){
	timer=setInterval(function(){
		num++;
		if(num==aLi.length){
			num=0;
		}		
			tab();　
	},600);
	}
	play()
	oPic.onmousemove=function(){
		clearInterval(timer);
	};
	oPic.onmouseout=function(){
		play();
	};
	//更多
	var oGd1=document.getElementById('span');
	var oGd2=document.getElementById('gd');
	var oGd3=document.getElementById('gdtu');
	var gdImg=oGd3.getElementsByTagName('img')[0];
	var arrGd=['img/gd.jpg','img/gd2.jpg','img/gd3.jpg',];
	var num1=0;
	gdImg.src=arrGd[num1];
	oGd1.innerHTML=num1+1+'/'+arrGd.length;
	
		oGd2.onclick=function(){
			num1++;
			if(num1==arrGd.length){
				num1=0;
				}
			gdImg.src=arrGd[num1];
			oGd1.innerHTML=num1+1+'/'+arrGd.length;
			
		};

		
}