const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="">
        {" "}
        PhoWeather
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ms-auto" style={{ marginRight: "10rem" }}>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Forecast
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Weather forecast
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Climate forecast
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cta">
              About me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;