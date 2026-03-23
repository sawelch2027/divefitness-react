import "./Featurecard.css";
import { Link } from "react-router-dom";

function FeaturedCard({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryText,
  image,
  imageAlt,
  reverse = false
}) {
  return (
    <div className={`featured-pair ${reverse ? "reverse" : ""}`}>
      <div className="featured-card featured-card--text">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="featured-actions">
          <Link className="btn-dark" to={buttonLink}>
            {buttonText}
          </Link>
          <a className="btn-light" href="#!">
            {secondaryText}
          </a>
        </div>
      </div>

      <div className="featured-card featured-card--image">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}

export default FeaturedCard;