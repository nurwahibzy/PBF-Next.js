import ProductHero from "@/views/produk/produkHero";
import ProductMain from "@/views/produk/produkMain";

const ProductView = ({ id }: { id: string | string[] | undefined }) => {
    return (
        <div>
            <ProductHero />
            <ProductMain id={id} />
        </div>
    );
};

export default ProductView;