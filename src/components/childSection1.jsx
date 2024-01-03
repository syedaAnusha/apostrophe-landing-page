import "./childSection1.css";

export default function ChildSection1() {
  return (
    <div>
      <div className="description">
        <div className="icon__section " aria-label="modules-duotone">
          <div className="back__glow "></div>
          <div className="border__section">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 140 140"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#b327bf" />
                  <stop offset="100%" stopColor="#66f" />
                </linearGradient>
              </defs>
              <path
                id="modules"
                fill="url(#gradient)"
                d="M132.83,76.78,105,58.9V33.43a9.3,9.3,0,0,0-1.22-4.6l0,0s-.05-.06-.07-.1a9.33,9.33,0,0,0-3.22-3.27L74.8,10a9.34,9.34,0,0,0-9.6,0L39.53,25.42a9.33,9.33,0,0,0-3.22,3.27s-.05.06-.07.1a.08.08,0,0,0,0,0A9.3,9.3,0,0,0,35,33.43V58.9L7.16,76.79a9.27,9.27,0,0,0-4.24,7.84v23.7a9.26,9.26,0,0,0,4.31,7.84L32.9,132.68a9.32,9.32,0,0,0,4.76,1.46,2.06,2.06,0,0,0,.26,0l.12,0a9.26,9.26,0,0,0,5-1.47l27-17.39,27.06,17.39a9.32,9.32,0,0,0,4.76,1.46,2.3,2.3,0,0,0,.26,0l.13,0a9.25,9.25,0,0,0,5-1.47l25.68-16.51a9.29,9.29,0,0,0,4.24-7.84V84.64A9.29,9.29,0,0,0,132.83,76.78ZM102.08,97,75.53,81l6.1-3.92L102.08,64,128.66,81ZM64.47,81,37.92,97,11.34,81,37.92,64,60,78.14ZM67.08,50.7V75.79L40.83,58.9v-24ZM99.17,35V58.9l-7,4.52L72.92,75.79V50.7ZM68.2,15a3.52,3.52,0,0,1,3.6,0L96.41,29.79,70,45.65,43.59,29.79ZM10.37,111.26a3.46,3.46,0,0,1-1.62-2.93v-22L35,102V127.1Zm30.46,15.88V102L67.08,86.28v24Zm32.09-16.91v-24L99.17,102V127.1Zm56.75,1L105,127.14V102l26.25-15.75v22A3.48,3.48,0,0,1,129.67,111.27Z"
              />
            </svg>
          </div>
        </div>
        <div className="text-section">
          <h6>Power and Flexibility</h6>
          <p>
            Manage a fleet of digital experiences from a single dashboard.
            Customize your no-code website factory with the flexibility of a
            modern open source tech stack.
          </p>
        </div>
      </div>
    </div>
  );
}
