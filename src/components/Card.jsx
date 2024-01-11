import "./Card.css";
import ThirstieFull from "../assets/images/ThirstieFull.png";
export default function Card() {
  return (
    <div>
      <div className="Card">
        <div className="badge_card">
          <p>Onboarding New Customers at Record Speeds</p>
        </div>
        <div className="main_description">
          <p>
            {'"'}Apostrophe Assembly allows us to launch new web storefronts for
            our clients in minutes, with our robust and hyper-compliant API
            technology pre-built. This has improved our customer onboarding
            speed by 10x, as we can now get new brands live faster than ever
            before. Apostrophe has transformed our sales process and our
            customer&apos;s speed to market.{'"'}
          </p>
        </div>
        <div className="sub-description">
          <p>Devaraj Southworth</p>
          <h6>CEO & Co-Founder, Thirstie</h6>
        </div>
        <hr />
        <div className="last_description">
          <div className="section--1">
            <div className="btn">
              <a href="/">Read Thirstie&apos;s Case Study</a>
            </div>
            <div className="svg_tag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 -960 960 960"
                width="80"
              >
                <path
                  d="m695.461-314.463-32.615-31.999 109.847-110.231H140.001v-45.383h633.692L663.462-611.923l31.614-31.999 164.923 164.537-164.538 164.922Z"
                  fill="#1a1a1d"
                />
              </svg>
            </div>
          </div>
          <div className="section--2">
            <div className="logo_tag">
              <img src={ThirstieFull} alt="Thirstie-T" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
