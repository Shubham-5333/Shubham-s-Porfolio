import React, { useEffect, useRef, useState } from 'react';

const svgStrings = {
  react: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23 23 20.46" fill="none"><circle cx="0" cy="0" r="2.05" fill="%2300d8ff"/><g stroke="%2300d8ff" stroke-width="1"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
  node: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M128,0 L238.85,63.99 L238.85,192.01 L128,256 L17.15,192.01 L17.15,63.99 Z" fill="none" stroke="%2368A063" stroke-width="16" /><path d="M128,24 L218,76 L218,180 L128,232 L38,180 L38,76 Z" fill="%2368A063" fill-opacity="0.25" /><path d="M128,70 L175,97 L175,150 L128,177 L81,150 L81,97 Z" fill="%2368A063" /></svg>`,
  mongodb: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2313AA52" stroke-width="1.8"><path d="M12 2C12 2 6 9 6 13C6 17 9 21 12 22C15 21 18 17 18 13C18 9 12 2 12 2Z" fill="%2313AA52" fill-opacity="0.25"/><path d="M12 2V22" stroke-width="2.5"/><path d="M12 6C9.5 9.5 9.5 13.5 12 16.5" stroke-width="1.8"/></svg>`,
  tailwind: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="%2338bdf8"><path d="M12.0002 4.5C9.72021 4.5 7.91021 5.86 6.94021 7.87C8.16021 6.84 9.54021 6.36 11.0802 6.43C12.4502 6.49 13.5802 7.42 14.8802 8.49C17.0002 10.23 19.6002 12.37 24.0002 12.37C26.2802 12.37 28.0902 11.01 29.0602 9C27.8402 10.03 26.4602 10.51 24.9202 10.44C23.5502 10.38 22.4202 9.45 21.1202 8.38C19.0002 6.64 16.4002 4.5 12.0002 4.5ZM6.00021 12.37C3.72021 12.37 1.91021 13.73 0.94021 15.74C2.16021 14.71 3.54021 14.23 5.08021 14.3C6.45021 14.36 7.58021 15.29 8.88021 16.36C11.0002 18.1 13.6002 20.24 18.0002 20.24C20.2802 20.24 22.0902 18.88 23.0602 16.87C21.8402 17.9 20.4602 18.38 18.9202 18.31C17.5502 18.25 16.4202 17.32 15.1202 16.25C13.0002 14.51 10.4002 12.37 6.00021 12.37Z"/></svg>`,
  css: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%231572B6" stroke-width="1.8"><path d="M4 3H20L18.5 19L12 21L5.5 19L4 3Z" fill="%231572B6" fill-opacity="0.25"/><path d="M12 3V21" stroke="%231572B6" stroke-width="1"/><path d="M8 8H16L15.7 11H12V14H15.2L14.9 17L12 18L9.1 17" stroke="%231572B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23E34F26" stroke-width="1.8"><path d="M4 3H20L18.5 19L12 21L5.5 19L4 3Z" fill="%23E34F26" fill-opacity="0.25"/><path d="M12 3V21" stroke="%23E34F26" stroke-width="1"/><path d="M8 8H16L15.5 13H12V16L15 15L14.7 18L12 19L9.3 18L9 15" stroke="%23E34F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  express: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="43" fill="none" stroke="%23ffffff" stroke-width="3" stroke-dasharray="10 5" opacity="0.4" /><circle cx="50" cy="50" r="35" fill="none" stroke="%23ffffff" stroke-width="1.5" opacity="0.15" /><text x="50" y="58" font-style="italic" font-weight="900" font-size="34" font-family="monospace" fill="%23ffffff" text-anchor="middle">ex</text></svg>`,
  mysql: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2300758F" stroke-width="2"><ellipse cx="12" cy="6" rx="7" ry="3" fill="%2300758F" fill-opacity="0.2"/><path d="M5 6V12C5 13.66 8.13 15 12 15C15.87 15 19 13.66 19 12V6" /><path d="M5 12V18C5 19.66 8.13 21 12 21C15.87 21 19 19.66 19 18V12" /><ellipse cx="12" cy="12" rx="7" ry="3" /><ellipse cx="12" cy="18" rx="7" ry="3" /></svg>`,
  git: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23F05032" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" fill="%23F05032" fill-opacity="0.15" /><circle cx="12" cy="18" r="2" fill="%23F05032" /><circle cx="12" cy="6" r="2" fill="%23F05032" /><circle cx="18" cy="12" r="2" fill="%23F05032" /><path d="M12 8V16" stroke-linecap="round" /><path d="M12 12C12 12 15 12 16 12" stroke-linecap="round" /></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23A855F7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" fill="%23A855F7" fill-opacity="0.15"/><path d="M9 18c-4.51 2-5-2-7-2" /></svg>`,
  postman: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23FF6C37" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4C9 8 9 14 9 17L12 20L15 17C15 14 15 8 12 4Z" fill="%23FF6C37" fill-opacity="0.25" stroke-width="2.2"/><circle cx="12" cy="10" r="1.5" fill="%23FF6C37" stroke="none"/><path d="M8 15L6 18L7 19" /><path d="M16 15L18 18L17 19" /></svg>`,
};

const Network3DCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Track mouse for interactive parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Set canvas dimensions with high-DPI scaling
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      width = rect.width;
      height = rect.height;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // SVG preloading into HTML Image objects
    const logoKeys = ['react', 'node', 'mongodb', 'tailwind', 'css', 'html', 'express', 'mysql', 'git', 'github', 'postman'];
    const brandColors = {
      react: 'rgba(0, 216, 255, ',
      node: 'rgba(104, 160, 99, ',
      mongodb: 'rgba(19, 170, 82, ',
      tailwind: 'rgba(56, 189, 248, ',
      css: 'rgba(21, 114, 182, ',
      html: 'rgba(227, 79, 38, ',
      express: 'rgba(255, 255, 255, ',
      mysql: 'rgba(0, 117, 143, ',
      git: 'rgba(240, 80, 50, ',
      github: 'rgba(168, 85, 247, ',
      postman: 'rgba(255, 108, 55, ',
    };

    const logoImages = {};
    logoKeys.forEach(key => {
      const img = new Image();
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgStrings[key]);
      logoImages[key] = img;
    });

    // Simulation settings
    const NUM_PARTICLES = 55; // Slightly increased for a richer network
    const NUM_LOGOS = 11; // We have exactly 11 logos
    const LOOP_PERIOD = 30; // 30 seconds for a perfect loop
    const MAX_DISTANCE = 85; // Max connection distance in 3D (reduced to match smaller model scale)
    const FOCUS_LENGTH = 300; // Camera perspective focus length

    // Generate particles
    const particles = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const radius = 40 + Math.random() * 85; // Reduced radius (was 60 + 120) to make the overall 3D model smaller
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const baseX = radius * Math.sin(phi) * Math.cos(theta);
      const baseY = radius * Math.sin(phi) * Math.sin(theta);
      const baseZ = radius * Math.cos(phi);

      const isLogo = i < NUM_LOGOS;
      const logoKey = isLogo ? logoKeys[i % logoKeys.length] : null;
      const brandColor = isLogo ? brandColors[logoKey] : (Math.random() > 0.4 ? 'rgba(0, 210, 255, ' : 'rgba(168, 85, 247, ');

      particles.push({
        baseX,
        baseY,
        baseZ,
        isLogo,
        logoKey,
        brandColor,
        // Periodic frequency multipliers (must be integers for a perfect periodic loop)
        kX: Math.floor(Math.random() * 3) + 1,
        kY: Math.floor(Math.random() * 3) + 1,
        kZ: Math.floor(Math.random() * 3) + 1,
        // Orbital movement amplitude (reduced to match smaller model scale)
        ampX: 12 + Math.random() * 12,
        ampY: 12 + Math.random() * 12,
        ampZ: 12 + Math.random() * 12,
        // Random offsets to distribute phase
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        phaseZ: Math.random() * Math.PI * 2,
        size: isLogo ? (2.8 + Math.random() * 1.2) : (1.1 + Math.random() * 1.2), // Slightly reduced base particle sizes
      });
    }

    // Telemetry updates (local variables inside useEffect to prevent React re-renders)
    let frameCount = 0;
    let fps = 60;
    let latency = 12;
    let lastFpsUpdate = 0;

    // Main animation loop
    const render = (timestamp) => {
      const timeInSec = timestamp / 1000;
      
      // Calculate FPS
      frameCount++;
      if (timestamp - lastFpsUpdate >= 1000) {
        fps = Math.round((frameCount * 1000) / (timestamp - lastFpsUpdate));
        frameCount = 0;
        lastFpsUpdate = timestamp;
        latency = Math.floor(10 + Math.random() * 5);
      }

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Global rotation angles - perfectly looping
      const loopAngle = (timeInSec * (2 * Math.PI / LOOP_PERIOD));
      const rotY = loopAngle + (mouse.x * 0.3);
      const rotX = Math.sin(loopAngle * 1.0) * 0.25 + (mouse.y * 0.3); // Fixed loop discontinuity by making multiplier an integer (1.0)

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // 1. Update and Project Particle Positions
      const projected = [];
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p = particles[i];

        const localAngleX = (timeInSec * (2 * Math.PI / LOOP_PERIOD) * p.kX) + p.phaseX;
        const localAngleY = (timeInSec * (2 * Math.PI / LOOP_PERIOD) * p.kY) + p.phaseY;
        const localAngleZ = (timeInSec * (2 * Math.PI / LOOP_PERIOD) * p.kZ) + p.phaseZ;

        const xOffset = Math.sin(localAngleX) * p.ampX;
        const yOffset = Math.cos(localAngleY) * p.ampY;
        const zOffset = Math.sin(localAngleZ) * p.ampZ;

        const x3d = p.baseX + xOffset;
        const y3d = p.baseY + yOffset;
        const z3d = p.baseZ + zOffset;

        // Apply 3D Rotation
        const xRot1 = x3d * cosY - z3d * sinY;
        const zRot1 = x3d * sinY + z3d * cosY;

        const yRot2 = y3d * cosX - zRot1 * sinX;
        const zRot2 = y3d * sinX + zRot1 * cosX;

        // Perspective Projection
        const distanceScale = FOCUS_LENGTH / (FOCUS_LENGTH + zRot2);
        
        if (zRot2 > -FOCUS_LENGTH) {
          projected.push({
            x: centerX + xRot1 * distanceScale,
            y: centerY + yRot2 * distanceScale,
            z: zRot2,
            scale: distanceScale,
            color: p.brandColor,
            size: p.size * distanceScale,
            isLogo: p.isLogo,
            logoKey: p.logoKey,
            origX: xRot1,
            origY: yRot2,
            origZ: zRot2,
            pulsePhase: p.phaseX // Pass phase to projection for breathing effect
          });
        }
      }

      // Sort by depth (painters algorithm)
      projected.sort((a, b) => b.z - a.z);

      // 2. Draw Connection Lines
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];

          const dx = p1.origX - p2.origX;
          const dy = p1.origY - p2.origY;
          const dz = p1.origZ - p2.origZ;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.35 * Math.min(p1.scale, p2.scale);
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, p1.color + alpha + ')');
            grad.addColorStop(1, p2.color + alpha + ')');

            ctx.beginPath();
            ctx.lineWidth = 1.0 * Math.min(p1.scale, p2.scale); // Scale line width by depth for 3D realism
            ctx.strokeStyle = grad;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw Nodes (Logos and Helper Circles)
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const depthAlpha = Math.max(0.15, Math.min(0.85, p.scale));
        
        if (p.isLogo) {
          const img = logoImages[p.logoKey];
          if (img && img.complete) {
            // High-definition breathing/pulsating size and glow factor
            const pulseFactor = 1 + Math.sin(loopAngle * 6 + p.pulsePhase) * 0.12;
            const imgSize = p.size * 5.4 * pulseFactor; // Scale size relative to projected scale (reduced from 6.8 to match smaller model)
            
            ctx.save();
            ctx.translate(p.x, p.y);
            
            // Soft colored neon glow behind the logo
            ctx.shadowColor = p.color + '0.8)';
            ctx.shadowBlur = 15 * p.scale * pulseFactor; // Slightly reduced glow blur
            
            // Draw a faint circular backing to make logos pop
            ctx.beginPath();
            ctx.arc(0, 0, imgSize * 0.65, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(5, 5, 5, 0.85)';
            ctx.fill();
            ctx.lineWidth = 1.2;
            ctx.strokeStyle = p.color + '0.25)';
            ctx.stroke();
            
            // Draw the SVG image
            ctx.drawImage(img, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
            ctx.restore();
          } else {
            // Fallback node circle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = p.color + (depthAlpha * 0.85) + ')';
            ctx.fill();
          }
        } else {
          // Standard helper network dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color + (depthAlpha * 0.1) + ')';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color + (depthAlpha * 0.85) + ')';
          ctx.fill();
        }
      }

      // 4. Render HUD Overlay Graphic
      drawCyberHUD(ctx, width, height, timeInSec, loopAngle, fps, latency);

      animationFrameId = requestAnimationFrame(render);
    };

    // HUD Drawing helper function (drawn with perfect looping rotation)
    const drawCyberHUD = (ctx, w, h, time, loopAngle, currentFps, currentLatency) => {
      const activeColor = 'rgba(0, 210, 255, 0.4)';
      const purpleColor = 'rgba(168, 85, 247, 0.3)';
      const dimWhite = 'rgba(255, 255, 255, 0.25)';
      
      const hudCenter = { x: w / 2, y: h / 2 };
      const size = Math.min(w, h);

      ctx.save();
      ctx.translate(hudCenter.x, hudCenter.y);

      // Dash Circle 1 - Perfect rotation loop using integer frequency (1.0)
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
      ctx.setLineDash([5, 20]);
      ctx.strokeStyle = activeColor;
      ctx.lineWidth = 0.8;
      ctx.rotate(loopAngle * 1.0);
      ctx.stroke();

      // Dash Circle 2 - Perfect rotation loop in opposite direction
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.38, -Math.PI * 0.2, Math.PI * 0.6);
      ctx.setLineDash([15, 8, 4, 8]);
      ctx.strokeStyle = purpleColor;
      ctx.lineWidth = 1.2;
      ctx.rotate(-loopAngle * 2.0);
      ctx.stroke();
      
      ctx.setLineDash([]);
      ctx.restore();

      // Cyber corners/brackets for the container
      const margin = 10;
      const bracketLen = 15;
      ctx.strokeStyle = dimWhite;
      ctx.lineWidth = 1.0;
      
      ctx.beginPath();
      ctx.moveTo(margin, margin + bracketLen);
      ctx.lineTo(margin, margin);
      ctx.lineTo(margin + bracketLen, margin);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(w - margin, margin + bracketLen);
      ctx.lineTo(w - margin, margin);
      ctx.lineTo(w - margin - bracketLen, margin);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(margin, h - margin - bracketLen);
      ctx.lineTo(margin, h - margin);
      ctx.lineTo(margin + bracketLen, h - margin);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(w - margin, h - margin - bracketLen);
      ctx.lineTo(w - margin, h - margin);
      ctx.lineTo(w - margin - bracketLen, h - margin);
      ctx.stroke();

      // Telemetry Data Prints
      ctx.font = '8px monospace';
      
      // Top-Left Panel
      ctx.fillStyle = activeColor;
      ctx.fillText(`SYS.NET_CORE: ACTIVE [100.0%]`, margin + 15, margin + 25);
      ctx.fillStyle = dimWhite;
      ctx.fillText(`ROT.SPEED: ${(2 * Math.PI / LOOP_PERIOD).toFixed(4)} RAD/S`, margin + 15, margin + 37);
      ctx.fillText(`MATRIX: ORTHO_PROJ_3D`, margin + 15, margin + 49);

      // Top-Right Panel
      ctx.textAlign = 'right';
      ctx.fillStyle = activeColor;
      ctx.fillText(`LATENCY: ${currentLatency}MS`, w - margin - 15, margin + 25);
      ctx.fillStyle = dimWhite;
      ctx.fillText(`RENDER.FPS: ${currentFps}`, w - margin - 15, margin + 37);
      ctx.fillText(`LOGOS: ${NUM_LOGOS} / CONNECTED`, w - margin - 15, margin + 49);

      // Bottom-Left Panel
      ctx.textAlign = 'left';
      ctx.fillStyle = purpleColor;
      ctx.fillText(`WAVEFORM: COS_ORBITAL_L2`, margin + 15, h - margin - 35);
      ctx.fillStyle = dimWhite;
      ctx.fillText(`ENCRYPTION: QUANTUM_AES`, margin + 15, h - margin - 23);
      ctx.fillText(`TIME_STAMP: ${time.toFixed(2)}S`, margin + 15, h - margin - 11);

      // Bottom-Right Panel
      ctx.textAlign = 'right';
      ctx.fillStyle = purpleColor;
      ctx.fillText(`SYNC_LOOP: OK [30.00S]`, w - margin - 15, h - margin - 35);
      ctx.fillStyle = dimWhite;
      ctx.fillText(`PHASE_LOCK: SHIFT_ACTIVE`, w - margin - 15, h - margin - 23);
      ctx.fillText(`COORDS: [X:${(mouse.x).toFixed(2)}, Y:${(mouse.y).toFixed(2)}]`, w - margin - 15, h - margin - 11);
      
      ctx.textAlign = 'left';
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []); // Run effect exactly once to keep particles stable

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
        border: '1px solid rgba(255, 255, 255, 0.03)',
        borderRadius: '24px',
        backdropFilter: 'blur(3px)',
        boxShadow: 'inset 0 0 40px rgba(0, 210, 255, 0.03), 0 20px 40px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        cursor: 'crosshair',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.15)';
        e.currentTarget.style.boxShadow = 'inset 0 0 50px rgba(0, 210, 255, 0.05), 0 25px 50px rgba(0, 210, 255, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.03)';
        e.currentTarget.style.boxShadow = 'inset 0 0 40px rgba(0, 210, 255, 0.03), 0 20px 40px rgba(0, 0, 0, 0.5)';
      }}
    >
      {/* Background cyber grid overlay effect */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.12,
          pointerEvents: 'none',
          maskImage: 'radial-gradient(circle at center, black 65%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 95%)',
        }}
      />
      <canvas 
        ref={canvasRef} 
        style={{ 
          display: 'block',
          zIndex: 2,
        }} 
      />
    </div>
  );
};

export default Network3DCanvas;
