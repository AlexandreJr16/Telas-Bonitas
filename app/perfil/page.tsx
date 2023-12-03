"use client";
import NavBar from "@/components/NavBar/NavBar";
import styles from "./page.module.css";
import ListaGaveteiros from "@/components/ListaGaveteiros/ListaGaveteiros";
import CardUser from "@/components/CardUser/CardUser";

const page = () => {
  return (
    <div className={styles.page}>
      <NavBar selected={2} />
      <div className={styles.card}>
        <CardUser />
      </div>
    </div>
  );
};

export default page;
