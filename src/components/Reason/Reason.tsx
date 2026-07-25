import styles from "./Reason.module.css";
import Image from "next/image";

export default function Reason({
  reasonIcon,
  reasonTitle,
  reasonText,
}: {
  reasonIcon: string;
  reasonTitle: string;
  reasonText: string;
}) {
  return (
    <div className={styles.reasonCard}>
      <Image
        className={styles.reasonIcon}
        src={reasonIcon}
        alt={reasonTitle}
        width={70}
        height={70}
      />
      <p className={styles.reasonTitle}>{reasonTitle}</p>
      <p className={styles.reasonText}>{reasonText}</p>
    </div>
  );
}
