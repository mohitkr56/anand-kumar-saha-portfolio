function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>Technical Skills</h2>

      <p className="skill-note">
  🟢 Completed | 🟡 In Progress | 🔴 Next Learning Goals
      </p>

      <div className="skills-container">

        {/* COMPLETED */}

       <div className="skill-card completed">
  <h3>☕ Java</h3>
  <p>Core Java, JDBC, Collections, OOP Concepts</p>
</div>

<div className="skill-card completed">
  <h3>🎨 UI Development</h3>
  <p>HTML, CSS, JavaScript, Bootstrap</p>
</div>

<div className="skill-card ongoing">
  <h3>🛢️ Database</h3>
  <p>SQL, Oracle, PL/SQL, Database Design</p>
</div>

<div className="skill-card not-started">
  <h3>🍃 Spring Boot</h3>
  <p>Spring Framework, Spring Boot, REST APIs, Microservices</p>
</div>

<div className="skill-card ongoing">
  <h3>⚛️ React</h3>
  <p>React JS, Components, Hooks, Routing, State Management</p>
</div>

<div className="skill-card not-started">
  <h3>🐳 DevOps</h3>
  <p>Git, GitHub, Docker, Jenkins, Maven, JUnit</p>
</div>

<div className="skill-card not-started">
  <h3>☁️ AWS</h3>
  <p>Cloud Fundamentals, EC2, S3, Deployment Basics</p>
</div>


      </div>

    </section>
  );
}

export default Skills;