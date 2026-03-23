import { useState } from "react";
import { Link } from "react-router-dom";
import "./assessments.css";


function Assessment() {
  const [unit, setUnit] = useState("imperial");

  return (
    <>

      {/* STEPS */}
      <section className="assessment-steps">
        <div className="page-wrap">
          <h2 className="steps-title">How Your Assessment Works</h2>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Enter Your Metrics</h3>
              <p>
                Provide your height, weight, and other basic information so we
                can estimate your daily energy needs.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Calculate Your Results</h3>
              <p>
                Our calculator estimates calories and macro ranges tailored to
                your activity level and goals.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Build Your Plan</h3>
              <p>
                Use your results to choose workouts and nutrition strategies
                that fit your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="assessment-page">
        <div className="page-wrap">
          <section className="assessment-grid">

            {/* LEFT CARD */}
            <div className="metrics-card">
              <div className="metrics-top">
                <h2>Body Metrics</h2>

                <div className="unit-tabs">
                  <button
                    className={`unit-tab ${unit === "imperial" ? "active" : ""}`}
                    onClick={() => setUnit("imperial")}
                  >
                    Imperial
                  </button>

                  <button
                    className={`unit-tab ${unit === "metric" ? "active" : ""}`}
                    onClick={() => setUnit("metric")}
                  >
                    Metric
                  </button>
                </div>
              </div>

              <form className="metrics-form">
                <label>
                  Age:
                  <input type="number" />
                </label>

                <label>
                  {unit === "imperial"
                    ? "Height (inches):"
                    : "Height (cm):"}
                  <input type="number" />
                </label>

                <label>
                  {unit === "imperial"
                    ? "Weight (lbs):"
                    : "Weight (kg):"}
                  <input type="number" />
                </label>

                <label>
                  Gender:
                  <input type="text" />
                </label>

                <label>
                  Activity Level:
                  <input type="text" />
                </label>

                <label>
                  Primary Goal:
                  <input type="text" />
                </label>
              </form>
            </div>

            {/* RIGHT CARD */}
            <div className="assistant-card">
              <h2>
                Your Personal <br /> Assistant
              </h2>
              <p>
                Understanding your body is the first step. Enter your details to
                get a{" "}
                <span className="hl">personalized breakdown</span> of your calorie
                needs and your macro targets.
              </p>
            </div>

          </section>
        </div>
      </main>
    </>
  );
}

export default Assessment;