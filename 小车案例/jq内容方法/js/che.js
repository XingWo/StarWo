var nr1=document.getElementById("content_right");
function btn(num){
	$(".txt2").removeClass("txt2x");
	$("#txt"+num).addClass("txt2x");
}
$(document).ready(function(){
	$("#txt0").click(function(){
		nr1.className="content_right animated rotateIn";
		 $(".content_right").html('<div class="che1"><div class="che"></div><p>这是产品名称</p></div><div class="che1"><div class="che"></div><p>这是产品名称</p></div><div class="che1"><div class="che"></div><p>这是产品名称</p></div><div class="che1"><div class="che"></div><p>这是产品名称</p></div><div class="che1"><div class="che"></div><p>这是产品名称</p></div><div class="che1"><div class="che"></div><p>这是产品名称</p></div>')
	 });
	 $("#txt1").click(function(){
		 nr1.className="content_right animated fadeIn";
	 	 $(".content_right").html('<div class="che2"><div class="che"></div><p>这是产品名称</p></div><div class="che2"><div class="che"></div><p>这是产品名称</p></div><div class="che2"><div class="che"></div><p>这是产品名称</p></div><div class="che2"><div class="che"></div><p>这是产品名称</p></div><div class="che2"><div class="che"></div><p>这是产品名称</p></div><div class="che2"><div class="che"></div><p>这是产品名称</p></div>')
	  });
	  $("#txt2").click(function(){
		  nr1.className="content_right animated fadeInUp";
	  		 $(".content_right").html('<div class="che3"><div class="che"></div><p>这是产品名称</p></div><div class="che3"><div class="che"></div><p>这是产品名称</p></div><div class="che3"><div class="che"></div><p>这是产品名称</p></div><div class="che3"><div class="che"></div><p>这是产品名称</p></div><div class="che3"><div class="che"></div><p>这是产品名称</p></div><div class="che3"><div class="che"></div><p>这是产品名称</p></div>')
	  	 });
		 $("#txt3").click(function(){
			 nr1.className="content_right animated fadeInDown";
		 	 $(".content_right").html('<div class="che4"><div class="che"></div><p>这是产品名称</p></div><div class="che4"><div class="che"></div><p>这是产品名称</p></div><div class="che4"><div class="che"></div><p>这是产品名称</p></div><div class="che4"><div class="che"></div><p>这是产品名称</p></div><div class="che4"><div class="che"></div><p>这是产品名称</p></div><div class="che4"><div class="che"></div><p>这是产品名称</p></div>')
		  });
		  $("#txt4").click(function(){
			  nr1.className="content_right animated bounceIn";
		  	 $(".content_right").html('<div class="che5"><div class="che"></div><p>这是产品名称</p></div><div class="che5"><div class="che"></div><p>这是产品名称</p></div><div class="che5"><div class="che"></div><p>这是产品名称</p></div><div class="che5"><div class="che"></div><p>这是产品名称</p></div><div class="che5"><div class="che"></div><p>这是产品名称</p></div><div class="che5"><div class="che"></div><p>这是产品名称</p></div>')
		   });
		   $("#txt5").click(function(){
			   nr1.className="content_right animated rollIn";
		   	 $(".content_right").html('<div class="che6"><div class="che"></div><p>这是产品名称</p></div><div class="che6"><div class="che"></div><p>这是产品名称</p></div><div class="che6"><div class="che"></div><p>这是产品名称</p></div><div class="che6"><div class="che"></div><p>这是产品名称</p></div><div class="che6"><div class="che"></div><p>这是产品名称</p></div><div class="che6"><div class="che"></div><p>这是产品名称</p></div>')
		    });
});
function btna(num){
	nom=11+num*6;
	$(".huadongtiao").css("height",'6vh');
	$(".huadongtiao").css("top",nom+'vh');
}
function btans(num){
	$(".huadongtiao").css("height",'0vh');
}