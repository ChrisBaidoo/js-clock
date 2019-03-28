function renderTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  document.getElementById('clock').innerText = hour + ':' + min + ':' + sec;
}

renderTime();

window.setInterval(function() {
  renderTime();
}, 1000);
