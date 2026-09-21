import { motion } from "motion/react";
import "./App.css";

function App() {
  return (
    <div className="page">
      <nav>
        <div className="logo">Harini</div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Hi, I'm Harini!</p>

            <h1>
              I build software that turns
              <span> ideas into products.</span>
            </h1>

            <p className="subtitle">
              Computer Science student interested in software engineering,
              AI, and building useful products.
            </p>

            <div className="buttons">
              <a className="primaryButton" href="#projects">
                View my work
              </a>

              <a className="secondaryButton" href="/resume.pdf">
                Resume
              </a>
            </div>
          </motion.div>
        </section>

        <section id="about">
          <p className="sectionLabel">ABOUT</p>

          <h2>A little about me</h2>

          <p className="sectionText">
            I'm a Computer Science student who enjoys learning unfamiliar
            technologies and turning ideas into working products. I'm especially
            interested in software engineering and AI-assisted development.
          </p>
        </section>

        <section id="projects">
          <p className="sectionLabel">PROJECTS</p>

          <h2>Things I've built</h2>

          <div className="projectGrid">
            <ProjectCard
              title="OnTask"
              description="A native macOS productivity app designed to keep users focused on one task at a time."
              technologies="Swift · SwiftUI"
            />

            <ProjectCard
              title="RouteBite"
              description="A location-based application for discovering restaurants along your route."
              technologies="React · Python · FastAPI"
            />

            <ProjectCard
              title="PlatePilot"
              description="A food-focused application exploring personalized recommendations and meal discovery."
              technologies="Python · APIs · Full Stack"
            />
          </div>
        </section>

        <section id="contact">
          <p className="sectionLabel">CONTACT</p>

          <h2>Let's connect.</h2>

          <p className="sectionText">
            I'm currently interested in software engineering internship
            opportunities.
          </p>

          <div className="contactLinks">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="mailto:your@email.com">Email</a>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({ title, description, technologies }) {
  return (
    <motion.div
      className="projectCard"
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{technologies}</span>
    </motion.div>
  );
}

export default App;