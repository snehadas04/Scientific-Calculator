const display = document.querySelector("#display");
const calcul = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

function sin() {
  document.calcul.result.value = Math.sin(document.calcul.result.value);
}

function cos() {
  document.calcul.result.value = Math.cos(document.calcul.result.value);
}

function tan() {
  document.calcul.result.value = Math.tan(document.calcul.result.value);
}

function BACKSPC() {
  var a = document.calcul.result.value;
  document.calcul.result.value = a.substr(0, a.length - 1);
}

function square() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
}

function cubed() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 3);
}

function sqrt2() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 1 / 2);
}

function sqrt3() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 1 / 3);
}

function number(value) {
  document.calcul.result.value += value;
}

function remv() {
  document.calcul.result.value = " ";
}

function equal() {
  document.calcul.result.value = eval(document.calcul.result.value);
}

