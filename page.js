gsap.registerPlugin(TextPlugin);

const audio = document.getElementById("birthday-song");
const playPauseBtn = document.getElementById("play-pause");
const volumeControl = document.getElementById("volume");
let isPlaying = false;

audio.volume = volumeControl.value;

window.addEventListener("load", () => {
  setTimeout(() => {
    audio
      .play()
      .then(() => {
          isPlaying = true;
          playPauseBtn.innerHTML = `<i class="play-icon">⏸️</i>`;

      })
      .catch((e) => {
        console.log("User interaction required to play music:", e);
      });
  }, 1000);
});

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = `<i class="play-icon">▶️</i>`;
  } else {
    audio.play();
    isPlaying = true;
    playPauseBtn.innerHTML = `<i class="play-icon">⏸️</i>`;
  }
});

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

function goToNextPage() {
  gsap.to(".next-button", {
    scale: 1.2,
    yoyo: true,
    repeat: 1,
    duration: 0.3,
    onComplete: () => {
      window.location.href = "memorylane.html";
    },
  });
}

function createFloatingElements() {
  const colors = [
    "#FF1493",
    "#8A2BE2",
    "#FFD700",
    "#FF4500",
    "#00BFFF",
    "#32CD32",
  ];
  const elements = ["confetti", "balloon", "heart", "star"];
  const confettiShapes = ["▲", "■", "●", "★", "♥", "♦", "✦", "✧"];
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const element = document.createElement("div");
      const elementType = elements[Math.floor(Math.random() * elements.length)];
      element.className = elementType;

      element.style.left = Math.random() * 100 + "vw";
      element.style.top = -30 + "px";

      const color = colors[Math.floor(Math.random() * colors.length)];

      if (elementType == "confetti") {
        const shape =
          confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
        element.innerHTML = shape;
        element.style.color = color;
        element.style.fontSize = Math.random() * 20 + 10 + "px";
        element.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      } else if (elementType == "balloon") {
        element.innerHTML = "🎈";
        element.style.fontSize = Math.random() * 30 + 20 + "px";
        element.style.filter = "hue-rotate(" + Math.random() * 360 + "deg)";
      } else if (elementType == "heart") {
        element.innerHTML = "❤️";
        element.style.fontSize = Math.random() * 30 + 20 + "px";
        element.style.filter = "hue-rotate(" + Math.random() * 360 + "deg)";
      } else if (elementType == "star") {
        element.innerHTML = "⭐";
        element.style.fontSize = Math.random() * 30 + 20 + "px";
        element.style.filter = "hue-rotate(" + Math.random() * 360 + "deg)";
      }

      document.body.appendChild(element);
      gsap.to(element, {
        y: window.innerHeight + 100,
        x: "+=" + (Math.random() * 200 - 100),
        rotation: Math.random() * 360,
        duration: Math.random() * 10 + 5,
        ease: "power1.out",
        onComplete: () => {
          document.body.removeChild(element);
        },
      });

      if (Math.random() > 0.7) {
        gsap.to(element, {
          opacity: 0.5,
          yoyo: true,
          repeat: -1,
          duration: 0.5,
          ease: "sine1.inOut",
        });
      }
    }, i * 200);
  }
}

window.addEventListener("load", createFloatingElements);
setInterval(createFloatingElements, 5000);

gsap.to("h1", {
  textShadow:
    "0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 20, 147, 0.6)",
  repeat: -1,
  yoyo: true,
  duration: 2,
});
gsap.from(".container", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power2.out",
});

window.addEventListener("resize", handleResize);
handleResize();
function handleResize() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
