import React from 'react';
import './Footer.css';
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Footer">
        <div className="footDiv mx-auto">
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

          <div className="d-flex justify-content-between">
            <div className="left col-4">
              <h3 className="font-weight-bold">
                <b>NeyX- smart bargaining assistant of your online store.</b>
              </h3>
              <p className="mt-4">
                Bargaining in online shopping. Yes, we feel excited too when we
                create it. Your customer can do real time bargaining for every
                product they want to buy in your store. You setup the price
                range, the AI will make the sales for you. Automate your online
                store and increase the revenue and generate more leads. Your
                customers are happy and it's time that customer loyalty will
                increase.
              </p>
            </div>
            <div className="right col-6">
              <div className="row">
                <div className="col">
                  <ul className="footLinkList">
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
                  <ul className="footLinkList">
                    <li className=""> +91-86378 89046</li>
                    <li className="">contact@neyx.in</li>
                    <li className="">Kolkata, WB, IN</li>
                  </ul>
                </div>
              </div>
              <div id="inputBox" className="">
                <input
                  type="text"
                  id="numInput"
                  placeholder="Enter Phone Number"
                  className="shadow"
                  required
                />
                <button id="phoneCode" className="bg-danger shadow">
                  Submit
                </button>
              </div>
            </div>
          </div>

          <ul className="d-flex  w-25 justify-content-between">
            <a href="#" className=" rounded-circle  mr-3">
              <i className="fab fa-2x fa-facebook"></i>
            </a>
            <a href="#" className=" rounded-circle  mr-3">
              <i className="fab fa-2x fa-twitter"></i>
            </a>
            <a href="#" className=" rounded-circle  mr-3">
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
            <a href="#" className=" rounded-circle  mr-3">
              <i className="fab fa-2x fa-instagram"></i>
            </a>
          </ul>
          <div className="footLine d-flex py-2 justify-content-between ">
            <p className="">
              © Copyright 2022, NeyX-AI Pvt.Ltd. | Terms & Condition
            </p>
            <p className="">Made in India with Love</p>
          </div>
        </div>
      </div>
    );
  }
}
