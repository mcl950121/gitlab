// JavaScript Document
window.onload=function(){
	var arr=['100px','abc'-6,[],-98765,34,-2,0,'300',function(){alert(1);},null,document,[],true,'200px'-30,'23.45元',5,Number('abc'),function(){alert(3);},'xyz'-90];
	
	//找到所有数字
/*	for(var i=0;i<arr.length;i++){
		if(typeof arr[i]==='number'&&arr[i]==arr[i]){
			document.write(arr[i]+'</br>');
			}
	}*/
		
	//可以转成数字
/*	for(var i=0;i<arr.length;i++){
		if(parseInt(arr[i])||parseFloat(arr[i])||typeof arr[i]==='number'&&arr[i]==arr[i]){
			document.write(arr[i]+'</br>');
			}
	}*/
	
	//找到最大值300
	for(var i=0;i<arr.length;i++){
		if(parseInt(arr[i])||parseFloat(arr[i])||typeof arr[i]==='number'&&arr[i]==arr[i]){
		var a=0;
		var b='';
		if(arr[i]>a){
			a=arr[i];
		}else{b=arr[i];}
		document.write(b+'</br>');
			

	}
	
	//找到NaN的位置
	/*for(var i=0;i<arr.length;i++){
			this.index=i;
			if(typeof arr[i]=='number'&&arr[i]!=arr[i]){
			document.write(this.index+'</br>');
			}
	}*/
	
		
	
	}

}
