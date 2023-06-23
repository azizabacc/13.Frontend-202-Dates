/* Find the timezones of :
Anchorage (USA)
Reykjavik (Iceland)
Saint-Petersburg (Russia)
Display the date and time of these cities along
 with the time and date of Brussels. */

 //print all the timeZone
 var moment = require('moment-timezone');
var timeZones = moment.tz.names();
console.log(timeZones);
 // Anchorage (USA)
var anchorageTime = new Date().toLocaleString('en-US', { timeZone: 'America/Anchorage' });
console.log('Anchorage: ' + anchorageTime);
// Reykjavik (Iceland)
var reykjavikTime = new Date().toLocaleString('en-US', { timeZone: 'Atlantic/Reykjavik' });
console.log('Reykjavik: ' + reykjavikTime);

// Saint-Petersburg (Russia)
var stPetersburgTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
console.log('Saint-Petersburg: ' + stPetersburgTime);

// Brussels (Belgium)
var brusselsTime = new Date().toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
console.log('Brussels: ' + stPetersburgTime);
/* console.log(Intl.DateTimeFormat().resolvedOptions().timeZone); */