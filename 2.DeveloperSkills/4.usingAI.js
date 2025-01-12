// BY GEMINI

// function analyzeWorkWeek(workHours) {
//   const totalHours = workHours.reduce((acc, hours) => acc + hours, 0);
//   const averageHours = (totalHours / workHours.length).toFixed(1);
//   const maxHours = Math.max(...workHours);
//   const daysWorked = workHours.filter((hours) => hours > 0).length;
//   const isFullTime = totalHours >= 35;

//   return {
//     totalHours,
//     averageHours,
//     maxHoursDay: workHours.indexOf(maxHours) + 1, // Assuming days start from 1
//     daysWorked,
//     isFullTime,
//   };
// }

// // Example usage:
// const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
// const weekAnalysis = analyzeWorkWeek(weeklyHours);

// console.log(weekAnalysis);

// BY CHATGPT

function analyzeWorkWeek(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error('Invalid input: dailyHours must be an array of 7 numbers.');
  }

  const totalHours = dailyHours.reduce((total, hours) => total + hours, 0);
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;
  const averageDailyHours = totalHours / 7;
  const maxHours = Math.max(...dailyHours);
  const dayWithMostHours = dailyHours.indexOf(maxHours);
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    dayWithMostHours: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][dayWithMostHours],
    daysWorked,
    isFullTime,
  };
}

// Example usage
const dailyHours = [8, 7.5, 9, 6, 8, 0, 0];
const weekSummary = analyzeWorkWeek(dailyHours);
console.log(weekSummary);
