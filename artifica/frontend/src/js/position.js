export const rand = (min, max) => Math.random() * (max - min) + min;

// Checks if an applet is overlapping with anoter applet by more than a minimum amount.
export const isOverlapping = (minOverlap, applet1, applet2) => {
  const rect1 = applet1.getBoundingClientRect();
  const rect2 = applet2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left + rect2.width * minOverlap ||
    rect1.left > rect2.right - rect2.width * minOverlap ||
    rect1.bottom < rect2.top + rect2.height * minOverlap ||
    rect1.top > rect2.bottom - rect2.height * minOverlap
  );
};

// Positions an applet at a random location within the screen
// bounds.
export const randomPosition = (applet) => {
  const x = rand(0, window.innerWidth - applet.offsetWidth);
  const y = rand(0, window.innerHeight - applet.offsetHeight);

  // translate the element
  applet.style.transform = `translate(${x}px, ${y}px)`;

  // update the posiion attributes
  applet.setAttribute("data-x", x);
  applet.setAttribute("data-y", y);
};
