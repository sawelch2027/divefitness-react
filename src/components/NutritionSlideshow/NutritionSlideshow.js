import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NutritionSlideshow.css";

import Stretch from "../../assets/images/Stretch.jpg";
import nutrition3 from "../../assets/images/Nutrition3.jpg";
import muscle from "../../assets/images/Muscle.jpg";

function NutritionSlideshow() {
  const slides = [
    {
      image: Stretch,
      title: "Fuel Your Ambition",
      text: "Proper nutrition is one of your results’ secret weapons. Build meals that support performance, recovery, and consistency.",
      buttonText: "Get my Assessment →",
      buttonLink: "/assessments"
    },
    {
      image: nutrition3,
      title: "Eat for Performance",
      text: "Balance protein, carbs, and fats to support energy, training output, and long-term progress without overcomplicating nutrition.",
      buttonText: "Explore Your Goals →",
      buttonLink: "/nutrition"
    },
    {
      image: muscle,
      title: "Build Smarter Habits",
      text: "Whether your goal is weight loss, maintenance, or muscle gain, smart meal structure makes progress easier to sustain.",
      buttonText: "Start Planning →",
      buttonLink: "/assessments"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  function goToSlide(index) {
    setCurrentSlide(index);
  }

  return (
    <section
      className="nutrition-slideshow"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="nutrition-slideshow-overlay">
        <div className="nutrition-slideshow-content">
          <div className="nutrition-slideshow-copy">
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].text}</p>

            <Link to={slides[currentSlide].buttonLink} className="primary-btn">
              {slides[currentSlide].buttonText}
            </Link>
          </div>

          <div className="slide-dots">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={currentSlide === index ? "dot active" : "dot"}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NutritionSlideshow;