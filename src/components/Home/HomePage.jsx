import React from 'react';
import './HomePage.css';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container my-auto " id="homePage ">
        <div className="row mt-5 justify-content-around " id="homeRow">
          <div className="col-6 d-flex flex-column align-items-center">
            <div className="my-auto">
              <div className="" id="leftBoxTop">
                <h2 className="w-75">
                  Get India's First Online bargaining bot
                </h2>
                <h4>
                  let's increase your{' '}
                  <span className="text-danger font-weight-bold">Sales</span>
                </h4>
                <h4>
                  let's increase your{' '}
                  <span className="text-danger font-weight-bold">Profit</span>
                </h4>
                <h4>
                  let's increase your{' '}
                  <span className="text-danger font-weight-bold">
                    Customers
                  </span>
                </h4>
                <p className="w-75 ">
                  AI powered bargaining assistant can now be integrated in your
                  online store too.
                </p>
              </div>

              <div className="w-50 d-flex justify-content-around">
                <button className=" btn btn-primary" id="homeBtn1">
                  Watch Demo
                </button>
                <button className=" btn px-4 " id="homeBtn2">
                  Try it Free
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 text-center" id="rightBox">
            <img
              src="https://i.ibb.co/2YQLtfc/Rectangle-585.png"
              className="homeImg2"
              alt="Rectangle-585"
              border="0"
            />
            <img
              className="homeImg3"
              src="https://i.ibb.co/7vFVjW3/Rectangle-590.png"
              alt="Rectangle-590"
              border="0"
            />
            <img
              className="homeImg4"
              src="https://i.ibb.co/xHmqSKX/Rectangle-589.png"
              alt="Rectangle-589"
              border="0"
            />
            <img
              className="homeImg5"
              src="https://i.ibb.co/xHmqSKX/Rectangle-589.png"
              alt="Rectangle-589"
              border="0"
            />
            <img
              className="homeImg6"
              src="https://i.ibb.co/r68Dj2k/Vector-22.png"
              alt="Vector-22"
              border="0"
            />
            <img
              id="homeImg"
              src="https://i.ibb.co/VmGbr0T/Opera-Snapshot-2022-04-22-180402-search-muz.png"
              alt="Opera-Snapshot-2022-04-22-180402-search-muz"
              border="0"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
