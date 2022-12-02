import Image from "next/image";
import styles from "./Loader.module.scss";

const MenuLoader = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/pizza-box-order.gif" alt="" layout="fill" />
    </div>
  );
};

export default MenuLoader;
