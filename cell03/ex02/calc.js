function process(form) {
	lhs = document.getElementById("lhs").value;
	sign = document.getElementById("sel").value;
	rhs = document.getElementById("rhs").value;
	if (sign == "/" || sign == "%" && rhs == "0")
	{
		alert("It's over 9000!");
		console.log("It's over 9000!")
		exit;
	}
	if (sign == "+")
		res = Number(lhs) + Number(rhs);
	if (sign == "-")
		res = Number(lhs) - Number(rhs);
	if (sign == "*")
		res = Number(lhs) * Number(rhs);
	if (sign == "/")
		res = Number(lhs) / Number(rhs);
	if (sign == "%")
		res = Number(lhs) % Number(rhs);
	console.log(res);
	alert(res);
}

function popup() {

    alert("Please use me...")

    setTimeout(popup, 30000);
}

popup();