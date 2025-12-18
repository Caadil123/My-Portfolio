import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Frontend Development', desc: 'React, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Figma, Adobe XD, User Research' },
    { icon: Rocket, title: 'Backend Development', desc: 'Node.js, Express, PHP, MySQL, MongoDB, PostgreSQL' },
  ];

  return (
    <section id="about" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          I'm a passionate developer with a love for creating beautiful and functional 
          web experiences. With expertise in modern web technologies, I bring ideas to life 
          through clean code and thoughtful design.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="card p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <skill.icon className="text-primary-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
            <p className="text-gray-600">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

