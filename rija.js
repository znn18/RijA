const letters = "MOHAMEDRIJA"; 
let letterIndex = 0; 
const launchHeight = 300; 

function createFirework(x, y) {
  const projectile = document.createElement("div");
  projectile.classList.add("projectile");
  document.body.appendChild(projectile);
  projectile.style.left = `${x}px`;
  projectile.style.top = `${y}px`;

  anime({
    targets: projectile,
    translateY: -launchHeight,
    duration: 1200,
    easing: "easeOutQuad",
    complete: () => {
      createBurst(x, y - launchHeight);
      showLetter(x, y - launchHeight);
    },
  });
}

function createBurst(x, y) {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    document.body.appendChild(particle);
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    anime({
      targets: particle,
      translateX: () => anime.random(-100, 100),
      translateY: () => anime.random(-100, 100),
      opacity: [1, 1], 
      scale: [1, 1], 
      duration: 1500,
      easing: "easeOutExpo",
    });
  }
}

function showLetter(x, y) {
  const letter = document.createElement("div");
  letter.classList.add("letter");
  letter.innerText = letters[letterIndex];
  letterIndex = (letterIndex + 1) % letters.length; 
  document.body.appendChild(letter);
  letter.style.left = `${x}px`;
  letter.style.top = `${y}px`;

  anime({
    targets: letter,
    translateY: -50,
    opacity: [1, 1], 
    duration: 2000,
    easing: "easeOutExpo",
  });
}

document.addEventListener("click", (event) => {
  createFirework(event.clientX, event.clientY);
});
