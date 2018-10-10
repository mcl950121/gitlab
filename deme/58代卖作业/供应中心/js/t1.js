// JavaScript Document
window.onload=function(){
  var oS=document.getElementById('s1');	
  var oCon=document.getElementById('con');	
  var timer=null;
	function show(){
	   clearInterval(timer);	
	   oCon.style.display='block';
	}
	function hide(){
	   timer=setTimeout(function(){
	     oCon.style.display='none';
	   },500);	
	}
	oS.onmouseover=show;
	oS.onmouseout=hide;
	oCon.onmouseover=show;
	oCon.onmouseout=hide;
}

$(function(){
	$('.sj').hover(function(){
		$(this).next('.sj1').toggle();
	})
	$('.sj1').hover(function(){
	$(this).toggle();
	})
})

