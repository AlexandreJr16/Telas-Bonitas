import Gaveteiro1 from "../../public/menu/Gaveteiro1.svg";
import Gaveteiro2 from "../../public/menu/Gaveteiro2.svg";
import Gaveteiro3 from "../../public/menu/Gaveteiro3.svg";
import Image from "next/image";

import styles from "./ListaGaveteiros.module.css";

const ListaGaveteiros = ({ title }: { title: string }) => {
  const gaveteiros = [
    Gaveteiro1,
    Gaveteiro2,
    Gaveteiro3,
    Gaveteiro1,
    Gaveteiro2,
    Gaveteiro3,
    Gaveteiro1,
    Gaveteiro2,
  ];
  return (
    <div className={styles.lista}>
      <div className={styles.text_container}>
        <h2 className={styles.text_principal}>{title}</h2>
        <p className={styles.text_mais}> Ver mais</p>
      </div>
      {gaveteiros.map((gav, index) => (
        <Image
          className={styles.img}
          src={gav}
          alt="gaveta"
          key={index}
          width={110}
          height={130}
        />
      ))}
    </div>
  );
};

export default ListaGaveteiros;
