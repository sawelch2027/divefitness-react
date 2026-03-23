import "./nutrition.css";
import { Link } from "react-router-dom";
import NutritionCard from "../../components/NutritionCard/nutritioncard";
import food from "../../data/food";

import weightloss1 from "../../assets/images/weightloss1.jpg";
import nutrition3 from "../../assets/images/Nutrition3.jpg";
import muscle from "../../assets/images/Muscle.jpg";
import nutrition2 from "../../assets/images/Nutrition2.jpg";

function Nutrition() {
  return (
    <main className="nutrition-page">
      <div className="page-wrap">
        <section className="nutrition-hero">
          <div className="nutrition-overlay">
            <div className="nutrition-top">
              <div className="nutrition-copy">
                <h2>Fuel Your Ambition</h2>
                <p>
                  Proper nutrition is one of your results’ secret weapons. Our
                  meal plans balance all your macros: high protein, efficient
                  fats, and carbs designed to support pacing and results.
                </p>
              </div>

              <Link to="/assessments" className="primary-btn">
                Get my Assessment →
              </Link>
            </div>

            <div className="macro-cards">
              <div className="macro-card">
                <h4>Protein</h4>
                <p>Builds/repairs muscle, keeps you full, supports recovery.</p>
                <ul>
                  <li>Target: 20–40g/meal</li>
                  <li>Chicken, fish, eggs, Greek yogurt</li>
                </ul>
              </div>

              <div className="macro-card">
                <h4>Carbs</h4>
                <p>Your training fuel—supports performance and energy.</p>
                <ul>
                  <li>Prioritize: whole grains, fruit</li>
                  <li>Time more carbs around workouts</li>
                </ul>
              </div>

              <div className="macro-card">
                <h4>Fats</h4>
                <p>Hormone support + long-lasting energy + absorption.</p>
                <ul>
                  <li>Focus: olive oil, nuts, avocado</li>
                  <li>Balance portions (calorie dense)</li>
                </ul>
              </div>

              <div className="macro-card">
                <h4>Micros + Fiber</h4>
                <p>Gut health, recovery, immunity, and steady energy.</p>
                <ul>
                  <li>Veggies at 2+ meals/day</li>
                  <li>Fiber goal: 25–35g/day</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="nutri-section">
          <h2 className="nutri-title">Choose Your Goal</h2>

          <div className="goal-grid">
            <article className="goal-card">
              <img src={weightloss1} alt="Weight loss goal" />
              <h3>Weight Loss</h3>
              <p>
                Target fat loss, not your strength. We use high-volume meals and
                balanced protein to keep you full and consistent.
              </p>
            </article>

            <article className="goal-card">
              <img src={nutrition3} alt="Maintain goal" />
              <h3>Maintain</h3>
              <p>
                Keep performance high while staying lean. Learn how to hit daily
                macros without overthinking meal timing.
              </p>
            </article>

            <article className="goal-card">
              <img src={muscle} alt="Weight gain goal" />
              <h3>Weight Gain</h3>
              <p>
                Build muscle efficiently with surplus-focused meals that
                prioritize protein and smart carb sources for training fuel.
              </p>
            </article>
          </div>
        </section>

        <section className="macro-section">
          <div className="macro-inner">
            <div className="macro-left">
              <h2>Calculate Your Macros</h2>
              <p>
                Not sure exactly what you need? Our advanced macro calculator
                takes your age, weight, activity level, and goals to give you the
                perfect numbers.
              </p>

              <div className="macro-actions">
                <Link to="/assessments" className="macro-btn dark">
                  Open Calculator →
                </Link>
                <Link to="/" className="macro-btn light">
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="macro-right">
              <img src={nutrition2} alt="Nutrition collage" />
            </div>
          </div>
        </section>

        <section className="nutri-section">
          <h2 className="nutri-title">Example Daily Menu</h2>
          <div className="menu-grid">
            {food.map((item, index) => (
              <NutritionCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                goal={item.goal}
                calories={item.calories}
                protein={item.protein}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Nutrition;