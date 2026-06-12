import javaBadge from "../assets/java-badge.png";

function Journey() {
  return (
    <section className="journey" id="journey">

      <h2>My Journey</h2>

      <div className="timeline">

        <div className="timeline-card">
          <h3>2023</h3>
          <p>
            Completed M.Sc in Computer Science and
            Started Career as a Computer Science Teacher
          </p>
        </div>

        <div className="timeline-card">
          <h3>2023 - 2025</h3>
          <p>
            Worked as Computer Science Teacher
            & Exam Controller
          </p>
        </div>

        <div className="timeline-card">
          <h3>2026</h3>
          <p>
            Started Java Full Stack Development Training
          </p>
        </div>

      </div>

      <div className="coding-progress">

        <div className="coding-top">

          <div className="coding-left">

            <h3>🏆 HackerRank Progress</h3>

            <p className="milestone">
              27 More Problems To Reach My Goal 🚀
            </p>

          </div>

          <div className="coding-badge">
            <img
              src={javaBadge}
              alt="Java Badge"
              className="java-badge-img"
            />
          </div>

        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "46%" }}
          ></div>
        </div>

        <div className="progress-stats">
          <span>23 / 50 Problems Solved</span>
        </div>

        <p className="coding-desc">
          HackerRank • Java • Problem Solving • DSA
        </p>

      </div>

    </section>
  );
}

export default Journey;