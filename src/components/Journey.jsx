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
          <h3>2025</h3>
          <p>
            Started Java Full Stack Development Training
          </p>
        </div>

      </div>

      <div className="coding-progress">

        <h3>💻LeetCode Progress</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "20%" }}
          ></div>
        </div>

        <div className="progress-stats">
          <span>20 / 50 Problems Solved</span>
        </div>

        <p className="coding-desc">
          LeetCode • Java • Problem Solving • DSA
        </p>

      </div>

    </section>
  );
}

export default Journey;