import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <h4>WELCOME TO MY PORTFOLIO</h4>

        <h1>
          Anand Kumar <span className="highlight">Saha</span>
        </h1>

        <h2>
          Former Computer Science Teacher
          <br />
          Transitioning into Java Full Stack Development
        </h2>

        <p>
          Educator • Mentor • Java Full Stack Developer
        </p>

        <div className="hero-buttons">

         <a
          href="/Anand_Kumar_Saha_Resume.pdf"
          download
        >
          <button className="resume-btn">
            Download Resume
          </button>
        </a>

          <a href="#contact">
            <button className="contact-btn">
              Let's Connect
            </button>
          </a>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={profile}
          alt="Anand Kumar Saha"
          className="profile-image"
        />

      </div>

    </section>
  );
}

export default Hero;