import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="header-container">
          <h2>FiruzeShafiyeva</h2>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}
export default Header;
