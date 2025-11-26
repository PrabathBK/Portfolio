'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle system
    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.originX = this.x;
        this.originY = this.y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.6 + 0.6; // Increased opacity
      }

      update(width: number, height: number, mouseX: number, mouseY: number) {
        // Base movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;

        // Mouse interaction (repulsion)
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * 2;
          const directionY = forceDirectionY * force * 2;

          this.x += directionX;
          this.y += directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(100, 149, 237, ${this.opacity})`; // Cornflower Blue-ish
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 50; // Optimized count for better performance
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particleCount; i++) {
        particles[i].update(canvas.width, canvas.height, mouseRef.current.x, mouseRef.current.y);
        particles[i].draw();
      }

      // Draw connections - Optimized O(N^2) loop
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particleCount; i++) {
        const a = particles[i];

        // Connect to other particles
        for (let j = i + 1; j < particleCount; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          // Optimization: Check squared distance first to avoid expensive sqrt
          const distSq = dx * dx + dy * dy;

          if (distSq < 10000) { // 100 * 100
            const distance = Math.sqrt(distSq);
            ctx.strokeStyle = `rgba(100, 149, 237, ${0.25 * (1 - distance / 100)})`; // Increased line opacity
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        const dx = a.x - mouseRef.current.x;
        const dy = a.y - mouseRef.current.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < 22500) { // 150 * 150
          const distance = Math.sqrt(distSq);
          ctx.strokeStyle = `rgba(100, 149, 237, ${0.3 * (1 - distance / 150)})`; // Increased mouse line opacity
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-80 dark:opacity-60"
        style={{ zIndex: 0 }}
      />
      {/* Subtle Gradient orbs - toned down */}
      {/* Optimized Background Gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.05) 0%, transparent 30%)'
        }}
      />
    </>
  );
}
