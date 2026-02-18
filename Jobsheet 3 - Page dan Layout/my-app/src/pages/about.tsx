import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <a href="/">Home</a>
      <h1>Ini adalah halaman about</h1>
      <p>Nama : Nurwahib Zakki Yahya</p>
      <p>NIM : 2341720154</p>
      <p>Program Studi :D4 Teknik Informatika</p>
    </div>
  );
}
