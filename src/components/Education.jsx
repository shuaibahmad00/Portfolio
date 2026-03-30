import React from "react";
import "../styles/Education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="container">
      {/* <div className="container education-container"> */}
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>B.Tech - Computer Science</h3>
          <p className="edu-college">Lovely Profesional University</p>
          <p className="edu-year">2023 - 2027</p>
          <p className="edu-desc">
          <p className="marks">CGPA: 6.87</p>
          </p>
        </div>

        <div className="education-card">
          <h3>Class 12th</h3>
          <p className="edu-college">Sunway Senior Secondary School</p>
          <p className="edu-year">2022 - 2023</p>
          <p className="marks">Percentage: 67</p>
        </div>

        <div className="education-card">
          <h3>Class 10th</h3>
          <p className="edu-college">Sunway Senior Secondary School</p>
          <p className="edu-year">2020 - 2021</p>
          <p className="marks">Percentage: 88</p>
        </div>
      </div>
    </section>
  );
};

export default Education;