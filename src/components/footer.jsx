import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="text">
          <h5>2010-2024, Apostrophe Technologies</h5>
          <div className="rating__section">
            <div className="rate_star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="20"
                height="20"
                viewBox="12 12 40 40"
              >
                <path
                  fill="#333"
                  d="M32 13.4c-10.5 0-19 8.5-19 19 0 8.4 5.5 15.5 13 18 1 .2 1.3-.4 1.3-.9v-3.2c-5.3 1.1-6.4-2.6-6.4-2.6-.9-2.1-2.1-2.7-2.1-2.7-1.7-1.2.1-1.1.1-1.1 1.9.1 2.9 2 2.9 2 1.7 2.9 4.5 2.1 5.5 1.6.2-1.2.7-2.1 1.2-2.6-4.2-.5-8.7-2.1-8.7-9.4 0-2.1.7-3.7 2-5.1-.2-.5-.8-2.4.2-5 0 0 1.6-.5 5.2 2 1.5-.4 3.1-.7 4.8-.7 1.6 0 3.3.2 4.7.7 3.6-2.4 5.2-2 5.2-2 1 2.6.4 4.6.2 5 1.2 1.3 2 3 2 5.1 0 7.3-4.5 8.9-8.7 9.4.7.6 1.3 1.7 1.3 3.5v5.2c0 .5.4 1.1 1.3.9 7.5-2.6 13-9.7 13-18.1 0-10.5-8.5-19-19-19z"
                />
              </svg>
              <a href="/">Star</a>
            </div>
            <div className="up-arrow"></div>
            <div className="badge">
              <span>4201</span>
            </div>
          </div>
        </div>
        <div className="media__icons--section">
          <section className="twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              // xmlnsSvgjs="http://svgjs.com/svgjs"
              viewBox="0 0 140 140"
              width="15"
              height="15"
            >
              <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                <path
                  d="M23.32,6.44a.5.5,0,0,0-.2-.87l-.79-.2A.5.5,0,0,1,22,4.67l.44-.89a.5.5,0,0,0-.58-.7l-2,.56a.5.5,0,0,1-.44-.08,5,5,0,0,0-3-1,5,5,0,0,0-5,5v.36a.25.25,0,0,1-.22.25c-2.81.33-5.5-1.1-8.4-4.44a.51.51,0,0,0-.51-.15A.5.5,0,0,0,2,4a7.58,7.58,0,0,0,.46,4.92.25.25,0,0,1-.26.36L1.08,9.06a.5.5,0,0,0-.57.59,5.15,5.15,0,0,0,2.37,3.78.25.25,0,0,1,0,.45l-.53.21a.5.5,0,0,0-.26.69,4.36,4.36,0,0,0,3.2,2.48.25.25,0,0,1,0,.47A10.94,10.94,0,0,1,1,18.56a.5.5,0,0,0-.2,1,20.06,20.06,0,0,0,8.14,1.93,12.58,12.58,0,0,0,7-2A12.5,12.5,0,0,0,21.5,9.06V8.19a.5.5,0,0,1,.18-.38Z"
                  fill="#ffffff"
                  stroke="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  id="twitter"
                ></path>
              </g>
            </svg>
          </section>
          <section className="linkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              // xmlns:svgjs="http://svgjs.com/svgjs"
              viewBox="0 0 140 140"
              width="15"
              height="15"
            >
              <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                <path
                  d="M2.000 8.500 L7.000 8.500 L7.000 22.500 L2.000 22.500 Z"
                  fill="#ffffff"
                  stroke="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  id="linkedIn"
                ></path>
                <path
                  d="M2.000 4.000 A2.48 2.5 0 1 0 6.960 4.000 A2.48 2.5 0 1 0 2.000 4.000 Z"
                  fill="#ffffff"
                  stroke="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  id="linkedIn"
                ></path>
                <path
                  d="M18.5,22.5h3A.5.5,0,0,0,22,22V13.6C22,9.83,19.87,8,16.89,8a4.21,4.21,0,0,0-3.17,1.27A.41.41,0,0,1,13,9a.5.5,0,0,0-.5-.5h-3A.5.5,0,0,0,9,9V22a.5.5,0,0,0,.5.5h3A.5.5,0,0,0,13,22V14.5a2.5,2.5,0,0,1,5,0V22A.5.5,0,0,0,18.5,22.5Z"
                  fill="#ffffff"
                  stroke="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  id="linkedIn"
                ></path>
              </g>
            </svg>
          </section>

          <section className="facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              // xmlns:svgjs="http://svgjs.com/svgjs"
              viewBox="0 0 140 140"
              width="15"
              height="15"
            >
              <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                <path
                  d="M18.14,7.17A.5.5,0,0,0,17.77,7H14V5.59c0-.28.06-.6.51-.6h3a.44.44,0,0,0,.35-.15A.5.5,0,0,0,18,4.5V.5a.5.5,0,0,0-.5-.5H13.17C8.37,0,8,4.1,8,5.35V7H5.5a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5H8V23.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V12h3.35a.5.5,0,0,0,.5-.45l.42-4A.5.5,0,0,0,18.14,7.17Z"
                  fill="#ffffff"
                  stroke="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  id="facebook"
                ></path>
              </g>
            </svg>
          </section>

          <section className="youtube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              // xmlns:svgjs="http://svgjs.com/svgjs"
              viewBox="0 0 140 140"
              width="15"
              height="15"
            >
              <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                <path
                  d="M20.06,3.5H3.94A3.94,3.94,0,0,0,0,7.44v9.12A3.94,3.94,0,0,0,3.94,20.5H20.06A3.94,3.94,0,0,0,24,16.56V7.44A3.94,3.94,0,0,0,20.06,3.5ZM16.54,12,9.77,16.36A.5.5,0,0,1,9,15.94V7.28a.5.5,0,0,1,.77-.42l6.77,4.33a.5.5,0,0,1,0,.84Z"
                  fill="#ffffff"
                  stroke="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  id="youtube"
                ></path>
              </g>
            </svg>
          </section>
        </div>
      </footer>
    </>
  );
}
