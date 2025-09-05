import Details from './components/Details'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from "./components/Resume";


export default function App() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; overflow-x: hidden; }
        .transition-transform-hover:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important; }
        .transition-shadow { transition: box-shadow 0.3s ease-in-out; }
      `}</style>
      
      {/* In a real project, these links would go in public/index.html */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" async></script>

      <Header />
      <main>
        <Details />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}