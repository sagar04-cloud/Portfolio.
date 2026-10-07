
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechMarquee from './components/TechMarquee';
import SelectedWork from './components/SelectedWork';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Approach from './components/Approach';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageIntro from './components/PageIntro';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <PageIntro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechMarquee />
        <SelectedWork />
        <Skills />
        <Experience />
        <Approach />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
