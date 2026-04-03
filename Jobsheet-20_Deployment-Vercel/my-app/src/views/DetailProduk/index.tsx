import { ProductType } from "@/types/product.type";
import styles from "../DetailProduk/detailProduk.module.scss";

const DetailProduk = ({ product }: { product: ProductType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          <img src={product.image || ""} alt={product.name} />
        </div>

        <div className={styles.produkdetail__info}>
          <h1 className={styles.produkdetail__name}>{product.name}</h1>

          <h2 className={styles.produkdetail__price}>
            Rp {product.price ? product.price.toLocaleString("id-ID") : 0}
          </h2>

          <div className={styles.produkdetail__divider}></div>

          <div className={styles.produkdetail__description}>
            <p>
              <strong>Kategori:</strong> {product.category}
            </p>
            <p>
              <strong>Ukuran:</strong> {product.size}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;
