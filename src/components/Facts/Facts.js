import React from 'react';
import './Facts.css';
export default class Facts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container my-auto " id="featurePage ">
        <div className="container">
          <div className="divTop text-center">
            <h2 className="text-center">Facts about us</h2>
            <p className="para">
              Not only just statistics, but people also started talking out us
              and we feel, they will keep talking about us, as we are proving
              our maths and showing them the great results. You don’t want to be
              left behind when every consumer started using bargaining.
            </p>
          </div>
          <div className="container d-flex w-70 justify-content-between">
            <div className="factItem">
              <h1 className="factHead">28%</h1>
              <p className="">conversion rate increase</p>
            </div>
            <div className="factItem">
              <h1 className="factHead">33%</h1>
              <p className="">New Customer</p>
            </div>
            <div className="factItem">
              <h1 className="factHead">1M+</h1>
              <p className="">Sale Increase</p>
            </div>
            <div className="factItem">
              <h1 className="factHead">74%</h1>
              <p className="">Customer Engagement</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
