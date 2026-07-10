import styles from './RatingBadge.module.scss'

export default function RatingBadge ({ rating }: { rating: number }) {
  let bgColor = "";
  let textColor = "";
  
  if (rating >= 0 && rating < 3) {
    bgColor = "rgba(255, 92, 92, 0.08)";
    textColor = "#ff5c5c";
  } else if (rating >= 3 && rating < 4) {
    bgColor = "rgba(255, 142, 38, 0.08)";
    textColor = "#ff8e26";
  } else if (rating >= 4 && rating < 5) {
    bgColor = "rgba(255, 229, 0, 0.08)";
    textColor = "#e1b000";
  } else if (rating >= 5) {
    bgColor = "rgba(29, 180, 98, 0.08)";
    textColor = "#1db462";
  }

  return (
    <span 
      className={styles.ratingBadge}
      style={{ 
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      <span className={styles.ratingValue}>{rating}</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.starIcon}
        style={{ color: textColor }}
      >
        <path
          d="M7.99998 1.33337L10.06 5.50671L14.6666 6.18004L11.3333 9.42671L12.12 14.0134L7.99998 11.84L3.87998 14.0134L4.66665 9.42671L1.33331 6.18004L5.93998 5.50671L7.99998 1.33337Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};