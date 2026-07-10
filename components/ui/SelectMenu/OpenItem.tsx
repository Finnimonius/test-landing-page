"use client";

import { useState } from "react";
import { Select, ConfigProvider } from "antd";
import styles from "./OpenItem.module.scss";

interface OpenItemProps {
  width?: number | string;
  height?: number | string;
  placeholder?: string;
  placeholderColor?: string;
  options?: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  fontSz?: number
}

const defaultOptions = [
  { value: "Пункт меню 1", label: "Пункт меню 1" },
  { value: "Пункт меню 2", label: "Пункт меню 2" },
  { value: "Пункт меню 3", label: "Пункт меню 3" },
];

export default function OpenItem({
  width = 168,
  height = 36,
  placeholder = "Способ доставки",
  placeholderColor = "#9e9da4",
  options = defaultOptions,
  defaultValue,
  onChange,
  fontSz = 14
}: OpenItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    onChange?.(value);
  };

  // Преобразуем размеры в строку с px
  const widthPx = typeof width === 'number' ? `${width}px` : width;
  const heightPx = typeof height === 'number' ? `${height}px` : height;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextPlaceholder: placeholderColor,
          colorText: '#36394a',
          fontSize: fontSz,
        },
        components: {
          Select: {
            selectorBg: "#fff",
            hoverBorderColor: "#e8ebf0",
            activeBorderColor: "#e8ebf0",
            activeOutlineColor: "none",
            optionSelectedBg: "#f7f7f7",
            optionActiveBg: "#f7f7f7",
            optionSelectedColor: "#36394a",
            optionFontSize: 14,
            optionPadding: "8px 12px",
          },
        },
      }}
    >
      <Select
        defaultValue={defaultValue}
        placeholder={placeholder} 
        className={styles.customSelect}
        // popupClassName={styles.customDropdown}
        onChange={handleChange}
        open={isOpen}
        onOpenChange={setIsOpen}
        options={options}
        style={{ 
          width: widthPx, 
          height: heightPx 
        }}
        suffixIcon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
          >
            <path
              d="M5.11989 6.56006L7.99989 9.44006L10.8799 6.56006"
              stroke="#666D80"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
    </ConfigProvider>
  );
}
