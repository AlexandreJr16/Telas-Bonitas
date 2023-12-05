import styles from "./NavBar.module.css";
import user from "../../public/navbar/user 2.svg";
import home from "../../public/navbar/home 1.svg";
import message from "../../public/navbar/messages 1.svg";
import search from "../../public/navbar/search 1.svg";
import logo from "../../public/navbar/logo (1).svg";
import perfil from "../../public/navbar/fotoPerfilCliente.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = ({ selected }: { selected: any }) => {
  const imageSources = [logo, home, message, search, user];
  const url = ["/home", "/home", "", "", "/perfil"];

  return (
    <div className={styles.navbar_container}>
      <div className={styles.nav}>
        {imageSources.map((src, i) => {
          const text = url[i];
          return i != 1 ? (
            <Link href={text} key={i}>
              <Image key={i} src={src} alt="" />
            </Link>
          ) : (
            <Link href={text} key={i}>
              <Image
                className={styles.selectedInput}
                key={i}
                src={src}
                alt=""
              />
            </Link>
          );
        })}
      </div>
      <div>
        <Image src={perfil} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
