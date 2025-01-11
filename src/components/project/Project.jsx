import { Component } from "react";
import "./project.css";
import screen1 from "../../assets/Screen1.png";
import screen2 from "../../assets/screen 2.png";
import screen3 from "../../assets/screen 3.png";
import screen4 from "../../assets/screen 4.png";
import screen5 from "../../assets/screen 5.png";
import app1 from "../../assets/app 1.png";
import app2 from "../../assets/app 2.png";
import app3 from "../../assets/app 3.png";
import app4 from "../../assets/app 4.png";
import app5 from "../../assets/app 5.png";
import app6 from "../../assets/app 6.png";

class Project extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="project-container">
          <p className="project-text">projects.</p>
          <p className="project-header-text">
            Since I started learning UX/UI design, I have gained experience by
            working on several real projects, both individually and as part of a
            team. These experiences have provided me with deeper knowledge and
            skills in the design field.
          </p>
          <h1>Web Projects</h1>
          <div className="projects-image">
            <div className="screen1">
              <img src={screen1} alt="Academy X" />
              <h4>Academy X (Online Courses)</h4>
              <p className="header-2">
              When working on the X Academy Online Courses website, my main goal was to create an easy and seamless experience for the users. I focused on combining simplicity with functionality in the design. I chose an intuitive structure for easy navigation through the courses and kept the payment system simple and accessible for users. This project helped me deepen my understanding of design principles and user experience.
              </p>
              <a href="https://xacademy.az/online">
                <button>Visit site</button>
              </a>
            </div>
            <div className="screen5">
              <img src={screen5} alt="Aladdin Agency" />
              <h4>Aladdin Agency</h4>
              <p className="header-2">
              When working on the Aladdin Agency website, my goal was to create a modern and professional experience. I focused on simplicity and aesthetics while ensuring that the agency's services were presented to users in the clearest and most accessible way. Throughout the project, I considered Aladdin Agency's brand identity, selecting a suitable color palette and typography, and paid special attention to mobile responsiveness.
              </p>
              <a href="https://www.aladdinagency.az/">
                <button>Visit site</button>
              </a>
            </div>
            <div className="screen4">
              <img src={screen4} alt="Academy X" />
             
              <h4>Academy X (Offline Courses)</h4>
              <p className="header-2">
              While working on the Academy X offline courses, my main goal was to provide participants with the best learning experience. The course structure allows users to easily access information, with a strong focus on practical applications for each topic. During the training, I aimed to engage with the participants closely and tailor individual approaches to meet their needs. This project gave me valuable experience in teaching methods and course design.
              </p>
              <a href="https://xacademy.az/offline">
                <button>Visit site</button>
              </a>
            </div>
            <div className="screen3">
              <img src={screen3} alt="Academy X" />        
              <h4>Numbers (E-commerce)</h4>
              <p className="header-2">
              "When working on this website, my goal was to provide users with a smooth and fast shopping experience. The design of the site allows users to easily navigate through different product categories, with clear details for each item. I added filtering and search features to help users find their desired products more quickly. Special attention was given to mobile compatibility to ensure it works seamlessly on all devices. This project gave me valuable experience in designing e-commerce websites and improving user experience."
              </p>
            </div>
            <div className="screen2">
              <img src={screen2} alt="Academy X exam" />
              <h4>Academy X Exam</h4>
              <p className="header-2">
              When designing the online exam website, I focused on delivering a simple and user-friendly experience. The design of the site allows users to easily navigate through every step of the exam process, and joining exams is seamless. Various exam types and question formats are clearly presented for the user. I enhanced the functionality by adding a countdown timer, automated grading, and certificate generation options. The site was optimized to ensure smooth performance on both mobile and desktop devices.
              </p>
              {/* <a href="#">
                <button>Visit site</button>
              </a> */}
            </div>      
          </div>
          <h1>App Projects</h1>
          <div className="projects-image-app">
          <div className="app1">
              <img src={app1} alt="Kids Learning App" /> 
            </div>
            <div className="app2">
              <img src={app2} alt="Kids Learning App" />
              
            </div>
            <div className="app3">
              <img src={app3} alt="Kids Learning App" />
         
            </div>
          </div>

          <div className="projects-image-app">
          <div className="app4">
              <img src={app4} alt="Academy X" /> 
            </div>
            <div className="app5">
              <img src={app5} alt="Academy X" />
        
              
            </div>
            <div className="app6">
              <img src={app6} alt="Academy X" />
         
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Project;
