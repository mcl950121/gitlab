// JavaScript Document
window.onload=function(){
	//小三角
	var ma1=document.getElementById("div1");
	var mb1=document.getElementById("di1");
	var mb2=document.getElementById("di2");
	var mb3=document.getElementById("di3");
	var mb4=document.getElementById("di4");
	var mb5=document.getElementById("di5");
	var mb6=document.getElementById("di6");
	var maa=document.getElementById("aaa");
	var maa1=document.getElementById("aaa1");
	var maa2=document.getElementById("aaa2");
	var maa3=document.getElementById("aaa3");
	var maa4=document.getElementById("aaa4");
	var maa5=document.getElementById("aaa5");
	var maa6=document.getElementById("aaa6");
	var oSpan=document.getElementById("shouye");
	var oSpan1=document.getElementById("shouye1");
	var oSpan2=document.getElementById("shouye2");
	var oSpan3=document.getElementById("shouye3");
	var oSpan4=document.getElementById("shouye4");
	var oSpan5=document.getElementById("shouye5");
	var oSpan6=document.getElementById("shouye6");
	var ob=document.getElementById("b");
	var ob1=document.getElementById("b1");
	var ob2=document.getElementById("b2");
	var ob3=document.getElementById("b3");
	var ob4=document.getElementById("b4");
	var ob5=document.getElementById("b5");
	var ob6=document.getElementById("b6");
	ma1.onmouseover = function(){
		oSpan.style.borderBottom="none";
		maa.style.display="block";
		ob.style.transform="rotate(180deg)";
	}
	ma1.onmouseout = function(){
		//oSpan.style.borderBottom="1px solid #000";
		maa.style.display="none";
		ob.style.transform="rotate(0deg)";
	}	
	mb1.onmouseover = function(){
		oSpan1.style.borderBottom="none";
		maa1.style.display="block";
		ob1.style.transform="rotate(180deg)";
	}
	mb1.onmouseout = function(){
		//oSpan1.style.borderBottom="1px solid #000";
		maa1.style.display="none";
		ob1.style.transform="rotate(0deg)";
	}	
	mb2.onmouseover = function(){
		oSpan2.style.borderBottom="none";
		maa2.style.display="block";
		ob2.style.transform="rotate(180deg)";
	}
	mb2.onmouseout = function(){
		//oSpan2.style.borderBottom="1px solid #000";
		maa2.style.display="none";
		ob2.style.transform="rotate(0deg)";
	}	
	mb3.onmouseover = function(){
		oSpan3.style.borderBottom="none";
		maa3.style.display="block";
		ob3.style.transform="rotate(180deg)";
	}
	mb3.onmouseout = function(){
		//oSpan3.style.borderBottom="1px solid #000";
		maa3.style.display="none";
		ob3.style.transform="rotate(0deg)";
	}	
	mb4.onmouseover = function(){
		oSpan4.style.borderBottom="none";
		maa4.style.display="block";
		ob4.style.transform="rotate(180deg)";
	}
	mb4.onmouseout = function(){
		//oSpan4.style.borderBottom="1px solid #000";
		maa4.style.display="none";
		ob4.style.transform="rotate(0deg)";
	}	
	mb5.onmouseover = function(){
		oSpan5.style.borderBottom="none";
		maa5.style.display="block";
		ob5.style.transform="rotate(180deg)";
	}
	mb5.onmouseout = function(){
		//oSpan5.style.borderBottom="1px solid #000";
		maa5.style.display="none";
		ob5.style.transform="rotate(0deg)";
	}	
	mb6.onmouseover = function(){
		//oSpan6.style.borderBottom="none";
		maa6.style.display="block";
		ob6.style.transform="rotate(180deg)";
	}
	mb6.onmouseout = function(){
		//oSpan6.style.borderBottom="1px solid #000";
		maa6.style.display="none";
		ob6.style.transform="rotate(0deg)";
	}	
	//banner图
	var oPp=document.getElementById('pic');
	var oImg=oPp.getElementsByTagName('img')[0];
	var arrImg=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg']; 
	var oUl=oPp.getElementsByTagName('ul')[0];
	var oLi=oUl.getElementsByTagName('li');
	num=0;
	
	for(var i=0;i<arrImg.length;i++){
		oUl.innerHTML+='<li>'+(i+1)+'</li>';
		}
	//初始化
	function tab (){
	oImg.src=arrImg[num];
	for(var i=0;i<oLi.length;i++){
				oLi[i].className='';
			}
				oLi[num].className='hover';
	}
	tab();
	//鼠标点击
	for(var i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].onclick=function(){
			num=this.index;
			tab();
		}
	}
	
	//定时器
	function play(){
	timer=setInterval(function(){
		num++;
		if(num==oLi.length){
			num=0;
		}		
			tab();
	},1000);
	}
	play()
	oPp.onmousemove=function(){
		clearInterval(timer);
	};
	oPp.onmouseout=function(){
		play();
	};
	var youer=document.getElementById('you-2-1you-id');	
	var youerr=document.getElementById('gengduo');
	var youid=document.getElementById('you-2-2-id');
	var aspan=document.getElementById('span');	
	var aaing=youid.getElementsByTagName('img')[0];
	var arrbian=['images/淘宝网首页_03.gif','images/1 (1).jpg','images/18.png'];
	var num1=0;
	aspan.innerHTML=(num1+1)+'/'+arrbian.length;
	aaing.src=arrbian[num1];
			youerr.onclick=function(){
				num1++;
				if(num1==arrbian.length){
					num1=0;
					}
					aspan.innerHTML=(num1+1)+'/'+arrbian.length;
					aaing.src=arrbian[num1];
					}
					
    var oBut1=document.getElementById('but1');
    var oBut2=document.getElementById('but2');
	var wangliba=document.getElementById('wrap');
    var oImg4=wangliba.getElementsByTagName('images')[0];
	var arrbian=['img/hua.jpg','img/gd4.jpg','img/gd3.jpg','img/gd5.jpg']
	var num1=0;
		wangliba.innerHTML='<img src='+arrbian[num1]+' />';
 		oBut2.onclick=function(){
 			num1++;
 			if (num1==arrbian.length) {
 				num1=0;
 			}
 			wangliba.innerHTML='<img src='+arrbian[num1]+' />';
 		}
 		oBut1.onclick=function(){
 			num1--;
 			if (num1==-1) {
 				num1=0;
 			}
 			wangliba.innerHTML='<img src='+arrbian[num1]+' />';
 		}
         oBut1.onclick=function(){
      num1--;
      if(num1==-1){
        num1=arrbian.length-1;
      }
      wangliba.innerHTML='<img src='+arrbian[num1]+' />';
  }
    var jj1=document.getElementById('wy1');
    var jj5=document.getElementById('wy5');
    var jj2=document.getElementById('wy2');
    var jj6=document.getElementById('wy6');
    var jj3=document.getElementById('wy3');
    var jj7=document.getElementById('wy7');
    var jj4=document.getElementById('wy4');
    var jj8=document.getElementById('wy8');
	var jjy=document.getElementById('wyy');
	


    jj1.onmouseover=function(){
	 jj5.style.display="block";
	 jj6.style.display="none";
	 jj7.style.display="none";
	 jj8.style.display="none";
    }


    jj2.onmouseover=function(){
	 jj5.style.display="none";
	 jj6.style.display="block";
	 jj7.style.display="none";
	 jj8.style.display="none";;
    }

    jj3.onmouseover=function(){
	 jj5.style.display="none";
	 jj6.style.display="none";
	 jj7.style.display="bloak";
	 jj8.style.display="none";
    }

    jj4.onmouseover=function(){
	 jj5.style.display="none";
	 jj6.style.display="none";
	 jj7.style.display="none";
	 jj8.style.display="block";
    }
	 jjy.onmouseover=function(){
	 jj5.style.display="none";
	 jj6.style.display="none";
	 jj7.style.display="block";
	 jj8.style.display="none";
    }
	
    var lilili=document.getElementById('li1');
    var liula=document.getElementById('li2');
    var liuliu=document.getElementById('kangaaa');
    var liulb=document.getElementById('li3');
    var liulc=document.getElementById('li4');

    var liuld=document.getElementById('li5');
    var liule=document.getElementById('li6');
    var timer55=null;
    lilili.onmouseover=function(){
      liula.style.display="block";
	  liuliu.style.display="none";
      clearTimeout(timer55);
    }
    lilili.onmouseout=function(){
      liula.style.display="none";
      clearTimeout(timer55);
       timer55=setTimeout(function(){liula.style.display='none';},1000);
	   liuliu.style.display="block";
    }

    liula.onmouseover=function(){
      liula.style.display="block";
	  liuliu.style.display="none";
      clearTimeout(timer55);
    }
    liula.onmouseout=function(){
      liula.style.display="none";
       timer55=setTimeout(function(){liula.style.display='none';},1000);
	   liuliu.style.display="block";
    }



    
    liulb.onmouseover=function(){
      liulc.style.display="block";
	  liuliu.style.display="none";
      clearTimeout(timer55);
    }
    liulb.onmouseout=function(){
      liulc.style.display="none";
      clearTimeout(timer55);
       timer55=setTimeout(function(){liulc.style.display='none';},1000);
	   liuliu.style.display="block";
    }

    liulc.onmouseover=function(){
      liulc.style.display="block";
	  liuliu.style.display="none";
      clearTimeout(timer55);
    }
    liulc.onmouseout=function(){
      liulc.style.display="none";
       timer55=setTimeout(function(){liulc.style.display='none';},1000);
	   liuliu.style.display="block";
    }

     liuld.onmouseover=function(){
      liule.style.display="block";
	  liuliu.style.display="none";
     }
    liuld.onmouseout=function(){
      liule.style.display="none";
	  liuliu.style.display="block";
     }
      var ying22=document.getElementById('ying2');
      var oTe=document.getElementById('te');
      var zhen3=document.getElementById('ying3');
      var chao4=document.getElementById('ying4');
      var chaoa1=document.getElementById('ming1');
      var chaol2=document.getElementById('ming2');
      var chao3=document.getElementById('ming3');
      var timer4=null;
    ying22.onmouseover=function(){
      chaoa1.style.display="block";
      oTe.style.display="none";
      clearTimeout(timer4);
    }
    ying22.onmouseout=function(){
      chaoa1.style.display="none";
      ying22.style.border="block";
      oTe.style.display="block";
      clearTimeout(timer4);
       timer4=setTimeout(function(){chaoa1.style.display='none';},1000);
    }

    chaoa1.onmouseover=function(){
      chaoa1.style.display="block";
      clearTimeout(timer4);
    }
    chaoa1.onmouseout=function(){
      chaoa1.style.display="none";
       timer4=setTimeout(function(){chaoa1.style.display='none';},1000);
    }

     zhen3.onmouseover=function(){
      chaol2.style.display="block";
      oTe.style.display="none";
      
     }
    zhen3.onmouseout=function(){
      chaol2.style.display="none";
      oTe.style.display="block";

     }
      

    chao4.onmouseover=function(){
      chao3.style.display="block";
      oTe.style.display="none";
      
     }
    chao4.onmouseout=function(){
      chao3.style.display="none";
      oTe.style.display="block";

     }
	 
	 var oGw=document.getElementById('mm1');
	 var oSh=document.getElementById('mm2');
	 var oHd=document.getElementById('mm3');
	 var oGj=document.getElementById('mm4');
	 var oQt=document.getElementById('mm5');
	 var bannern=document.getElementById('bannern');
	 
	 var m1=document.getElementById('m1');
	 var m2=document.getElementById('m2');
	 var m3=document.getElementById('m3');
	 
	 oGw.onmouseover=function(){
		 m1.style.display='block';
		 bannern.style.display='none';
	 }
	 oGw.onmouseout=function(){
		 m1.style.display='none';
		 bannern.style.display='block';
	 }
	 
	 oSh.onmouseover=function(){
		 m2.style.display='block';
		 bannern.style.display='none';
	 }
	 oSh.onmouseout=function(){
		 m2.style.display='none';
		 bannern.style.display='block';
	 }
	 
	 oHd.onmouseover=function(){
		 m3.style.display='block';
		 bannern.style.display='none';
	 }
	 oHd.onmouseout=function(){
		 m3.style.display='none';
		 bannern.style.display='block';
	 }
	 
	 oGj.onmouseover=function(){
		 m1.style.display='block';
		 bannern.style.display='none';
	 }
	 oGj.onmouseout=function(){
		 m1.style.display='none';
		 bannern.style.display='block';
	 }
	 
	 oQt.onmouseover=function(){
		 m2.style.display='block';
		 bannern.style.display='none';
	 }
	 oQt.onmouseout=function(){
		 m2.style.display='none';
		 bannern.style.display='block';
	 }
	 

}