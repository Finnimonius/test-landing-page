import Header from "../Header/Header";
import ProductTable from "../ProductTable/ProductTable";
import OpenItem from "../ui/SelectMenu/OpenItem";
import CustomSwitch from "../ui/Switch/CustomSwitch";
import styles from "./GamePage.module.scss";

const sections = [
  {
    id: 1,
    title: "Робуксы",
    numbers: 395,
  },
  {
    id: 2,
    title: "Подарочные карты",
    numbers: 1193,
  },
  {
    id: 3,
    title: "Донат робуксов (паки)",
    numbers: 777,
  },
  {
    id: 4,
    title: "Premium",
    numbers: 1193,
  },
  {
    id: 5,
    title: "VIP-сервер",
    numbers: 395,
  },
  {
    id: 6,
    title: "Аккаунты",
    numbers: 1193,
  },
  {
    id: 7,
    title: "Скины",
    numbers: 777,
  },
  {
    id: 8,
    title: "Prime Gaming",
    numbers: 395,
  },
  {
    id: 9,
    title: "Studio",
    numbers: 1193,
  },
  {
    id: 10,
    title: "Прочее",
    numbers: 395,
  },
  {
    id: 11,
    title: "Adopt Me",
    numbers: 1193,
  },
  {
    id: 12,
    title: "Anime Defenders",
    numbers: 777,
  },
  {
    id: 13,
    title: "Arm Wrestle Simulator",
    numbers: 1193,
  },
  {
    id: 14,
    title: "ASTD",
    numbers: 395,
  },
  {
    id: 15,
    title: "Blade Ball",
    numbers: 1193,
  },
  {
    id: 16,
    title: "Blox Fruits",
    numbers: 777,
  },
  {
    id: 17,
    title: "Da Hood",
    numbers: 395,
  },
  {
    id: 18,
    title: "GPO",
    numbers: 1193,
  },
  {
    id: 19,
    title: "Jailbreak",
    numbers: 777,
  },
  {
    id: 20,
    title: "Jujutsu Shenanigans",
    numbers: 395,
  },
  {
    id: 21,
    title: "King Legacy",
    numbers: 1193,
  },
  {
    id: 22,
    title: "MM2",
    numbers: 777,
  },
  {
    id: 23,
    title: "Pet Simulator 99",
    numbers: 1193,
  },
  {
    id: 24,
    title: "Pet Simulator X",
    numbers: 395,
  },
  {
    id: 25,
    title: "Project Slayers",
    numbers: 1193,
  },
  {
    id: 26,
    title: "Toilet Tower Defense",
    numbers: 777,
  },
  {
    id: 27,
    title: "Tower Defense Simulator",
    numbers: 395,
  },
  {
    id: 28,
    title: "YBA",
    numbers: 1193,
  },
  {
    id: 29,
    title: "Прочие игры",
    numbers: 777,
  },
];

const goods = [
  {
    id: 1,
    title: "Все",
    active: true,
  },
  {
    id: 2,
    title: "Бели",
    active: false,
  },
  {
    id: 3,
    title: "Аккаунты",
    active: false,
  },
  {
    id: 4,
    title: "Предметы",
    active: false,
  },
  {
    id: 5,
    title: "VIP-сервер",
    active: false,
  },
  {
    id: 6,
    title: "Услуги",
    active: false,
  },
  {
    id: 7,
    title: "Гайды",
    active: false,
  },
];

export default function GamePage() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.offers}>
          <div className="container">
            <div className={styles.offers__content}>
              <div className={styles.offers__block}>
                <h1 className={styles.offers__title}>Робуксы Roblox</h1>
                <p className={styles.offers__descr}>
                  Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной
                  категории, на которую вы сейчас смотрите. Какой-то длинный текст, связанный с
                  SEO-оптимизацией относительно данной категории, на которую вы сейчас смотрите.
                </p>
                <div className={styles.offers__sections}>
                  {sections.map((section) => (
                    <button className={styles.offers__sectionsBtn} key={section.id}>
                      {section.title}
                      <span className={styles.offers__nums}>{section.numbers}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.offers__dashboard}>
                <div className={styles.offers__box}>
                  <div className={styles.offers__goods}>
                    {goods.map((good) => (
                      <button
                        className={good.active ? styles.offers__active : styles.offers__unactive}
                        key={good.id}
                      >
                        {good.title}
                      </button>
                    ))}
                    <OpenItem />
                  </div>
                  <button className={styles.offers__popupBtn}>Продать Blox Fruits</button>
                </div>
                <div className={styles.offers__filterElems}>
                  <div className={styles.offers__online}>
                    <span className={styles.offers__onlineText}>Только продавцы онлайн</span>
                    <CustomSwitch />
                  </div>
                  <div className={styles.offers__delivery}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99607 1.06156C7.0236 0.841308 6.90264 0.629273 6.69903 0.540889C6.49542 0.452505 6.25792 0.50893 6.11582 0.679447L1.65109 6.03712C1.57393 6.12968 1.49578 6.22342 1.43888 6.30581C1.38507 6.38372 1.28681 6.53691 1.28378 6.73823C1.2803 6.96872 1.38301 7.188 1.56229 7.33288C1.7189 7.45943 1.89949 7.48202 1.99379 7.49056C2.0935 7.49959 2.21554 7.49957 2.33604 7.49954L5.43354 7.49954L5.00379 10.9375C4.97626 11.1578 5.09723 11.3698 5.30083 11.4582C5.50444 11.5466 5.74194 11.4901 5.88404 11.3196L10.3488 5.96196C10.4259 5.8694 10.5041 5.77566 10.561 5.69327C10.6148 5.61536 10.713 5.46218 10.7161 5.26085C10.7196 5.03036 10.6169 4.81108 10.4376 4.6662C10.281 4.53965 10.1004 4.51706 10.0061 4.50852C9.90636 4.49949 9.78431 4.49952 9.66381 4.49954L6.56632 4.49954L6.99607 1.06156Z"
                        fill="#4E75FF"
                      />
                    </svg>
                    <span className={styles.offers__diliveryText}>Моментальная доставка</span>
                    <CustomSwitch />
                  </div>
                  <input type="text" className={styles.offers__findLot} placeholder="Поиск по описанию лота..."/>
                </div>
                <ProductTable />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
