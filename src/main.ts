const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// Import Images I drew in OneNote
// @deno-types="./asset-url.d.ts"
import yellingUrl from "./assets/yelling2.png?no-inline";
import catUrl from "./assets/cat.png?no-inline";

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
function buildFace() {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute("aria-label", "Two people yelling at a cat");

  const yellingImage = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  yellingImage.setAttribute("href", yellingUrl);
  yellingImage.setAttribute("x", "0");
  yellingImage.setAttribute("y", "0");
  yellingImage.setAttribute("width", "200");
  yellingImage.setAttribute("height", "100");
  face.append(yellingImage);

  const catImage = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  catImage.setAttribute("href", catUrl);
  catImage.setAttribute("x", "0");
  catImage.setAttribute("y", "52");
  catImage.setAttribute("width", "200");
  catImage.setAttribute("height", "200");
  face.append(catImage);

  return face;
}

const face = buildFace();

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
