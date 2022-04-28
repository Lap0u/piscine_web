function changeCol() {
	rand = Math.floor(Math.random()*16777215).toString(16);
	btn = document.getElementById('btn');
	document.body.style.background = "#" + rand;
	rand = Math.floor(Math.random()*16777215).toString(16);
	// btn.style.background = '#' + rand;
 }