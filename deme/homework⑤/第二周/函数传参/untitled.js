// JavaScript Document
window.onload=function(){
	
	function fn(a){
		if(typeof a=='number'&&a==a){
			document.write(a+20);
		}else if(typeof a=='string'){
			document.write(a.charAt(2));
		}else if(typeof a=='function'){
			a();
		}
	}
	function abc(){alert(1)};
	fn(100);//100+20
	fn('你好我好大家好');//我
	fn(abc);//执行
	
}