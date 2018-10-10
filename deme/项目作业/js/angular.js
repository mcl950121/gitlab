
.controller('mess',function($scope,$http){
	var myChart = echarts.init(document.getElementById('m-main'));
	var option = {
		color: ['#99a6d2'],
		title: {
			text: '走势',
		},
		tooltip: {
			trigger: 'right'
		},
		legend: {
			data: [200, 620, 600, 620, 400, 520, 750, 850]
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		toolbox: {},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			splitLine: {
				show: false
			},
			data: ['11.02', '12.02', '13.02', '14.02', '15.02', '16.02', '17.02', '18.02']
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			name: 'Returning',
			type: 'line',
			stack: '总量',
			areaStyle: {
				normal: {}
			},
			data: [200, 620, 600, 620, 400, 520, 750, 850]
		}]
	};
	myChart.setOption(option);
	var myChart = echarts.init(document.getElementById('m-main2'));

	var option1 = {
		color: ["#f3c178", "#75d3bb", "#9aacdc"],

		title: {
			text: '成绩分布'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			x: '60%',
			y: '40%', //项目
			data: ['10分以下', '10-15分', '15以上']
		},
		series: [{
			center: ['30%', '60%'], //图
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: '15',
						fontWeight: 'bold'
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 326.6,
				name: '15以上'
			}, {
				value: 326.6,
				name: '10-15分'
			}, {
				value: 653.2,
				name: '10分以下'
			}]
		}]
	};
	myChart.setOption(option1);
	
}).controller("stat",function($scope,$http){	
	$scope.params={"subdir":"images","comments":"","uniqueFilename":true};
	$scope.uploadFiles=function(){
	    var fd = new FormData()
	    for (var i in files) {
	        fd.append("uploadedFile", files[i])
	    }
	    $http({
	        url:'http://123.56.227.177:2404/upload',
	        method:"POST",
	        headers: {'Content-Type': undefined},
	            transformRequest: angular.identity,
	            params:$scope.params,
	            withCredentials:true,
	            data:fd
	    }).success(function(e){
        	console.log(e)
        	$scope.tupian=e
	    })
	    
	}

}).controller("login",function($scope,$http){
	$scope.sub=function(){
		$http({
			url:"http://123.56.227.177:2404/user/login",
			method:"POST",
			withCredentials:true,
			data:$scope.updata
		}).success(function(e){
			console.log(e)
			alert("登录成功")
			var yhm=document.getElementById('yhm')
			var yhm1=document.getElementById('yhm1')
			yhm1.innerHTML=yhm.value
			window.location.href="index.html#/message"
		}).error(function(e){
			alert("登录失败")
		})
	}
	$scope.qzc=function(){
		$scope.show=true;
		$scope.hide=false;
	}
		
	$http({
      	url:"http://123.56.227.177:2404/user",
       	method:"GET",
       	withCredentials:true
   	}).success(function(e){
       	$scope.updata3=e
   	})
   	
   	$scope.zc=function(e){
		$http({
            url:"http://123.56.227.177:2404/user",
            method:"POST",
            withCredentials:true,
            data:$scope.updata2
        }).success(function(e){
			$scope.updata3.push(e),
			console.log(e),
			alert('注册成功')
        }).error(function(){
        	alert("注册失败")
        })
   	}
   	$scope.qdl=function(){
		$scope.show=false;
		$scope.hide=true;
	}
})























