"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './CyberInput.module.css'; // K-y-sta3ml nfs l-CSS d l-Input

interface CyberSelectProps {
  label: string;
  icon?: React.ReactNode;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

export default function CyberSelect({ label, icon, options, value, onChange, error, className }: CyberSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // K-n-seddou l-dropdown ila cliquina 3la berra
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find(opt => opt.value === value)?.label || "";

  return (
    <div ref={selectRef} className={`${styles.inputWrapper} ${error ? styles.hasError : ''} ${className || ''}`}>
      <div 
        className={`${styles.inputContainer} ${styles.customSelectContainer} ${isOpen ? styles.selectOpen : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon && <div className={styles.iconBox}>{icon}</div>}
        
        {/* L-Valeur li m-Khtara */}
        <div className={`${styles.cyberField} ${styles.customSelectValue} ${!value ? styles.isEmpty : ''}`}>
          {selectedLabel}
        </div>
        
        <label className={`${styles.cyberLabel} ${value || isOpen ? styles.labelUp : ''}`}>{label}</label>
        
        <ChevronDown size={18} className={`${styles.selectArrow} ${isOpen ? styles.arrowUp : ''}`} />
        
        <div className={styles.bottomLine}></div>
        <div className={styles.scanEffect}></div>
      </div>

      {/* L-Dropdown L-Hbil */}
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((opt, i) => (
            <div 
              key={i} 
              className={`${styles.dropdownOption} ${value === opt.value ? styles.optionSelected : ''}`}
              onClick={() => { onChange(opt.value); setIsOpen(false); }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}