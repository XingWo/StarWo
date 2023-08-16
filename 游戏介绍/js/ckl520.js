/*方案零*/
// var a1=document.getElementById("a1");
// var a2=document.getElementById("a2");
// var a3=document.getElementById("a3");
// var a0=document.getElementById("a0");
// var b1=document.getElementById("b1");
// var b2=document.getElementById("b2");
// var b3=document.getElementById("b3");
// var b0=document.getElementById("b0");
// function a(){
// 	a1.style.display="none";
// 	a2.style.display="none";
// 	a3.style.display="none";
// 	a0.style.display="none";
// 	b1.className="btn btn1";
// 	b2.className="btn btn2";
// 	b3.className="btn btn3";
// 	b0.className="btn btn0";
// }


// b0.onclick=function(){
// 	a();
// 	a0.style.display="flex";
// 	b0.className="btn btn0s";
// }
// b1.onclick=function(){
// 	a();
// 	a1.style.display="flex";
// 	b1.className="btn btn1s";
// }
// b2.onclick=function(){
// 	a();
// 	a2.style.display="flex";
// 	b2.className="btn btn2s";
// }
// b3.onclick=function(){
// 	a();
// 	a3.style.display="flex";
// 	b3.className="btn btn3s";
// }
/*方案零*/



/*方案一*/
// function a(){
// 	document.getElementById("b0").className="btn btn0";
// 	document.getElementById("b1").className="btn btn1";
// 	document.getElementById("b2").className="btn btn2";
// 	document.getElementById("b3").className="btn btn3";
// }

// function btns(num){
// 	a();
	
// 	$(".box").hide();
// 	document.getElementsByClassName("box")[num].style.display="block";
// 	document.getElementById("b"+num).className="btn btn"+num+"s";
// }
/*方案一*/


/*方案二*/
function a(){
	$(".box").hide();
	$("#b0").removeClass("btn0s");
	$("#b1").removeClass("btn1s");
	$("#b2").removeClass("btn2s");
	$("#b3").removeClass("btn3s");
}
function btns(num){
	a();
	$("#a"+num).show();
	$("#b"+num).addClass("btn"+num+"s")
}
/*方案二*/

