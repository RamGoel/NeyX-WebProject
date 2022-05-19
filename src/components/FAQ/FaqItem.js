import React from 'react';
import './faq.css';

export default function FaqItem(props) {
  return (
    <div className="faqItem">
      <div
        className="opener d-flex justify-content-between"
        onClick={()=>props.click}
      >
        <p className="">{props.data.title}</p>
        <i className="fa fa-angle-down"></i>
      </div>
      <p className={props.data.pos}>{props.data.desc}</p>
    </div>
  );
}
