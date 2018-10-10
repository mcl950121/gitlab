$(function(){	
//显示菜品
	var start=0;
	order_list();
	function order_list(){
		var html='';
		$.ajax({
			url:"http://10.115.12.226/project/data/dish_getbypage.php",
			data:{"start":start},
			type:'post',
			dataType:'jsonp',					
			jsonp:'callback',
			jsonpCallback:'success_jsonnpCallback',
			success:function(data){
				debugger				
				for(i in data){				
					var html='<li><img src="images/'+data[i].img_sm+'" style="width:3.5rem;height: 2.5rem;float: left;margin-top:1.25rem" class="img"><div class="food"><span>'+data[i].name+'</span><font>'+data[i].material+'</font><money>价格：￥'+data[i].price+'</money></div><a href="details.html?id='+data[i].did+'"><span class="jian"><img src="images/jian.png" style=" width: 1rem;height: 1rem;" ></span></a></li>'
				
					$("#ul_list").append(html);
				}			
				console.log(i)
				console.log(data)
			}			
		})
	}
//加载更多	
	$(".jzgd").click(function(){
		if(start<=5){
			start +=5;  
			order_list();
		}else{
			$(".jzgd").css('display','none')
		}
	})	
//搜索菜单	
	
	$('.sousuo').keyup(function(){
		var kwd=$('.sousuo').val();
		if(kwd!=''){
			var html=''
			$.ajax({
				url:"http://10.115.12.226/project/data/dish_getbykw.php",
				data:{"kw":kwd},
				type:'post',
				dataType:'jsonp',					
				jsonp:'callback',
				jsonpCallback:'success_jsonnpCallback',
				success:function(data){
//					debugger
					$('#ul_list li').remove()
					$(".jzgd").css('display','none')
					$('.food_list').css('display','none');
					if(data.length!=''){
						for(var i=0;i<data.length;i++){
							html +='<li><img src="images/'+data[i].img_sm+'" style="width:3.5rem;height: 2.5rem;float: left;margin-top:1.25rem" class="img"><div class="food"><span>'+data[i].name+'</span><font>'+data[i].material+'</font><money>价格：￥'+data[i].price+'</money></div><a href="details.html?id='+data[i].did+'"><span class="jian"><img src="images/jian.png" style=" width: 1rem;height: 1rem;" ></span></a></li>'
						}
						$("#ul_list").append(html)
					}				
					if(data.length>0){
						if(localStorage.getItem('food_name')){
							var local=localStorage.getItem('food_name').split(',');
							if(local.indexOf(kwd)==-1){//入这个数组里边没有这个东西就是-1
								local.push(kwd)
							}
							localStorage.setItem('food_name',local)
						}else{
							var local=[];
							local.push(kwd);
							localStorage.setItem('food_name',local)
						}
					}
					console.log(data)
				},
				error:function(data){
					alert('sorry 没有所匹配的菜品！')
				}
			})
		}
	})
	
	$(".sousuo").focus(function(){
		$(".jzgd").css('display','none')
		$(".food_list").children('li').remove()
		$('#ul_list li').remove()
		var local=localStorage.getItem('food_name').split(",");
		for(i in local){
			var cai_name='<li>'+local[i]+'</li>';
			$(".food_list").append(cai_name);
		}
		$('.food_list').css('display','block');
		console.log(local)
	})
	$('.list1').click(function(){
		$('.food_list').css('display','none');
	})
	$('.food_list').delegate("li","click",function(){
		$(".sousuo").val($(this).text())
		var kwd=$(".sousuo").val()
		var html=''
		$.ajax({
			url:"http://10.115.12.226/project/data/dish_getbykw.php",
			data:{"kw":kwd},
			type:'post',
			dataType:'jsonp',					
			jsonp:'callback',
			jsonpCallback:'success_jsonnpCallback',
			success:function(data){
				for(var i=0;i<data.length;i++){
						html +='<li><img src="images/'+data[i].img_sm+'" style="width:3.5rem;height: 2.5rem;float: left;margin-top:1.25rem" class="img"><div class="food"><span>'+data[i].name+'</span><font>'+data[i].material+'</font><money>价格：￥'+data[i].price+'</money></div><a href="details.html?id='+data[i].did+'"><span class="jian"><img src="images/jian.png" style=" width: 1rem;height: 1rem;" ></span></a></li>'
				}
				$('.food_list').css('display','none')
				$("#ul_list").append(html)
			}
			
		})	
	})

	
})