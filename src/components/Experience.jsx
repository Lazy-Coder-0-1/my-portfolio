import { Section } from "./Util";

const Experience = () => {
    const experiencesData = [ 
        { 
            company: 'JP Morgan Chase & Co.',
            role: 'Security Engineer - II / Full Stack Developer',
            duration: 'June 2025 - Present',
            achievements: [
                'Led the development of a major new product feature from conception to deployment, resulting in a 15% increase in user engagement.',
                'Mentored junior developers, improving team productivity and code quality.',
                'Pioneered the adoption of a new CI/CD pipeline, reducing deployment times by 40%.'
            ]
        },
        {
            company: 'Birlasoft Limited.',
            role: 'Senior Application Developer',
            duration: 'May 2021 - May 2025',
            achievements: [
                'Developed and maintained backend services for a high-traffic web application.',
                'Contributed to a major database migration project with zero downtime.',
                'Refactored legacy code, improving application performance and maintainability.'
            ]
        }
    ];
    return (
        <Section id="experience" title="Work Experience" bg="bg-white">
            <div className="position-relative mx-auto" style={{maxWidth: '900px'}}>
                <div className="position-absolute top-0 bottom-0 start-50 translate-middle-x d-none d-md-block" style={{width: '3px', backgroundColor: '#e9ecef'}}></div>
                {experiencesData.map((exp, index) => (
                    <div key={index} className={`row g-0 mb-4 justify-content-center`}>
                        <div className="col-md-6"><div className={`position-relative ${index % 2 === 0 ? 'me-md-4' : 'ms-md-4'}`}>
                            <div className="position-absolute top-50 translate-middle-y bg-white border border-primary border-4 rounded-circle d-none d-md-block" style={{width: '20px', height: '20px', [index % 2 === 0 ? 'end' : 'start']: '-10px', zIndex: 1}}></div>
                            <div className="card border-0 shadow-sm transition-transform-hover"><div className="card-body p-4">
                                <h5 className="fw-bold">{exp.role}</h5>
                                <p className="text-muted mb-1">{exp.company} | {exp.duration}</p>
                                <ul className="mt-3">{exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}</ul>
                            </div></div>
                        </div></div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
export default Experience;