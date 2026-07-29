export const metadata = {
  title: "Faisal Abuosbeh | About Me",
};

export default function AboutPage() {
  return (
    <div className="section-stack-tight">
      <div className="page-heading">
        <h1 className="page-title">About Me</h1>
        <span
          className="heading-underline heading-underline-green"
          aria-hidden="true"
        ></span>
      </div>

      <div className="about-grid">
        <div className="about-bio">
          <p className="about-lead">
            I&apos;m Faisal, a Systems Design Engineering student at the University
            of Waterloo with a strong interest in software engineering and AI.
          </p>
          <p>
            I love building products end to end — from the first sketch of an
            idea to a polished, shipped experience. I care about clean
            interfaces, thoughtful details, and writing code that other people
            can actually maintain.
          </p>
          <p>
            Outside of school I love staying active — playing soccer, working
            out, and running — and spending time with friends and family.
          </p>
        </div>

        <div className="about-side">
          <span className="side-label">Skills &amp; Tools</span>

          <div className="skill-group">
            <span className="skill-category">Languages</span>
            <div className="chip-row">
              <span className="chip">Python</span>
              <span className="chip">JavaScript</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Java</span>
              <span className="chip">C++</span>
              <span className="chip">SQL</span>
              <span className="chip">HTML/CSS</span>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-category">Frameworks &amp; Libraries</span>
            <div className="chip-row">
              <span className="chip">React</span>
              <span className="chip">Next.js</span>
              <span className="chip">Express</span>
              <span className="chip">FastAPI</span>
              <span className="chip">Flask</span>
              <span className="chip">Django</span>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-category">Developer Tools</span>
            <div className="chip-row">
              <span className="chip">Git</span>
              <span className="chip">GitHub</span>
              <span className="chip">Docker</span>
              <span className="chip">AWS</span>
              <span className="chip">Azure</span>
              <span className="chip">DigitalOcean</span>
              <span className="chip">VS Code</span>
              <span className="chip">Cursor</span>
            </div>
          </div>

          <div className="education-block">
            <span className="side-label">Education</span>
            <span className="education-institution">
              University of Waterloo
            </span>
            <span className="education-detail">
              B.A.Sc. Systems Design Engineering
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
