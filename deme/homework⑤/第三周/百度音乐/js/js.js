window.onload=function(){
     var oDiv=document.getElementById('div');
     var oTop=document.getElementById('top');
     var oUl=oDiv.getElementsByTagName('ul')[0];
     var aLi=oUl.getElementsByTagName('li');
     var aInput=oUl.getElementsByTagName('input');
     var oBottom=document.getElementById('bottom');
     var oLaoda=document.getElementById('laoda');
     var arr=["#f7ffff","#fff","#f7ffff","#fff","#f7ffff","#fff"];

     for(var i=0; i<aLi.length; i++){
         aLi[i].style.background=arr[i];
     }
    oLaoda.onclick=function(){
        for(var i=0; i<aInput.length; i++){
        	if(!aInput[i].checked){
               aInput[i].checked=true;
        	}else{
        		aInput[i].checked=false;
        	}
            
        }      
     }








     	for(var i=0; i<aInput.length; i++){
            if(aInput[i].checked!=true){   
     	  aInput[i].onclick=function(){
     		oLaoda.checked=false;
     	}
     }else{
          oLaoda.checked=true;
     }
 }



     /*for(var i=0; i<aInput.length-1; i++){
     	aInput[i].onclick=function(){
     	if(aInput[i].checked==true){
              oLaoda.checked=true;
     	}
      }
     }*/



    















}