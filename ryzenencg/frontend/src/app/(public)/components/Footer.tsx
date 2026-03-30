import React from 'react';
import Link from 'next/link';
import { Cpu, Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      {/* 💤 STATE 1: IDLE (Khtiyet sghir kiy-n3ess) */}
      <div className={styles.idleState}>
        <span className={styles.pulseDot}></span>
        SYSTEM SLEEP_ // HOVER TO WAKE
      </div>

      {/* ⚡ STATE 2: HOVER (L-Terminal kiy-t7el l-fo9) */}
      <div className={styles.activeState}>
        <div className={styles.terminalHeader}>
          <Cpu size={18} className={styles.cpuIcon} />
          <span>RYZEN_OS_V2.0 // TERMINAL_ACCESS_GRANTED</span>
        </div>

        <div className={styles.terminalBody}>
          <div className={styles.gridCol}>
            <h4 className={styles.colTitle}>[ DIRECTORIES ]</h4>
            <Link href="/home" className={styles.termLink}>&gt; ./home.exe</Link>
            <Link href="/about" className={styles.termLink}>&gt; ./about.sh</Link>
            <Link href="/archive" className={styles.termLink}>&gt; ./archive_v1.log</Link>
          </div>

          <div className={styles.gridCol}>
            <h4 className={styles.colTitle}>[ COMMS_LINK ]</h4>
            <a href="#" className={styles.termLink}><Mail size={14}/> ryzenclub.encgoujda@ump.ac.ma</a>
            <a href="#" className={styles.termLink}><Linkedin size={14}/> /Ryzen Encgo</a>
            <a href="#" className={styles.termLink}><Github size={14}/> /oriental-hack</a>
          </div>

          <div className={styles.gridCol}>
            <h4 className={styles.colTitle}>[ SYSTEM_INFO ]</h4>
            <p className={styles.termText}>Host: ENCG Oujda</p>
            <p className={styles.termText}>Event: Hackathon National</p>
            <p className={styles.termText}>Status: <span className={styles.statusOk}>ONLINE</span></p>
          </div>
        </div>

        <div className={styles.terminalFooter}>
          <p>© 2026 Ryzen Club. All rights reserved. made with love by elabdi ouail <span className={styles.blinkingCursor}>_</span></p>
        </div>
        
        {/* Effet dyal Scanline d l-chachat l-9dam */}
        <div className={styles.scanline}></div>
      </div>
    </footer>
  );
}