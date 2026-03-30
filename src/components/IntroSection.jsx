import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import './IntroSection.css';

export const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.intro-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className={`intro-section ${isVisible ? 'animate-in' : ''}`} id="intro">
      <Container>
        <div className="intro-header">
          <h2 className="intro-title">About Me</h2>
          <p className="intro-description">
            Get to know me better - my journey, passion, and what drives me as a developer
          </p>
        </div>
        
        <div className="intro-content">
          <div className="intro-card">
            <div className="intro-photo-side">
              <div className="profile-photo-container">
                <img 
                  src="/Profile.jpg" 
                  alt="Shuaib Ahmad - Data Analyst"
                  className="profile-photo"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="intro-text-side">
              <div className="intro-text-container">
                <div className="intro-name-section">
                  <h3 className="intro-name">Shuaib Ahmad</h3>
                  <p className="intro-role">Data Analyst & Competitive Programmer</p>
                </div>
                
                <div className="intro-text-content">
                  <div className="paragraphs-grid">
                    <div className="paragraph-item">
                      <p className="intro-paragraph">
                        I'm Shuaib Ahmad, a Data Science student and aspiring Data Analyst passionate about extracting meaningful insights from data. 
I specialize in analyzing data using tools like Python, SQL, and Excel to uncover patterns and support data-driven decisions. 
With strong analytical thinking and problem-solving skills, I aim to solve real-world challenges through data.
                      </p>
                    </div>
                    <div className="paragraph-item">
                      <p className="intro-paragraph">
                        My focus is on writing clean, optimized code while ensuring excellent 
                        usability, accessibility, and scalability for every project. Currently expanding 
                        my skill set in Machine Learning and Data Analysis to strengthen my 
                        analytical and data-driven development approach.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="social-links">
                  <a 
                    // href="https://www.instagram.com/" 
                    // className="social-link" 
                    // aria-label="Instagram"
                    // target="_blank"
                    // rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://linkedin.com/in/-shuaib-ahmad/" 
                    className="social-link" 
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a 
                    href="https://github.com/shuaibahmad00/" 
                    className="social-link" 
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};