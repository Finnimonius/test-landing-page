"use client";

import { useState } from "react";
import { Select, ConfigProvider } from "antd";
import styles from "./SelectMenu.module.scss";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function SelectMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: '#36394a',
          fontSize: 14,
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
        defaultValue="Способ доставки"
        className={styles.customSelect}
        popupClassName={styles.customDropdown}
        onChange={handleChange}
        open={isOpen}
        onOpenChange={setIsOpen}
        options={[
          { value: "Пункт меню 1", label: "Пункт меню 1" },
          { value: "Пункт меню 2", label: "Пункт меню 2" },
          { value: "Пункт меню 3", label: "Пункт меню 3" },
        ]}
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
