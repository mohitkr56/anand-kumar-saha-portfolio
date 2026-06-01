function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Anand<span className="logo-dot">.</span>
      </div>

      <ul className="nav-links">

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#journey">Journey</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#teaching">Teaching</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

      <a href="#contact" className="nav-btn">
        Let's Connect
      </a>

    </nav>
  );
}

export default Navbar;