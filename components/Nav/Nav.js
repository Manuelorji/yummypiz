import Link from "next/link";
import styles from "./Nav.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppContext } from "../../utils/AppContext";

const Nav = ({ position = "absolute" }) => {
  const router = useRouter();
  const { cart } = useAppContext();
  // console.log(router);

  const navLinks = [
    {
      name: "Home",
      pathName: "/",
      id: "1",
    },
    {
      name: "Menu",
      pathName: "/menu",
      id: "2",
    },
    {
      name: "Contacts",
      pathName: "/contacts",
      id: "3",
    },
    {
      name: "About us",
      pathName: "/about",
      id: "4",
    },
    {
      name: <Image src="/images/cart.png" alt="" width={20} height={20} />,
      pathName: "/cart",
      id: "5",
    },
  ];

  return (
    <nav style={{ position: position }} className={styles.nav}>
      <div className={styles.logo}>
        <span>YummyPiz</span>
      </div>
      <div className={styles.navLinks}>
        {navLinks.map((navLink) => (
          <Link key={navLink.id} href={navLink.pathName}>
            <div
              className={
                router.pathname === navLink.pathName
                  ? `${styles.navLink} ${styles.active}`
                  : `${styles.navLink}`
              }
            >
              {navLink.name}
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.cartNumber}>{cart.length}</div>
    </nav>
  );
};

export default Nav;
