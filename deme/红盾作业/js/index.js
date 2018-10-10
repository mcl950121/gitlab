// JavaScript Document
function start(obj,long){
	var tim=null;
	var speed;
	clearInterval(obj.tim);
	obj.tim=setInterval(function (){
	speed=(long-obj.children[1].offsetHeight)/7;	
	speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
		if(obj.children[1].offsetHeight==long
		){clearInterval(tim)}
			
		else{
		obj.children[1].style.height=obj.children[1].offsetHeight+speed+'px'
		}
		},24)
}

window.onload=function(){
	var oDiv=document.getElementById('mul');
	
	for(var i=0;i<oDiv.children.length;i++){
		oDiv.children[i].onmouseover=function (){
			start(this,this.children[1].children[0].offsetHeight*this.children[1].children.length)
			oDiv.children.id='mull';
			}
		oDiv.children[i].onmouseout=function (){
			start(this,0)
			this.className='';
			}
		}
//~~~~~~~~~~~~~~~
			var Ban=document.getElementById('ban');
			var ul=Ban.getElementsByTagName('ul')[0];
			var tim=null;
			var num=0;
			var ol=Ban.getElementsByTagName('ol')[0];	
			var dian=document.getElementById('dian');
			var p=dian.getElementsByTagName('p')[0];
			var a=p.getElementsByTagName('a');
			function play(){
				clearInterval(tim);
				tim=setInterval(function(){
				ul.appendChild(ul.firstElementChild);
				ol.appendChild(ol.firstElementChild);
				},1000)	
			}
			play();
		ul.onmousemove=function(){
			clearInterval(tim);
		}
		ul.onmouseout=function(){
			play();
		}
		
		for(var i=0;i<a.length;i++){
			a[i].index=i;
			a[i].onmouseover=function(){
				ul.appendChild(ul.firstElementChild);
				ol.appendChild(ol.firstElementChild);
				clearInterval(tim);
			
			a[i].onmouseout=function(){
				play();
			}
		}
}		
//~~~~~~~~~~~`		
	var oul=document.getElementById('ul');
	
	for(var i=0;i<oul.children.length;i++){
		oul.children[i].onmouseover=function (){
			start(this,120)
			}
		oul.children[i].onmouseout=function (){
			start(this,0)
			}
		}
//~~~~~~~~~~
	var oul2=document.getElementById('ul2');
	
	for(var i=0;i<oul2.children.length;i++){
		oul2.children[i].onmouseover=function (){
			start(this,147)
			}
		oul2.children[i].onmouseout=function (){
			start(this,0)
			}
		}		
		
}