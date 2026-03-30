import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import './Skills.css';
import 'animate.css';

export const Projects = () => {
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

    const section = document.querySelector('.project');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects = [
    {
      title: "Hotel Booking Platform",
      description: "Complete Online Hotel Booking Platform. A modern hotel booking platform for discovering, booking, and managing stays with ease.",
      technologies: ["React.js", "Redux", "Node.js", "PostgreSQL", "Stripe API"],
      category: "fullstack",
      demoUrl: "https://quickk-stayy.vercel.app/",
      githubUrl: "https://github.com/shuaibahmad00/Hotel-Booking-Platform"
    },
    {
      title: "Diabetes Prediction Using Machine Learning",
      description: "An end-to-end Machine Learning project that predicts the risk of diabetes using real-world healthcare data.",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit", "Plotly", "Joblib"],
      category: "Machine Learning",
      demoUrl: "https://diabetes-risk-system.streamlit.app/",
      githubUrl: "https://github.com/shuaibahmad00/DiabetesPrediction_using_MachineLearning"
    },
      {
    title: "EV Dashboard",
    description: "Developed an interactive Power BI dashboard to analyze Electric Vehicle adoption trends across regions. Visualized key metrics such as state-wise EV distribution, vehicle categories, growth trends, and market insights. Enabled data-driven decision-making through dynamic filters and clear visual storytelling.",
    technologies: ["Power BI"],
    category: "Data Analysis",
    demoUrl: "https://github.com/shuaibahmad00/EV_PowerBI_dashboard_project/blob/main/Screenshot%202026-03-29%20195430.png",
    githubUrl: "https://github.com/shuaibahmad00/EV_PowerBI_dashboard_project"
  }
    // {
    //   title: "India Air Quality Analysis Dashboard (Power BI)",
    //   description: "This project analyzes air quality data of India using Microsoft Power BI. It includes AQI analysis, pollutant comparison, city & state-wise trends, health impact visualization, and forecasting-style insights.",
    //   technologies: ["Power BI"],
    //   category: "Data Analysis (Power BI)",
    //   demoUrl: "https://github.com/shuaibahmad00/india-air-pollution-analysis/blob/main/Published-Online-Screenshot.pdf",
    //   githubUrl: "https://github.com/shuaibahmad00/india-air-pollution-analysis"
    // },
    
  ];

  const filterProjects = (category) => {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
  };

  return (
    <section className={`project ${isVisible ? 'animate-in' : ''}`} id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}>
              <div className={`skills-header ${isVisible ? 'animate-in' : ''}`}>
                <h2 className="skills-title">Projects</h2>
                <p className="skills-description">
                  Here are some of my recent projects showcasing my skills in full-stack development, Data Science, modern web technologies, and problem-solving abilities. Each project demonstrates different aspects of my technical expertise and passion for creating innovative solutions.
                </p>
              </div>
              <div className={`projects-grid ${isVisible ? 'animate-in' : ''}`}>
                <div className="projects-container">
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
