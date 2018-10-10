// JavaScript Document
var _images=new Array();
_images[0]="image_al/bb.jpg";
_images[1]="image_al/aa.jpg";
_images[2]="image_al/cc.jpg";
_images[3]="image_al/dd.jpg";
_images[4]="image_al/ss.jpg";
var _timer=null;
var n=0;
var _opacity=0;
var _flag=0;
var _x=0;
function imgPlayer(){
	document.getElementById("imgObj").src=_images[n];
	_opacity+=0.05;
	if(_flag==1 && _opacity>=1){
		window.clearTimeout(_timer);
		return;
	}
	
	if(!document.all){
		document.getElementById("imgObj").style.opacity=_opacity;
	}else{
		document.getElementById("imgObj").style.filter.alpha.opacity=_opacity*100;
	}
	
	if(_opacity>=1){
		n++;
		_opacity=0
	}
	if(n>=_images.length){
		n=0;
		_opacity=0;	
	}
	if(_flag==0 || (_flag==1 && _opacity<=1)){
		_timer=window.setTimeout(imgPlayer,100);
	}
}
imgPlayer();
function addMouseEvent(_ctrl){
	for(var i=0;i<_ctrl.children.length;i++){
		_ctrl.children[i].onmouseover=function(){
			if(_timer!=null){
				window.clearTimeout(_timer);
			}
			_opacity=0;
			document.getElementById("imgObj").src=_images[n=parseInt(this.innerHTML-1)];
			document.getElementById("imgObj").style.opacity=_opacity;
			_flag=1;
			imgPlayer();
		}
		_ctrl.children[i].onmouseout=function(){
			window.clearTimeout(_timer);
			_flag=0;
			imgPlayer();
		}
	}
}

function getNumber(){
	var _ctrl=document.getElementById("pos");
	for(var i=1;i<=_images.length;i++){
		_ctrl.innerHTML+="<span>"+i+"</span>";
	}
	addMouseEvent(_ctrl);
}
getNumber();
