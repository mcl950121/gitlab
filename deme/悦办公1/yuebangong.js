// JavaScript Document
window.onload=function(){

	var an1=document.getElementById('an1');
	var an11=document.getElementById('an11');
	var an2=document.getElementById('an2');
	var an22=document.getElementById('an22');
	var onoff=true;
	
	an1.onclick=function(){
		if(onoff){
			an11.style.display='none';
			onoff=false;	
		}else{
			an11.style.display='block';
			onoff=true;	
		}
	}
	an2.onclick=function(){
		if(onoff){
			an22.style.display='none';
			onoff=false;	
		}else{
			an22.style.display='block';
			onoff=true;	
		}
	}
//~~~~~~~~~	
	var s1=document.getElementById('s1');
	var s11=document.getElementById('s11');
	var s2=document.getElementById('s2');
	var s22=document.getElementById('s22');
	
	s1.onclick=function(){
		s1.className='hover';
		s2.className='';
		s11.style.display='block';
		s22.style.display='none';
	}
	s2.onclick=function(){
		s1.className='';
		s2.className='hover';
		s22.style.display='block';
		s11.style.display='none';
	}
//~~~~~~~~~~~~~~
	
  var oxiao = document.getElementById('xiaotu')
  var oda = document.getElementById('datu') 
  var ospan = oxiao.getElementsByTagName('span')[0];
  var oimg = oda.getElementsByTagName('img')[0]

  
	oxiao.onmousemove = function(ev){
		ev=ev||event;
		oda.style.display = 'block'			
		ospan.style.display = 'block'
		ospan.style.left = ev.clientX-(ospan.offsetWidth/2)-400+'px'
		ospan.style.top = ev.clientY-(ospan.offsetHeight/2)-200+'px'
	 
	if(ev.clientX-(ospan.offsetWidth/2)-400<0){
		ospan.style.left=0 
		   }	
	else if (ev.clientX-(ospan.offsetWidth/2)-400>oxiao.offsetWidth-ospan.offsetWidth){
		 ospan.style.left=oxiao.offsetWidth-ospan.offsetWidth+'px'
			
			   }
	if(ev.clientY-(ospan.offsetHeight/2)-200<0){
		ospan.style.top=0 
		   }	
	else if(ev.clientY-(ospan.offsetHeight/2)-200>oxiao.offsetHeight-ospan.offsetHeight){
		 ospan.style.top=oxiao.offsetHeight-ospan.offsetHeight+'px'			
			  }	
	
	var bfb=ospan.offsetTop/(oxiao.offsetHeight-ospan.offsetHeight)
    var bfb2=ospan.offsetLeft/(oxiao.offsetWidth-ospan.offsetWidth)
	
        oimg.style.top = -(oimg.offsetHeight-oda.offsetHeight)*bfb+'px'
        oimg.style.left = -(oimg.offsetWidth-oda.offsetWidth)*bfb2+'px'
		}
		 
	oxiao.onmouseout = function(){
		oda.style.display = 'none'
		ospan.style.display = 'none'
		} 
//~~~~~~~~~~~~~	
	var oDiv=document.getElementById('ul');
	var tim=null;
	var speed;
	function start(obj,long){
		clearInterval(obj.tim);
		obj.tim=setInterval(function (){
		speed=(long-obj.children[2].offsetHeight)/7;	
		speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
			if(obj.children[2].offsetHeight==long
			){clearInterval(tim)}
			
			else{
			obj.children[2].style.height=obj.children[2].offsetHeight+speed+'px'
			}
			},24)
		}
	for(var i=0;i<oDiv.children.length;i++){
		oDiv.children[i].onmouseover=function (){
			this.children[1].style.transform='rotate(180deg)';
			start(this,this.children[2].children[0].offsetHeight*this.children[2].children.length)
			
			}
		oDiv.children[i].onmouseout=function (){
			this.children[1].style.transform='rotate(0deg)';
			start(this,0)
			
			}
		}
	
}