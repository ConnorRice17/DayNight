console.log("script running . . .");


var start = null;
var element = document.getElementById('moving-moon');
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  console.log(timestamp);
  element.style.left = progress/10 + 'px';
  if (progress < 14500) {
    window.requestAnimationFrame(step);
  }
  if (progress >= 14500) {
    start = null;
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
