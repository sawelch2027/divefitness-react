import { useEffect, useState } from "react";
import "./WorkoutSubmission.css";

const API_BASE = "https://divefitness-server.onrender.com";

function WorkoutSubmission() {
  const emptyForm = {
    title: "",
    category: "",
    duration: "",
    level: "Beginner",
    calories: "",
    image: "",
    shortDescription: "",
    description: ""
  };

  const emptyEditForm = {
    id: "",
    title: "",
    category: "",
    duration: "",
    level: "Beginner",
    calories: "",
    image: "",
    shortDescription: "",
    description: ""
  };

  const [workouts, setWorkouts] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editFormData, setEditFormData] = useState(emptyEditForm);
  const [editingWorkout, setEditingWorkout] = useState(null);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  useEffect(() => {
    if (editingWorkout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [editingWorkout]);

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

  function handleEditChange(event) {
    const { name, value } = event.target;

    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function validateForm(data) {
    const newErrors = {};

    if (!data.title.trim() || data.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }

    if (!data.category.trim() || data.category.trim().length < 3) {
      newErrors.category = "Category must be at least 3 characters.";
    }

    if (!data.duration.trim() || data.duration.trim().length < 3) {
      newErrors.duration = "Duration must be at least 3 characters.";
    }

    if (
      data.level !== "Beginner" &&
      data.level !== "Intermediate" &&
      data.level !== "Advanced"
    ) {
      newErrors.level = "Level must be Beginner, Intermediate, or Advanced.";
    }

    if (!/^\d+\s?kcal$/.test(data.calories.trim())) {
      newErrors.calories = 'Calories must look like "120 kcal".';
    }

    if (!data.image.trim() || data.image.trim().length < 5) {
      newErrors.image = "Image URL is required.";
    }

    if (!data.shortDescription.trim() || data.shortDescription.trim().length < 10) {
      newErrors.shortDescription =
        "Short description must be at least 10 characters.";
    }

    if (!data.description.trim() || data.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters.";
    }

    return newErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm(formData);
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
      setFormData(emptyForm);
      setErrors({});
      setStatusMessage("Workout added successfully!");
      setSubmitSuccess(true);
    } catch (error) {
      setStatusMessage("Server error. Please try again.");
      setSubmitSuccess(false);
    }
  }

  function startEdit(workout) {
    setEditingWorkout(workout);

    setEditFormData({
      id: workout.id,
      title: workout.title || "",
      category: workout.category || "",
      duration: workout.duration || "",
      level: workout.level || "Beginner",
      calories: workout.calories || "",
      image: workout.image || "",
      shortDescription: workout.shortDescription || "",
      description: workout.description || ""
    });

    setErrors({});
    setStatusMessage("");
    setSubmitSuccess(false);
  }

  function cancelEdit() {
    setEditingWorkout(null);
    setEditFormData(emptyEditForm);
    setErrors({});
    setStatusMessage("");
    setSubmitSuccess(false);
  }

  async function handleUpdate(event) {
  event.preventDefault();

  const validationErrors = validateForm(editFormData);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    setStatusMessage("Please fix the errors in the edit form.");
    setSubmitSuccess(false);
    return;
  }

  const workoutToSend = {
    title: editFormData.title,
    category: editFormData.category,
    duration: editFormData.duration,
    level: editFormData.level,
    calories: editFormData.calories,
    image: editFormData.image,
    shortDescription: editFormData.shortDescription,
    description: editFormData.description
  };

  try {
    const response = await fetch(
      `${API_BASE}/api/workouts/${editFormData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(workoutToSend)
      }
    );

    const result = await response.json();

    if (!response.ok) {
      if (result.errors && Array.isArray(result.errors)) {
        setStatusMessage(result.errors.join(" "));
      } else {
        setStatusMessage("Unable to update workout.");
      }
      setSubmitSuccess(false);
      return;
    }

    setWorkouts((prevWorkouts) =>
      prevWorkouts.map((workout) =>
        workout.id === result.workout.id ? result.workout : workout
      )
    );

    setStatusMessage("Workout updated successfully!");
    setSubmitSuccess(true);
    setEditingWorkout(null);
    setEditFormData(emptyEditForm);
    setErrors({});
  } catch (error) {
    setStatusMessage("Error updating workout.");
    setSubmitSuccess(false);
  }
}

  async function handleDelete(id) {
    try {
      const response = await fetch(`${API_BASE}/api/workouts/${id}`, {
        method: "DELETE"
      });

      const result = await response.json();

      if (!response.ok) {
        setStatusMessage(result.error || "Unable to delete workout.");
        setSubmitSuccess(false);
        return;
      }

      setWorkouts((prevWorkouts) =>
        prevWorkouts.filter((workout) => workout.id !== id)
      );

      if (editingWorkout && editingWorkout.id === id) {
        cancelEdit();
      }

      setStatusMessage("Workout deleted successfully.");
      setSubmitSuccess(true);
    } catch (error) {
      setStatusMessage("Error deleting workout.");
      setSubmitSuccess(false);
    }
  }

  function getImageSrc(workout) {
    if (
      workout.image.startsWith("http://") ||
      workout.image.startsWith("https://")
    ) {
      return workout.image;
    }

    return `${API_BASE}${workout.image}`;
  }

  return (
    <section className="workout-submit-section">
      <div className="workout-submit-header">
        <p className="section-tag">Community Workout Builder</p>
        <h2>Submit a New Training Session</h2>
        <p>
          Add a new DiveFitness workout to the collection. This section pulls
          live data from the backend and updates instantly when a new workout is
          posted.
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
              {errors.title && !editingWorkout && (
                <p className="form-error">{errors.title}</p>
              )}
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
              {errors.category && !editingWorkout && (
                <p className="form-error">{errors.category}</p>
              )}
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
              {errors.duration && !editingWorkout && (
                <p className="form-error">{errors.duration}</p>
              )}
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
              {errors.level && !editingWorkout && (
                <p className="form-error">{errors.level}</p>
              )}
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
              {errors.calories && !editingWorkout && (
                <p className="form-error">{errors.calories}</p>
              )}
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
              {errors.image && !editingWorkout && (
                <p className="form-error">{errors.image}</p>
              )}
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
            {errors.shortDescription && !editingWorkout && (
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
            {errors.description && !editingWorkout && (
              <p className="form-error">{errors.description}</p>
            )}
          </div>

          <button type="submit" className="submit-workout-btn">
            Add Workout
          </button>

          {statusMessage && !editingWorkout && (
            <p className={submitSuccess ? "status success" : "status error"}>
              {statusMessage}
            </p>
          )}
        </form>

        <div className="server-workout-panel">
          <div className="panel-heading">
            <h3>Live Workouts From the Server</h3>
            <p>
              This list is stored in state and updates after successful
              submission, editing, and deletion.
            </p>
          </div>

          {loading ? (
            <p className="loading-text">Loading workouts...</p>
          ) : (
            <div className="server-workout-grid">
              {workouts.map((workout) => (
                <article className="server-workout-card" key={workout.id}>
                  <img
                    src={getImageSrc(workout)}
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

                    <div className="server-actions">
                      <button
                        type="button"
                        className="edit-btn"
                        onClick={() => startEdit(workout)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleDelete(workout.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {editingWorkout && (
        <div className="modal-overlay" onClick={cancelEdit}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form className="workout-form edit-form" onSubmit={handleUpdate} noValidate>
              <h3>Edit Workout</h3>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="edit-title">Workout Title</label>
                  <input
                    id="edit-title"
                    name="title"
                    type="text"
                    value={editFormData.title}
                    onChange={handleEditChange}
                    placeholder="Example: Power Endurance"
                  />
                  {errors.title && <p className="form-error">{errors.title}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="edit-category">Category</label>
                  <input
                    id="edit-category"
                    name="category"
                    type="text"
                    value={editFormData.category}
                    onChange={handleEditChange}
                    placeholder="Strength, Cardio, Recovery..."
                  />
                  {errors.category && <p className="form-error">{errors.category}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="edit-duration">Duration</label>
                  <input
                    id="edit-duration"
                    name="duration"
                    type="text"
                    value={editFormData.duration}
                    onChange={handleEditChange}
                    placeholder="Example: 25 min"
                  />
                  {errors.duration && <p className="form-error">{errors.duration}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="edit-level">Level</label>
                  <select
                    id="edit-level"
                    name="level"
                    value={editFormData.level}
                    onChange={handleEditChange}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  {errors.level && <p className="form-error">{errors.level}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="edit-calories">Calories</label>
                  <input
                    id="edit-calories"
                    name="calories"
                    type="text"
                    value={editFormData.calories}
                    onChange={handleEditChange}
                    placeholder="Example: 220 kcal"
                  />
                  {errors.calories && <p className="form-error">{errors.calories}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="edit-image">Image URL</label>
                  <input
                    id="edit-image"
                    name="image"
                    type="text"
                    value={editFormData.image}
                    onChange={handleEditChange}
                    placeholder="https://..."
                  />
                  {errors.image && <p className="form-error">{errors.image}</p>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="edit-shortDescription">Short Description</label>
                <textarea
                  id="edit-shortDescription"
                  name="shortDescription"
                  value={editFormData.shortDescription}
                  onChange={handleEditChange}
                  placeholder="Brief card summary..."
                  rows="3"
                ></textarea>
                {errors.shortDescription && (
                  <p className="form-error">{errors.shortDescription}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="edit-description">Full Description</label>
                <textarea
                  id="edit-description"
                  name="description"
                  value={editFormData.description}
                  onChange={handleEditChange}
                  placeholder="Describe the workout in more detail..."
                  rows="5"
                ></textarea>
                {errors.description && (
                  <p className="form-error">{errors.description}</p>
                )}
              </div>

              <div className="server-actions">
                <button type="submit" className="submit-workout-btn">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </div>

              {statusMessage && (
                <p className={submitSuccess ? "status success" : "status error"}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default WorkoutSubmission;