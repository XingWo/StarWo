function btn(num){
	$(".content_right").hide();
	$(".txt2").removeClass("txt2x");
	$("#nr"+num).show();
	$("#txt"+num).addClass("txt2x");
}
function btna(num){
	nom=11+num*6;
	$(".huadongtiao").css("height",'6vh');
	$(".huadongtiao").css("top",nom+'vh');
	$(".huadongtiao").show();
}
function btans(num){
	$(".huadongtiao").css("height",'0vh');
	$(".huadongtiao").css("top",'11vh');
	$(".huadongtiao").hide();
}