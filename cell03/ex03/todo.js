temp = 0;

function add(){
	newDiv = document.createElement("div");

	colors = ["", "#FFFF00", "#FF00FF", "#FF8C00", "#00FFFF", "#00FF00", "#AA0080"];
	newDiv.classList.add('new');
	x = 0;
	while (temp == x || x == 0)
		x = Math.floor(Math.random()*6+1);
	console.log(x);
	newDiv.style.background = colors[x];
	temp = x;
	newContent = document.createTextNode('My task');
	newDiv.appendChild(newContent);
	currentDiv = document.getElementById('ft_list');
	currentDiv.appendChild(newDiv);
}