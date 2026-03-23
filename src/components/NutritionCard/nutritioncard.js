import "./Nutritioncard.css";

function NutritionCard({ image, title, description, goal, calories, protein }) {
  return (
    <article className="menu-card">
      <img src={image} alt={title} />
      <div className="menu-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Goal:</strong> {goal}</p>
        <p><strong>Calories:</strong> {calories}</p>
        <p><strong>Protein:</strong> {protein}</p>
      </div>
    </article>
  );
}

export default NutritionCard; 