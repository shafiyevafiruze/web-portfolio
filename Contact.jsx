import { Component } from "react";
import "./contact.css";

import img from "../../assets/main-img.png";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="contact-container">
          <p className="contact-text">contact.</p>
          <div className="main-contact">
            <div>
              <p className="email">Email: shafiyeva777@gmail.com </p>
              <p className="email">Phone: +994 77 217 00 37 </p>
              <a href="https://www.linkedin.com/in/-788117255/">
                <p className="email">
                  LinkedIn: https://www.linkedin.com/in/-788117255/
                </p>
              </a>
            </div>
            <img src={img} />
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
