function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>Featured Projects</h2>

      <div className="projects-container">

        {/* LoopLabs Project */}

        <div className="project-card featured">

          <span className="featured-badge">
            Featured Project
          </span>

          <h3>🚀 LoopLabs</h3>

          <p className="tech-stack">
            Spring Boot • Spring Security • MySQL • Docker • CI/CD
          </p>

          <p>
            Enterprise-grade Role-Based Learning Management System
            implementing secure authentication, authorization,
            admin management, Docker deployment and CI automation.
          </p>

          <ul>
            <li>Role-Based Access Control (RBAC)</li>
            <li>Spring Security Authentication</li>
            <li>Admin Dashboard & User Management</li>
            <li>Docker & Docker Compose</li>
            <li>GitHub Actions CI/CD Pipeline</li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/mohitkr56/looplabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>

        </div>

        {/* Portfolio Project */}

        <div className="project-card">

          <h3>🌐 Personal Portfolio Website</h3>

          <p className="tech-stack">
            React • Vite • CSS
          </p>

          <p>
            Modern responsive portfolio website showcasing
            professional journey, technical skills,
            teaching experience and featured projects.
          </p>

          <ul>
            <li>Responsive Design</li>
            <li>Modern UI/UX</li>
            <li>React Components</li>
            <li>Smooth Navigation</li>
            <li>Resume Download Integration</li>
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

      </div>

    </section>
  );
}

export default Projects;