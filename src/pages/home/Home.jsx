import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/explore");
  };
  return (
    <div className="home-section">
      <div className="all-yazi">
        <h1 className="yazi-1">
          Embark on the Ultimate Adventure <br /> with WorldTrip: <br />
          Your Ticket to a <span id="yasil">Global Journey</span>!
        </h1>
        <span id="yazi-2">
          Effortlessly orchestrate travel plans with our intuitive <br />{" "}
          platform for an expeditious and hassle-free <br /> experience.
        </span>
        <button className="button-22" onClick={handleRoute} >
          Explore
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
