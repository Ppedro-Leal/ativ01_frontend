const Profile = () => {
  let image = "/foto.jpg";
  return (
    <div
      style={{
        width: "100%",
        height: "30vh", 
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img src={image} alt="Pedro Leal" width={260} height={280} />
        <h2 style={{ fontSize: 36}}>Pedro Henrique Leal Amaral</h2>
        <p style={{ fontSize: 20}}>Sou desenvolvedor em formação e adoro programar</p>
        <p style={{ fontSize: 20}}>Gosto de programar WPAs e aprender novas linguagens.</p>
      </div>
    </div>
  );
};

export default Profile;
