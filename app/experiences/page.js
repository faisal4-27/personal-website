export const metadata = {
  title: "Faisal Abuosbeh | Experiences",
};

export default function ExperiencesPage() {
  return (
    <div className="section-stack-tight">
      <div className="page-heading">
        <h1 className="page-title">Experiences</h1>
        <span
          className="heading-underline heading-underline-red"
          aria-hidden="true"
        ></span>
      </div>

      <div className="timeline">
        <article className="experience-row">
          <div className="experience-marker" aria-hidden="true">
            <span className="experience-dot experience-dot-first"></span>
            <span className="experience-line"></span>
          </div>
          <div className="experience-content">
            <div className="experience-top">
              <div className="experience-heading">
                <img
                  className="experience-logo"
                  src="/Cyntry_Logo_Transparency%20Colour_Vertical.png"
                  alt="Cyntry logo"
                />
                <div>
                  <span className="experience-role">AI Software Developer</span>
                  <div className="experience-company">Cyntry</div>
                </div>
              </div>
              <div className="experience-meta">
                <div>Jan 2026 — Apr 2026</div>
                <div>Mississauga, ON</div>
              </div>
            </div>
            <p className="experience-desc">
              Built a multi-tenant SaaS platform that automated consulting
              workflows, cutting consultant time by up to 50%. Designed 30+ REST
              API endpoints backed by PostgreSQL, and containerized the app with
              Docker and DigitalOcean using CI/CD pipelines for automated testing
              and deployment.
            </p>
            <div className="tag-row">
              <span className="tag">TypeScript</span>
              <span className="tag">Node.js</span>
              <span className="tag">React</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Docker</span>
            </div>
          </div>
        </article>

        <article className="experience-row">
          <div className="experience-marker" aria-hidden="true">
            <span className="experience-dot"></span>
            <span className="experience-line"></span>
          </div>
          <div className="experience-content">
            <div className="experience-top">
              <div>
                <span className="experience-role">Teaching Assistant</span>
                <div className="experience-company">Saint Joseph S.S.</div>
              </div>
              <div className="experience-meta">
                <div>Sep 2024 — Jan 2025</div>
                <div>Mississauga, ON</div>
              </div>
            </div>
            <p className="experience-desc">
              Supported a grade 9 science teacher in a class of 30+ students,
              grading assignments, creating interactive activities, and providing
              one-on-one help. Independently planned and taught a full lesson as a
              final project.
            </p>
            <div className="tag-row">
              <span className="tag">Leadership</span>
              <span className="tag">Communication</span>
              <span className="tag">Mentorship</span>
            </div>
          </div>
        </article>

        <article className="experience-row">
          <div className="experience-marker" aria-hidden="true">
            <span className="experience-dot"></span>
          </div>
          <div className="experience-content">
            <div className="experience-top">
              <div>
                <span className="experience-role">Pharmacy Technician</span>
                <div className="experience-company">Marketplace Pharmacy</div>
              </div>
              <div className="experience-meta">
                <div>Sep 2023 — Aug 2025</div>
                <div>Milton, ON</div>
              </div>
            </div>
            <p className="experience-desc">
              Received and labeled vendor shipments of 75+ products, and
              self-taught complex pharmacy software (Fillware) to review and
              update customer profiles and medical histories.
            </p>
            <div className="tag-row">
              <span className="tag">Fillware</span>
              <span className="tag">Organization</span>
              <span className="tag">Attention to Detail</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
