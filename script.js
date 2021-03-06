window.onload = function() {
	let block = document.querySelectorAll(".block");
	let button = document.querySelector("#darkLight");
	let body = document.querySelector("body");
	alert('Справка:' + '\n' + "Чтобы выбрать цвет закраски выбери клавишу, соответствующую начальной клавиши, например, чтобы выбрать красный нажми R(red), синий B(blue) Чтобы вызвать справку нажмите ctr+space");
 	alert('Справка:' + '\n' +  "Так же можно ввести произвольный цвет в формате rgb/rgba или hex, чтобы задать свой цвет." + '\n' + "Чтобы вызвать окно для ввода нажми alt + space")
 	alert('Справка:' + '\n' +  "Нажмите 2, чтобы настроить скорость затухания/закрашивания");
 	alert('Справка:' + '\n' +  "Нажмите 0, чтобы отчистить закрашенные клетки");

	var overColor = "black";
	var outColor = "white";
	var drawOn = "0.3s";
	var drawOf = "10s";

	button.onclick = function() {
		body.classList.toggle('blackBody');
	}

	for(let i = 0; i < block.length; i++) {
		block[i].onmouseover = function() {
			block[i].style.backgroundColor = overColor;
			block[i].style.transition = drawOn;
			console.log(i);
		}
		block[i].onmousedown = function() {
			block[i].style.backgroundColor = overColor;
			block[i].style.transition = '0.1s';
			block[i+1].style.backgroundColor = overColor;
			block[i+1].style.transition = '0.1s';
			block[i-1].style.backgroundColor = overColor;
			block[i-1].style.transition = '0.1s';
			block[i+2].style.backgroundColor = overColor;
			block[i+2].style.transition = '0.2s';
			block[i-2].style.backgroundColor = overColor;
			block[i-2].style.transition = '0.2s';
			block[i+20].style.backgroundColor = overColor;
			block[i+20].style.transition = '0.1s';
			block[i-20].style.backgroundColor = overColor;
			block[i-20].style.transition = '0.1s';
			block[i+18].style.backgroundColor = overColor;
			block[i+18].style.transition = '0.2s';
			block[i-18].style.backgroundColor = overColor;
			block[i-18].style.transition = '0.2s';
			block[i+38].style.backgroundColor = overColor;
			block[i+38].style.transition = '0.4s';
			block[i-38].style.backgroundColor = overColor;
			block[i-38].style.transition = '0.4s';
			block[i+40].style.backgroundColor = overColor;
			block[i+40].style.transition = '0.6s';
			block[i-40].style.backgroundColor = overColor;
			block[i-40].style.transition = '0.6s';
			block[i+41].style.backgroundColor = overColor;
			block[i+41].style.transition = '0.8s';
			block[i-41].style.backgroundColor = overColor;
			block[i-41].style.transition = '0.8s';
			block[i+42].style.backgroundColor = overColor;
			block[i+42].style.transition = '1s';
			block[i-42].style.backgroundColor = overColor;
			block[i-42].style.transition = '1s';
		}
	}
	for(let i = 0; i < block.length; i++) {
		block[i].onmouseup = function() {
			block[i].style.backgroundColor = outColor;
			block[i].style.transition = '0.1s';
			block[i+1].style.backgroundColor = outColor;
			block[i+1].style.transition = '0.1s';
			block[i-1].style.backgroundColor = outColor;
			block[i-1].style.transition = '0.1s';
			block[i+2].style.backgroundColor = outColor;
			block[i+2].style.transition = '0.2s';
			block[i-2].style.backgroundColor = outColor;
			block[i-2].style.transition = '0.2s';
			block[i+20].style.backgroundColor = outColor;
			block[i+20].style.transition = '0.1s';
			block[i-20].style.backgroundColor = outColor;
			block[i-20].style.transition = '0.1s';
			block[i-22].style.backgroundColor = outColor;
			block[i-22].style.transition = '0.2s';
			block[i+22].style.backgroundColor = outColor;
			block[i+22].style.transition = '0.2s';
			block[i+42].style.backgroundColor = outColor;
			block[i+42].style.transition = '0.4s';
			block[i-42].style.backgroundColor = outColor;
			block[i-42].style.transition = '0.4s';
			block[i+40].style.backgroundColor = outColor;
			block[i+40].style.transition = '0.6s';
			block[i-40].style.backgroundColor = outColor;
			block[i-40].style.transition = '0.6s';
			block[i+39].style.backgroundColor = outColor;
			block[i+39].style.transition = '0.8s';
			block[i-39].style.backgroundColor = outColor;
			block[i-39].style.transition = '0.8s';
			block[i+38].style.backgroundColor = outColor;
			block[i+38].style.transition = '1s';
			block[i-38].style.backgroundColor = outColor;
			block[i-38].style.transition = '1s';
		}
		block[i].onmouseout = function() {
			block[i].style.backgroundColor = outColor
			block[i].style.transition = drawOf;
		}
	}

	for(let i = 0; i < block.length; i++) {
		block[i].ondblclick = function() {
			for(let i = 0; i < block.length; i++) {
				block[i].classList.toggle("blockCircle");
				block[i].style.transition = '1s';
			}
		}
	}


	document.addEventListener('keydown', function(event) {
	if (event.code == "Digit2") {
		drawOn = prompt("скорость закраски", "0.5s");
		drawOf = prompt("скорость затухания", "5s");
	}	


	if (event.code == 'Digit0') {
		for(let i = 0; i < block.length; i++) {
			block[i].style.backgroundColor = 'transparent';
		}
	}
	if (event.code == 'KeyK') {
		overColor = "khaki";
	}
	if (event.code == 'KeyP') {
		overColor = "purple";
	}
	if (event.code == 'KeyO') {
		overColor = "orange";
	}
	if (event.code == 'KeyW') {
		overColor = "white";
	}
	if (event.code == 'KeyG') {
		overColor = "green";
	}
	if (event.code == 'KeyB') {
		overColor = "blue";
	}
	if (event.code == 'KeyR') {
		overColor = "red";
	}
	if (event.code == 'KeyY') {
		overColor = "yellow";
	}
	if (event.code == 'Digit1') {
		overColor = prompt("цвет закраски","для rgb/rgba  используй форму подобного типа: rgb(255,166,70)");
		outColor = prompt("цвет затухания");
	}	
  	if (event.code == 'Space' && (event.ctrlKey || event.metaKey)) {
    alert('Справка:' + '\n' + "Чтобы выбрать цвет закраски выбери клавишу, соответствующую начальной клавиши, например, чтобы выбрать красный нажми R(red), синий B(blue) Чтобы вызвать справку нажмите ctr+space");
 	alert('Справка:' + '\n' +  "Так же можно ввести произвольный цвет в формате rgb/rgba или hex, чтобы задать свой цвет." + '\n' + "Чтобы вызвать окно для ввода нажми 1");
 	alert('Справка:' + '\n' +  "Нажмите 2, чтобы настроить скорость затухания/закрашивания");
 	alert('Справка:' + '\n' +  "Нажмите 0, чтобы отчистить закрашенные клетки");
  }
});
	
}