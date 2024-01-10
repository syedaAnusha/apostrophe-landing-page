import "./aboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="aboutUs__section">
        <div className="list--1">
          <p>Product</p>
          <ul>
            <li>Try Apostrophe</li>
            <li>Get Started</li>
            <li>Marketers</li>
            <li>Agencies</li>
            <li>Start-ups</li>
            <li>Wordpress Alternative</li>
          </ul>
        </div>

        <div className="list--2">
          <p>Developers</p>
          <ul>
            <li>Install Apostrophe</li>
            <li>Apostrophe Headless CMS</li>
            <li>Jamstack Ecosystem</li>
            <li>Apostrophe + Gatsby</li>
            <li>Apostrophe + Nuxt</li>
            <li>Apostrophe + Snipcart</li>
          </ul>
        </div>

        <div className="list--3">
          <p>Documentation</p>
          <ul>
            <li>Start a Project</li>
            <li>Technical Overview</li>
            <li>Glossary</li>
            <li>Deployment to production</li>
            <li>Deploy on Docker</li>
            <li>Long Term Support Policy</li>
          </ul>
        </div>

        <div className="list--4">
          <p>Business Solutions </p>
          <ul>
            <li>Apostrophe Assembly</li>
            <li>Book a Demo</li>
            <li></li>
            <li>Apostrophe vs Contentful</li>
            <li>Apostrophe vs Drupal</li>
          </ul>
        </div>
      </div>
      <div className="sub__section--aboutus">
        <div className="list--5">
          <p>About</p>
          <ul>
            <li>About Apostrophe</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    </>
  );
}
