const sessionDuration = 25;

let pomodoroDisplay;
let pomodoroStartBtn;
let pomodoroStopBtn;

let interval;

const countStart = () => {
  let seconds = 59;
  let workMinutes = sessionDuration - 1;

  interval = setInterval(() => {
    pomodoroStartBtn.classList.remove("flex");
    pomodoroStartBtn.classList.add("hidden");
    pomodoroStopBtn.classList.remove("hidden");
    pomodoroStopBtn.classList.add("flex");

    const padMins = `${workMinutes}`.padStart(2, "0");
    const padSecs = `${seconds}`.padStart(2, "0");
    pomodoroDisplay.innerText = `${padMins}:${padSecs}`;

    seconds = seconds - 1;

    if (seconds === 0) {
      workMinutes--;

      if (workMinutes === -1 && seconds === 0) {
        stop();
      } else {
        seconds = 59;
      }
    }
  }, 1000);
};

const countStop = () => {
  clearInterval(interval);

  pomodoroDisplay.innerText = "25:00";

  pomodoroStopBtn.classList.remove("flex");
  pomodoroStopBtn.classList.add("hidden");
  pomodoroStartBtn.classList.remove("hidden");
  pomodoroStartBtn.classList.add("flex");
};

export const startPomodoro = () => {
  pomodoroDisplay = document.getElementById("pomodoroDisplay");
  pomodoroStartBtn = document.getElementById("pomodoroStart");
  pomodoroStopBtn = document.getElementById("pomodoroStop");

  pomodoroStartBtn.addEventListener("click", countStart);
  pomodoroStopBtn.addEventListener("click", countStop);
};
