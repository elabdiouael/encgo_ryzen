"use client";
import React, { useState } from 'react';
import RegistrationBg from './components/RegistrationBg';
import RegistrationStepper from './components/RegistrationStepper';
import styles from './inscription.module.css';

export default function InscriptionPage() {
  // 🔥 L-Page kat3ref chmen Etape 7na fiha db!
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className={styles.pageContainer}>
      {/* 💥 L-Background k-y-tbeddel jder m3a l-Step! */}
      <RegistrationBg step={activeStep} />

      <div className={styles.contentWrapper}>
        <div className={styles.headerZone}>
          <div className={styles.systemBadge}>
            <span className={styles.pulseDot}></span>
            SECURE_ENROLLMENT_PROTOCOL
          </div>
          <h1 className={styles.megaTitle}>
            INTÉGRER L'<span className={styles.highlight}>ARÈNE</span>
          </h1>
          <p className={styles.subtitle}>
            Initialisez la création de votre squad. Assurez-vous de l'exactitude des données avant la transmission au Core System.
          </p>
        </div>

        <div className={styles.stepperZone}>
          <RegistrationStepper onStepChange={(step) => setActiveStep(step)} />
        </div>
      </div>
    </div>
  );
}