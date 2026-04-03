import styles from "../styles/404.module.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
      {/* optimasi img menggunakan next/image */}
      <Image
        src="/404.jpg"
        alt="404"
        className={styles.error__image}
        width={400}
        height={200}
      />
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
