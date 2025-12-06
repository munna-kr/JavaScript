// // Q1
// const btn = document.getElementById('btn');
// btn.onclick = () => console.log('Hello!! button zero');

// // Q3 bookmarks

const google = document.getElementById('google');
google.innerText = 'Google';
google.addEventListener('click', function () {
  window.location = 'https://www.google.com';
});

const youtube = document.getElementById('youtube');
youtube.innerText = 'YouTube';
youtube.addEventListener('click', function () {
  window.location = 'https://www.youtube.com';
});

const w3schools = document.getElementById('w3schools');
w3schools.innerText = 'w3schools';
w3schools.addEventListener('click', function () {
  window.location = 'https://www.w3schools.com';
});

const div = document.getElementById('div2');

const newbtn = document.createElement('button');
newbtn.textContent = 'instagram';
newbtn.setAttribute('type', 'button');
div.append(newbtn);

newbtn.addEventListener('click', function () {
  window.location.href = 'https://www.instagram.com';
  console.log('Hello this is ...');
});

// ==> mutliple links (bookmarks) using array
const bookmark = [
  { site: 'w3schools', url: 'https://w3schools.com' },
  { site: 'Facebook', url: 'https://facebook.com' },
  { site: 'Instagram', url: 'https://instagram.com' },
  { site: 'Telegram', url: 'https://telegram.org' },
];

const bookmarks = document.getElementById('link-array');

bookmark.forEach(function (item) {
  const link = document.createElement('button');
  link.textContent = item.site;
  link.className = 'link-btn';

  link.addEventListener('click', () => {
    window.open(item.url, '_blank');
  });
  bookmarks.append(link);
});

//===> Q4
const documentText = () => console.log(document.body.textContent);
const a = setInterval(documentText, 3000);
clearInterval(a);

const glow = document.getElementById('glow-btn');

// ===> Q5 Glow bulb toggle
const glowing = function () {
  glow.toggleAttribute('style', 'color:red');
};

glow.addEventListener('click', function () {
  glow.toggleAttribute('style', 'color:red');
});

// const b = setTimeout(glowing, 2000);
