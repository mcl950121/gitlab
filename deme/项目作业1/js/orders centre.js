$(function(){
	var table='';
	$.ajax({
		url:"http://10.115.12.226/project/data/order_getbyphone.php",
		data:{"phone":localStorage.getItem('user_phone')},
		type:'post',
		dataType:'jsonp',					
		jsonp:'callback',
		jsonpCallback:'success_jsonnpCallback',
		success:function(data){
			debugger
			console.log(data)
			for(i in data){
				table+='<tr style="font-size: 0.6rem;text-align: center;height: 4rem;"><td>'+data[i].oid+'</td><td><img src="images/'+data[i].img_sm+'"style="width:5rem;height:3.5rem;margin:0 auto"></td><td>'+formatDate(new Date(parseInt(data[i].order_time)))+'</td><td>'+data[i].user_name+'</td></tr>'
			}
			console.log(parseInt(data[i].order_time))
			console.log(formatDate(new Date(parseInt(data[i].order_time))))
			$("#table").append(table);
		}
	})
	function formatDate(now) {
	　　var year=now.getFullYear();
	　　var month=now.getMonth()+1;
	　　var d_ate=now.getDate();
	　　var hour=now.getHours();
	　　var minute=now.getMinutes();
	　　var second=now.getSeconds();
	　　return year+"-"+month+"-"+d_ate+" "+hour+":"+minute+":"+second;
	}
//	　　var d=new Date(1471868674000);
//	　　alert(formatDate(d));


})