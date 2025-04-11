// 🎵 Heartbeat sound setup
const audio = document.getElementById("heartbeatAudio");
audio.volume = 0.4;

// Autoplay after user click
window.addEventListener('click', () => {
  audio.play();
});

// 💖 Create star-shaped sparkle
function createSparkle(strong = false) {
  const sparkle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  sparkle.setAttribute("viewBox", "0 0 24 24");
  sparkle.setAttribute("width", "12");
  sparkle.setAttribute("height", "12");
  sparkle.classList.add("star-sparkle");

  sparkle.innerHTML = `
    <polygon points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10"
      fill="white" />
  `;

  // Random position near center (heart)
  const offsetX = (Math.random() - 0.5) * 100;
  const offsetY = (Math.random() - 0.5) * 100;

  sparkle.style.left = `${window.innerWidth / 2 + offsetX}px`;
  sparkle.style.top = `${window.innerHeight / 2 + offsetY}px`;

  // Opacity & glow based on heartbeat strength
  sparkle.style.opacity = strong ? '1' : '0.3';
  sparkle.style.transform = strong ? 'scale(1.5)' : 'scale(1)';

  // Randomized soft glows
  const glowColors = [
    '0 0 10px #ffffff, 0 0 20px #ff4d6d, 0 0 30px #ffc9d9',
    '0 0 10px #ffe6f0, 0 0 20px #ff99cc, 0 0 30px #fff0f5',
    '0 0 10px #fff, 0 0 20px #f7c0d8, 0 0 30px #ffc1e3'
  ];
  sparkle.style.filter = `drop-shadow(${glowColors[Math.floor(Math.random() * glowColors.length)]})`;

  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1500);
}

// 💓 Heartbeat animation + sparkle pulses
let beat = true;
const heart = document.querySelector('.heart');

setInterval(() => {
  if (beat) {
    heart.style.transform = 'scale(1.1)';
    createSparkle(true);
    createSparkle(true);
    createSparkle(true);
  } else {
    heart.style.transform = 'scale(1)';
    createSparkle(false);
  }
  beat = !beat;
}, 600);
