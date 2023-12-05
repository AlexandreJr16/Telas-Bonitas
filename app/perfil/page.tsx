"use client";
import NavBar from "@/components/NavBar/NavBar";
import styles from "./page.module.css";
import ListaGaveteiros from "@/components/ListaGaveteiros/ListaGaveteiros";
import CardUser from "@/components/CardUser/CardUser";
import CardProduto from "@/components/CardProduto/CardProduto";
import { useState } from "react";
import DetalhesProdutos from "@/components/DetalhesProduto/DetalhesProdutos";
import { arr } from "@/data/datas";

type Obj = {
  title: string;
  description: string;
  tipo: string;
  material: string;
  empresa: string;
  imagem: any;
};

const Page = () => {
  const [rendered, setRendered] = useState(true);
  const [obj, setObj] = useState<Obj>({
    title: "",
    description: "",
    empresa: "",
    material: "",
    tipo: "",
    imagem: "",
  });

  return (
    <div className={styles.page}>
      <NavBar selected={2} />
      <div className={styles.card}>
        <CardUser />
        {rendered ? (
          <div className={styles.produtos_container}>
            <h1 className={styles.proj_ant_title}>Projetos anteriores</h1>
            <div className={styles.prod_container_prods}>
              {arr.map((produto, i) => {
                return (
                  <CardProduto
                    name={produto.name}
                    imge={produto.img}
                    handle={() => {
                      console.log("Oi");
                      setObj({
                        title: produto.name,
                        description: produto.description,
                        empresa: produto.empresa,
                        material: produto.material,
                        tipo: produto.tipo,
                        imagem: produto.img,
                      });
                      setRendered(false);
                    }}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <DetalhesProdutos
            img={obj.imagem}
            title={obj.title}
            description={obj.description}
            empresa={obj.empresa}
            tipo={obj.tipo}
            material={obj.material}
            handle={() => {
              setRendered(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
