/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import styles from "../styles/pages/About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About YummyPiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.jpg" />
      </Head>
      <Nav />
      <main>
        <p>
          <strong>Handy Info: </strong>
          Pizza is an amazingly popular food around the world consisting
          typically of a flattened bread dough spread with a savory mix of
          ingredients including tomato sauce and cheese, along with other
          toppings. Pizza is a very festive dish that is best shared amongst
          loved ones. It is perfect for every occasions, be in the business
          lunch delivery, the kids birthday celebration in the restaurant or the
          perfect date night spot. YummyPiz's Pizza is the leading pizza
          restaurant in Nigeria providing exceptional Pizza delivery and dine in
          service.
          <br /> YummyPiz's Pizzza (region): YummyPiz's Pizza served over 500
          million pizzas last year worldwide. Our delivery people drive more
          than 10 million miles every week to bring you the best pizza we can
          make. We operate over 11,000 pizza places in more than 80 countries
          dedicated to providing great tasting pizza for carryout or delivered
          to your door. How did we become such a powerhouse of pizza delivery?
          Let's look. YummyPiz's Pizzza History From humble beginnings as a
          single pizza restaurant in 1960, founded by two visionary brothers,
          YummyPiz's Pizza today has become the recognized world leader in pizza
          delivery. Eat’N’Go Limited is the master franchisor behind Domino’s
          Pizza Nigeria. The company was founded in 2012 in Nigeria and was the
          first company to bring world class pizza into Nigeria. At Domino’s
          Pizza Nigeria we have been dedicated to making and delivering great
          pizza with high quality ingredients from the start. <br />
          In addition, we are constantly updating and improving our pizza menu.
          Beyond pioneering the concept of efficient delivery of made-to-order
          pizzas, we have been part of innovations that have made a significant
          impact on the entire food delivery industry: YummyPiz's Pizza (Global)
          pioneered patented insulating pizza bags to keep pizzas oven-hot and
          crisp during normal delivery. YummyPiz's (Pizza Global) created the
          sturdy, corrugated pizza box, which keeps moisture from weakening the
          box and cheese from sticking to the top. Beyond Pizza Delivery
          YummyPiz's USA launched online pizza ordering in 2007, and in 2008
          revolutionized the online delivery experience by launching the
          innovative Pizza Builder and YummyPiz's Tracker tools.
          <br /> In 2018, Domino’s Pizza Nigeria launched www.dominos.ng, which
          is the first online ordering platform of its kind in the country. The
          Domino’s Pizza Nigeria site has Pizza Builder which is a step forward
          in ordering food online , allowing customers to see their pizza come
          to life on the computer screen, while YummyPiz's Tracker is an
          innovation in food delivery, allowing customers to follow the progress
          of the order from the time it's placed until they receive it. We also
          added pizza offers and promos to the website in order to provide even
          more value to our customers. Our innovations simply help us get better
          at what we love to do most: deliver great pizza to your door,
          efficiently and enthusiastically! Not Just Pizza YummyPiz's Pizza
          Nigeria offers freshly made hand tossed crust, Italian thin crusts or
          Premium Pan crust with a wide variety of toppings such as our very own
          Chicken Suya. Side items include breads such as our Cheesy Bread,
          Choco Pocket, and also Potato Wedges, Chicken Wings & Chicken Kickers.
          We also proudly serve icy cold Coca-Cola® products.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
