var calendar = document.querySelector("#calendar");
var num = document.querySelector("#num");
var check = document.querySelector("#check");
var output = document.querySelector("#output");
var close = document.querySelector(".close");
var privacyNotice = document.querySelector(".privacy-notice");
var image = document.querySelector(".image");
function hideOnClick() {
	privacyNotice.style.display = "none";
}
function calc() {
	image.src = "";
	if (Number(num.value) < 0) {
		output.innerHTML = "Please enter a positive number";
		return 0;
	}

	if (num.value && calendar.value) {
		var date = calendar.value;
		date = Number(date.replaceAll("-", ""));
		var sum = 0;
		var last_digit = 0;
		while (date > 0) {
			last_digit = date % 10;

			sum += last_digit;
			date = Math.floor(date / 10);
		}
		if (sum % num.value === 0) {
			output.innerHTML = "Congrats!! Yours is a lucky birthday";
			image.src = "./img/leonardo.gif";
		} else {
			output.innerHTML = "Sorry!! Yours is not a lucky birthday";
			image.src = "./img/pika.gif";
		}
	} else {
		output.innerHTML = "Please enter valid values for both fields";
	}
}

check.addEventListener("click", calc);
close.addEventListener("click", hideOnClick);
