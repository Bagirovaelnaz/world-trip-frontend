import { Link } from "react-router-dom";
import "./explore.css";
const Explore = () => {
  return (
    <div className="all-section">
      <h1>
        Good morning, <span id="david">David</span>.
      </h1>
      <span id="s1">Lets organize the best travel for your vacation!</span>
      <div className="personal">
        <div>
          <span id="personal">David Mason</span>
          <p>davedaving</p>
        </div>
        <img
          id="img-david"
          src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg"
          alt="david"
        />
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="icon-container">
        <div className="icon-box">
          <img src="sekil1.jpg" alt="Flights" />
          <div className="overlay">Flights</div>
        </div>
        <div className="icon-box">
          <img src="sekil2.jpg" alt="Car" />
          <div className="overlay">Car</div>
        </div>
        <div className="icon-box">
          <img src="sekil3.jpg" alt="Cruise" />
          <div className="overlay">Cruise</div>
        </div>
        <div className="icon-box">
          <img src="sekil4.jpg" alt="Train" />
          <div className="overlay">Train</div>
        </div>
        <img
          id="kalendar"
          src="https://m.media-amazon.com/images/I/61OsaOwm6VL.jpg"
          alt="sekil"
        />
      </div>
      <div className="flags">
        <button className="button-38">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/640px-Flag_of_Azerbaijan.svg.png"
            alt="aze"
          />
          Azerbaijan
        </button>
        <button className="button-38">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
            alt=""
          />{" "}
          Italy
        </button>
        <button className="button-38">
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0G8aE5AoGDOQMJGd8fcrO5rZOWWvrAVKUw&s"
            alt=""
          />{" "}
          Turkiye
        </button>
        <button className="button-38">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg"
            alt=""
          />{" "}
          USA
        </button>
        <button className="button-38">
          {" "}
          <img
            src="https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg"
            alt=""
          />{" "}
          France
        </button>
        <button className="button-38">
          {" "}
          <img
            src="https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg"
            alt=""
          />{" "}
          Spain
        </button>
        <button className="button-38">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png"
            alt=""
          />{" "}
          Brazil
        </button>
      </div>
      <div className="sidebar">
        <i className="fa-regular fa-calendar-days"></i>
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link to="/ai">
        <i className="fa-solid fa-circle-plus"></i>
        </Link>
        
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-ticket"></i>
      </div>
      <h1 id="yalniz">Discover Hidden Gems</h1>
      <div className="container">
        <div className="hidden-gems">
          <div className="gem">
            <div className="info-container">
              <h2>
                A Perfect <span className="highlight">Beach Escape</span>
              </h2>
              <p>
                Escape to Spains captivating coasts, where turquoise waters kiss
                golden shores. Discover your dream vacation in Spains coastal
                haven.
              </p>
              <button className="button-22" role="button">
                See Plan <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <img src="beach.jpg" alt="A Perfect Beach Escape" />
          </div>
          <div className="gem">
            <img src="img2.jpg" alt="Evenings in Alsace" />
            <div className="info-container">
              <h2>
                Evenings in <span className="highlight">Alsace</span>
              </h2>
              <p>
                Colmar offers an unforgettable journey filled with history,
                romance, and enchantment. Your dream adventure awaits!
              </p>
              <button className="button-22" role="button">
                See Plan <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="gem">
            <div className="info-container">
              <h2>
                Istanbuls <span className="highlight">Coastal Jewel</span>
              </h2>
              <p>
                Our planner guides you through the neighborhood for an
                unforgettable adventure to Arnavutköy, Turkiye.
              </p>
              <button className="button-22" role="button">
                See Plan <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <img src="istanbul.jpg" alt="Istanbul's Coastal Jewel" />
          </div>
        </div>
        <div className="friends">
          <hr />
          <p>Friends</p>
        
          <div id="spanlar">
          <img
            id="friends-img"
            src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"
            alt=""
          />
            <span>John Septimus</span>
          </div>
          <br />
       
          <div id="spanlar">
          <img
            id="friends-img"
            src="https://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
            alt=""
          />
            {" "}
            <span>Emery Dotte</span>
          </div>
          <hr />
          <p>You may also know</p>
      
          <div id="spanlar">
          <img
            id="friends-img"
            src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
            alt=""
          />
            {" "}
            <span>Erin Carder</span>
          </div>
          <br />
        
          <div id="spanlar">
          <img
            id="friends-img"
            src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/avatar/avatar-1.png"
            alt=""
          />
          <span>Kaiya Norm</span>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Explore;
