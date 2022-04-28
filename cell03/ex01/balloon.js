function grow() {
	ball = document.getElementById('bal');
	if (ball.style.backgroundColor == "" || ball.style.backgroundColor == "red")
		ball.style.backgroundColor = "blue";
	else if (ball.style.backgroundColor == "blue")
		ball.style.backgroundColor = "green";
	else if (ball.style.backgroundColor == "green")
		ball.style.backgroundColor = "red";
	size = ball.offsetWidth
	ball.style.width =(size+10)+"px";
	ball.style.height =(size+10)+"px";
	if (size + 10 >= 420)
	{
		ball.style.width ="200px";
		ball.style.height ="200px";
		ball.style.backgroundColor = "red";
	}
}

const t2 = document.getElementById('bal');
t2.addEventListener('mouseleave', e => {
	ball = document.getElementById('bal');
	if (ball.style.backgroundColor == "" || ball.style.backgroundColor == "red")
		ball.style.backgroundColor = "green";
	else if (ball.style.backgroundColor == "blue")
		ball.style.backgroundColor = "red";
	else if (ball.style.backgroundColor == "green")
		ball.style.backgroundColor = "blue";
	size = ball.offsetWidth
	if (size - 5 >= 200)
	{
	ball.style.width =(size-5)+"px";
	ball.style.height =(size-5)+"px";
	}
});