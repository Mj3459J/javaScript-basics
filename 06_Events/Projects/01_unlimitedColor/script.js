// generate random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

// this null and if check is production level code.
let intervalId;
const changeColor = function () {
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 500);
    }
    function changeBgColor () {
        const body = document.querySelector('body');
        body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId=null;
};

start.addEventListener('click', changeColor);
stop.addEventListener('click', stopChangingColor);
