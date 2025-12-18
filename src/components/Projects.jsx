import { Github, Loader } from 'lucide-react';
import useGitHubRepos from '../hooks/useGitHubRepos';

const Projects = () => {
  // Fetching projects from GitHub
  const { repos, loading, error } = useGitHubRepos('Caadil123');

  // Projects to exclude
  const excludedProjects = [
    'Produc-list',
    'my-portfolio',
    'E-learning-Dashboard',
    'E-learning dashboard'
  ];

  // Projects to include (exact names from GitHub)
  const includedProjects = [
    'E-learning-Portal',
    'qoute-voute-react-challenge',
    'DiceApp-Challenge',
    'React-Quiz-App',
    'Basic-React-todo-app'
  ];

  // Custom descriptions for projects
  const projectDescriptions = {
    'E-learning-Portal': 'A comprehensive e-learning platform that allows users to enroll in free courses. Built with modern web technologies, this portal provides an intuitive interface for course discovery and enrollment, making education accessible to everyone.',
    'qoute-voute-react-challenge': 'An interactive React application featuring a dynamic quote voting system. Users can vote for their favorite quotes, see real-time vote counts, and discover inspiring content. Demonstrates advanced React state management and user interaction patterns.',
    'DiceApp-Challenge': 'A fun and engaging dice application built with JavaScript. Features interactive dice rolling mechanics with smooth animations and responsive design. Showcases modern JavaScript techniques and user experience design principles.',
    'React-Quiz-App': 'An interactive quiz application built with React, featuring multiple-choice questions, score tracking, and real-time feedback. Users can test their knowledge across various topics with an engaging and user-friendly interface. Demonstrates React hooks, state management, and component composition.',
    'Basic-React-todo-app': 'A clean and efficient todo list application built with React. Features include adding, editing, deleting, and marking tasks as complete. Showcases fundamental React concepts including component state, event handling, and list rendering. Perfect example of building practical applications with React.'
  };

  // Project images mapping (you can add your own images to src/assets and import them)
  const projectImages = {
    'E-learning-Portal': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    'qoute-voute-react-challenge': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    'DiceApp-Challenge': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop',
    'React-Quiz-App': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop&auto=format',
    'react-quiz-app': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop&auto=format',
    'Basic-React-todo-app': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop'
  };

  // Function to normalize project names for matching
  const normalizeName = (name) => name.toLowerCase().replace(/-/g, '').replace(/_/g, '');

  // Filter and map projects with flexible matching
  const filteredProjects = repos
    .filter(repo => {
      const normalizedRepoName = normalizeName(repo.name);
      return includedProjects.some(included => 
        normalizeName(included) === normalizedRepoName || 
        repo.name === included
      );
    })
    .map(repo => {
      // Find the matching project name from includedProjects (handles variations)
      const matchedName = includedProjects.find(included => 
        normalizeName(included) === normalizeName(repo.name) || 
        repo.name === included
      ) || repo.name;
      
      // Try to find image with multiple name variations
      const imageKey = projectImages[matchedName] || 
                       projectImages[repo.name] || 
                       projectImages[normalizeName(repo.name)] ||
                       projectImages[matchedName.toLowerCase()];
      
      return {
        ...repo,
        displayName: matchedName,
        description: projectDescriptions[matchedName] || repo.description,
        image: imageKey || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
      };
    });

  // Debug: Log to see what's being fetched
  console.log('All repos:', repos.map(r => r.name));
  console.log('Filtered projects:', filteredProjects.map(p => ({ name: p.name, displayName: p.displayName, hasImage: !!p.image })));

  return (
    <section id="projects" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Here are some of my featured projects. Each project includes a link to view the source code on GitHub.
        </p>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-20">
          <Loader className="animate-spin text-primary-600" size={48} />
        </div>
      )}

      {error && (
        <div className="text-center text-red-600 py-8">
          {error}. Please update your GitHub username in Projects.jsx
        </div>
      )}

      {!loading && !error && filteredProjects.length === 0 && (
        <div className="text-center text-gray-500 py-20">
          <p>No projects found. Please check your GitHub repositories.</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="card overflow-hidden p-0"
          >
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                onError={(e) => {
                  // Fallback to gradient if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.className = 'relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center';
                  e.target.parentElement.innerHTML = `<div class="text-white text-4xl font-bold">${project.name.charAt(0)}</div>`;
                }}
              />
              <div className="absolute top-4 right-4">
                <span className="text-xs text-white bg-black bg-opacity-50 px-3 py-1 rounded-full backdrop-blur-sm">
                  {project.language || 'N/A'}
                </span>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.displayName || project.name}
              </h3>
              <p className="text-gray-600 mb-4 min-h-[100px] text-sm leading-relaxed">
                {project.description || 'No description available'}
              </p>
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200">
                {project.html_url && (
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors font-medium"
                  >
                    <Github size={20} />
                    <span className="text-sm">View Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

