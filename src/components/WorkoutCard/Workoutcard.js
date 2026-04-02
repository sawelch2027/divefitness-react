import "./WorkoutCard.css";

function WorkoutCard({ workout, onClick, serverUrl }) {
  return (
    <article className="workout-card" onClick={() => onClick(workout)}>
      <img
        src={`${serverUrl}${workout.image}`}
        alt={workout.title}
        className="workout-card-image"
      />
      <div className="workout-card-body">
        <p className="workout-card-category">{workout.category}</p>
        <h3>{workout.title}</h3>
        <p className="workout-card-description">{workout.shortDescription}</p>

        <div className="workout-card-meta">
          <span>{workout.duration}</span>
          <span>{workout.level}</span>
        </div>
      </div>
    </article>
  );
}

export default WorkoutCard;