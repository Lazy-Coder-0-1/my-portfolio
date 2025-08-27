export const Section = ({ id, title, children, bg }) => (
  <section id={id} className={`py-5 ${bg}`}>
    <div className="container">
      <h2 className="text-center mb-5 display-5 fw-bold">{title}</h2>
      {children}
    </div>
  </section>
);


export const SkillCard = ({ title, skills }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="card h-100 shadow-sm border-0 rounded-3 transition-transform-hover">
      <div className="card-body p-4">
        <h5 className="card-title fw-bold mb-3">{title}</h5>
        <ul className="list-unstyled mb-0">
          {skills.map((skill, index) => (
            <li key={index} className="mb-2 d-flex align-items-center">
              <span className="badge bg-primary bg-opacity-10 text-primary me-2 py-2 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
              </span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);