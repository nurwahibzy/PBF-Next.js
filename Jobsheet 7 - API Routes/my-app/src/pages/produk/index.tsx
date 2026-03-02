import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductView from "../../views/produk"; 

const Produk = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { push } = useRouter();

    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, [isLogin, push]); 

    // mencegah rendering sebelum redirect terjadi 
    // agar tidak ada flash dari halaman produk
    if (!isLogin) return null; 

    return <ProductView id={undefined} />;
};

export default Produk;