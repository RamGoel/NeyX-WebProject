import React from 'react';
import './Testo.css';
export default class Testo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  TestoCard = () => {
    return (
      <div className="row bg-dark text-light">
        <div className="col-4">
          <img
            src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc="
            alt=""
            width="100%"
            className="cardImage"
          />
        </div>
        <div className="col-8">
          <h3 className="">Ashok Verma</h3>
          <div className="rating">
            <i className="fa fa-star text-danger"></i>
            <i className="fa fa-star text-danger"></i>
            <i className="fa fa-star text-danger"></i>
            <i className="fa fa-star text-danger"></i>
            <i className="fa fa-star text-danger"></i>
          </div>
          <p className="">
            “My Customers are very excited to Know that they can bargain in an
            online platform now! ”
          </p>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className="topBar">
          <h2 className="">Testimonials</h2>
          <p className="">Our Happy Users</p>

          <div className="testoCardContain">
            <this.TestoCard />
          </div>
        </div>
      </div>
    );
  }
}
