let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  const now = Date.now();
  const then = now.toString() + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const { minutes, remainderSeconds } = minutesAndSeconds(seconds);
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function minutesAndSeconds(seconds) {
  return { minutes: Math.floor(seconds / 60), remainderSeconds: seconds % 60 };
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const adjustedHour = adjustHours(end.getHours());
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function adjustHours(hours) {
  return hour > 12 ? hour - 12 : hour;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));