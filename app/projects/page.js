export const metadata = {
  title: "Faisal Abuosbeh | Projects",
};

export default function ProjectsPage() {
  return (
    <div className="section-stack-tight">
      <div className="page-heading">
        <h1 className="page-title">Projects</h1>
        <span
          className="heading-underline heading-underline-green"
          aria-hidden="true"
        ></span>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-top">
            <span
              className="project-accent project-accent-red"
              aria-hidden="true"
            ></span>
            <h2 className="project-title">Route Runner</h2>
            <div className="project-icons">
              <a
                className="project-icon"
                href="https://github.com/faisal4-27/routerunner"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                className="project-icon"
                href="https://routerunner-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a
                className="project-icon"
                href="https://youtu.be/u5UfaHgSTVc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demo video"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </a>
            </div>
          </div>
          <p className="project-desc">
            A full-stack running route generator that creates GPS-accurate loop
            routes from any map location. Integrates three external REST APIs
            (OSRM, Open-Meteo, Overpass) for road-accurate paths, elevation, and
            traffic-signal data, with an iterative radius-scaling algorithm that
            lands routes within 8% of the target distance.
          </p>
          <div className="tag-row">
            <span className="tag-muted">Python</span>
            <span className="tag-muted">FastAPI</span>
            <span className="tag-muted">JavaScript</span>
            <span className="tag-muted">Leaflet.js</span>
          </div>
        </article>

        <article className="project-card">
          <div className="project-top">
            <span
              className="project-accent project-accent-green"
              aria-hidden="true"
            ></span>
            <h2 className="project-title">Pearson Airport Taxi Optimization</h2>
          </div>
          <p className="project-desc">
            A machine learning project that optimizes aircraft taxiing at Pearson
            Airport. A CNN-based model is trained on real flight data to predict
            runway congestion before aircraft land, and those predictions are used
            to dynamically reroute gate taxi paths away from high-traffic areas,
            reducing overall ground-movement delays. Built for the Industry 4.0
            Case Competition, which it went on to win.
          </p>
          <div className="tag-row">
            <span className="tag-muted">Python</span>
            <span className="tag-muted">Machine Learning</span>
            <span className="tag-muted">NumPy</span>
            <span className="tag-muted">GeoPandas</span>
          </div>
        </article>
      </div>
    </div>
  );
}
