import styles from "@/pages/produk/product.module.scss";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {products.map((product: ProductType) => (
          <div key={product.id} className={styles.produk__content__item}>
            <img src={product.image} alt={product.name} width={200} className={styles.produk__content__item__image} />
            <h4 className={styles.produk__content__item__name}>
              Nama: {product.name}
            </h4>
            <p className={styles.produk__content__item__category}>
              Kategori: {product.category}
            </p>
            <p className={styles.produk__content__item__size}>
              Ukuran: {product.size}
            </p>
            <p className={styles.produk__content__item__price}>
              Rp {product.price.toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TampilanProduk;
