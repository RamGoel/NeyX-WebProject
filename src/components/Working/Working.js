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
        <div className="flowDiag">
          <div className="diagItem">
            <img src="" alt="" />
            <div>
              <i className="itemIcon"></i>
              <p>You tell us the price range.</p>
            </div>
          </div>
          <div className="diagItem">
            <img src="" alt="" />
            <div>
              <i className="itemIcon"></i>
              <p>We set up the bot</p>
            </div>
          </div>
          <div className="diagItem">
            <img src="" alt="" />
            <div>
              <i className="itemIcon"></i>
              <p>Let your customer haggle</p>
            </div>
          </div>
          <div className="diagItem">
            <img src="" alt="" />
            <div>
              <i className="itemIcon"></i>
              <p>Monitor it from our dashboard</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
