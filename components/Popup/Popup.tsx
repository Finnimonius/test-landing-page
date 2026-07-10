"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Popup.module.scss";
import OpenItem from "../ui/SelectMenu/OpenItem";
import { Upload } from "antd";

const { Dragger } = Upload;

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAX_CHARS = 200;

export default function Popup({ isOpen, onClose }: PopupProps) {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  const overlayRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;

      const currentText = textarea.value;
      setText(currentText);
      setCharCount(currentText.length);
    }
  };

  // Эффекты для открытия/закрытия
  useEffect(() => {
    if (isOpen) {
      if (overlayRef.current) {
        overlayRef.current.classList.add(styles.open);
      }
      if (popupRef.current) {
        popupRef.current.classList.add(styles.open);
      }
    } else {
      if (overlayRef.current) {
        overlayRef.current.classList.remove(styles.open);
      }
      if (popupRef.current) {
        popupRef.current.classList.remove(styles.open);
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 300);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={overlayRef} className={styles.overlay} onClick={onClose}>
      <div ref={popupRef} className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#6E7076"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.content}>
          <h2 className={styles.title}>Жалоба на 0xHearts.com</h2>

          <div className={styles.block}>
            <label className={styles.subtitle} htmlFor="reason-text">
              Причина жалобы
            </label>
            <OpenItem
              width={"100%"}
              height={40}
              placeholder={"Выберите причину жалобы"}
              fontSz={16}
            />
          </div>

          <div className={styles.block}>
            <label className={styles.subtitle} htmlFor="complaint-text">
              Опишите проблему
            </label>
            <div className={styles.textareaWrapper}>
              <textarea
                id="complaint-text"
                ref={textareaRef}
                className={`${styles.area} ${charCount > MAX_CHARS ? styles.error : ""}`}
                placeholder="Введите ваш текст"
                value={text}
                onChange={handleTextareaInput}
                maxLength={MAX_CHARS}
                rows={1}
              />
              <span
                className={`${styles.charCounter} ${charCount > MAX_CHARS ? styles.error : ""}`}
              >
                {charCount}/{MAX_CHARS}
              </span>
            </div>
          </div>
          <div className={styles.dragger}>
            <label className={styles.subtitle} htmlFor="dragger">
              Доказательства
            </label>
            <div className={styles.draggerWrapper} id="dragger">
              <Dragger>
                <p className="ant-upload-drag-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M19.4914 8.18681C22.0836 8.84987 24 11.2011 24 14C24 17.3137 21.3137 20 18 20H6.5C2.91015 20 0 17.0899 0 13.5C0 10.4377 2.11764 7.87004 4.96841 7.18148C6.32398 4.69055 8.96456 3 12 3C15.4283 3 18.3528 5.15641 19.4914 8.18681ZM7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L11 10.4142L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 10.4142L15.2929 12.7071C15.6834 13.0976 16.3166 13.0976 16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071Z"
                      fill="#36394A"
                    />
                  </svg>
                </p>
                <p className="ant-upload-text">Выберите файл или перетащите его сюда</p>
                <p className="ant-upload-hint">JPEG или PNG до 5 MB</p>
              </Dragger>
            </div>
          </div>
          <div className={styles.btnWrapper}>
            <button className={styles.help}>Мне нужна поддержка</button>
            <button className={styles.report}>Пожаловаться</button>
          </div>
        </div>
      </div>
    </div>
  );
}
