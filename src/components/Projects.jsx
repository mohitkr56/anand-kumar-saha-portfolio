
function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>Things I've Built</h2>

      <div className="projects-container">

        {/* Employee Payroll Management System */}

        <div className="project-card featured">

          <span className="featured-badge">
            Featured Project
          </span>

          <h3>💼 Employee Payroll Management System</h3>

          <p className="tech-stack">
            Core Java • Java Swing • JDBC • Oracle Database
          </p>

          <p>
            A desktop-based Employee Payroll Management System
            designed to manage employee records, automate salary
            calculations, generate payroll, and maintain payroll
            history with database integration.
          </p>

          <ul>
            <li>Employee Management (Add, Update, Delete & Search)</li>
            <li>Payroll Generation and Salary Calculation</li>
            <li>Gross Salary, Deductions & Net Salary</li>
            <li>Duplicate Payroll Prevention</li>
            <li>Dashboard with Statistics and Charts</li>
            <li>Payroll History and Reports</li>
            <li>CSV Export Functionality</li>
          </ul>

          <div className="project-links">
            <a
              href="https://lnkd.in/d_p8zycz"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code →
            </a>
          </div>

        </div>


        {/* Library Management System */}

        <div className="project-card">

          <h3>📚 Library Management System</h3>

          <p className="tech-stack">
            Core Java • Java Swing • OOP • Collections
          </p>

          <p>
            A Library Management System developed using Core Java
            and Java Swing, applying Object-Oriented Programming
            concepts and Collections to build an interactive
            desktop application.
          </p>

          <ul>
            <li>Core Java Implementation</li>
            <li>Object-Oriented Programming Concepts</li>
            <li>Collections Framework</li>
            <li>Java Swing GUI Development</li>
            <li>Interactive Desktop Application</li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/mohitkr56/LibraryManagementSystem"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code →
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
