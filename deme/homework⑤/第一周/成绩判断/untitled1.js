// JavaScript Document
window.onload=function(){

var oFs=document.getElementById("fs");
var oQr=document.getElementById("qr");


oQr.onclick=function(){
	if(oFs.value>=80 && oFs.value<=100){
		alert("优秀");
		}
	else if(oFs.value>=60 && oFs.value<80){
		alert("良好");
		}
	else if(oFs.value<60){
		alert("不及格");
		}
	else{
		alert("什么玩意啊");
		}


}

	
}