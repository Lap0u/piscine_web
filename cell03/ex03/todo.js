function add(){
	newDiv = document.createElement("div");
	newDiv.width = "400px";
	newContent = document.createTextNode('My task');
	newDiv.appendChild(newContent);
	currentDiv = document.getElementById('div1');
	document.body.insertBefore(newDiv, currentDiv);
	// alert("lol");
}