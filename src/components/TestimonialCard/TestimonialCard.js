import "./TestimonialCard.css";

function TestimonialCard({ quote, image, name, description }) {
  return (
    <div className="testimonial-card">
      <p className="quote">“{quote}”</p>

      <div className="person">
        <img src={image} alt={name} />
        <div>
          <p className="name">{name}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;