function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Let's Connect</h2>

      <p className="contact-subtitle">
        Open to Java Full Stack Developer opportunities,
        collaborations and networking.
      </p>

      <div className="contact-wrapper">

        <div className="contact-info">

          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>
              <a href="mailto:anandsaha6088@gmail.com">
                anandsaha6088@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>📱 Phone</h3>
            <p>
              <a href="tel:+918436990394">
                +91 8436990394
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>Asansol, West Bengal, India</p>
          </div>

          <div className="contact-item">
            <h3>💼 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/anand-kumar-s-a03210209/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn Profile
            </a>
          </div>

          <div className="contact-item">
            <h3>💻 GitHub</h3>
            <a
              href="https://github.com/mohitkr56"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </div>

        </div>

        <div className="contact-message">

          <h3>Let's Work Together 🚀</h3>

          <p>
            I am currently transitioning into Java Full Stack Development
            and actively looking for opportunities where I can contribute,
            learn, and grow while building scalable software solutions.
          </p>

          <div className="contact-actions">

            <a
              href="mailto:anandsaha6088@gmail.com"
              className="contact-btn-main"
            >
              Send Email
            </a>

           

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;