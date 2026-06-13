import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <h4>WELCOME</h4>
        <h1>
          Anand Kumar <span className="highlight">Saha</span>
        </h1>

        <h2>
          Building a Career in the IT Industry
         
        </h2>

        <p>
          Problem Solver • Technology Enthusiast • Continuous Learner
        </p>

        <div className="hero-buttons">

         <a
          href="/Mr.Anand_IT_Resume.pdf"
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