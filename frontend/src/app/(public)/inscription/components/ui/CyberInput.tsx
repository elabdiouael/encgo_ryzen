"use client";

import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './CyberInput.module.css';

interface CyberInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  isTextarea?: boolean;
}

const CyberInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, CyberInputProps>(
  ({ label, icon, error, isTextarea, className, ...props }, ref) => {
    return (
      <div className={`${styles.inputWrapper} ${error ? styles.hasError : ''} ${className || ''}`}>
        <div className={styles.inputContainer}>
          {icon && <div className={styles.iconBox}>{icon}</div>}
          
          {isTextarea ? (
            <textarea 
              ref={ref as any} 
              className={styles.cyberField} 
              placeholder=" " 
              {...(props as any)} 
            />
          ) : (
            <input 
              ref={ref as any} 
              className={styles.cyberField} 
              placeholder=" " 
              {...props} 
            />
          )}
          
          <label className={styles.cyberLabel}>{label}</label>
          
          {/* L-HUD Decorations */}
          <div className={styles.bottomLine}></div>
          <div className={styles.scanEffect}></div>
        </div>
        
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  }
);

CyberInput.displayName = 'CyberInput';
export default CyberInput;