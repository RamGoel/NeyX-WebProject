import React from 'react';
import './Working.css';
export default class Working extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container my-auto " id="howToPage ">
        <div className="divTop text-center">
          <h1>How it Work</h1>
          <p>Most simple and light to follow to add neyX in your store.</p>
        </div>
        <div className="d-flex flex-column  justify-content-center">
          <div className="d-flex align-items-center my-3 justify-content-around w-50 mx-auto">
            <img
              src="https://i.ibb.co/C9RzbLt/monitoring.png"
              alt="monitoring"
              border="0"
              className="workImage"
            />
            <p className="itemIcon">1</p>
            <div className="w-50">
              <p>You tell us the price range.</p>
            </div>
          </div>
          <div className="d-flex align-items-center my-3 justify-content-around w-50 mx-auto">
            <img
              src="https://i.ibb.co/GMPyJWv/price-tag.png"
              alt="price-tag"
              border="0"
              className="workImage"
            />
            <p className="itemIcon">1</p>
            <div className="w-50">
              <p>We set up the bot</p>
            </div>
          </div>
          <div className="d-flex align-items-center my-3 justify-content-around w-50 mx-auto">
            <img
              src="https://i.ibb.co/RGF28q0/robot.png"
              alt="robot"
              border="0"
              className="workImage"
            />
            <p className="itemIcon">1</p>
            <div className="w-50">
              <p>Let your customer haggle</p>
            </div>
          </div>
          <div className="d-flex align-items-center my-3 justify-content-around w-50 mx-auto">
            <img
              src="https://i.ibb.co/KjKgTyd/team.png"
              alt="team"
              border="0"
              className="workImage"
            />
            <p className="itemIcon">1</p>
            <div className="w-50">
              <p>Monitor it from our dashboard</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
