let start = document.querySelector('.start');
start.addEventListener('click', startTimer);

let reset = document.querySelector('.reset');
reset.addEventListener('click', stop);

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
let total;
let finalDate;
let intervalId;

if (localStorage.getItem('timer')) {
  finalDate = localStorage.getItem('timer');
  intervalId = setInterval(timer, 1000);
}

function startTimer() {
  const date = document.querySelector('#date').value;
  finalDate = new Date(date).getTime();
  localStorage.setItem('timer', finalDate);

  intervalId = setInterval(timer, 1000);
}

function timer() {
  let currentDate = new Date().getTime();
  total = finalDate - currentDate;
  const days = Math.floor(total / day);
  const hours = Math.floor((total % day) / hour) + 3; // +3 do fuso horário
  const minutes = Math.floor((total % hour) / minute);
  const seconds = Math.floor((total % minute) / second);

  document.querySelector(
    '.emoji'
  ).innerHTML = `${days}d ${hours}h:${minutes}m:${seconds}s`;
}

function stop() {
  document.querySelector('.emoji').innerHTML = '🤔';
  clearInterval(intervalId);
  localStorage.removeItem('timer');
}
