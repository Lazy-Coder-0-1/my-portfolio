import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import { Section } from './Util';
const Contact = () => (
  <Section id="contact" title="Get In Touch" bg="bg-white">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8">
        <p className="lead mb-4">I'm currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.</p>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <a href="#" className="btn btn-outline-primary btn-lg d-flex align-items-center gap-2 rounded-pill transition-transform-hover"><MailIcon /> Email Me</a>
          <a href="https://github.com/Lazy-Coder-0-1" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg d-flex align-items-center gap-2 rounded-pill transition-transform-hover"><GithubIcon /> GitHub</a>
          <a href="https://www.linkedin.com/in/devaki-nanda-gopal-t" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-lg d-flex align-items-center gap-2 rounded-pill transition-transform-hover"><LinkedinIcon /> LinkedIn</a>
        </div>
      </div>
    </div>
  </Section>
);
export default Contact;