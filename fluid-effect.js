// Fluid Effect Script
const canvas = document.getElementById('fluid-canvas');
const ctx = canvas.getContext('2d');

// Canvas size setup
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

window.addEventListener('resize', resizeCanvas);

let particlesArray = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.95; // Gradual size reduction for fade-out effect

    if (this.size < 0.5) {
      this.size = 0;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function handleMouseMove(event) {
  const { offsetX, offsetY } = event;
  for (let i = 0; i < 5; i++) {
    particlesArray.push(new Particle(offsetX, offsetY));
  }
}

canvas.addEventListener('mousemove', handleMouseMove);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray = particlesArray.filter((particle) => particle.size > 0);

  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

animate();
