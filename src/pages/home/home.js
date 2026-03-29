import "./home.css";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import NewsletterForm from "../../components/NewsLetterForm/NewsLetterForm";

import workout2 from "../../assets/images/Workout 2.jpg";
import nutrition1 from "../../assets/images/nutrition1.jpg";
import weightloss1 from "../../assets/images/weightloss1.jpg";
import strength from "../../assets/images/strength.jpg";
import stretch from "../../assets/images/Stretch.jpg";

import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpg";
import person3 from "../../assets/images/person3.jpg";

function Home() {
  return (
    <div className="page-wrap">
      <section className="hero">
        <div className="hero-content">
          <h2>Your Personal Map to a Better You</h2>
          <p>
            Welcome to DiveFitness, where we bridge the gap between
            high-performance discipline and a genuine passion for the gym. Built
            on a foundation of resilience and a fitness journey that began in
            high school, we are dedicated to helping you dive deep into your true
            physical potential. Whether you are looking for structural strength,
            functional endurance, or a supportive community to fuel your
            motivation, our mission is to provide the expert guidance you need to
            transform your goals into reality.
          </p>
          <Link to="/assessments" className="primary-btn">
            Start Your Journey Now →
          </Link>
        </div>
      </section>

      <section className="explore">
        <SectionTitle
          title="Explore DiveFitness"
          subtitle="Welcome to the Explore hub of DiveFitness, where we break down the science of strength and the discipline of elite performance into actionable steps for your daily life."
          center={true}
        />

        <div className="card-grid">
          <Link to="/workouts" className="card">
            <img src={workout2} alt="Workout" />
            <h3>Workouts</h3>
            <p>
              Access professionally designed training programs tailored for
              upper, lower, and full-body strength to help you dive deep into
              your physical potential.
            </p>
          </Link>

          <Link to="/nutrition" className="card">
            <img src={nutrition1} alt="Nutrition" />
            <h3>Nutrition</h3>
            <p>
              Fuel your progress with expert guidance on caloric goals and
              balanced recipes designed to support weight loss, muscle gain, or
              total-body maintenance.
            </p>
          </Link>

          <Link to="/assessments" className="card">
            <img src={weightloss1} alt="Assessment" />
            <h3>Assessment</h3>
            <p>
              Track your evolution through data-driven progress checks that
              measure your strength gains and body composition to keep your
              training on target.
            </p>
          </Link>

          <Link to="/about" className="card">
            <img src={strength} alt="About" />
            <h3>About Us</h3>
            <p>
              Discover how a high school passion for the gym and the discipline
              of ROTC inspired the creation of Dive Fitness to lead others
              toward peak performance.
            </p>
          </Link>

          <Link to="/about" className="card">
            <img src={stretch} alt="Contact" />
            <h3>Contact Us</h3>
            <p>
              Reach out to our team today to ask questions, share your progress,
              or get the personalized support you need to take your fitness
              journey to the next level.
            </p>
          </Link>
        </div>
      </section>

      <section className="stay-updated">
        <div className="overlay">
          <div className="updated-content">
            <div className="updated-left">
              <h2>Stay Updated</h2>

              <h4>Latest Workout Tips</h4>
              <p>
                Stay ahead of the curve with our weekly breakdown of innovative
                training techniques and recovery hacks designed to optimize your
                performance and keep your routines fresh.
              </p>

              <h4>Latest Nutrition Tips</h4>
              <p>
                Discover the newest science-backed insights on macro-balancing
                and meal timing to help you fuel your body more efficiently for
                your specific fitness goals.
              </p>

              <h4>Our best guides straight to your mailbox</h4>
              <p>
                Sign up for our newsletter to receive exclusive, deep-dive
                fitness and nutrition blueprints delivered directly to your
                inbox so you never miss a beat in your journey.
              </p>
            </div>

            <div className="updated-right">
              <div className="newsletter-card">
                <h4>Join the Newsletter</h4>
                <p>Weekly training & nutrition insights.</p>

                <NewsletterForm />

                <br />

                <h4>Track Your Progress & Unlock Your Plan!</h4>
                <div className="button-group">
                  <Link to="/assessments" className="secondary-btn">
                    Log In
                  </Link>
                  <Link to="/assessments" className="secondary-btn light">
                    New Member
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Community is Saying</h2>

        <div className="testimonial-container">
          <TestimonialCard
            quote="Dive Fitness helped me find the structure I’ve been missing since my high school sports days; the ROTC-inspired approach to workouts really keeps me accountable."
            image={person1}
            name="Name"
            description="Description"
          />

          <TestimonialCard
            quote="I love how clear the nutrition guides are; I finally understand how to manage my calories without feeling overwhelmed by complicated diet jargon."
            image={person2}
            name="Name"
            description="Description"
          />

          <TestimonialCard
            quote="The full-body guides are my go-to for my busy schedule—I’m seeing more strength gains in three days a week than I ever did training every day on my own."
            image={person3}
            name="Name"
            description="Description"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;