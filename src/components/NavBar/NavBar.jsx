import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar py-3">
        <div className=" px-1 py-0 w-100 row mx-5 align-items-center justify-content-between">
          <div className="col-4">
            <img
              src="https://i.ibb.co/r7LzSDm/Frame-35.png"
              alt="Frame-35"
              border="0"
              height="50px"
              width="65px"
            />
          </div>

          <div className="navDivRight col-8">
            <ul className="list d-flex my-auto justify-content-around w-75 ">
              <li>
                <a href="#" className="tada">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="tada">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="tada">
                  Solution
                </a>
              </li>
              <li>
                <a href="#" className="tada">
                  Product & Pricing
                </a>
              </li>
            </ul>

            <button className="btn rounded px-4" id="contactBtn">
              Contact
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
