import "./Card.css";
import svg from "components:svg/svg.html";
{
  {
    svg.render({ icon: "instagram" });
  }
}
export default function Card() {
  return (
    <div>
      <div className="Card">
        <div className="badge">
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
          <div className="btn">Read Thirstie&apos;s Case Study</div>
          <div className="img_tag">
            {/* svg.render({ {icon}: 'instagram' }); */}
          </div>
        </div>
      </div>
    </div>
  );
}
