import Image from "next/image";
import styles from "./Loader.module.scss";

const HomeLoader = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/pizza-loading.gif" alt="" width={600} height={600} />
    </div>
  );
};

export default HomeLoader;
