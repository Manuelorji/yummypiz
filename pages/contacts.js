/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import styles from "../styles/pages/Contacts.module.scss";

const Contacts = ({ position = "relative" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>YummyPiz Contacts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.jpg" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.contactsBg}></div>
        <div className={styles.contacts}>
          <div className={styles.contactsList}>
            <h2>Hot Lines:</h2>
            <div>
              Contact us through any of the numbers below to have us deliver
              YummyPiz's products on your door step.
            </div>
            <div className={styles.phoneNumber}>
              <Image
                src="/images/incoming-call.png"
                alt=""
                width={18}
                height={18}
              />
              <span>+2348160441314</span>
            </div>
            <div className={styles.phoneNumber}>
              <Image
                src="/images/incoming-call.png"
                alt=""
                width={18}
                height={18}
              />
              <span>+2348160441314</span>
            </div>
            <div className={styles.phoneNumber}>
              <Image
                src="/images/incoming-call.png"
                alt=""
                width={18}
                height={18}
              />
              <span>+2348160441314</span>
            </div>
          </div>
        </div>
      </main>
      <Footer position="static" />
    </div>
  );
};

export default Contacts;
