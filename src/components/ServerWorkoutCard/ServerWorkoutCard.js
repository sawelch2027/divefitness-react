import "./ServerWorkoutCard.css";

function ServerWorkoutCard({ workout, serverUrl, onClick }) {
  return (
    <article className="server-workout-card" onClick={() => onClick(workout)}>
      <img
        src={`${serverUrl}${workout.image}`}
        alt={workout.title}
        className="server-workout-card-image"
      />

      <div className="server-workout-card-body">
        <p className="server-workout-card-category">{workout.category}</p>
        <h3>{workout.title}</h3>
        <p className="server-workout-card-description">
          {workout.shortDescription}
        </p>

        <div className="server-workout-card-meta">
          <span>{workout.duration}</span>
          <span>{workout.level}</span>
        </div>
      </div>
    </article>
  );
}

export default ServerWorkoutCard;