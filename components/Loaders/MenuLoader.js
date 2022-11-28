import Image from "next/image";
import styles from "./Loader.module.scss";

const MenuLoader = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/pizza-box-order.gif"
        alt=""
        width={600}
        height={600}
      />
    </div>
  );
};

export default MenuLoader;
