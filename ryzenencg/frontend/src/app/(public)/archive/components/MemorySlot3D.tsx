"use client";

import React, { useRef, useState } from 'react';
import { ArrowUpRight, Video } from 'lucide-react';
import { ArchiveSlotData } from '@/types'; // 🔥 Njibou l-Type mn l-Backend
import styles from './MemorySlot3D.module.css';

interface MemorySlot3DProps {
  data: ArchiveSlotData;
  index: number;
}

export default function MemorySlot3D({ data, index }: MemorySlot3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const centerX = rect.width / 2; const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div className={styles.slotWrapper} style={{ animationDelay: `${index * 0.15}s` }}>
      <div 
        ref={cardRef}
        className={styles.cardContainer}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
      >
        <div className={styles.cardGlow}></div>
        
        {/* 🔥 HNA FIN ZEDNA L-IMAGE D بصح */}
        <div className={styles.imagePlaceholder}>
          {data.imageUrl ? (
            <img src={data.imageUrl} alt={data.title} className={styles.realImage} />
          ) : (
            <>
              <div className={styles.cyberOverlay}></div>
              <span className={styles.imageLabel}>IMG_DATA_NUL</span>
            </>
          )}
        </div>

        <div className={styles.cardContent}>
          <div className={styles.header}>
            <span className={styles.badge}>[{data.category}]</span>
            {/* Ila kan videoUrl, n-biyeno icone d video */}
            {data.videoUrl ? (
              <a href={data.videoUrl} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
                <Video size={18} />
              </a>
            ) : (
              <ArrowUpRight className={styles.iconLink} size={20} />
            )}
          </div>
          
          <h3 className={styles.title} data-text={data.title}>{data.title}</h3>
          <p className={styles.description}>{data.description}</p>
        </div>
      </div>
    </div>
  );
}