// const colors = [
//   "background-color: red",
//   "background-color:teal",
//   "background-color:blue",
//   "background-color:pink",
//   "background-color:black",
//   "background-color:purple",
// ];

const colors = [
  "background-color:lime",
  "background-color:yellow",
  "background-color:green",
  "background-color:cyan",
  "background-color:white",
  "background-color:neonyellow",
  "background-color:orange",
  "background-color:red",
  "background-color:hotpink",
  "background-color:magenta",
  "background-color:blue",
  "background-color:deepskyblue",
  "background-color:turquoise",
  "background-color:amber",
  "background-color:violet",
  "background-color:purple",
  "background-color:skyblue",
  "background-color:chartreuse",
  "background-color:fluorescentorange",
  "background-color:electricred",
];

const div = document.querySelector("div");
const repeatMsg = function () {
  const color = colors[Math.floor(Math.random() * colors.length)];
  div.setAttribute("style", color);
  div.textContent = "";
};

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  btn1.remove();
  setInterval(repeatMsg, 100);
});
