// JavaScript Document
window.onload=function(){
  var oS=document.getElementById('s1');	
  var oCon=document.getElementById('con');	
  var timer=null;
	function show(){
	   clearInterval(timer);	
	   oCon.style.display='block';
	}
	function hide(){
	   timer=setTimeout(function(){
	     oCon.style.display='none';
	   },500);	
	}
	oS.onmouseover=show;
	oS.onmouseout=hide;
	oCon.onmouseover=show;
	oCon.onmouseout=hide;
}

/*$(function(){
	var oLi=$('.szpx ul li');
	var aImg=$('.banner-w  img');
	var timer=null;
	var index=0;
	var oL=$('.szpx b');
	var oR=$('.szpx c')
	oR.click(function(){
		aImg.animate({'left':-775},500)
	})
	oL.click(function(){
		aImg.animate({'left':0},500)
	})
	function wt(){
		aImg.eq(index).fadeIn().siblings().fadeOut();
		oLi.eq(index).addClass('hover').siblings().removeClass('hover');
		}
	oLi.click(function(){
		index=$(this).index();
		wt();
	});
	$('.banner-w').hover(function(){
	    clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			index++;
			if(index==oLi.length){
				index=0;
			}
           wt();
		},3000)
	}).trigger('mouseleave')
})*/

$(function(){
	var oLi=$('.szpx ul li');
	var oUl=$('.banner-w ul li');
	var oB=$('.szpx b');
	var oC=$('.szpx c');
	var timer=null;
	var index=0;
	//$('.banner-w ul').width(oLi.width()*oLi.length)
	$('.szpx c').click(function(){
		$('.banner-w ul').stop().animate({'left':-775},500,
		function(){
			$('.banner-w ul li:first').appendTo('.banner-w ul');
			$('.banner-w ul').css({'left':-775});
			$('.banner-w ul').css({'left':0});
			$('.szpx ul li').eq(index+1).addClass('hover').siblings().removeClass();
			index++;
            if(index==oLi.length){
				index=0;
			}
		})
	})
	$('.szpx b').click(function(){
			$('.banner-w ul li:last').prependTo('.banner-w ul');
			$('.banner-w ul').css({'left':-775});
			$('.banner-w ul').css({'left':0});
			$('.szpx ul li').eq(index-1).addClass('hover').siblings().removeClass();
			index--;
            if(index==oLi.length){
				index=0;
			}

	})
	oLi.click(function(){
		index=$(this).index();
	         $('.banner-w ul li:last').prependTo('.banner-w ul');
	         $('.banner-w ul').css({'left':-775});
	         $('.banner-w ul').stop().animate({'left':0});
			 $('.szpx ul li').eq(index).addClass('hover').siblings().removeClass();
	})
	function wt(){
	     timer=setInterval(function(){
			 index++;
			 if(index==oLi.length){
				 index=0;
			}
			 $('.szpx ul li').eq(index).addClass('hover').siblings().removeClass();
	         $('.banner-w ul li:last').prependTo('.banner-w ul');
	         $('.banner-w ul').css({'left':-775});
	         $('.banner-w ul').stop().animate({'left':0});
	},3000);
	}
	wt();
	$('.szpx').hover(function(){
		clearInterval(timer);
	},function(){
		wt();
	})
	
})





$(function(){
	$('.bx').hover(function(){
		$(this).next('.sydz').toggle();
	})
		$('.sydz').hover(function(){
		$(this).toggle();
	})

})

