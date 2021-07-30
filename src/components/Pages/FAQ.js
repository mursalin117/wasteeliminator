import React, { useState } from "react";

import classes from './FAQ.module.css';

const items = [
  {
    title: "what is React? How it works? Why it works? When it Works? Why me? Why Always me?",
    content: "React is a front end javascript framework",
  },
  {
    title: "why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
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
