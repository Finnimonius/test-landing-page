import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import DropdownMenu from "../ui/Dropdown/DropdownMenu";

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
          <Link href="/">
            <Image src="/images/logo.png" alt="Логотип Starvell" width={118} height={24}/>
          </Link>
          <input type="text" placeholder="Поиск игр и приложений"/>
          <DropdownMenu text="Поддержка" items={items}/>
        </div>
      </div>
    </header>
  );
}
