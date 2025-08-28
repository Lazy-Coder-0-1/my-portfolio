import { Section, SkillCard } from "./Util";

const Skills = () => (
  <Section id="skills" title="Skills & Tools" bg="bg-white">
    <div className="row justify-content-center">
      <SkillCard title="Backend" skills={['Java', 'Spring Boot', 'RESTful APIs', 'Microservices']} />
      <SkillCard title="Frontend" skills={['JavaScript (ES6+)', 'React.js', 'HTML5 & CSS3', 'Bootstrap']} />
      <SkillCard title="Databases" skills={['SQL (Oracle, MySQL)', 'JPA / Hibernate', 'Database Design']} />
      <SkillCard title="Cloud & DevOps" skills={['AWS (EC2, S3, RDS)', 'Pivotal Cloud Foundry (PCF)', 'CI/CD (Jenkins)']} />
      <SkillCard title="Integration & Design" skills={['Apigee API Gateway', 'System Design']} />
      <SkillCard title="Testing & Others" skills={['JUnit, Mockito', 'Git & GitHub', 'Agile / Scrum Methodologies', 'Splunk']} />
    </div>
  </Section>
);
export default Skills;