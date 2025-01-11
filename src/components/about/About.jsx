import { Component } from "react";
import "./about.css";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="about-container">
          <p className="about-text">about.</p>
          <p className="me-text">
            My name is Firuze Shafiyeva, born on July 3, 2003. I am a passionate
            UX/UI designer and frontend developer with hands-on experience
            working on real-world projects. I am driven by creativity, a strong
            dedication to learning, and a commitment to delivering
            user-friendly, visually appealing digital solutions. Let me know if
            there’s anything else you'd like to include! 😊
          </p>
          <div className="carreer-texts">
            <div className="carreer-text-1">
              <div>
                <h4>* 09.2021 - 06.2025 (University)</h4>
                <p>
                  I started studying Computer Engineering at Baku Engineering
                  University in 2021. During this time, I have gained strong
                  technical knowledge and improved my problem-solving skills. My
                  education has helped me grow as a UX/UI designer and frontend
                  developer.
                </p>
              </div>
              <div>
                <h4>* 20.04.2024 - 01.11.2024 (Course)</h4>
                <p>
                  I have also attended the Frontend Development course at
                  Developia Engineering Academy (Technest Scholarship 100%). During the course, I learned
                  key technologies including HTML, CSS, React, Redux, and
                  JavaScript. This course helped me further develop my frontend
                  development skills and broaden my technical knowledge.
                </p>
              </div>
            </div>
            <div className="carreer-text-2">
              <div>
                <h4>* 10.2023 - 11.2023 (Course)</h4>
                <p>
                  In 2023, I completed a 2-month UX/UI design course on Udemy.
                  The course covered essential topics like user research,
                  wireframing, prototyping, and interface design, using tools
                  such as Figma and Adobe XD. This helped me develop practical
                  skills in creating user-centered, visually appealing designs.
                </p>
              </div>
              <div>
                <h4>* 09.2024 - 12.2024 (Internship)</h4>
                <p>
                  I gained 3 months of hands-on UX/UI design experience at
                  Aladdin Holding LLC. During this period, I worked on several
                  real-life projects, collaborating with the design and
                  development teams to create intuitive and user-friendly
                  interfaces. I focused on user research, wireframing, and
                  high-fidelity designs, which enhanced my skills in creating
                  responsive and effective design solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default About;
