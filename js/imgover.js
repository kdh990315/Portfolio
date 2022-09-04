$(function () {
	$(".project_img_box1").mouseover(function () {
		$(".project_img1").stop().animate({
			"marginTop" : "-757.84"
		}, 4000);
	}).mouseleave(function () {
		$(".project_img1").stop().animate({
			"marginTop" : "0"
		}, 2000);
	});

	$(".project_img_box2").mouseover(function () {
		$(".project_img2").stop().animate({
			"marginTop" : "-2173.95"
		}, 4500);
	}).mouseleave(function () {
		$(".project_img2").stop().animate({
			"marginTop" : "0"
		}, 2500);
	});

	$(".project_img_box3").mouseover(function () {
		$(".project_img3").stop().animate({
			"marginTop" : "-2141.06"
		}, 4500);
	}).mouseleave(function () {
		$(".project_img3").stop().animate({
			"marginTop" : "0"
		}, 2500);
	});

	$(".project_img_box4").mouseover(function () {
		$(".project_img4").stop().animate({
			"marginTop" : "-2416.91"
		}, 4500);
	}).mouseleave(function () {
		$(".project_img4").stop().animate({
			"marginTop" : "0"
		}, 2500);
	});
});