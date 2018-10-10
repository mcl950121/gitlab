// JavaScript Document
window.onload=function(){
    
    var oBoxz1=document.getElementById('boxz1');
    var oBoxz2=document.getElementById('boxz2');
    var oBoxz3=document.getElementById('boxz3');
    var oBoxr=document.getElementById('boxr');
    var oImg=oBoxr.getElementsByTagName('img')[0];
    var oUl=oBoxr.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('li');
    var arrLi=['图片一','图片二','图片三'];
    var arrImg1=['img/1.jpg','img/2.jpg','img/3.jpg'];
    var arrImg2=['img/4.jpg','img/5.jpg','img/6.jpg'];
    var arrImg3=['img/7.jpg','img/8.jpg','img/9.jpg'];
    var num=0;
    for(var i=0; i<arrLi.length; i++){
        oUl.innerHTML+='<li>'+arrLi[i]+'</li>';
    }
        


     
         oImg.src=arrImg1[num];
         oBoxz1.onclick=function(){
            oBoxz1.className='hover';
            oBoxz2.className='';
            oBoxz3.className='';        	
         	aLi[0].className='hover';
         	aLi[1].className='';
         	aLi[2].className='';
     for (var i = 0; i <arrImg1.length; i++) {
     	 aLi[i].index=i; 
     	 	oImg.src=arrImg1[num];
     	 	  aLi[i].onmouseover=function(){
     	 	  	aLi[0].className='hover';
                 oImg.src=arrImg1[this.index];
                 for(var i=0; i<arrImg1.length; i++){

                     aLi[i].className='';
                 } 
                 this.className='hover';
     	 	}
     	 }
     }





          oBoxz2.onclick=function(){
          	oBoxz1.className='';
          	oBoxz2.className='hover';
          	oBoxz3.className='';
          	aLi[0].className='';
          	aLi[1].className='hover';
          	aLi[2].className='';
          	oImg.src=arrImg2[num];
          	for(var i=0; i<arrImg2.length; i++){
          		aLi[i].index=i;
                aLi[i].onmouseover=function(){
                	oImg.src=arrImg2[this.index];
                	for(var i=0; i<arrImg2.length; i++){
                        aLi[i].className='';
                	}
                	this.className='hover';
                }
          	}
          }





          oBoxz3.onclick=function(){
          	oBoxz1.className='';
          	oBoxz2.className='';
          	oBoxz3.className='hover';
          	aLi[0].className='';
          	aLi[1].className='';
          	aLi[2].className='hover';
              oImg.src=arrImg3[num];
              for(var i=0; i<arrImg3.length; i++){
              	  aLi[i].index=i;
                  aLi[i].onmouseover=function(){
                  	oImg.src=arrImg3[this.index];
                  	for(var i=0; i<arrImg3.length; i++){

                         aLi[i].className='';
                  	}
                  	this.className='hover';
                  }
              }
          }
     

}