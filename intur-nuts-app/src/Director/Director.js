import "./Director.css";
import director from "../Assets/director.jpg";
import { Grid } from "@mui/material";
const Director = () => {
  return (
    <div className="director-conatainer">
      {" "}
      <p style={{ paddingBottom: 20 }}>For More Information, Connect with,</p>
      <Grid
        spacing={3}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <img src={director} data-aos="fade-right" className="img-director" />
        </Grid>
        <Grid item>
          <h2 data-aos="fade-right" className="firstname">
            Muhammed{" "}
          </h2>
          <h1 data-aos="fade-right" className="secondname">
            Navas k
          </h1>
          <p data-aos="fade-right" className="director-para">
            Director, Internutz Confectioneres <hr className="hr-director" />
            <p className="phone">Ph: 9400027666</p>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default Director;
