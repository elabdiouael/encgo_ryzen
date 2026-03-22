"use client";

import React, { useState, useEffect } from 'react';
import { Database, PlusSquare, Trash2, Server, Image as ImageIcon, Video } from 'lucide-react';
import { apiService } from '@/services/api';
import { ArchiveSlotData } from '@/types';
import styles from './archives.module.css';

export default function ArchivesCMSPage() {
  const [archives, setArchives] = useState<ArchiveSlotData[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [category, setCategory] = useState('PROJET_GAGNANT');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // 🔥 États jdad dyal l-Media
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const fetchArchives = async () => {
    setLoading(true);
    try {
      const data = await apiService.getArchives();
      setArchives(data);
    } catch (error) {
      console.error("Backend offline");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArchives();
  }, []);

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return alert('Veuillez remplir le titre et la description');
    
    try {
      await apiService.addArchive({ category, title, description, imageUrl, videoUrl });
      setTitle(''); setDescription(''); setImageUrl(''); setVideoUrl('');
      fetchArchives(); // Refresh l-liste
    } catch (error) {
      alert('Erreur de connexion au Backend. Spring Boot est-il lancé ?');
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Supprimer ce slot de la base de données ?')) {
      await apiService.deleteArchive(id);
      fetchArchives();
    }
  };

  return (
    <div className={styles.cmsWrapper}>
      <div className={styles.header}>
        <h1 className={styles.glitchTitle} data-text="ARCHIVE_CMS">ARCHIVE_CMS</h1>
        <p className={styles.subtitle}>Gestionnaire de contenu des éditions précédentes.</p>
      </div>

      <div className={styles.dashboardGrid}>
        
        {/* --- FORMULAIRE D'AJOUT --- */}
        <div className={styles.formSection}>
          <div className={styles.sectionHeader}>
            <PlusSquare size={20} className={styles.iconCyan} />
            <h2>NOUVEAU_SLOT</h2>
          </div>
          
          <form className={styles.cyberForm} onSubmit={handleAddSubmit}>
            <div className={styles.inputGroup}>
              <label>CATÉGORIE</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.cyberInput}>
                <option value="PROJET_GAGNANT">Projet Gagnant</option>
                <option value="PROJET_FINALISTE">Projet Finaliste</option>
                <option value="TÉMOIGNAGE">Témoignage</option>
                <option value="CONFÉRENCE">Conférence</option>
                <option value="MOMENT_FORT">Moment Fort</option>
                <option value="AFTERMOVIE">Aftermovie (Vidéo Principale)</option> {/* Option jdida */}
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>TITRE DU SLOT</label>
              <input 
                type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
                className={styles.cyberInput} placeholder="Ex: Eco-Track ESS..." 
              />
            </div>

            <div className={styles.inputGroup}>
              <label>DESCRIPTION</label>
              <textarea 
                value={description} onChange={(e) => setDescription(e.target.value)} 
                className={styles.cyberTextarea} placeholder="Description du projet ou événement..."
              ></textarea>
            </div>

            {/* 🔥 L-INPUTS DYAL L-MEDIA */}
            <div className={styles.mediaInputsRow}>
              <div className={styles.inputGroup}>
                <label className={styles.mediaLabel}><ImageIcon size={14}/> URL IMAGE (Optionnel)</label>
                <input 
                  type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} 
                  className={styles.cyberInput} placeholder="https://lien-vers-image.jpg" 
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.mediaLabel}><Video size={14}/> URL VIDÉO (Optionnel)</label>
                <input 
                  type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} 
                  className={styles.cyberInput} placeholder="https://youtube.com/..." 
                />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <Server size={18} /> INJECTER DANS LA DB
            </button>
          </form>
        </div>

        {/* --- LISTE DES SLOTS ACTUELS --- */}
        <div className={styles.listSection}>
          <div className={styles.sectionHeader}>
            <Database size={20} className={styles.iconViolet} />
            <h2>SLOTS_ACTIFS ({archives.length})</h2>
          </div>

          {loading ? (
            <div className={styles.loader}>Synchronisation avec le Core...</div>
          ) : archives.length === 0 ? (
            <div className={styles.emptyState}>Aucun slot dans la base de données.</div>
          ) : (
            <div className={styles.slotsList}>
              {archives.map((slot) => (
                <div key={slot.id} className={styles.slotItem}>
                  <div className={styles.slotInfo}>
                    <span className={styles.slotBadge}>{slot.category}</span>
                    <h3 className={styles.slotTitle}>{slot.title}</h3>
                    <p className={styles.slotDesc}>{slot.description}</p>
                    
                    {/* Biyen les badges ila kan fihom media */}
                    <div className={styles.mediaBadges}>
                      {slot.imageUrl && <span className={styles.hasMedia}><ImageIcon size={12}/> Image OK</span>}
                      {slot.videoUrl && <span className={styles.hasMedia}><Video size={12}/> Vidéo OK</span>}
                    </div>
                  </div>
                  <button onClick={() => slot.id && handleDelete(slot.id)} className={styles.deleteBtn}>
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}