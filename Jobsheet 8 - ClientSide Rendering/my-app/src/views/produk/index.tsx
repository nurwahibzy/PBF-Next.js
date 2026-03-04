import styles from "@/pages/produk/product.module.scss";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  category: string;
};

const TampilanProduk = ({ products, isLoading }: { products: ProductType[]; isLoading: boolean }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {isLoading ? (
          [1, 2, 3, 4].map((item) => (
            <div key={item} className={styles.produk__content__item}>
              <div className={styles.produk__content__item__image}></div>
              <div className={styles.produk__content__item__name}></div>
              <div className={styles.produk__content__item__category}></div>
              <div className={styles.produk__content__item__size}></div>
              <div className={styles.produk__content__item__price}></div>
            </div>
          ))
        ) : products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <div key={product.id} className={styles.produk__content__item}>
                <img
                  src={product.image}
                  alt={product.name}
                  width={200}
                  className={styles.produk__content__item__image}
                />
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
            ))}{" "}
          </>
        ) : (
          <p>Produk tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;
