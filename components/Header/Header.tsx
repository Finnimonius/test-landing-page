import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__block}>
          <Link href="/">
            <Image src="/images/logo.png" alt="Логотип Starvell" width={118} height={24}/>
          </Link>
        </div>
      </div>
    </header>
  );
}
