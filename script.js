window.onload = function() {
	document.querySelector("#header").onmouseover = function() {
		document.querySelector("#loh").classList.add("sosishow");
	}
	document.querySelector("#header").onmouseout = function() {
		document.querySelector("#loh").classList.remove("sosishow");
	}
	document.querySelector("#circle").onmouseover = function() {
		document.querySelector("#circle").style.borderRadius = "0"
		document.querySelector("#leha").style.opacity = '1'
		document.querySelector("#leha").style.borderRadius = "0"

		
		document.querySelector("#circlenaz1").style.animationName = 'spinback'
		document.querySelector("#circlenaz2").style.animationName = 'spinback'

	}
	document.querySelector("#circle").onmouseout = function() {
		document.querySelector("#circle").style.borderRadius = "50%"
		document.querySelector("#leha").style.opacity = '0.3'
		document.querySelector("#leha").style.borderRadius = "50%"

		document.querySelector("#circlenaz1").style.animationName = 'spin'
		document.querySelector("#circlenaz2").style.animationName = 'spin'

	}
}