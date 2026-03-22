"use client";

import React, { useState } from 'react';
import DynamicMatrixBg from './DynamicMatrixBg';
import BroadcastHologram from './BroadcastHologram';
import NexusBento from './NexusBento';
import styles from './HomeEngine.module.css';

export default function HomeEngine() {
  // L-State L-Mejnoun: K-iy-ched chmn element 9isti (register, archive, about, why, sponsors)
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className={`${styles.engineWrapper} ${activeNode ? styles.isFocused : ''}`} data-theme={activeNode}>
      
      {/* 1. L-Background li k-y-tفاعل m3a l-Theme */}
      <DynamicMatrixBg activeNode={activeNode} />

      <div className={styles.scrollPerspective}>
        <div className={styles.contentLayout}>
          
          {/* 2. L-Texte d l-Appel (K-iy-rje3 l-Lor ila 9isti chi carte) */}
          <div className={`${styles.hologramContainer} ${activeNode ? styles.dimmed : ''}`}>
            <BroadcastHologram />
          </div>

          {/* 3. L-Cartes 3D (Homa li k-y-bedlou l-State) */}
          <div className={styles.bentoContainer}>
            <NexusBento activeNode={activeNode} setActiveNode={setActiveNode} />
          </div>

        </div>
        <div className="h-[150px] w-full"></div>
      </div>

    </div>
  );
}