import "./Header.css";

import apostropheLogo from "../assets/images/apostrophe-logo.png";
export default function Header() {
  return (
    <>
      <header>
        <div className="hero__title row ">
          <img
            className="img-logo"
            src={apostropheLogo}
            srcSet={apostropheLogo}
            alt="apostrophe logo"
          />
          <h1>Apostrophe</h1>
        </div>

        <nav className="nav_bar row">
          <ul className="nav__items row">
            <span>
              <li className="nav__links">Product</li>
            </span>

            <span>
              <li className="nav__links">Developers</li>
            </span>
            <span>
              <li className="nav__links">Success Stories</li>
            </span>
            <span>
              <li className="nav__links">Community</li>
            </span>
            <span>
              <li className="nav__links">Solutions</li>
            </span>
          </ul>

          <div className="nav__items button--primary">
            <p>Try Apostrophe</p>
          </div>
        </nav>
      </header>
    </>
  );
}
