import React from "react";
import "../styles/Certifications.css";

const Certifications = () => {
  return (
    <section className="cert-section" id="certifications">
      <div className="container">
      {/* <div className="container cert-container"> */}
        <h2 className="section-title">Certifications</h2>

        {/* Certificate 1 */}
        <div className="cert-card">
          <h3>Master Generative AI & Generative AI tools</h3>
          <p className="cert-org">Infosys</p>
          <p className="cert-desc">
            Learned about Generative AI and its applications in various domains, including natural language processing, computer vision, and creative content generation.
          </p>

          <a 
            href="https://drive.google.com/file/d/1lqTVBMLaCh2Njipk6lu_2ZG9woKVgDGZ/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cert-btn"
          >
            View Certificate
          </a>
        </div>

        {/* Certificate 2 */}
        <div className="cert-card">
          <h3>Data Structures and Algorithm</h3>
          <p className="cert-org">IamNeo</p>
          <p className="cert-desc">
            Gained knowledge of Data Structure and Algorithm.
          </p>

          <a 
            href="https://drive.google.com/file/d/1y0RXUeeekp7XrZrkEz-A27zW92vf_zuh/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cert-btn"
          >
            View Certificate
          </a>
        </div>

        {/* Certificate 3 */}
        <div className="cert-card">
          <h3>Introduction to Python</h3>
          <p className="cert-org">Infosys</p>
          <p className="cert-desc">
            Learn Python from the scratch and understand its applications in programming and data science.
          </p>

          <a 
            href="https://drive.google.com/file/d/1ssL7SW5YuCY3RoRIZhUjh6eO1ydzwRK-/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cert-btn"
          >
            View Certificate
          </a>
        </div>

        {/* Certificate 4 */}
        <div className="cert-card">
          <h3>Cloud Computing</h3>
          <p className="cert-org">NPTEL</p>
          <p className="cert-desc">
            Learn Cloud Computing.
          </p>

          <a 
            href="https://drive.google.com/file/d/1_ws1a4flq53MwxNvoM0kvc7x7IUPLF0l/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cert-btn"
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
};

export default Certifications;