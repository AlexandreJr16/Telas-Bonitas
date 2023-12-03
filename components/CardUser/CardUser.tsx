"use client";
import Image from "next/image";
import styles from "./CardUser.module.css";
import user from "../../public/navbar/fotoPerfilCliente.svg";
import Link from "next/link";
import { useState } from "react";
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
        <input
          type="button"
          className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
          value={"Detalhes da conta"}
        ></input>
        <input
          type="button"
          className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
          value={"Alterar Senha"}
        ></input>
        <input
          type="button"
          value={"Meus favoritos"}
          className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
        />
        <Link href={"/"}>
          <input
            type="button"
            value={"Meus projetos"}
            className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
          />
        </Link>
        <Link href={"/"}>
          <input
            type="button"
            value={"Sair da conta"}
            className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
          />
        </Link>
        <Link href={"/"}>
          <input
            type="button"
            value={"Delete sua conta"}
            className={select == 0 ? styles.nav_btn_selected : styles.nav_btn}
          />
        </Link>
      </div>
    </div>
  );
};
export default CardUser;
