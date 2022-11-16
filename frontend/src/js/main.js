import "flowbite";
import "@interactjs/auto-start";
import "@interactjs/actions/drag";
import interact from "@interactjs/interact";

// constants
const applets = document.querySelectorAll(".applet");
const mdSize = 768;
const rand = (min, max) => Math.random() * (max - min) + min;

// interact.js
const dragMoveListener = (event) => {
  let target = event.target;

  // keep the dragged position in the data-x/data-y attributes
  let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = `translate(${x}px, ${y}px)`;

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
};

interact(".applet").draggable({
  enabled: window.innerWidth > mdSize,
  inertia: true,
  autoScroll: false,
  listeners: {
    move: dragMoveListener,
  },
});

// z-index
let zIndex = 1;

applets.forEach((applet) => {
  applet.addEventListener("mousedown", () => {
    zIndex++;
    applet.style.zIndex = zIndex;
  });

  applet.addEventListener("touchstart", () => {
    zIndex++;
    applet.style.zIndex = zIndex;
  });
});

// Move applets to random position
window.addEventListener("load", () => {
  if (window.innerWidth < mdSize) {
    return;
  }

  const windowWidth = window.innerWidth;
  const widnowHeight = window.innerHeight;

  applets.forEach((applet) => {
    const appletWidth = applet.offsetWidth;
    const appletHeight = applet.offsetHeight;

    const x = rand(appletWidth, windowWidth - appletWidth);
    const y = rand(appletHeight, widnowHeight - appletHeight);

    // translate the element
    applet.style.transform = `translate(${x}px, ${y}px)`;

    // update the posiion attributes
    applet.setAttribute("data-x", x);
    applet.setAttribute("data-y", y);
  });
});

// Pomodoro applet
if (document.body.contains(document.getElementById("pomodoro"))) {
  const display = document.getElementById("pomodoroDisplay");
  const startBtn = document.getElementById("pomodoroStart");
  const stopBtn = document.getElementById("pomodoroStop");
  const sessionDuration = 25;

  let interval;

  const start = () => {
    let seconds = 59;
    let workMinutes = sessionDuration - 1;

    interval = setInterval(() => {
      startBtn.classList.remove("flex");
      startBtn.classList.add("hidden");
      stopBtn.classList.remove("hidden");
      stopBtn.classList.add("flex");

      const padMins = `${workMinutes}`.padStart(2, "0");
      const padSecs = `${seconds}`.padStart(2, "0");
      display.innerText = `${padMins}:${padSecs}`;

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

  const stop = () => {
    clearInterval(interval);

    display.innerText = "25:00";

    stopBtn.classList.remove("flex");
    stopBtn.classList.add("hidden");
    startBtn.classList.remove("hidden");
    startBtn.classList.add("flex");
  };

  startBtn.addEventListener("click", start);
  stopBtn.addEventListener("click", stop);
}
