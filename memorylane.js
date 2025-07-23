const { memo } = require("react");

gsap.registerPlugin(ScrollTrigger);
const memories = [
  {
    image: "./images/m1.jpg",
    caption:
      "Yaad h wo din jab pehli baar tumne bulaya tha neeche Harshita ko leke aayi thi..Tab toh nhi bataya par tumse milne ke liye 4 baar T-shirt change ki thi..Cheers to our first Photo together...😍💖",
    isGif: false,
    rotationAngle: -2,
    emoji: "✨",
  },
  {
    image: "./images/m2.jpg",
    caption:
      "Birthday ke ek din pehle sirf iss liye photo click karwa rhe h kyuki hum dono ki ek saath mein photo nhi h khair wo toh ab bhi nhi h par h toh bss memories...",
    isGif: false,
    rotationAngle: 6,
    emoji: "🥳",
  },
  {
    image: "./images/m3.jpg",
    caption:
      "Apni pehli outing to the rave moti he he he he😍💖 yahi wo din h jin din wapas aane ke baad ankit bhaiya aur mummy ka sab shuru hua..",
    isGif: false,
    rotationAngle: -2,
    emoji: "🚗",
  },
  {
    image: "./images/m4.jpg",
    caption:
      "Taiyaar hone ki jaldi aapko thi par usse jyada jaldi hume thi aapko taiyaar dekhne ki..jo bhi bolo dikh toh theek thaak rhi thi uss din ki hnn thodi bhut tareef kari jaaa skti h😝😜",
    isGif: false,
    rotationAngle: 2,
    emoji: "🎉",
  },
  {
    image: "./images/m5.jpg",
    caption:
      " Apni pehla masti bhara photo shoot practical chal rhe h par do we care?? naaah.",
    isGif: false,
    rotationAngle: -6,
    emoji: "🏕️",
  },
  {
    image: "./images/m6.jpg",
    caption:
      "Jab tumko pehli baar black saree mein dekha tha girls barrier pe tum laundry leke aa rhi thi bss ek baat pe bharosa ho gya tha ki apsaraye exists..🧚‍♀️🧚‍♀️",
    isGif: false,
    rotationAngle: 2,
    emoji: "🥳",
  },
  {
    image: "./images/m7.jpg",
    caption: "Kya bol skte 'Moment h bhai moment h!!'1",
    isGif: false,
    rotationAngle: -4,
    emoji: "🥳",
  },
  {
    image: "./images/m8.jpg",
    caption:
      "kabhi suna h ki kisi ki saas atak gyi?? Well I experienced this jab tumko red kurti mein dekha..",
    isGif: false,
    rotationAngle: 4,
    emoji: "🥳",
  },
  {
    image: "./images/m9.jpg",
    caption:
      "Apni Pehli trip to be precise jha hum logo ne kiya chap chap chap..",
    isGif: false,
    rotationAngle: -2,
    emoji: "💕",
  },
  {
    image: "./images/m10.jpg",
    caption: "Me and you the imperfectly perfect duo..",
    isGif: false,
    rotationAngle: 6,
    emoji: "🫂",
  },
  {
    image: "./images/m11.jpg",
    caption:
      "Jab Birthday aapka ho aur excited koi aur ho You will never feel what i felt on that day..🥺🥰",
    isGif: false,
    rotationAngle: 4,
    emoji: "🥰",
  },
  {
    image: "./images/m12.jpg",
    caption:
      "Attention To Everbody! Jab mein aur meri sakhi jhoola jhool tab disturb nhi krne ka",
    isGif: false,
    rotationAngle: -6,
    emoji: "🏕️",
  },
  {
    image: "./images/m13.jpg",
    caption: "Bhagwaan ji aise moment 2-4 aur laga do naa..🧚‍♀️🧚‍♀️",
    isGif: false,
    rotationAngle: 2,
    emoji: "🧚",
  },
  {
    image: "./images/m14.jpg",
    caption: "Itni jali Maan gye bhagwaan ji moment create karwa diya!!!",
    isGif: false,
    rotationAngle: -4,
    emoji: "😍",
  },
  {
    image: "./images/m15.jpg",
    caption: "Iske Bina toh Sab adhura adhura h",
    isGif: false,
    rotationAngle: 2,
    emoji: "💖",
  },
  {
    image: "./images/m16.jpg",
    caption:
      "ye Photo toh wo Photo h jiske liye saalo saal tapasya karte h par humko ek hi baar mein mil gyi dekh rhi ho meri kismat",
    isGif: false,
    rotationAngle: 4,
    emoji: "💕",
  },
  {
    image: "./images/m17.jpg",
    caption: "Tu maaro Baccha che...baat khatam",
    isGif: false,
    rotationAngle: -2,
    emoji: "🫂",
  },
];

function createConfettti() {
    const confettiContainer=document.getElementById("confetti-container");
    const colors = ["#ff6ec4", "#a485ff", "#ff4e91", "#c175ff", "#75c6ff"];
    for (let i = 0; i < 100; i++){
        const confetti=document.createElement("div");
        confetti.className = "confetti-piece";
        
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.width = Math.random() * 15 + 5 + "px";
        confetti.style.height = Math.random() * 15 + 5 + "px";
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        const duration = Math.random() * 3 + 3;
        const delay = Math.random() * 5;
        
        confetti.style.animation = `floatDown ${duration}s ease-in ${delay}s infinite`;
        confetti.style.opacity = Math.random();
        
        confettiContainer.appendChild(confetti);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createConfettti();

    const galleryElement = document.getElementById("memoryGallery");
    const startSlideshowBtn = document.getElementById("startSlideshow");
    const pauseSlideshowBtn = document.getElementById("pauseSlideshow");

    const backButton = document.getElementById("backButton");
    const nextButton = document.getElementById("nextButton");

    let slideshowInterval;
    let currentSlide = 0;

    memories.forEach((memory, index) => {
        const memoryCard = document.createElement("div");
        memoryCard.className = "memory-card";
        memoryCard.style.setProperty("--rotation", `${memory.rotationAngle}deg`);


        const tapeElement = document.createElement("div");
        tapeElement.className = "card-tape";
        tapeElement.style.setProperty(
            "--rotate",
            `${memory.rotationAngle * 2}deg`
        );

        const imgElement = document.createElement("img");
        imgElement.className = "memory-image";
        imgElement.src = memory.image;
        imgElement.alt = `Memory ${index + 1}`;

        const captionElement = document.createElement("p");
        captionElement.className = "memory-caption";
        captionElement.textContent = memory.caption;

        const stickerElement = document.createElement("div");
        stickerElement.className = "card-sticker";
        stickerElement.innerHTML = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#ff6ec4" />
                    <text x="50" y="65" font-family="Arial" font-size="40" text-anchor="middle" fill="white">${memory.emoji}</text>
                </svg>`;

        memoryCard.appendChild(tapeElement);
        memoryCard.appendChild(imgElement);
        memoryCard.appendChild(captionElement);
        memoryCard.appendChild(stickerElement);
        galleryElement.appendChild(memoryCard);
    });

    document.querySelector(".slideshow-controls").style.opacity = "1";
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
        {
            threshold: 0.3
        }
    );

    document.querySelectorAll(".memory-card").forEach((card) => {
        observer.observe(card);

        const index = Array.from(galleryElement.children).indexOf(card);
        card.style.animationDelay = `${index * 0.1}s`;
        setTimeout(() => {
            card.classList.add("visible");
        }, 500 + index * 150);
    });
    function startSlideshow() {
        startSlideshowBtn.style.display = "none";
        pauseSlideshowBtn.style.display = "flex";
    
        // Clear any existing interval to avoid multiple slideshows
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
        }
    
        slideshowInterval = setInterval(() => {
            // Move to next slide
            currentSlide = (currentSlide + 1) % memories.length;
    
            // Calculate the scroll position of the current slide
            const cards = galleryElement.querySelectorAll(".memory-card");
            if (cards && cards.length > 0 && cards[currentSlide]) {
                const cardRect = cards[currentSlide].getBoundingClientRect();
                const galleryRect = galleryElement.getBoundingClientRect();
    
                // Scroll to center the current card
                galleryElement.scrollTo({
                    left:
                        cards[currentSlide].offsetLeft -
                        galleryRect.width / 2 +
                        cardRect.width / 2,
                    behavior: "smooth",
                });
            }
        }, 2000); // Change slide every 3 seconds
    }

    function pauseSlideshow() {
        startSlideshowBtn.style.display = "flex";
        pauseSlideshowBtn.style.display = "none";
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
    }
    startSlideshowBtn.addEventListener("click", startSlideshow);
    pauseSlideshowBtn.addEventListener("click", pauseSlideshow);

    // Event listeners for navigation buttons
    backButton.addEventListener("click", function () {
        window.location.href = "page.html"; // Adjust this to your welcome page URL
    });
    
    nextButton.addEventListener("click", function () {
        window.location.href = "cake.html"; // Adjust this to your next surprise page URL
    });

    gsap.from('.header', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "back.out(1.7)",
    });

    gsap.utils.toArray(".sticker").forEach((sticker) => {
        gsap.from(sticker, {
            rotation: "random(-20, 20)",
            duration: "random(2,4)",
            repeat: -1,
            yoyo: true,
            ease: "sine1.inOut",
        });
    });

    document.querySelector(".memory-card").forEach((card) => {
        card.addEventListener("mouseenter", function () {
            gsap.to(this, {
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(255, 105, 180, 0.5)",
                duration: 0.3
            });
        });

        card.addEventListener("mouseleave", function () {
            gsap.to(this, {
                scale: 1,
                boxShadow: "0 10px 25px rgba(255, 105, 180, 0.3)",
                duration: 0.3
            });
        });
    });

    setTimeout(() => {
        const galleryContainer = document.querySelector(".gallery-container");
        galleryContainer.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 2000);
})

