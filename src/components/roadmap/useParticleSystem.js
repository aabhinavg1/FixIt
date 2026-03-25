import { useEffect } from 'react';

export default function useParticleSystem(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') {
      return undefined;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    const pointer = { x: 0.5, y: 0.5 };
    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const particles = Array.from({ length: 26 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      size: 1 + Math.random() * 2.2,
      vx: (Math.random() - 0.5) * 0.00055,
      vy: (Math.random() - 0.5) * 0.00055,
      alpha: 0.05 + (index % 4) * 0.015,
    }));

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * window.devicePixelRatio);
      canvas.height = Math.floor(height * window.devicePixelRatio);
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx + (pointer.x - 0.5) * 0.00006;
        particle.y += particle.vy + (pointer.y - 0.5) * 0.00006;

        if (particle.x < -0.05) particle.x = 1.05;
        if (particle.x > 1.05) particle.x = -0.05;
        if (particle.y < -0.05) particle.y = 1.05;
        if (particle.y > 1.05) particle.y = -0.05;

        const x = particle.x * width;
        const y = particle.y * height;
        context.beginPath();
        context.fillStyle = `rgba(154, 181, 255, ${particle.alpha})`;
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fill();

        const neighbor = particles[(index + 3) % particles.length];
        const nx = neighbor.x * width;
        const ny = neighbor.y * height;
        const distance = Math.hypot(nx - x, ny - y);
        if (distance < 120) {
          context.strokeStyle = `rgba(99, 132, 255, ${0.05 - distance / 2600})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(nx, ny);
          context.stroke();
        }
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', onPointerMove);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onPointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [canvasRef]);
}
