document.addEventListener("DOMContentLoaded", function() {
	function Glitch(ev) {
		var count = 0;
		//css에 랜덤값을 실시간으로 넘겨주기 위해 setInterval사용
		setInterval(() => {
			// skew 
			const skew = Math.random() * 20 - 10
			// before
			const top1 = Math.random() * 100
			const btm1 = Math.random() * 100
			// after
			const top2 = Math.random() * 100
			const btm2 = Math.random() * 100

			ev.style.setProperty('--skew', `${skew}deg`)
			ev.style.setProperty('--t1', `${top1}%`)
			ev.style.setProperty('--b1', `${btm1}%`)
			ev.style.setProperty('--t2', `${top2}%`)
			ev.style.setProperty('--b2', `${btm2}%`)
			ev.style.setProperty('--scale', `1`)

			count++;

			//0.1초마다 카운트 값이 증가하므로 
			//아래의 조건문은 1.5초마다 한번씩 작동
			if (count % 15 == 0) {
				var bigSkew = Math.random() * 180 - 90
				ev.style.setProperty('--skew', `${bigSkew}deg`)
			}

			//3초마다 한번씩 작동
			if (count % 30 == 0) {
				var bigScale = 1 + Math.random() / 2
				ev.style.setProperty('--scale', `${bigScale}`)
			}
		}, 100);

	}
	const Glitch_text = document.getElementById("Glitch_text");
	Glitch(Glitch_text)
});