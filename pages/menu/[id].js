/* eslint-disable react/no-unescaped-entities */
// import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../../styles/pages/DetailPage.module.scss";
import Image from "next/image";
import Nav from "../../components/Nav/Nav";
import { useRouter } from "next/router";
import { items } from "../../db/items";
import { useAppContext } from "../../utils/AppContext";

const DetailPage = ({ item }) => {
  const { cart, addItemToCart, removeItemFromCart } = useAppContext();

  const router = useRouter();
  const [qty, setQty] = useState(1);

  const increaseCount = () => {
    setQty(qty + 1);
  };

  const decreaseCount = () => {
    if (qty === 1) return;
    setQty(qty - 1);
  };

  const isAdded = cart.find((cartItem) => cartItem.id === item.id);

  return (
    <div className={styles.container}>
      <Nav />
      <main>
        <div className={styles.productContainer}>
          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image src={item.src} alt="" layout="fill" />
            </div>

            <div className={styles.productDetail}>
              <h3>{item.title}</h3>
              <span className={styles.price}>${item.price}</span>
              <p>{item.description}</p>
              {!isAdded && (
                <div className={styles.qty}>
                  Quantity:
                  <button
                    onClick={() => decreaseCount()}
                    className={styles.qtyBtn}
                  >
                    -
                  </button>
                  <span>{qty < 10 ? `0${qty}` : qty}</span>
                  <button
                    onClick={() => increaseCount()}
                    className={styles.qtyBtn}
                  >
                    +
                  </button>
                </div>
              )}

              {!isAdded ? (
                <button
                  onClick={() => addItemToCart(item, qty)}
                  className={styles.cartBtn}
                >
                  Add to cart
                </button>
              ) : (
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className={styles.selectedCartBtn}
                >
                  Remove from cart
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={styles.detailpageBgImg}></div>
      </main>
    </div>
  );
};

export default DetailPage;

export const getStaticPaths = async () => {
  const paths = items.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const data = items.find((item) => item.id == id);

  return {
    props: { item: data },
  };
};
