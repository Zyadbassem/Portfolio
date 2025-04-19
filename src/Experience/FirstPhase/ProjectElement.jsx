function ProjectElement({
  mainImg = "wheretowatchthisapp.png",
  title = "Where to Watch This",
  description = `Where to watch this is an app built in my free time. the user enters a
tv show / movie title and it shows them the streaming services that
has this title. simple but useful and i used watch mode api for this
app`,
  link = "https://wheretowatchthis.vercel.app/",
  techImage1 = "htmllogo.png",
  techImage2 = "jslogo.png",
  techImage3 = "threelogo.png",
  techImage4 = "htmllogo.png",
}) {
  return (
    <a
      href={link}
      target="_blank"
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "start",
        width: "450px",
        height: "90px",
        gap: "10px",
        alignItems: "center",
        textDecoration: "none",
        border: "#FFFFFF 1px solid",
        borderRadius: "5px",
        margin: "10px",
        transition: "transform 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <img
        src={`/project_assets/${mainImg}`}
        style={{
          width: "140px",
          height: "75px",
          borderRadius: "5px",
          border: "#5DF2FF 1px solid",
        }}
      />
      <div style={{ color: "white", margin: "2px", maxWidth: "150px" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "10px" }}>{title}</h2>
        <p style={{ fontWeight: "lighter", fontSize: "8px" }}>{description}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          marginLeft: "auto",
        }}
      >
        <div>
          <img
            src={`/project_assets/logos/${techImage1}`}
            style={{ width: "35px", hweight: "25px", margin: "5px" }}
          />
          <img
            src={`/project_assets/logos/${techImage2}`}
            style={{ width: "35px", hweight: "25px", margin: "5px" }}
          />
        </div>
        <div>
          <img
            src={`/project_assets/logos/${techImage3}`}
            style={{ width: "35px", hweight: "25px", margin: "5px" }}
          />
          <img
            src={`/project_assets/logos/${techImage4}`}
            style={{ width: "35px", hweight: "25px", margin: "5px" }}
          />
        </div>
      </div>
    </a>
  );
}

export default ProjectElement;
