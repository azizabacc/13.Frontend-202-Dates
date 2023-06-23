/* Using timestamps, find the exact time and date we will be in 80000 hours.*/
function calculateFutureDateTime(hours) {
    let currentTimestamp = Date.now();
    let futureTimestamp = currentTimestamp + hours * 60 * 60 * 1000;
    let futureDate = new Date(futureTimestamp);
    return futureDate;
  }
  

  let hours = 80000;
  let futureDateTime = calculateFutureDateTime(hours);
  
  console.log('Future date and time:', futureDateTime);
  
/*Write a function to display the time and date for any amount of hours given in the future. 
Create a number input for the hours and listen for keyup events, 
dynamically display the date in the number of hours given by the input */

function displayfutureTime() {
    let hours = parseInt(document.getElementById('input').value, 10);
    
    if (isNaN(hours)) {
      document.getElementById('futureTime').textContent = 'Invalid input';
      return;
    }
    
    let futureTimestamp = Date.now() + hours * 60 * 60 * 1000;
    let futureDate = new Date(futureTimestamp);
    
    let options = { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    };
    
    let formattedDateTime = futureDate.toLocaleString('en-US', options);
    document.getElementById('futureTime').textContent = formattedDateTime;
  }
  
  let input = document.getElementById('input');
  input.addEventListener('keyup', displayfutureTime);
  