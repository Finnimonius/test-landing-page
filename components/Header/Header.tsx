import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import DropdownMenu from "../ui/DropdownMenu/DropdownMenu";

const items = [
  {
    label: "Пункт меню",
    key: "1",
  },
  {
    label: "Пункт меню",
    key: "2",
  },
  {
    label: "Пункт меню",
    key: "3",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__block}>
          <Link href="/" className={styles.header__logo}>
            <Image src="/images/logo.png" alt="Логотип Starvell" width={118} height={24} />
          </Link>
          <input
            className={styles.header__input}
            type="text"
            placeholder="Поиск игр и приложений..."
          />
          <div className={styles.header__dropdowns}>
            <DropdownMenu text="Поддержка" items={items} />
            <DropdownMenu text="Русский" items={items} />
            <DropdownMenu text="RUB" items={items} />
          </div>
          <div className={styles.header__buttons}>
            <button className={styles.header__entrance}>
                Вход
            </button>
            <button className={styles.header__registration}>
                Регистрация
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
