"use client";
import NavBar from "@/components/NavBar/NavBar";
import styles from "./page.module.css";
import ListaGaveteiros from "@/components/ListaGaveteiros/ListaGaveteiros";

const page = () => {
  return (
    <div className={styles.page}>
      <NavBar selected={2} />
      <div className={styles.card}>
        <div className={styles.top_bar}>
          <p>Projeto</p>
          <p>Empresa</p>
          <p>Modelos</p>
        </div>
        <ListaGaveteiros title="Projetos recomendados:" />
        <ListaGaveteiros title="Empresas bem avaliadas:" />
        <ListaGaveteiros title="Novidades pra você:" />
      </div>
    </div>
  );
};

export default page;
