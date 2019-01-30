window.onload = function() {

	var loh = document.querySelector('.LOH');

	var _Ll = document.querySelector('.Ll');
	var _Ol = document.querySelector('.Ol');
	var _Hl = document.querySelector('.Hl');

	var _Lr = document.querySelector('.Lr');
	var _Or = document.querySelector('.Or');
	var _Hr = document.querySelector('.Hr');


	document.querySelector(".wrap").onclick = function(){
		loh.className = "LOH1";

		_Ll.className = ("Llv");
		_Ol.className = ("Olv");
		_Hl.className = ("Hlv");

		_Lr.className = ("Lrv");
		_Or.className = ("Orv");
		_Hr.className = ("Hrv");

		};


		/*var change1 = function(){
		var	wrap = document.querySelector(".wrap");

		wrap.className = "newWrap";
	};

		var change2 = function(){
		var	wrap = document.querySelector(".newWrap");

		wrap.className = "wrap";
	};



	setInterval(change1, 5000);
	setInterval(change2, 10000);
	*/
};
