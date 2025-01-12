/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a funciton that receives daily work hours for a certain week, and returns:
1. Total hours worked 
2. Average daily hours 
3. The day with the most hours worked 
4. Number of days worked 
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]

===>>
total hours worked >> sum of all hours using loop
*/
const timeTrack = function (hour) {
  let totalHour = 0;
  let avgHour = 0;
  let fullWeek = true;
  let totalDays = 0;
  let peakDay = 0;
  for (let i = 0; i < hour.length; i++) {
    totalHour += hour[i];
    //for peakDay
    if (peakDay < hour[i]) peakDay = i + 1;
  }
  // total days
  totalDays = hour.length;
  if (totalHour >= 35) fullWeek = true;
  // average hour
  avgHour = totalHour / hour.length;

  return {
    totalDays,
    totalHour,
    avgHour,
    fullWeek,
    peakDay,
  };
};
timeData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(timeTrack(timeData));
