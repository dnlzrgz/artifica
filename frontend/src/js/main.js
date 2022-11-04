import "flowbite";
import "@interactjs/auto-start";
import "@interactjs/actions/drag";
import interact from "@interactjs/interact";

const applets = document.querySelectorAll(".applet");
const mdSize = 768;

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

// move applets to random position.
window.addEventListener("load", () => {
  if (window.innerWidth < mdSize) {
    return;
  }

  const windowWidth = window.innerWidth;
  const widnowHeight = window.innerHeight;

  applets.forEach((applet) => {
    const appletWidth = applet.offsetWidth;
    const appletHeight = applet.offsetHeight;

    let x = Math.random() * (windowWidth - appletWidth);
    let y = Math.random() * (widnowHeight - appletHeight);

    // translate the element
    applet.style.transform = `translate(${x}px, ${y}px)`;

    // update the posiion attributes
    applet.setAttribute("data-x", x);
    applet.setAttribute("data-y", y);
  });
});
