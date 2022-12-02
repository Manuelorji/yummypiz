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
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.cartIcon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      ),

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
