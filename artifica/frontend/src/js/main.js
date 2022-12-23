import "flowbite";
import "@interactjs/auto-start";
import "@interactjs/actions/drag";
import interact from "@interactjs/interact";

import { updateColorScheme } from "./colorScheme";
import { positionApplets } from "./position";
import { startPomodoro } from "./pomodoro";
import { startCalendar } from "./calendar";

// constants
const applets = [...document.querySelectorAll(".applet")];
const mdSize = 768;

let zIndex = 1;

window.addEventListener("load", () => {
  updateColorScheme();

  if (window.innerWidth > mdSize) {
    positionApplets(applets);
  }
});

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

// z-index.
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

// start pomodoro applet.
if (document.body.contains(document.getElementById("pomodoro"))) {
  startPomodoro();
}

// Start calendar applet.
if (document.body.contains(document.getElementById("calendar"))) {
  startCalendar();
}
