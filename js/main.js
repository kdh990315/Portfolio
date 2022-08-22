$(function () {

	$('#fullpage').fullpage({
		//options here
		anchors:['section1', 'section2', 'section3', 'section4', 'section5'],
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
		navigationPosition: 'right',
		sectionsColor: ['#000', '#000', '#ddd', '#eee', '#fff'],

		//svg Circle
		afterLoad: function(anchorLink, index){
			var excuted = false;

			if(index == 3) {
				if(excuted == false) {
					animationCircle();
					console.log(excuted);
				}

			}
			console.log(excuted);
		},

		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			console.log("현재 슬라이드 번호는" + slideIndex);
		}
	});

	
//svg Circle
	function animationCircle() {
		var chart = $(".chart");

		chart.each(function () {
			var title = $(this).find("h2"),
				targetNum = title.attr("data-num"),
				circle = $(this).find("circle");
	
	
			$({rate:0}).animate({rate:targetNum},
			{
				duration : 1500, //시간 1.5초
				progress : function () {
					var now = this.rate,
						amount = 630 - (630 * now/100);
					title.text(Math.floor(now));
	
					circle.css({strokeDashoffset : amount});
				}
			});
	
		})
		excuted = true;
	}
})