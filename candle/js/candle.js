//蜡烛样式切换按钮
function candlebtn(num){
	var candlezt = $("#candle"+num).css('--candle-zt');
	if(candlezt == 'true'){
		$("#candle"+num).css({
			"--candle-zt":"false",
			"--all-height":"calc(0.7 * var(--initial-all-height))",
			"--candle-width":"calc(0.7 * var(--initial-candle-width))",
			"animation-name":" bullet5, bullet3",
			"animation-delay":"0s,5s",
			"animation-duration":"2s, 0.5s",
			"animation-iteration-count":"1,1",
			"animation-fill-mode":" forwards,forwards",
			"z-index":"99999",
		});
		$("#candle-box"+num).css({
			"height":"calc(0.91 * var(--initial-all-height))",
		});
		$("#canlep"+num).css({
			"display":"none",
		});
	}else if(candlezt == 'false'){
		$("#candle"+num).css({
			"--candle-zt":"true",
			"--all-height":"var(--initial-all-height)",
			"--candle-width":" var(--initial-candle-width)",
			"animation":" bullet 2s infinite",
			"z-index":num*10+1,
		});
		$("#candle-box"+num).css({
			"height":"calc(1.3 * var(--initial-all-height))",
		});
		function canledtime(){
			$("#canlep"+num).css({
				"display":"block",
			});
		}setTimeout(canledtime, 50);
	}
}
//心样式切换按钮
function heartbtn(num){
	var heartzt = $("#heart"+num).css('--heart-zt');
	if(heartzt == 'true'){
		$("#heart"+num).css({
			"--heart-zt":"false",
			"--all-height":"calc(0.7 * var(--initial-all-height))",
			"--heart-width":"calc(0.7 * var(--initial-heart-width))",
			"animation-name":" bullet5, bullet4",
			"animation-delay":"0s,5s",
			"animation-duration":"2s, 0.5s",
			"animation-iteration-count":"1,1",
			"animation-fill-mode":" forwards,forwards",
			"z-index":"99999",
			
		});
		$("#heart-box"+num).css({
			"height":"calc(0.91 * var(--initial-all-height))",
		});
		$("#heartp"+num).css({
			"display":"none",
		});
	}else if(heartzt == 'false'){
		$("#heart"+num).css({
			"--heart-zt":"true",
			"--all-height":"var(--initial-all-height)",
			"--heart-width":" var(--initial-heart-width)",
			"animation":" bullet 2s infinite",
			"z-index":num*10+2,
		});
		$("#heart-box"+num).css({
			"height":"calc(1.3 * var(--initial-all-height))",
		});
		function hearttime(){
			$("#heartp"+num).css({
				"display":"block",
			});
		}setTimeout(hearttime, 50);
	}
}
//货币自填数量
function candleinput(num){
	var candlenumber=$("#candleinput"+num).val();
	$("#candle"+num).attr("num",candlenumber);
	$.cookie('candleValue'+num, candlenumber, {expires:3000});
}
function heartinput(num){
	var heartnumber=$("#heartinput"+num).val();
	$("#heart"+num).attr("num",heartnumber);
	$.cookie('heartValue'+num, heartnumber, {expires:3000});
}
function seasonticket(){
	var ticketnum=$("#seasonticket").val();
	$("#ticket").attr("num",ticketnum);
	$.cookie('ticketValue', ticketnum, {expires:3000});
}
//网页加载的自动执行
window.onload = function(){
	var num=[0,1,2,3];
	$.each(num,function(value){
		//货币初始数量（可在html文件对应input里修改）
		var candleValue = $.cookie('candleValue'+value);
			if(candleValue){
				$("#candleinput"+value).val(candleValue);
				$("#candle"+value).attr("num",candleValue);
			}else{
				var candlenumber=$("#candleinput"+value).val();
				$("#candle"+value).attr("num",candlenumber);
			}
		var heartValue = $.cookie('heartValue'+value);
			if(heartValue){
				$("#heartinput"+value).val(heartValue);
				$("#heart"+value).attr("num",heartValue);
			}else{
				var heartnumber=$("#heartinput"+value).val();
				$("#heart"+value).attr("num",heartnumber);
			}
		var ticketValue = $.cookie('ticketValue');
			if(ticketValue){
				$("#seasonticket").val(ticketValue);
				$("#ticket").attr("num",ticketValue);
			}else{
				var ticketnum=$("#seasonticket").val();
				$("#ticket").attr("num",ticketnum);
			}
		//货币默认展示样式，可在css中定义对应id"candle+num"或"heart+num"的"--candle-zt"或"--heart-zt"自定义变量为"true"或"false";
		var candlezt = $("#candle"+value).css('--candle-zt');
		if(candlezt == 'false'){
			$("#candle"+value).css({
				"--all-height":"calc(0.7 * var(--initial-all-height))",
				"--candle-width":"calc(0.7 * var(--initial-candle-width))",
				"animation-name":" bullet5, bullet3",
				"animation-delay":"0s,5s",
				"animation-duration":"2s, 0.5s",
				"animation-iteration-count":"1,1",
				"animation-fill-mode":" forwards,forwards",
				"z-index":"99999",
			});
			$("#candle-box"+value).css({
				"height":"calc(0.91 * var(--initial-all-height))",
			});
			$("#canlep"+value).css({
				"display":"none",
			});
		};
		
		var heartzt = $("#heart"+value).css('--heart-zt');
		if(heartzt == 'false'){
			$("#heart"+value).css({
				"--all-height":"calc(0.7 * var(--initial-all-height))",
				"--heart-width":"calc(0.7 * var(--initial-heart-width))",
				"animation-name":" bullet5, bullet4",
				"animation-delay":"0s,5s",
				"animation-duration":"2s, 0.5s",
				"animation-iteration-count":"1,1",
				"animation-fill-mode":" forwards,forwards",
				"z-index":"99999",
			});
			$("#heart-box"+value).css({
				"height":"calc(0.91 * var(--initial-all-height))",
			});
			$("#heartp"+value).css({
				"display":"none",
			});
		};
		
		var ticketzt = $("#ticket").css('--ticket-zt');
		if(ticketzt == 'false'){
			$("#ticket").css({
				"--all-height":"calc(0.7 * var(--initial-all-height))",
				"--ticket-width":"calc(0.7 * var(--initial-ticket-width))",
				"animation-name":" bullet5, bullet6",
				"animation-delay":"0s,5s",
				"animation-duration":"2s, 0.5s",
				"animation-iteration-count":"1,1",
				"animation-fill-mode":" forwards,forwards",
				"z-index":"99999",
			});
			$("#ticket-box"+value).css({
				"height":"calc(0.91 * var(--initial-all-height))",
			});
			$("#ticket"+value).css({
				"display":"none",
			});
		};
	});
}

//季节蜡烛季节心图标切换按钮
function seasonbtnhover(num){
	$("#seasonbtn"+num).animate({scrollTop:0},100);
}//按钮归位
function seasonbtnnum(num){
	$("#seasonheart").attr("src","img/systemui_seasonheart"+num+".png");
	$("#seasoncandle").attr("src","img/systemui_seasoncandle"+num+".png");
	$("#ticketimg").attr("src","img/seasonticket"+num+".png");
}//切换图标
//活动代币图标切换按钮
function activitynum(num){
	$("#candle-box3").css({
		"display":"flex",
	});
	$("#activitycandle").attr("src","img/systemui_eventcandle"+num+".png");
}
function activitynumtonone(){
	$("#candle-box3").css({
		"display":"none",
	});$("#activitycandle").attr("src","img/systemui_eventcandle"+num+".png");
}
//普通蜡烛加成样式
function candleimgbtn(){
	layer.tips('很抱歉，暂无图标', '#candlebtn',{
	  tips: [4, '#f9b5ff']
	});
}

//展示show按钮
function show(){
	var num=[0,1,2,3];
	$.each(num,function(value){
		var candlezt = $("#candle"+value).css('--candle-zt');
		if(candlezt == 'false'){
			$("#candle"+value).css({
				"animation-name":" bullet",
				"animation-delay":"0s",
				"animation-duration":"2s",
				"animation-iteration-count":"1",
				"animation-fill-mode":" forwards",
			});
			function showtime(){
				$("#candle"+value).css({
					"animation-name":" bullet5, bullet3",
					"animation-delay":"0s,5s",
					"animation-duration":"2s, 0.5s",
					"animation-iteration-count":"1,1",
					"animation-fill-mode":" forwards,forwards",
				});
			}setTimeout(showtime, 1);
		};
		
		var heartzt = $("#heart"+value).css('--heart-zt');
		if(heartzt == 'false'){
			$("#heart"+value).css({
				"animation-name":" bullet",
				"animation-delay":"0s",
				"animation-duration":"2s",
				"animation-iteration-count":"1",
				"animation-fill-mode":" forwards",
			});
			function show(){
				$("#heart"+value).css({
					"animation-name":" bullet5, bullet4",
					"animation-delay":"0s,5s",
					"animation-duration":"2s, 0.5s",
					"animation-iteration-count":"1,1",
					"animation-fill-mode":" forwards,forwards",
				});
			}setTimeout(show, 1);
		};
		
		var ticketzt = $("#ticket").css('--ticket-zt');
		if(ticketzt == 'false'){
			$("#ticket").css({
				"animation-name":" bullet",
				"animation-delay":"0s",
				"animation-duration":"2s",
				"animation-iteration-count":"1",
				"animation-fill-mode":" forwards",
			});
			function show(){
				$("#ticket").css({
					"animation-name":" bullet5, bullet6",
					"animation-delay":"0s,5s",
					"animation-duration":"2s, 0.5s",
					"animation-iteration-count":"1,1",
					"animation-fill-mode":" forwards,forwards",
				});
			}setTimeout(show, 1);
		};
	});
	
	
	layer.tips('很抱歉，暂时没有点击音效，因为没提取到音效文件，如果可以，点击下方“跳转关注”关注私信即可提供音效文件吖', '#showbtn',{
	  tips: [3, '#f9b5ff']
	});
}