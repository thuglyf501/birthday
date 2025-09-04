let candlesBlown = 0;
const totalCandles = 5;
let allCandlesBlown = false;

document.addEventListener("DOMContentLoaded", function () {
  createCandles();
  createBalloons();
  createConfetti();
  createDecorations();

  document.querySelectorAll(".candle").forEach((candle) => {
    candle.addEventListener("click", blowOutCandle);
    candle.addEventListener("mouseover", blowOutCandle);
  });
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.code === "Enter") {
    event.preventDefault();
    blowOutRandomCandle();
  }
});

function blowOutRandomCandle() {
  const unblownCandles = document.querySelectorAll(".candle:not(.blown)");
  if (unblownCandles.length > 0) {
    const randomIndex = Math.floor(Math.random() * unblownCandles.length);
    const randomCandle = unblownCandles[randomIndex];
    blowOutCandle.call(randomCandle);
  }
}

function createCandles() {
  const candleContainer = document.getElementById("candleContainer");
  if (!candleContainer) return;
  for (let i = 0; i < totalCandles; i++) {
    const candle = document.createElement("div");
    candle.className = "candle";
    const flame = document.createElement("div");
    flame.className = "flame";
    const smoke = document.createElement("div");
    smoke.className = "smoke";
    candle.appendChild(flame);
    candle.appendChild(smoke);
    candleContainer.appendChild(candle);
  }
}

function createBalloons() {
  const colors = ["#ff66b3", "#66ccff", "#ff9966", "#99ff66", "#cc99ff"];
  const numBalloons = 15;
  for (let i = 0; i < numBalloons; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${15 + Math.random() * 10}s`;
    balloon.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(balloon);
  }
}

function createConfetti() {
  const colors = ["#ffcc00", "#ff66b3", "#66ccff", "#ff9966", "#99ff66"];
  const numConfetti = 50;
  for (let i = 0; i < numConfetti; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.width = `${5 + Math.random() * 5}px`;
    confetti.style.height = `${5 + Math.random() * 10}px`;
    confetti.style.animationDuration = `${3 + Math.random() * 4}s`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(confetti);
  }
}

function createDecorations() {
  const cake = document.querySelector(".cake");
  if (!cake) return;
  const colors = ["#ff3366", "#ffcc00", "#66ccff", "#ff9966", "#99ff66"];
  const numDecorations = 10;
  for (let i = 0; i < numDecorations; i++) {
    const decoration = document.createElement("div");
    decoration.className = "decoration";
    decoration.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    decoration.style.top = `${-95 - Math.random() * 20}px`;
    decoration.style.left = `${Math.random() * 100}%`;
    cake.appendChild(decoration);
  }
}

function blowOutCandle() {
  if (!this.classList.contains("blown")) {
    this.classList.add("blown");
    candlesBlown++;
    createSparkleEffect(this);
    if (candlesBlown === totalCandles && !allCandlesBlown) {
      allCandlesBlown = true;
      setTimeout(showWishMessage, 1000);
    }
  }
}

function createSparkleEffect(candle) {
  const numSparkles = 10;
  const candleRect = candle.getBoundingClientRect();
  for (let i = 0; i < numSparkles; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${
      candleRect.left + window.scrollX + Math.random() * candleRect.width
    }px`;
    sparkle.style.top = `${
      candleRect.top + window.scrollY + Math.random() * (candleRect.height / 2)
    }px`;
    sparkle.style.animation = `sparkle ${0.5 + Math.random() * 0.5}s forwards`;
    document.body.appendChild(sparkle);
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
}

function showWishMessage() {
  document.getElementById("wishMessage").classList.add("show");
  createFireworks();
}

function closeWishMessage() {
  document.getElementById("wishMessage").classList.remove("show");
}

function createFireworks() {
  const numFireworks = 10;
  const colors = ["#ff3366", "#ffcc00", "#66ccff", "#ff9966", "#99ff66"];
  for (let i = 0; i < numFireworks; i++) {
    setTimeout(() => {
      const firework = document.createElement("div");
      firework.className = "firework";
      firework.style.left = `${10 + Math.random() * 80}%`;
      firework.style.top = `${10 + Math.random() * 60}%`;
      firework.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      firework.style.animation = `firework ${1 + Math.random()}s forwards`;
      document.body.appendChild(firework);
      setTimeout(() => {
        firework.remove();
      }, 2000);
    }, i * 300);
  }
}

function goBack() {
  alert("Going back to Previous Page!");
}

function goNext() {
  alert("Going to the Next Surprise!");
}

