import { useState } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/WhatsApp Image 2025-12-10 at 19.47.30_ef982f4a.jpg';

const Hero = ({ onDownloadCV }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20">
      <div className="section-container text-center">
        <div className="animate-fade-in">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-200 ring-offset-4 ring-offset-white">
            {!imageError ? (
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-4xl font-bold">
                AO
              </div>
            )}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-primary-600">Abdirahim Omar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            I create beautiful, functional, and user-friendly web applications 
            that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={onDownloadCV} className="btn-primary inline-flex items-center justify-center gap-2">
              <Download size={20} />
              Download CV
            </button>
            <a href="#projects" className="btn-secondary inline-flex items-center justify-center">
              View My Work
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Caadil123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdirahim-omar-900324358"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:abdirahimomar147@gmail.com"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

