import { Section } from './Util';
import { DownloadIcon } from './icons';
const Resume = () => (
    <Section id="resume" title="My Resume" bg="bg-white">
        <div className="text-center">
            <p className="lead mb-4">
                For a more detailed look at my work experience, skills, and qualifications, please download my resume.
            </p>
            <a 
                href="https://drive.google.com/file/d/1KGG1a_yI8dcEOFzhCxuw8t8OwtDhgBjr/view"
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg d-inline-flex align-items-center gap-2 rounded-pill transition-transform-hover"
            >
                <DownloadIcon />
                Download Resume
            </a>
        </div>
    </Section>
);
export default Resume;