const ProductMain = ({ id }: { id: string | string[] | undefined }) => {
  return id && id !== undefined && id !== null ? (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <p>Produk: {id}</p>
      <p style={{ opacity: "50%" }}>Ini adalah Main section</p>
    </section>
  ) : (
    <section
      style={{ padding: "20px", textAlign: "center", backgroundColor: "#3333" }}
    >
      <p style={{ opacity: "50%" }}>Ini adalah Main section</p>
    </section>
  );
};

export default ProductMain;
