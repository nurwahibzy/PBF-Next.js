import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetcher";
import useSWR from "swr";
import DetailProduk from "@/views/DetailProduk";
import { ProductType } from "@/types/product.type";

const HalamanProduk = ({ product }: { product: any }) => {
  // const Router = useRouter();
  // console.log(Router);

  {
    / digunakan untuk client side rendering/;
  }
  //     const { query } = useRouter();
  //     const { data, error, isLoading } = useSWR(`/api/produk/${query.produk}`, fetcher);
  //   return (
  //   <div>
  //     <DetailProduk product={isLoading?[]:data.data}/>
  //  </div>
  //     );

  return (
    <div>
      <DetailProduk product={product} />
    </div>
  );
};

export default HalamanProduk;

// fungsi getServerSideProps akan dieksekusi di server setiap kali halaman ini diakses, 
// dan akan mengambil data produk dari API sebelum halaman dirender. 
// Data produk yang diambil akan dikirim sebagai props ke komponen HalamanProduk.
// digunakan untuk server side rendering
export async function getServerSideProps({
  params,
}: {
  params: { produk: string };
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.produk}`);
  const data = await res.json();
  return {
    props: {
      product: data.data,
    },
  };
}
