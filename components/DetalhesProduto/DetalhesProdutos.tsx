import styles from "./DetalhesProdutos.module.css";
import Image from "next/image";

type DetalhesProdutosORM = {
  img: any;
  title: string;
  description: string;
  empresa: string;
  tipo: string;
  material: string;
  handle: any;
};

const DetalhesProdutos = (dto: DetalhesProdutosORM) => {
  return (
    <div className={styles.card}>
      <div className={styles.back_box}>
        <p onClick={dto.handle} className={styles.back}>
          X
        </p>
      </div>
      <Image
        width={300}
        height={300}
        className={styles.Imagem}
        src={dto.img}
        alt={dto.title}
      />
      <div className={styles.text_side}>
        <div className={styles.header_text}>
          <h2 className={styles.header_title}>{dto.title}</h2>
          <p className={styles.header_subtitle}>{dto.empresa}</p>
          <p className={styles.header_like_that}>S2</p>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum
          officia explicabo ex, rerum optio, eaque eos, omnis hic quasi quo quia
          quam! Harum odit beatae perferendis libero, amet dicta. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Harum nesciunt laudantium
          unde earum deserunt, fuga consequuntur fugit commodi esse, cupiditate
          alias eos quia molestias labore quod? Necessitatibus aut maxime nobis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          perspiciatis iusto impedit nulla quae non illum excepturi. Laboriosam
          explicabo harum fugit animi corrupti consequuntur maxime? Ad ipsa
          dolores sit consequuntur.
        </p>
        <div className={styles.info_moveis}>
          <div className={styles.div_info_movel}>
            <label className={styles.subtitle_info}>Tipo de nivel</label>
            <p className={styles.info_box}>{dto.tipo}</p>
          </div>
          <div className={styles.div_info_movel}>
            <label className={styles.subtitle_info}>Tamanho:</label>
            <div className={styles.div_info_moveles}>
              <p className={styles.info_box}>2m</p>{" "}
              <p className={styles.info_box}>0.5m</p>
            </div>
          </div>
          <div className={styles.div_info_movel}>
            <label className={styles.subtitle_info}>Material</label>
            <p className={styles.info_box}>{dto.material}</p>
          </div>
        </div>
        {/* <div>
          <div>
            <p>4,0</p>
            <h3>Avaliação do cliente Antonio Lucas</h3>
          </div>
          <p>
            Eu sinceramente odiei o produto de péssima qualidade, entrega
            demorada e um péssimo atendimento. Eu não recomendo isso para nem
            meu maior inimigo, porque ninguem é merecedor da escória dos móveis
            planejados que é este produto
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default DetalhesProdutos;
