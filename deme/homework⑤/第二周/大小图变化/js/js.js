window.onload=function(){
	var oBut1=document.getElementById('but1');
	var oBut2=document.getElementById('but2');
	var oBut3=document.getElementById('but3');
	var oDatu=document.getElementById('datu');
	var oXiaotu=document.getElementById('xiaotu');
	var oLiebiao=document.getElementById('liebiao');





     oBut1.onclick=function(){
     	oDatu.style.display='block';
     	oXiaotu.style.display='none';
     	oLiebiao.style.display='none';

     }


    oBut2.onclick=function(){
     	oXiaotu.style.display='block';
     	oDatu.style.display='none';
     	oLiebiao.style.display='none';
     }
     



     oBut3.onclick=function(){
     	oLiebiao.style.display='block';
     	oXiaotu.style.display='none';
     	oDatu.style.display='none';
     }



}