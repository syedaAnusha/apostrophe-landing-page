import "./childSection3.css";
import stackImg from "../assets/images/stack-image.svg";
export default function ChildSection3() {
  return (
    <>
      <div className="description__2">
        <div className="icon__section " aria-label="modules-duotone">
          <div className="back__glow "></div>
          <div className="border__section">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 140 140"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="50%" y2="50%">
                  <stop offset="0%" stopColor="#FE5599" />
                  <stop offset="100%" stopColor="#6236FF" />
                </linearGradient>
              </defs>
              <path
                id="modules"
                stroke="#6236FF"
                fill="url(#gradient)"
                d="M49.58,113v18.29a2.92,2.92,0,1,1-5.83,0V113a23.26,23.26,0,0,0-3.92-13L33.16,90l-.08-.12a5.25,5.25,0,0,0-7.2-1.8l-.21.13a5.26,5.26,0,0,0-1.83,6.62l7.83,13a2.92,2.92,0,1,1-5,3L18.78,97.75c0-.06-.07-.13-.11-.2a11,11,0,0,1-1.15-5.43c0-.08,0-.16,0-.24V70A5.84,5.84,0,0,0,5.83,70v30.16A23.46,23.46,0,0,0,11,114.75l11.74,14.68a2.91,2.91,0,1,1-4.55,3.64L6.39,118.39A29.3,29.3,0,0,1,0,100.16V70a11.67,11.67,0,1,1,23.33,0V82.85a11.09,11.09,0,0,1,14.71,4l6.64,9.92A29.06,29.06,0,0,1,49.58,113Zm78.75-54.63A11.68,11.68,0,0,0,116.67,70V82.85a11.07,11.07,0,0,0-14.71,4l-6.64,9.92A29.06,29.06,0,0,0,90.42,113v18.29a2.92,2.92,0,1,0,5.83,0V113a23.26,23.26,0,0,1,3.92-13l6.67-10,.08-.12a5.27,5.27,0,0,1,7.2-1.81l.21.14a5.25,5.25,0,0,1,1.83,6.62l-7.83,13a2.92,2.92,0,1,0,5,3l7.9-13.13c0-.06.07-.13.1-.2a11,11,0,0,0,1.15-5.46c0-.07,0-.14,0-.21V70a5.84,5.84,0,0,1,11.67,0v30.17a23.45,23.45,0,0,1-5.12,14.58l-11.74,14.68a2.91,2.91,0,1,0,4.55,3.64l11.75-14.68A29.32,29.32,0,0,0,140,100.16V70A11.68,11.68,0,0,0,128.33,58.33Zm-30,2.07,23.34-23.34a2.93,2.93,0,0,0,0-4.12L98.31,9.6a2.92,2.92,0,1,0-4.12,4.13L115.46,35,94.19,56.27a2.92,2.92,0,0,0,0,4.13,2.92,2.92,0,0,0,4.12,0Zm-46.66,0a2.92,2.92,0,0,0,0-4.13L30.38,35,51.65,13.73A2.92,2.92,0,1,0,47.52,9.6L24.19,32.94a2.91,2.91,0,0,0,0,4.12L47.52,60.4a2.93,2.93,0,0,0,4.13,0Zm18.28,1.48L81.6,9.38a2.92,2.92,0,1,0-5.7-1.26L64.24,60.62a2.92,2.92,0,0,0,2.21,3.48,3.48,3.48,0,0,0,.64.07A2.92,2.92,0,0,0,69.93,61.88Z"
              />
            </svg>
          </div>
        </div>
        <div className="text-section--small">
          <h6>Open Source Tech Stack</h6>
        </div>
        <div className="details">
          <div className="desc__text">
            <h2>
              Create powerful custom solutions with ApostropheCMS, the open
              source backbone of Apostrophe Assembly.
            </h2>
            <ul>
              <li>
                Build with technologies like Node.js, Express, MongoDB, Vue.js,
                npm
              </li>
              <li>Ready to integrate into the Jamstack</li>
              <li>
                An extensible and modular system with support for custom plugins
              </li>
              <li>
                Join a global community of developers and agencies crafting
                <br />
                incredible experiences
              </li>
            </ul>
            <p className="btn--primary">Learn more about ApostropheCMS</p>
          </div>
          <div className="desc-img">
            <img src={stackImg} alt="techStack-Image" />
          </div>
        </div>
      </div>
    </>
  );
}
