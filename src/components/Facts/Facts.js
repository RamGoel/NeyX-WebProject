import React from 'react';
import './Facts.css';
export default class Facts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container my-4 py-4 " id="factsPage">
        <div className="container">
          <div className="divTop text-center">
            <h2 className="text-center">Facts about us</h2>
            <p className="para text-center mx-auto">
              Not only just statistics, but people also started talking out us
              and we feel, they will keep talking about us, as we are proving
              our maths and showing them the great results. You don’t want to be
              left behind when every consumer started using bargaining.
            </p>
          </div>
          <div
            id="metricContain"
            className="container d-flex  p-0 mx-auto w-75 justify-content-around"
          >
            <div className="factItem ">
              <h4 className="factHead">28%</h4>
              <p className="w-75">conversion rate increase</p>
            </div>
            <div className="factItem ">
              <h4 className="factHead">33%</h4>
              <p className="w-75">New Customer</p>
            </div>
            <div className="factItem ">
              <h4 className="factHead">1M+</h4>
              <p className="w-75">Sale Increase</p>
            </div>
            <div className="factItem ">
              <h4 className="factHead">74%</h4>
              <p className="w-75">Customer Engagement</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
