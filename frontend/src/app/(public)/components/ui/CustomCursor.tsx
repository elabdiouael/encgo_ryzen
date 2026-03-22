"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  
  // 🔥 L-VITESSE DYAL L-OUTLINE (0.1 tal 1). Kolma sghar = K-iy-tbe3ek b chwiya (Smooth)
  const delaySpeed = 0.15; 
  
  // N-khebiw l-position f Refs bach ma-n-re-renderiwch React
  const mouse = useRef({ x: 0, y: 0 });
  const outline = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsHidden(true);
      return;
    }

    // 1. Update l-Coordounés mnin t-t7errek l-souris
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // L-Point zre9 (Dot) k-iy-tbe3ek direct f blassa (Zero Lag)
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    // 2. L-Moteur dyal l-Animation (60 FPS Smooth Tracking)
    const render = () => {
      // Calcul d l-Lerp (Tbe3 l-souris b wa7d l-freinage sghir)
      outline.current.x += (mouse.current.x - outline.current.x) * delaySpeed;
      outline.current.y += (mouse.current.y - outline.current.y) * delaySpeed;

      // Appliquer l-GPU Translate
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${outline.current.x}px, ${outline.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(render);
    };
    
    // N-demariw l-Moteur
    requestRef.current = requestAnimationFrame(render);

    // 3. Interactions
    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* L-Outline k-iy-koun l-ta7t */}
      <div 
        ref={cursorOutlineRef} 
        className={`${styles.cursorOutline} ${isClicked ? styles.clicked : ''} ${isHovered ? styles.hovered : ''}`} 
      >
        {/* Hada scanner k-iy-ban ghir f l-Hover */}
        <div className={styles.scannerLine}></div>
      </div>
      
      {/* L-Point k-iy-koun l-fou9 */}
      <div 
        ref={cursorDotRef} 
        className={`${styles.cursorDot} ${isClicked ? styles.clicked : ''} ${isHovered ? styles.hovered : ''}`} 
      />
    </>
  );
}