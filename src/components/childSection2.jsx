import "./childSection2.css";
import sideImage from "../assets/images/apostrophe-sideImage.svg";

export default function ChildSection2() {
  return (
    <>
      <main>
        <div className="img__Section">
          <img src={sideImage} alt="Apostrophe-Assembly" />
        </div>
        <div className="list__section">
          <ul>
            <li>
              <p>
                Drag & drop in-context live editing that empowers editors to
                make changes in real time
              </p>
            </li>
            <li>
              <p>
                Visual design tools that allow for dynamic styling while
                maintaining brand guidelines
              </p>
            </li>
            <li>
              <p>
                One click to add a new website propelling your speed to market
                by 10x
              </p>
            </li>
            <li>
              <p>
                Integrate your tech with native modules and flexible content
                APIs
              </p>
            </li>
            <li>
              <p>One dashboard to oversee it all</p>
            </li>
          </ul>
          <p>Learn more about Apostrophe Assembly</p>
        </div>
      </main>
    </>
  );
}
