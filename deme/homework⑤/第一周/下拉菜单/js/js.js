// JavaScript Document
// JavaScript Document
window.onload=function(){
	var oDiv1=document.getElementById("div1");
	var oDiv2=document.getElementById("div2");
	var oSpan=document.getElementById("span1");
	var oS=document.getElementById("s1");

	//oDiv1.style.background="red";
	oDiv1.onmouseover = function(){
		oSpan.style.borderBottom="none";
		oDiv2.style.display="block";
		oS.style.transform='rotate(180deg)';
		
		}
	oDiv1.onmouseout = function(){
		
		oDiv2.style.display="none";
		oSpan.style.borderBottom="1px solid #000";
		oS.style.transform='rotate(0deg)';
		}	
		
}
