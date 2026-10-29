const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A neutral face");

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

// Create Gradient
const gradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);
gradient.setAttribute("id", "gradient");
gradient.setAttribute("x1", "0%");
gradient.setAttribute("y1", "0%");
gradient.setAttribute("x2", "100%");
gradient.setAttribute("y2", "0%");

const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute("offset", "0%");
stop1.setAttribute("stop-color", "#ff00ff");

gradient.append(stop1);

const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute("offset", "100%");
stop2.setAttribute("stop-color", "#00ff00");

gradient.append(stop2);

const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

defs.append(gradient);
face.append(defs);

const background = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
background.setAttribute("cx", "100");
background.setAttribute("cy", "100");
background.setAttribute("rx", "200");
background.setAttribute("ry", "200");
background.setAttribute("fill", "url(#gradient)");
background.setAttribute("stroke", "#302c29");
background.setAttribute("stroke-width", "4");

face.append(background);

// Create Bezier Curve
const thumb = document.createElementNS("http://www.w3.org/2000/svg", "path");
thumb.setAttribute("d", "M 45 110 Q 80 180 150 100");
thumb.setAttribute("fill", "none");
thumb.setAttribute("stroke", "#302c29");
thumb.setAttribute("stroke-width", "4");
face.append(thumb);

const pointer = document.createElementNS("http://www.w3.org/2000/svg", "path");
pointer.setAttribute("d", "M 75 120 Q 100 100 100 75");
pointer.setAttribute("fill", "none");
pointer.setAttribute("stroke", "#302c29");
pointer.setAttribute("stroke-width", "4");
face.append(pointer);

const middle = document.createElementNS("http://www.w3.org/2000/svg", "path");
middle.setAttribute("d", "M 85 125 Q 100 120 130 65");
middle.setAttribute("fill", "none");
middle.setAttribute("stroke", "#302c29");
middle.setAttribute("stroke-width", "4");
face.append(middle);

const ring = document.createElementNS("http://www.w3.org/2000/svg", "path");
ring.setAttribute("d", "M 110 120 Q 130 100 140 80");
ring.setAttribute("fill", "none");
ring.setAttribute("stroke", "#302c29");
ring.setAttribute("stroke-width", "4");
face.append(ring);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
