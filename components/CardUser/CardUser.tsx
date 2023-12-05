"use client";
import Image from "next/image";
import styles from "./CardUser.module.css";
import user from "../../public/perfilClienteEditar.svg";
import { useState } from "react";
import Link from "next/link";
const CardUser = () => {
  const [select, setSelect] = useState<number | null>(null);
  return (
    <div className={styles.card}>
      <div className={styles.top_card}>
        <Image src={user} alt="usuario" className={styles.img} />
        <div className={styles.infos}>
          <h2 className={styles.name_text}>Cliente</h2>
          <p className={styles.subtitle_text}>cliente@gmail.com</p>
          <p className={styles.subtitle_text}>(00) 0000-0000</p>
        </div>
      </div>
      <div className={styles.bottom_card}>
        <Link
          href={""}
          className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
        >
          <p className={styles.selected_text_btn}> Detalhes da conta</p>
        </Link>
        <Link
          href={""}
          className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
        >
          <p className={styles.selected_text_btn}> Alterar senha</p>
        </Link>
        <Link
          href={""}
          className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
        >
          <p className={styles.selected_text_btn}> Meus favoritos</p>
        </Link>
        <Link
          href={""}
          className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
        >
          <p className={styles.selected_text_btn}>Meus Projetos</p>
        </Link>
        <Link
          href={"/"}
          className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
        >
          <p className={styles.selected_text_btn}> Sair da conta</p>
        </Link>
        <Link
          href={"/"}
          className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
        >
          <p className={styles.selected_text_btn_delete}> Delete sua conta</p>
        </Link>
      </div>
    </div>
  );
};
export default CardUser;
