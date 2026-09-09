// ===== Aktuellt år i footern =====
const arElement = document.getElementById("ar");
if (arElement) arElement.textContent = new Date().getFullYear();

// ===== Glas-orb: lätt rörelse vid musen (bara på hero) =====
const orb = document.querySelector(".glass-orb");
const hero = document.querySelector(".hero");

if (orb && hero) {
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    orb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });
}

// ===== Projekt-karusell: prickar som visar/scrollar till kort =====
const track = document.getElementById("projectTrack");
const dotsContainer = document.getElementById("projectDots");

if (track && dotsContainer) {
  const cards = track.querySelectorAll(".project-card");

  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.setAttribute("aria-label", `Gå till projekt ${i + 1}`);

    dot.addEventListener("click", () => {
      cards[i].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  // Uppdatera vilken prick som är aktiv när man scrollar manuellt
  track.addEventListener("scroll", () => {
    const index = Math.round(track.scrollLeft / cards[0].offsetWidth);
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }, { passive: true });
}
