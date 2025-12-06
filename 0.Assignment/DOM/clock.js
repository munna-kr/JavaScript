//==> simple clock

const clock = document.getElementById('clock');

// weekdays
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
console.log(days[1]);
//-->
function time() {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let day = now.getDay();

  // adding zero to single digit
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  day = day < 10 ? '0' + day : day;
  date = date < 10 ? '0' + date : date;
  month = month < 10 ? '0' + month : month;

  clock.innerText = `Time: ${hour}:${minute}:${second}\nDate: ${date}/${month}/${year}\nDay: ${
    days[Number(day)]
  }`;
}
time();
const live = setInterval(time, 1000);
// clearInterval(live);
