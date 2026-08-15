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
              Built MFA, a risk register, a compliance calendar, and a
              multi-framework dashboard for a multi-tenant consulting SaaS
              platform, cutting consultant time by up to 50%. Designed 25+ REST
              API endpoints backed by PostgreSQL, deployed updates to a
              DigitalOcean production environment with Mailgun email delivery
              and Spaces object storage, and prototyped UI in Figma before
              implementation.
            </p>
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
              update customer profiles and medical histories. Delivered
              attentive service at checkout, resolving patient questions and
              prescription concerns on the spot.
            </p>
          </div>
        </article>

        <article className="experience-row">
          <div className="experience-marker" aria-hidden="true">
            <span className="experience-dot"></span>
          </div>
          <div className="experience-content">
            <div className="experience-top">
              <div>
                <span className="experience-role">Soccer Coach &amp; Referee</span>
                <div className="experience-company">Ontario Soccer</div>
              </div>
              <div className="experience-meta">
                <div>May 2023 — Jun 2025</div>
                <div>Mississauga, ON</div>
              </div>
            </div>
            <p className="experience-desc">
              Coached a team of 8 players in weekly 5v5 games, managing
              formations, substitutions, and in-game strategy while keeping the
              environment inclusive for every skill level. Also officiated 75+
              matches across U8 to U15 divisions, applying the Laws of the Game
              and defusing conflicts among players, coaches, and spectators in
              fast-paced settings.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
