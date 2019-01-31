				function randomInt(min, max){
			let length = max - min + 1;
			let rand = Math.floor(Math.random() * length) + min;
			return rand;
		}

		let x, y;

		function randit1(){
		for(let i = 0; i < 1; i++){
			x = randomInt(0, 10);
			y = randomInt(0, 10);
			document.querySelector("#textx").innerHTML = ("x - " + x);
			document.querySelector("#texty").innerHTML = ("y - " + y);
			if(x === y){
				document.querySelector("#another").innerHTML = "Cовпало!";
			}
			else{
				document.querySelector("#another").innerHTML = "Не совпало!";
			}

			if(x % 2 == 0){
				document.querySelector("#forintx").innerHTML = ("x - четное число");
			}
			else{
					document.querySelector("#forintx").innerHTML = ("x - нечетное число");
				}


			if(y % 2 == 0){
				document.querySelector("#forinty").innerHTML = ("y - четное число");
			}
			else{
					document.querySelector("#forinty").innerHTML = ("y - нечетное число");
				}
		}
		};

		function randit2(){
		for(let i = 0; i < 1; i++){
			x = randomInt(0, 10);
			y = randomInt(0, 10);
			document.querySelector("#textx").innerHTML = ("x - " + x);
			document.querySelector("#texty").innerHTML = ("y - " + y);
			if(x === y){
				document.querySelector("#another").innerHTML = "Cовпало!";
			}
			else{
				document.querySelector("#another").innerHTML = "Не совпало!";
			}

			if(x % 2 == 0){
				document.querySelector("#forintx").innerHTML = ("x - четное число");
			}
			else{
					document.querySelector("#forintx").innerHTML = ("x - нечетное число");
				}


			if(y % 2 == 0){
				document.querySelector("#forinty").innerHTML = ("y - четное число");
			}
			else{
					document.querySelector("#forinty").innerHTML = ("y - нечетное число");
				}
		}
		};

	setInterval(randit1, 500);
	setInterval(randit2, 750);

	/////////////////////////////////////////////////////////
	let x1, y1;

		function randit3(){
		for(let i = 0; i < 1; i++){
			x1 = randomInt(0, 10);
			y1 = randomInt(0, 10);
			document.querySelector("#textx1").innerHTML = ("x1 - " + x1);
			document.querySelector("#texty1").innerHTML = ("y1 - " + y1);
			if(x1 === y1){
				document.querySelector("#another").innerHTML = "Cовпало!";
			}
			else{
				document.querySelector("#another").innerHTML = "Не совпало!";
			}

			if(x1 % 2 == 0){
				document.querySelector("#forintx").innerHTML = ("x - четное число");
			}
			else{
					document.querySelector("#forintx").innerHTML = ("x - нечетное число");
				}


			if(y1 % 2 == 0){
				document.querySelector("#forinty").innerHTML = ("y - четное число");
			}
			else{
					document.querySelector("#forinty").innerHTML = ("y - нечетное число");
				}
		}
		};

		function randit4(){
		for(let i = 0; i < 1; i++){
			x1 = randomInt(0, 10);
			y1 = randomInt(0, 10);
			document.querySelector("#textx1").innerHTML = ("x1 - " + x1);
			document.querySelector("#texty1").innerHTML = ("y1 - " + y1);
			if(x === y){
				document.querySelector("#another1").innerHTML = "Cовпало!";
			}
			else{
				document.querySelector("#another1").innerHTML = "Не совпало!";
			}

			if(x1 % 2 == 0){
				document.querySelector("#forintx1").innerHTML = ("x - четное число");
			}
			else{
					document.querySelector("#forintx1").innerHTML = ("x - нечетное число");
				}


			if(y1 % 2 == 0){
				document.querySelector("#forinty1").innerHTML = ("y - четное число");
			}
			else{
					document.querySelector("#forinty1").innerHTML = ("y - нечетное число");
				}
			if(x == x1){
					document.querySelector("#gsx").innerHTML = ("x = x1");
				}else{
					document.querySelector("#gsx").innerHTML = ("");
				}

			if(y == y1){
					document.querySelector("#gsy").innerHTML = ("y = y1");
				}else{
						document.querySelector("#gsy").innerHTML = ("");
					}
		}
		};

	setInterval(randit3, 500);
	setInterval(randit4, 750);