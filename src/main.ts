const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A happy face");

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});

for (let row = 0; row < 10; row++) {
  for (let column = 0; column < 10; column++) {
    const dot = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    dot.setAttribute("cx", String(46 + (12 * column)));
    dot.setAttribute("cy", String(46 + (12 * row)));
    dot.setAttribute("r", "6");
    if (((column == 3) || (column == 6)) && ((row == 3) || (row == 4))) {
      // Eyes
      dot.setAttribute("fill", "#000000");
      face.append(dot);
    } else if (
      (((column > 2) && (column < 7)) && (row == 6) ||
        (((column > 3) && (column < 6)) && (row == 7)))
    ) {
      // Mouth
      dot.setAttribute("fill", "#000000");
      face.append(dot);
    } else if (
      (column == 0) || (column == 9) || (row == 0) || (row == 9) ||
      ((row == 1 || row == 8) &&
        (column == 1 || column == 2 || column == 7 || column == 8)) ||
      ((row == 2 || row == 7) && (column == 1 || column == 8))
    ) {
      // Background
      dot.setAttribute("fill", "#5900ff");
      face.append(dot);
    } else {
      dot.setAttribute("fill", "#ffd900d0");
      face.append(dot);
    }
  }
}
