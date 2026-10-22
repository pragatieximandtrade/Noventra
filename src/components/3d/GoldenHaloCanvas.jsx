import React, { useEffect, useRef, useState } from 'react';

export default function GoldenHaloCanvas({ className = '', intensity = 1 }) {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );

    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system for ambient golden sparkle
    const particles = Array.from({ length: 35 }, () => ({
      x: width / 2 + (Math.random() - 0.5) * (width * 0.7),
      y: height / 2 + (Math.random() - 0.5) * (height * 0.7),
      radius: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.4 + 0.2,
      angle: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01
    }));

    let step = 0;

    const render = () => {
      step += 0.015;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.38;

      // Radial pulsating Golden Halo
      const pulse = Math.sin(step) * 15;
      const haloGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        baseRadius * 0.3,
        centerX,
        centerY,
        baseRadius + pulse
      );

      haloGrad.addColorStop(0, `rgba(212, 175, 55, ${0.35 * intensity})`);
      haloGrad.addColorStop(0.4, `rgba(245, 232, 190, ${0.18 * intensity})`);
      haloGrad.addColorStop(0.7, `rgba(15, 61, 48, ${0.08 * intensity})`);
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius + pulse + 30, 0, Math.PI * 2);
      ctx.fill();

      // Golden orbiting rings
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(step * 0.2);
      ctx.beginPath();
      ctx.ellipse(0, 0, baseRadius * 0.85, baseRadius * 0.75, Math.PI / 6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(212, 175, 55, ${0.15 * intensity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Floating golden sparkles
      particles.forEach((p) => {
        p.angle += p.speed * 0.01;
        p.alpha = 0.3 + Math.sin(step * 2 + p.pulseSpeed * 100) * 0.3;

        ctx.fillStyle = `rgba(245, 230, 160, ${Math.max(0, p.alpha * intensity)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y + Math.sin(step + p.radius) * 10, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
