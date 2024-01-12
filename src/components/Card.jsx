import "./Card.css";
import PropTypes from "prop-types";
export default function Card(props) {
  return (
    <div>
      <div className="Card">
        <div className="badge_card">
          <p>{props.Title}</p>
        </div>
        <div className="main_description">
          <p>{props.Description}</p>
        </div>
        <div className="sub-description">
          <p>{props.PersonName}</p>
          <h6>{props.Designation}</h6>
        </div>
        <hr />
        <div className="last_description">
          <div className="section--1">
            <div className="btn">
              <a href="/">{props.Link}</a>
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
              <img src={props.Image} alt="Thirstie-T" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  PersonName: PropTypes.string,
  Designation: PropTypes.string,
  Link: PropTypes.string.isRequired,
  Image: PropTypes.string.isRequired,
};
