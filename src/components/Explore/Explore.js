import React from 'react';
// import './Facts.css';
export default class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="px-3 ">
        <div className="container-fluid mx-3 my-auto" id="explorePage ">
          <div className={this.props.data.position}>
            <div className="left col-6">
              <h3 className="">{this.props.data.title}</h3>
              <p className="">{this.props.data.text}</p>
              <button className="btn btn-danger">
                {this.props.data.btnText}
              </button>
            </div>
            <div className="right col-6 d-flex justify-content-end">
              <img width="70%" src={this.props.data.url} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
