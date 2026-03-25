export function fireConfetti(container, color) {
  if (!container || typeof window === 'undefined') {
    return;
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    return;
  }

  const canvas = document.createElement('canvas');
  const rect = container.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  canvas.style.position = 'absolute';
  canvas.style.inset = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '7';
  container.appendChild(canvas);

  const context = canvas.getContext('2d');
  if (!context) {
    container.removeChild(canvas);
    return;
  }

  const particles = Array.from({ length: 12 }, () => ({
    x: rect.width * 0.5,
    y: rect.height * 0.35,
    vx: (Math.random() - 0.5) * 3,
    vy: -2 - Math.random() * 2.2,
    gravity: 0.09 + Math.random() * 0.03,
    size: 3 + Math.random() * 3,
    rotation: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.18,
  }));

  let frame = 0;
  const render = () => {
    frame += 1;
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += particle.gravity;
      particle.rotation += particle.vr;

      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(particle.rotation);
      context.fillStyle = color;
      context.globalAlpha = Math.max(0, 1 - frame / 45);
      context.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * 0.72);
      context.restore();
    });

    if (frame < 45) {
      window.requestAnimationFrame(render);
    } else {
      container.removeChild(canvas);
    }
  };

  window.requestAnimationFrame(render);
}
