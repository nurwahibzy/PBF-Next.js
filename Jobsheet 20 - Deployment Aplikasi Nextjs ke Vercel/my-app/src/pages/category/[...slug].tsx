import { useRouter } from "next/router";

const HalamanKategori = () => {
  const { query } = useRouter();

  // Memisahkan 'slug' dari parameter query lainnya
  const { slug, ...queryParams } = query;

  return (
    <div>
      <h1>Halaman Kategori</h1>
      <br />

      <ul>
        {/* menampilkan slug di baris paling atas */}
        {slug && (
          <li>
            <strong>slug:</strong>{" "}
            {Array.isArray(slug) ? slug.join(" - ") : slug}
          </li>
        )}

        {/* menampilkan parameter setelahnya di baris selanjutnya  */}
        {Object.entries(queryParams).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HalamanKategori;
