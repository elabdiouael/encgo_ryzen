import React from 'react';
import { Database, PlayCircle } from 'lucide-react';
import { apiService } from '@/services/api'; // 🔥 Importina l-API
import DataCoreBackground from './components/DataCoreBackground';
import MemorySlot3D from './components/MemorySlot3D';
import styles from './archive.module.css';

export default async function ArchivePage() {
  // 🔥 FETCH DATA L-7A9I9IYA MN SPRING BOOT (Server-Side)
  const archives = await apiService.getArchives();

  return (
    <div className={styles.pageWrapper}>
      <DataCoreBackground />

      <div className={styles.contentContainer}>
        
        {/* --- HEADER --- */}
        <div className={styles.header}>
          <div className={styles.sysBadge}>
            <Database size={16} className={styles.pulseIcon} />
            <span>ACCÈS_ARCHIVES // ÉDITION_1.0</span>
          </div>
          <h1 className={styles.glitchTitle} data-text="DATA_CORE">DATA_CORE</h1>
          <p className={styles.subtitle}>Extraction des registres de la première édition du Hackathon.</p>
        </div>

        {/* --- STATS GLOBALES --- */}
        <div className={styles.statsSection}>
          <div className={styles.statHolo}>
            <h3>200+</h3><p>PARTICIPANTS_</p>
          </div>
          <div className={styles.statHolo}>
            <h3>30</h3><p>PROJETS_SOUMIS_</p>
          </div>
          <div className={styles.statHolo}>
            <h3>72h</h3><p>CODE_NON_STOP_</p>
          </div>
        </div>

        {/* --- LA VIDÉO (Cyber Screen) --- */}
        <div className={styles.videoSection}>
          <div className={styles.cyberScreen}>
            <div className={styles.screenContent}>
              <PlayCircle size={64} className={styles.playIcon} />
              <p>INITIALISER L'AFTERMOVIE</p>
            </div>
            <div className={styles.screenScanline}></div>
          </div>
        </div>

        {/* --- L-SLOTS DYNAMIQUES (CONNECTED TO DB) --- */}
        <div className={styles.sectionTitleWrapper}>
          <h2 className={styles.sectionTitle}>&gt; REGISTRES_EXTRAITS</h2>
          <div className={styles.separator}></div>
        </div>

        <div className={styles.slotsGrid}>
          {archives.length > 0 ? (
            archives.map((data: any, index: number) => (
              <MemorySlot3D key={data.id} data={data} index={index} />
            ))
          ) : (
            <div style={{ color: '#00d2ff', gridColumn: '1 / -1', textAlign: 'center', padding: '50px', fontFamily: 'monospace' }}>
              [ AUCUN REGISTRE TROUVÉ DANS LA BASE DE DONNÉES. VEUILLEZ ALIMENTER LE CMS. ]
            </div>
          )}
        </div>

      </div>
    </div>
  );
}