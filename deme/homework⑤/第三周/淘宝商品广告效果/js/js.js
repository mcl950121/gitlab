window.onload=function(){


    var oLeft=document.getElementById('left');
    var oUl=oLeft.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('li');
    var oImg=document.getElementById('img');
    var arr1=['连衣裙','雪纺','T恤','铅笔裤','婚纱','外套','连体裤'];
    var arrImg=['img/2.jpg','img/13.jpg','img/14.jpg','img/12.jpg','img/11.jpg','img/10.jpg','img/9.jpg'];
    var oRight=document.getElementById('right');
    var aSpan=oRight.getElementsByTagName('span');
    var arr2=['包包','凉鞋','单鞋','太阳镜','丝袜','帆布鞋','情侣装'];
    var arrImg2=['img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/15.jpg'];  
    num=0;



    for(var i=0; i<arr1.length; i++){
        oUl.innerHTML+='<li>'+arr1[i]+'</li>';
    }
    oImg.src=arrImg[num];
    for(var i=0; i<arrImg.length; i++){
    	aLi[i].index=i;
    	aLi[i].onmouseover=function(){
           oImg.src=arrImg[this.index];
        for(var i=0; i<arrImg.length; i++){
           aLi[i].className='';
        }
        this.className='hover';
    }
        aLi[i].onmouseout=function(){
            this.className='';
        }
    }
    


    for(var i=0; i<arr2.length; i++){
        oRight.innerHTML+='<span>'+arr2[i]+'</span>'
    }
    for(var i=0; i<arrImg2.length; i++){
    	aSpan[i].index=i;
    	aSpan[i].onmouseover=function(){
            oImg.src=arrImg2[this.index];
            for(var i=0; i<arrImg2.length; i++){
           aSpan[i].className='';
        }
        this.className='hover';
    }
       aSpan[i].onmouseout=function(){
          this.className='';
       }
    }
    





    
    







	






}