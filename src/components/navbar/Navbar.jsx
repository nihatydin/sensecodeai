import {useNavigate} from "react-router-dom";
import {useRef} from "react";
import "./Navbar.css";
import PageContainer from "../container/PageContainer";

function Navbar() {
  const nav = useRef();

  const navigate = useNavigate();
  const mobileOpenMenu = useRef();
  const mobileCloseMenu = useRef();
  const mobileNavbarRight = useRef();
  const navbar = useRef();
  const mobileOpenMenuF = () => {
    mobileOpenMenu.current.style.display = "none";
    mobileCloseMenu.current.style.display = "block";

    if (mobileCloseMenu.current.style.display == "block") {
      mobileNavbarRight.current.style.display = "block";
      navbar.current.style.display = "none";
    } else {
      mobileNavbarRight.current.style.display = "none";
      navbar.current.style.display = "flex";
    }
  };
  const mobileCloseMenuF = () => {
    mobileOpenMenu.current.style.display = "block";
    mobileCloseMenu.current.style.display = "none";

    if (mobileCloseMenu.current.style.display == "block") {
      mobileNavbarRight.current.style.display = "block";
    } else {
      mobileNavbarRight.current.style.display = "none";
      navbar.current.style.display = "flex";
    }
  };

  return (
    <>
      <div ref={nav} className="navbar">
        <PageContainer>
          <div className="navbar-container" ref={navbar}>
            <div className="navbar-left">
              <img
                className="logo-img"
                src="https://sensecode.yildiz.edu.tr/assets/images/icons/logo.png"
                alt=""
                onClick={() => navigate("/")}
              />
            </div>
            <div className="navbar-right">
              <ul>
                <li onClick={() => navigate("/")}> Home</li>
                <li onClick={() => navigate("/about/")}> About</li>
                <li onClick={() => navigate("/activities/")}>Activites</li>
                <li onClick={() => navigate("/contact/")}>Contact</li>
              </ul>
            </div>
            <div
              className="mobile-open-menu"
              ref={mobileOpenMenu}
              onClick={mobileOpenMenuF}
            >
              E
            </div>
          </div>
          <div className="mobile-navbar" ref={mobileNavbarRight}>
            <div
              className="mobile-close-menu"
              ref={mobileCloseMenu}
              onClick={mobileCloseMenuF}
            >
              X
            </div>
            <div>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}

export default Navbar;
