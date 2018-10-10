// JavaScript Document
window.onload=function(){
 var op2=document.getElementById("p2");
 var op1=document.getElementById("p1");
   op2.onclick=function(){
   if(op1.value=="html"||op1.value=="js"||op1.value=="css"||op1.value=="html5"){
	     alert("通过")
   }else{
	   alert("不通过")
   }
   }
}

