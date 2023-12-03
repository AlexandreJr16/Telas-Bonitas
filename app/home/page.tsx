import NavBar from "@/components/NavBar/NavBar";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.page}>
      <NavBar selected={2} />
      <div className={styles.card}></div>
    </div>
  );
};

export default page;
