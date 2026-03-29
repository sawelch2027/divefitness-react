import "./workouts.css";
import { Link } from "react-router-dom";

import FeaturedCard from "../../components/FeatureCard/featurecard";
import WorkoutCard from "../../components/WorkoutCard/Workoutcard";
import WorkoutVideo from "../../components/WorkoutVideo/WorkoutVideo";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import strength from "../../assets/images/strength.jpg";
import hiit from "../../assets/images/HIIT.jpg";
import stretch from "../../assets/images/Stretch.jpg";
import workout1 from "../../assets/images/Workout1.jpg";
import workout2 from "../../assets/images/Workout 2.jpg";
import workout3 from "../../assets/images/Workout3.jpg";

function Workouts() {
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

            <div className="focus-grid">
              <WorkoutCard
                variant="big"
                image={stretch}
                imageAlt="Morning Mobility"
                title="Morning Mobility"
                description="Gentle stretching to wake up your body."
                meta="10 min"
                buttonText="Begin →"
                buttonLink="/assessments"
                secondaryText="Bookmark"
              />

              <div className="focus-right">
                <WorkoutCard
                  variant="stack"
                  image={workout2}
                  imageAlt="Upper Body Burn"
                  title="Upper Body Burn"
                  description="Target your arms, chest, and shoulders."
                  meta="20 min"
                  buttonText="Begin →"
                  buttonLink="/assessments"
                  secondaryText="Bookmark"
                />

                <div className="mini-grid">
                  <WorkoutCard
                    variant="mini"
                    image={workout1}
                    imageAlt="Core Crusher"
                    title="Core Crusher"
                    description="Quick ab-focused finisher."
                    buttonText="Begin →"
                    buttonLink="/assessments"
                  />

                  <WorkoutCard
                    variant="mini"
                    image={workout3}
                    imageAlt="Leg Liquifier"
                    title="Leg Liquifier"
                    description="Lower-body strength and endurance."
                    buttonText="Begin →"
                    buttonLink="/assessments"
                  />

                  <WorkoutCard
                    variant="mini"
                    image={strength}
                    imageAlt="Strength Builder"
                    title="Strength Builder"
                    description="Free-weight basics done right."
                    buttonText="Begin →"
                    buttonLink="/assessments"
                  />

                  <WorkoutCard
                    variant="mini"
                    image={hiit}
                    imageAlt="Quick HIIT"
                    title="Quick HIIT"
                    description="Fast-paced cardio circuit."
                    buttonText="Begin →"
                    buttonLink="/assessments"
                  />
                </div>
              </div>
            </div>
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
    </main>
  );
}

export default Workouts;