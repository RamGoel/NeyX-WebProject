import React from 'react';
import './Footer.css';
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="topBox d-flex justify-content-between align-items-center mx-3 px-3">
          <img
            src="https://i.ibb.co/r7LzSDm/Frame-35.png"
            alt="Frame-35"
            border="0"
            height="50px"
            width="65px"
          />
          <img
            src="https://i.ibb.co/H2XQRKv/image-2022-04-22-223302460-removebg-preview-1.png"
            alt="image-2022-04-22-223302460-removebg-preview-1"
            border="0"
          />
        </div>
        <div className="row">
          <div className="left col">
            <h1 className="">
              NeyX- smart bargaining assistant of your online store.
            </h1>
            <p className="">
              Bargaining in online shopping. Yes, we feel excited too when we
              create it. Your customer can do real time bargaining for every
              product they want to buy in your store. You setup the price range,
              the AI will make the sales for you. Automate your online store and
              increase the revenue and generate more leads. Your customers are
              happy and it's time that customer loyalty will increase.
            </p>
          </div>
          <div className="right col ">
            <div className="row">
              <div className="col">
                <ul className="listNone">
                  <a href="">
                    <li className="">Home</li>
                  </a>
                  <a href="">
                    <li className="">About</li>
                  </a>
                  <a href="">
                    <li className="">Pricing</li>
                  </a>
                  <a href="">
                    <li className="">Watch Demo</li>
                  </a>
                  <a href="">
                    <li className="">Contact</li>
                  </a>
                </ul>
              </div>
              <div className="col">
                <ul className="listNone">
                  <li className=""> +91-86378 89046</li>
                  <li className="">contact@neyx.in</li>
                  <li className="">Kolkata, WB, IN</li>
                </ul>
              </div>
            </div>
            <div id="inputBox">
              <input
                type="text"
                id="numInput"
                placeholder="Enter Phone Number"
                required
              />
              <button id="phoneCode" className="bg-danger">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex ">
          <a href="#" className="bg-light rounded-circle px-2 py-2 mx-3">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="bg-light rounded-circle px-2 py-2 mx-3">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" className="bg-light rounded-circle px-2 py-2 mx-3">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#" className="bg-light rounded-circle px-2 py-2 mx-3">
            <i className="fa fa-instgram"></i>
          </a>
        </div>
        <div className="d-flex justify-content-between border-top">
          <p className="">
            © Copyright 2022, NeyX-AI Pvt.Ltd. | Terms & Condition
          </p>
          <p className="">Made in India with Love</p>
        </div>
      </div>
    );
  }
}
