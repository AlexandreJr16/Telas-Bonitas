import styles from "./NavBar.module.css";
import user from "../../public/navbar/user 2.svg";
import home from "../../public/navbar/home 1.svg";
import message from "../../public/navbar/messages 1.svg";
import search from "../../public/navbar/search 1.svg";
import logo from "../../public/navbar/logo (1).svg";
import perfil from "../../public/navbar/fotoPerfilCliente.svg";
import Image from "next/image";

const NavBar = ({ selected }: { selected: any }) => {
  const imageSources = [logo, home, message, search, user];

  return (
    <div className={styles.navbar_container}>
      <div className={styles.nav}>
        {imageSources.map((src, index, i) =>
          index != 1 ? (
            <Image key={index} src={src} alt="" />
          ) : (
            <Image
              className={styles.selectedInput}
              key={index}
              src={src}
              alt=""
            />
          )
        )}
      </div>
      <div>
        <Image src={perfil} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
