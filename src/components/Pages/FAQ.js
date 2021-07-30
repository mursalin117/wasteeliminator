import React, { useState } from "react";

import classes from './FAQ.module.css';

const items = [
  {
    title: "What is Waste Eliminator?",
    content: "Waste Eliminator is simple web application where anyone can make an alert of uncontrolled waste by uploading image and location.",
  },
  {
    title: "How Waste Eliminator works?",
    content: "Waste Eliminator adds a marker on the map when an user posts an alert. According these data uploaded by users, Waste Eliminator will create clusters on the map based on density of alert in a certain area.",
  },
  {
    title: "Why I need to create an account to post an alert?",
    content: "User might post a fake alert. So we need to verify them.",
  },
  {
    title: "Is there any business opportunity?",
    content: "Waste collectors organization can parternship with us and get benefitted with our data.",
  },
  {
    title: "Is this a non profit organization?",
    content: "Yes. This is a non profitable organization.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className={classes.body}>
        <h1>Frequently Ask Question</h1>
      <div className="ui styled accordion">{renderedItems}</div>
    </div>
  );
};

export default Faq;
