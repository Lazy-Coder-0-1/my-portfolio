import { DownloadIcon, ExternalLinkIcon } from "./icons";
import { Section } from "./Util";

const Certifications = () => {
    const certificationsData = [
        {
            name: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: 'Issued: March 29, 2024',
            validationNumber: 'd5ee94e369ff475abbacd4d2edfec3fc',
            downloadLink: '#', // Dummy link
            verifyLink: 'https://aws.amazon.com/verification', // Dummy link
            showInUI: true,
        },
        {
            name: 'Oracle Certified Professional, Java SE 11 Developer',
            issuer: 'Oracle',
            date: 'Issued: Mar 2022',
            validationNumber: 'ABC-123-XYZ',
            downloadLink: '#', // Dummy link
            verifyLink: '#', // Dummy link
            showInUI: false,
        }
    ];

    return (
        <Section id="certifications" title="Certifications" bg="bg-light">
            <div className="row g-4 justify-content-center">
                {certificationsData.filter(c => c.showInUI).map((cert, index) => (
                    <div key={index} className="col-md-6 col-lg-5">
                        <div className="card h-100 shadow-sm border-0 rounded-3 transition-transform-hover">
                            <div className="card-body p-4 text-center">
                                <div className="mb-3">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-patch-check-fill text-primary" viewBox="0 0 16 16">
                                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.638.622a2.89 2.89 0 0 0 0 4.134l.638.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89.01.622.638a2.89 2.89 0 0 0 4.134 0l.622-.638.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.638-.622a2.89 2.89 0 0 0 0-4.134l-.638-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89-.01-.622-.638zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                   </svg>
                                </div>
                                <h5 className="card-title fw-bold">{cert.name}</h5>
                                <p className="card-text text-muted">{cert.issuer}</p>
                                <p className="card-text"><small className="text-muted">{cert.date}</small></p>
                                <p className="card-text"><small>Validation Number : {cert.validationNumber}</small></p>
                                <div className="mt-4">
                                    <a href={cert.downloadLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary me-2 d-inline-flex align-items-center gap-2">
                                        <DownloadIcon /> Download
                                    </a>
                                    <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary d-inline-flex align-items-center gap-2">
                                        <ExternalLinkIcon /> Validate Here
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );

}
export default Certifications;