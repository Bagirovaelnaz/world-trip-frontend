import { Link, useNavigate } from "react-router-dom";
import "./header.css"
import About from "../../pages/about/About";
import HelpCenter from "../../pages/help/HelpCenter";
import Premium from "../../pages/premium/Premium";

const Header = () => {
  const navigateLogin = useNavigate();
  const navigateSignUp = useNavigate();

  const handleRoute=()=>{
  navigateLogin("/login")
}
const handleSign=()=>{
navigateSignUp("/signup")
}
  return (
    <div className="nav">
      <div className="icon">
        <span>World<span id="trip">Trip</span></span>
      </div>
      <div className="links">
      <Link to='/about'><About/></Link>
      <Link to='/help'><HelpCenter/></Link>
      <Link to='/premium'><Premium/></Link>
      </div>
      <div className="btns">
      <button className="button-6"  onClick={handleRoute}>Log in</button>
      <button className="button-6"onClick={handleSign} >Sign up</button>
      <span >EN</span>
      </div>
      

    </div>
  );
};

export default Header;
