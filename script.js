window.onload = function() {
	let red = document.querySelector("#red");
	let yellow = document.querySelector("#yellow");
	let green = document.querySelector("#green");
	let violet = document.querySelector("#violet");

	let circle = document.querySelector("#circle");

	red.onclick = function() {
		circle.style.backgroundColor = "rgba(244,14,33,0.6)";
	}
	red.onmousemove = function() {
		circle.style.boxShadow = "0px 0px 50px 10px rgba(244,14,33,0.6)"
	}
	yellow.onclick = function() {
		circle.style.backgroundColor = "rgba(255,221,0,0.6)";
	}
	yellow.onmousemove = function() {
		circle.style.boxShadow = "0px 0px 50px 10px rgba(255,221,0,0.6)"
	}
	green.onclick = function() {
		circle.style.backgroundColor = "rgba(87,226,22,0.6)";
	}
	green.onmousemove = function() {
		circle.style.boxShadow = "0px 0px 50px 10px rgba(87,226,22,0.6)"
	}
	violet.onclick = function() {
		circle.style.backgroundColor = "rgba(143,0,226,0.6)";
	}
	violet.onmousemove = function() {
		circle.style.boxShadow = "0px 0px 50px 10px rgba(143,0,226,0.6)"
	}
}