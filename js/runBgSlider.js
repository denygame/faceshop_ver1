var timeTran = 0;
var change;
var clickPrev = false;

/*su kien click prev*/
$('.left').click(function(e){
	if(timeTran == 0) {
		change = -100;
		$('#slider-all').css('background-position', change + '% center');
		clickPrev = true;
		timeTran = 1;
	}
	else {
		var per = parseInt($('#slider-all').css('background-position').split(" ")[0]) - 100;
		change = per;
		$('#slider-all').css('background-position', per + '% center');
		clickPrev = true;
		timeTran = 1;
	}
});

/*sự kiện slide chuyển đổi*/
$('#slider-all').bind('slide.bs.carousel', function (e) {
	if(clickPrev==true){
		clickPrev=false;
	}
	else{
		if(timeTran == 0) change = 100;
		else change = change + 100;
		timeTran = 1;
		$('#slider-all').css('background-position',change + '% center');
	}
});