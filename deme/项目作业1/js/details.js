$(function(){
	var href=window.location.search;
	var href1=href.toString().split('?id=')[1];
	console.log(window.location.search);
	console.log(href1);
	var htm='';
	$.ajax({
		url:"http://10.115.12.226/project/data/dish_getbyid.php",
		data:{"id":href1},
		type:'post',
		dataType:'jsonp',					
		jsonp:'callback',
		jsonpCallback:'success_jsonnpCallback',
		success:function(data){
			debugger;

			htm ='<span class="mz">'+data.name+'</span><img src="images/'+data.img_lg+'"  class="xq"/><span class="cp">'+data.addr+'</span><p class="cp">'+data.material+'</p><span class="xj">'+data.detail+'</span><span class="jg">￥'+data.price+'</span>'
				
			$("#det_xq").append(htm);
		
			console.log(data)
		}
	})
	$('#wzkk').click(function(){
		window.location.href='order.html'
	})
	$('#wydc').click(function(){
		sessionStorage.setItem('food_did',href1)
		window.location.href='success.html'
	})
	
	
})