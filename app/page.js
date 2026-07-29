import Typewriter from "@/components/Typewriter";

export const metadata = {
  title: "Faisal Abuosbeh | Portfolio",
};

export default function HomePage() {
  return (
    <div className="section-stack">
      <section className="hero">
        <h1 className="hero-title" id="type-name">
          <span className="hero-bar" aria-hidden="true"></span>
          <Typewriter text="Faisal Abuosbeh" />
        </h1>
        <p className="hero-subtitle">
          Systems Design Engineering @ University of Waterloo
        </p>
      </section>

      <section className="link-section">
        <span className="link-label">Find me at</span>
        <div className="link-cards">
          <a
            className="link-card"
            href="/faisal_abuosbeh_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-card-icon link-card-icon-resume">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                <path d="M14 2v5h5" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </span>
            <span className="link-card-text">
              <span className="link-card-label">Resume</span>
              <span className="link-card-subtitle">View my CV</span>
            </span>
            <span className="link-card-arrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>

          <a
            className="link-card"
            href="https://github.com/faisal4-27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-card-icon link-card-icon-github">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </span>
            <span className="link-card-text">
              <span className="link-card-label">GitHub</span>
              <span className="link-card-subtitle">See my code</span>
            </span>
            <span className="link-card-arrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>

          <a
            className="link-card"
            href="https://www.linkedin.com/in/faisal-abuosbeh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-card-icon link-card-icon-linkedin">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
            <span className="link-card-text">
              <span className="link-card-label">LinkedIn</span>
              <span className="link-card-subtitle">Connect with me</span>
            </span>
            <span className="link-card-arrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
