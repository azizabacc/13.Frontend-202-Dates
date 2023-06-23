/* Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
Write a function to find how many days have passed since any point in time (after 1970). */

function calculateDaysSinceBirth(birthday) {
    let currentTime = Date.now();
    console.log(currentTime);
    let birthTime = new Date(birthday).getTime();
    let timeDifference = currentTime - birthTime;
    let daysPassed = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    
    return daysPassed;
  }
  
  let birthday= '2023-06-22';
  let daysSinceBirth = calculateDaysSinceBirth(birthday);
  console.log('Days since my birth:', daysSinceBirth," days.");
  