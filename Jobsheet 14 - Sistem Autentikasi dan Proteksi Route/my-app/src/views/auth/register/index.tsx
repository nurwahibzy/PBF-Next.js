import Link from "next/link";
import styles from "./register.module.scss";

const halamanRegister = () => {
  return (
    <div className={styles.register}>
      <h1 className="text-3xl font-bold text-blue-600">Halaman Register</h1>
      <br />
      {/* menambahkan link ke halaman login */}
      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default halamanRegister;
