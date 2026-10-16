import React, { useEffect, useRef } from 'react';

export default function MolecularCanvas({ className = '', particleColor = '#d4af37' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for interactive distortion
    let mouse = { x: width / 2, y: height / 2, active: false };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.parentElement?.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);

    // Create molecular node graph
    const nodes = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2.8 + 1.2,
      baseRadius: Math.random() * 2.8 + 1.2,
      connections: [],
      pulse: Math.random() * Math.PI * 2
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Central glowing molecular orb
      const orbGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        Math.min(width, height) * 0.45
      );
      orbGrad.addColorStop(0, 'rgba(212, 175, 55, 0.22)');
      orbGrad.addColorStop(0.5, 'rgba(24, 109, 75, 0.1)');
      orbGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = orbGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // Update and draw nodes
      nodes.forEach((n, i) => {
        n.x += n.vx;
        n.y += n.vy;

        // Bounce from borders
        if (n.x < 10 || n.x > width - 10) n.vx *= -1;
        if (n.y < 10 || n.y > height - 10) n.vy *= -1;

        // Mouse gentle repulsion / interaction
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            n.x -= (dx / dist) * force * 1.5;
            n.y -= (dy / dist) * force * 1.5;
          }
        }

        // Connect to neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const opacity = (1 - dist / 110) * 0.25;
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }

        // Draw molecular sphere node
        const nodePulse = Math.sin(time + n.pulse) * 0.5 + 1;
        ctx.fillStyle = i % 3 === 0 ? 'rgba(245, 232, 190, 0.85)' : 'rgba(212, 175, 55, 0.65)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.baseRadius * nodePulse, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glowing outer ring for major nodes
        if (i % 5 === 0) {
          ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.baseRadius * nodePulse + 4, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
