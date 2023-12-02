import styles from "./InputLogin.module.css";
import Image from "next/image";
class InputLoginDTO {
  imgSource?: any | undefined;
  placeholder?: string | undefined;
  register?: any;
  forText?: string;
}

const InputLogin = ({
  imgSource,
  placeholder,
  forText,
  register,
}: InputLoginDTO) => {
  return (
    <div className={styles.input_u_container}>
      <Image
        className={styles.img_input}
        src={imgSource}
        alt="user"
        width={30}
        height={30}
      />
      <input
        className={styles.input_box}
        {...register(forText)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputLogin;
