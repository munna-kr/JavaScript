# HTML + CSS + JavaScript Beginner Projects

## 1. Digital Clock

**Features**
- Shows current time (HH:MM:SS)
- Updates every second using `setInterval()`

**Code**
```html
<h1 id="clock"></h1>

<script>
  function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText =
      now.toLocaleTimeString();
  }

  setInterval(updateClock, 1000);
  updateClock();
</script>
```

---

## 2. Random Color Changer

**Features**
- Button changes the background color randomly
- Practices DOM manipulation and events

**Code**
```html
<button id="btn">Change Color</button>

<script>
  document.getElementById("btn").onclick = function () {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  }
</script>
```

---

## 3. To-Do List App

**Features**
- Add tasks
- Delete tasks
- Great for DOM creation and events

**Code**
```html
<input id="taskInput" placeholder="Enter task">
<button onclick="addTask()">Add</button>
<ul id="taskList"></ul>

<script>
function addTask() {
  const task = document.getElementById("taskInput").value;
  if (!task) return;

  const li = document.createElement("li");
  li.innerHTML = task + " <button onclick='this.parentElement.remove()'>❌</button>";
  document.getElementById("taskList").appendChild(li);
}
</script>
```

---

## 4. Image Slider / Carousel

**Features**
- Next/previous image buttons
- Simple slider functionality

**Code**
```html
<img id="img" width="300">

<button onclick="prev()">Prev</button>
<button onclick="next()">Next</button>

<script>
const images = [
  "https://picsum.photos/300?1",
  "https://picsum.photos/300?2",
  "https://picsum.photos/300?3"
];

let index = 0;
document.getElementById("img").src = images[index];

function next() {
  index = (index + 1) % images.length;
  document.getElementById("img").src = images[index];
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("img").src = images[index];
}
</script>
```

---

## 5. Basic Calculator

**Features**
- Add, subtract, multiply, divide
- Simple math logic using JS

**Code**
```html
<input id="num1" type="number">
<input id="num2" type="number">
<button onclick="calc('+')">+</button>
<button onclick="calc('-')">-</button>
<button onclick="calc('*')">*</button>
<button onclick="calc('/')">/</button>

<h2 id="result"></h2>

<script>
function calc(op) {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);

  const ans = eval(a + op + b);
  document.getElementById("result").innerText = "Result: " + ans;
}
</script>
```
