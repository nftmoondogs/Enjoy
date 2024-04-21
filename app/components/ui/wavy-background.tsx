"use client";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "~/lib/utils";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,  // default value if not provided
  backgroundFill = "rgba(255, 255, 255, 0)",  // default value if not provided
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let time = 0;
    const speedFactor = speed === "slow" ? 0.001 : 0.002;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.filter = `blur(${blur}px)`;
      
      const waveColors = colors || ["#3f3f3f", "#337eff"];
      ctx.lineWidth = waveWidth;

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < canvas.width; x += 10) {
          const y = noise(x / 800, 0.3 * i, time) * 100 + canvas.height / 2;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += speedFactor;
      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <div className={cn("fixed inset-0 overflow-hidden", containerClassName)} style={{ zIndex: -1 }}>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -2 }}></canvas>
      <div className={cn("flex items-center justify-center w-full h-full", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
