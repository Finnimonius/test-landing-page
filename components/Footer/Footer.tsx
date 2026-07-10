import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__block}>
          <div className={styles.footer__box}>
            <div className={styles.footer__info}>
              <Link href="/" className={styles.footer__logo}>
                <Image src="/images/logo.png" alt="Логотип Starvell" width={118} height={24} />
              </Link>
              <p>© 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг</p>
              <p>Дизайн сделан в 0xHearts.com</p>
            </div>
            <div>
              <h3 className={styles.footer__subtitle}>Поддержка</h3>
              <ul className={styles.footer__list}>
                <li>
                  <Link className={styles.footer__item} href="/">Написать в поддержку</Link>
                </li>
                <li>
                  <Link className={styles.footer__item} href="/">Политика конфиденциальности</Link>
                </li>
                <li>
                  <Link className={styles.footer__item} href="/">Пользовательское соглашение</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer__social}>
            <ul className={styles.footer__socialList} aria-label="Социальные сети">
              <li className={styles.footer__socialItem}>
                <Link
                  className={styles.footer__socialLink}
                  href="https://t.me/your_channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <span
                    className={`${styles.footer__socialIcon} ${styles.footer__socialIconTelegram}`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
              <li className={styles.footer__socialItem}>
                <Link
                  className={styles.footer__socialLink}
                  href="https://discord.gg/your_server"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <span
                    className={`${styles.footer__socialIcon} ${styles.footer__socialIconDiscord}`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
              <li className={styles.footer__socialItem}>
                <Link
                  className={styles.footer__socialLink}
                  href="https://vk.com/your_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VKontakte"
                >
                  <span
                    className={`${styles.footer__socialIcon} ${styles.footer__socialIconVk}`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
              <li className={styles.footer__socialItem}>
                <Link
                  className={styles.footer__socialLink}
                  href="https://youtube.com/your_channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <span
                    className={`${styles.footer__socialIcon} ${styles.footer__socialIconYoutube}`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
