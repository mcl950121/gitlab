window.onload=function(){
	var oBnt1=document.getElementById('top1');
	var oBnt2=document.getElementById('top2');
	var oDiv1=document.getElementById('div-left');
	var aImg1=oDiv1.getElementsByTagName('img')[0];
	var oSpan1=oDiv1.getElementsByTagName('span')[0];
	var oB1=oDiv1.getElementsByTagName('b')[0];
	var oDiv2=document.getElementById('div-right');
	var aImg2=oDiv2.getElementsByTagName('img')[0];
	var oSpan2=oDiv2.getElementsByTagName('span')[0];
	var oB2=oDiv2.getElementsByTagName('b')[0];
	var arr=['第一组第一张','第一组第二张','第一组第三张','第一组第四张'];
	var arr1=['第二组第一张','第二组第二张','第二组第三张'];
	var arr2=['img/11.jpg','img/33.jpg','img/44.jpg','img/55.jpg'];
	var arr3=['img/66.jpg','img/77.jpg','img/88.jpg']
	var num=0;
	var num1=0;
	
	aImg1.src=arr2[num];
	aImg2.src=arr3[num];
	oSpan1.innerHTML=arr[num];
	oSpan2.innerHTML=arr1[num];
	for(i=0;i<arr.length;i++){
		oB1.innerHTML=(num+1)+'/'+arr.length;
		}
	for(i=0;i<arr1.length;i++){
		oB2.innerHTML=(num+1)+'/'+arr1.length;
		}
		oBnt2.onclick=function(){
			num++;
			if(num==arr2.length){
				num=0;
			}
			aImg1.src=arr2[num];
			oB1.innerHTML=(num+1)+'/'+arr2.length;
			if(num==arr.length){
				num=0;
				}
			oSpan1.innerHTML=arr[num];
			num1++;
			if(num1==arr3.length){
				num1=0;
				}
			aImg2.src=arr3[num1];
			oB2.innerHTML=(num1+1)+'/'+arr3.length;
			if(num1==arr1.length){
				num1=0;
				}
			oSpan2.innerHTML=arr[num1];
		}
		aImg1.onclick=function(){
			num++;
			if(num==arr2.length){
				num=0;
			}
			aImg1.src=arr2[num];
			oB1.innerHTML=(num+1)+'/'+arr2.length;
			if(num==arr.length){
				num=0;
				}
			oSpan1.innerHTML=arr[num];
		}
		aImg2.onclick=function(){
			num++;
			if(num==arr3.length){
				num=0;
				}
			aImg2.src=arr3[num];
			oB2.innerHTML=(num+1)+'/'+arr3.length;
			if(num==arr1.length){
				num=0;
				}
			oSpan2.innerHTML=arr1[num];
			}
		
		oBnt1.onclick=function(){
			num--;
			if(num==-1){
				num=arr2.length-1;
			}
			aImg1.src=arr2[num];
			oB1.innerHTML=(num+1)+'/'+arr2.length;
			if(num==-1){
				num=arr.length-1;
				}
			oSpan1.innerHTML=arr[num];
			num1--;
			if(num1==-1){
				num1=arr3.length-1;
				}
			aImg2.src=arr3[num1];
			oB2.innerHTML=(num1+1)+'/'+arr3.length;
			if(num1==-1){
				num1=arr1.length-1;
				}
			oSpan2.innerHTML=arr[num1];
		}
		/*aImg1.onclick=function(){
			num--;
			if(num==-1){
				num=arr2.length-1;
			}
			aImg1.src=arr2[num];
			oB1.innerHTML=(num+1)+'/'+arr2.length;
			if(num==-1){
				num=arr.length-1;
				}
			oSpan1.innerHTML=arr[num];
		}
		aImg2.onclick=function(){
			num--;
			if(num==-1){
				num=arr3.length-1;
				}
			aImg2.src=arr3[num];
			oB2.innerHTML=(num+1)+'/'+arr3.length;
			if(num==-1){
				num=arr1.length-1;
				}
			oSpan2.innerHTML=arr1[num];
			}*//*点击图片减*/
		
	}