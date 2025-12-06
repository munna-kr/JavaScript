const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts",
  "Why was the math book sad? It had too many problems",

  "Why don’t eggs tell jokes? They’d crack each other up.",

  "What do you call fake spaghetti? An impasta.",

  "Why did the scarecrow win an award? He was outstanding in his field.",

  "What do you call cheese that isn’t yours? Nacho cheese.",

  "Why did the computer go to the doctor? It had a virus.",

  "What do you call a fish with no eyes? Fsh.",

  "Why don’t scientists trust atoms? Because they make up everything.",

  "What do you call a bee that can’t make up its mind? A maybe.",
];

const greet = document.getElementById("greet");
const joke = document.getElementById("joke");

//==> yes
const yes = document.getElementById("yes");
yes.addEventListener("click", function () {
  joke.innerText = jokes[Math.floor(Math.random() * 10)];
  greet.innerText = "😀😀";
  yes.textContent = "Next";
});

//==> no
const no = document.getElementById("no");
no.addEventListener("click", function () {
  joke.innerText = "Have a beautiful day!";
  yes.innerText = "Yes";
  greet.innerText = "☺️☺️";

  yes.remove();
  no.remove();
  div.append(btnReload);
});

// ==> refresh
const div = document.querySelector("div");
const btnReload = document.createElement("button");
btnReload.innerText = "Reload";
btnReload.setAttribute("class", "btn");
btnReload.addEventListener("click", function () {
  location.reload();
});
