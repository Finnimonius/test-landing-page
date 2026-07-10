"use client";

import RatingBadge from "../ui/RatingBadge/RatingBadge";
import SortButtons from "../ui/SortButtons/SortButtons";
import styles from "./ProductTable.module.scss";
import Image from "next/image";

const productsData = [
  {
    id: 1,
    title: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
    seller: {
      icon: "/images/seller1.png",
      name: "0xHearts.com",
      online: true,
      rating: 4.9,
      date: 3,
      dateUnit: "года",
      reviewsNum: 4288,
    },
    availability: 322,
    price: 0.64,
  },
  {
    id: 2,
    title: "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
    seller: {
      icon: "/images/seller2.png",
      name: "IgorDun4enkoff",
      online: true,
      rating: 2,
      date: 1,
      dateUnit: "год",
      reviewsNum: 45,
    },
    availability: "∞",
    price: 0.63,
  },
  {
    id: 3,
    title:
      "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
    seller: {
      icon: "/images/seller2.png",
      name: "Dendi",
      online: false,
      rating: 5,
      date: 2,
      dateUnit: "дня",
      reviewsNum: 4,
    },
    availability: 4556,
    price: 0.6,
  },
];

const OnlineStatus = ({ online }: { online: boolean }) => {
  return <span className={`${styles.onlineStatus} ${online ? styles.online : styles.offline}`} />;
};

const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default function ProductTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.thDescription}>Описание</th>
            <th className={styles.thSeller}>Продавец</th>
            <th className={styles.thAvailability}>
              <span className={styles.headerContent}>
                Наличие
                <SortButtons />
              </span>
            </th>
            <th className={styles.thPrice}>
              <span className={styles.headerContent}>
                Цена
                <SortButtons />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr key={product.id} className={styles.row}>
              <td className={styles.cellDescription}>{product.title}</td>
              <td className={styles.cellSeller}>
                <div className={styles.sellerInfo}>
                  <div className={styles.avatarWrapper}>
                    <Image
                      src={product.seller.icon}
                      alt={product.seller.name}
                      width={28}
                      height={28}
                      className={styles.avatar}
                    />
                    <OnlineStatus online={product.seller.online} />
                  </div>
                  <div className={styles.sellerDetails}>
                    <div className={styles.sellerNameRow}>
                      <span className={styles.sellerName}>{product.seller.name}</span>
                      <RatingBadge rating={product.seller.rating} />
                    </div>
                    <div className={styles.sellerMeta}>
                      <span>
                        {product.seller.date} {product.seller.dateUnit} на сайте,
                      </span>
                      <span>{product.seller.reviewsNum} отзывов</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className={styles.cellAvailability}>
                {product.availability === "∞" ? (
                  <span className={styles.infinity}>∞</span>
                ) : (
                  <span className={styles.availabilityValue}>
                    {typeof product.availability === "number"
                      ? formatNumber(product.availability)
                      : product.availability}
                  </span>
                )}
              </td>
              <td className={styles.cellPrice}>
                <span className={styles.priceValue}>{product.price.toFixed(2)} ₽</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
