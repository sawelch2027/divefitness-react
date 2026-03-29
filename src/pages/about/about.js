import "./about.css";
import founder from "../../assets/images/Beach Vanna.jpg";
import ContactForm from "../../components/ContactForm/ContactForm";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function About() {
  return (
    <main className="about-page">
      <div className="page-wrap">
        <section className="about-hero">
          <div className="about-hero-overlay">
            <div className="page-wrap">
              <p className="about-tag">
                Built on discipline. Backed by consistency.
              </p>
              <h2>About Dive Fitness</h2>
              <p className="about-intro">
                Dive Fitness is designed to help people train with purpose, eat
                with intention, and build routines they can actually stick with.
              </p>
            </div>
          </div>
        </section>

        <section className="about-top">
          <div className="about-top__left">
            <p className="about-founder">Founder: Savanna Welch</p>

            <p>
              Welcome to Dive Fitness, a platform born from a lifelong commitment
              to discipline, strength, and the pursuit of physical excellence.
              My journey began in high school, where I first discovered the
              importance of consistency, accountability, and the mental clarity
              that comes with a committed daily routine.
            </p>

            <p>
              I proudly serve in a deeply structured training environment in
              NROTC, which taught me the value of intentional routines and
              leadership through consistency. Today, I use that same mindset to
              bring workouts and nutrition resources to those who want a stronger
              foundation and a plan they can trust.
            </p>

            <p>
              Dive Fitness is built on intentional, science-backed guidance that
              helps you stay accountable and make progress you can actually
              measure.
            </p>
          </div>

          <div className="about-top__right">
            <div className="founder-card">
              <img src={founder} alt="Founder" />
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-header">
            <SectionTitle
            title="Get In Touch"
            subtitle="Let us know how we're doing!"
            center={true}
          />
          </div>

          <div className="contact-container">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;