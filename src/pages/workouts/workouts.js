import "./workouts.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FeaturedCard from "../../components/FeatureCard/featurecard";
import WorkoutCard from "../../components/WorkoutCard/Workoutcard";
import WorkoutSubmission from "../../components/WorkoutSubmission/WorkoutSubmission";

import strength from "../../assets/images/strength.jpg";
import hiit from "../../assets/images/HIIT.jpg";
import stretch from "../../assets/images/Stretch.jpg";
import workout1 from "../../assets/images/Workout1.jpg";
import workout2 from "../../assets/images/Workout 2.jpg";
import workout3 from "../../assets/images/Workout3.jpg";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [editingWorkout, setEditingWorkout] = useState(null);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getWorkouts();
  }, []);

  async function getWorkouts() {
    try {
      const response = await fetch("http://localhost:3001/api/workouts");
      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.log("Error fetching workouts:", error);
    }
  }

  function validateWorkout(workout) {
    const newErrors = {};

    if (!workout.title || workout.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }

    if (!workout.category || workout.category.trim().length < 3) {
      newErrors.category = "Category must be at least 3 characters.";
    }

    if (!workout.duration || workout.duration.trim().length < 3) {
      newErrors.duration = "Duration must be at least 3 characters.";
    }

    if (!workout.level || !["Beginner", "Intermediate", "Advanced"].includes(workout.level)) {
      newErrors.level = "Level must be Beginner, Intermediate, or Advanced.";
    }

    if (!workout.calories || !/^\d+\s?kcal$/.test(workout.calories.trim())) {
      newErrors.calories = "Calories must look like 120 kcal.";
    }

    if (!workout.image || workout.image.trim().length < 5) {
      newErrors.image = "Image must be at least 5 characters.";
    }

    if (!workout.shortDescription || workout.shortDescription.trim().length < 10) {
      newErrors.shortDescription = "Short description must be at least 10 characters.";
    }

    if (!workout.description || workout.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters.";
    }

    return newErrors;
  }

  async function deleteWorkout(id) {
    try {
      const response = await fetch(`http://localhost:3001/api/workouts/${id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        setWorkouts(workouts.filter((workout) => workout.id !== id));
        setMessage("Workout deleted successfully.");
      }
    } catch (error) {
      console.log("Error deleting workout:", error);
    }
  }

  async function updateWorkout(updatedWorkout) {
    const validationErrors = validateWorkout(updatedWorkout);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      const response = await fetch(`http://localhost:3001/api/workouts/${updatedWorkout.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedWorkout)
      });

      const data = await response.json();

      if (response.ok) {
        setWorkouts(
          workouts.map((workout) =>
            workout.id === updatedWorkout.id ? data.workout : workout
          )
        );

        setEditingWorkout(null);
        setMessage("Workout updated successfully.");
      }
    } catch (error) {
      console.log("Error updating workout:", error);
    }
  }

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
            <h2 className="workout-title">Featured Plans</h2>

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
            <h2 className="workout-title">Focus on your Body</h2>
            <p className="workout-subtext">
              Recovery is just as important as the workout itself. Explore our
              library of guided stretching and yoga routines designed to improve
              flexibility, reduce soreness, and prevent injury.
            </p>

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

        <section className="workout-section">
          <div className="workout-wrap">
            <h2 className="workout-title">Manage Workouts</h2>

            {message && <p className="success-message">{message}</p>}

            <div className="server-workout-list">
              {workouts.map((workout) => (
                <div className="server-workout-card" key={workout.id}>
                  <img src={`http://localhost:3001${workout.image}`} alt={workout.title} />
                  <h3>{workout.title}</h3>
                  <p><strong>Category:</strong> {workout.category}</p>
                  <p><strong>Duration:</strong> {workout.duration}</p>
                  <p><strong>Level:</strong> {workout.level}</p>
                  <p><strong>Calories:</strong> {workout.calories}</p>
                  <p>{workout.shortDescription}</p>

                  <button onClick={() => setEditingWorkout(workout)}>Edit</button>
                  <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
                </div>
              ))}
            </div>

            {editingWorkout && (
              <EditWorkoutForm
                workout={editingWorkout}
                onUpdate={updateWorkout}
                errors={errors}
              />
            )}
          </div>
        </section>

        <section className="workout-section">
          <div className="workout-wrap">
            <WorkoutSubmission />
          </div>
        </section>
      </div>
    </main>
  );
}

function EditWorkoutForm({ workout, onUpdate, errors }) {
  const [formData, setFormData] = useState({
    id: workout.id,
    title: workout.title,
    category: workout.category,
    duration: workout.duration,
    level: workout.level,
    calories: workout.calories,
    image: workout.image,
    shortDescription: workout.shortDescription,
    description: workout.description
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdate(formData);
  }

  return (
    <form className="edit-workout-form" onSubmit={handleSubmit}>
      <h3>Edit Workout</h3>

      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
      {errors.title && <p className="error-message">{errors.title}</p>}

      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      {errors.category && <p className="error-message">{errors.category}</p>}

      <input name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration" />
      {errors.duration && <p className="error-message">{errors.duration}</p>}

      <input name="level" value={formData.level} onChange={handleChange} placeholder="Level" />
      {errors.level && <p className="error-message">{errors.level}</p>}

      <input name="calories" value={formData.calories} onChange={handleChange} placeholder="Calories" />
      {errors.calories && <p className="error-message">{errors.calories}</p>}

      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image path" />
      {errors.image && <p className="error-message">{errors.image}</p>}

      <input
        name="shortDescription"
        value={formData.shortDescription}
        onChange={handleChange}
        placeholder="Short description"
      />
      {errors.shortDescription && <p className="error-message">{errors.shortDescription}</p>}

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      {errors.description && <p className="error-message">{errors.description}</p>}

      <button type="submit">Save Changes</button>
    </form>
  );
}

export default Workouts;