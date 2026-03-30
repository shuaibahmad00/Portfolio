import React from "react";
import "../styles/Achievements.css";

const Achievements = () => {
  return (
    <section className="achieve-section" id="achievements">
      <div className="container achieve-container">
        
        <h2 className="section-title">Achievements</h2>

        {/* Achievement 1 */}
        <div className="achieve-card">
          <h3>📊 Research Project Experience</h3>
          <p className="achieve-desc">
            Completed a 40+ hour research project on community healthcare under 
            TARUVAR Research and Development Society, gaining practical exposure 
            to field-based health data analysis and research methodologies.
          </p>
        </div>

        {/* Achievement 2 */}
        <div className="achieve-card">
          <h3>💻 Data Structures & Algorithms</h3>
          <p className="achieve-desc">
            Solved 100+ problems on LeetCode, improving problem-solving skills, 
            coding efficiency, and logical thinking.
          </p>
        </div>

        {/* Achievement 3 */}
        <div className="achieve-card">
          <h3>🚀 Hackathon Participation</h3>
          <p className="achieve-desc">
            Participated in a college-level hackathon, collaborating in a team 
            to develop innovative solutions under time constraints and enhancing 
            teamwork and real-world problem-solving skills.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Achievements;