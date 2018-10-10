function first(obj){
	if(obj.firstElementChild){
		return obj.firstElementChild;
	}else{
		return obj.firstChild;
	}
}

window.onload=function(){
	var _div=document.getElementById('list');
	for(var i=0;i<_div.children.length;i++){
		first(_div.children[i]).onclick=function(){
			for(var i=1;i<this.parentNode.children.length;i++){
				if(this.parentNode.children[i].style.display=='block'){
					this.parentNode.children[i].style.display='none';
				}else{
					this.parentNode.children[i].style.display='block';
				}
			}
		}
	}
}