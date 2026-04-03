import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const AboutPage = () => {
  return (
    <div>
      <a href="/">Home</a>
      <h1 data-testid="title">Ini adalah halaman about</h1>
      <p>Nama : Nurwahib Zakki Yahya</p>
      <p>NIM : 2341720154</p>
      <p>Program Studi :D4 Teknik Informatika</p>
    </div>
  );
}
export default AboutPage
