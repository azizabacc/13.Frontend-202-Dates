// set variables
let date = new Date();

function updateClock() {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  
  let day = date.toLocaleDateString('en-US', options).slice(0,3);
  let mounth = date.toLocaleDateString('en-US', options).slice(5,8);
  let dayNb = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  let head = document.getElementById("head");
  head.textContent = day;
  
  let dayNum = document.getElementById("dayNb");
  dayNum.textContent = dayNb;
  
  let mounths = document.getElementById("mounth");
  mounths.textContent = mounth;
  
  let bottom = document.getElementById("bottom");
  bottom.textContent = year;
  
  let right = document.getElementById("right");
  right.innerHTML = "<p>" + hours + ":" + minutes + ":" + "<span>" + seconds + "</span></p>";
}

// Mettre à jour l'heure toutes les secondes
setInterval(function() {
  date = new Date();
  updateClock();
}, 1000);

// Appeler la fonction initiale pour afficher l'heure actuelle
updateClock();
