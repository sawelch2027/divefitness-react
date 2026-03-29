import "./nutrition.css";
import { Link } from "react-router-dom";
import NutritionCard from "../../components/NutritionCard/nutritioncard";
import NutritionSlideshow from "../../components/NutritionSlideshow/NutritionSlideshow";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import food from "../../data/food";

import weightloss1 from "../../assets/images/weightloss1.jpg";
import nutrition3 from "../../assets/images/Nutrition3.jpg";
import muscle from "../../assets/images/Muscle.jpg";
import nutrition2 from "../../assets/images/Nutrition2.jpg";

function Nutrition() {
  return (
    <main className="nutrition-page">
      <div className="page-wrap">
        <NutritionSlideshow />

        <section className="nutri-section">
          <SectionTitle
            title="Choose Your Goal"
            subtitle="Select a nutrition approach that aligns with your fitness goals and lifestyle."
            center={true}
          />

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
          <SectionTitle
            title="Example Daily Menu"
            subtitle="A sample breakdown of meals designed to support performance, recovery, and consistency."
            center={true}
          />

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