"use client";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useState } from "react";
import styles from "./DropdownMenu.module.scss";

interface Props {
  text: string;
  items: MenuProps["items"];
}

export default function DropdownMenu({ text, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick: MenuProps["onClick"] = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Dropdown 
        menu={{ items, onClick, className: styles.dropdownList }}
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={['hover']} 
        placement="bottomRight"
      >
        <a onClick={(e) => e.preventDefault()} className={styles.trigger}>
          <span className={`${styles.text} ${isOpen ? styles.textOpen : ''}`}>
            {text}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          >
            <path
              d="M5.11989 6.56006L7.99989 9.44006L10.8799 6.56006"
              stroke="#666D80"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </Dropdown>
    </>
  );
}
