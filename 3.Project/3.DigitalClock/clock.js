//Months
const monthsName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

//Days
const daysName = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

//HTML elements
const monthDateYear = document.getElementById('monthDateYear');
const hrsMins = document.getElementById('hrsMins');
const seconds = document.getElementById('seconds');
const days = document.getElementById('days');

//
function updateTime() {
  const now = new Date();
  monthDateYear.innerText = `${
    monthsName[Number(now.getMonth())]
  } ${now.getDate()}, ${now.getFullYear()} `;
  hrsMins.innerText = `${now.getHours()}:${now.getMinutes()}`;
  seconds.innerText = now.getSeconds();
  days.innerText = daysName[Number(now.getDay())].toUpperCase();
}

const secBtn = document.getElementById('sec-btn');
secBtn.addEventListener('click', () => {
  seconds.toggleAttribute('hidden');
  secBtn.innerText = 'Show';
});

updateTime();
setInterval(updateTime, 1000);
