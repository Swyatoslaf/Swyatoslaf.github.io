window.onload = function() {
	let circle = document.querySelector("#circle");
	let colorCircle;
	let colorShadow;
	document.querySelector("#colorCircle").oninput = function() {
		colorCircle = this.value;
		circle.style.backgroundColor = colorCircle;
		document.querySelector("#change_on_circle_back").innerHTML = "BackgroundColor :" + "\n </br>" + this.value;
	}
	document.querySelector("#colorShadow").oninput = function() {
		colorShadow = this.value;
		circle.style.boxShadow = "0px 0px 50px 10px" + colorShadow;
		document.querySelector("#change_on_circle_shadow").innerHTML = "BoxShadowColor :" + "\n </br>" + this.value;
	}

}