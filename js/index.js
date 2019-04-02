function renderTime() {
  const date = new Date();
  const hour = addZero(date.getHours());
  const min = addZero(date.getMinutes());
  const sec = addZero(date.getSeconds());

  document.getElementById('clock').innerText = hour + ':' + min + ':' + sec;

}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

renderTime();
window.setInterval(renderTime, 1000);

// function display() {
//   console.log("Hard Work Beats Talent When Talent Doesnt Work Hard")
// }
// 
// var button = document.getElementById("click")
// button.addEventListener('click', display, false)
