const ProductMain = ({ id }: { id: string | string[] | undefined }) => {
  // return id && id !== undefined && id !== null ? (
  // Kondisi tersebut bisa disederhanakan menjadi id saja
  return id ? (
    <section className="p-5 text-center">
      <p className="text-lg font-medium">Produk: {id}</p>
      <p className="opacity-50 mt-2">Ini adalah Main section</p>
    </section>
  ) : (
    <section className="p-5 text-center bg-black/20">
      <p className="opacity-50">Ini adalah Main section</p>
    </section>
  );
};

export default ProductMain;
