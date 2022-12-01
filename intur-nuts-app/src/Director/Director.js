import "./Director.css";
import director from "../Assets/director.jpg";
const Director = () => {
  return (
    <div className="director-conatainer">
      <img src={director} data-aos="fade-right" className="img-director" />
      <h2 data-aos="fade-right">Muhammed Navas k</h2>
      <p data-aos="fade-right" className="director-para">
        Director
      </p>
    </div>
  );
};
export default Director;
