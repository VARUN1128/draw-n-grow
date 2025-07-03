import { React, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaInfoCircle,
  FaArrowRight,
  FaGraduationCap,
} from "react-icons/fa";
import Button from "../components/Button";
import "../styles/Button.css";

function Home() {
  const courseRef = useRef(null);
  const scrollToCourse = () => {
    courseRef.current.scrollIntoView();
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Create Your
            <br />
            Art Journey
          </h1>
          <p className="hero-subtitle">Your Trusted Art Education Companion!</p>
          <div className="button-group">
            <Button
              as={Link}
              variant="primary"
              size="large"
              icon={<FaPlay />}
              onClick={scrollToCourse}
            >
              View Courses
            </Button>
            <Button
              as={Link}
              to="/about"
              variant="outline"
              size="large"
              icon={<FaInfoCircle />}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2 className="section-title">How It Works?</h2>
        <div className="process-grid">
          <div className="process-card">
            <div className="process-number">01</div>
            <h3>Register</h3>
            <p>Sign up and become a member of our creative community.</p>
          </div>
          <div className="process-card">
            <div className="process-number">02</div>
            <h3>Choose</h3>
            <p>Select your preferred art course and skill level.</p>
          </div>
          <div className="process-card">
            <div className="process-number">03</div>
            <h3>Learn</h3>
            <p>Follow our structured lessons and video tutorials.</p>
          </div>
          <div className="process-card">
            <div className="process-number">04</div>
            <h3>Create</h3>
            <p>Practice your skills and submit your artwork.</p>
          </div>
        </div>
        {/* <div className="text-center">
          <Button
            as={Link}
            to="/register"
            variant="primary"
            size="large"
            icon={<FaArrowRight />}
          >
            Start Your Journey
          </Button>
        </div> */}
      </section>

      {/* Services Section */}
      <section
        className="services-section"
        id="courses-section"
        ref={courseRef}
      >
        <h2 className="section-title">Our Courses</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Beginner Course</h3>
            <p>Perfect for those just starting their art journey.</p>
            <Button as={Link} to="/courses" variant="secondary" size="medium">
              Learn More
            </Button>
          </div>
          <div className="service-card">
            <h3>Intermediate</h3>
            <p>Enhance your skills with advanced techniques.</p>
            <Button as={Link} to="/courses" variant="secondary" size="medium">
              Learn More
            </Button>
          </div>
          <div className="service-card">
            <h3>Advanced</h3>
            <p>Master complex artistic concepts and styles.</p>
            <Button as={Link} to="/courses" variant="secondary" size="medium">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-floating-elements">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Art Journey?</h2>
          <p className="cta-description">
            Join our vibrant community of artists and unlock your creative
            potential. Learn from expert guidance, connect with fellow artists,
            and watch your skills flourish.
          </p>
          <button className="cta-button">
            Get Started Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* Floating Action Button */}
      <Button
        as={Link}
        to="/courses"
        variant="primary"
        isFloating
        icon={<FaPlay />}
        aria-label="Start Learning"
      />
    </div>
  );
}

export default Home;
