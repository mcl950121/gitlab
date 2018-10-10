// JavaScript Document
 window.onload = function(){

function nextsiblint(obj,tagName){
	while(true){
		if(obj.nextSibling.nodeName==tagName){
			return obj.nextSibling
			}
			else{
				obj=obj.nextSibling
				}
		}
		
	}	
	 //导航
var oDiv=document.getElementById('dao');
	var tim=null;
	var speed;
	function start(obj,long){
		clearInterval(obj.tim);
		obj.tim=setInterval(function (){
		speed=(long-obj.children[2].offsetHeight)/7;	
		speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
			if(obj.children[2].offsetHeight==long
			){clearInterval(tim)}
			
			else{
			obj.children[2].style.height=obj.children[2].offsetHeight+speed+'px'
			}
			},24)
		}
	for(var i=0;i<oDiv.children.length;i++){
		oDiv.children[i].onmouseover=function (){
			start(this,this.children[2].children[0].offsetHeight*this.children[2].children.length)
			this.children[1].style.transform='rotate(180deg)';
			}
		oDiv.children[i].onmouseout=function (){
			this.children[1].style.transform='rotate(0deg)';
             start(this,0)
			}
		}
//~~~~~~~~~~~~~~~~~~~~~~~

			
	var yhm=document.getElementById('yonghumin')
	var mm=document.getElementById('mima')
	var qrmm=document.getElementById('querenmima')
	var dzyx=document.getElementById('youxiang')
	var lxdz=document.getElementById('dizhi')
	var bm=document.getElementById('bianma')
	var lxr=document.getElementById('lainxiren')
	var lxdh=document.getElementById('lainxidianhua')
	var shouji=document.getElementById('shouji')
	var gou=document.getElementById('gou')
	var tong=document.getElementById('tongguo')
	
	var flag=true;
	
	function start(obj,text1,fn){
	obj.onfocus=function (){
		nextsiblint(this,'P').innerHTML=text1;
		nextsiblint(this,'P').className='red'
		
		}
	obj.onblur=function (){
	if(fn(this.value)){
		nextsiblint(this,'P').innerHTML='输入正确';
		nextsiblint(this,'P').className='green'
		
		}else{
		nextsiblint(this,'P').innerHTML=text1;
		nextsiblint(this,'P').className='red'		
			}
	}
}	

	start(yhm,'用户名有小写英文字母，中文，数字组成，4-20位',function (val){
		
		if(val.match(/^[a-z][a-z0-9]{5,12}$/)){
			flag=true;
			return true}
		else{
			flag=false;
			return false}
	})
	
	start(mm,'密码长度为6-12个字符',function (val){
		
		if(val.match(/.{8,18}/)){
			flag=true;
			return true}
		else{
			flag=false;
			return false}
	})		
	
	start(qrmm,'请仔细输入一遍您上面填写的密码',function (val){
		
		if(val==mm.value&& val.length!=0){
			flag=true;
			return true}
		else{
			flag=false;
			return false}
		
	})
	
	start(dzyx,'请正确填写E-mali地址，在您收到的注册确认信中可参与0元赢ipad平板电脑活动',function (val){
		
		if(val.match(/\S+@+[a-z0-9]{2,}\.+[a-z0-9]{2,}/)){
			flag=true;
			return true}
		else{
			flag=false;
			return false}
	})	
	
	start(lxdz,'密码长度为6-12个字符',function (val){
		
		if(val.match(/.{8,18}/)){
			flag=true;
			return true}
		else{
			flag=false;
			return false}
	})	
	
	start(bm,'密码长度为6-12个字符',function (val){
		
		if(val.match(/.{8,18}/)){
			flag=true;
			return true}
		else{
			flag=false;
			return false}
	})	
	
	start(lxr,'密码长度为6-12个字符',function (val){
		
		if(val.match(/.{8,18}/)){
			flag=true;
			return true}
		else{
			flag=false;
			return false}
	})	
	
	start(lxdh,'请正确填写联系电话',function (val){
		
		if(val.match(/^[0][1-9]{2,3}[-][1-9]{6,7}/)){
			flag=true;
			return true}
		else{
			flag=false;
			return false}
	})	
	
	start(shouji,'请填写正确有效的手机号码',function (val){
		
		if(val.match(/^[1][345678][0-9]{9}$/)){
			flag=true;
			return true}
		else{
			flag=false;
			return false}
	})	
	
	gou.onclick=function(){
	if(gou.checked=true){
		flag=true;
		return true
		}else{
		flag=false;
		return false	
		}
	}
	
	tong.onsubmit=function(){
		return flag;
		}		
		




 }