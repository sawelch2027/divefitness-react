import "./WorkoutModal.css";

function WorkoutModal({ workout, onClose, serverUrl }) {
  if (!workout) return null;

  return (
    <div className="workout-modal-overlay" onClick={onClose}>
      <div className="workout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="workout-modal-close" onClick={onClose}>
          ×
        </button>

        <img
          src={`${serverUrl}${workout.image}`}
          alt={workout.title}
          className="workout-modal-image"
        />

        <div className="workout-modal-content">
          <p className="workout-modal-category">{workout.category}</p>
          <h2>{workout.title}</h2>
          <p className="workout-modal-text">{workout.description}</p>

          <div className="workout-modal-meta">
            <span>{workout.duration}</span>
            <span>{workout.level}</span>
            <span>{workout.calories}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutModal;