import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
    id: number;
    name: string;
    price: number;
    size: string;
    category: string;
}

const Kategori = () => {
    // const [isLogin, setIsLogin] = useState(true);
    // const { push } = useRouter();
    const [products, setProducts] = useState([]);

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
            .then((data) => setProducts(data.data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div>
            <h1>Daftar Produk</h1>
            <ul>
                {products.map((products: ProductType) => (
                    <li key={products.id}>
                        {products.name}
                            <li>Harga: {products.price}</li>
                            <li>Ukuran: {products.size}</li>
                            <li>Kategori: {products.category}</li>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Kategori;