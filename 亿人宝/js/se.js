// var tim=0;
var tim1=0;
var jiantouzt=1;
// function btns(num){
// 	tim=num;
// 	$(".banzt").css("background-position",`15px`)
// 	leftxs=-(1365*num);
// 	$(".banners").css("margin-left",leftxs+`px`)
// 	$(".banzt"+num).css("background-position",`0`)
// 	if(tim==4){
// 		tim=-1
// 	}
// }
// $(function(){
// 	setInterval(function(){
// 		$(".banzt").css("background-position",`15px`)
// 		tim=tim+1;
// 		leftx=-(1365*tim);
// 		$(".banners").css("margin-left",leftx+`px`)
// 		$(".banzt"+tim).css("background-position",`0`)
// 		if(tim==4){
// 			tim=-1
// 		}
// 	},5000)
// })
$(function(){
	setInterval(function(){
		tim1=tim1+1;
		topx=-(30*tim1);
		$(".ggnrand").css("margin-top",topx+`px`)
		if(tim1==8){
			tim1=-1;
		}
	},3000)
})
function jtbtns(num){
	if(num==0){
		numzt=115;
		nomzt=1;
		jiantouzt=1;
		xuanzezt=2;
	}
	if(num==1){
		numzt=165;
		nomzt=1;
		jiantouzt=2;
		xuanzezt=1;
	}
	if(num==2){
		numzt=43;
		nomzt=2;
		jiantouzt=1;
		xuanzezt=2;
	}
	if(num==3){
		numzt=151;
		nomzt=2;
		jiantouzt=2;
		xuanzezt=1;
	}
	if(num==4){
		numzt=43;
		nomzt=3;
		jiantouzt=1;
		xuanzezt=2;
	}
	if(num==5){
		numzt=151;
		nomzt=3;
		jiantouzt=2;
		xuanzezt=1;
	}
	console.log(nomzt);
	console.log(numzt);
	console.log(jiantouzt);
	$(".jiantou"+nomzt).css("left",numzt+`px`);
	if(jiantouzt==2){
		$("#jtbtn"+nomzt+"s").addClass("bangdanbtn"+nomzt+"s");
		$("#jtbtn"+nomzt).removeClass("bangdanbtn"+nomzt+"s");
	}
	if(jiantouzt==1){
		$("#jtbtn"+nomzt).addClass("bangdanbtn"+nomzt+"s");
		$("#jtbtn"+nomzt+"s").removeClass("bangdanbtn"+nomzt+"s");
	}
	
	$("#bangdannr"+nomzt+"s"+jiantouzt).css("display",'block');
	$("#bangdannr"+nomzt+"s"+xuanzezt).css("display",'none');
}