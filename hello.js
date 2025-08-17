const textElement = document.getElementById("colorText");

const colors = ["red", "blue"];
let index = 0;

setInterval(() => {
  textElement.style.color = colors[index];
  index = (index + 1) % colors.length;
}, 1000);
