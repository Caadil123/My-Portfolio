import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Resume Abdirahim Omar Hassan (1).pdf';
    link.download = 'Abdirahim_Omar_Hassan_CV.pdf';
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
