import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end "
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={logo} alt="logo" />
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body slide-nav">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item" style={{ textAlign: "right" }}>
                  <Link className="nav-link active border-bottom" to="/">
                    آغاز
                  </Link>
                  <Link className="nav-link border-bottom" to="/more-detail">
                    بابت
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn search-btn" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
