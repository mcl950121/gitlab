// JavaScript Document
window.onload=function(){
	
	var oPm=document.getElementById("pm");
	var oNr=document.getElementById("nr");
	var oFs=document.getElementById("fs");
	var oWm1=document.getElementById("wm1");
	var oWm2=document.getElementById("wm2");
	var oImg=document.getElementById("img");
	var onoff=true
	
	oWm1.onclick=function(){
	
	oFs.onclick=function(){
		if(oNr.value!=''){
		
		oPm.innerHTML=oPm.innerHTML+'<span style="float:right">'+oNr.value+":"+oWm1.innerHTML+'</span>'+"</br>"
		oNr.value='';
		}
		//oWm1.style.float="right"
	}
	}
//我	
	oWm2.onclick=function(){
	
	oFs.onclick=function(){
		if(oNr.value!=''){
		
		oPm.innerHTML=oPm.innerHTML+oWm2.innerHTML+":"+oNr.value+"</br>";
		oNr.value='';
		}
	}
	}
	
//你	
oImg.onclick=function(){
if(onoff){
			oImg.src=("images/w.jpg");
			onoff=false;
			}
		else{
			oImg.src=("images/n.jpg");
			onoff=true;
			}

}
	
}