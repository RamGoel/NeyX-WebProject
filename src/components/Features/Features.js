import React from 'react';
import './Features.css';
export default class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container my-auto " id="featurePage ">
        <div className="row align-items-center">
          <div className="featureItem col-6">
            <div className="d-flex flex-column">
              <h4 className="featureHead">USER INTERACTION</h4>
              <p>Interacts like an offline seller</p>
            </div>
            <p>
              The chatbot excels in the interaction with the user as, within the
              first conversation only, the NeyX chatbot develops a friendly
              relationship with the customer. The creative efforts are inbuilt
              in the bot to sustain an ongoing bargaining deal.
            </p>
          </div>
          <div className="featureItem col-6">
            <div className="d-flex flex-column">
              <h4 className="featureHead">PRICE NEGOTIATION</h4>
              <p>Not less, not more, perfect price negotiation</p>
            </div>
            <p>
              The NeyX bot is designed such that the price negotiation is set up
              by the owner of the website to offer the best discount based on
              consumer behaviour, market, demand which builds a strong
              relationship between you and the customer.
            </p>
          </div>
          <div className="featureItem col-6">
            <div className="d-flex flex-column">
              <h4 className="featureHead">MULTITASKER</h4>
              <p>Handles many tasks at one go</p>
            </div>
            <p>
              Alongside bargaining with customers, the NeyX bot keeps them
              updated with the latest product launches and product offers on
              your website. The bot can deal with lakhs of customers altogether
            </p>
          </div>
          <div className="featureItem col-6">
            <div className="d-flex flex-column">
              <h4 className="featureHead">CONVERSION CAPACITY</h4>
              <p>Convert your leads at the fastest rate</p>
            </div>
            <p>
              With its undeterred bargaining skills, NeyX bot has successfully
              managed to reach a perfect conversion level of up to 30%.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
