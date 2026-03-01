import styles from "../styles/404.module.scss";
import Head from "next/head";
import Link from "next/link";
const Custom404 = () => {
  return (
    <div className={styles.error}>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta
          name="description"
          content="Maaf, halaman yang Anda cari tidak tersedia."
        />
      </Head>
      <img src="/404.jpg" alt="404" className={styles.error__image} />
      <h1>404</h1>
      <h2>Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang Anda cari tidak ada.</p>
      <Link href="/" className={styles.error__button}>
        Kembali ke Home
      </Link>
    </div>
  );
};
export default Custom404;
