import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(true);
  // const { push } = useRouter();

  // state untuk menyimpan data produk yang diambil dari API
  const [products, setProducts] = useState<ProductType[]>([]);

  // state untuk menandakan apakah data sedang dimuat atau tidak
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //     if (!isLogin) {
  //         push("/auth/login");
  //     }
  // }, [isLogin, push]);

  // // mencegah rendering sebelum redirect terjadi
  // // agar tidak ada flash dari halaman Kategori
  // if (!isLogin) return null;

  const fetchProducts = async () => {
    setIsLoading(true);
    fetch("/api/produk")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <button
        onClick={fetchProducts}
        disabled={isLoading}
        style={{ marginBottom: "10px", padding: "5px 10px", cursor: "pointer" }}
      >
        Refresh
      </button>
      <ul>
        {products.map((product: ProductType) => (
          <li key={product.id}>
            {product.name}
            <ul>
              <li>Harga: {product.price}</li>
              <li>Ukuran: {product.size}</li>
              <li>Kategori: {product.category}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Kategori;
