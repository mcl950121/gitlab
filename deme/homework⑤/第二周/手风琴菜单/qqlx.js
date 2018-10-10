// JavaScript Document
window.onload=function () {
	
	var oUl=document.getElementById('list');
	var aLi=oUl.getElementsByTagName('li');
	var aH3=oUl.getElementsByTagName('h3');
	//alert(aLi.length)
	var aUl=oUl.getElementsByTagName('ul');
	var aS=document.getElementsByTagName("s"); 
	var arrLi=[];
	onoff=true;
	for(var n=0;n<aH3.length;n++){
		aH3[n].index=n;
		aH3[n].onclick = function(){
			if(onoff){
				aUl[this.index].style.display='block';
				aS[this.index].style.transform='rotate(90deg)';
				onoff=false;
			}
			else{
				aUl[this.index].style.display='none';
				aS[this.index].style.transform='rotate(0deg)';
				onoff=true;
			}
		}
}		
		for(var i=0;i<aUl.length;i++){
			var aLis=aUl[i].getElementsByTagName('li');
			for(var j=0;j<aLis.length;j++){
				arrLi.push(aLis[j]);
				/*aLis[j].onmouseover = function(){
					this.style.background='yellow';
				}
				aLis[j].onmouseout = function(){
					this.style.background='green';
				}*/
			}	
			}
			for(var i=0;i<arrLi.length;i++){
				arrLi[i].onclick=function(){
					for(var i=0;i<arrLi.length;i++){
						arrLi[i].className='';	
				}
				this.className='hover';
				
			}
		}	
	
	}
	
	
	
	
	
	
