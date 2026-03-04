import TampilanProduk from "@/views/produk";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  category: string;
};

const halamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukServer;

// fungsi getServerSideProps akan dieksekusi pada server setiap kali halaman ini diakses, 
// dan akan mengembalikan data produk yang akan diteruskan 
// ke komponen halamanProdukServer sebagai props
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();
  console.log(response);
  return {
    props: {
      products: response.data,
    },
  };
}
