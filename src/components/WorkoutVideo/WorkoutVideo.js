import "./WorkoutVideo.css";
import { Link } from "react-router-dom";

function WorkoutVideo() {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-text">
          <p className="video-eyebrow">Guided Workout</p>
          <h2>Train With Us</h2>
          <p>
            Follow along with one of our favorite guided workout videos and
            stay consistent with a routine that keeps you moving.
          </p>
          <Link to="/assessments" className="video-btn">
            Start Your Plan →
          </Link>
        </div>

        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/ml6cT4AZdqI"
            title="Workout Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default WorkoutVideo;