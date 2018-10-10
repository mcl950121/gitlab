$(function(){

	$('.refer').click(function(){
		var food_did=sessionStorage.getItem('food_did')
		var suc_name=$('#suc_name').val()
		var suc_phone=$('#suc_phone').val()
		var suc_addr=$('#suc_addr').val()
		if($('#nan').is(":checked")){
			sex=1
		}else{
			sex=2
		}
		if(suc_phone==localStorage.getItem('user_phone')){
			$.ajax({
				url:"http://10.115.12.226/project/data/order_add.php",
				data:{
					"user_name":suc_name,
					"phone":localStorage.getItem('user_phone'),
					"sex":sex,
					"addr_user":suc_addr,
					"did":food_did
				},
				type:'post',
				dataType:'jsonp',					
				jsonp:'callback',
				jsonpCallback:'success_jsonnpCallback',
				success:function(data){
					debugger
					console.log(data)
					for(i in data){
						if(data[i].msg=='succ'){
							alert('您的订单提交成功，订单编号为：'+data[i].did+'您可以在用户中心查看订单状况')
						}
						if(data[i].msg=='err'){
							alert(data[i].reason)
						}
					}
				}
			})
		}else{
			alert('信息填写不完整')
		}
	})
})
