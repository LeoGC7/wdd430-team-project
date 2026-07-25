import styles from "./WhyHandcraftedHaven.module.css";
import Reason from "../Reason/Reason";

export default function WhyHandcraftedHaven() {
  return (
    <section className={styles.whySection}>
      <h3 className={styles.whyTitle}>Why Handcrafted Haven?</h3>
      <div className={styles.reasonsContainer}>
        <Reason
          reasonIcon="/palette.svg"
          reasonTitle="Unique Creations"
          reasonText="Every item is one-of-a-kind, made by real artisans with passion and care."
        ></Reason>
        <Reason
          reasonIcon="/deal.svg"
          reasonTitle="Support Small Makers"
          reasonText="Buy directly from independent creators and support their craft."
        ></Reason>
        <Reason
          reasonIcon="/plant.svg"
          reasonTitle="Eco-Friendly"
          reasonText="Handmade goods reduce mass production waste and celebrate slow craftsmanship."
        ></Reason>
      </div>
    </section>
  );
}
