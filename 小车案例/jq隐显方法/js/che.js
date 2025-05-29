function btn(num){
	$(".content_right").hide();
	$(".txt2").removeClass("txt2x");
	$("#nr"+num).show();
	$(".txt2").eq(num).addClass("txt2x");
}
function btna(num){
	nom=11+num*6;
	$(".huadongtiao").css("height",'6vh');
	$(".huadongtiao").css("top",nom+'vh');
}
function btans(num){
	$(".huadongtiao").css("height",'0vh');
	$(".huadongtiao").css("top",'11vh');
}