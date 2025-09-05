import { ExternalLinkIcon, GithubIcon } from "./icons";
import { Section } from "./Util";
const Projects = () => {
  const projectsData = [
    {
      type: 'Professional',
      company: 'Birlasoft Limited.',
      title: 'Senior Application Developer',
      role: 'Full Stack Developer',
      stack: 'Java, Spring Boot, React.js, MySQL, AWS, Apigee',
      problem: 'To build a scalable and resilient e-commerce backend capable of handling high traffic and integrating with multiple third-party services.',
      responsibilities: [
        'Designed and developed a microservices architecture for catalog, order, and payment processing.',
        'Implemented secure RESTful APIs and managed them using Apigee API Gateway.',
        'Developed a responsive and interactive business-focused credit card application using React.js to apply for credit cards.',
        'Deployed and managed services on AWS, ensuring high availability and fault tolerance.'
      ],
      outcome: 'Achieved improvement in apply processing and reduced API response times, feature rich user experience.',
      showInUI: true
    },
    {
      type: 'Professional',
      title: 'Financial Data Analytics Dashboard',
      role: 'Backend Developer',
      stack: 'Java, Spring Boot, SQL, PCF',
      problem: 'To create a system that ingests, processes, and visualizes large volumes of financial data for real-time analysis.',
      responsibilities: [
        'Developed high-performance data processing modules to handle daily data feeds.',
        'Built REST APIs to serve aggregated data to the frontend dashboard.',
        'Optimized complex SQL queries to improve data retrieval times by over 50%.',
        'Managed application deployment and scaling on Pivotal Cloud Foundry (PCF).'
      ],
      outcome: 'Enabled financial analysts to access critical data 60% faster, leading to more informed and timely decision-making.',
      showInUI: false
    },
    {
      type: 'Personal',
      title: 'Task Management App',
      role: 'Solo Developer',
      stack: 'Java, Spring Boot, React.js, MySQL',
      problem: 'To create a simple and intuitive application for personal task and project management, focusing on a clean UI and fast performance.',
      responsibilities: [
        'Built a complete full-stack application from scratch.',
        'Designed and implemented a RESTful API for CRUD operations on tasks and projects.',
        'Developed a responsive frontend with React.js, featuring drag-and-drop functionality for task prioritization.'
      ],
      outcome: 'Successfully deployed the application, which is now used for personal project planning and organization.',
      showInUI: false,
      githubLink: '#', // Dummy Link
      liveLink: '#' // Dummy Link
    }
  ];
  return (
    <Section id="projects" title="Project Showcase" bg="bg-light">
      <div className="row g-4">
        {projectsData.filter(p => p.showInUI).map((project, index) => (
          <div key={index} className="col-lg-12">
            <div className="card h-100 shadow-sm border-0 rounded-3 transition-transform-hover">
              <div className="card-body p-4 p-md-5">
                <h4 className="card-title fw-bold d-flex align-items-center">
                  {project.title}
                  <span className={`badge ms-2 ${project.type === 'Professional' ? 'bg-primary' : 'bg-success'}`}>{project.type}</span>
                </h4>
                <p className="text-muted mb-2">
                  <strong>Role:</strong> {project.role}
                  {project.company && <span className="ms-2">| <strong>Company:</strong> {project.company}</span>}
                </p>
                <p>{project.stack.split(', ').map((tech, i) => (<span key={i} className="badge bg-secondary bg-opacity-10 text-secondary-emphasis me-1 mb-1 py-1 px-2">{tech}</span>))}</p>
                <p className="mt-3"><strong>Problem:</strong> {project.problem}</p>
                <h6 className="mt-4 fw-semibold">Key Contributions:</h6>
                <ul>{project.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}</ul>
                <div className="alert alert-primary mt-4 border-0"><strong>Impact:</strong> {project.outcome}</div>
                
                {(project.githubLink || project.liveLink) && (
                  <div className="mt-4">
                    <h6 className="fw-semibold">Project Links:</h6>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark me-2 d-inline-flex align-items-center gap-2">
                        <GithubIcon /> GitHub Repo
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-2">
                        <ExternalLinkIcon /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default Projects;