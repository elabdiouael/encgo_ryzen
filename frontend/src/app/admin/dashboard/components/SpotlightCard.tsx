"use client";

import React, { useRef, useState } from 'react';
import styles from './SpotlightCard.module.css';

interface SpotlightCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode; // 🔥 Beddelnaha hna bach t9bel Lucide Icon
}

export default function SpotlightCard({ title, value, icon }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={styles.cardWrapper}
    >
      <div
        className={styles.spotlight}
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(188, 19, 254, 0.15), transparent 40%)`,
        }}
      />
      
      <div
        className={styles.borderGlow}
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(188, 19, 254, 0.5), transparent 40%)`,
        }}
      />

      <div className={styles.cardContent}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          {icon && <span className={styles.icon}>{icon}</span>}
        </div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
}