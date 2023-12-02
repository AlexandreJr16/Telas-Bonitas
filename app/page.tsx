"use client";
import Image from "next/image";
import styles from "./page.module.css";
import logoImg from "../public/logo.svg";
import InputLogin from "@/components/InputLogin/InputLogin";
import userImg from "../public/user 1.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import lockImg from "../public/lock 1.svg";
import Link from "next/link";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    //Se tivesse o backend seria aqui que faria o post pra login
  };
  return (
    <main className={styles.main}>
      <div className={styles.side_carrousel}></div>
      <div className={styles.side_input}>
        <Image
          width={29}
          height={32}
          src={logoImg}
          alt={""}
          className={styles.imgLogo}
        />
        <div className={styles.text_container}>
          <h1 className={styles.title}>Bem-vindo!</h1>
          <h2 className={styles.subtitle}>Acesse a sua conta:</h2>
        </div>
        <form
          className={styles.input_container}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputLogin
            register={register}
            imgSource={userImg}
            placeholder={"example@gmail.com"}
            forText={"email"}
          ></InputLogin>
          <InputLogin
            register={register}
            imgSource={lockImg}
            placeholder={"senha123"}
            forText={"senha"}
          ></InputLogin>
          <p className={styles.forgetString}>
            Esqueceu a senha?
            <strong className={styles.forgetStringBlue}> Clique aqui.</strong>
          </p>
          <Link href={"/home"} className={styles.width100}>
            <input type="submit" value={"Entrar"} className={styles.button} />
          </Link>
        </form>
      </div>
    </main>
  );
}
