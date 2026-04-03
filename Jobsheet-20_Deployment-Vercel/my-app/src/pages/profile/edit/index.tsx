const EditProfile = () => {
  return (
    <main>
      <h1>Edit Profile</h1>
      <form action="" method="post">
        <div>
          <br />
          Nama{" "}
          <input
            style={{ marginLeft: "5rem" }}
            type="text"
            defaultValue="Nurwahib Zakki Yahya"
          />
          <br />
          Program Studi{" "}
          <input
            style={{ marginLeft: "2rem" }}
            type="text"
            defaultValue="D4 Teknik Informatika"
          />
        </div>
        <br />
        <button type="submit">Kirim</button>
      </form>
    </main>
  );
};

export default EditProfile;
