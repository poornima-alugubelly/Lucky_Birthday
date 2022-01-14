const calendar = document.querySelector("#calendar");
const num = document.querySelector("#num");
const check = document.querySelector("#check");
const output = document.querySelector("#output");
const close = document.querySelector(".close");
const privacyNotice = document.querySelector(".privacy-notice");

const hideOnClick = () => (privacyNotice.style.display = "none");

function calcLuckyBirthday() {
  if (Number(num.value) < 0) {
    output.innerHTML = `<div class="output-txt"> Please enter a positive number </div>`;
    return 0;
  }

  if (num.value && calendar.value) {
    let date = calendar.value;
    date = Number(date.replaceAll("-", ""));
    let sum = 0;
    let last_digit = 0;
    while (date > 0) {
      last_digit = date % 10;

      sum += last_digit;
      date = Math.floor(date / 10);
    }
    if (sum % num.value === 0) {
      output.innerHTML = `<div class="output-txt"> Congrats!! Yours is a lucky birthday </div>;
			                      <img class="image" src="/img/leonardo.gif">`;
    } else {
      output.innerHTML = `<div class="output-txt"> Sorry!! Yours is not a lucky birthday </div>;
			                      <img class="image" src="/img/pika.gif">`;
    }
  } else {
    output.innerHTML = `<div class="output-txt"> Please enter valid values for both fields </div>`;
  }
}

check.addEventListener("click", calcLuckyBirthday);
close.addEventListener("click", hideOnClick);
