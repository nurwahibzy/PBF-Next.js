import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";

const halamanLogin = () => {
  const { push } = useRouter();
  const handlerLogin = () => {
    // logic login disini
    push("/produk");
  };
  return (
    <div className={styles.login}>
      <h1>Halaman Login</h1>
      <br />
      <button onClick={() => handlerLogin()}>login</button>
      <br />
      <h1
        style={{
          color: "red",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        Belum Punya Akun?
      </h1>
      <br />
      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
};

export default halamanLogin;
