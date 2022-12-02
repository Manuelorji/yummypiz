import Image from "next/image";
import styles from "./Loader.module.scss";

const HomeLoader = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/pizza-loading.gif"
        alt=""
        layout="fill"
        // sizes="(max-width: 780px) 300px,
        // (max-width: 372px) 200px,
        // 33vw"
        // sizes="(max-width: 768px) 100vw,
        //       (max-width: 1200px) 50vw,
        //       33vw"
      />
    </div>
  );
};

export default HomeLoader;
