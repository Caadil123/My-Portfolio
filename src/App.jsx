import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const downloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Abdirahim_Omar_Hassan_Freelance_Software_Developer_CV.pdf'; // CV file in public folder
    link.download = 'Abdirahim_Omar_Hassan_Freelance_Software_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <Header onDownloadCV={downloadCV} />
      <Hero onDownloadCV={downloadCV} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
