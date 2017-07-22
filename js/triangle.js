/*responsive tam giác trên slider*/
//alert($("#triangle").css('border-left'));

function responsiveTri(width){
	if(width > 1199){
		if($("#triangle").css('border-left')!='585px outset rgba(0, 0, 0, 0)'){
			$('#triangle').css('border-left','585px outset transparent');
			$('#triangle').css('border-right','585px outset transparent');
		}
	}
	if(width > 979 && width < 1200){
		if($("#triangle").css('border-left')!='470px outset rgba(0, 0, 0, 0)'){
			$('#triangle').css('border-left','470px outset transparent');
			$('#triangle').css('border-right','470px outset transparent');
		}
	}
	if(width < 979){
		var change = (width - 320) * 0.5 + 131.5;
		$('#triangle').css('border-left',change +'px outset transparent');
		$('#triangle').css('border-right',change + 'px outset transparent');
	}
}


var cut320px = 131.5;
$(document).ready(function(){

	responsiveTri($(window).width());//khi F5 thi test lai 


	$(window).resize(function(){
		var width = $(window).width();
		responsiveTri(width);
	});
});