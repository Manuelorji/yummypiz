import React, { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "/styles/pages/cart.module.scss";
import { items } from "../db/items";
import { useState, useref } from "react";
import { useAppContext } from "../utils/AppContext";
import Nav from "../components/Nav/Nav";

const CartList = () => {
  const { cart, removeItemFromCart, increaseCartItemQty, decreaseCartItemQty } =
    useAppContext();

  // const cartList = useRef();

  // const [qty, setQty] = useState();

  // const increaseCount = () => {
  //   setQty(qty + 1);
  // };

  // const decreaseCount = () => {
  //   if (qty === 1) return;
  //   setQty(qty - 1);
  // };

  const totalPrice = cart.reduce((a, b) => a + b.qty * b.price, 0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.jpg" />
      </Head>
      <Nav />

      <div className={styles.list}>
        {cart.length === 0 ? (
          <h3>Empty Cart</h3>
        ) : (
          cart.map((cartItem) => (
            <div key={cartItem.id} className={styles.item}>
              <Image src={cartItem.src} alt="" width={30} height={30} />
              <span>{cartItem.title}</span>
              <div className={styles.qty}>
                <button
                  onClick={() => decreaseCartItemQty(cartItem.id)}
                  className={styles.qtyBtn}
                >
                  -
                </button>
                <span>{cartItem.qty}</span>
                <button
                  onClick={() => increaseCartItemQty(cartItem.id)}
                  className={styles.qtyBtn}
                >
                  +
                </button>
              </div>
              <span>
                <b>unit price:</b> (${cartItem.price})
              </span>
              <span>
                <b>price:</b> ${cartItem.price * cartItem.qty}
              </span>

              <button
                onClick={() => removeItemFromCart(cartItem.id)}
                className={styles.delBtn}
              >
                x
              </button>
            </div>
          ))
        )}
        {cart.length !== 0 && (
          <div className={styles.total}>
            <div className={styles.totalPrice}>
              <span>Total Price:</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <div className={styles.totalBtn}>
              <button>Continue</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartList;