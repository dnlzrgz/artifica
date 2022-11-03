import interact from "interactjs";
import "flowbite";

interact(".applet").draggable({
  inertia: true,
  autoScroll: false,
  listeners: {
    move: dragMoveListener,
  },
});

function dragMoveListener(event) {
  let target = event.target;

  // keep the dragged position in the data-x/data-y attributes
  let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}
