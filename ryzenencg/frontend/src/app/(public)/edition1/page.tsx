"use client";

import React, { useEffect, useRef } from 'react';
import DataVaultBg from './components/DataVaultBg';
import ArchiveContent from './components/ArchiveContent';
import styles from './edition1.module.css';

export default function Edition1Page() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking && scrollRef.current) {
        window.requestAnimationFrame(() => {
          scrollRef.current!.style.transform = `translateY(${window.scrollY * -0.1}px) translateZ(0)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.pageArchitect}>
      <DataVaultBg />
      <div ref={scrollRef} className={styles.parallaxWrapper}>
        <ArchiveContent />
      </div>
    </div>
  );
}