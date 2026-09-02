import confetti from "canvas-confetti";

export function fireConfetti() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#58CC02", "#FFC800", "#1CB0F6", "#FF9600"],
  });
}

export function fireBigConfetti() {
  const duration = 1200;
  const end = Date.now() + duration;
  (function frame() {
    confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0 }, colors: ["#58CC02", "#FFC800", "#1CB0F6"] });
    confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1 }, colors: ["#58CC02", "#FFC800", "#1CB0F6"] });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// Flowers, thrown from both sides — reserved for personal achievements
// (badge unlocks, personal bests), distinct from the plain "you passed"
// confetti above.
const FLOWER_EMOJI = ["🌸", "🌺", "🌼", "🌷", "💐"];
let flowerShapesCache = null;

function getFlowerShapes() {
  if (flowerShapesCache) return flowerShapesCache;
  flowerShapesCache = FLOWER_EMOJI.map((e) => confetti.shapeFromText({ text: e, scalar: 3.2 }));
  return flowerShapesCache;
}

export function fireFlowers() {
  const shapes = getFlowerShapes();
  const duration = 1500;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      startVelocity: 45,
      gravity: 0.7,
      scalar: 1,
      shapes,
      origin: { x: 0, y: 0.7 },
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      startVelocity: 45,
      gravity: 0.7,
      scalar: 1,
      shapes,
      origin: { x: 1, y: 0.7 },
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}
