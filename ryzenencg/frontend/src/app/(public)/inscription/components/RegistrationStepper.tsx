"use client";

import React, { useState } from 'react';
import { ShieldCheck, Target, Users, Cpu, CheckCircle } from 'lucide-react';
import styles from './RegistrationStepper.module.css';

// 🛑 Les Imports dyal l-M3ellmin
import Step1General from './steps/Step1General';
import Step2Vision from './steps/Step2Vision';
import Step3Squad from './steps/Step3Squad';
import Step4Review from './steps/Step4Review';

// ==========================================
// 🛠️ TYPES: M-RIGLIN 100% M3A SPRING BOOT
// ==========================================
export interface ParticipantData {
  nomComplet: string;
  email: string;
  telephone: string;
  etablissement: string;
  niveauEtude: string;
  role: string;
}

export interface InscriptionFormData {
  nomEquipe: string;
  region: string;
  ville: string;
  experienceHackathon: string;
  detailsExperience: string;
  competencesEquipe: string[];
  motivation: string;
  comprehensionTheme: string;
  aUneIdee: boolean;
  titreProjet: string;
  descriptionProjet: string;
  problemeIdentifie: string;
  impactPotentiel: string;
  faisabilite: string;
  ambitionApres: string;
  membres: ParticipantData[];
}

const INITIAL_DATA: InscriptionFormData = {
  nomEquipe: '', region: '', ville: '',
  experienceHackathon: '', detailsExperience: '', competencesEquipe: [],
  motivation: '', comprehensionTheme: '',
  aUneIdee: false, titreProjet: '', descriptionProjet: '', problemeIdentifie: '', impactPotentiel: '', faisabilite: '', ambitionApres: '',
  // 3 Membres par défaut (kima glti)
  membres: [
    { nomComplet: '', email: '', telephone: '', etablissement: '', niveauEtude: '', role: 'CHEF' },
    { nomComplet: '', email: '', telephone: '', etablissement: '', niveauEtude: '', role: 'MEMBRE' },
    { nomComplet: '', email: '', telephone: '', etablissement: '', niveauEtude: '', role: 'MEMBRE' }
  ]
};

// 💥 L-ALWAN DYAL KOL ÉTAPE (THEME CONTROLLER)
const STEPS = [
  { id: 1, title: 'ENTITÉ', icon: <Cpu size={18} />, color: "#00d2ff" },       // Cyan
  { id: 2, title: 'VISION', icon: <Target size={18} />, color: "#bc13fe" },    // Magenta
  { id: 3, title: 'UNITÉS', icon: <Users size={18} />, color: "#ff6f00" },     // Amber
  { id: 4, title: 'SÉCURISATION', icon: <ShieldCheck size={18} />, color: "#00ffaa" } // Green
];

interface StepperProps {
  onStepChange?: (step: number) => void;
}

export default function RegistrationStepper({ onStepChange }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<InscriptionFormData>(INITIAL_DATA);

  // Fonction m-jehda bach t-beddel ay champ f l-Data globale
  const updateFormData = (fields: Partial<InscriptionFormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const handleStepChange = (newStep: number) => {
    setCurrentStep(newStep);
    if (onStepChange) onStepChange(newStep); // N-siftou l-Step l-Background
  };

  const nextStep = () => handleStepChange(Math.min(currentStep + 1, STEPS.length));
  const prevStep = () => handleStepChange(Math.max(currentStep - 1, 1));

  // Render l-Etape l-Actuelle
  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1General data={formData} updateData={updateFormData} onNext={nextStep} />;
      case 2: return <Step2Vision data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 3: return <Step3Squad data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 4: return <Step4Review data={formData} updateData={updateFormData} onPrev={prevStep} />;
      default: return null;
    }
  };

  const currentThemeColor = STEPS[currentStep - 1].color;

  return (
    // 💥 N-siftou L-Step w L-Loun l-CSS Variables bach kolchi y-tbeddel
    <div 
      className={styles.stepperContainer} 
      data-step={currentStep} 
      style={{ 
        '--theme-color': currentThemeColor, 
        '--theme-color-rgb': currentThemeColor === '#00d2ff' ? '0, 210, 255' : currentThemeColor === '#bc13fe' ? '188, 19, 254' : currentThemeColor === '#ff6f00' ? '255, 111, 0' : '0, 255, 170' 
      } as React.CSSProperties}
    >
      
      {/* 💥 THE SYS.ARCHITECT BADGE (120 FPS LOCKED) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#666677', fontWeight: 'bold', letterSpacing: '1px' }}>
         <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--theme-color)', borderRadius: '50%', boxShadow: '0 0 10px var(--theme-color)' }}></span>
            SYS.ARCHITECT // ING. OUAIL ELABDI
         </span>
         <span style={{ color: '#00ffaa', textShadow: '0 0 10px rgba(0, 255, 170, 0.4)' }}>[120 FPS_LOCKED]</span>
      </div>

      {/* 🚀 HUD PROGRESS BAR */}
      <div className={styles.hudProgress} style={{ borderColor: currentThemeColor, boxShadow: `0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(var(--theme-color-rgb), 0.05)` }}>
        <div className={styles.progressLineBg}>
          <div className={styles.progressLineFill} style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`, background: currentThemeColor, boxShadow: `0 0 15px ${currentThemeColor}` }}></div>
        </div>

        <div className={styles.stepsWrapper}>
          {STEPS.map((step) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className={`${styles.stepIndicator} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}>
                <div 
                  className={styles.stepIconBox} 
                  style={{ 
                    borderColor: isActive || isCompleted ? step.color : '', 
                    color: isActive || isCompleted ? (isActive ? '#fff' : step.color) : '', 
                    background: isActive ? step.color : (isCompleted ? `rgba(var(--theme-color-rgb), 0.1)` : '') 
                  }}
                >
                  {isCompleted ? <CheckCircle size={18} className={styles.checkIcon} /> : step.icon}
                  {isActive && <div className={styles.activeGlow} style={{ borderColor: step.color }}></div>}
                </div>
                <div className={styles.stepInfo}>
                  <span className={styles.stepPhase} style={{ color: isActive ? step.color : '' }}>PHASE 0{step.id}</span>
                  <span className={styles.stepTitle} style={{ color: isActive ? '#fff' : (isCompleted ? step.color : '') }}>{step.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🖥️ CONTENT ZONE (Les Formulaires d l-Moust9bal) */}
      <div className={styles.stepContentZone}>
         {renderStep()}
      </div>

    </div>
  );
}