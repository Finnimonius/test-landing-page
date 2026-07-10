"use client";

import { useState } from "react";
import styles from "./CustomSwitch.module.scss";

interface CustomSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: 'small' | 'medium' | 'large';
}

export default function CustomSwitch({ 
  defaultChecked = false, 
  onChange,
  size = 'small'
}: CustomSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  const sizeMap = {
    small: { width: 28, height: 16, handle: 11.5, borderRadius: 8, offset: 2 },
    medium: { width: 34, height: 20, handle: 16, borderRadius: 10, offset: 2 },
    large: { width: 44, height: 24, handle: 20, borderRadius: 12, offset: 2 },
  };

  const currentSize = sizeMap[size];

  return (
    <button
      className={`${styles.switch} ${checked ? styles.checked : ''}`}
      onClick={handleToggle}
      role="switch"
      aria-checked={checked}
      style={{
        width: currentSize.width,
        height: currentSize.height,
      }}
    >
      <div 
        className={styles.track}
        style={{
          height: currentSize.height,
          borderRadius: currentSize.borderRadius,
        }}
      >
        <div 
          className={styles.handle}
          style={{
            width: currentSize.handle,
            height: currentSize.handle,
            top: currentSize.offset,
            left: checked ? currentSize.width - currentSize.handle - currentSize.offset : currentSize.offset,
          }}
        />
      </div>
    </button>
  );
}