import { Component } from "react";
import "./home.css";
import img from "../../assets/main-img.png";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="home-container">
          <div className="text-box">
            <h4>Hello, I’m Firuze,</h4>
            <h1>UX/UI Designer</h1>
            <h4>Front-End developer ;)</h4>
            <div>
              <a
                href="https://www.linkedin.com/in/-788117255/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="lnkdn-btn">Linkedin</button>
              </a>
              <a
                href="https://github.com/shafiyevafiruze"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="gthb-btn">Github</button>
              </a>
            </div>
          </div>
          <img src={img} alt="Main image" className="png-img" />
        </div>
      </>
    );
  }
}
export default Home;
