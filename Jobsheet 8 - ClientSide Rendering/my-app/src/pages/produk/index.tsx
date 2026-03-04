import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "@/views/produk";

const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(true);
  // const { push } = useRouter();

  // state untuk menyimpan data produk yang diambil dari API
  const [products, setProducts] = useState([]);

  // state untuk menandakan apakah data sedang dimuat atau tidak

  // useEffect(() => {
  //     if (!isLogin) {
  //         push("/auth/login");
  //     }
  // }, [isLogin, push]);

  // // mencegah rendering sebelum redirect terjadi
  // // agar tidak ada flash dari halaman Kategori
  // if (!isLogin) return null;

  useEffect(() => {
    fetch("/api/produk")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <TampilanProduk products={products} />
    </div>
  );
};
export default Kategori;
