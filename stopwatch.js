const stopwatchtag = document.getElementsByClassName("stopwatch")[0];
const metresecondsTag = document.getElementsByClassName("metreseconds")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let metreseconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;

const startTime = () => {
  metreseconds += 1;
  if (metreseconds === 60) {
    metreseconds = 0;
    seconds += 1;

    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
  }

  const metresecondsText =
    metreseconds < 10 ? "0" + metreseconds.toString() : metreseconds;
  const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hoursText = hours < 10 ? "0" + hours.toString() : hours;

  stopwatchtag.textContent = hoursText + ":" + minutesText + ":" + secondsText;
  metresecondsTag.textContent = metresecondsText;
};

let intervalId;
startButtonTag.addEventListener("click", () => {
  intervalId = setInterval(startTime, 10);
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 10);
});

restartButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  (metreseconds = 0), (seconds = 0), (minutes = 0), (hours = 0);
  intervalId = setInterval(startTime, 10);
});
