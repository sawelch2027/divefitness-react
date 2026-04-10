import { useEffect, useState } from "react";
import "./WorkoutSubmission.css";

const API_BASE = "https://divefitness-server.onrender.com";

function WorkoutSubmission() {
  const [workouts, setWorkouts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    duration: "",
    level: "Beginner",
    calories: "",
    image: "",
    shortDescription: "",
    description: ""
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  async function fetchWorkouts() {
    try {
      const response = await fetch(`${API_BASE}/api/workouts`);
      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      setStatusMessage("Unable to load workouts from the server.");
      setSubmitSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.title.trim() || formData.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }

    if (!formData.category.trim() || formData.category.trim().length < 3) {
      newErrors.category = "Category must be at least 3 characters.";
    }

    if (!formData.duration.trim() || formData.duration.trim().length < 3) {
      newErrors.duration = "Duration must be at least 3 characters.";
    }

    if (
      formData.level !== "Beginner" &&
      formData.level !== "Intermediate" &&
      formData.level !== "Advanced"
    ) {
      newErrors.level = "Level must be Beginner, Intermediate, or Advanced.";
    }

    if (!/^\d+\s?kcal$/.test(formData.calories.trim())) {
      newErrors.calories = 'Calories must look like "120 kcal".';
    }

    if (!formData.image.trim() || formData.image.trim().length < 5) {
      newErrors.image = "Image URL is required.";
    }

    if (
      !formData.shortDescription.trim() ||
      formData.shortDescription.trim().length < 10
    ) {
      newErrors.shortDescription =
        "Short description must be at least 10 characters.";
    }

    if (
      !formData.description.trim() ||
      formData.description.trim().length < 20
    ) {
      newErrors.description =
        "Description must be at least 20 characters.";
    }

    return newErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage("Please fix the errors in the form.");
      setSubmitSuccess(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/workouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors && Array.isArray(result.errors)) {
          setStatusMessage(result.errors.join(" "));
        } else {
          setStatusMessage("Unable to add workout.");
        }
        setSubmitSuccess(false);
        return;
      }

      setWorkouts((prevWorkouts) => [...prevWorkouts, result.workout]);
      setFormData({
        title: "",
        category: "",
        duration: "",
        level: "Beginner",
        calories: "",
        image: "",
        shortDescription: "",
        description: ""
      });
      setErrors({});
      setStatusMessage("Workout added successfully!");
      setSubmitSuccess(true);
    } catch (error) {
      setStatusMessage("Server error. Please try again.");
      setSubmitSuccess(false);
    }
  }

  return (
    <section className="workout-submit-section">
      <div className="workout-submit-header">
        <p className="section-tag">Community Workout Builder</p>
        <h2>Submit a New Training Session</h2>
        <p>
          Add a new DiveFitness workout to the collection. This section pulls
          live data from the backend and updates instantly when a new workout is posted.
        </p>
      </div>

      <div className="workout-submit-layout">
        <form className="workout-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="title">Workout Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Example: Power Endurance"
              />
              {errors.title && <p className="form-error">{errors.title}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                id="category"
                name="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                placeholder="Strength, Cardio, Recovery..."
              />
              {errors.category && <p className="form-error">{errors.category}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                id="duration"
                name="duration"
                type="text"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Example: 25 min"
              />
              {errors.duration && <p className="form-error">{errors.duration}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="level">Level</label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              {errors.level && <p className="form-error">{errors.level}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="calories">Calories</label>
              <input
                id="calories"
                name="calories"
                type="text"
                value={formData.calories}
                onChange={handleChange}
                placeholder="Example: 220 kcal"
              />
              {errors.calories && <p className="form-error">{errors.calories}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                id="image"
                name="image"
                type="text"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://..."
              />
              {errors.image && <p className="form-error">{errors.image}</p>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="shortDescription">Short Description</label>
            <textarea
              id="shortDescription"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder="Brief card summary..."
              rows="3"
            ></textarea>
            {errors.shortDescription && (
              <p className="form-error">{errors.shortDescription}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Full Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the workout in more detail..."
              rows="5"
            ></textarea>
            {errors.description && (
              <p className="form-error">{errors.description}</p>
            )}
          </div>

          <button type="submit" className="submit-workout-btn">
            Add Workout
          </button>

          {statusMessage && (
            <p className={submitSuccess ? "status success" : "status error"}>
              {statusMessage}
            </p>
          )}
        </form>

        <div className="server-workout-panel">
          <div className="panel-heading">
            <h3>Live Workouts From the Server</h3>
            <p>This list is stored in state and updates after successful submission.</p>
          </div>

          {loading ? (
            <p className="loading-text">Loading workouts...</p>
          ) : (
            <div className="server-workout-grid">
              {workouts.map((workout) => (
                <article className="server-workout-card" key={workout.id}>
                  <img
                    src={`${API_BASE}${workout.image.startsWith("/") ? workout.image : ""}${!workout.image.startsWith("/") ? "" : ""}`}
                    alt={workout.title}
                    className="server-workout-image"
                    onError={(e) => {
                      e.target.src = workout.image;
                    }}
                  />
                  <div className="server-workout-content">
                    <div className="server-pill-row">
                      <span>{workout.category}</span>
                      <span>{workout.level}</span>
                    </div>
                    <h4>{workout.title}</h4>
                    <p>{workout.shortDescription}</p>
                    <div className="server-meta-row">
                      <span>{workout.duration}</span>
                      <span>{workout.calories}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default WorkoutSubmission;