import "./workouts.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import FeaturedCard from "../../components/FeatureCard/featurecard";
import WorkoutVideo from "../../components/WorkoutVideo/WorkoutVideo";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServerWorkoutCard from "../../components/ServerWorkoutCard/ServerWorkoutCard";
import WorkoutModal from "../../components/WorkoutModal/WorkoutModal";

import strength from "../../assets/images/strength.jpg";
import hiit from "../../assets/images/HIIT.jpg";

function Workouts() {
  const SERVER_URL = "https://divefitness-server.onrender.com";

  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${SERVER_URL}/api/workouts`)
      .then((response) => response.json())
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading workouts:", error);
        setLoading(false);
      });
  }, [SERVER_URL]);

  return (
    <main className="workouts-page">
      <div className="page-wrap">
        <section className="workout-hero">
          <div className="workout-hero__overlay">
            <div className="workout-hero__content">
              <h2>Sculpt Your Ideal Body</h2>
              <p>
                Minimal workout plans designed for maximum efficiency. No fluff,
                just results. Follow the plan, transform your life.
              </p>
              <Link className="workout-hero__btn" to="/assessments">
                Let’s Do It!
              </Link>
            </div>
          </div>
        </section>

        <section className="workout-section">
          <div className="workout-wrap">
            <SectionTitle
              title="Featured Plans"
              subtitle="Structured programs designed to maximize results with minimal wasted effort."
              center={true}
            />

            <div className="featured-grid">
              <FeaturedCard
                title="Strength Mastery"
                description="Build real muscle with this comprehensive 8-week strength training program using free weights."
                buttonText="Begin →"
                buttonLink="/assessments"
                secondaryText="Bookmark"
                image={strength}
                imageAlt="Strength training"
                reverse={false}
              />

              <FeaturedCard
                title="HIIT Cardio Blast"
                description="High-intensity interval training to burn fat efficiently and accelerate health in record time."
                buttonText="Begin →"
                buttonLink="/assessments"
                secondaryText="Bookmark"
                image={hiit}
                imageAlt="HIIT cardio"
                reverse={true}
              />
            </div>
          </div>
        </section>

        <section className="workout-section">
          <div className="workout-wrap">
            <SectionTitle
              title="Focus on Your Body"
              subtitle="Recovery is just as important as the workout itself. Explore guided mobility, stretching, and targeted training routines."
              center={true}
            />

            {loading ? (
              <p className="workouts-status">Loading workouts...</p>
            ) : (
              <div className="server-workouts-grid">
                {workouts.map((workout) => (
                  <ServerWorkoutCard
                    key={workout.id}
                    workout={workout}
                    serverUrl={SERVER_URL}
                    onClick={setSelectedWorkout}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <WorkoutVideo />

        <section className="workout-section workout-section--tight">
          <div className="workout-wrap">
            <h2 className="workout-title target-heading">Target Region</h2>

            <div className="target-grid">
              <div className="target-item">
                <div className="target-icon">🧘</div>
                <div>
                  <h3 className="workout-title-text">Yoga</h3>
                  <p>This section strengthens and stretches the body.</p>
                </div>
              </div>

              <div className="target-item">
                <div className="target-icon">💪</div>
                <div>
                  <h3 className="workout-title-text">Upper Body</h3>
                  <p>Build strength and shape the chest, arms, and shoulders.</p>
                </div>
              </div>

              <div className="target-item">
                <div className="target-icon">🦵</div>
                <div>
                  <h3 className="workout-title-text">Lower Body</h3>
                  <p>Strengthen glutes, hamstrings, quads, and calves.</p>
                </div>
              </div>

              <div className="target-item">
                <div className="target-icon">🔥</div>
                <div>
                  <h3 className="workout-title-text">Full Body</h3>
                  <p>For when you want results everywhere, all at once.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <WorkoutModal
        workout={selectedWorkout}
        onClose={() => setSelectedWorkout(null)}
        serverUrl={SERVER_URL}
      />
    </main>
  );
}

export default Workouts;