/* Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
Write a function to find how many days have passed since any point in time (after 1970). */

function calculateDaysSinceBirth(birthday) {
    var currentTime = Date.now();
    console.log(currentTime);
    var birthTime = new Date(birthday).getTime();
    var timeDifference = currentTime - birthTime;
    var daysPassed = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    
    return daysPassed;
  }
  
  var birthday= '2023-06-22';
  var daysSinceBirth = calculateDaysSinceBirth(birthday);
  console.log('Days since my birth:', daysSinceBirth," days.");
  