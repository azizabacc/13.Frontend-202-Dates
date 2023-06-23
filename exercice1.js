/* Find the timezones of :
Anchorage (USA)
Reykjavik (Iceland)
Saint-Petersburg (Russia)
Display the date and time of these cities along
 with the time and date of Brussels. */

 //print all the timeZone
 let moment = require('moment-timezone');
let timeZones = moment.tz.names();
console.log(timeZones);
 // Anchorage (USA)
let anchorageTime = new Date().toLocaleString('en-US', { timeZone: 'America/Anchorage' });
console.log('Anchorage: ' + anchorageTime);
// Reykjavik (Iceland)
let reykjavikTime = new Date().toLocaleString('en-US', { timeZone: 'Atlantic/Reykjavik' });
console.log('Reykjavik: ' + reykjavikTime);

// Saint-Petersburg (Russia)
let stPetersburgTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
console.log('Saint-Petersburg: ' + stPetersburgTime);

// Brussels (Belgium)
let brusselsTime = new Date().toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
console.log('Brussels: ' + stPetersburgTime);
/* console.log(Intl.DateTimeFormat().resolvedOptions().timeZone); */