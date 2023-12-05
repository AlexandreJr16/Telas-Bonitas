"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./CardProduto.module.css";

const CardProduto = ({
  imge,
  name,
  handle,
}: {
  imge: any;
  name: string;
  handle: any;
}) => {
  return (
    <Image
      className={styles.image}
      src={imge}
      alt={name}
      onClick={() => {
        handle();
      }}
      width={180}
      height={200}
    ></Image>
  );
};

export default CardProduto;
