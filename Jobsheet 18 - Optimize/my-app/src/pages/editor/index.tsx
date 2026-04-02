const HalamanEditor = () => {
  return (
    <div>
      <div className="editor">
        <h1>Halaman Editor</h1>
        <p>
          Selamat datang di halaman editor! <br /> 
          Halaman ini hanya dapat diakses oleh
          pengguna dengan role "editor". <br /> Jika Anda melihat halaman ini, berarti
          Anda telah berhasil login dengan akun yang memiliki role editor. <br />
        </p>
      </div>
    </div>
  );
};

export default HalamanEditor;
