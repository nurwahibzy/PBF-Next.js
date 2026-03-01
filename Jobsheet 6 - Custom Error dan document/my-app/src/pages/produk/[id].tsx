import { useRouter } from "next/router";
// import ProductDetailView from "@/views/produk/produkDetail"; 
import ProductView from "../../views/produk"; 

const HalamanProduk = () => {
    const { query } = useRouter();
    
    return <ProductView id={query.id} />;
};

export default HalamanProduk;