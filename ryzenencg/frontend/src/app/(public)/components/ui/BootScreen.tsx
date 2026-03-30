"use client";

import React, { useState, useEffect } from 'react';
import styles from './BootScreen.module.css';

export default function BootScreen() {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const bootSequence = [
    "INITIALIZING RYZEN_OS v2.0...",
    "ESTABLISHING SECURE CONNECTION...",
    "LOADING NEURAL NETWORKS...",
    "DECRYPTING ARCHIVES...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    // Kat-beddel l-texte kol 400ms bach t-3ti vibe d l-hacking
    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < bootSequence.length - 1) return prev + 1;
        return prev;
      });
    }, 400);

    // Kat-7iyd l-Boot Screen kamel mn b3d 2.5 secondes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [bootSequence.length]);

  if (!loading) return null;

  return (
    <div className={styles.bootWrapper}>
      <div className={styles.scanline}></div>
      <div className={styles.terminal}>
        {bootSequence.slice(0, textIndex + 1).map((text, i) => (
          <p key={i} className={styles.terminalLine}>
            <span className={styles.sysPrompt}>SYS_ADMIN@RYZEN:~$</span> {text}
          </p>
        ))}
        <span className={styles.cursor}>_</span>
      </div>
    </div>
  );
}