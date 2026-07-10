import Header from "../Header/Header";
import SelectMenu from "../ui/SelectMenu/SelectMenu";
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
                    <SelectMenu />
                  </div>
                  <button className={styles.offers__popupBtn}>Продать Blox Fruits</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
