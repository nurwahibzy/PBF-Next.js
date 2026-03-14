import styles from "@/pages/produk/product.module.scss";
import Link from "next/link";

type ProductType = {
  id: string;
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
        {products && products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <Link
                key={product.id}
                href={`/produk/${product.id}`}
                className={styles.produk__content__item}
              >
                <div className={styles.produk__content__item__image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.produk__content__item__info}>
                  <h4 className={styles.produk__content__item__name}>
                    {product.name}
                  </h4>
                  <p className={styles.produk__content__item__price}>
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                  <p className={styles.produk__content__item__category}>
                    {product.category} • Size: {product.size}
                  </p>
                </div>
              </Link>
            ))}
          </>
        ) : (
          /* Render beberapa skeleton agar terlihat seperti grid */
          Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className={styles.produk__content__skeleton}>
              <div className={styles.produk__content__skeleton__image}></div>
              <div className={styles.produk__content__skeleton__info}>
                <div className={styles.produk__content__skeleton__name}></div>
                <div className={styles.produk__content__skeleton__name_short}></div>
                <div className={styles.produk__content__skeleton__price}></div>
                <div className={styles.produk__content__skeleton__category}></div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;