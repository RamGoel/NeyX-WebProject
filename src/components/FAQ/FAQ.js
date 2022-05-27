import React from 'react';
import './faq.css';
import FaqItem from './FaqItem';
export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'Is the installation to hectic ?',
          desc: '',
        },
        {
          title: 'Will the maintenance be our responsibility?',
          desc: '',
        },
        {
          title: 'Will the privacy be a concern for the customers?',
          desc: '',
        },
        {
          title: 'Will the integration required, affect our system?',
          desc: '',
        },
      ],
    };
  }

  showMore = () => {
    this.setState({
      data: [
        {
          title: 'Is the installation to hectic ?',
          desc: '',
        },
        {
          title: 'Will the maintenance be our responsibility?',
          desc: '',
        },
        {
          title: 'Will the privacy be a concern for the customers?',
          desc: '',
        },
        {
          title: 'Will the integration required, affect our system?',
          desc: '',
        },
        {
          title: 'Is the installation to hectic ?',
          desc: '',
        },
        {
          title: 'Will the maintenance be our responsibility?',
          desc: '',
        },
        {
          title: 'Will the privacy be a concern for the customers?',
          desc: '',
        },
        {
          title: 'Will the integration required, affect our system?',
          desc: '',
        },
      ],
    });
  };

  render() {
    return (
      <div className="container faqContain py-4">
        <h1 className=" text-center container">Frequently Asked Questions</h1>
        <div className="faqItemDiv cntainer">
          {this.state.data.map((elem) => (
            <FaqItem data={elem} />
          ))}
        </div>
        <div className="foot w-100 d-flex flex-row-reverse">
          <button className="btn btn-light " onClick={() => this.showMore()}>
            See More
          </button>
        </div>
      </div>
    );
  }
}
