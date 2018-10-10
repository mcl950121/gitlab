// JavaScript Document
window.onload=function(){
	
	var oDiv=document.getElementById('div');
	var oHong=document.getElementById('hong');
	var oLv=document.getElementById('lv');
	var oLan=document.getElementById('lan');
	var oKuan1=document.getElementById('kuan1');
	var oKuan2=document.getElementById('kuan2');
	var oKuan3=document.getElementById('kuan3');
	var oGao1=document.getElementById('gao1');
	var oGao2=document.getElementById('gao2');
	var oGao3=document.getElementById('gao3');
	var oHui=document.getElementById('huifu');
	var oQue=document.getElementById('queding');

	oHong.onclick = function (){
		oDiv.style.background='red';
	}
	oLv.onclick = function (){
		oDiv.style.background='green';
	}
	oLan.onclick = function (){
		oDiv.style.background='blue';
	}
	
	oKuan1.onclick = function (){
		oDiv.style.width='200px';
	}
	oKuan2.onclick = function (){
		oDiv.style.width='300px';
	}
	oKuan3.onclick = function (){
		oDiv.style.width='400px';
	}	

	oGao1.onclick = function (){
		oDiv.style.height='200px';
	}
	oGao2.onclick = function (){
		oDiv.style.height='300px';
	}
	oGao3.onclick = function (){
		oDiv.style.height='400px';
	}
	
	oHui.onclick = function (){
		oDiv.style.background='red';
		oDiv.style.width='400px';
		oDiv.style.height='400px';
	}
	
	
}