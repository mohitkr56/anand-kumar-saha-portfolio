function Projects() {
return ( <section className="projects" id="projects">

  <h2>Things I'm Building</h2>

  <div className="projects-container">

    <div className="project-card featured">

      <span className="featured-badge">
        Featured Project
      </span>

      <h3>🌐 Personal Portfolio Website</h3>

      <p className="tech-stack">
        React • Vite • CSS
      </p>

      <p>
        Modern responsive portfolio website showcasing
my journey, skills, projects, and continuous
learning in technology.
      </p>

      <ul>
        <li>Responsive Design</li>
        <li>Modern UI/UX</li>
        <li>React Components</li>
        <li>Smooth Navigation</li>
        <li>Resume Download Integration</li>
        <li>GitHub & Vercel Deployment</li>
      </ul>

      <div className="project-links">
        <a
          href="https://github.com/mohitkr56/portfolio-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>

    </div>

    <div className="project-card">

      <h3>🚧 📚 BookNest (In Progress)</h3>

      <p className="tech-stack">
        Java • Spring Boot • React • SQL
      </p>

      <p>
       A platform designed for book lovers to organize their personal library,
        track reading progress, discover new books, write notes, save favorite quotes, and build a meaningful reading journey.
      </p>

      <ul>
        <li>Spring Boot REST APIs</li>
        <li>Database Integration</li>
        <li>Authentication & Authorization</li>
        <li>Microservices Architecture</li>
        <li>Cloud Deployment</li>
      </ul>

    </div>

  </div>

</section>

);
}

export default Projects;
