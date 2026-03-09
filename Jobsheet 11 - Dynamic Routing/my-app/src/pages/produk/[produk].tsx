import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetcher";
import useSWR from "swr";
import DetailProduk from "@/views/DetailProduk";


const HalamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router);
    const { query } = useRouter();
    const { data, error, isLoading } = useSWR(`/api/produk/${query.produk}`, fetcher);
  return (
  <div>
    <DetailProduk product={isLoading?[]:data.data}/>
 </div>
    );
};

export default HalamanProduk;
