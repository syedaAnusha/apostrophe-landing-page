import "./HeroSection.css";
import mainImg from "../assets/images/main-body-image.svg";

export default function HeroSection() {
  return (
    <>
      <figure>
        <img src={mainImg} alt="hero-image" className="hero__img" />
        <div className="hero__section">
          <h1>The open source website builder for your business.</h1>
          <p>
            Apostrophe Assembly is a powerful and flexible website builder
            platform for digital agencies, SaaS companies, higher education,
            enterprise, and more.
          </p>
          <div className="hero__btn">Try Apostrophe</div>
          <div className="hero__btn--small">Book a Demo</div>
        </div>
      </figure>
    </>
  );
}
