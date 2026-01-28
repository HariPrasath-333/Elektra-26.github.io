/* COUNTDOWN */
const eventDate = new Date("February 25, 2026 09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff < 0) {
    document.getElementById("countdown").innerHTML = "✨ Event Started ✨";
    return;
  }

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff/(1000*60*60))%24);
  const m = Math.floor((diff/(1000*60))%60);
  const s = Math.floor((diff/1000)%60);

  document.getElementById("countdown").innerHTML =
    `${d}d ${h}h ${m}m ${s}s`;
},1000);

/* SPARK CURSOR */
const spark = document.getElementById("spark");

document.addEventListener("mousemove", (e) => {
  const size = 8; // spark size (same as CSS width/height)
  spark.style.left = (e.clientX - size / 2) + "px";
  spark.style.top  = (e.clientY - size / 2) + "px";
});


/* SPELL SOUND */
let audioUnlocked = false;

document.addEventListener("click", () => {
  if (!audioUnlocked) {
    sound.play().then(() => {
      sound.pause();
      sound.currentTime = 0;
      audioUnlocked = true;
    });
  }
});

const sound = document.getElementById("spellSound");
document.querySelectorAll(".event-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    sound.currentTime = 0;
    sound.play();
  });
});
