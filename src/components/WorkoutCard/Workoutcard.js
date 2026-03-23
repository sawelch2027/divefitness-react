import "./Workoutcard.css";
import { Link } from "react-router-dom";

function WorkoutCard({
  variant = "mini",
  image,
  imageAlt,
  title,
  description,
  meta,
  buttonText,
  buttonLink,
  secondaryText
}) {
  if (variant === "big") {
    return (
      <div className="focus-card focus-card--big">
        <img src={image} alt={imageAlt} />
        <div className="focus-card__bar">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            {meta && <div className="workout-meta">{meta}</div>}
          </div>

          <div className="focus-actions">
            <Link className="btn-dark" to={buttonLink}>
              {buttonText}
            </Link>
            {secondaryText && (
              <a className="btn-light" href="#!">
                {secondaryText}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "stack") {
    return (
      <div className="focus-card focus-card--stack">
        <img src={image} alt={imageAlt} />
        <div className="focus-card__stacktext">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            {meta && <div className="workout-meta">{meta}</div>}
          </div>

          <div className="featured-actions">
            <Link className="btn-dark" to={buttonLink}>
              {buttonText}
            </Link>
            {secondaryText && (
              <a className="btn-light" href="#!">
                {secondaryText}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mini-card">
      <img src={image} alt={imageAlt} />
      <div className="mini-card__text">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="featured-actions">
          <Link className="btn-dark" to={buttonLink}>
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkoutCard;