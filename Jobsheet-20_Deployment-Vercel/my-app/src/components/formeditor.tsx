export default function FormEditor() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h3>Area Untuk Menulis Artikel/Produk</h3>
      <textarea rows={10} cols={50} placeholder="Tulis di sini..."></textarea>
      <br />
      <button>Simpan Draft</button>
    </div>
  );
}
