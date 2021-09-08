import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, DOMAttributes } from "react";
import styles from "../styles/Home.module.css";
import { MessagePortal } from "../components/MessagePortal";
import { MessageBasic } from "../components/MessageBasic";
import { MessageHeadlessui } from "../components/MessageHeadlessui";

const Home: NextPage = () => {
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);

  const handleModal1Click: DOMAttributes<HTMLButtonElement>["onClick"] = () => {
    setOpen1(true);
  };
  const handleModal1Close: DOMAttributes<HTMLButtonElement>["onClick"] = () => {
    setOpen1(false);
  };
  const handleModal2Click: DOMAttributes<HTMLButtonElement>["onClick"] = () => {
    setOpen2(true);
  };
  const handleModal2Close: DOMAttributes<HTMLButtonElement>["onClick"] = () => {
    setOpen2(false);
  };
  const handleModal3Click: DOMAttributes<HTMLButtonElement>["onClick"] = () => {
    setOpen3(true);
  };
  const handleModal3Close = () => {
    setOpen3(false);
  };
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.modalFrame}>
            <button className={styles.button} onClick={handleModal1Click}>
              モーダル画面(portal)起動
            </button>
            <button className={styles.button} onClick={handleModal2Click}>
              モーダル画面起動
            </button>
            <button className={styles.button} onClick={handleModal3Click}>
              モーダル画面(headless-ui)起動
            </button>
          </div>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
      <MessagePortal open={open1} onClick={handleModal1Close} />
      <MessageBasic open={open2} onClick={handleModal2Close} />
      <MessageHeadlessui open={open3} onClick={handleModal3Close} />
    </>
  );
};

export default Home;
