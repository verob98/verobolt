import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Tips from './components/Tips';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('inicio');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);

    const sectionIds: { [key: string]: string } = {
      inicio: 'inicio',
      servicios: 'servicios',
      tips: 'tips',
      contacto: 'contacto',
    };

    const targetId = sectionIds[section];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: section === 'inicio' ? 0 : offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'tips', 'contacto'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} currentSection={currentSection} />
      <main>
        <div id="inicio">
          <Hero onNavigate={handleNavigate} />
        </div>
        <div id="servicios">
          <Services />
        </div>
        <div id="tips">
          <Tips />
        </div>
        <div id="contacto">
          <Contact />
        </div>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
